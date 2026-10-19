/**
 * Recordatorio diario a las 16:00 (hora de España). Lo lanza Vercel Cron a las 14:00 y 15:00 UTC
 * (ver vercel.json); solo envía la ejecución que cae a las 16 en España. Protegido con CRON_SECRET.
 */
import webpush from 'web-push';
import { adminClient, serverConfigured, json } from './_supabase.js';
import { madridParts, isSendHour, runReminders } from './_reminder-core.js';

export async function GET(request) {
  const secret = process.env.CRON_SECRET;
  if (!secret || request.headers.get('authorization') !== `Bearer ${secret}`) return json({ error: 'No autorizado.' }, 401);
  if (!serverConfigured() || !process.env.VAPID_PRIVATE_KEY || !process.env.PUBLIC_VAPID_PUBLIC_KEY) return json({ skipped: 'sin configurar' });
  const now = new Date();
  const force = new URL(request.url).searchParams.get('force') === '1';
  if (!force && !isSendHour(now)) return json({ skipped: 'no son las 16:00 en España', madrid: madridParts(now) });
  const today = madridParts(now).day;
  webpush.setVapidDetails(process.env.VAPID_SUBJECT || 'mailto:hola@example.com', process.env.PUBLIC_VAPID_PUBLIC_KEY, process.env.VAPID_PRIVATE_KEY);
  const db = adminClient();
  const r = await runReminders({
    today,
    // Paginación por clave (endpoint) para no saltarse filas al ir marcando las ya enviadas.
    page: async (after, size) => {
      const { data, error } = await db.from('push_subscriptions').select('endpoint,p256dh,auth,last_active,streak,last_sent')
        .or(`last_sent.is.null,last_sent.lt.${today}`).gt('endpoint', after).order('endpoint').limit(size);
      if (error) throw new Error('db');
      return data ?? [];
    },
    send: (s, msg) => webpush.sendNotification({ endpoint: s.endpoint, keys: { p256dh: s.p256dh, auth: s.auth } }, JSON.stringify(msg), { TTL: 6 * 3600, urgency: 'normal' }),
    markSent: (endpoint) => db.from('push_subscriptions').update({ last_sent: today }).eq('endpoint', endpoint),
    remove: (endpoint) => db.from('push_subscriptions').delete().eq('endpoint', endpoint),
  }).catch(() => null);
  if (!r) return json({ error: 'Error de base de datos.' }, 500);
  return json({ ok: true, day: today, ...r });
}

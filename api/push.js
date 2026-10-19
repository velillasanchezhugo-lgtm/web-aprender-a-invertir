/**
 * Alta, actividad y baja de las notificaciones diarias (con o sin cuenta).
 * POST { action: 'subscribe' | 'activity' | 'unsubscribe', subscription?, endpoint?, day?, streak? }
 */
import { adminClient, serverConfigured, userFromRequest, json } from './_supabase.js';
import { validSubscription, validDay } from './_reminder-core.js';
import { makeLimiter } from './_tutor-core.js';

const limit = makeLimiter(60, 3600_000);

export async function POST(request) {
  if (!serverConfigured() || !process.env.VAPID_PRIVATE_KEY) return json({ error: 'Las notificaciones no están activadas.' }, 503);
  if (request.headers.get('sec-fetch-site') === 'cross-site') return json({ error: 'Origen no permitido.' }, 403);
  const ip = (request.headers.get('x-forwarded-for') ?? '').split(',')[0].trim() || 'anon';
  if (!limit(ip)) return json({ error: 'Demasiadas peticiones.' }, 429);
  let b; try { b = await request.json(); } catch { return json({ error: 'Petición no válida.' }, 400); }
  const db = adminClient().from('push_subscriptions');
  const day = validDay(b.day) ? b.day : null;
  const streak = Math.max(0, Math.min(10000, Number(b.streak) || 0));

  if (b.action === 'subscribe') {
    if (!validSubscription(b.subscription)) return json({ error: 'Suscripción no válida.' }, 400);
    const user = await userFromRequest(request);
    const s = b.subscription;
    const { error } = await db.upsert({ endpoint: s.endpoint, p256dh: s.keys.p256dh, auth: s.keys.auth, user_id: user?.id ?? null, last_active: day, streak, updated_at: new Date().toISOString() });
    return error ? json({ error: 'No se pudo guardar.' }, 500) : json({ ok: true });
  }
  const endpoint = typeof b.endpoint === 'string' ? b.endpoint : '';
  if (!/^https:\/\//.test(endpoint)) return json({ error: 'Falta la suscripción.' }, 400);
  if (b.action === 'activity') {
    if (!day) return json({ error: 'Fecha no válida.' }, 400);
    const { error } = await db.update({ last_active: day, streak, updated_at: new Date().toISOString() }).eq('endpoint', endpoint);
    return error ? json({ error: 'No se pudo guardar.' }, 500) : json({ ok: true });
  }
  if (b.action === 'unsubscribe') {
    await db.delete().eq('endpoint', endpoint);
    return json({ ok: true });
  }
  return json({ error: 'Acción desconocida.' }, 400);
}

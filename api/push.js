/**
 * Alta, actividad y baja de las notificaciones diarias (con o sin cuenta).
 * POST { action: 'subscribe' | 'activity' | 'unsubscribe', subscription?, endpoint?, auth?, day?, streak? }
 *
 * La dirección (endpoint) y la clave «auth» de la suscripción solo las conoce el navegador que se suscribió:
 * para cambiar la actividad o darse de baja hay que enviar las dos.
 */
import { adminClient, serverConfigured, userFromRequest } from './_supabase.js';
import { validSubscription, validEndpoint, validAuthKey, validDay, subscribeAction } from './_reminder-core.js';
import { makeLimiter } from './_tutor-core.js';
import { json, clientIp, sameOrigin, readJson } from './_guard.js';

const limit = makeLimiter(60, 3600_000);

export async function POST(request) {
  if (!serverConfigured() || !process.env.VAPID_PRIVATE_KEY) return json({ error: 'Las notificaciones no están activadas.' }, 503);
  if (!sameOrigin(request)) return json({ error: 'Origen no permitido.' }, 403);
  if (!limit(clientIp(request))) return json({ error: 'Demasiadas peticiones.' }, 429, { 'Retry-After': '600' });
  const r = await readJson(request, 4_000);
  if (!r.ok) return json({ error: r.error }, r.status);
  const b = r.body;
  const db = adminClient().from('push_subscriptions');
  const day = validDay(b.day) ? b.day : null;
  const streak = Math.max(0, Math.min(10000, Math.floor(Number(b.streak)) || 0));
  const now = new Date().toISOString();

  if (b.action === 'subscribe') {
    if (!validSubscription(b.subscription)) return json({ error: 'Suscripción no válida.' }, 400);
    const user = await userFromRequest(request);
    const s = b.subscription;
    // Sin sesión no se toca user_id: así no se desvincula un aviso de su cuenta.
    const row = { endpoint: s.endpoint, p256dh: s.keys.p256dh, auth: s.keys.auth, last_active: day, streak, updated_at: now, ...(user ? { user_id: user.id } : {}) };
    const { data: existing, error: readError } = await db.select('auth').eq('endpoint', s.endpoint).maybeSingle();
    if (readError) return json({ error: 'No se pudo guardar.' }, 500);
    const action = subscribeAction(existing, s);
    if (action === 'reject') return json({ error: 'Suscripción no válida.' }, 409);
    // Si la fila ya existe, solo se actualiza la que tiene la misma clave «auth».
    const { error } = action === 'update'
      ? await db.update(row).eq('endpoint', s.endpoint).eq('auth', s.keys.auth)
      : await db.insert(row);
    return error ? json({ error: 'No se pudo guardar.' }, 500) : json({ ok: true });
  }
  const endpoint = b.endpoint;
  if (!validEndpoint(endpoint) || !validAuthKey(b.auth)) return json({ error: 'Falta la suscripción.' }, 400);
  if (b.action === 'activity') {
    if (!day) return json({ error: 'Fecha no válida.' }, 400);
    const { error } = await db.update({ last_active: day, streak, updated_at: now }).eq('endpoint', endpoint).eq('auth', b.auth);
    return error ? json({ error: 'No se pudo guardar.' }, 500) : json({ ok: true });
  }
  if (b.action === 'unsubscribe') {
    await db.delete().eq('endpoint', endpoint).eq('auth', b.auth);
    return json({ ok: true });
  }
  return json({ error: 'Acción desconocida.' }, 400);
}

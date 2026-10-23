/** Borrado de la cuenta (y de todo su progreso y avisos). DELETE con el token de sesión. */
import { adminClient, serverConfigured, userFromRequest } from './_supabase.js';
import { makeLimiter } from './_tutor-core.js';
import { json, clientIp, sameOrigin } from './_guard.js';

const limit = makeLimiter(10, 3600_000);

export async function DELETE(request) {
  if (!serverConfigured()) return json({ error: 'Las cuentas no están activadas.' }, 503);
  if (!sameOrigin(request)) return json({ error: 'Origen no permitido.' }, 403);
  if (!limit(clientIp(request))) return json({ error: 'Demasiadas peticiones.' }, 429, { 'Retry-After': '600' });
  const user = await userFromRequest(request);
  if (!user) return json({ error: 'Sesión no válida.' }, 401);
  const db = adminClient();
  await db.from('push_subscriptions').delete().eq('user_id', user.id);
  await db.from('progress').delete().eq('user_id', user.id);
  const { error } = await db.auth.admin.deleteUser(user.id);
  if (error) { console.error('Cuenta: no se pudo borrar', error.status ?? ''); return json({ error: 'No se pudo borrar la cuenta.' }, 500); }
  return json({ ok: true });
}

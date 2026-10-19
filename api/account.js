/** Borrado de la cuenta (y de todo su progreso y avisos). DELETE con el token de sesión. */
import { adminClient, serverConfigured, userFromRequest, json } from './_supabase.js';

export async function DELETE(request) {
  if (!serverConfigured()) return json({ error: 'Las cuentas no están activadas.' }, 503);
  const user = await userFromRequest(request);
  if (!user) return json({ error: 'Sesión no válida.' }, 401);
  const db = adminClient();
  await db.from('push_subscriptions').delete().eq('user_id', user.id);
  await db.from('progress').delete().eq('user_id', user.id);
  const { error } = await db.auth.admin.deleteUser(user.id);
  return error ? json({ error: 'No se pudo borrar la cuenta.' }, 500) : json({ ok: true });
}

/** Cliente de Supabase con la clave de servicio (solo en el servidor; nunca en el navegador). */
import { createClient } from '@supabase/supabase-js';

export const serverConfigured = () => !!(process.env.PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
let admin = null;
export function adminClient() {
  admin ??= createClient(process.env.PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false, autoRefreshToken: false } });
  return admin;
}
/** Usuario a partir del token de sesión que envía el navegador (o null). */
export async function userFromRequest(request) {
  const h = request.headers.get('authorization') ?? '';
  const token = h.startsWith('Bearer ') ? h.slice(7) : '';
  // Un JWT de Supabase tiene tres partes en base64url; lo demás se descarta sin llamar a Supabase.
  if (!token || token.length > 4096 || !/^[\w-]+\.[\w-]+\.[\w-]+$/.test(token) || !serverConfigured()) return null;
  // getUser valida el token en Supabase (firma, caducidad y que la sesión siga abierta).
  const { data, error } = await adminClient().auth.getUser(token).catch(() => ({ data: null, error: true }));
  return error || !data?.user ? null : data.user;
}
export const json = (data, status = 200) => new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' } });

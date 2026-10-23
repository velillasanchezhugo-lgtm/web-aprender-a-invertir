/**
 * Cuenta opcional (Supabase): guarda el progreso en la nube y lo mezcla con el del dispositivo.
 * Solo se carga si las cuentas están configuradas y la persona la usa. Sin cuenta, todo sigue en el navegador.
 */
import { createClient, type SupabaseClient, type Session } from '@supabase/supabase-js';
import { mergeSnapshot, SYNC_KEYS, type Snapshot } from '../lib/sync';

const URL_ = import.meta.env.PUBLIC_SUPABASE_URL as string | undefined;
const KEY = import.meta.env.PUBLIC_SUPABASE_ANON_KEY as string | undefined;
export const accountsEnabled = !!(URL_ && KEY);
export const AUTH_STORAGE_KEY = 'uacademy-auth';

let client: SupabaseClient | null = null;
export function sb(): SupabaseClient {
  if (!accountsEnabled) throw new Error('Cuentas no configuradas');
  client ??= createClient(URL_!, KEY!, { auth: { persistSession: true, storageKey: AUTH_STORAGE_KEY, detectSessionInUrl: true, flowType: 'pkce' } });
  return client;
}

const LAST_SYNC = 'uacademy:last-sync';
function readLocal(): Snapshot {
  const out: Snapshot = {};
  for (const k of SYNC_KEYS) {
    try { const raw = localStorage.getItem(`uacademy:${k}`); if (raw) out[k] = JSON.parse(raw); } catch { /* */ }
  }
  return out;
}
let applying = false;
function writeLocal(s: Snapshot) {
  applying = true;
  try { for (const [k, v] of Object.entries(s)) localStorage.setItem(`uacademy:${k}`, JSON.stringify(v)); } catch { /* */ }
  applying = false;
}
export const lastSync = () => { try { return localStorage.getItem(LAST_SYNC); } catch { return null; } };
const markSynced = () => { try { localStorage.setItem(LAST_SYNC, new Date().toISOString()); } catch { /* */ } window.dispatchEvent(new CustomEvent('uacademy:synced')); };

export async function session(): Promise<Session | null> {
  if (!accountsEnabled) return null;
  const { data } = await sb().auth.getSession();
  return data.session;
}

/** Sube lo del dispositivo. */
export async function push(): Promise<boolean> {
  const s = await session();
  if (!s) return false;
  const { error } = await sb().from('progress').upsert({ user_id: s.user.id, data: readLocal(), updated_at: new Date().toISOString() });
  if (!error) markSynced();
  return !error;
}

/** Baja lo de la cuenta, lo mezcla con lo del dispositivo (sin perder nada) y sube el resultado. */
export async function pull(): Promise<boolean> {
  const s = await session();
  if (!s) return false;
  const { data, error } = await sb().from('progress').select('data').eq('user_id', s.user.id).maybeSingle();
  if (error) return false;
  const merged = mergeSnapshot(readLocal(), (data?.data ?? {}) as Snapshot);
  writeLocal(merged);
  return push();
}

let timer: ReturnType<typeof setTimeout> | undefined;
let started = false;
/** Arranca la sincronización: mezcla al entrar y sube los cambios unos segundos después de cada guardado. */
export async function startSync() {
  if (!accountsEnabled || started) return;
  started = true;
  sb().auth.onAuthStateChange((event) => { if (event === 'SIGNED_IN') pull(); });
  if (await session()) await pull();
  window.addEventListener('uacademy:write', (e) => {
    const key = (e as CustomEvent<string>).detail;
    if (applying || !(SYNC_KEYS as readonly string[]).includes(key)) return;
    clearTimeout(timer);
    timer = setTimeout(() => { push(); }, 2500);
  });
  window.addEventListener('pagehide', () => { if (timer) { clearTimeout(timer); push(); } });
}

/**
 * Pide el enlace mágico. Si Supabase tiene activada la protección CAPTCHA (Authentication → Attack Protection,
 * con Cloudflare Turnstile), hay que pasar el token de Turnstile (ver src/scripts/bot-guard.ts).
 */
export async function signIn(email: string, captchaToken?: string) {
  return sb().auth.signInWithOtp({ email, options: { emailRedirectTo: `${location.origin}/es/cuenta/`, shouldCreateUser: true, ...(captchaToken ? { captchaToken } : {}) } });
}
export async function signOut() { await sb().auth.signOut(); try { localStorage.removeItem(LAST_SYNC); } catch { /* */ } }

/** Borra la cuenta y todo lo guardado en la nube. Lo del dispositivo se queda (se puede borrar aparte). */
export async function deleteAccount(): Promise<boolean> {
  const s = await session();
  if (!s) return false;
  const r = await fetch('/api/account', { method: 'DELETE', headers: { Authorization: `Bearer ${s.access_token}` } });
  if (r.ok) await signOut();
  return r.ok;
}

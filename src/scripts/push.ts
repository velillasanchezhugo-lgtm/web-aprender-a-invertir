/**
 * Recordatorio diario a las 16:00 (hora de España) mediante notificaciones del navegador.
 * Solo si la persona lo activa. Funciona con o sin cuenta. En iPhone requiere añadir la web a la pantalla de inicio.
 */
import { getState } from './academy-store';
import { streak } from '../lib/academy';

const VAPID = import.meta.env.PUBLIC_VAPID_PUBLIC_KEY as string | undefined;
const KEY = 'uacademy:push';
interface PushInfo { endpoint: string; reported?: string }

export const pushConfigured = !!VAPID;
export const pushSupported = () => typeof window !== 'undefined' && 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;
export const isIos = () => /iphone|ipad|ipod/i.test(navigator.userAgent);
export const isStandalone = () => window.matchMedia?.('(display-mode: standalone)').matches || (navigator as any).standalone === true;

const read = (): PushInfo | null => { try { return JSON.parse(localStorage.getItem(KEY) ?? 'null'); } catch { return null; } };
const save = (v: PushInfo | null) => { try { v ? localStorage.setItem(KEY, JSON.stringify(v)) : localStorage.removeItem(KEY); } catch { /* */ } };
export const pushActive = () => !!read() && typeof Notification !== 'undefined' && Notification.permission === 'granted';

function keyBytes(b64: string): Uint8Array {
  const pad = '='.repeat((4 - (b64.length % 4)) % 4);
  const raw = atob((b64 + pad).replace(/-/g, '+').replace(/_/g, '/'));
  return Uint8Array.from(raw, (c) => c.charCodeAt(0));
}
function activityInfo() {
  const s = getState();
  const day = s.activity[s.activity.length - 1] ?? null;
  return { day, streak: day ? streak(s.activity, day).current : 0 };
}
async function authHeader(): Promise<Record<string, string>> {
  try {
    const { accountsEnabled, session } = await import('./account');
    if (!accountsEnabled) return {};
    const s = await session();
    return s ? { Authorization: `Bearer ${s.access_token}` } : {};
  } catch { return {}; }
}
const post = async (body: unknown) => fetch('/api/push', { method: 'POST', headers: { 'Content-Type': 'application/json', ...(await authHeader()) }, body: JSON.stringify(body) });

/** Pide permiso, se suscribe y registra la suscripción. Devuelve un mensaje para mostrar si algo falla. */
export async function enablePush(): Promise<{ ok: boolean; message?: string }> {
  try { return await subscribe(); }
  catch { return { ok: false, message: 'Tu navegador no ha permitido activar las notificaciones. Revisa los permisos o usa el recordatorio de calendario.' }; }
}
async function subscribe(): Promise<{ ok: boolean; message?: string }> {
  if (!pushConfigured) return { ok: false, message: 'Las notificaciones aún no están activadas en esta web. Usa el recordatorio de calendario.' };
  if (!pushSupported()) return { ok: false, message: isIos() && !isStandalone() ? 'En iPhone, primero añade esta web a tu pantalla de inicio (Compartir → Añadir a pantalla de inicio) y actívalas desde allí.' : 'Tu navegador no permite notificaciones. Usa el recordatorio de calendario.' };
  const perm = await Notification.requestPermission();
  if (perm !== 'granted') return { ok: false, message: 'No has dado permiso para las notificaciones. Puedes cambiarlo en los ajustes del navegador.' };
  const reg = await navigator.serviceWorker.register('/sw.js');
  await navigator.serviceWorker.ready;
  const sub = (await reg.pushManager.getSubscription()) ?? (await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: keyBytes(VAPID!) as BufferSource }));
  const { day, streak: st } = activityInfo();
  const r = await post({ action: 'subscribe', subscription: sub.toJSON(), day, streak: st }).catch(() => null);
  if (!r?.ok) { await sub.unsubscribe().catch(() => {}); return { ok: false, message: 'No hemos podido activar el recordatorio. Inténtalo más tarde.' }; }
  save({ endpoint: sub.endpoint, reported: day ?? undefined });
  return { ok: true };
}

export async function disablePush() {
  const info = read();
  try {
    const reg = await navigator.serviceWorker.getRegistration('/sw.js');
    const sub = await reg?.pushManager.getSubscription();
    await sub?.unsubscribe();
  } catch { /* */ }
  if (info) await post({ action: 'unsubscribe', endpoint: info.endpoint }).catch(() => null);
  save(null);
}

/** Cuando estudias, avisa al servidor (una vez al día) para que hoy no te mande el recordatorio. */
export function watchActivity() {
  const report = async () => {
    const info = read();
    if (!info) return;
    const { day, streak: st } = activityInfo();
    if (!day || info.reported === day) return;
    const r = await post({ action: 'activity', endpoint: info.endpoint, day, streak: st }).catch(() => null);
    if (r?.ok) save({ ...info, reported: day });
  };
  window.addEventListener('uacademy:write', (e) => { if ((e as CustomEvent<string>).detail === 'academy') report(); });
  report();
}

/**
 * Protección anti-robots sin rastreo para los formularios que llaman a la red (tutor, corrector, cuenta).
 *
 * 1. Campo trampa (honeypot): un campo oculto que una persona no ve ni rellena; muchos robots sí.
 * 2. Tiempo mínimo: una persona tarda más de un segundo en escribir y enviar.
 * 3. Cloudflare Turnstile (opcional): solo si existe PUBLIC_TURNSTILE_SITE_KEY. Sin esa clave no se carga nada externo.
 *
 * El servidor repite las comprobaciones 1 y 2 (api/_guard.js) y verifica el token de Turnstile si tiene su clave secreta.
 */
export const MIN_FILL_MS = 1200;
const SITE_KEY = (import.meta.env.PUBLIC_TURNSTILE_SITE_KEY ?? '') as string;
export const turnstileEnabled = !!SITE_KEY;

export interface Guard {
  /** Datos para el servidor: { hp, ms }. */
  payload(): { hp: string; ms: number };
  /** true si el campo trampa está relleno o se envía demasiado deprisa. */
  suspicious(): boolean;
}

/** Añade el campo trampa a un contenedor (formulario o bloque) y empieza a contar el tiempo. */
export function guard(host: HTMLElement): Guard {
  const started = performance.now();
  let hp = host.querySelector<HTMLInputElement>('input[data-hp]');
  if (!hp) {
    const wrap = document.createElement('div');
    wrap.setAttribute('aria-hidden', 'true');
    wrap.style.cssText = 'position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden';
    const label = document.createElement('label');
    label.textContent = 'No rellenes este campo';
    hp = document.createElement('input');
    hp.type = 'text'; hp.name = 'ua_hp_url'; hp.tabIndex = -1; hp.autocomplete = 'off'; hp.dataset.hp = '1';
    label.append(hp); wrap.append(label); host.append(wrap);
  }
  const field = hp;
  const ms = () => Math.round(performance.now() - started);
  return {
    payload: () => ({ hp: field.value, ms: ms() }),
    suspicious: () => !!field.value || ms() < MIN_FILL_MS,
  };
}

/** Espera lo que falte hasta el tiempo mínimo (para quien pulsa un ejemplo nada más entrar). */
export async function waitMinimum(g: Guard) {
  const left = MIN_FILL_MS - g.payload().ms;
  if (left > 0) await new Promise((r) => setTimeout(r, left + 50));
}

let loader: Promise<any> | null = null;
function loadTurnstile(): Promise<any> {
  loader ??= new Promise((resolve, reject) => {
    const w = window as any;
    if (w.turnstile) return resolve(w.turnstile);
    const s = document.createElement('script');
    s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    s.async = true;
    s.onload = () => (w.turnstile ? resolve(w.turnstile) : reject(new Error('turnstile')));
    s.onerror = () => { loader = null; reject(new Error('turnstile')); };
    document.head.append(s);
  });
  return loader;
}

/**
 * Token de un solo uso de Turnstile, o undefined si no está configurado.
 * El reto solo se muestra si Cloudflare lo necesita (appearance: interaction-only), dentro de `host`.
 */
export async function turnstileToken(host: HTMLElement): Promise<string | undefined> {
  if (!SITE_KEY) return undefined;
  const ts = await loadTurnstile();
  let box = host.querySelector<HTMLElement>('[data-turnstile]');
  if (!box) { box = document.createElement('div'); box.dataset.turnstile = '1'; host.append(box); }
  return new Promise((resolve, reject) => {
    let id: string | undefined;
    const done = (fn: () => void) => { try { if (id) ts.remove(id); } catch { /* */ } fn(); };
    id = ts.render(box, {
      sitekey: SITE_KEY,
      appearance: 'interaction-only',
      language: 'es',
      callback: (t: string) => done(() => resolve(t)),
      'error-callback': () => done(() => reject(new Error('turnstile'))),
      'expired-callback': () => done(() => reject(new Error('turnstile'))),
      'timeout-callback': () => done(() => reject(new Error('turnstile'))),
    });
  });
}

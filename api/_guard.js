/**
 * Defensas comunes de las funciones de api/ (sin dependencias). Se prueban en tests/guard.test.ts.
 *
 * - clientIp: IP del visitante según las cabeceras que pone Vercel (no las que envía el cliente).
 * - sameOrigin: rechaza llamadas desde otras webs (que gastarían la cuota de la IA con visitas ajenas).
 * - readJson: lee el cuerpo con un tamaño máximo y exige un objeto JSON.
 * - botCheck: campo trampa (honeypot) y tiempo mínimo desde que se abrió el formulario.
 * - verifyTurnstile: Cloudflare Turnstile opcional; solo actúa si existe TURNSTILE_SECRET_KEY.
 * - makeBudget: tope diario de llamadas por instancia (control de gasto de la IA).
 * - safeEqual: comparación de secretos en tiempo constante.
 *
 * Los límites por instancia son de mejor esfuerzo: el límite real va en el cortafuegos de Vercel (docs/SEGURIDAD.md).
 */
import { createHash, timingSafeEqual } from 'node:crypto';

export const json = (data, status = 200, extra = {}) => new Response(JSON.stringify(data), {
  status,
  headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff', ...extra },
});

/** IP del visitante. En Vercel, x-vercel-forwarded-for y x-real-ip las pone la plataforma. */
export function clientIp(request) {
  const h = (k) => (request.headers.get(k) ?? '').split(',')[0].trim();
  return (h('x-vercel-forwarded-for') || h('x-real-ip') || h('x-forwarded-for') || 'anon').slice(0, 64);
}

/**
 * Solo peticiones de la propia web. Un navegador siempre envía Origin en un POST con fetch;
 * si viene de otro dominio (o Sec-Fetch-Site dice cross-site), se rechaza.
 */
export function sameOrigin(request) {
  const site = request.headers.get('sec-fetch-site');
  if (site === 'cross-site' || site === 'same-site') return false;
  const origin = request.headers.get('origin');
  if (!origin) return true;
  let host = '';
  try { host = new URL(origin).host; } catch { return false; }
  const own = request.headers.get('x-forwarded-host') || request.headers.get('host') || (() => { try { return new URL(request.url).host; } catch { return ''; } })();
  return !!own && host === own;
}

/**
 * Lee el cuerpo como JSON con un tamaño máximo (en bytes).
 * Devuelve { ok: true, body } o { ok: false, status, error }.
 */
export async function readJson(request, maxBytes = 32_000) {
  const declared = Number(request.headers.get('content-length') || 0);
  if (declared > maxBytes) return { ok: false, status: 413, error: 'La petición es demasiado grande.' };
  let text;
  try { text = await request.text(); } catch { return { ok: false, status: 400, error: 'Petición no válida.' }; }
  if (Buffer.byteLength(text, 'utf8') > maxBytes) return { ok: false, status: 413, error: 'La petición es demasiado grande.' };
  let body;
  try { body = JSON.parse(text); } catch { return { ok: false, status: 400, error: 'Petición no válida.' }; }
  if (!body || typeof body !== 'object' || Array.isArray(body)) return { ok: false, status: 400, error: 'Petición no válida.' };
  return { ok: true, body };
}

/** Tiempo mínimo (ms) entre abrir la página o el formulario y enviarlo. Una persona tarda más; un robot simple, no. */
export const MIN_FILL_MS = 1200;

/**
 * Campo trampa y tiempo mínimo. El navegador envía bot = { hp: valor del campo oculto, ms: tiempo transcurrido }.
 * Devuelve null si parece una persona o un texto con el motivo si no.
 */
export function botCheck(body, minMs = MIN_FILL_MS) {
  const b = body && typeof body.bot === 'object' && body.bot ? body.bot : null;
  if (!b) return 'falta la comprobación';
  if (typeof b.hp !== 'string' || b.hp.length) return 'campo trampa';
  const ms = Number(b.ms);
  if (!Number.isFinite(ms) || ms < minMs) return 'demasiado rápido';
  return null;
}

export const turnstileEnabled = () => !!process.env.TURNSTILE_SECRET_KEY;

/**
 * Comprueba el token de Cloudflare Turnstile. Si no hay TURNSTILE_SECRET_KEY, no se exige (devuelve true).
 * fetchImpl se inyecta en las pruebas.
 */
export async function verifyTurnstile(token, ip, fetchImpl = fetch) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (typeof token !== 'string' || !token || token.length > 2048) return false;
  try {
    const form = new URLSearchParams({ secret, response: token });
    if (ip && ip !== 'anon') form.set('remoteip', ip);
    const r = await fetchImpl('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body: form, signal: AbortSignal.timeout(5000) });
    const d = await r.json();
    return d?.success === true;
  } catch {
    return false;
  }
}

/** Tope de llamadas por día (UTC) en esta instancia, para todas las IP juntas. */
export function makeBudget(maxPerDay = 1000) {
  let day = '', used = 0;
  return (now = new Date()) => {
    const d = now.toISOString().slice(0, 10);
    if (d !== day) { day = d; used = 0; }
    if (used >= maxPerDay) return false;
    used++;
    return true;
  };
}

/** Comparación en tiempo constante (también si las longitudes difieren). */
export function safeEqual(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') return false;
  const ha = createHash('sha256').update(a).digest();
  const hb = createHash('sha256').update(b).digest();
  return timingSafeEqual(ha, hb) && a.length === b.length;
}

/** Cabecera Authorization: Bearer <secreto> comparada en tiempo constante. */
export function bearerMatches(request, secret) {
  if (!secret) return false;
  const h = request.headers.get('authorization') ?? '';
  return safeEqual(h, `Bearer ${secret}`);
}

/** Entero positivo de una variable de entorno, con valor por defecto. */
export const envInt = (name, def) => {
  const n = Number(process.env[name]);
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : def;
};

/**
 * Política de seguridad del contenido (CSP) de umotion Academy. Ver docs/SEGURIDAD.md.
 *
 * Funciona en dos capas que el navegador aplica a la vez (un recurso tiene que pasar las dos):
 * 1. Cabecera `Content-Security-Policy` en vercel.json: fija y amplia. Lleva lo que una etiqueta
 *    <meta> no puede llevar (`frame-ancestors`) y el techo de orígenes permitidos.
 * 2. Etiqueta <meta http-equiv="Content-Security-Policy"> que scripts/postbuild-check.mjs inserta en
 *    cada página tras compilar: estricta y exacta. Solo permite los scripts en línea de esa página
 *    (por su huella sha256) y los orígenes que la configuración de esta compilación necesita
 *    (Supabase si hay cuentas, Google solo si la publicidad está activa).
 *
 * Si al activar AdSense la consola avisa de un dominio bloqueado, añádelo a ADS_* aquí y en vercel.json
 * (tests/security-headers.test.ts comprueba que coinciden).
 */
import { createHash } from 'node:crypto';

/** Orígenes de Google AdSense y su CMP (Privacidad y mensajes). Solo se usan con la publicidad activa. */
export const ADS_SCRIPT = [
  'https://pagead2.googlesyndication.com',
  'https://*.googlesyndication.com',
  'https://*.google.com',
  'https://*.gstatic.com',
  'https://*.googleadservices.com',
  'https://*.doubleclick.net',
  'https://*.adtrafficquality.google',
  // Dominios que el código de AdSense también usa: etiquetas de Google y el servidor de anuncios de google.es (visitas desde España).
  'https://*.googletagservices.com',
  'https://adservice.google.es',
];
export const ADS_CONNECT = [...ADS_SCRIPT];
export const ADS_FRAME = [
  'https://*.googlesyndication.com',
  'https://*.google.com',
  'https://*.doubleclick.net',
  'https://*.adtrafficquality.google',
];

/** Cloudflare Turnstile (anti-robots opcional): solo con PUBLIC_TURNSTILE_SITE_KEY. Script e iframe del mismo origen. */
export const TURNSTILE = ['https://challenges.cloudflare.com'];

/** Techo para la cuenta: proyectos de Supabase en su dominio estándar. Un dominio propio de Supabase exige añadirlo aquí y en vercel.json. */
export const SUPABASE_CEILING = ['https://*.supabase.co', 'wss://*.supabase.co'];

/** Scripts que el navegador ejecuta (los bloques de datos como application/ld+json no se ejecutan ni necesitan huella). */
const EXECUTABLE = new Set(['', 'text/javascript', 'application/javascript', 'module']);

/** Devuelve el contenido de cada <script> en línea ejecutable del HTML. */
export function inlineScripts(html) {
  const out = [];
  for (const m of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi)) {
    const attrs = m[1];
    if (/\ssrc\s*=/i.test(' ' + attrs)) continue;
    const type = (attrs.match(/\btype\s*=\s*["']?([^"'\s>]+)/i)?.[1] ?? '').toLowerCase();
    if (!EXECUTABLE.has(type)) continue;
    out.push(m[2]);
  }
  return out;
}

export const sha256 = (text) => `'sha256-${createHash('sha256').update(text, 'utf8').digest('base64')}'`;

/** Origen (esquema + dominio) de una URL, o null si no es válida. */
export function originOf(url) {
  try { const u = new URL(url); return u.protocol === 'https:' ? u.origin : null; } catch { return null; }
}

/**
 * Política estricta de una página. `scripts`: contenidos en línea de la página.
 * `ads`: publicidad activa. `supabaseUrl`: PUBLIC_SUPABASE_URL de la compilación (vacío si no hay cuentas).
 * `turnstile`: hay clave de sitio de Cloudflare Turnstile.
 */
export function pagePolicy({ scripts = [], ads = false, supabaseUrl = '', turnstile = false } = {}) {
  const hashes = [...new Set(scripts.map(sha256))].sort();
  const sb = originOf(supabaseUrl);
  const connect = ["'self'", ...(sb ? [sb, sb.replace(/^https:/, 'wss:')] : []), ...(ads ? ADS_CONNECT : [])];
  const frames = [...(ads ? ADS_FRAME : []), ...(turnstile ? TURNSTILE : [])];
  return [
    `script-src 'self' ${[...hashes, ...(ads ? ADS_SCRIPT : []), ...(turnstile ? TURNSTILE : [])].join(' ')}`.trim(),
    `connect-src ${connect.join(' ')}`,
    `frame-src ${frames.length ? frames.join(' ') : "'none'"}`,
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join('; ');
}

/** Cabecera fija de vercel.json (techo común a todas las compilaciones). */
export function headerPolicy() {
  return [
    "default-src 'self'",
    `script-src 'self' 'unsafe-inline' ${[...ADS_SCRIPT, ...TURNSTILE].join(' ')}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https:",
    "font-src 'self' data:",
    `connect-src 'self' ${[...SUPABASE_CEILING, ...ADS_CONNECT].join(' ')}`,
    `frame-src ${[...ADS_FRAME, ...TURNSTILE].join(' ')}`,
    "worker-src 'self'",
    "manifest-src 'self'",
    "media-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    'upgrade-insecure-requests',
  ].join('; ');
}

/** Inserta la <meta> de la CSP justo después de <meta charset>, antes de cualquier script. */
export function injectMeta(html, policy) {
  const tag = `<meta http-equiv="Content-Security-Policy" content="${policy.replace(/"/g, '&quot;')}">`;
  const cleaned = html.replace(/<meta http-equiv="Content-Security-Policy"[^>]*>/i, '');
  const m = cleaned.match(/<meta charset=[^>]*>/i);
  if (!m) return null;
  return cleaned.replace(m[0], m[0] + tag);
}

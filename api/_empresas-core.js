/**
 * Área «Formación para empresas»: alta de empresas, contraseña y sesión. Sin dependencias, para poder probarlo.
 *
 * - La contraseña de cada empresa es «umotion» + su nombre (sin espacios, tildes ni mayúsculas: «umotion Café Luna»
 *   y «umotioncafeluna» valen igual).
 * - Las empresas se dan de alta en la variable de entorno EMPRESAS_ACCESS (JSON), nunca en el repositorio:
 *   [{"slug":"cafe-luna","name":"Café Luna","hash":"<hmac>","programs":[…]}]. El hash se calcula con
 *   `npm run empresas:alta -- "Café Luna"` y la clave EMPRESAS_SECRET, que también firma la sesión.
 * - La sesión es una cookie HttpOnly solo para /api/empresas, firmada y con caducidad.
 */
import { createHmac, timingSafeEqual } from 'node:crypto';

export const PREFIX = 'umotion';
export const SESSION_HOURS = 12;
export const COOKIE = 'ua_emp';

/** Quita tildes, espacios, signos y mayúsculas. */
export const normalize = (s) => String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9ñ]/g, '');

export const slugify = (name) => String(name ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 48);

/** Hash de una contraseña con la clave del servidor (no se guarda la contraseña). */
export const passwordHash = (password, secret) => createHmac('sha256', secret).update(normalize(password)).digest('hex');

/** Entrada para EMPRESAS_ACCESS a partir del nombre de la empresa. */
export function companyEntry(name, secret) {
  return { slug: slugify(name), name: String(name).trim(), hash: passwordHash(PREFIX + name, secret), programs: [] };
}

const sameHex = (a, b) => {
  if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) return false;
  return timingSafeEqual(Buffer.from(a), Buffer.from(b));
};

/** Lee EMPRESAS_ACCESS; descarta entradas mal formadas. */
export function parseCompanies(raw) {
  let list;
  try { list = JSON.parse(raw || '[]'); } catch { return []; }
  if (!Array.isArray(list)) return [];
  return list
    .filter((c) => c && typeof c.slug === 'string' && /^[a-z0-9-]{1,48}$/.test(c.slug) && typeof c.name === 'string' && c.name.length <= 120 && typeof c.hash === 'string' && /^[0-9a-f]{64}$/.test(c.hash))
    .map((c) => ({ slug: c.slug, name: c.name, hash: c.hash, programs: Array.isArray(c.programs) ? c.programs.filter(validProgram).slice(0, 20) : [] }));
}
const validProgram = (p) => p && typeof p.id === 'string' && /^[a-z0-9-]{1,48}$/.test(p.id) && typeof p.title === 'string' && p.title.length <= 120;

/** Empresa cuya contraseña coincide, o null. Compara con todas para no dar pistas por el tiempo de respuesta. */
export function findCompany(companies, password, secret) {
  if (typeof password !== 'string' || password.length > 200) return null;
  const n = normalize(password);
  if (!n.startsWith(PREFIX) || n.length <= PREFIX.length) return null;
  const h = passwordHash(password, secret);
  let found = null;
  for (const c of companies) if (sameHex(c.hash, h) && !found) found = c;
  return found;
}

/** Sesión firmada: slug.caducidad.firma */
export function signSession(slug, secret, now = Date.now(), hours = SESSION_HOURS) {
  const exp = Math.floor(now / 1000) + hours * 3600;
  const body = `${slug}.${exp}`;
  return `${body}.${createHmac('sha256', secret).update(body).digest('base64url')}`;
}
export function verifySession(token, secret, now = Date.now()) {
  if (typeof token !== 'string' || token.length > 200) return null;
  const m = /^([a-z0-9-]{1,48})\.(\d{1,12})\.([A-Za-z0-9_-]{43})$/.exec(token);
  if (!m) return null;
  const expected = createHmac('sha256', secret).update(`${m[1]}.${m[2]}`).digest('base64url');
  if (!sameHex(m[3], expected)) return null;
  if (Number(m[2]) * 1000 <= now) return null;
  return m[1];
}

export function readCookie(request, name = COOKIE) {
  const raw = request.headers.get('cookie') ?? '';
  for (const part of raw.split(';')) {
    const [k, ...v] = part.trim().split('=');
    if (k === name) return v.join('=');
  }
  return null;
}
export const sessionCookie = (token, hours = SESSION_HOURS) => `${COOKIE}=${token}; Path=/api/empresas; HttpOnly; Secure; SameSite=Strict; Max-Age=${hours * 3600}`;
export const clearCookie = () => `${COOKIE}=; Path=/api/empresas; HttpOnly; Secure; SameSite=Strict; Max-Age=0`;

/** Lo que ve la empresa al entrar: nunca el hash. */
export const publicView = (c) => ({ name: c.name, slug: c.slug, programs: c.programs });

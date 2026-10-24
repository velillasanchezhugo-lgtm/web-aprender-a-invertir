/**
 * Área «Formación para empresas» (ver api/_empresas-core.js).
 * POST {password, bot} → entra y deja la cookie de sesión · GET → {active, session} y los datos de la empresa si hay sesión · DELETE → sale.
 * Desactivada hasta que existan EMPRESAS_SECRET y EMPRESAS_ACCESS en Vercel.
 */
import { json, clientIp, sameOrigin, readJson, botCheck } from './_guard.js';
import { makeLimiter } from './_tutor-core.js';
import { parseCompanies, findCompany, signSession, verifySession, readCookie, sessionCookie, clearCookie, publicView } from './_empresas-core.js';

// Pocos intentos: la contraseña sigue un patrón conocido, así que el límite es lo que frena adivinarla.
const tries = makeLimiter(5, 15 * 60_000);
const reads = makeLimiter(60, 60_000);

const config = () => {
  const secret = process.env.EMPRESAS_SECRET ?? '';
  return secret.length >= 32 ? { secret, companies: parseCompanies(process.env.EMPRESAS_ACCESS) } : null;
};
const off = () => json({ error: 'El área de empresas aún no está activada.' }, 503);

export async function POST(request) {
  const cfg = config();
  if (!cfg) return off();
  if (!sameOrigin(request)) return json({ error: 'Origen no permitido.' }, 403);
  if (!tries(clientIp(request))) return json({ error: 'Demasiados intentos. Espera unos minutos.' }, 429, { 'Retry-After': '900' });
  const r = await readJson(request, 2_000);
  if (!r.ok) return json({ error: r.error }, r.status);
  const body = r.body;
  if (botCheck(body)) return json({ error: 'No hemos podido comprobar el acceso. Inténtalo de nuevo.' }, 400);
  const company = findCompany(cfg.companies, body.password, cfg.secret);
  if (!company) return json({ error: 'La contraseña no es correcta.' }, 401);
  return json(publicView(company), 200, { 'Set-Cookie': sessionCookie(signSession(company.slug, cfg.secret)) });
}

// GET responde 200 aunque no haya sesión ({session:false}) o el área esté apagada ({active:false}): no es un error.
export async function GET(request) {
  const cfg = config();
  if (!cfg) return json({ active: false });
  if (!reads(clientIp(request))) return json({ error: 'Demasiadas peticiones.' }, 429);
  const slug = verifySession(readCookie(request), cfg.secret);
  const company = slug && cfg.companies.find((c) => c.slug === slug);
  if (!company) return json({ active: true, session: false });
  return json({ active: true, session: true, ...publicView(company) });
}

export async function DELETE(request) {
  if (!sameOrigin(request)) return json({ error: 'Origen no permitido.' }, 403);
  return json({ ok: true }, 200, { 'Set-Cookie': clearCookie() });
}

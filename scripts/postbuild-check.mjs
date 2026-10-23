/**
 * Tras compilar: genera sitemap.xml (solo páginas indexables, con hreflang si hay traducción),
 * genera ads.txt si hay cliente de AdSense configurado, y comprueba la calidad técnica:
 * títulos y descripciones únicos, canonical, enlaces internos rotos y scripts de terceros.
 * Además inserta en cada página su política de seguridad del contenido (CSP) estricta: ver scripts/csp.mjs.
 */
import { readdirSync, readFileSync, writeFileSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { inlineScripts, pagePolicy, injectMeta } from './csp.mjs';

const DIST = 'dist';
const site = (process.env.SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://umotion-academy.example')).replace(/\/$/, '');
const adsClient = process.env.PUBLIC_ADSENSE_CLIENT || '';
const adsEnabled = process.env.PUBLIC_ADS_ENABLED === 'true' && /^ca-pub-\d{10,20}$/.test(adsClient);

function walk(dir) {
  return readdirSync(dir).flatMap((f) => { const p = join(dir, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
}
const files = walk(DIST);
const html = files.filter((f) => f.endsWith('.html'));
const all = new Set(files.map((f) => '/' + f.slice(DIST.length + 1).replace(/\\/g, '/')));
const errors = [], warnings = [];
const titles = new Map(), descs = new Map();
const urls = [];

const supabaseUrl = process.env.PUBLIC_SUPABASE_URL && process.env.PUBLIC_SUPABASE_ANON_KEY ? process.env.PUBLIC_SUPABASE_URL : '';
let inlineCount = 0;
for (const f of html) {
  const route = '/' + f.slice(DIST.length + 1).replace(/index\.html$/, '').replace(/\\/g, '/');
  const raw = readFileSync(f, 'utf8');
  const scripts = inlineScripts(raw);
  inlineCount += scripts.length;
  const withCsp = injectMeta(raw, pagePolicy({ scripts, ads: adsEnabled, supabaseUrl }));
  if (withCsp === null) errors.push(`${route}: sin <meta charset>; no se ha podido insertar la CSP`);
  else if (withCsp !== raw) writeFileSync(f, withCsp);
  const s = withCsp ?? raw;
  const prototype = /data-prototype="true"/.test(s);
  const noindex = !prototype && /<meta name="robots" content="noindex/.test(s);
  const title = s.match(/<title>([^<]*)<\/title>/)?.[1];
  const desc = s.match(/<meta name="description" content="([^"]*)"/)?.[1];
  if (!title) errors.push(`${route}: sin <title>`);
  if (!desc) errors.push(`${route}: sin meta description`);
  if (!noindex && route !== '/404.html') {
    if (!/<link rel="canonical"/.test(s)) errors.push(`${route}: sin canonical`);
    if (titles.has(title)) errors.push(`Título duplicado: «${title}» en ${route} y ${titles.get(title)}`); else titles.set(title, route);
    if (descs.has(desc)) errors.push(`Descripción duplicada en ${route} y ${descs.get(desc)}`); else descs.set(desc, route);
    if (desc && (desc.length < 50 || desc.length > 175)) warnings.push(`${route}: descripción de ${desc.length} caracteres`);
    const alts = [...s.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => ({ lang: m[1], href: m[2] }));
    urls.push({ loc: site + route, alts });
  }
  if (!/<html lang="/.test(s)) errors.push(`${route}: falta lang en <html>`);
  if ((s.match(/<h1[\s>]/g) || []).length !== 1 && !route.endsWith('/') ) {}
  const h1 = (s.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1 && route !== '/') warnings.push(`${route}: ${h1} encabezados h1`);
  for (const m of s.matchAll(/href="(\/[^"#?]*)/g)) {
    const u = m[1];
    if (u.startsWith('/_astro/') || u === '/') continue;
    const candidates = [u, u.endsWith('/') ? u + 'index.html' : u + '/index.html'];
    if (!candidates.some((c) => all.has(c))) errors.push(`${route}: enlace interno roto ${u}`);
  }
  const ext = [...s.matchAll(/<script[^>]+src="(https?:[^"]+)"/g)].map((m) => m[1]);
  if (!adsEnabled && ext.length) errors.push(`${route}: carga scripts externos con la publicidad desactivada: ${ext.join(', ')}`);
  if (/fonts\.googleapis|google-analytics|googletagmanager/.test(s)) errors.push(`${route}: referencia a un servicio de Google no previsto`);
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.sort((a, b) => a.loc.localeCompare(b.loc)).map((u) => `  <url><loc>${u.loc}</loc>${u.alts.map((a) => `<xhtml:link rel="alternate" hreflang="${a.lang}" href="${a.href}"/>`).join('')}</url>`).join('\n')}\n</urlset>\n`;
writeFileSync(join(DIST, 'sitemap.xml'), xml);
if (adsEnabled) writeFileSync(join(DIST, 'ads.txt'), `google.com, ${adsClient.replace('ca-', '')}, DIRECT, f08c47fec0942fa0\n`);
else if (existsSync(join(DIST, 'ads.txt'))) errors.push('ads.txt presente sin configuración de AdSense');

// security.txt (RFC 9116): el contacto sale de SECURITY_CONTACT (mailto: o https:), nunca se inventa.
const secTxt = join(DIST, '.well-known', 'security.txt');
if (!existsSync(secTxt)) errors.push('Falta /.well-known/security.txt');
else {
  const contact = (process.env.SECURITY_CONTACT || '').trim();
  const txt = readFileSync(secTxt, 'utf8');
  if (/^(mailto:[^\s@]+@[^\s@]+\.[^\s@]+|https:\/\/\S+)$/.test(contact)) writeFileSync(secTxt, txt.replace('PENDIENTE-SECURITY-CONTACT', contact));
  else {
    if (contact) errors.push('SECURITY_CONTACT debe empezar por mailto: o https://');
    warnings.push('security.txt sin contacto: define SECURITY_CONTACT (mailto:… o https://…) en Vercel.');
  }
  const exp = txt.match(/^Expires: (\S+)/m)?.[1];
  if (!exp || Date.parse(exp) < Date.now()) errors.push('security.txt caducado: actualiza «Expires» en public/.well-known/security.txt');
  else if (Date.parse(exp) - Date.now() < 60 * 86400000) warnings.push('security.txt caduca en menos de 60 días: renueva «Expires».');
}

console.log(`CSP estricta insertada en ${html.length} páginas (${inlineCount} scripts en línea con huella).`);
console.log(`Comprobadas ${html.length} páginas; ${urls.length} indexables en sitemap.xml${adsEnabled ? '; ads.txt generado' : '; publicidad desactivada (sin ads.txt)'}.`);
if (html.some((f) => /data-prototype="true"/.test(readFileSync(f, 'utf8')))) warnings.push('Modo prototipo: todas las páginas llevan noindex y robots.txt bloquea el rastreo (PUBLIC_INDEXABLE=true para publicar).');
if (site.includes('umotion-academy.example')) warnings.push('SITE_URL no definida: canonical y sitemap usan https://umotion-academy.example');
warnings.forEach((w) => console.warn('AVISO: ' + w));
if (errors.length) { errors.forEach((e) => console.error('ERROR: ' + e)); process.exit(1); }

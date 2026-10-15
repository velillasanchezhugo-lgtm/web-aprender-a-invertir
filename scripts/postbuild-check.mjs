/**
 * Tras compilar: genera sitemap.xml (solo páginas indexables, con hreflang si hay traducción),
 * genera ads.txt si hay cliente de AdSense configurado, y comprueba la calidad técnica:
 * títulos y descripciones únicos, canonical, enlaces internos rotos y scripts de terceros.
 */
import { readdirSync, readFileSync, writeFileSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const site = (process.env.SITE_URL || 'https://criterio.example').replace(/\/$/, '');
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

for (const f of html) {
  const s = readFileSync(f, 'utf8');
  const route = '/' + f.slice(DIST.length + 1).replace(/index\.html$/, '').replace(/\\/g, '/');
  const noindex = /<meta name="robots" content="noindex/.test(s);
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

console.log(`Comprobadas ${html.length} páginas; ${urls.length} indexables en sitemap.xml${adsEnabled ? '; ads.txt generado' : '; publicidad desactivada (sin ads.txt)'}.`);
if (site.includes('criterio.example')) warnings.push('SITE_URL no definida: canonical y sitemap usan https://criterio.example');
warnings.forEach((w) => console.warn('AVISO: ' + w));
if (errors.length) { errors.forEach((e) => console.error('ERROR: ' + e)); process.exit(1); }

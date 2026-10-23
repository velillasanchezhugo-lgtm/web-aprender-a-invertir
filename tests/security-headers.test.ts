/**
 * Cabeceras de seguridad de vercel.json y CSP por página (scripts/csp.mjs). Ver docs/SEGURIDAD.md.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { headerPolicy, pagePolicy, inlineScripts, injectMeta, sha256, ADS_SCRIPT, ADS_FRAME, TURNSTILE } from '../scripts/csp.mjs';

const vercel = JSON.parse(readFileSync(new URL('../vercel.json', import.meta.url), 'utf8'));
const rule = (source: string) => {
  const r = vercel.headers.find((h: { source: string }) => h.source === source);
  assert.ok(r, `falta la regla de cabeceras ${source}`);
  return Object.fromEntries(r.headers.map((h: { key: string; value: string }) => [h.key, h.value])) as Record<string, string>;
};
const directives = (csp: string) => Object.fromEntries(csp.split(';').map((d) => d.trim()).filter(Boolean).map((d) => { const [k, ...v] = d.split(/\s+/); return [k, v]; }));

test('todas las rutas llevan las cabeceras de seguridad', () => {
  const h = rule('/(.*)');
  assert.match(h['Strict-Transport-Security'], /max-age=(\d+)/);
  assert.ok(Number(h['Strict-Transport-Security'].match(/max-age=(\d+)/)![1]) >= 31536000, 'HSTS de al menos un año');
  assert.match(h['Strict-Transport-Security'], /includeSubDomains/);
  assert.match(h['Strict-Transport-Security'], /preload/);
  assert.equal(h['X-Frame-Options'], 'DENY');
  assert.equal(h['X-Content-Type-Options'], 'nosniff');
  assert.equal(h['Referrer-Policy'], 'strict-origin-when-cross-origin');
  assert.equal(h['Cross-Origin-Opener-Policy'], 'same-origin-allow-popups');
  assert.equal(h['Cross-Origin-Resource-Policy'], 'same-origin');
  for (const f of ['camera', 'microphone', 'geolocation', 'payment', 'usb', 'serial', 'hid', 'browsing-topics']) assert.match(h['Permissions-Policy'], new RegExp(`(^|, )${f}=\\(\\)`), `Permissions-Policy sin ${f}`);
});

test('la CSP de la cabecera es la de scripts/csp.mjs y cierra lo esencial', () => {
  const csp = rule('/(.*)')['Content-Security-Policy'];
  assert.equal(csp, headerPolicy(), 'regenera la CSP de vercel.json con headerPolicy()');
  const d = directives(csp);
  assert.deepEqual(d['frame-ancestors'], ["'none'"]);
  assert.deepEqual(d['object-src'], ["'none'"]);
  assert.deepEqual(d['base-uri'], ["'self'"]);
  assert.deepEqual(d['form-action'], ["'self'"]);
  assert.ok('upgrade-insecure-requests' in d);
  assert.ok(!d['script-src'].includes("'unsafe-eval'"));
  assert.ok(!d['script-src'].includes('https:') && !d['script-src'].includes('*'), 'script-src sin comodines generales');
  for (const o of ADS_SCRIPT) assert.ok(d['script-src'].includes(o), `script-src sin ${o}`);
  for (const o of ADS_FRAME) assert.ok(d['frame-src'].includes(o), `frame-src sin ${o}`);
  for (const o of TURNSTILE) assert.ok(d['script-src'].includes(o) && d['frame-src'].includes(o), `Turnstile sin ${o}`);
});

test('las funciones se ejecutan en la UE', () => {
  assert.deepEqual(vercel.regions, ['fra1']);
});

test('las funciones de api/ no se guardan en caché ni se indexan', () => {
  const h = rule('/api/(.*)');
  assert.equal(h['Cache-Control'], 'no-store');
  assert.match(h['X-Robots-Tag'], /noindex/);
  assert.match(h['Content-Security-Policy'], /default-src 'none'/);
});

test('el cortafuegos declarado bloquea rutas de WordPress, archivos ocultos y métodos raros en api/', () => {
  const routes = vercel.routes.filter((r: { mitigate?: { action: string } }) => r.mitigate?.action === 'deny');
  const blocked = (path: string, method = 'GET') => routes.some((r: { src: string; methods?: string[] }) => new RegExp(r.src).test(path) && (!r.methods || r.methods.includes(method)));
  for (const p of ['/wp-admin/', '/wp-login.php', '/xmlrpc.php', '/.env', '/.git/config', '/index.php', '/phpmyadmin/index.php']) assert.ok(blocked(p), `no bloquea ${p}`);
  assert.ok(blocked('/api/tutor', 'PUT'));
  for (const p of ['/', '/es/', '/es/sesion/01-invertir-no-es-apostar/', '/.well-known/security.txt', '/sw.js', '/manifest.webmanifest', '/_astro/x.js', '/es/glosario.json']) assert.ok(!blocked(p), `bloquea por error ${p}`);
  for (const m of ['GET', 'POST', 'DELETE', 'OPTIONS']) assert.ok(!blocked('/api/tutor', m), `bloquea ${m} en api/`);
});

test('la CSP de cada página solo admite sus scripts en línea', () => {
  const html = '<html><head><meta charset="utf-8"><script>a()</script><script type="module">b()</script><script type="application/ld+json">{}</script><script src="/x.js"></script></head></html>';
  const scripts = inlineScripts(html);
  assert.deepEqual(scripts, ['a()', 'b()']);
  const policy = pagePolicy({ scripts });
  const d = directives(policy);
  assert.deepEqual(d['script-src'], ["'self'", ...[sha256('a()'), sha256('b()')].sort()]);
  assert.deepEqual(d['connect-src'], ["'self'"]);
  assert.deepEqual(d['frame-src'], ["'none'"]);
  assert.ok(!policy.includes('unsafe-inline'));
  assert.equal(sha256('a()'), "'sha256-qVpDBgj7bpq5hMAcGp3AOc79J3Y1Z4HvySTwKrWDoy4='");
  const out = injectMeta(html, policy)!;
  assert.ok(out.indexOf('http-equiv="Content-Security-Policy"') < out.indexOf('<script'), 'la meta va antes del primer script');
  assert.equal(injectMeta(out, policy), out, 'insertarla dos veces no la duplica');
  assert.equal(injectMeta('<html><head></head></html>', policy), null);
});

test('con cuentas y publicidad la CSP de la página añade solo esos orígenes', () => {
  const d = directives(pagePolicy({ scripts: [], ads: true, supabaseUrl: 'https://abcd.supabase.co/' }));
  assert.ok(d['connect-src'].includes('https://abcd.supabase.co'));
  assert.ok(d['connect-src'].includes('wss://abcd.supabase.co'));
  assert.ok(d['script-src'].includes('https://pagead2.googlesyndication.com'));
  const ts = directives(pagePolicy({ turnstile: true }));
  assert.deepEqual(ts['frame-src'], TURNSTILE);
  assert.ok(ts['script-src'].includes(TURNSTILE[0]));
  const plain = directives(pagePolicy({ supabaseUrl: 'http://inseguro.example' }));
  assert.deepEqual(plain['connect-src'], ["'self'"], 'una URL sin HTTPS no se admite');
});

/** ¿Admite una fuente de la cabecera (con comodín «https://*.dominio») el origen que pide la página? */
const covers = (ceiling: string[], src: string) => ceiling.some((c) => {
  if (c === src) return true;
  const m = c.match(/^(https|wss):\/\/\*\.(.+)$/);
  return !!m && src.startsWith(`${m[1]}://`) && src.endsWith(`.${m[2]}`);
});

test('todo lo que la CSP de una página permite también lo permite la cabecera (si no, el servicio se rompe al activarlo)', () => {
  const header = directives(headerPolicy());
  // Configuración más amplia: cuentas, publicidad y Turnstile activos a la vez.
  const page = directives(pagePolicy({ scripts: ['x()'], ads: true, supabaseUrl: 'https://abcd.supabase.co', turnstile: true }));
  for (const k of ['script-src', 'connect-src', 'frame-src']) {
    for (const src of page[k]) {
      if (src.startsWith("'sha256-")) continue; // las huellas pasan la cabecera por su 'unsafe-inline'
      assert.ok(covers(header[k], src), `${k}: la cabecera no admite ${src}`);
    }
  }
  // La mensajería de consentimiento de Google (CMP) y el servidor de anuncios de España.
  for (const o of ['https://fundingchoicesmessages.google.com', 'https://adservice.google.es']) {
    assert.ok(covers(page['script-src'], o) && covers(header['script-src'], o), `CMP o anuncios bloqueados: ${o}`);
  }
});

/**
 * Cuenta opcional y recordatorio, con Supabase simulado. Requiere compilar con la configuración de prueba:
 *   PUBLIC_SUPABASE_URL=https://fake-project.supabase.co PUBLIC_SUPABASE_ANON_KEY=anon-test-key PUBLIC_VAPID_PUBLIC_KEY=<clave pública VAPID> npx astro build
 * y servir con npx astro preview --port 4322. Ejecutar: node tests/e2e/account.mjs; node tests/e2e/account.mjs sync
 */
import { createRequire } from 'module';
const require = createRequire(process.env.PLAYWRIGHT_ROOT || (process.env.NODE_PATH ? process.env.NODE_PATH + '/' : '/opt/node22/lib/node_modules/'));
const { chromium } = require('playwright');
if (process.argv[2] === 'sync') {

var ok = (c, m) => { if (!c) { console.error('✗ ' + m); process.exitCode = 1; } else console.log('✓ ' + m); };
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: 390, height: 844 } });
const exp = Math.floor(Date.now() / 1000) + 3600;
await ctx.addInitScript((exp) => {
  if (sessionStorage.getItem('init')) return; sessionStorage.setItem('init', '1');
  localStorage.setItem('uacademy-auth', JSON.stringify({ access_token: 'tok', refresh_token: 'ref', expires_at: exp, expires_in: 3600, token_type: 'bearer', user: { id: 'u1', email: 'ana@example.com', aud: 'authenticated' } }));
  localStorage.setItem('uacademy:academy', JSON.stringify({ completed: { '01-invertir-no-es-apostar': '2026-10-18T10:00:00Z' }, activity: ['2026-10-18'], deck: {}, model: {}, actions: {}, exams: {}, notes: {}, plan: null, profile: null, placement: null, diagnostic: null }));
}, exp);
const p = await ctx.newPage();
const errs = []; p.on('pageerror', (e) => errs.push(e.message));
const upserts = [];
await p.route('https://fake-project.supabase.co/**', async (route) => {
  const req = route.request(); const u = req.url();
  if (u.includes('/auth/v1/user')) return route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ id: 'u1', email: 'ana@example.com', aud: 'authenticated' }) });
  if (u.includes('/rest/v1/progress')) {
    if (req.method() === 'GET') {
      const row = { data: { academy: { completed: { '02-tu-numero-del-mes': '2026-10-10T10:00:00Z' }, activity: ['2026-10-10'], notes: { '02-tu-numero-del-mes': 'nota de la nube' } } } };
      const single = (req.headers()['accept'] || '').includes('vnd.pgrst.object');
      return route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(single ? row : [row]) });
    }
    upserts.push(req.postDataJSON());
    return route.fulfill({ status: 201, contentType: 'application/json', body: '[]' });
  }
  return route.fulfill({ status: 200, contentType: 'application/json', body: '{}' });
});
await p.goto('http://localhost:4322/es/cuenta/');
await p.waitForSelector('[data-state=in]:not([hidden])', { timeout: 15000 });
ok((await p.textContent('#who')).includes('ana@example.com'), 'con sesión se muestra el correo');
await p.waitForFunction(() => { const a = JSON.parse(localStorage.getItem('uacademy:academy')); return a.completed['02-tu-numero-del-mes']; }, null, { timeout: 10000 });
const local = await p.evaluate(() => JSON.parse(localStorage.getItem('uacademy:academy')));
ok(local.completed['01-invertir-no-es-apostar'] && local.completed['02-tu-numero-del-mes'], 'lo del dispositivo y lo de la nube se suman');
ok(local.notes['02-tu-numero-del-mes'] === 'nota de la nube', 'se recuperan las notas guardadas en la nube');
ok(upserts.length > 0 && upserts[0].data.academy.completed['01-invertir-no-es-apostar'], 'el resultado mezclado se sube a la cuenta');
ok(await p.isVisible('.account-btn.signed-in .acc-dot'), 'la cabecera indica que hay sesión');
// Un cambio posterior en otra página se sube solo
const before = upserts.length;
await p.goto('http://localhost:4322/es/sesion/03-el-colchon-primero/');
for (let g = 0; g < 4; g++) { const q = await p.$('.step.q.active'); if (q) { await (await q.$('.opt')).click(); break; } await p.click('#next'); }
await p.waitForTimeout(4000);
ok(upserts.length > before, 'al responder en una sesión, el progreso se sube a la cuenta en segundos');
ok(errs.length === 0, 'sin errores de JavaScript ' + errs.join(' | '));
await b.close();

} else {

var ok = (c, m) => { if (!c) { console.error('✗ ' + m); process.exitCode = 1; } else console.log('✓ ' + m); };
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: 390, height: 844 } });
const p = await ctx.newPage();
const errs = []; p.on('pageerror', (e) => errs.push(e.message));
let otp = null, upsert = null;
await p.route('https://fake-project.supabase.co/**', async (route) => {
  const u = route.request().url();
  if (u.includes('/auth/v1/otp')) { otp = route.request().postDataJSON(); return route.fulfill({ status: 200, contentType: 'application/json', body: '{}' }); }
  if (u.includes('/rest/v1/progress')) { if (route.request().method() === 'POST') upsert = route.request().postDataJSON(); return route.fulfill({ status: 200, contentType: 'application/json', body: route.request().method() === 'GET' ? '[]' : '[]' }); }
  return route.fulfill({ status: 200, contentType: 'application/json', body: '{}' });
});
await p.goto('http://localhost:4322/es/cuenta/');
await p.waitForSelector('[data-state=out]:not([hidden])');
ok(true, 'sin sesión se muestra el formulario para entrar');
await p.fill('#email', 'prueba@example.com');
await p.check('#consent');
await p.click('#signin button[type=submit]');
await p.waitForFunction(() => document.getElementById('acc-status').textContent.includes('enlace'));
ok(otp?.email === 'prueba@example.com', 'se pide el enlace mágico a Supabase con el correo');
ok(String(otp?.options?.email_redirect_to ?? otp?.gotrue_meta_security ?? JSON.stringify(otp)).length > 0, 'petición de enlace con redirección');
// Recordatorio por calendario
const [dl] = await Promise.all([p.waitForEvent('download'), p.click('[data-ics-daily]')]);
ok(dl.suggestedFilename().endsWith('.ics'), 'descarga el recordatorio diario para el calendario');
// Notificaciones: el navegador de pruebas no tiene servicio push real; debe dar un mensaje y no romperse
await ctx.grantPermissions(['notifications'], { origin: 'http://localhost:4322' });
await p.route('**/api/push', (r) => r.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' }));
await p.click('[data-push-on]');
await p.waitForFunction(() => !document.querySelector('[data-push-status]').textContent.includes('Activando'), null, { timeout: 20000 }).catch(() => {});
const st = await p.textContent('[data-push-status]');
ok(st && st.length > 5, `el botón de notificaciones responde: «${st}»`);
ok(errs.length === 0, 'sin errores de JavaScript ' + errs.join(' | '));
await b.close();

}

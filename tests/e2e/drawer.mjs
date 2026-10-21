/** Panel «Formaciones»: botón de tres líneas arriba a la izquierda, Inversión → 3 niveles → módulos. */
import { createRequire } from 'module';
const require = createRequire(process.env.PLAYWRIGHT_ROOT || '/opt/node22/lib/node_modules/');
const { chromium } = require('playwright');
const BASE = process.env.BASE || 'http://localhost:4322';
const SHOTS = process.env.SHOTS;
const b = await chromium.launch();
const errs = [];
const ok = (c, m) => { if (!c) { console.error('✗ ' + m); process.exitCode = 1; } else console.log('✓ ' + m); };

for (const [w, h, name] of [[390, 844, 'móvil'], [1366, 900, 'escritorio']]) {
  const ctx = await b.newContext({ viewport: { width: w, height: h }, reducedMotion: 'reduce' }); const p = await ctx.newPage();
  p.on('pageerror', (e) => errs.push(e.message));
  await p.goto(BASE + '/es/');
  const btn = p.locator('[data-drawer-open]');
  const box = await btn.boundingBox(); const brand = await p.locator('.site-header .brand').boundingBox();
  ok(box && brand && box.x < brand.x && box.y < 60, `${name}: botón de formaciones arriba a la izquierda, antes del logo`);
  ok(await p.locator('#drawer').getAttribute('inert') !== null, `${name}: el panel empieza cerrado`);
  await btn.click();
  await p.waitForSelector('#drawer.open');
  const dr = await p.locator('.drawer').boundingBox();
  ok(dr && dr.x <= 1, `${name}: el panel se abre desde la izquierda`);
  ok(await btn.getAttribute('aria-expanded') === 'true', `${name}: aria-expanded se actualiza`);
  const levels = p.locator('details.course > .levels > li > a.lv');
  ok(await levels.count() === 3, `${name}: Inversión muestra 3 niveles`);
  ok(JSON.stringify(await levels.evaluateAll((as) => as.map((x) => x.getAttribute('href')))) === JSON.stringify(['/es/nivel-1/', '/es/nivel-2/', '/es/nivel-3/']), `${name}: cada nivel lleva a su página de presentación`);
  ok(await p.locator('.drawer').getByText('99 €').count() > 0, `${name}: el Nivel 3 indica la certificación a 99 €`);
  ok(await p.locator('.drawer .price-off s').count() === 2, `${name}: los precios de pago salen tachados mientras no se cobra`);
  if (SHOTS) await p.screenshot({ path: `${SHOTS}/drawer-${w}.png` });
  await p.keyboard.press('Escape');
  await p.waitForFunction(() => !document.getElementById('drawer').classList.contains('open'));
  ok(await p.evaluate(() => document.activeElement?.hasAttribute('data-drawer-open')), `${name}: Escape cierra y devuelve el foco`);
  await ctx.close();
}
// Pulsar un nivel abre su presentación, y ese nivel queda marcado
const ctx = await b.newContext({ viewport: { width: 390, height: 844 } }); const p = await ctx.newPage();
p.on('pageerror', (e) => errs.push(e.message));
await p.goto(BASE + '/es/'); await p.click('[data-drawer-open]'); await p.waitForSelector('#drawer.open');
await Promise.all([p.waitForURL('**/es/nivel-1/'), p.click('a.lv[href="/es/nivel-1/"]')]);
ok(await p.locator('h1').textContent() === 'Invertir por tu cuenta', 'el Nivel 1 tiene su página de presentación');
ok(await p.locator('.stages .tracks a').count() === 9, 'la presentación del Nivel 1 enlaza sus 9 módulos');
await p.click('[data-drawer-open]'); await p.waitForSelector('#drawer.open');
ok(await p.locator('a.lv[href="/es/nivel-1/"]').getAttribute('aria-current') === 'page', 'en el Nivel 1, su nivel aparece marcado');
if (SHOTS) { await p.keyboard.press('Escape'); await p.screenshot({ path: `${SHOTS}/nivel-1.png`, fullPage: true }); }
ok(errs.length === 0, 'sin errores de JavaScript' + (errs.length ? ': ' + errs.join('; ') : ''));
await b.close();

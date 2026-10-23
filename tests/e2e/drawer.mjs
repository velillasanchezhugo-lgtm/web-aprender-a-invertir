/** Panel «Formaciones» (botón de tres líneas arriba a la izquierda, cada formación → 3 niveles) y pósits de la portada. */
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
  const btn = p.locator('.site-header [data-drawer-open]');
  const box = await btn.boundingBox(); const brand = await p.locator('.site-header .brand').boundingBox();
  ok(box && brand && box.x < brand.x && box.y < 60, `${name}: botón de formaciones arriba a la izquierda, antes del logo`);
  ok(await p.locator('#drawer').getAttribute('inert') !== null, `${name}: el panel empieza cerrado`);
  await btn.click();
  await p.waitForSelector('#drawer.open');
  const dr = await p.locator('.drawer').boundingBox();
  ok(dr && dr.x <= 1, `${name}: el panel se abre desde la izquierda`);
  ok(await btn.getAttribute('aria-expanded') === 'true', `${name}: aria-expanded se actualiza`);
  const hrefs = (f) => p.locator(`details.course[data-formation="${f}"] > .levels > li > a.lv`).evaluateAll((as) => as.map((x) => x.getAttribute('href')));
  ok(JSON.stringify(await hrefs('inversion')) === JSON.stringify(['/es/nivel-1/', '/es/nivel-2/', '/es/nivel-3/']), `${name}: Inversión muestra sus 3 niveles, cada uno con su página`);
  ok(JSON.stringify(await hrefs('emprendimiento')) === JSON.stringify(['/es/emprendimiento/nivel-1/', '/es/emprendimiento/nivel-2/', '/es/emprendimiento/nivel-3/']), `${name}: Emprendimiento muestra sus 3 niveles, cada uno con su página`);
  ok(JSON.stringify(await hrefs('claude')) === JSON.stringify(['/es/claude/nivel-1/', '/es/claude/nivel-2/', '/es/claude/nivel-3/']), `${name}: Claude muestra sus 3 niveles, cada uno con su página`);
  ok(JSON.stringify(await hrefs('chatgpt')) === JSON.stringify(['/es/chatgpt/nivel-1/', '/es/chatgpt/nivel-2/', '/es/chatgpt/nivel-3/']), `${name}: ChatGPT muestra sus 3 niveles, cada uno con su página`);
  ok(await p.locator('details.course[open]').count() === 0, `${name}: en la portada no se abre ninguna formación`);
  ok(await p.locator('.drawer').getByText('99 €').count() > 0, `${name}: el Nivel 3 indica la certificación a 99 €`);
  ok(await p.locator('.drawer .price-off s').count() === 8, `${name}: los precios de pago salen tachados mientras no se cobra`);
  if (SHOTS) await p.screenshot({ path: `${SHOTS}/drawer-${w}.png` });
  await p.keyboard.press('Escape');
  await p.waitForFunction(() => !document.getElementById('drawer').classList.contains('open'));
  ok(await p.evaluate(() => document.activeElement?.closest('.site-header')?.querySelector('[data-drawer-open]') === document.activeElement), `${name}: Escape cierra y devuelve el foco`);
  // Pósits de la portada, justo después del párrafo de bienvenida
  const pits = p.locator('.hero .postits a.postit');
  ok(await pits.count() === 4, `${name}: la portada muestra un pósit por formación`);
  ok(await p.evaluate(() => document.querySelector('.hero .lede')?.nextElementSibling?.classList.contains('postits-nav')), `${name}: los pósits van debajo del párrafo`);
  const pb = await pits.evaluateAll((as) => as.map((a) => ({ w: a.offsetWidth, h: a.offsetHeight, href: a.getAttribute("href") })));
  ok(pb.every((r) => r.w > 120 && Math.abs(r.w - r.h) < 2), `${name}: los pósits son cuadrados (${pb.map((r) => Math.round(r.w) + 'x' + Math.round(r.h)).join(', ')})`);
  ok(pb.map((r) => r.href).join() === '/es/inversion/,/es/emprendimiento/,/es/claude/,/es/chatgpt/', `${name}: cada pósit lleva a su formación`);
  if (SHOTS) await p.locator('.hero').screenshot({ path: `${SHOTS}/postits-${w}.png` });
  await ctx.close();
}
// Pulsar un nivel abre su presentación, y ese nivel queda marcado
const ctx = await b.newContext({ viewport: { width: 390, height: 844 } }); const p = await ctx.newPage();
p.on('pageerror', (e) => errs.push(e.message));
await p.goto(BASE + '/es/'); await p.click('.site-header [data-drawer-open]'); await p.waitForSelector('#drawer.open');
await p.click('details.course[data-formation="inversion"] > summary');
await Promise.all([p.waitForURL('**/es/nivel-1/'), p.click('a.lv[href="/es/nivel-1/"]')]);
ok(await p.locator('h1').textContent() === 'Invertir por tu cuenta', 'el Nivel 1 tiene su página de presentación');
ok(await p.locator('.stages .tracks a').count() === 9, 'la presentación del Nivel 1 enlaza sus 9 módulos');
await p.click('.site-header [data-drawer-open]'); await p.waitForSelector('#drawer.open');
ok(await p.locator('a.lv[href="/es/nivel-1/"]').getAttribute('aria-current') === 'page', 'en el Nivel 1, su nivel aparece marcado');
if (SHOTS) { await p.keyboard.press('Escape'); await p.screenshot({ path: `${SHOTS}/nivel-1.png`, fullPage: true }); }
// Emprendimiento: pósit → formación → Nivel 1 → módulo → sesión, y el progreso se guarda aparte
await p.goto(BASE + '/es/');
await Promise.all([p.waitForURL('**/es/emprendimiento/'), p.click('a.postit[href="/es/emprendimiento/"]')]);
ok(await p.locator('h1').textContent() === 'Emprendimiento', 'el pósit de Emprendimiento abre su formación');
await p.click('.site-header [data-drawer-open]'); await p.waitForSelector('#drawer.open');
ok(await p.locator('details.course[data-formation="emprendimiento"]').getAttribute('open') !== null, 'dentro de Emprendimiento, el panel abre esa formación');
await Promise.all([p.waitForURL('**/es/emprendimiento/nivel-1/'), p.click('a.lv[href="/es/emprendimiento/nivel-1/"]')]);
ok(await p.locator('h1').textContent() === 'Emprender desde cero', 'el Nivel 1 de Emprendimiento tiene su página');
ok(await p.locator('.stages .tracks a').count() === 10, 'la presentación enlaza sus 10 módulos');
await Promise.all([p.waitForURL('**/modulos/em-cero/'), p.click('.stages .tracks a[href$="/em-cero/"]')]);
await Promise.all([p.waitForURL('**/emprendimiento/sesion/**'), p.click('#m-start')]);
ok(await p.locator('.player[data-store="academy-emprendimiento"]').count() === 1, 'las sesiones de Emprendimiento guardan su progreso aparte');
ok(await p.locator('.tutor-link').count() === 0, 'sin enlace al tutor de inversión');
for (let i = 0; i < 20 && await p.locator('#next').isVisible(); i++) {
  const q = p.locator('.step.q.active');
  if (await q.count()) await q.locator('.opt').first().click();
  await p.click('#next');
}
const saved = await p.evaluate(() => ({ em: Object.keys(JSON.parse(localStorage.getItem('uacademy:academy-emprendimiento') || '{}').completed ?? {}).length, inv: Object.keys(JSON.parse(localStorage.getItem('uacademy:academy') || '{}').completed ?? {}).length }));
ok(saved.em === 1 && saved.inv === 0, `al terminar la sesión cuenta en Emprendimiento y no en Inversión (${JSON.stringify(saved)})`);
// Pantallas de inicio de cada formación: «Entrar en la formación» primero y un cuadrado por apartado
for (const [path, min, first] of [['/es/inversion/', 10, '/es/sesion/'], ['/es/claude/', 4, '/es/claude/sesion/'], ['/es/emprendimiento/', 3, '/es/emprendimiento/sesion/']]) {
  await p.goto(BASE + path);
  const sq = await p.locator('.hub-hero a.postit').evaluateAll((as) => as.map((a) => ({ id: a.id, href: a.getAttribute('href') })));
  ok(sq[0]?.id === 'hub-go' && sq.length > min, `${path}: primero «Entrar en la formación» y luego ${sq.length - 1} apartados`);
}
// En Emprendimiento ya hay una sesión hecha: el cuadrado lleva a la siguiente
await p.goto(BASE + '/es/emprendimiento/');
const go = await p.locator('#hub-go').evaluate((a) => ({ href: a.getAttribute('href'), t: a.textContent }));
ok(go.t.includes('Continuar') && go.href.includes('/es/emprendimiento/sesion/') && !go.href.includes('em-c01'), `«Entrar» continúa donde lo dejaste (${go.href})`);
ok(await p.locator('.site-header .main-nav .hub-link, .site-header .hub-chip').first().textContent() === 'Emprendimiento', 'la cabecera muestra la formación en la que estás');
await p.goto(BASE + '/es/');
ok(await p.isVisible('#resume') && (await p.textContent('#resume')).includes('Emprendimiento'), 'la portada ofrece continuar la formación empezada');
ok(await p.locator('.bottom-bar > *').count() === 4, 'la barra del móvil es general: inicio, formaciones, buscar y cuenta');
ok(errs.length === 0, 'sin errores de JavaScript' + (errs.length ? ': ' + errs.join('; ') : ''));
await b.close();

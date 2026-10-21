/** Currículo v1.2: opciones apiladas, objetivos múltiples, plan en una página, examen N1, insignia y niveles 2 y 3. */
import { createRequire } from 'module';
const require = createRequire(process.env.PLAYWRIGHT_ROOT || '/opt/node22/lib/node_modules/');
const { chromium } = require('playwright');
const BASE = process.env.BASE || 'http://localhost:4322';
const SHOTS = process.env.SHOTS;
const b = await chromium.launch(); const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' }); const p = await ctx.newPage();
const errs = []; p.on('pageerror', (e) => errs.push(e.message));
const ok = (c, m) => { if (!c) { console.error('✗ ' + m); process.exitCode = 1; } else console.log('✓ ' + m); };
const state = () => p.evaluate(() => JSON.parse(localStorage.getItem('uacademy:academy') || 'null'));

// 1. Varios objetivos y opciones apiladas en el diagnóstico
await p.goto(BASE + '/es/empezar/');
await p.click('label.goal:has(input[value=jubilacion])');
await p.click('label.goal:has(input[value=miedo])');
for (let i = 0; i < 3; i++) await p.click('#fwd');
await p.click('#diag-start');
await p.waitForSelector('#diag-q .rq-opt, #diag-q .rq-check');
const boxes = await p.$$eval('#diag-q .rq-opt', (os) => os.map((o) => o.getBoundingClientRect()).map((r) => ({ top: r.top, bottom: r.bottom, left: r.left, width: r.width })));
if (boxes.length >= 2) {
  ok(boxes.every((r, i) => i === 0 || r.top >= boxes[i - 1].bottom + 6), 'las opciones salen una debajo de otra, con espacio');
  ok(boxes.every((r) => r.width > 250), 'cada opción ocupa todo el ancho');
}
if (SHOTS) await p.screenshot({ path: SHOTS + '/opts.png' });
await p.click('#fwd'); await p.waitForSelector('.wz-step.result.active');
let st = await state();
ok(JSON.stringify(st.profile.goals) === JSON.stringify(['entender', 'jubilacion', 'miedo']), 'se guardan varios objetivos');

// 2. Mi plan en una página
await p.goto(BASE + '/es/plan-en-una-pagina/');
const inputs = await p.$$('#opp input, #opp textarea');
for (const el of inputs) await el.fill('Respuesta de prueba');
for (const sel of await p.$$('#opp select')) await sel.selectOption('si');
await p.waitForFunction(() => JSON.parse(localStorage.getItem('uacademy:one-page-plan') || '{}').complete === true);
ok(true, 'el plan en una página se guarda completo');

// 3. Examen N1: bloqueado sin Camino Cero; después, aprobado contestando bien
await p.goto(BASE + '/es/examen/n1/');
ok(await p.isDisabled('#ex-start'), 'sin el Camino Cero el examen está bloqueado');
await p.evaluate(() => { const s = JSON.parse(localStorage.getItem('uacademy:academy')); s.exams = { ...(s.exams || {}), cero: { correct: 14, total: 14, at: new Date().toISOString(), passed: true } }; localStorage.setItem('uacademy:academy', JSON.stringify(s)); });
await p.reload();
ok(!(await p.isDisabled('#ex-start')), 'con el examen del Camino Cero aprobado se puede hacer');
const bank = await p.evaluate(() => JSON.parse(document.getElementById('ex-data').textContent).bank);
await p.click('#ex-start');
for (let i = 0; i < 30; i++) {
  await p.waitForSelector('#ex-q .rq-text');
  const text = (await p.textContent('#ex-q .rq-text')).trim();
  const q = bank.find((x) => x.q.trim() === text);
  const opts = await p.$$('#ex-q .rq-opt');
  if (q.type === 'choice') await opts[q.answer].click();
  else if (q.type === 'truefalse') await opts[q.answer ? 0 : 1].click();
  else await p.click('#ex-q .rq-check');
  await p.click('#ex-next');
}
await p.waitForSelector('#ex-result:not([hidden])');
ok((await p.textContent('#ex-result')).includes('Nivel 1 superado'), 'el examen del Nivel 1 se aprueba contestando bien');
ok((await p.$$eval('.caps li', (l) => l.length)) === 12, 'el resultado muestra las 12 capacidades');
st = await state();
ok(st.exams.n1?.passed && st.exams.n1.total === 30, 'se guarda el aprobado con 30 preguntas');
if (SHOTS) await p.screenshot({ path: SHOTS + '/n1.png', fullPage: true });

// 4. Insignia
await p.goto(BASE + '/es/insignia/');
ok(await p.isVisible('#badge'), 'aparece la insignia');
await p.fill('#name', 'Ana Prueba');
ok((await p.textContent('#bc-name')) === 'Ana Prueba', 'la insignia lleva el nombre');
ok(await p.isVisible('#ck-exam.done') && await p.isVisible('#ck-plan.done'), 'la lista de cierre marca examen y plan');
if (SHOTS) await p.screenshot({ path: SHOTS + '/insignia.png', fullPage: true });

// 5. Niveles y temarios
await p.goto(BASE + '/es/niveles/');
ok((await p.$$eval('.tiers > li', (l) => l.length)) === 3, 'tres niveles');
await p.goto(BASE + '/es/nivel-2/');
ok((await p.$$eval('.it', (l) => l.length)) === 66, 'el Nivel 2 muestra sus 66 clases');
ok((await p.$$eval('.it.open', (l) => l.length)) === 2, 'con 2 muestras abiertas');
await p.click('[data-interest]');
ok((await p.textContent('[data-interest]')).includes('Apuntado'), 'el botón de interés responde');
await p.goto(BASE + '/es/nivel-3/');
ok((await p.$$eval('.it', (l) => l.length)) === 56 && (await p.$$eval('.it.open', (l) => l.length)) === 1, 'el Nivel 3 muestra 56 lecciones y 1 muestra');
ok((await p.textContent('.legal')).includes('No es una titulación oficial'), 'el aviso del certificado está visible');
await p.goto(BASE + '/es/nivel-2/n2-car-01-del-objetivo-al-reparto/');
await p.waitForSelector('.qs .rq .rq-opt');
ok((await p.$$eval('.qs .rq', (l) => l.length)) >= 5, 'la clase de muestra tiene su test');
ok(await p.isVisible('.teach'), 'y el bloque «Cómo explicarlo»');
if (SHOTS) await p.screenshot({ path: SHOTS + '/clase.png', fullPage: true });
await p.goto(BASE + '/es/sesion/mr-07-tu-plan-definitivo/');
ok((await p.$$('a[href="/es/plan-en-una-pagina/"]')).length > 0, 'la última sesión enlaza al plan en una página');

ok(errs.length === 0, 'sin errores de JavaScript ' + errs.join(' | '));
await b.close();

/** Personalización: perfil + diagnóstico adaptativo → ruta, mapa de competencias, sesión con caso, tutor guiado y módulos. */
import { createRequire } from 'module';
const require = createRequire(process.env.PLAYWRIGHT_ROOT || '/opt/node22/lib/node_modules/');
const { chromium } = require('playwright');
const BASE = process.env.BASE || 'http://localhost:4322';
const SHOTS = process.env.SHOTS;
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
const errs = []; p.on('pageerror', (e) => errs.push(e.message));
const ok = (c, m) => { if (!c) { console.error('✗ ' + m); process.exitCode = 1; } else console.log('✓ ' + m); };
const state = () => p.evaluate(() => JSON.parse(localStorage.getItem('uacademy:academy') || 'null'));

// 1. Asistente con perfil y diagnóstico
await p.goto(BASE + '/es/empezar/');
await p.click('label.goal:has(input[value=jubilacion])');
await p.click('#fwd');
await p.click('label.goal:has(input[value=algo])');
await p.click('label.int:has(input[value=noticias])');
await p.click('label.int:has(input[value=empresas])');
await p.click('#fwd');
await p.click('#fwd');
await p.click('#diag-start');
let n = 0;
for (; n < 12; n++) {
  if (await p.isVisible('#diag-done')) break;
  await p.waitForSelector('#diag-q .rq-text');
  if (n % 3 === 2) { await p.click('#diag-dk'); continue; }
  const opt = await p.$('#diag-q .rq-opt');
  if (opt) await opt.click(); else await p.click('#diag-q .rq-check');
  await p.click('#diag-next');
}
ok(await p.isVisible('#diag-done'), `el diagnóstico termina (${n} preguntas)`);
await p.click('#fwd');
await p.waitForSelector('.wz-step.result.active');
ok((await p.$$eval('#dmap li', (l) => l.length)) === 9, 'el resultado muestra el mapa de las 9 áreas');
ok((await p.$$eval('#plan-list li', (l) => l.length)) > 0, 'el resultado muestra las próximas sesiones');
ok((await p.textContent('#why')).includes('Por qué'), 'explica por qué empieza por esa sesión');
if (SHOTS) await p.screenshot({ path: SHOTS + '/ad-wz.png', fullPage: true });
let st = await state();
ok(st.profile?.experience === 'algo' && st.profile.interests.includes('noticias') && st.profile.interests.includes('empresas'), 'se guarda el perfil con experiencia e intereses');
ok(Object.keys(st.model).length >= 8, `el diagnóstico alimenta el modelo (${Object.keys(st.model).length} competencias)`);
ok(st.plan.order.length > 40 && new Set(st.plan.order).size === st.plan.order.length, `la ruta incluye todas las sesiones una vez (${st.plan.order.length})`);
ok(st.plan.order.some((id) => id.startsWith('no-')) && st.plan.order.some((id) => id.startsWith('ya-')), 'la ruta incluye los módulos nuevos');

// 2. Mi plan adaptativo
await p.goto(BASE + '/es/mi-plan/');
ok((await p.textContent('#t-title')).trim() !== '—', 'Mi plan propone una sesión');
ok((await p.$$eval('#t-why li', (l) => l.length)) > 0, 'y explica por qué');
ok((await p.$$eval('#dmap li', (l) => l.length)) === 9, 'Mi plan muestra el mapa de competencias');
if (SHOTS) await p.screenshot({ path: SHOTS + '/ad-plan.png', fullPage: true });

// 3. Sesión con caso práctico; un fallo ofrece el tutor y actualiza el modelo
await p.goto(BASE + '/es/sesion/no-01-hecho-dato-opinion/');
const before = (await state()).model['hecho-opinion']?.n ?? 0;
let sawScenario = false, sawTutor = false;
for (let g = 0; g < 15; g++) {
  if (await p.isVisible('.step.finish.active')) break;
  if (await p.isVisible('.scenario-step.active')) sawScenario = true;
  const q = await p.$('.step.q.active');
  if (q) {
    const wrong = await q.$('.opt:not([data-correct])');
    if (wrong && !sawTutor) { await wrong.click(); sawTutor = await q.isVisible('.tutor-link'); }
    else if (await q.$('.opt')) await (await q.$('.opt[data-correct="1"]')).click();
    else await (await q.$('.check')).click();
  }
  await p.click('#next');
}
ok(sawScenario, 'la sesión muestra el caso práctico');
ok(sawTutor, 'al fallar aparece el enlace al tutor');
ok(await p.isVisible('.step.finish.active'), 'la sesión termina');
await p.waitForSelector('#rec-next:not([hidden])', { timeout: 5000 }).catch(() => {});
ok(await p.isVisible('#rec-next'), 'al terminar recomienda la siguiente sesión');
st = await state();
ok((st.model['hecho-opinion']?.n ?? 0) > before, 'las respuestas actualizan el modelo del alumno');
ok(st.completed['no-01-hecho-dato-opinion'], 'la sesión se marca como completada');

// 4. Tutor en modo guiado
await p.goto(BASE + '/es/tutor/');
await p.click('.mode[data-mode=noticia]');
await p.fill('#msg', 'El Ibex 35 se desploma un 2 % tras la reunión del BCE. El banco central mantuvo los tipos en el 2 %. Los analistas creen que podría bajarlos en diciembre.');
await p.click('#send');
await p.waitForSelector('#log li.a');
ok((await p.$$eval('#log .fact', (l) => l.length)) > 0 && (await p.$$eval('#log .op', (l) => l.length)) > 0, 'el tutor separa hechos y opiniones');
await p.check('input[name=f1][value="0"]', { force: true }); await p.check('input[name=f2][value="0"]', { force: true }); await p.check('input[name=f3][value="0"]', { force: true });
ok((await p.textContent('#verdict')).includes('ruido'), 'el filtro «¿me afecta?» da un veredicto');
await p.click('.mode[data-mode=pregunta]');
await p.fill('#msg', '¿Qué es un ETF?');
await p.click('#send');
await p.waitForFunction(() => document.querySelectorAll('#log li.a').length >= 2);
ok((await p.$$eval('#log li.a:last-child a', (l) => l.length)) > 0, 'una pregunta devuelve contenido de la academia');
if (SHOTS) await p.screenshot({ path: SHOTS + '/ad-tutor.png', fullPage: true });
await p.goto(BASE + '/es/tutor/?sesion=no-01-hecho-dato-opinion&pregunta=no01-q1');
ok(await p.isVisible('#ctx'), 'el tutor recibe el contexto de la pregunta fallada');

// 5. Módulos
await p.goto(BASE + '/es/modulos/');
ok((await p.$$eval('.tracks > li', (l) => l.length)) === 8, 'hay 8 módulos');
await p.goto(BASE + '/es/modulos/empresas/');
ok((await p.$$eval('.sessions li', (l) => l.length)) >= 8, 'el módulo de empresas lista sus sesiones');

ok(errs.length === 0, 'sin errores de JavaScript ' + errs.join(' | '));
await b.close();

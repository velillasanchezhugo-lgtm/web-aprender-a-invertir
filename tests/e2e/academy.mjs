/** Recorrido completo de la academia: plan → sesión → mi plan → repaso → examen. */
import { createRequire } from 'module';
const require = createRequire(process.env.PLAYWRIGHT_ROOT || '/opt/node22/lib/node_modules/');
const { chromium } = require('playwright');
const BASE = process.env.BASE || 'http://localhost:4322';
const SHOTS = process.env.SHOTS;
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
const errs = []; p.on('pageerror', (e) => errs.push(e.message));
const ok = (c, m) => { if (!c) { console.error('✗ ' + m); process.exitCode = 1; } else console.log('✓ ' + m); };
// 1. Asistente
await p.goto(BASE + '/es/empezar/');
await p.click('label.goal:has(input[value=objetivo])');
if (SHOTS) await p.screenshot({ path: SHOTS + '/wz1.png' });
await p.click('#fwd');
await p.click('label.min-card:has(input[value="10"])');
await p.click('#fwd');
await p.check('input[name=p1][value="1"]', { force: true }); await p.check('input[name=p4][value="2"]', { force: true });
await p.click('#fwd');
await p.waitForSelector('.wz-step.result.active');
const items = await p.$$eval('#plan-list li', (l) => l.length);
ok(items > 0, `el plan muestra ${items} días`);
if (SHOTS) await p.screenshot({ path: SHOTS + '/wz4.png' });
const st = await p.evaluate(() => JSON.parse(localStorage.getItem('uacademy:academy')));
ok(st.plan.goal === 'objetivo' && st.plan.minutesPerDay === 10, 'el plan se guarda con objetivo y minutos');
ok(st.plan.order.indexOf('01-invertir-no-es-apostar') !== -1, 'el orden incluye las sesiones');
const startHref = await p.getAttribute('#start-btn', 'href');
// 2. Sesión completa
await p.goto(BASE + startHref);
let guard = 0;
while (guard++ < 15) {
  if (await p.isVisible('.step.finish.active')) break;
  const q = await p.$('.step.q.active');
  if (q) {
    if (await q.$('.opt')) await (await q.$('.opt[data-correct="1"]')).click();
    else await (await q.$('.check')).click();
  }
  if (await p.isVisible('.step.action.active')) await p.check('#action-done');
  if (SHOTS && guard <= 6) await p.screenshot({ path: SHOTS + `/ses${guard}.png` });
  await p.click('#next');
}
ok(await p.isVisible('.step.finish.active'), 'la sesión llega a la pantalla final');
if (SHOTS) await p.screenshot({ path: SHOTS + '/ses-fin.png' });
const st2 = await p.evaluate(() => JSON.parse(localStorage.getItem('uacademy:academy')));
ok(Object.keys(st2.completed).length === 1, 'la sesión queda completada');
ok(Object.keys(st2.deck).length >= 2, 'las respuestas entran en el repaso espaciado');
ok(st2.activity.length === 1, 'se registra el día de actividad');
// 3. Mi plan
await p.goto(BASE + '/es/mi-plan/');
ok((await p.textContent('#streak')) === '1', 'la racha es de 1 día');
ok((await p.textContent('#k-sessions')) === '1', 'Mi plan cuenta 1 sesión');
ok((await p.$$('#badges li:not(.locked)')).length >= 1, 'se gana el logro «Primer paso»');
if (SHOTS) await p.screenshot({ path: SHOTS + '/plan.png', fullPage: true });
// 4. Repaso (práctica libre porque nada vence hoy)
await p.goto(BASE + '/es/repaso/');
await p.waitForSelector('#rv-q .rq-text');
ok(true, 'el repaso muestra una pregunta');
// 5. Examen
await p.goto(BASE + '/es/examen/cero/');
await p.click('#ex-start');
await p.waitForSelector('#ex-q .rq-text');
ok(true, 'el examen arranca');
ok(errs.length === 0, 'sin errores de JavaScript ' + errs.join(' | '));
await b.close();

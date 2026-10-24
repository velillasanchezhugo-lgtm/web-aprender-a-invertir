/** Panel de «Mi cuenta»: medidor, rachas, siguiente sesión y actividad con el progreso de este dispositivo. */
import { createRequire } from 'module';
const require = createRequire(process.env.PLAYWRIGHT_ROOT || '/opt/node22/lib/node_modules/');
const { chromium } = require('playwright');
const BASE = process.env.BASE || 'http://localhost:4322';
const b = await chromium.launch();
const errs = [];
const ok = (c, m) => { if (!c) { console.error('✗ ' + m); process.exitCode = 1; } else console.log('✓ ' + m); };
const p = await (await b.newContext({ viewport: { width: 390, height: 844 } })).newPage();
p.on('pageerror', (e) => errs.push(e.message));
await p.goto(BASE + '/es/cuenta/');
ok((await p.textContent('#d-nudge')).includes('primera sesión'), 'sin progreso, el panel invita a empezar');
ok((await p.textContent('#g-pct')) === '0 %', 'el medidor empieza en 0 %');
await p.evaluate(() => {
  const d = (k) => { const x = new Date(); x.setDate(x.getDate() - k); return x; };
  const ymd = (k) => { const x = d(k); return `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, '0')}-${String(x.getDate()).padStart(2, '0')}`; };
  localStorage.setItem('uacademy:academy-chatgpt', JSON.stringify({ completed: { 'gpt-c01-que-es-chatgpt': d(1).toISOString(), 'gpt-c02-donde-se-usa': d(0).toISOString() }, activity: [ymd(3), ymd(1), ymd(0)] }));
});
await p.reload();
ok(await p.locator('.d-tab[data-f="chatgpt"]').getAttribute('aria-pressed') === 'true', 'abre la formación en la que estudiaste por última vez');
ok((await p.textContent('#g-pct')) === '4 %', `el medidor marca lo hecho del Nivel 1 (${await p.textContent('#g-pct')})`);
ok((await p.textContent('#s-cur')) === '2' && (await p.textContent('#s-best')) === '2', 'racha actual y máxima');
ok((await p.getAttribute('#n-link', 'href')).startsWith('/es/chatgpt/sesion/gpt-c03'), 'la siguiente sesión es la que toca');
ok(await p.locator('#heat i').count() === 84 && await p.locator('#bars > div').count() === 7, 'actividad de 12 semanas y de los últimos 7 días');
await p.click('.d-tab[data-f="inversion"]');
ok((await p.textContent('#g-pct')) === '0 %' && await p.evaluate(() => localStorage.getItem('uacademy:dash-tab')) === 'inversion', 'cambiar de formación actualiza el panel y se recuerda');
ok(await p.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'sin scroll horizontal en el móvil');
ok(errs.length === 0, 'sin errores de JavaScript' + (errs.length ? ': ' + errs.join('; ') : ''));
await b.close();

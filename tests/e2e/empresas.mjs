/** Formación para empresas: cuadro negro en la portada y área con contraseña (la API se simula). */
import { createRequire } from 'module';
const require = createRequire(process.env.PLAYWRIGHT_ROOT || '/opt/node22/lib/node_modules/');
const { chromium } = require('playwright');
const BASE = process.env.BASE || 'http://localhost:4322';
const SHOTS = process.env.SHOTS;
const b = await chromium.launch();
const errs = [];
const ok = (c, m) => { if (!c) { console.error('✗ ' + m); process.exitCode = 1; } else console.log('✓ ' + m); };
for (const [w, h, name] of [[390, 844, 'móvil'], [1366, 900, 'escritorio']]) {
  const p = await (await b.newContext({ viewport: { width: w, height: h }, reducedMotion: 'reduce' })).newPage();
  p.on('pageerror', (e) => errs.push(e.message));
  // API simulada: sin sesión al cargar; entra solo con «umotion» + «Café Luna» (sin espacios ni tildes).
  let session = false;
  await p.route('**/api/empresas', async (route) => {
    const req = route.request();
    if (req.method() === 'GET') return route.fulfill({ status: 200, json: session ? { active: true, session: true, name: 'Café Luna', slug: 'cafe-luna', programs: [] } : { active: true, session: false } });
    if (req.method() === 'DELETE') { session = false; return route.fulfill({ status: 200, json: { ok: true } }); }
    const body = JSON.parse(req.postData() || '{}');
    const good = body.password.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/\s/g, '') === 'umotioncafeluna' && body.bot && body.bot.hp === '';
    session = good;
    return route.fulfill(good ? { status: 200, json: { name: 'Café Luna', slug: 'cafe-luna', programs: [] } } : { status: 401, json: { error: 'La contraseña no es correcta.' } });
  });
  await p.goto(BASE + '/es/');
  const box = p.locator('section.emp');
  ok(await box.isVisible() && (await box.locator('h2').textContent()) === 'Formación para empresas', `${name}: la portada tiene el cuadro negro «Formación para empresas»`);
  ok(await box.locator('.items li').count() === 2, `${name}: dentro, Claude y ChatGPT para empresas`);
  const bg = await box.evaluate((el) => getComputedStyle(el).backgroundColor);
  ok(/rgb\((\d+), (\d+), (\d+)\)/.test(bg) && bg.match(/\d+/g).slice(0, 3).every((n) => +n < 40), `${name}: el cuadro es negro (${bg})`);
  if (SHOTS) await box.screenshot({ path: `${SHOTS}/empresas-portada-${w}.png` });
  await Promise.all([p.waitForURL('**/es/empresas/'), box.locator('a.btn').click()]);
  await p.waitForSelector('#emp-login:not([hidden])');
  ok(await p.locator('#emp-area').isHidden(), `${name}: sin contraseña no se ve el área`);
  await p.fill('#emp-pass', 'umotionOtra'); await p.click('#emp-login button');
  await p.waitForFunction(() => document.getElementById('emp-status').textContent.includes('no es correcta'));
  ok(await p.locator('#emp-area').isHidden(), `${name}: con otra contraseña no entra`);
  await p.fill('#emp-pass', 'umotionCaféLuna'); await p.click('#emp-login button');
  await p.waitForSelector('#emp-area:not([hidden])');
  ok((await p.textContent('#emp-name')) === 'Café Luna', `${name}: con «umotion» + el nombre de la empresa entra`);
  ok((await p.locator('#emp-programs strong').allTextContents()).join() === 'Claude para Café Luna,ChatGPT para Café Luna', `${name}: las dos formaciones aparecen en preparación`);
  if (SHOTS) await p.locator('section.box').screenshot({ path: `${SHOTS}/empresas-area-${w}.png` });
  await p.click('#emp-out'); await p.waitForFunction(() => document.getElementById('emp-area').hidden);
  ok(await p.locator('#emp-area').isHidden(), `${name}: «Salir» cierra el área`);
  ok(await p.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${name}: sin scroll horizontal`);
}
ok(errs.length === 0, 'sin errores de JavaScript' + (errs.length ? ': ' + errs.join('; ') : ''));
await b.close();

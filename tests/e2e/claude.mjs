/** Formaciones Claude y ChatGPT: herramientas (evaluador, constructor, plantillas, anonimizador) y paso «Practica» de las sesiones. */
import { createRequire } from 'module';
const require = createRequire(process.env.PLAYWRIGHT_ROOT || '/opt/node22/lib/node_modules/');
const { chromium } = require('playwright');
const BASE = process.env.BASE || 'http://localhost:4322';
const b = await chromium.launch();
const errs = [];
const ok = (c, m) => { if (!c) { console.error('✗ ' + m); process.exitCode = 1; } else console.log('✓ ' + m); };
const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
const p = await ctx.newPage();
p.on('pageerror', (e) => errs.push(e.message));

await p.goto(BASE + '/es/claude/');
ok(await p.locator('h1').textContent() === 'Claude', 'la formación Claude tiene su portada');
ok(await p.locator('a[href="/es/claude/herramientas/evaluador-de-peticiones/"]').count() > 0, 'la portada enlaza las herramientas');

await p.goto(BASE + '/es/claude/herramientas/evaluador-de-peticiones/');
await p.fill('.pcoach textarea', 'Escribe un correo');
await p.click('.pc-check');
const low = Number(await p.locator('.pc-num').textContent());
await p.fill('.pcoach textarea', 'Soy dueña de una peluquería en Valencia. Escribe un mensaje para mis clientas avisando de que cerramos del 1 al 15 de agosto. Tono cercano, máximo 60 palabras, sin emojis. Dime si falta algún dato.');
await p.click('.pc-check');
const high = Number(await p.locator('.pc-num').textContent());
ok(low <= 3 && high >= 8, `el evaluador puntúa bajo una petición vaga (${low}) y alto una completa (${high})`);
await p.fill('.pcoach textarea', 'Redacta una queja formal en un párrafo para mi banco: mi DNI es 12345678Z.');
await p.click('.pc-check');
ok(/datos personales/.test(await p.locator('.pc-tips').textContent()), 'avisa de datos personales en la petición');

await p.goto(BASE + '/es/claude/herramientas/anonimizador/');
await p.fill('#an-in', 'Hola, soy Marta, DNI 12345678Z, teléfono 612 345 678 y correo marta@ejemplo.es.');
const clean = await p.inputValue('#an-out');
ok(!/12345678Z|612 345 678|marta@ejemplo\.es/.test(clean) && /\[DNI 1\]/.test(clean), 'el anonimizador cambia DNI, teléfono y correo por etiquetas');

await p.goto(BASE + '/es/claude/herramientas/constructor-de-peticiones/');
await p.fill('#b-tarea', 'Escribe un cartel de ofertas');
await p.fill('#b-contexto', 'Tengo una frutería');
await p.fill('#b-formato', 'tres líneas');
ok(/Tengo una frutería\.\nEscribe un cartel de ofertas\.\nFormato: tres líneas\./.test(await p.locator('#b-out').textContent()), 'el constructor monta la petición en orden');

await p.goto(BASE + '/es/claude/herramientas/plantillas/');
const n = await p.locator('.tpl').count();
await p.locator('.tpl [data-save]').first().click();
ok(n >= 12 && await p.locator('#kit-list li[data-id]').count() === 1, `hay ${n} plantillas y se pueden guardar en «Mi kit de Claude»`);

// Paso «Practica» dentro de una sesión de Claude
await p.goto(BASE + '/es/claude/sesion/cla-pe01-la-peticion-completa/');
ok(await p.locator('.player[data-store="academy-claude"]').count() === 1, 'las sesiones de Claude guardan su progreso aparte');
ok(await p.locator('.practice-step .pcoach').count() === 1, 'la sesión tiene un paso «Practica» con el evaluador');
for (let i = 0; i < 20 && await p.locator('#next').isVisible(); i++) {
  if (await p.locator('.practice-step.active').count()) break;
  const q = p.locator('.step.q.active');
  if (await q.count()) await q.locator('.opt').first().click();
  await p.click('#next');
}
ok(await p.locator('#step-label').textContent() === 'Practica', 'el paso «Practica» va antes de la acción');
await p.fill('.practice-step textarea', 'Soy profesor. Prepara un esquema de clase de 50 minutos sobre el reciclaje para alumnos de 10 años, en una tabla, tono sencillo.');
await p.click('.practice-step .pc-check');
ok(Number(await p.locator('.practice-step .pc-num').textContent()) > 0, 'la práctica se evalúa dentro de la sesión');
// ChatGPT comparte las herramientas, con su propio kit
await p.goto(BASE + '/es/chatgpt/herramientas/plantillas/');
ok(/ChatGPT/.test(await p.locator('h1').textContent()), 'las plantillas de ChatGPT tienen su página');
await p.locator('.tpl [data-save]').nth(1).click();
const kits = await p.evaluate(() => ({ gpt: JSON.parse(localStorage.getItem('uacademy:chatgpt-kit') || '{"items":[]}').items.length, cla: JSON.parse(localStorage.getItem('uacademy:claude-kit') || '{"items":[]}').items.length }));
ok(kits.gpt === 1 && kits.cla === 1, `cada formación guarda su propio kit (${JSON.stringify(kits)})`);
await p.goto(BASE + '/es/chatgpt/');
ok(await p.locator('h1').textContent() === 'ChatGPT', 'la formación ChatGPT tiene su portada');
ok(errs.length === 0, 'sin errores de JavaScript' + (errs.length ? ': ' + errs.join('; ') : ''));
await b.close();

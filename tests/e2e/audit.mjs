/**
 * Auditoría en navegador: accesibilidad (axe-core, WCAG 2.1 AA), errores de consola,
 * desplazamiento horizontal en móvil y ausencia de peticiones a terceros.
 * Uso: npm run build && npx astro preview --port 4322 & node tests/e2e/audit.mjs
 */
import { createRequire } from 'module';
import { readFileSync } from 'node:fs';
const require = createRequire(process.env.PLAYWRIGHT_ROOT || '/opt/node22/lib/node_modules/');
const { chromium } = require('playwright');
const axe = readFileSync('node_modules/axe-core/axe.min.js', 'utf8');
const BASE = process.env.BASE || 'http://localhost:4322';
const pages = ['/es/', '/es/empezar/', '/es/camino-cero/', '/es/sesion/01-invertir-no-es-apostar/', '/es/sesion/13-detecta-un-fraude/', '/es/mi-plan/', '/es/modulos/', '/es/modulos/empresas/', '/es/modulos/trading/', '/es/sesion/no-01-hecho-dato-opinion/', '/es/sesion/em-02-la-cuenta-de-resultados/', '/es/tutor/', '/es/modulos/trade-republic/', '/es/sesion/app-04-compara-etf/', '/es/modulos/formas/', '/es/sesion/fo-01-mapa-de-formas/', '/es/examen/basico/', '/es/repaso/', '/es/niveles/', '/es/examen/cero/', '/es/empieza-desde-cero/', '/es/lecciones/riesgo-volatilidad-perdidas/', '/es/lecciones/apalancamiento-margen-liquidacion/', '/es/empieza-desde-cero/ejercicio-final/', '/es/test/', '/es/test/reglas/', '/es/biblioteca/', '/es/temas/riesgo/', '/es/estrategias/', '/es/estrategias/swing-trading/', '/es/inversores/', '/es/inversores/warren-buffett/', '/es/herramientas/', '/es/herramientas/interes-compuesto/', '/es/herramientas/inflacion/', '/es/herramientas/simulador-caidas/', '/es/herramientas/diversificacion-rebalanceo/', '/es/herramientas/apalancamiento/', '/es/herramientas/planificador-objetivos/', '/es/herramientas/cartera-practica/', '/es/herramientas/comparador-comisiones/', '/es/brokers/', '/es/brokers/degiro/', '/es/glosario/', '/es/buscar/?q=traspaso', '/es/progreso/', '/es/fuentes/', '/es/privacidad/', '/es/cookies/', '/es/metodologia/', '/en/'];
const b = await chromium.launch();
let fails = 0;
for (const scheme of ['light', 'dark']) {
  const ctx = await b.newContext({ viewport: { width: 375, height: 800 }, colorScheme: scheme });
  await ctx.addInitScript((t) => { try { localStorage.setItem('uacademy:theme', t); } catch (e) {} }, scheme);
  for (const path of pages) {
    const p = await ctx.newPage();
    const errs = []; const external = [];
    p.on('pageerror', (e) => errs.push(e.message));
    p.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
    p.on('request', (r) => { const u = new URL(r.url()); if (!['localhost', '127.0.0.1'].includes(u.hostname)) external.push(u.hostname); });
    await p.goto(BASE + path, { waitUntil: 'networkidle' });
    await p.addScriptTag({ content: axe });
    const res = await p.evaluate(async () => (await window.axe.run(document, { runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] })).violations.map((v) => ({ id: v.id, impact: v.impact, n: v.nodes.length, sample: v.nodes[0]?.target?.join(' ') })));
    const hscroll = await p.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
    const bad = res.length || errs.length || hscroll || external.length;
    if (bad) { fails++; console.log(`✗ [${scheme}] ${path}`, JSON.stringify({ axe: res, errs, hscroll, external: [...new Set(external)] })); }
    else console.log(`✓ [${scheme}] ${path}`);
    await p.close();
  }
  await ctx.close();
}
await b.close();
console.log(fails ? `${fails} páginas con problemas` : 'Todo correcto');
process.exit(fails ? 1 : 0);

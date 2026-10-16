/**
 * Control editorial automático:
 * - Estructura obligatoria de lecciones, estrategias e historias.
 * - Fuentes citadas existen en src/data/sources.json.
 * - Enlaces entre lecciones (next, prereqs, related) apuntan a lecciones existentes.
 * - Ejemplos marcados como ficticios donde se usa la palabra «escenario».
 * - Palabras prohibidas que sugieren promesas («garantizado», «sin riesgo»…) fuera de contexto negativo.
 */
import { readdirSync, readFileSync } from 'node:fs';
import yaml from 'js-yaml';

const sources = JSON.parse(readFileSync('src/data/sources.json', 'utf8'));
const glossary = JSON.parse(readFileSync('src/data/glossary.json', 'utf8'));
const errors = [], warnings = [];
const load = (dir) => readdirSync(dir).filter((f) => f.endsWith('.md')).map((f) => {
  const s = readFileSync(`${dir}/${f}`, 'utf8');
  const [, fm, body] = s.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/) ?? [];
  return { id: f.replace(/\.md$/, ''), file: `${dir}/${f}`, data: yaml.load(fm), body };
});
const lessons = load('src/content/lessons'), strategies = load('src/content/strategies'), investors = load('src/content/investors'), sessions = load('src/content/sessions');
const lessonIds = new Set(lessons.map((l) => l.id));
const glossIds = new Set(glossary.map((g) => g.id));

const need = (doc, headings) => headings.forEach((h) => { if (!doc.body.includes(`## ${h}`)) errors.push(`${doc.file}: falta la sección «${h}»`); });
for (const doc of [...lessons, ...strategies, ...investors, ...sessions]) {
  for (const s of doc.data.sources ?? []) if (!sources[s]) errors.push(`${doc.file}: fuente desconocida «${s}»`);
  if (!doc.data.author) errors.push(`${doc.file}: sin autor`);
  if (doc.data.status === 'revisado' && !doc.data.reviewer) errors.push(`${doc.file}: «revisado» sin revisor identificado`);
  for (const m of doc.body.matchAll(/\/es\/glosario\/#([a-z0-9-]+)/g)) if (!glossIds.has(m[1])) errors.push(`${doc.file}: término de glosario inexistente «${m[1]}»`);
  for (const m of doc.body.matchAll(/\/es\/lecciones\/([a-z0-9-]+)\//g)) if (!lessonIds.has(m[1])) errors.push(`${doc.file}: enlace a lección inexistente «${m[1]}»`);
  const promise = doc.body.match(/[^.\n]*\b(rentabilidad garantizada|sin ningún riesgo|ganancias aseguradas|hazte rico)\b[^.\n]*/i);
  if (promise && !/no |nunca|ni |promet|sospech|alarma|señal/i.test(promise[0])) warnings.push(`${doc.file}: revisar posible promesa: «${promise[0].trim()}»`);
}
for (const l of lessons) {
  need(l, ['Explicación', 'Ejemplo numérico']);
  for (const k of ['next', ...(l.data.prereqs ?? []), ...(l.data.related ?? [])]) {
    const v = k === 'next' ? l.data.next : k;
    if (v && !lessonIds.has(v)) errors.push(`${l.file}: referencia a lección inexistente «${v}»`);
  }
  (l.data.quiz ?? []).forEach((q, i) => { if (q.answer >= q.options.length) errors.push(`${l.file}: pregunta ${i + 1} con respuesta fuera de rango`); });
}
for (const s of strategies) {
  need(s, ['Qué es', 'Qué intenta conseguir', 'Cómo funciona', 'Conocimientos y tiempo que requiere', 'Costes', 'Evidencia a favor y en contra', 'En qué condiciones puede fallar', 'Qué pérdidas puede ocasionar', 'Ejemplo favorable', 'Ejemplo desfavorable']);
  for (const h of ['Ejemplo favorable', 'Ejemplo desfavorable']) {
    const sec = s.body.split(`## ${h}`)[1]?.split('\n## ')[0] ?? '';
    if (!/ficticio/i.test(sec)) errors.push(`${s.file}: el «${h}» debe identificarse como ficticio`);
  }
}
for (const p of investors.filter((x) => x.data.kind === 'inversor')) need(p, ['Trayectoria', 'Contexto histórico', 'Fuentes de su patrimonio', 'Estrategia', 'Decisiones concretas documentadas', 'Errores y pérdidas', 'Recursos y ventajas que no tiene un pequeño inversor', 'Enseñanzas aplicables y límites']);
for (const g of glossary) if (g.lesson && !lessonIds.has(g.lesson)) warnings.push(`glosario «${g.id}»: lección «${g.lesson}» inexistente (no se enlazará)`);
const route = lessons.filter((l) => l.data.route).map((l) => l.data.route.order).sort((a, b) => a - b);
if (route.join() !== Array.from({ length: route.length }, (_, i) => i + 1).join()) errors.push(`La ruta inicial no tiene orden consecutivo: ${route}`);

const sessionIds = new Set(sessions.map((x) => x.id));
const toolIds = new Set(readdirSync('src/pages/es/herramientas').map((f) => f.replace(/\.astro$/, '')));
const qids = new Set();
const skillMap = JSON.parse(readFileSync('src/data/skills.json', 'utf8'));
const skillIds = new Set(skillMap.skills.map((k) => k.id));
const taught = new Set();
const TRACKS = ['camino-cero', 'productos', 'formas', 'invertir-ya', 'empresas', 'noticias', 'trading'];
const orders = new Map();
for (const x of sessions) {
  const track = x.data.track ?? 'camino-cero';
  if (!TRACKS.includes(track)) errors.push(`${x.file}: módulo desconocido «${track}»`);
  if (orders.has(x.data.order)) errors.push(`${x.file}: orden ${x.data.order} repetido (también en ${orders.get(x.data.order)})`); orders.set(x.data.order, x.file);
  if (!(x.data.skills ?? []).length) errors.push(`${x.file}: sin competencias (skills)`);
  for (const k of [...(x.data.skills ?? []), ...x.data.questions.flatMap((q) => q.skills ?? [])]) { if (!skillIds.has(k)) errors.push(`${x.file}: competencia desconocida «${k}»`); taught.add(k); }
  if (['noticias', 'empresas'].includes(track) && !x.data.scenario) errors.push(`${x.file}: las sesiones de ${track} necesitan un caso práctico (scenario)`);
  need(x, ['La idea', 'En la práctica']);
  if (!(x.data.tips ?? []).length) errors.push(`${x.file}: falta «tips» (Te recomendamos)`);
  for (const q of x.data.questions) if (q.type === 'estimate') warnings.push(`${x.file}: «${q.id}» es de estimación; las sesiones deben evitar cálculos`);
  for (const p of x.data.prereqs ?? []) if (!sessionIds.has(p)) errors.push(`${x.file}: prerrequisito inexistente «${p}»`);
  if (x.data.deeper && !lessonIds.has(x.data.deeper)) errors.push(`${x.file}: lectura «${x.data.deeper}» inexistente`);
  if (x.data.tool && !toolIds.has(x.data.tool)) errors.push(`${x.file}: herramienta «${x.data.tool}» inexistente`);
  for (const q of x.data.questions) {
    if (qids.has(q.id)) errors.push(`${x.file}: id de pregunta repetido «${q.id}»`); qids.add(q.id);
    if (q.type === 'choice' && q.answer >= q.options.length) errors.push(`${x.file}: «${q.id}» con respuesta fuera de rango`);
    if (q.type === 'estimate' && (q.answer < q.min || q.answer > q.max || (q.answer - q.min) % q.step > 1e-9 && Math.abs(((q.answer - q.min) % q.step) - q.step) > 1e-9 && q.tolerance < q.step)) errors.push(`${x.file}: «${q.id}» no se puede responder exactamente con el deslizador`);
  }
}
for (const k of skillIds) if (!taught.has(k)) warnings.push(`competencia «${k}» sin ninguna sesión que la enseñe`);
console.log(`Revisados: ${sessions.length} sesiones, ${lessons.length} lecciones, ${strategies.length} estrategias, ${investors.length} historias, ${glossary.length} términos.`);
warnings.forEach((w) => console.warn('AVISO: ' + w));
if (errors.length) { errors.forEach((e) => console.error('ERROR: ' + e)); process.exit(1); }
console.log('Control editorial superado.');

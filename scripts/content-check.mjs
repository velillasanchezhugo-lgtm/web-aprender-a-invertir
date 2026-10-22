/**
 * Control editorial automático:
 * - Estructura obligatoria de lecciones, estrategias e historias.
 * - Fuentes citadas existen en src/data/sources.json.
 * - Enlaces entre lecciones (next, prereqs, related) apuntan a lecciones existentes.
 * - Ejemplos marcados como ficticios donde se usa la palabra «escenario».
 * - Palabras prohibidas que sugieren promesas («garantizado», «sin riesgo»…) fuera de contexto negativo.
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import yaml from 'js-yaml';

const sources = JSON.parse(readFileSync('src/data/sources.json', 'utf8'));
const EM_GLOSS = 'src/data/glossary-emprendimiento';
const glossary = [
  ...JSON.parse(readFileSync('src/data/glossary.json', 'utf8')),
  ...(existsSync(EM_GLOSS) ? readdirSync(EM_GLOSS).filter((f) => f.endsWith('.json')).flatMap((f) => JSON.parse(readFileSync(`${EM_GLOSS}/${f}`, 'utf8'))) : []),
];
const errors = [], warnings = [];
const seenGloss = new Set();
for (const g of glossary) {
  if (seenGloss.has(g.id)) errors.push(`glosario: id repetido «${g.id}»`); seenGloss.add(g.id);
  if (!g.short) errors.push(`glosario «${g.id}»: falta la definición corta (short)`);
  else if (g.short.length > 120) errors.push(`glosario «${g.id}»: la definición corta pasa de 120 caracteres`);
}
const load = (dir) => readdirSync(dir).filter((f) => f.endsWith('.md')).map((f) => {
  const s = readFileSync(`${dir}/${f}`, 'utf8');
  const [, fm, body] = s.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/) ?? [];
  return { id: f.replace(/\.md$/, ''), file: `${dir}/${f}`, data: yaml.load(fm), body };
});
const lessons = load('src/content/lessons'), strategies = load('src/content/strategies'), investors = load('src/content/investors'), sessions = load('src/content/sessions');
const lessonIds = new Set(lessons.map((l) => l.id));
const glossIds = new Set(glossary.map((g) => g.id));

const need = (doc, headings) => headings.forEach((h) => { if (!doc.body.includes(`## ${h}`)) errors.push(`${doc.file}: falta la sección «${h}»`); });
for (const doc of [...lessons, ...strategies, ...investors, ...sessions, ...(existsSync('src/content/emprendimiento') ? load('src/content/emprendimiento') : [])]) {
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
const TRACKS = ['camino-cero', 'productos', 'formas', 'invertir-ya', 'trade-republic', 'mantener', 'empresas', 'noticias', 'trading'];
// Formación Emprendimiento: mismas reglas, con sus módulos y competencias (src/data/emprendimiento.json).
const em = JSON.parse(readFileSync('src/data/emprendimiento.json', 'utf8'));
const emSessions = existsSync('src/content/emprendimiento') ? load('src/content/emprendimiento') : [];
const emSkillIds = new Set(em.skills.map((k) => k.id));
const emTaught = new Set();
checkSessions(sessions, { tracks: TRACKS, skillIds, taught, sessionIds, def: 'camino-cero' });
checkSessions(emSessions, { tracks: em.tracks.map((t) => t.id), skillIds: emSkillIds, taught: emTaught, sessionIds: new Set(emSessions.map((x) => x.id)), def: 'em-cero' });
for (const t of em.tracks) if (!emSessions.some((x) => x.data.track === t.id)) warnings.push(`emprendimiento: el módulo «${t.id}» aún no tiene sesiones`);
for (const k of em.skills) if (k.level === 1 && emSessions.length && !emTaught.has(k.id)) warnings.push(`emprendimiento: competencia «${k.id}» sin ninguna sesión que la enseñe`);
for (const c of em.n1Capacities) for (const k of c.skills) if (!emSkillIds.has(k)) errors.push(`emprendimiento: la capacidad ${c.id} usa la competencia desconocida «${k}»`);
for (const m of [...em.n2.modules, ...em.n3.modules]) for (const i of m.items) for (const k of i.skills) if (!emSkillIds.has(k)) errors.push(`emprendimiento: «${i.id}» usa la competencia desconocida «${k}»`);
function checkSessions(list, { tracks, skillIds, taught, sessionIds, def }) {
const orders = new Map();
for (const x of list) {
  const track = x.data.track ?? def;
  if (!tracks.includes(track)) errors.push(`${x.file}: módulo desconocido «${track}»`);
  if (orders.has(x.data.order)) errors.push(`${x.file}: orden ${x.data.order} repetido (también en ${orders.get(x.data.order)})`); orders.set(x.data.order, x.file);
  if (!(x.data.skills ?? []).length) errors.push(`${x.file}: sin competencias (skills)`);
  if ((x.data.description ?? '').length > 170) errors.push(`${x.file}: la descripción pasa de 170 caracteres`);
  if ((x.data.questions ?? []).length < 2 || x.data.questions.length > 4) errors.push(`${x.file}: debe tener de 2 a 4 preguntas`);
  for (const k of [...(x.data.skills ?? []), ...x.data.questions.flatMap((q) => q.skills ?? [])]) { if (!skillIds.has(k)) errors.push(`${x.file}: competencia desconocida «${k}»`); taught.add(k); }
  if (['noticias', 'empresas'].includes(track) && !x.data.scenario) errors.push(`${x.file}: las sesiones de ${track} necesitan un caso práctico (scenario)`);
  need(x, ['La idea', 'En la práctica']);
  if (!(x.data.tips ?? []).length) errors.push(`${x.file}: falta «tips» (Te recomendamos)`);
  if (!(x.data.terms ?? []).length) warnings.push(`${x.file}: sin palabras clave (terms)`);
  for (const t of x.data.terms ?? []) if (!glossary.some((g) => g.id === t)) errors.push(`${x.file}: término «${t}» no está en el glosario`);
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
}
// Clases de los niveles 2 y 3 (muestras y, en el futuro, contenido de pago)
const clases = existsSync('src/content/clases') ? load('src/content/clases') : [];
const curriculum = JSON.parse(readFileSync('src/data/curriculum.json', 'utf8'));
const plannedIds = new Set([...curriculum.n2.modules, ...curriculum.n3.modules].flatMap((m) => m.items.map((i) => i.id)));
for (const id of plannedIds) for (const k of [...curriculum.n2.modules, ...curriculum.n3.modules].flatMap((m) => m.items).find((i) => i.id === id).skills) if (!skillIds.has(k)) errors.push(`temario: «${id}» usa la competencia desconocida «${k}»`);
for (const x of clases) {
  if (!plannedIds.has(x.id)) errors.push(`${x.file}: no está en el temario (src/data/curriculum.json)`);
  for (const k of x.data.skills ?? []) if (!skillIds.has(k)) errors.push(`${x.file}: competencia desconocida «${k}»`);
  for (const t of x.data.terms ?? []) if (!glossary.some((g) => g.id === t)) errors.push(`${x.file}: término «${t}» no está en el glosario`);
  for (const q of x.data.questions ?? []) { if (qids.has(q.id)) errors.push(`${x.file}: id de pregunta repetido «${q.id}»`); qids.add(q.id); if (q.type === 'choice' && q.answer >= q.options.length) errors.push(`${x.file}: «${q.id}» con respuesta fuera de rango`); }
  for (const src of x.data.sources ?? []) if (!sources[src]) errors.push(`${x.file}: fuente desconocida «${src}»`);
  if (x.data.access === 'paid' && x.data.status !== 'revisado') warnings.push(`${x.file}: contenido de pago sin revisión humana (no se puede publicar, sección 11.3)`);
}
for (const k of skillMap.skills) if ((k.level ?? 1) === 1 && !taught.has(k.id)) warnings.push(`competencia «${k.id}» sin ninguna sesión que la enseñe`);
console.log(`Revisados: ${sessions.length} sesiones de Inversión, ${emSessions.length} de Emprendimiento, ${lessons.length} lecciones, ${strategies.length} estrategias, ${investors.length} historias, ${glossary.length} términos.`);
warnings.forEach((w) => console.warn('AVISO: ' + w));
if (errors.length) { errors.forEach((e) => console.error('ERROR: ' + e)); process.exit(1); }
console.log('Control editorial superado.');

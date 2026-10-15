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
const lessons = load('src/content/lessons'), strategies = load('src/content/strategies'), investors = load('src/content/investors');
const lessonIds = new Set(lessons.map((l) => l.id));
const glossIds = new Set(glossary.map((g) => g.id));

const need = (doc, headings) => headings.forEach((h) => { if (!doc.body.includes(`## ${h}`)) errors.push(`${doc.file}: falta la sección «${h}»`); });
for (const doc of [...lessons, ...strategies, ...investors]) {
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

console.log(`Revisados: ${lessons.length} lecciones, ${strategies.length} estrategias, ${investors.length} historias, ${glossary.length} términos.`);
warnings.forEach((w) => console.warn('AVISO: ' + w));
if (errors.length) { errors.forEach((e) => console.error('ERROR: ' + e)); process.exit(1); }
console.log('Control editorial superado.');

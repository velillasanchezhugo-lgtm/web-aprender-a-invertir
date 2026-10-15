/**
 * Motor del test de aprendizaje. Puro y sin dependencias del navegador.
 * Produce un plan de APRENDIZAJE: lecciones, ejercicios y reflexiones. Nunca productos,
 * carteras concretas ni cantidades a invertir.
 */
export type Answers = Record<string, string | string[] | undefined>;
export type Cond =
  | { q: string; in: string[] }
  | { score: 'lt' | 'lte' | 'gte' | 'gt'; value: number }
  | { all: Cond[] } | { any: Cond[] } | { not: Cond };

export interface Option { v: string; label: string; correct?: boolean }
export interface Question { id: string; block: string; text: string; options: Option[]; multiple?: boolean; optional?: boolean; check?: boolean; concept?: string }
export interface Rules {
  questions: Question[];
  contradictions: { id: string; when: Cond; title: string; why: string; lessons: string[] }[];
  startingPoints: { id: string; when: Cond; label: string; text: string }[];
  goalLessons: Record<string, string[]>;
  goalTools: Record<string, string[]>;
  risks: { when: Cond; text: string }[];
  reviewConditions: string[];
}

export function checkScore(rules: Rules, a: Answers): { score: number; total: number; failed: Question[] } {
  const checks = rules.questions.filter((q) => q.check);
  const failed = checks.filter((q) => a[q.id] !== q.options.find((o) => o.correct)?.v);
  return { score: checks.length - failed.length, total: checks.length, failed };
}

export function evalCond(c: Cond, a: Answers, score: number): boolean {
  if ('all' in c) return c.all.every((x) => evalCond(x, a, score));
  if ('any' in c) return c.any.some((x) => evalCond(x, a, score));
  if ('not' in c) return !evalCond(c.not, a, score);
  if ('score' in c) {
    switch (c.score) { case 'lt': return score < c.value; case 'lte': return score <= c.value; case 'gte': return score >= c.value; case 'gt': return score > c.value; }
  }
  const v = a[c.q];
  if (v === undefined || v === '' || (Array.isArray(v) && v.length === 0)) return false;
  return Array.isArray(v) ? v.some((x) => c.in.includes(x)) : c.in.includes(v);
}

export const ROUTE = [
  'ahorrar-invertir-especular', 'objetivos-horizonte-liquidez', 'deuda-presupuesto-emergencia', 'inflacion-e-interes-compuesto',
  'riesgo-volatilidad-perdidas', 'diversificacion', 'productos-basicos', 'comisiones-y-fiscalidad', 'investigar-broker-y-fraudes', 'checklist-antes-de-invertir',
];

export interface Plan {
  unanswered: string[];
  score: number; total: number;
  starting: { label: string; text: string };
  reinforce: string[]; // slugs de lecciones
  contradictions: { id: string; title: string; why: string; lessons: string[] }[];
  route: string[];
  tools: string[];
  risks: string[];
  weeks: { title: string; lessons: string[]; tasks: string[] }[];
  later: string[];
  review: string[];
}

const uniq = <T,>(xs: T[]) => [...new Set(xs)];

export function buildPlan(rules: Rules, a: Answers, toolNames: Record<string, string> = {}): Plan {
  const tn = (id: string) => toolNames[id] ?? id;
  const unanswered = rules.questions.filter((q) => !q.optional && (a[q.id] === undefined || (Array.isArray(a[q.id]) && (a[q.id] as string[]).length === 0))).map((q) => q.id);
  const { score, total, failed } = checkScore(rules, a);
  const sp = rules.startingPoints.find((s) => evalCond(s.when, a, score)) ?? rules.startingPoints[rules.startingPoints.length - 1];
  const contradictions = rules.contradictions.filter((c) => evalCond(c.when, a, score)).map(({ id, title, why, lessons }) => ({ id, title, why, lessons }));
  const reinforce = uniq(failed.map((q) => q.concept!).filter(Boolean));
  const goal = typeof a.goal === 'string' ? a.goal : 'learn';
  const base = score >= total ? ['checklist-antes-de-invertir'] : ROUTE;
  const route = uniq([...base, ...reinforce, ...contradictions.flatMap((c) => c.lessons), ...(rules.goalLessons[goal] ?? [])]);
  const tools = uniq([...(rules.goalTools[goal] ?? []), ...(reinforce.includes('apalancamiento-margen-liquidacion') ? ['apalancamiento'] : []), 'simulador-caidas']).slice(0, 4);
  const risks = rules.risks.filter((r) => evalCond(r.when, a, score)).map((r) => r.text);
  const perWeek = a.time === 'gt3' ? 7 : a.time === '1to3' ? 5 : 3;
  const weeks: Plan['weeks'] = [];
  let i = 0;
  const tasksFor = (w: number): string[] => {
    const t: string[] = [];
    if (w === 0) t.push('Escribe en una frase para qué quieres aprender a invertir y cuándo necesitarías el dinero.');
    if (w === 1 && tools[0]) t.push(`Practica con la herramienta «${tn(tools[0])}» cambiando los supuestos a escenarios peores.`);
    if (w === 2 && tools[1]) t.push(`Usa la herramienta «${tn(tools[1])}» y anota qué te ha sorprendido.`);
    if (w === 3) t.push('Haz el ejercicio final con dinero ficticio y repite las preguntas de comprobación del test.');
    if (w === 2 && contradictions.length) t.push('Relee las contradicciones señaladas y decide cómo las resolverías antes de actuar.');
    return t;
  };
  for (let w = 0; w < 4; w++) {
    const n = w === 3 ? Math.max(1, perWeek - 2) : perWeek;
    weeks.push({ title: `Semana ${w + 1}`, lessons: route.slice(i, i + n), tasks: tasksFor(w) });
    i += n;
  }
  return { unanswered, score, total, starting: { label: sp.label, text: sp.text }, reinforce, contradictions, route, tools, risks, weeks, later: route.slice(i), review: rules.reviewConditions };
}

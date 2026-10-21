import { getCollection, type CollectionEntry } from 'astro:content';
import sources from '../data/sources.json';
import glossary from '../data/glossary.json';

export type Lesson = CollectionEntry<'lessons'>;
export type Source = { title: string; publisher: string; url: string | null; type: string; checked: string | null };

export const TOPICS: Record<string, { label: string; blurb: string }> = {
  fundamentos: { label: 'Fundamentos', blurb: 'Conceptos que se usan en todo lo demás.' },
  planificacion: { label: 'Planificación', blurb: 'Objetivos, presupuesto y orden antes de invertir.' },
  riesgo: { label: 'Riesgo', blurb: 'Volatilidad, caídas y cómo gestionarlas.' },
  carteras: { label: 'Carteras', blurb: 'Diversificación, asignación de activos y rebalanceo.' },
  productos: { label: 'Productos', blurb: 'Acciones, bonos, fondos, ETF y otros instrumentos.' },
  'costes-y-fiscalidad': { label: 'Costes y fiscalidad', blurb: 'Lo que pagas y cómo tributa.' },
  intermediarios: { label: 'Intermediarios', blurb: 'Elegir y comprobar un bróker; evitar fraudes.' },
  'largo-plazo': { label: 'Inversión a largo plazo', blurb: 'Indexación, aportaciones y disciplina.' },
  'renta-fija': { label: 'Renta fija', blurb: 'Duración, crédito y tipos de interés.' },
  'analisis-empresas': { label: 'Análisis de empresas', blurb: 'Estados financieros y valoración.' },
  psicologia: { label: 'Psicología', blurb: 'Sesgos y comportamiento del inversor.' },
  'mercados-y-ordenes': { label: 'Mercados y órdenes', blurb: 'Cómo se ejecuta una operación y qué cuesta.' },
  'derivados-y-apalancamiento': { label: 'Derivados y apalancamiento', blurb: 'Margen, CFD, futuros y opciones, con números.' },
  'activos-alternativos': { label: 'Activos alternativos', blurb: 'Criptoactivos y otros, con espíritu crítico.' },
};

export const LEVELS = { inicial: 'Inicial', intermedio: 'Intermedio', avanzado: 'Avanzado' } as const;
export const STATUS = { borrador: 'Borrador', 'revision-pendiente': 'Pendiente de revisión humana', revisado: 'Revisado' } as const;

export const sourceById = (id: string): Source | undefined => (sources as Record<string, Source>)[id];
export const glossaryList = glossary as { id: string; term: string; def: string; short?: string; abbr?: string; lesson: string | null }[];

export async function lessons(): Promise<Lesson[]> {
  return (await getCollection('lessons', ({ data }) => !data.draft)).sort((a, b) =>
    (a.data.route?.order ?? 100) - (b.data.route?.order ?? 100) || a.data.title.localeCompare(b.data.title, 'es'));
}
export async function routeLessons(): Promise<Lesson[]> {
  return (await lessons()).filter((l) => l.data.route?.id === 'desde-cero').sort((a, b) => a.data.route!.order - b.data.route!.order);
}

export const TOOLS: Record<string, { title: string; blurb: string }> = {
  'interes-compuesto': { title: 'Interés compuesto y aportaciones', blurb: 'Cuánto puede crecer un ahorro periódico, separando nominal, real y costes.' },
  'comparador-comisiones': { title: 'Comparador de comisiones', blurb: 'Coste anual estimado en varios intermediarios para supuestos comunes.' },
  inflacion: { title: 'Pérdida de poder adquisitivo', blurb: 'Qué compra tu dinero con la inflación, con datos del INE.' },
  'simulador-caidas': { title: 'Caídas y recuperación', blurb: 'Cuánto hay que subir para recuperar una caída y cuánto se tarda.' },
  'diversificacion-rebalanceo': { title: 'Diversificación y rebalanceo', blurb: 'Cómo baja el riesgo al diversificar y qué hace el rebalanceo.' },
  apalancamiento: { title: 'Simulador de apalancamiento', blurb: 'Cómo el apalancamiento amplifica pérdidas, con margen y financiación.' },
  'planificador-objetivos': { title: 'Planificador de objetivos', blurb: 'Cuánto aportar al mes para alcanzar un objetivo con importe y fecha, con varios supuestos.' },
  'cartera-practica': { title: 'Cartera de práctica', blurb: 'Reparte 10.000 € ficticios y observa escenarios ficticios.' },
};

export const fmtDate = (d: Date) => d.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);

export type Session = CollectionEntry<'sessions'>;
export async function sessions(): Promise<Session[]> {
  return (await getCollection('sessions', ({ data }) => !data.draft)).sort((a, b) => a.data.order - b.data.order);
}
export const sessionMeta = (s: Session) => ({ id: s.id, order: s.data.order, level: s.data.level, goals: s.data.goals, prereqs: s.data.prereqs, minutes: s.data.minutes });

import academyData from '../data/academy.json';
/** Banco de preguntas por nivel para los exámenes. */
export async function examQuestions(level: string) {
  const lv = academyData.levels.find((l) => l.id === level)!;
  if (lv.kind === 'sessions') return (await zeroSessions()).map((s) => s.data.questions[0]);
  const tracks = ((lv as any).tracks ?? []) as TrackId[];
  if (tracks.length) {
    // Una pregunta de cada sesión de los módulos del nivel (la segunda, para no repetir el diagnóstico), hasta 20, repartidas.
    const pool = (await sessions()).filter((s) => tracks.includes(s.data.track)).map((s) => s.data.questions[1] ?? s.data.questions[0]);
    const step = Math.max(1, pool.length / 20);
    return Array.from({ length: Math.min(20, pool.length) }, (_, i) => pool[Math.floor(i * step)]);
  }
  const ls = Object.fromEntries((await lessons()).map((l) => [l.id, l]));
  const strat = Object.fromEntries((await getCollection('strategies')).map((s) => [s.id, s]));
  const qs = lv.items.flatMap((id) => (ls[id]?.data.quiz ?? []).slice(0, lv.items.length >= 8 ? 1 : 3).map((q, i) => ({ type: 'choice' as const, id: `ex-${id}-${i}`, q: q.q, options: q.options, answer: q.answer, explain: q.explain })));
  const sq = ((lv as any).strategies ?? []).flatMap((id: string) => (strat[id]?.data.quiz ?? []).map((q: any, i: number) => ({ type: 'choice' as const, id: `ex-${id}-${i}`, q: q.q, options: q.options, answer: q.answer, explain: q.explain })));
  return [...qs, ...sq];
}

// ---------- Módulos y motor adaptativo ----------
import skillsData from '../data/skills.json';
import { guessRate, TRACKS, type CatalogItem, type TrackId, type SkillDef, type DomainDef } from './adaptive';
export { TRACKS };
/** Todas las competencias (niveles 1 a 3) y las del Nivel 1, que son las que mide hoy el alumno en la web gratuita. */
export const SKILLS_ALL = skillsData.skills as SkillDef[];
export const DOMAINS_ALL = skillsData.domains as DomainDef[];
export const SKILLS = SKILLS_ALL.filter((s) => (s.level ?? 1) === 1);
export const DOMAINS = DOMAINS_ALL.filter((d) => (d.level ?? 1) === 1);
export const skillById = Object.fromEntries(SKILLS_ALL.map((s) => [s.id, s])) as Record<string, SkillDef>;

/** Sesiones de un módulo, en orden. */
export async function trackSessions(track: TrackId): Promise<Session[]> {
  return (await sessions()).filter((s) => s.data.track === track);
}
export const zeroSessions = () => trackSessions('camino-cero');
export const guessFor = (q: Session['data']['questions'][number]) => guessRate(q.type, q.type === 'choice' ? q.options.length : 2);

/** Todo lo que necesita el motor adaptativo en el navegador: catálogo, qué mide cada pregunta y banco de diagnóstico. */
export async function academyIndex() {
  const all = await sessions();
  const catalog: CatalogItem[] = all.map((s) => ({ id: s.id, track: s.data.track, order: s.data.order, level: s.data.level, goals: s.data.goals, prereqs: s.data.prereqs, skills: s.data.skills, title: s.data.title }));
  const qmeta: Record<string, { skills: string[]; guess: number }> = {};
  const bank: { qid: string; skills: string[]; domain: string; q: Session['data']['questions'][number]; session: string }[] = [];
  for (const s of all) {
    s.data.questions.forEach((q, i) => {
      const skills = q.skills ?? s.data.skills;
      qmeta[q.id] = { skills, guess: guessFor(q) };
      if (i === 0) bank.push({ qid: q.id, skills, domain: skillById[skills[0]]?.domain ?? 'base', q, session: s.id });
    });
  }
  const titles = Object.fromEntries(all.map((s) => [s.id, s.data.title]));
  return { catalog, qmeta, bank, titles };
}

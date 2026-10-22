import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** Estado editorial: solo 'revisado' indica revisión humana documentada. */
const editorial = {
  author: z.string(),
  reviewer: z.string().nullable().default(null),
  published: z.coerce.date(),
  reviewed: z.coerce.date(),
  status: z.enum(['borrador', 'revision-pendiente', 'revisado']),
  jurisdiction: z.string().default('España'),
  sources: z.array(z.string()).min(1),
  corrections: z.array(z.object({ date: z.coerce.date(), note: z.string() })).default([]),
  draft: z.boolean().default(false),
};

const question = z.object({
  q: z.string(),
  options: z.array(z.string()).min(2),
  answer: z.number().int().nonnegative(),
  explain: z.string(),
});

const lessons = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lessons' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(170),
    level: z.enum(['inicial', 'intermedio', 'avanzado']),
    topic: z.string(),
    route: z.object({ id: z.literal('desde-cero'), order: z.number().int() }).optional(),
    minutes: z.number().int(),
    learn: z.array(z.string()).min(2),
    prereqs: z.array(z.string()).default([]),
    mistake: z.string(),
    summary: z.array(z.string()).min(2),
    quiz: z.array(question).min(1),
    next: z.string().nullable(),
    related: z.array(z.string()).default([]),
    tools: z.array(z.string()).default([]),
    ...editorial,
  }),
});

const strategies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/strategies' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(170),
    level: z.enum(['inicial', 'intermedio', 'avanzado']),
    horizon: z.string(),
    time: z.string(),
    knowledge: z.string(),
    evidence: z.enum(['favorable', 'mixta', 'desfavorable']),
    evidenceNote: z.string(),
    related: z.array(z.string()).default([]),
    quiz: z.array(question).default([]),
    ...editorial,
  }),
});

const investors = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/investors' }),
  schema: z.object({
    title: z.string(),
    name: z.string(),
    kind: z.enum(['inversor', 'caso', 'concepto']),
    years: z.string(),
    description: z.string().max(170),
    approach: z.string(),
    order: z.number().int(),
    related: z.array(z.string()).default([]),
    ...editorial,
  }),
});

/** `skills` opcional: competencias que mide la pregunta (si falta, las de la sesión). */
const qSkills = { skills: z.array(z.string()).optional() };
const sessionQuestion = z.discriminatedUnion('type', [
  z.object({ type: z.literal('choice'), id: z.string(), q: z.string(), options: z.array(z.string()).min(2), answer: z.number().int().nonnegative(), explain: z.string(), ...qSkills }),
  z.object({ type: z.literal('truefalse'), id: z.string(), q: z.string(), answer: z.boolean(), explain: z.string(), ...qSkills }),
  z.object({ type: z.literal('estimate'), id: z.string(), q: z.string(), answer: z.number(), tolerance: z.number().nonnegative(), min: z.number(), max: z.number(), step: z.number().positive(), unit: z.string(), explain: z.string(), ...qSkills }),
]);

/** Módulos de sesiones. 'camino-cero' es el nivel Cero; el resto forman el nivel Básico. */
export const TRACK_IDS = ['camino-cero', 'productos', 'formas', 'invertir-ya', 'trade-republic', 'mantener', 'empresas', 'noticias', 'trading'] as const;

/** Módulos del Nivel 1 de la formación Emprendimiento (ver src/data/emprendimiento.json). */
export const EM_TRACK_IDS = ['em-cero', 'em-forma', 'em-alta', 'em-impuestos', 'em-cotizacion', 'em-dinero', 'em-clientes', 'em-legal', 'em-crecer', 'em-cerrar'] as const;

/** Sesiones de 5 minutos: gancho, idea, ejemplo, test y una acción aplicable hoy. Mismo formato en todas las formaciones. */
const sessionSchema = <T extends readonly [string, ...string[]]>(tracks: T, fallback: T[number]) =>
  z.object({
    title: z.string(),
    description: z.string().max(170),
    level: z.enum(['cero', 'basico', 'intermedio', 'avanzado', 'experto']),
    track: z.enum(tracks).default(fallback as any),
    order: z.number().int(),
    minutes: z.number().int().default(5),
    skills: z.array(z.string()).min(1),
    /** Palabras clave (ids del glosario) que se muestran como cartulinas al empezar. */
    terms: z.array(z.string()).max(5).optional(),
    /** Caso práctico opcional: una noticia, una empresa o una operación ficticia para analizar. */
    scenario: z.object({ kind: z.enum(['noticia', 'empresa', 'operacion', 'producto']), label: z.string(), title: z.string(), body: z.string(), note: z.string().optional() }).optional(),
    goals: z.array(z.enum(['entender', 'objetivo', 'jubilacion', 'miedo', 'ordenar'])).default([]),
    prereqs: z.array(z.string()).default([]),
    hook: z.string(),
    takeaway: z.string(),
    questions: z.array(sessionQuestion).min(2).max(4),
    /** «Te recomendamos»: 2-4 consejos prácticos y generales (nunca productos concretos). */
    tips: z.array(z.string()).min(1).max(5).optional(),
    action: z.object({ title: z.string(), steps: z.array(z.string()).min(1), check: z.string() }),
    deeper: z.string().nullable().default(null),
    tool: z.string().nullable().default(null),
    ...editorial,
  });
const sessions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sessions' }),
  schema: sessionSchema(TRACK_IDS, 'camino-cero'),
});
/** Sesiones del Nivel 1 de Emprendimiento: colección aparte para que su progreso no se mezcle con el de Inversión. */
const emprendimiento = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/emprendimiento' }),
  schema: sessionSchema(EM_TRACK_IDS, 'em-cero'),
});

/**
 * Clases del Nivel 2 (15-30 min) y lecciones del Nivel 3 (30-45 min). Ver docs/CURRICULO.md, secciones 4.2 y 4.3.
 * Solo se publican en la web estática las de acceso «sample» (muestras abiertas); el resto se servirá desde el servidor.
 */
const clases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/clases' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(170),
    tier: z.union([z.literal(2), z.literal(3)]),
    format: z.enum(['clase', 'leccion']),
    module: z.string(),
    order: z.number().int(),
    minutes: z.number().int(),
    access: z.enum(['sample', 'paid']),
    skills: z.array(z.string()).min(1),
    terms: z.array(z.string()).max(8).optional(),
    hook: z.string(),
    objectives: z.array(z.string()).min(3).max(5),
    /** N2 · «Cómo explicarlo». */
    teach: z.object({ tresFrases: z.array(z.string()).length(3), analogia: z.string(), dudas: z.array(z.object({ q: z.string(), a: z.string() })).length(3), errorPrincipiante: z.string(), frontera: z.string() }).optional(),
    explainPrompt: z.string().optional(),
    /** N3 · «Criterio profesional», expediente y ejercicio. */
    profesional: z.string().optional(),
    caseFile: z.enum(['lucia', 'ortega', 'antonio', 'elena']).optional(),
    exercise: z.string().optional(),
    summary: z.array(z.string()).min(3).max(8),
    questions: z.array(sessionQuestion).min(5).max(12),
    ...editorial,
  }),
});

export const collections = { lessons, strategies, investors, sessions, emprendimiento, clases };

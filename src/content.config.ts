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
    kind: z.enum(['inversor', 'caso']),
    years: z.string(),
    description: z.string().max(170),
    approach: z.string(),
    order: z.number().int(),
    related: z.array(z.string()).default([]),
    ...editorial,
  }),
});

export const collections = { lessons, strategies, investors };

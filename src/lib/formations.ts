/**
 * Formaciones con el mismo sistema que Inversión (docs/ESTANDAR-FORMACIONES.pdf): cada una tiene sus datos en
 * src/data/<id>.json, sus sesiones del Nivel 1 en la colección <id> (src/content/<id>/), su glosario en
 * src/data/glossary-<id>/ y sus páginas bajo /es/<id>/. Para añadir una, añádela aquí y en src/content.config.ts.
 */
import { getCollection, type CollectionEntry } from 'astro:content';
import emprendimiento from '../data/emprendimiento.json';
import claude from '../data/claude.json';
import { CLAUDE_TOOLS } from './claude/tools';

export const FORMATIONS = { emprendimiento, claude } as const;
export type FormationId = keyof typeof FORMATIONS;
export const FORMATION_IDS = Object.keys(FORMATIONS) as FormationId[];
export type FSession = CollectionEntry<'emprendimiento'> | CollectionEntry<'claude'>;
type Data = (typeof FORMATIONS)[FormationId];

/** Todo lo que necesitan las páginas de una formación. */
export function formation(id: FormationId) {
  const d = FORMATIONS[id] as Data;
  const tracks = Object.fromEntries(d.tracks.map((t) => [t.id, t])) as Record<string, Data['tracks'][number]>;
  return {
    id, d, title: d.title, texts: d.texts,
    base: `/es/${id}/`,
    session: `/es/${id}/sesion/`,
    storeKey: `academy-${id}` as const,
    tracks,
    skillById: Object.fromEntries(d.skills.map((s) => [s.id, s])) as Record<string, Data['skills'][number]>,
    trackHref: (t: string) => `/es/${id}/modulos/${t}/`,
    stageOf: (t: string) => d.stages.find((s) => s.tracks.includes(t))!,
  };
}
export type Formation = ReturnType<typeof formation>;

/** Herramientas propias de una formación (como las calculadoras de Inversión). */
export const FORMATION_TOOLS: Partial<Record<FormationId, { href: string; items: Record<string, { title: string; blurb: string }> }>> = {
  claude: { href: '/es/claude/herramientas/', items: CLAUDE_TOOLS },
};

export async function formationSessions(id: FormationId): Promise<FSession[]> {
  return ((await getCollection(id, ({ data }: { data: { draft: boolean } }) => !data.draft)) as FSession[]).sort((a, b) => a.data.order - b.data.order);
}
/** Rutas estáticas de una página de formación: una por formación. */
export const formationPaths = () => FORMATION_IDS.map((f) => ({ params: { f } }));

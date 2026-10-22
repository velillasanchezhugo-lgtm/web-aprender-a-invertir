/**
 * Formación Emprendimiento: datos del temario (src/data/emprendimiento.json) y sesiones del Nivel 1
 * (colección «emprendimiento»). Mismo sistema que Inversión: docs/ESTANDAR-FORMACIONES.pdf.
 */
import { getCollection, type CollectionEntry } from 'astro:content';
import em from '../data/emprendimiento.json';

export const EM = em;
export const EM_BASE = '/es/emprendimiento/';
export const EM_SESSION = '/es/emprendimiento/sesion/';
export type EmSession = CollectionEntry<'emprendimiento'>;
export type EmTrack = (typeof em.tracks)[number];

export const EM_TRACKS = Object.fromEntries(em.tracks.map((t) => [t.id, t])) as Record<string, EmTrack>;
export const emSkillById = Object.fromEntries(em.skills.map((s) => [s.id, s])) as Record<string, (typeof em.skills)[number]>;
export const emTrackHref = (id: string) => `${EM_BASE}modulos/${id}/`;
export const emStageOf = (track: string) => em.stages.find((s) => s.tracks.includes(track))!;

export async function emSessions(): Promise<EmSession[]> {
  return (await getCollection('emprendimiento', ({ data }) => !data.draft)).sort((a, b) => a.data.order - b.data.order);
}

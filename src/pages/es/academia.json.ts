import { academyIndex, SKILLS, DOMAINS } from '../../lib/content';
import academy from '../../data/academy.json';

/** Índice para el motor adaptativo del navegador: catálogo de sesiones, qué mide cada pregunta y competencias. */
export async function GET() {
  const { catalog, qmeta, titles } = await academyIndex();
  return new Response(JSON.stringify({ catalog, qmeta, titles, skills: SKILLS, domains: DOMAINS, goals: Object.fromEntries(academy.goals.map((g) => [g.id, g.label])) }), { headers: { 'Content-Type': 'application/json' } });
}

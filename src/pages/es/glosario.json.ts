import type { APIRoute } from 'astro';
import { glossaryList } from '../../lib/content';
export const GET: APIRoute = () => new Response(JSON.stringify(Object.fromEntries(glossaryList.map((g) => [g.id, { term: g.term, def: g.def }]))), { headers: { 'Content-Type': 'application/json' } });

/**
 * Tutor con IA de umotion Academy (función de Vercel).
 * Desactivado salvo que se definan AI_TUTOR_ENABLED=true y ANTHROPIC_API_KEY en el proyecto.
 * Modelo configurable con AI_TUTOR_MODEL. Ver docs/TUTOR-IA.md.
 */
import Anthropic from '@anthropic-ai/sdk';
import catalog from './_catalog.json' with { type: 'json' };
import { validate, buildSystem, buildMessages, makeLimiter, replyText } from './_tutor-core.js';

const MODEL = process.env.AI_TUTOR_MODEL || 'claude-opus-5-5';
const enabled = () => process.env.AI_TUTOR_ENABLED === 'true' && !!process.env.ANTHROPIC_API_KEY;
const SYSTEM = buildSystem(catalog);
const limit = makeLimiter(Number(process.env.AI_TUTOR_MAX_PER_HOUR || 30));
let client = null;

const json = (data, status = 200) => new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' } });

export function GET() {
  return json({ enabled: enabled() });
}

export async function POST(request) {
  if (!enabled()) return json({ error: 'El tutor con IA no está activado.' }, 503);
  if (request.headers.get('sec-fetch-site') === 'cross-site') return json({ error: 'Origen no permitido.' }, 403);
  const ip = (request.headers.get('x-forwarded-for') ?? '').split(',')[0].trim() || 'anon';
  if (!limit(ip)) return json({ error: 'Has hecho muchas preguntas seguidas. Vuelve a intentarlo dentro de un rato.' }, 429);
  let body;
  try { body = await request.json(); } catch { return json({ error: 'Petición no válida.' }, 400); }
  const v = validate(body);
  if (!v.ok) return json({ error: v.error }, 400);

  client ??= new Anthropic();
  try {
    const res = await client.beta.messages.create({
      model: MODEL,
      max_tokens: 4000,
      betas: ['server-side-fallback-2026-07-01'],
      fallbacks: 'default',
      output_config: { effort: 'low' },
      system: [{ type: 'text', text: SYSTEM, cache_control: { type: 'ephemeral' } }],
      messages: buildMessages(v.data),
    });
    const reply = replyText(res);
    return json({ reply: reply || 'No he podido generar una respuesta. Prueba otra vez.' });
  } catch (e) {
    if (e instanceof Anthropic.RateLimitError) return json({ error: 'El tutor está muy solicitado ahora mismo. Prueba en un minuto.' }, 429);
    if (e instanceof Anthropic.AuthenticationError) { console.error('Tutor: clave de API no válida'); return json({ error: 'El tutor no está disponible.' }, 503); }
    if (e instanceof Anthropic.APIError) { console.error('Tutor: error de la API', e.status, e.message); return json({ error: 'El tutor no está disponible ahora mismo.' }, 502); }
    console.error('Tutor: error', e);
    return json({ error: 'El tutor no está disponible ahora mismo.' }, 502);
  }
}

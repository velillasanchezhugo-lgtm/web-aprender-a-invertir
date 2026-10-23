/**
 * Tutor con IA de umotion Academy (función de Vercel).
 * Desactivado salvo que se definan AI_TUTOR_ENABLED=true y ANTHROPIC_API_KEY en el proyecto.
 * Modelo configurable con AI_TUTOR_MODEL. Ver docs/TUTOR-IA.md.
 */
import Anthropic from '@anthropic-ai/sdk';
import catalog from './_catalog.json' with { type: 'json' };
import { validate, buildSystem, buildMessages, makeLimiter, replyText } from './_tutor-core.js';
import { json, clientIp, sameOrigin, readJson, botCheck, verifyTurnstile, makeBudget, envInt } from './_guard.js';

const MODEL = process.env.AI_TUTOR_MODEL || 'claude-opus-5-5';
const enabled = () => process.env.AI_TUTOR_ENABLED === 'true' && !!process.env.ANTHROPIC_API_KEY;
const SYSTEM = buildSystem(catalog);
const limit = makeLimiter(envInt('AI_TUTOR_MAX_PER_HOUR', 30));
// Ráfagas: como mucho 5 preguntas por minuto y por IP.
const burst = makeLimiter(5, 60_000);
const budget = makeBudget(envInt('AI_TUTOR_MAX_PER_DAY', 1000));
let client = null;

export function GET() {
  return json({ enabled: enabled() });
}

export async function POST(request) {
  if (!enabled()) return json({ error: 'El tutor con IA no está activado.' }, 503);
  if (!sameOrigin(request)) return json({ error: 'Origen no permitido.' }, 403);
  const ip = clientIp(request);
  if (!burst(ip) || !limit(ip)) return json({ error: 'Has hecho muchas preguntas seguidas. Vuelve a intentarlo dentro de un rato.' }, 429, { 'Retry-After': '60' });
  const r = await readJson(request, 40_000);
  if (!r.ok) return json({ error: r.error }, r.status);
  const body = r.body;
  if (botCheck(body)) return json({ error: 'No hemos podido enviar tu pregunta. Espera un momento e inténtalo de nuevo.' }, 400);
  const v = validate(body);
  if (!v.ok) return json({ error: v.error }, 400);
  if (!(await verifyTurnstile(body.turnstile, ip))) return json({ error: 'No hemos podido comprobar que no eres un robot. Recarga la página e inténtalo de nuevo.' }, 403);
  if (!budget()) return json({ error: 'El tutor ha llegado a su límite de hoy. Vuelve mañana o usa el modo guiado.' }, 503);

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
    if (e instanceof Anthropic.APIError) { console.error('Tutor: error de la API', e.status); return json({ error: 'El tutor no está disponible ahora mismo.' }, 502); }
    console.error('Tutor: error', e?.name ?? 'desconocido');
    return json({ error: 'El tutor no está disponible ahora mismo.' }, 502);
  }
}

/**
 * Corrector de peticiones con IA de umotion Academy (función de Vercel). Valora un prompt escrito por el alumno.
 * Usa la misma activación que el tutor: AI_TUTOR_ENABLED=true y ANTHROPIC_API_KEY. Sin ellas, la web usa
 * solo el evaluador local (src/lib/claude/prompt-check.ts). Ver docs/TUTOR-IA.md.
 */
import Anthropic from '@anthropic-ai/sdk';
import { validate, systemFor, SCHEMA, buildMessages, parseReply } from './_prompt-coach-core.js';
import { makeLimiter } from './_tutor-core.js';
import { json, clientIp, sameOrigin, readJson, botCheck, verifyTurnstile, makeBudget, envInt } from './_guard.js';

const MODEL = process.env.AI_TUTOR_MODEL || 'claude-opus-5-5';
const enabled = () => process.env.AI_TUTOR_ENABLED === 'true' && !!process.env.ANTHROPIC_API_KEY;
const limit = makeLimiter(envInt('AI_COACH_MAX_PER_HOUR', 20));
const burst = makeLimiter(4, 60_000);
const budget = makeBudget(envInt('AI_COACH_MAX_PER_DAY', 1000));
let client = null;

export function GET() {
  return json({ enabled: enabled() });
}

export async function POST(request) {
  if (!enabled()) return json({ error: 'La corrección con IA no está activada.' }, 503);
  if (!sameOrigin(request)) return json({ error: 'Origen no permitido.' }, 403);
  const ip = clientIp(request);
  if (!burst(ip) || !limit(ip)) return json({ error: 'Has pedido muchas correcciones seguidas. Vuelve a intentarlo dentro de un rato.' }, 429, { 'Retry-After': '60' });
  const r = await readJson(request, 24_000);
  if (!r.ok) return json({ error: r.error }, r.status);
  const body = r.body;
  if (botCheck(body)) return json({ error: 'No hemos podido enviar tu petición. Espera un momento e inténtalo de nuevo.' }, 400);
  const v = validate(body);
  if (!v.ok) return json({ error: v.error }, 400);
  if (!(await verifyTurnstile(body.turnstile, ip))) return json({ error: 'No hemos podido comprobar que no eres un robot. Recarga la página e inténtalo de nuevo.' }, 403);
  if (!budget()) return json({ error: 'El corrector ha llegado a su límite de hoy. Vuelve mañana; la corrección sin IA sigue disponible.' }, 503);

  client ??= new Anthropic();
  try {
    const res = await client.beta.messages.create({
      model: MODEL,
      max_tokens: 4000,
      betas: ['server-side-fallback-2026-07-01'],
      fallbacks: 'default',
      output_config: { effort: 'low', format: { type: 'json_schema', schema: SCHEMA } },
      system: [{ type: 'text', text: systemFor(v.data.formation), cache_control: { type: 'ephemeral' } }],
      messages: buildMessages(v.data),
    });
    const out = parseReply(res);
    if (!out) return json({ error: 'No he podido corregir esta petición. Prueba a escribirla de otra forma.' }, 502);
    return json(out);
  } catch (e) {
    if (e instanceof Anthropic.RateLimitError) return json({ error: 'El corrector está muy solicitado ahora mismo. Prueba en un minuto.' }, 429);
    if (e instanceof Anthropic.AuthenticationError) { console.error('Corrector: clave de API no válida'); return json({ error: 'El corrector no está disponible.' }, 503); }
    if (e instanceof Anthropic.APIError) { console.error('Corrector: error de la API', e.status); return json({ error: 'El corrector no está disponible ahora mismo.' }, 502); }
    console.error('Corrector: error', e?.name ?? 'desconocido');
    return json({ error: 'El corrector no está disponible ahora mismo.' }, 502);
  }
}

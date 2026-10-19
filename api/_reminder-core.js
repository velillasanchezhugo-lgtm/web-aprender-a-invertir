/**
 * Lógica pura del recordatorio diario (sin red). Se usa en api/cron-reminder.js y api/push.js
 * y se prueba en tests/reminder.test.ts.
 */

export const TZ = 'Europe/Madrid';
export const SEND_HOUR = 16;

/** Fecha (AAAA-MM-DD) y hora en España para un instante dado. Tiene en cuenta el horario de verano. */
export function madridParts(date = new Date()) {
  const f = new Intl.DateTimeFormat('en-CA', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', hourCycle: 'h23' });
  const p = Object.fromEntries(f.formatToParts(date).map((x) => [x.type, x.value]));
  return { day: `${p.year}-${p.month}-${p.day}`, hour: Number(p.hour) };
}

/**
 * Vercel programa en UTC; se lanzan dos ejecuciones (14:00 y 15:00 UTC) y solo envía la que cae
 * a las 16 en España (en verano es la de las 14 UTC; en invierno, la de las 15 UTC).
 */
export const isSendHour = (date = new Date()) => madridParts(date).hour === SEND_HOUR;

const dayNum = (d) => { const [y, m, dd] = d.split('-').map(Number); return Date.UTC(y, m - 1, dd) / 86400000; };
export const daysBetween = (a, b) => Math.round(dayNum(b) - dayNum(a));

/**
 * Decide si recordar y con qué mensaje. sub = { last_active: 'AAAA-MM-DD' | null, streak: número }.
 * - Si ya estudió hoy: nada.
 * - Si estudió ayer: su racha está en juego.
 * - Si hace más tiempo (hasta 30 días): invitación a volver. Más de 30 días: no se molesta.
 */
export function reminderFor(sub, today) {
  const last = sub?.last_active ?? null;
  if (!last) return { title: 'Tu sesión de 5 minutos te espera', body: 'Empieza hoy tu racha: una idea, un test rápido y un consejo práctico.', tag: 'racha' };
  const gap = daysBetween(last, today);
  if (gap <= 0) return null;
  const streak = Number(sub.streak) || 0;
  if (gap === 1) {
    return streak >= 2
      ? { title: `🔥 ${streak} días seguidos`, body: 'No pierdas tu racha: 5 minutos hoy y sigue viva.', tag: 'racha' }
      : { title: 'No pierdas tu racha', body: 'Ayer empezaste. Hoy, otra sesión de 5 minutos y ya llevas dos días.', tag: 'racha' };
  }
  if (gap <= 30) return { title: 'Te echamos de menos', body: 'Retoma hoy: una sesión de 5 minutos y vuelves a empezar tu racha.', tag: 'racha' };
  return null;
}

/** Validación de una suscripción push que llega del navegador. */
export function validSubscription(s) {
  return !!(s && typeof s.endpoint === 'string' && /^https:\/\//.test(s.endpoint) && s.endpoint.length < 1000 && s.keys && typeof s.keys.p256dh === 'string' && typeof s.keys.auth === 'string');
}
export const validDay = (d) => typeof d === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(d);

/**
 * Bucle de envío, independiente de la base de datos y del proveedor push (inyectados) para poder probarlo.
 * page(after) → filas pendientes ordenadas por endpoint; send(sub, msg) → lanza error con statusCode si falla.
 */
export async function runReminders({ today, page, send, markSent, remove, pageSize = 500 }) {
  let sent = 0, removed = 0, skipped = 0, after = '';
  for (;;) {
    const rows = await page(after, pageSize);
    if (!rows.length) break;
    await Promise.all(rows.map(async (s) => {
      const msg = reminderFor(s, today);
      if (!msg) { skipped++; return; }
      try { await send(s, { ...msg, url: '/es/mi-plan/' }); sent++; await markSent(s.endpoint); }
      catch (e) { if (e?.statusCode === 404 || e?.statusCode === 410) { removed++; await remove(s.endpoint); } }
    }));
    if (rows.length < pageSize) break;
    after = rows[rows.length - 1].endpoint;
  }
  return { sent, removed, skipped };
}

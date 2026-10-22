/**
 * Detecta y sustituye datos personales habituales en España antes de pegar un texto en una IA.
 * Funciona solo en el navegador: el texto no sale del dispositivo. Es una ayuda, no una garantía:
 * no reconoce nombres de personas ni direcciones, que hay que revisar a mano.
 */

export type PiiType = 'email' | 'iban' | 'tarjeta' | 'dni' | 'nie' | 'telefono';
export const PII_LABELS: Record<PiiType, string> = {
  email: 'Correo electrónico',
  iban: 'IBAN',
  tarjeta: 'Número de tarjeta',
  dni: 'DNI',
  nie: 'NIE',
  telefono: 'Teléfono',
};

const DNI_LETTERS = 'TRWAGMYFPDXBNJZSQVHLCKE';

/** Letra de control de un DNI o NIE (el NIE cambia X, Y, Z por 0, 1, 2). */
export function idLetterOk(id: string): boolean {
  const s = id.toUpperCase().replace(/[\s-]/g, '');
  const m = s.match(/^([XYZ]?)(\d{7,8})([A-Z])$/);
  if (!m) return false;
  const prefix = m[1] ? String('XYZ'.indexOf(m[1])) : '';
  const digits = prefix + m[2];
  if (digits.length !== 8) return false;
  return DNI_LETTERS[Number(digits) % 23] === m[3];
}

/** Algoritmo de Luhn para números de tarjeta. */
export function luhnOk(num: string): boolean {
  const d = num.replace(/\D/g, '');
  if (d.length < 13 || d.length > 19) return false;
  let sum = 0;
  for (let i = 0; i < d.length; i++) {
    let n = Number(d[d.length - 1 - i]);
    if (i % 2 === 1) { n *= 2; if (n > 9) n -= 9; }
    sum += n;
  }
  return sum % 10 === 0;
}

/** Comprobación del IBAN (módulo 97). */
export function ibanOk(iban: string): boolean {
  const s = iban.toUpperCase().replace(/\s/g, '');
  if (!/^[A-Z]{2}\d{2}[A-Z0-9]{10,30}$/.test(s)) return false;
  const moved = s.slice(4) + s.slice(0, 4);
  let rem = 0;
  for (const ch of moved) {
    const v = /\d/.test(ch) ? ch : String(ch.charCodeAt(0) - 55);
    for (const c of v) rem = (rem * 10 + Number(c)) % 97;
  }
  return rem === 1;
}

const PATTERNS: { type: PiiType; re: RegExp; check?: (m: string) => boolean }[] = [
  { type: 'email', re: /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g },
  { type: 'iban', re: /\b[A-Z]{2}\d{2}(?:[ ]?[A-Z0-9]{4}){3,7}(?:[ ]?\d{1,3})?\b/g, check: ibanOk },
  { type: 'tarjeta', re: /\b(?:\d[ -]?){12,18}\d\b/g, check: luhnOk },
  { type: 'nie', re: /\b[XYZ][-\s]?\d{7}[-\s]?[A-Z]\b/gi, check: idLetterOk },
  { type: 'dni', re: /\b\d{8}[-\s]?[A-Z]\b/gi, check: idLetterOk },
  { type: 'telefono', re: /(?:\+34[\s-]?)?\b[6789](?:[\s-]?\d){8}\b/g },
];

export interface AnonymizeResult { text: string; found: { type: PiiType; label: string; count: number }[]; total: number }

/** Sustituye cada dato por una etiqueta como [DNI 1]. El mismo dato recibe siempre la misma etiqueta. */
export function anonymize(input: string): AnonymizeResult {
  let text = input;
  const counts = new Map<PiiType, Map<string, number>>();
  for (const p of PATTERNS) {
    text = text.replace(p.re, (m) => {
      if (/^\[[A-ZÁÉÍÓÚÑ ]+\d+\]$/.test(m)) return m;
      if (p.check && !p.check(m)) return m;
      const key = m.replace(/[\s-]/g, '').toUpperCase();
      const seen = counts.get(p.type) ?? new Map<string, number>();
      counts.set(p.type, seen);
      if (!seen.has(key)) seen.set(key, seen.size + 1);
      return `[${PII_LABELS[p.type].toUpperCase()} ${seen.get(key)}]`;
    });
  }
  const found = [...counts].map(([type, m]) => ({ type, label: PII_LABELS[type], count: m.size }));
  return { text, found, total: found.reduce((a, f) => a + f.count, 0) };
}

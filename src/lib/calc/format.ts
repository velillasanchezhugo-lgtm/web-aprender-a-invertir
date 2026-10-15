const eur0 = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0, useGrouping: 'always' } as Intl.NumberFormatOptions);
const eur2 = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: 'always' } as Intl.NumberFormatOptions);
const pct1 = new Intl.NumberFormat('es-ES', { style: 'percent', minimumFractionDigits: 1, maximumFractionDigits: 1 });
const num1 = new Intl.NumberFormat('es-ES', { maximumFractionDigits: 1, useGrouping: 'always' } as Intl.NumberFormatOptions);
export const eur = (v: number) => eur0.format(v);
export const eurc = (v: number) => eur2.format(v);
export const pct = (v: number) => pct1.format(v);
export const num = (v: number) => num1.format(v);
/** Lee un número tecleado en formato español o inglés ("1.234,5" o "1234.5"). */
export function parseNum(s: string): number {
  const t = s.trim().replace(/\s/g, '');
  if (t === '') return NaN;
  if (t.includes(',')) return Number(t.replace(/\./g, '').replace(',', '.'));
  return Number(t);
}

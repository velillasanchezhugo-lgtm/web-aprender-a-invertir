/**
 * Muestra una pregunta (opción múltiple, verdadero/falso o estimación) en un contenedor
 * y resuelve con el resultado cuando la persona responde. Accesible por teclado.
 */
import { grade, type Question } from '../lib/academy';

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]!));

export function ask(el: HTMLElement, q: Question, meta = ''): Promise<boolean> {
  return new Promise((resolve) => {
    const fmt = (v: number) => (q.type === 'estimate' ? `${v.toLocaleString('es-ES')} ${q.unit}` : String(v));
    let inner = `${meta ? `<span class="chip">${esc(meta)}</span>` : ''}<h2 class="rq-text" tabindex="-1">${esc(q.q)}</h2>`;
    if (q.type === 'choice') inner += `<div class="rq-opts">${q.options.map((o, i) => `<button type="button" class="rq-opt" data-v="${i}">${esc(o)}</button>`).join('')}</div>`;
    if (q.type === 'truefalse') inner += `<div class="rq-opts tf"><button type="button" class="rq-opt" data-v="true">Verdadero</button><button type="button" class="rq-opt" data-v="false">Falso</button></div>`;
    if (q.type === 'estimate') {
      const mid = Math.round((q.min + q.max) / 2 / q.step) * q.step;
      inner += `<div class="rq-est"><output class="rq-val">${fmt(mid)}</output><input type="range" aria-label="Tu estimación" min="${q.min}" max="${q.max}" step="${q.step}" value="${mid}" /><div class="rq-scale"><span>${fmt(q.min)}</span><span>${fmt(q.max)}</span></div><button type="button" class="btn rq-check">Comprobar</button></div>`;
    }
    inner += `<div class="rq-fb" role="status" aria-live="polite" hidden><p class="rq-verdict"></p><p>${esc(q.explain)}</p></div>`;
    el.innerHTML = inner;
    (el.querySelector('.rq-text') as HTMLElement).focus({ preventScroll: true });
    const done = (ok: boolean, msg: string) => {
      const fb = el.querySelector<HTMLElement>('.rq-fb')!;
      fb.hidden = false; fb.classList.add(ok ? 'ok' : 'ko');
      fb.querySelector('.rq-verdict')!.textContent = ok ? '¡Correcto!' : msg;
      resolve(ok);
    };
    el.querySelectorAll<HTMLButtonElement>('.rq-opt').forEach((b) => b.addEventListener('click', () => {
      const v = q.type === 'truefalse' ? b.dataset.v === 'true' : Number(b.dataset.v);
      const ok = grade(q, v);
      el.querySelectorAll<HTMLButtonElement>('.rq-opt').forEach((o) => {
        o.disabled = true;
        const ov = q.type === 'truefalse' ? o.dataset.v === 'true' : Number(o.dataset.v);
        if (grade(q, ov)) o.classList.add('is-correct');
      });
      if (!ok) b.classList.add('is-wrong');
      const right = el.querySelector('.rq-opt.is-correct')?.textContent ?? '';
      done(ok, `La respuesta correcta es: «${right}».`);
    }));
    const est = el.querySelector<HTMLElement>('.rq-est');
    if (est && q.type === 'estimate') {
      const r = est.querySelector<HTMLInputElement>('input')!; const out = est.querySelector('output')!;
      r.addEventListener('input', () => (out.textContent = fmt(Number(r.value))));
      est.querySelector<HTMLButtonElement>('.rq-check')!.addEventListener('click', (e) => {
        const v = Number(r.value); r.disabled = true; (e.target as HTMLButtonElement).disabled = true;
        const ans = document.createElement('span'); ans.className = 'rq-ans'; ans.textContent = `Respuesta: ${fmt(q.answer)}`; out.after(ans);
        done(grade(q, v), `Dijiste ${fmt(v)}; la respuesta es ${fmt(q.answer)}.`);
      });
    }
  });
}

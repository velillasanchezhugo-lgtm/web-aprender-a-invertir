/** Interacción de los bloques de práctica de peticiones (src/components/PromptCoach.astro). */
import { checkPrompt, LEVEL_LABEL, type CheckOptions } from '../lib/claude/prompt-check';
import { read, write } from './store';
import { guard, waitMinimum, turnstileToken } from './bot-guard';

const esc = (s: string) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));
const strList = (v: unknown): string[] => (Array.isArray(v) ? v.filter((x): x is string => typeof x === 'string') : []);
let aiEnabled: Promise<boolean> | null = null;
const aiOn = () => (aiEnabled ??= fetch('/api/prompt-coach').then((r) => (r.ok ? r.json() : { enabled: false })).then((d) => !!d.enabled).catch(() => false));

export function initPromptCoach() {
  document.querySelectorAll<HTMLElement>('.pcoach:not([data-ready])').forEach((box) => {
    box.dataset.ready = '1';
    const cfg = JSON.parse(box.dataset.cfg!) as CheckOptions & { id: string; task: string };
    const ta = box.querySelector('textarea')!;
    const count = box.querySelector('.pc-count')!;
    const res = box.querySelector<HTMLElement>('.pc-result')!;
    const aiBtn = box.querySelector<HTMLButtonElement>('.pc-ai')!;
    const aiRes = box.querySelector<HTMLElement>('.pc-ai-result')!;
    const bot = guard(box);
    const saved = read<Record<string, string>>('prompt-practice', {});
    if (saved[cfg.id]) ta.value = saved[cfg.id];
    const words = () => (ta.value.trim().match(/\S+/g) ?? []).length;
    const upd = () => { count.textContent = String(words()); };
    upd();
    ta.addEventListener('input', () => { upd(); const s = read<Record<string, string>>('prompt-practice', {}); s[cfg.id] = ta.value.slice(0, 3000); write('prompt-practice', s); });

    box.querySelector('.pc-check')!.addEventListener('click', () => {
      const r = checkPrompt(ta.value, { require: cfg.require, extra: cfg.extra });
      res.hidden = false;
      res.querySelector('.pc-num')!.textContent = String(r.score);
      res.querySelector('.pc-level')!.textContent = LEVEL_LABEL[r.level];
      res.querySelector('.pc-items')!.innerHTML = r.items.filter((it) => it.required || it.ok || ['tarea', 'contexto', 'publico', 'formato'].includes(it.id))
        .map((it) => `<li class="${it.ok ? 'ok' : ''} ${it.required ? 'req' : ''}">${it.ok ? '✓' : '·'} ${esc(it.label)}${it.required ? '<span class="sr-only"> (lo pide el ejercicio)</span>' : ''}</li>`).join('');
      const tips = res.querySelector<HTMLElement>('.pc-tips')!;
      tips.hidden = !r.tips.length;
      tips.querySelector('ul')!.innerHTML = r.tips.map((t) => `<li>${esc(t)}</li>`).join('');
      box.dispatchEvent(new CustomEvent('pcoach:checked', { bubbles: true, detail: { id: cfg.id, score: r.score } }));
      aiOn().then((on) => {
        aiBtn.hidden = !on;
        // Aviso de IA antes de usarla (Reglamento de IA, art. 50).
        if (on && !box.querySelector('.pc-ai-note')) {
          const note = document.createElement('p'); note.className = 'small muted pc-ai-note';
          note.textContent = 'La opinión la genera una IA (Claude, de Anthropic). Puede equivocarse. Envía solo tu petición: no incluyas datos personales.';
          aiBtn.insertAdjacentElement('afterend', note);
        }
      });
    });

    aiBtn.addEventListener('click', async () => {
      aiBtn.disabled = true; aiRes.hidden = false; aiRes.innerHTML = '<p class="small muted">La IA está leyendo tu petición…</p>';
      try {
        await waitMinimum(bot);
        const turnstile = await turnstileToken(box).catch(() => undefined);
        const r = await fetch('/api/prompt-coach', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ prompt: ta.value.slice(0, 3000), task: cfg.task, criteria: [...(cfg.require ?? []), ...(cfg.extra ?? []).map((e) => e.label)], bot: bot.payload(), turnstile }) });
        const d = await r.json().catch(() => ({}));
        if (!r.ok) throw new Error(typeof d.error === 'string' ? d.error : 'No disponible');
        // Lo que llega de la IA se trata como texto: se escapa todo y la nota se fuerza a número.
        const score = Math.max(0, Math.min(10, Math.round(Number(d.puntuacion)) || 0));
        const bien = strList(d.bien), mejorar = strList(d.mejorar);
        const better = typeof d.version_mejorada === 'string' ? d.version_mejorada : '';
        aiRes.innerHTML = `<p><span class="tag">Generado por IA · puede equivocarse</span></p><p><strong>Opinión con IA: ${score}/10</strong></p>`
          + (bien.length ? `<h4>Lo que has hecho bien</h4><ul>${bien.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>` : '')
          + (mejorar.length ? `<h4>Para mejorarla</h4><ul>${mejorar.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>` : '')
          + (better ? `<h4>Una versión mejorada</h4><p class="pc-better">${esc(better)}</p>` : '')
          + '<p class="small muted">Tu petición se ha enviado a un modelo de IA (Claude, de Anthropic) solo para corregirla. No incluyas datos personales.</p>';
      } catch (e) {
        aiRes.innerHTML = `<p class="small">${esc((e as Error).message)}</p>`;
      } finally { aiBtn.disabled = false; }
    });

    box.querySelector('.pc-copy')!.addEventListener('click', async (e) => {
      const b = e.currentTarget as HTMLButtonElement;
      try { await navigator.clipboard.writeText(ta.value); b.textContent = 'Copiada ✓'; } catch { ta.select(); b.textContent = 'Selecciona y copia'; }
      setTimeout(() => { b.textContent = 'Copiar'; }, 1800);
    });
  });
}

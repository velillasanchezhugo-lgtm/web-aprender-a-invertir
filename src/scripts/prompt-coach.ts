/** Interacción de los bloques de práctica de peticiones (src/components/PromptCoach.astro). */
import { checkPrompt, LEVEL_LABEL, type CheckOptions } from '../lib/claude/prompt-check';
import { read, write } from './store';

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]!));
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
      aiOn().then((on) => { aiBtn.hidden = !on; });
    });

    aiBtn.addEventListener('click', async () => {
      aiBtn.disabled = true; aiRes.hidden = false; aiRes.innerHTML = '<p class="small muted">La IA está leyendo tu petición…</p>';
      try {
        const r = await fetch('/api/prompt-coach', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ prompt: ta.value, task: cfg.task, criteria: [...(cfg.require ?? []), ...(cfg.extra ?? []).map((e) => e.label)] }) });
        const d = await r.json();
        if (!r.ok) throw new Error(d.error || 'No disponible');
        aiRes.innerHTML = `<p><strong>Opinión con IA: ${d.puntuacion}/10</strong></p>`
          + (d.bien.length ? `<h4>Lo que has hecho bien</h4><ul>${d.bien.map((x: string) => `<li>${esc(x)}</li>`).join('')}</ul>` : '')
          + (d.mejorar.length ? `<h4>Para mejorarla</h4><ul>${d.mejorar.map((x: string) => `<li>${esc(x)}</li>`).join('')}</ul>` : '')
          + (d.version_mejorada ? `<h4>Una versión mejorada</h4><p class="pc-better">${esc(d.version_mejorada)}</p>` : '')
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

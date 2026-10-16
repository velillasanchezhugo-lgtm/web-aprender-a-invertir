/** Selector «Claro | Oscuro». Por defecto, claro. La elección se recuerda en este dispositivo. */
type Theme = 'light' | 'dark';
const KEY = 'uacademy:theme';

function apply(t: Theme) {
  document.documentElement.dataset.theme = t;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', t === 'dark' ? '#05060b' : '#f8f9fc');
  document.querySelectorAll<HTMLButtonElement>('[data-set-theme]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.setTheme === t)));
}

export function initThemeToggle() {
  const current = (document.documentElement.dataset.theme as Theme) || 'light';
  apply(current);
  document.querySelectorAll<HTMLButtonElement>('[data-set-theme]').forEach((b) => b.addEventListener('click', () => {
    const t = b.dataset.setTheme as Theme;
    apply(t);
    try { localStorage.setItem(KEY, t); } catch { /* sin almacenamiento */ }
    // Los gráficos leen los colores del tema al dibujarse: se redibujan.
    document.querySelectorAll<HTMLFormElement>('form.tool-inputs').forEach((f) => f.dispatchEvent(new Event('input', { bubbles: true })));
  }));
}

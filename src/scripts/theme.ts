export function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  btn?.addEventListener('click', () => {
    const root = document.documentElement;
    const current = root.dataset.theme
      ?? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('uacademy:theme', next); } catch { /* sin almacenamiento */ }
  });
}

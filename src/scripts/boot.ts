/** Arranque ligero en todas las páginas: solo carga la cuenta o los avisos si la persona los usa. */
const hasAuth = () => { try { return Object.keys(localStorage).some((k) => k === 'uacademy-auth' || k.startsWith('uacademy-auth')); } catch { return false; } };
const hasPush = () => { try { return !!localStorage.getItem('uacademy:push'); } catch { return false; } };

export function boot() {
  const accounts = !!(import.meta.env.PUBLIC_SUPABASE_URL && import.meta.env.PUBLIC_SUPABASE_ANON_KEY);
  // En /es/cuenta/ la propia página arranca la sincronización (también al volver del enlace del correo).
  if (accounts && hasAuth() && !location.pathname.startsWith('/es/cuenta')) import('./account').then((m) => m.startSync()).catch(() => {});
  if (hasPush()) import('./push').then((m) => m.watchActivity()).catch(() => {});
  document.querySelectorAll<HTMLElement>('[data-account-link]').forEach((a) => { if (hasAuth()) a.classList.add('signed-in'); });
}

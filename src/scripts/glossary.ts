/**
 * Glosario contextual: los enlaces a /es/glosario/#termino muestran la definición
 * en una ventana accesible sin salir de la lección. Sin JS, el enlace funciona igual.
 */
interface Entry { term: string; def: string }
let cache: Record<string, Entry> | null = null;

async function load(): Promise<Record<string, Entry>> {
  if (cache) return cache;
  const el = document.getElementById('glossary-data');
  if (el?.textContent) { cache = JSON.parse(el.textContent); return cache!; }
  try {
    const res = await fetch('/es/glosario.json');
    cache = await res.json();
  } catch { cache = {}; }
  return cache!;
}

export function initGlossaryPopovers() {
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('.prose a[href*="/es/glosario/#"]'));
  if (!links.length) return;
  const pop = document.createElement('div');
  pop.className = 'gloss-pop';
  pop.setAttribute('role', 'dialog');
  pop.setAttribute('aria-modal', 'false');
  pop.hidden = true;
  document.body.appendChild(pop);
  let opener: HTMLElement | null = null;

  const close = () => { pop.hidden = true; opener?.setAttribute('aria-expanded', 'false'); opener?.focus(); opener = null; };

  links.forEach((a) => {
    a.classList.add('gloss-link');
    a.setAttribute('aria-haspopup', 'dialog');
    a.setAttribute('aria-expanded', 'false');
    a.addEventListener('click', async (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault();
      const id = a.hash.slice(1);
      const data = await load();
      const entry = data[id];
      if (!entry) { location.href = a.href; return; }
      opener = a;
      a.setAttribute('aria-expanded', 'true');
      pop.innerHTML = '';
      const h = document.createElement('p'); h.className = 'gloss-term'; h.textContent = entry.term; h.id = 'gloss-title';
      const d = document.createElement('p'); d.textContent = entry.def;
      const more = document.createElement('a'); more.href = a.href; more.textContent = 'Ver en el glosario';
      const x = document.createElement('button'); x.type = 'button'; x.className = 'gloss-close'; x.textContent = 'Cerrar'; x.addEventListener('click', close);
      pop.setAttribute('aria-labelledby', 'gloss-title');
      pop.append(h, d, more, x);
      const r = a.getBoundingClientRect();
      pop.style.top = `${window.scrollY + r.bottom + 8}px`;
      pop.style.left = `${Math.max(12, Math.min(window.scrollX + r.left, window.scrollX + document.documentElement.clientWidth - 332))}px`;
      pop.hidden = false;
      x.focus();
    });
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !pop.hidden) close(); });
  document.addEventListener('click', (e) => {
    if (!pop.hidden && !pop.contains(e.target as Node) && !(e.target as HTMLElement).closest('.gloss-link')) close();
  });
}

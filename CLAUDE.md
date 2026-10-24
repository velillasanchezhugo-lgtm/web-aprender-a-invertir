# umotion Academy — guía para Claude Code

Academia en español para residentes en España, con cuatro formaciones: **Inversión**, **Emprendimiento** (`docs/EMPRENDIMIENTO.md`), **Claude** (`docs/CLAUDE-FORMACION.md`) y **ChatGPT** (`docs/CHATGPT-FORMACION.md`). umotion Academy no está afiliada a Anthropic ni a OpenAI, y no compara asistentes. Gratis con anuncios en el Nivel 1, enfocada a principiantes. Prototipo: todas las páginas llevan `noindex` hasta que se publique.

Lee antes de cambiar contenido o estructura:
- `docs/ESTANDAR-FORMACIONES.pdf` (fuente: `docs/estandar-formaciones.html`): el sistema común de todas las formaciones (tres niveles, formatos, exámenes, precios, checklist para una formación nueva).
- `docs/CURRICULO.md`: el currículo de la formación Inversión y las decisiones de los socios (sección 14).
- `docs/PENDIENTES.md`: lo que falta.

## Reglas que no se rompen

- **Solo educación general.** Nunca recomendaciones personalizadas, carteras «la mejor», promesas de rentabilidad ni predicciones. Detalle en `docs/CURRICULO.md`, sección 11.2.
- **Sin fórmulas ni cálculos pesados.** Los números los calculan las herramientas de la web (con pruebas).
- **Datos del autor:** solo en letra pequeña al final de `/es/privacidad/`. En ningún otro sitio.
- **Portada:** «Bienvenido a umotion Academy», sin eslogan.
- **Trade Republic** es una recomendación editorial sin pago (`RECOMMENDED_BROKER` en `src/config/site.ts`). Si algún día hay afiliación, activar `PUBLIC_BROKER_PAID` y declararlo.
- **Precios:** solo en `PRICING` (`src/config/site.ts`), nunca dentro del contenido. Se muestran con `src/components/Price.astro`: salen tachados mientras `paymentsEnabled` sea `false` (aún no se cobra).
- **Contenido de pago** (niveles 2 y 3): no se publica sin revisión humana. En la web estática solo van las muestras (`access: sample`).
- **Identificadores** de sesiones, preguntas y competencias: no se renombran ni se borran (rompen el progreso guardado). Convenciones en `docs/CURRICULO.md`, sección 0.1.
- **Sin secretos en el repositorio.** Las claves van en variables de entorno de Vercel.
- Las clases deben funcionar **sin registrarse**; la cuenta es opcional.

## Estilo del texto

Español de España, tuteo, frases cortas, comillas «», `5 €` (espacio antes del símbolo), coma decimal. Cada término técnico se explica en una frase la primera vez; los términos nuevos van al glosario con `short` y `level`.

## Estructura del código

- Astro 5 estático. Contenido en `src/content/` (`sessions`, `lessons`, `strategies`, `investors`, `clases`). Temario de niveles 2 y 3 en `src/data/curriculum.json`; competencias en `src/data/skills.json`; glosario en `src/data/glossary.json`.
- Motor adaptativo: `src/lib/adaptive.ts`. Estado de la academia: `src/lib/academy.ts`. Sincronización con la cuenta: `src/lib/sync.ts`.
- Funciones de Vercel en `api/` (tutor con Claude, avisos push a las 16:00 de Madrid, cuenta con Supabase).
- La web es una academia general. `src/lib/hubs.ts` define cada formación (`HUBS`: inicio, menú de cabecera, color del pósit) y a cuál pertenece cada ruta (`hubOf`). Cabecera `src/components/Header.astro` (según la formación de la página), panel «Formaciones» `src/components/Drawer.astro`, barra del móvil general `src/components/BottomBar.astro`. La portada muestra un pósit por formación (`src/components/Postits.astro`) y «Continuar». Cada formación tiene su pantalla de inicio con cuadrados (`src/components/FormationHub.astro`): «Entrar en la formación» lleva donde lo dejaste y después va cada apartado. Inversión: `/es/inversion/` (sus demás rutas siguen igual); las demás: `/es/<id>/`.
- «Mi cuenta» (`/es/cuenta/`) abre con «Tu panel» (`src/components/ProgressDashboard.astro`, cálculos en `src/lib/dashboard.ts`): medidor del Nivel 1 por formación, racha actual y máxima (todas las formaciones juntas), siguiente sesión, ritmo, módulos y actividad de 12 semanas. Funciona sin cuenta; con cuenta usa el progreso sincronizado.
- «Formación para empresas» (`/es/empresas/`, cuadro negro de la portada `src/components/EmpresasBox.astro`): área privada con la contraseña «umotion» + nombre de la empresa, comprobada en el servidor (`api/empresas.js`, `api/_empresas-core.js`). Empresas en la variable `EMPRESAS_ACCESS` (alta con `npm run empresas:alta -- "Nombre"`) y clave `EMPRESAS_SECRET`; nunca en el repositorio. Las formaciones de cada empresa aún no existen: se crean a medida.
- Formaciones distintas de Inversión (`src/lib/formations.ts`): datos en `src/data/<id>.json`, sesiones en `src/content/<id>/`, glosario en `src/data/glossary-<id>/`, páginas comunes en `src/pages/es/[f]/` (rutas `/es/<id>/…`) y progreso en la clave `academy-<id>`. El reproductor de sesiones es común: `src/components/SessionPlayer.astro`.
- Claude y ChatGPT (mismas herramientas, `FORMATION_TOOLS`): evaluador de peticiones `src/lib/claude/prompt-check.ts` (paso «Practica» con el campo `practice` de las sesiones), corrector opcional con IA `api/prompt-coach.js` y herramientas en `src/pages/es/[f]/herramientas/`.

## Comprobar antes de guardar

```bash
npm test                    # pruebas unitarias
npm run check:content       # control editorial del contenido
npm run build               # build + comprobación posterior
setsid nohup npx astro preview --port 4322 &   # servidor para las pruebas de navegador
npm run audit:browser       # accesibilidad (axe), claro/oscuro, scroll horizontal y pruebas e2e
```

Para ver cambios visuales, haz capturas en móvil (390 px) y escritorio, en tema claro y oscuro.

## Git

- Trabaja en la rama indicada por la sesión. No abras pull requests si no se piden.
- Los mensajes de commit, en español, con las líneas de atribución que indique la sesión.

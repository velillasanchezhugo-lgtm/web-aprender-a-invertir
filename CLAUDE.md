# umotion Academy — guía para Claude Code

Academia en español para residentes en España, con dos formaciones: **Inversión** y **Emprendimiento** (`docs/EMPRENDIMIENTO.md`). Gratis con anuncios en el Nivel 1, enfocada a principiantes. Prototipo: todas las páginas llevan `noindex` hasta que se publique.

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
- Cabecera: `src/components/Header.astro`; panel «Formaciones»: `src/components/Drawer.astro` (formación → niveles → página de cada nivel). Pósits de la portada: `FORMATIONS` en `src/pages/es/index.astro`.
- Emprendimiento: datos en `src/data/emprendimiento.json`, sesiones en `src/content/emprendimiento/`, glosario en `src/data/glossary-emprendimiento/`, rutas bajo `/es/emprendimiento/`, progreso en la clave `academy-emprendimiento`. El reproductor de sesiones es común: `src/components/SessionPlayer.astro`.

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

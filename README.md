# Criterio · Aprende a invertir con criterio propio

> Nombre provisional. No se ha comprobado la disponibilidad de la marca ni del dominio.

Plataforma educativa en español para aprender a invertir desde cero y profundizar después. Está pensada para adultos residentes en España: contenido con fuentes oficiales, herramientas interactivas verificables, un comparador de brókeres con datos fechados y una estructura preparada para monetizar con Google AdSense **sin** comprometer la experiencia educativa.

No ofrece asesoramiento, no vende productos, no ejecuta operaciones y no tiene afiliación.

## Requisitos

- Node.js 22.6 o superior (las pruebas usan `--experimental-strip-types`).
- Opcional: Python 3 con Pillow (para regenerar la imagen social) y Playwright con Chromium (para la auditoría en navegador).

## Uso

```bash
npm install          # dependencias
npm run dev          # servidor de desarrollo en http://localhost:4321/es/
npm test             # pruebas de cálculos, test de aprendizaje y buscador
npm run check:content  # control editorial (estructura, fuentes, enlaces)
npm run build        # compila en dist/ y comprueba SEO, enlaces y scripts
npm run preview      # sirve dist/
npm run verify       # pruebas + control editorial + compilación
npm run audit:browser  # accesibilidad (axe), errores y móvil; requiere `npm run preview -- --port 4322`
```

### Variables de entorno (publicación)

| Variable | Para qué | Por defecto |
|---|---|---|
| `SITE_URL` | URL pública definitiva (canonical, sitemap, Open Graph) | `https://criterio.example` |
| `PUBLIC_ADS_ENABLED` | `true` para activar anuncios | `false` |
| `PUBLIC_ADSENSE_CLIENT` | Identificador `ca-pub-…` de AdSense | vacío |
| `PUBLIC_AD_SLOT_ARTICLE`, `PUBLIC_AD_SLOT_LISTING`, `PUBLIC_AD_SLOT_SIDEBAR` | Identificadores de los bloques de anuncios | vacío |
| `PUBLIC_CMP` | `google` (Privacidad y mensajes de AdSense) o `external` | `google` |
| `PUBLIC_AD_PLACEHOLDERS` | `true` para ver los huecos reservados en desarrollo | `false` |

Con la publicidad desactivada, el sitio no carga **ningún** script de terceros; la compilación falla si alguna página lo intentara.

## Estructura

```
src/
  config/site.ts           Nombre, datos del titular (vacíos), publicidad, afiliación, idiomas
  content/lessons/         Lecciones (Markdown + frontmatter validado)
  content/strategies/      Estrategias (estructura obligatoria de 10 apartados)
  content/investors/       Historias de inversores, casos y conceptos
  content.config.ts        Esquemas de contenido (fuentes, fechas, estado editorial…)
  data/sources.json        Registro de fuentes con fecha de consulta
  data/brokers.json        Intermediarios: cada dato con estado de verificación y fuente
  data/quiz.json           Reglas públicas y editables del test de aprendizaje
  data/glossary.json       Glosario
  data/ipc-spain.json      IPC de España (INE), datos estáticos
  data/corrections.json    Historial público de correcciones
  lib/calc/                Cálculos puros (con pruebas en tests/)
  lib/quiz.ts              Motor del test (con pruebas)
  components/              Componentes visuales, AdSlot (publicidad), Consent (consentimiento)
  pages/es/                Páginas en español
  pages/en/                Marcador de la versión inglesa (no indexado)
  scripts/                 JavaScript del navegador (progreso, gráficos, búsqueda, glosario)
scripts/                   Comprobaciones de compilación y control editorial
docs/                      Documentación de entrega, pendientes y planes
```

## Documentación

- [docs/ENTREGA.md](docs/ENTREGA.md): qué se ha construido y comprobado, y qué falta.
- [docs/ARQUITECTURA.md](docs/ARQUITECTURA.md): decisiones técnicas, identidad visual y recorridos.
- [docs/ACTUALIZAR.md](docs/ACTUALIZAR.md): cómo actualizar contenido, tarifas, fiscalidad e IPC.
- [docs/PENDIENTES.md](docs/PENDIENTES.md): datos y credenciales que debe aportar el titular, y revisiones profesionales.
- [docs/PUBLICAR-Y-ADSENSE.md](docs/PUBLICAR-Y-ADSENSE.md): publicación, consentimiento y solicitud de AdSense.
- [docs/CALENDARIO-EDITORIAL.md](docs/CALENDARIO-EDITORIAL.md): plan de ocho semanas.
- [docs/MODELO-ECONOMICO.md](docs/MODELO-ECONOMICO.md) y [docs/modelo-economico.html](docs/modelo-economico.html): modelo editable.
- [docs/CRECIMIENTO-90-DIAS.md](docs/CRECIMIENTO-90-DIAS.md): prioridades de los primeros 90 días.
- [docs/VERSION-INGLESA.md](docs/VERSION-INGLESA.md): cómo preparar la versión inglesa.

# umotion Academy · Aprende a invertir en 5 minutos al día

Academia digital de inversión de **umotion**, en español y para residentes en España. Se centra en quien empieza de cero, con un recorrido de Cero a Experto:

- **Camino Cero**: 14 sesiones de 5 minutos. Cada una tiene una idea, un ejemplo con números, un test interactivo y una acción útil para ese mismo día.
- **Nivel Básico en 5 módulos** de sesiones con caso práctico: Invertir ya, Productos, Conocer empresas, Entender noticias y Tipos de trading.
- **Aprendizaje personalizado**: perfil, diagnóstico adaptativo, modelo del alumno por competencias (48), ruta recalculada con cada respuesta, refuerzos y motivos de cada recomendación.
- **Tutor**: dudas y análisis guiado de noticias; con IA (Claude) opcional mediante una función de Vercel. Ver [docs/TUTOR-IA.md](docs/TUTOR-IA.md).
- **Planificador** según objetivo, tiempo y días, con recordatorios en el calendario.
- **Repaso espaciado**, rachas, logros por comprender (nunca por invertir) y exámenes por nivel.
- Biblioteca con lecturas, estrategias e historias documentadas con fuentes oficiales, herramientas verificables y un comparador de brókeres con datos fechados.

Está preparada para monetizar con Google AdSense **sin** comprometer la experiencia educativa. El plan pedagógico está en [docs/PLAN-DE-ENSENANZA.md](docs/PLAN-DE-ENSENANZA.md).

**Modo prototipo**: mientras no haya dominio, todas las páginas llevan `noindex` y `robots.txt` bloquea el rastreo. Para publicar de verdad: `PUBLIC_INDEXABLE=true`.

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
npm run audit:browser  # accesibilidad (axe), recorrido de la academia, personalización y progreso; requiere `npm run preview -- --port 4322`
```

### Publicar un prototipo en Vercel

Importa el repositorio en Vercel: `vercel.json` ya define la compilación, la redirección de `/` a `/es/` y unas cabeceras de seguridad básicas. La URL de Vercel se usa como dominio del sitio, y la web sigue sin indexarse hasta que pongas `PUBLIC_INDEXABLE=true`.

### Variables de entorno (publicación)

| Variable | Para qué | Por defecto |
|---|---|---|
| `SITE_URL` | URL pública definitiva (canonical, sitemap, Open Graph). En Vercel se toma sola | `https://umotion-academy.example` |
| `PUBLIC_INDEXABLE` | `true` para permitir la indexación (quitar el modo prototipo) | `false` |
| `PUBLIC_ADS_ENABLED` | `true` para activar anuncios | `false` |
| `PUBLIC_ADSENSE_CLIENT` | Identificador `ca-pub-…` de AdSense | vacío |
| `PUBLIC_AD_SLOT_ARTICLE`, `PUBLIC_AD_SLOT_LISTING`, `PUBLIC_AD_SLOT_SIDEBAR` | Identificadores de los bloques de anuncios | vacío |
| `PUBLIC_CMP` | `google` (Privacidad y mensajes de AdSense) o `external` | `google` |
| `PUBLIC_AD_PLACEHOLDERS` | `true` para ver los huecos reservados en desarrollo | `false` |
| `PUBLIC_AI_TUTOR` | `true` para mostrar el tutor con IA | `false` |
| `PUBLIC_SUPABASE_URL`, `PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY` | Cuentas opcionales (ver [docs/CUENTAS-Y-AVISOS.md](docs/CUENTAS-Y-AVISOS.md)) | desactivado |
| `PUBLIC_VAPID_PUBLIC_KEY`, `VAPID_PRIVATE_KEY`, `VAPID_SUBJECT`, `CRON_SECRET` | Recordatorio diario a las 16:00 por notificación | desactivado (se ofrece el calendario) |
| `PUBLIC_BROKER_PAID` | `true` si hay remuneración de Trade Republic | `false` |
| `AI_TUTOR_ENABLED`, `ANTHROPIC_API_KEY`, `AI_TUTOR_MODEL` | Función del servidor del tutor (solo en Vercel, nunca en el repositorio) | desactivado; modelo `claude-opus-5-5` |

Con la publicidad desactivada, el sitio no carga **ningún** script de terceros; la compilación falla si alguna página lo intentara. El tutor con IA llama a una función del propio sitio (`/api/tutor`), nunca directamente a terceros desde el navegador.

## Estructura

```
src/
  config/site.ts           Nombre, datos del titular (vacíos), publicidad, afiliación, idiomas
  content/sessions/        Sesiones de 5 minutos: Camino Cero y módulos del nivel Básico (gancho, idea, números, caso, test, acción)
  data/skills.json         Mapa de competencias (48) y áreas (9)
  content/lessons/         Lecturas de los niveles Básico a Experto (Markdown + frontmatter validado)
  content/strategies/      Estrategias (estructura obligatoria de 10 apartados)
  content/investors/       Historias de inversores, casos y conceptos
  content.config.ts        Esquemas de contenido (fuentes, fechas, estado editorial…)
  data/sources.json        Registro de fuentes con fecha de consulta
  data/brokers.json        Intermediarios: cada dato con estado de verificación y fuente
  data/academy.json        Objetivos, niveles y prueba de nivel inicial
  data/quiz.json           Reglas públicas y editables del test detallado de aprendizaje
  data/glossary.json       Glosario
  data/ipc-spain.json      IPC de España (INE), datos estáticos
  data/corrections.json    Historial público de correcciones
  lib/calc/                Cálculos puros (con pruebas en tests/)
  lib/academy.ts           Motor de la academia: preguntas, repaso espaciado, rachas, plan, logros (con pruebas)
  lib/adaptive.ts          Motor adaptativo: modelo del alumno (BKT), diagnóstico, recomendador y ruta (con pruebas)
  lib/news.ts              Analizador guiado de noticias (con pruebas)
  lib/quiz.ts              Motor del test detallado (con pruebas)
  components/              Componentes visuales, AdSlot (publicidad), Consent (consentimiento)
  pages/es/                Páginas en español
  pages/en/                Marcador de la versión inglesa (no indexado)
  scripts/                 JavaScript del navegador (progreso, gráficos, búsqueda, glosario)
api/                       Función de Vercel del tutor con IA (desactivada por defecto)
scripts/                   Comprobaciones de compilación, control editorial y catálogo del tutor
docs/                      Documentación de entrega, pendientes y planes
```

## Documentación

- [docs/PLAN-DE-ENSENANZA.md](docs/PLAN-DE-ENSENANZA.md): formato de sesión, Camino Cero, planificación, retención y niveles.
- [docs/ANALISIS-CURSOS.md](docs/ANALISIS-CURSOS.md): análisis de 15 cursos y patrones de habilidades más útiles.
- [docs/TUTOR-IA.md](docs/TUTOR-IA.md): personalización, tutor y cómo activar la IA.
- [docs/CUENTAS-Y-AVISOS.md](docs/CUENTAS-Y-AVISOS.md): cuentas opcionales, sincronización y recordatorio diario a las 16:00.
- [docs/ENTREGA.md](docs/ENTREGA.md): qué se ha construido y comprobado, y qué falta.
- [docs/ARQUITECTURA.md](docs/ARQUITECTURA.md): decisiones técnicas, identidad visual y recorridos.
- [docs/ACTUALIZAR.md](docs/ACTUALIZAR.md): cómo actualizar contenido, tarifas, fiscalidad e IPC.
- [docs/PENDIENTES.md](docs/PENDIENTES.md): datos y credenciales que debe aportar el titular, y revisiones profesionales.
- [docs/PUBLICAR-Y-ADSENSE.md](docs/PUBLICAR-Y-ADSENSE.md): publicación, consentimiento y solicitud de AdSense.
- [docs/CALENDARIO-EDITORIAL.md](docs/CALENDARIO-EDITORIAL.md): plan de ocho semanas.
- [docs/MODELO-ECONOMICO.md](docs/MODELO-ECONOMICO.md) y [docs/modelo-economico.html](docs/modelo-economico.html): modelo editable.
- [docs/CRECIMIENTO-90-DIAS.md](docs/CRECIMIENTO-90-DIAS.md): prioridades de los primeros 90 días.
- [docs/VERSION-INGLESA.md](docs/VERSION-INGLESA.md): cómo preparar la versión inglesa.

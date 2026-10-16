# Arquitectura, identidad y recorridos

## Herramientas utilizadas

El repositorio estaba vacío. No se ha usado Claude Design: no estaba disponible en el entorno de trabajo. El diseño se ha hecho directamente en código (sistema de tokens CSS) y se ha revisado con capturas de pantalla automatizadas en móvil y escritorio, en modo claro y oscuro.

## Decisiones técnicas

| Necesidad | Decisión | Motivo |
|---|---|---|
| Contenido público indexable y rápido | **Astro 5** con salida estática | HTML completo sin JavaScript para leer; islas de JS solo en herramientas |
| Contenido mantenible | Markdown con esquemas validados (`src/content.config.ts`) | La compilación falla si falta un campo editorial (fuentes, fechas, estado) |
| Interactividad | TypeScript sin framework | Menos dependencias, mejor rendimiento en móvil |
| Cálculos verificables | Módulos puros en `src/lib/calc/` con pruebas `node:test` | La misma función se usa en la web y en las pruebas |
| Búsqueda | Índice JSON generado al compilar y búsqueda en el navegador | Sin servicios externos ni cookies |
| Progreso | `localStorage` con prefijo `criterio:` | Sin cuentas: no hay un backend seguro que justifique pedir datos |
| Tipografías | Source Serif 4 e Inter alojadas en el propio sitio (Fontsource) | Evita transferir la IP del visitante a terceros |
| Publicidad | Componente `AdSlot` y `Consent`, desactivados por defecto | Ningún script de terceros hasta que exista configuración real |
| SEO | Canonical, metadatos únicos, datos estructurados, sitemap generado desde el HTML final, robots | El sitemap solo incluye páginas sin `noindex` |
| Idiomas | Rutas `/es/` y `/en/`; hreflang solo si hay traducción publicada | La versión inglesa no se indexa mientras esté vacía |

### Separación de responsabilidades

- **Contenido educativo**: `src/content/`.
- **Datos de brókeres**: `src/data/brokers.json`, con estado de verificación por campo.
- **Fuentes**: `src/data/sources.json`, referenciadas por identificador.
- **Traducciones**: futuras colecciones `src/content/*/en/` y `src/pages/en/` (ver `VERSION-INGLESA.md`).
- **Reglas del test**: `src/data/quiz.json`, publicadas automáticamente en `/es/test/reglas/`.
- **Cálculos**: `src/lib/calc/` y `src/lib/quiz.ts`.
- **Componentes visuales**: `src/components/`, `src/layouts/`, `src/styles/global.css`.
- **Publicidad y consentimiento**: `src/config/site.ts`, `src/components/AdSlot.astro`, `src/components/Consent.astro`.

### Cuentas de usuario

No se han implementado. Exigirían autenticación segura, almacenamiento cifrado, borrado real y una política de privacidad ampliada. Con progreso local, exportación y borrado, la necesidad actual está cubierta sin recoger datos. Si se añaden en el futuro: autenticación sin contraseña o con un proveedor auditado, minimización (solo progreso, nunca respuestas financieras) y un borrado que elimine también las copias de seguridad dentro de un plazo definido.

## Identidad visual (provisional)

- **Nombre**: *umotion Academy*, producto de umotion. Lema: «Aprende a invertir en 5 minutos al día». (Versión 1: el prototipo se llamó provisionalmente «Criterio»; la identidad visual de abajo es la de esa versión y ha sido sustituida por la de umotion, ver `PLAN-DE-ENSENANZA.md` y el README).
- **Marca**: una «C» abierta con un nivel horizontal ocre (medir antes de actuar).
- **Tipografía**: Source Serif 4 para titulares y lectura larga (19 px, interlineado 1,7 y una medida de 68 caracteres); Inter para la interfaz.
- **Color**: papel cálido `#fbf9f4`, tinta `#1b1f23`, azul petróleo `#0f4c5c` para la navegación y las acciones, ocre `#c8892b` para el aprendizaje y el progreso, y un rojo teja sobrio para pérdidas y advertencias. Sin verdes y rojos de casino. Tiene modo oscuro.
- **Movimiento**: mínimo; se desactiva con `prefers-reduced-motion`.
- **Accesibilidad**: contraste AA verificado con axe-core, navegación por teclado, enlace para saltar al contenido, gráficos con título, descripción y tabla alternativa.

## Recorridos

1. **Empiezo desde cero** (`/es/empieza-desde-cero/`): 10 lecciones en orden (unos 80 minutos) y un ejercicio final con 15.000 € ficticios. La primera sesión, las dos primeras lecciones, dura unos 15 minutos.
2. **Quiero profundizar** (`/es/biblioteca/`): 15 lecciones intermedias y avanzadas por tema y nivel, 6 estrategias, 10 historias y casos, herramientas y glosario.

Cada lección tiene la misma estructura, impuesta por el esquema: qué aprenderás, prerrequisitos, explicación, ejemplo numérico, error frecuente, ejercicio, resumen, fuentes con fecha de revisión y siguiente lección.

## Espacios publicitarios

| Página | Ubicación | Altura reservada |
|---|---|---|
| Lecciones, estrategias, historias | Al final, después de las fuentes y lejos de botones | 280 px |
| Herramientas | Después de la metodología, lejos de los formularios | 280 px |
| Biblioteca y temas | Entre el listado y la sección «En preparación» | 250 px |
| Portada, ruta, test, ejercicio final, comparador, progreso, búsqueda, legales | Sin publicidad | — |

Sin publicidad activa no se renderiza nada, de modo que no quedan huecos vacíos. Con `PUBLIC_AD_PLACEHOLDERS=true` se ven los huecos reservados para revisar el diseño.

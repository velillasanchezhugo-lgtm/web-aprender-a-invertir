# Entrega de la primera versión funcional

Fecha: 15 de octubre de 2026.

## 1. Qué se ha construido y comprobado

**Web (93 páginas, 84 indexables):**

- **Portada**: propuesta de valor, «Empieza desde cero», test, continuar la última lección, accesos a brókeres, herramientas, estrategias, historias, biblioteca y glosario, buscador y temas.
- **Ruta «Empieza desde cero»**: 10 lecciones (unos 80 minutos; la primera sesión, unos 15) y un ejercicio final con 15.000 € ficticios en 6 pasos, sin llamada a abrir cuentas.
- **Academia**: 15 lecciones intermedias y avanzadas y 14 páginas de tema.
- **Estrategias**: 6 estrategias con la estructura completa de 10 apartados y su nivel de evidencia.
- **Historias**: 5 inversores, 4 casos de fracaso o fraude y una página sobre el sesgo de supervivencia.
- **Herramientas** (8): interés compuesto, inflación con datos del INE, caídas, diversificación y rebalanceo, apalancamiento, objetivos, cartera de práctica ficticia y comparador de comisiones.
- **Test de aprendizaje**: 16 preguntas opcionales, 9 reglas de contradicción, plan de 7 apartados con plan de 4 semanas y reglas públicas en `/es/test/reglas/`.
- **Comparador de brókeres**: 4 intermediarios con ficha completa y estado de verificación por dato.
- **Retención y apoyo**: glosario (56 términos, también en ventanas contextuales dentro de las lecciones), buscador local, «Mi progreso» (marcadores, repasos, lista de comprobación, exportar y borrar, recordatorios `.ics`) y registro de fuentes.
- **Páginas de transparencia y legales**: aviso legal, privacidad, cookies, condiciones, alcance educativo, metodología, financiación y conflictos, correcciones y contacto.
- **Preparación técnica**: `/en/` sin indexar, 404, `robots.txt`, `sitemap.xml`, `ads.txt` condicional, imagen social y datos estructurados (Article, Course, BreadcrumbList, DefinedTermSet, WebApplication, WebSite y Organization).

**Comprobaciones automáticas (todas superadas):**

| Comprobación | Herramienta | Resultado |
|---|---|---|
| Fórmulas y casos límite (tasa 0, negativas, caídas del 0 % y del 100 %, mínimos y máximos de comisiones, apalancamiento 1:1, saldo negativo…) | `npm test` (33 pruebas) | ✔ |
| Test: respuestas vacías, contradictorias y coherentes; lecciones citadas existentes; ausencia de recomendaciones de producto | `npm test` | ✔ |
| Costes de brókeres coherentes con sus tarifas publicadas | `tests/brokers.test.ts` | ✔ |
| Buscador: acentos, plurales, sin resultados | `tests/search.test.ts` | ✔ |
| Estructura editorial, fuentes existentes, enlaces entre lecciones, ejemplos ficticios marcados | `npm run check:content` | ✔ |
| Títulos y descripciones únicos, canonical, enlaces internos rotos, ningún script de terceros con la publicidad desactivada | `npm run build` | ✔ |
| Accesibilidad WCAG 2.1 AA (axe-core) en 32 páginas, en modo claro y oscuro, a 375 px | `tests/e2e/audit.mjs` | ✔ 0 infracciones |
| Sin desplazamiento horizontal en móvil, sin errores de consola, sin peticiones externas | `tests/e2e/audit.mjs` | ✔ |
| Persistencia y borrado del progreso, test guardado solo si se pide, enlace para saltar al contenido | `tests/e2e/progress.mjs` | ✔ |
| Publicidad activada en prueba: script solo en lecciones, herramientas y biblioteca; nunca en el test, el ejercicio, el comparador, el progreso, la búsqueda ni las páginas legales; `ads.txt` generado | Compilación con variables de prueba | ✔ |

## 2. Cómo ejecutar y actualizar la web

Ver el `README.md` (instalación y órdenes) y `docs/ACTUALIZAR.md` (lecciones, brókeres, IPC, fiscalidad y reglas del test).

## 3. Qué contenido está verificado

Verificado en fuente oficial el 15/10/2026:

- **CFD y apalancamiento**: Resoluciones de la CNMV de 27/06/2019 (garantías mínimas, cierre al 50 %, protección frente a saldo negativo, advertencias) y de 11/07/2023 (prohibición de publicidad a minoristas y extensión a futuros y opciones), en el BOE.
- **Fiscalidad 2025**: escala del ahorro (Manual práctico de Renta 2025 de la AEAT: tramos estatales del 9,5 % al 15 %, que suman del 19 % al 30 % en territorio común), régimen de traspasos de IIC (excluye los ETF) y regla de los dos meses.
- **Garantías**: FGD (100.000 € en depósitos y, por separado, en valores por no devolución; no cubre pérdidas de valor); FOGAIN (100.000 €, ficha de la CNMV); sistema alemán (90 % hasta 20.000 €, según DEGIRO).
- **Inflación**: serie del IPC del INE de 1992 a 2025 (dato de diciembre).
- **Berkshire Hathaway**: tabla de rentabilidad de 1965 a 2025 (carta de 2025) y relevo de Buffett como consejero delegado.
- **LTCM**: capital, activos, apalancamiento y recapitalización (informe del President's Working Group de 1999).
- **Madoff**: recuperaciones a 29/09/2026 (administrador concursal).
- **Vanguard**: primer fondo indexado para minoristas en 1976.
- **Brókeres**: MyInvestor, DEGIRO e Interactive Brokers, en las tarifas y datos de su web oficial marcados como «Verificado»; Trade Republic, de forma parcial (lista oficial de 2023 y nota de prensa de 2025).

Escrito a partir de conocimiento general y referencias bibliográficas no consultadas en línea en esta revisión, y señalado así en la web: parte de las historias de inversores (Munger, Lynch, Graham), resultados de estudios académicos (Barber y Odean, Fama y French, Chague y otros, SPIVA, Vanguard 2012) y datos de índices (S&P 500, Nikkei).

**Estado editorial**: todas las páginas figuran como «Pendiente de revisión humana», con autoría honesta («Redacción de Criterio, borrador elaborado con asistencia de IA») y sin revisor inventado.

## 4. Qué falta por revisar

Ver `docs/PENDIENTES.md`: datos de brókeres marcados como parciales o pendientes, cifras históricas sin fuente primaria, sentencias de Fórum y Afinsa, revisión jurídica de los textos legales, revisión fiscal y revisión editorial humana de todo el contenido.

## 5. Datos o credenciales que debes aportar

Datos del titular (LSSI), dominio, proveedor de alojamiento, cuenta y bloques de AdSense, mensaje de consentimiento en AdSense y, si existen, revisores reales. Detalle en `docs/PENDIENTES.md`. No hace falta ninguna credencial para ejecutar ni compilar.

## 6. Cómo publicar y preparar la solicitud de AdSense

Ver `docs/PUBLICAR-Y-ADSENSE.md`: publicación estática, Search Console, requisitos de Google (edad, contenido propio, CMP certificada en el EEE), obligaciones legales españolas (LSSI, guía de la AEPD) y lista de comprobación previa a la solicitud.

## 7. Prioridades para los primeros 90 días

Ver `docs/CRECIMIENTO-90-DIAS.md` y `docs/CALENDARIO-EDITORIAL.md`. En resumen: fiabilidad y revisión humana primero; después profundidad útil (KID de fondos, pensiones, tutorial de registros); y monetización prudente solo cuando el contenido esté revisado, midiendo el aprendizaje y no solo el tiempo de permanencia.

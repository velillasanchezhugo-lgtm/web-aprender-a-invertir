# Currículo de umotion Academy — documento maestro

> **Para Claude Code:** este archivo es la columna vertebral del contenido de la academia. Define los niveles, los módulos, las sesiones, las competencias, los exámenes y las reglas editoriales. Antes de crear o modificar contenido, léelo entero. Si algo de la web contradice este documento, este documento manda; si este documento contradice la ley o una fuente oficial, para y avisa.

| Campo | Valor |
|---|---|
| Versión | 1.2 |
| Fecha | 21/10/2026 |
| Responsable del documento | CEO de umotion |
| Estado del contenido | Nivel 1: 77 sesiones publicadas en borrador (incluido el nuevo módulo «Mantener el rumbo»), con examen, insignia y plantilla del plan. Niveles 2 y 3: temario planificado y visible en la web, con 3 muestras abiertas redactadas |
| Web actual | https://web-aprender-a-invertir.vercel.app (Astro, estática, `noindex`) |

---

## Índice

0. Cómo usar este documento
1. Promesa de la academia y principios no negociables
2. Arquitectura: tres niveles
3. Migración desde la estructura actual (cinco niveles → tres)
4. Formatos de sesión por nivel
5. Nivel 1 — Invertir por tu cuenta
6. Nivel 2 — Saber enseñar
7. Nivel 3 — Profesional con certificado umotion
8. Catálogo de competencias
9. Exámenes, insignias y certificado
10. Personalización, repaso y tutor
11. Reglas editoriales, legales y de calidad
12. Acceso y monetización (lo que afecta al contenido)
13. Orden de trabajo para Claude Code
14. Decisiones pendientes de los socios
15. Registro de cambios de la versión 1.2

---

## 0. Cómo usar este documento

1. **Lo que ya existe se conserva.** Las 70 sesiones actuales, sus `slug`, sus identificadores de pregunta (`no07-q1`…) y las 52 competencias actuales no se renombran ni se borran. El progreso de los usuarios está guardado en su dispositivo con esos identificadores; cambiarlos rompe su progreso.
2. **Lo nuevo sigue las mismas convenciones** (sección 0.1).
3. **Mismo esquema de datos.** Las sesiones nuevas usan el esquema de contenido de las sesiones actuales. Si un nivel necesita campos extra, se añaden como **opcionales** (sección 4.4) para no romper las sesiones existentes.
4. **Cada tabla de sesiones de este documento es un encargo.** Cada fila indica qué debe aprender el alumno, la práctica y las competencias. El texto final lo redacta Claude Code siguiendo el formato de su nivel (sección 4) y las reglas editoriales (sección 11).
5. **Nada de pago se publica sin revisión humana** (sección 11.3).

### 0.1 Convenciones de identificadores

| Elemento | Convención | Ejemplo |
|---|---|---|
| Sesión del Camino Cero (existente) | `NN-slug` | `03-el-colchon-primero` |
| Sesión de módulo de Nivel 1 | `<mod>-NN-slug` | `ya-06-aportar-cada-mes` |
| Clase de Nivel 2 | `n2-<mod>-NN-slug` | `n2-rf-03-la-curva-de-tipos` |
| Lección de Nivel 3 | `n3-<mod>-NN-slug` | `n3-reg-02-mifid-ii-por-dentro` |
| Pregunta de test | id de sesión sin guiones ni slug + `-qN` | `ya06-q1`, `n2rf03-q4`, `n3reg02-q7` |
| Excepciones que se conservan | Camino Cero: `sNN-qN`; Trade Republic: `apNN-qN` | `s03-q2`, `ap04-q1` (no se renombran: romperían el progreso guardado) |
| Competencia | `kebab-case` en español, sin prefijo de nivel | `curva-tipos` |
| Módulo | código corto de 2 a 4 letras | `rf`, `reg`, `mr` |
| Ruta pública de sesión | `/es/sesion/<slug>/` | Nivel 1 (ya existe) |
| Ruta de contenido de pago | `/es/nivel-2/<slug>/`, `/es/nivel-3/<slug>/` | Servida desde el servidor con control de acceso. Hoy solo existen las muestras abiertas |
| Página de cada nivel | `/es/niveles/`, `/es/nivel-2/`, `/es/nivel-3/` | Temario completo con candados |

---

## 1. Promesa de la academia y principios no negociables

### 1.1 Promesa

> Aprender a invertir de forma fácil y útil. Sin cálculos pesados: teoría justa y práctica corta para que, al terminar el Nivel 1, puedas invertir por tu cuenta con criterio.

### 1.2 Principios

1. **Útil antes que completo.** Cada sesión termina en algo que el alumno hace o decide. Si un concepto no cambia ninguna decisión del alumno en su nivel, se deja para un nivel superior.
2. **Sin cálculos pesados en ningún nivel.** Los números los hacen las herramientas de la web. El alumno aprende a **interpretar** un dato, no a calcularlo a mano. En los niveles 2 y 3 se explican conceptos técnicos (duración, ratio de Sharpe, VaR…) por su significado y su uso, nunca por su derivación matemática.
3. **Subir de nivel significa comprender más, no operar más ni asumir más riesgo.** Este mensaje ya está en la web y se mantiene en los tres niveles.
4. **Educación general, nunca recomendación personalizada.** Ninguna sesión dice a un alumno concreto qué comprar ni cuándo. Ver sección 11.2.
5. **España primero.** Fiscalidad, supervisores, productos y ejemplos pensados para un residente en España, con enlaces a fuentes oficiales.
6. **Fuentes primarias y fechas.** CNMV, Banco de España, ESMA, BCE, AEAT, BOE, INE, documentación oficial de productos. Cada dato que caduca lleva fecha de consulta.
7. **Honestidad sobre la autoría.** El contenido redactado con IA se marca como borrador hasta que lo revise una persona identificable (estados editoriales de la web: Borrador → Pendiente de revisión humana → Revisado).
8. **Ejemplos ficticios identificados.** Todo caso inventado lleva «Ejemplo ficticio con fines educativos». Los históricos indican fechas, activo, moneda y fuente.

---

## 2. Arquitectura: tres niveles

| | Nivel 1 — Invertir por tu cuenta | Nivel 2 — Avanzado («dominarlo tan bien que podrías explicarlo») | Nivel 3 — Profesional |
|---|---|---|---|
| **Promesa** | Al terminar puedes montar, comprar, mantener y revisar tu propia cartera sin depender de nadie, y detectar productos y propuestas que no te convienen. | Al terminar dominas la inversión lo bastante como para explicársela con rigor a otra persona y responder sus dudas habituales sin recomendarle productos. | Al terminar tienes una base conceptual de calibre comparable a las áreas que cubren formaciones como EFA (EFPA España) o CFA Investment Foundations, y obtienes el certificado umotion verificable. |
| **Para quién** | Cualquiera, desde cero. | Quien ya invierte y quiere entender a fondo. | Quien quiere un nivel profesional o trabajar en el sector. |
| **Precio** | Gratis | Plan Avanzado (5 €/mes o 49 €/año, 7 días de prueba) | Curso Profesional (50 €, pago único) + certificación aparte (99 €, D-08) |
| **Formato** | Sesión de 5 min | Clase de 15–30 min | Lección de 30–45 min |
| **Volumen** | 77 sesiones (54 del núcleo + 23 de ampliación), unas 6,5 h | 66 clases, unas 22 h, **más una «Clase del mes»** | 56 lecciones + proyecto, unas 40 h |
| **Cierre** | Examen N1 + ejercicio con dinero ficticio + «Mi plan en una página» | Examen N2 + proyecto «Tu primera clase» | Examen final + proyecto profesional (supervisión e identidad: D-09) |
| **Reconocimiento** | Insignia gratuita «Fundamentos de inversión — umotion» | Insignia «Nivel 2 — umotion» | «Certificado umotion en Inversión — Nivel Profesional», verificable |

**Nombre del Nivel 2.** Se vende como «Avanzado», porque el público de pago quiere saber más, no necesariamente enseñar. El enfoque docente («Cómo explicarlo», «Explícalo tú») se mantiene como método: explicar algo es la mejor prueba de haberlo entendido.

**Regla de progresión.** Cada nivel tiene un examen de acceso opcional: quien lo apruebe con un 80 % o más puede saltarse el nivel anterior. El diagnóstico adaptativo actual (`/es/empezar/`) sigue decidiendo la ruta dentro de cada nivel.

> **Importante sobre el Nivel 3.** «Comparable» se refiere a las áreas de conocimiento tratadas, no a la equivalencia del título. El certificado umotion es un certificado privado: no es una titulación oficial, no habilita para asesorar y no sustituye las cualificaciones que la CNMV exige al personal que informa o asesora (Guía Técnica 4/2017). Esta frase debe aparecer en la página del Nivel 3, en el certificado y en la página de verificación.

---

## 3. Migración desde la estructura actual (cinco niveles → tres)

Hoy la web muestra en `/es/niveles/` cinco niveles: Cero, Básico, Intermedio, Avanzado y Experto, con módulos, lecturas, estrategias y exámenes. Se reorganizan así **sin borrar contenido**:

| Contenido actual | Nuevo destino | Acción |
|---|---|---|
| Nivel Cero: Camino Cero (14 sesiones) y su examen | **N1 · Etapa A** | Se mantiene igual. Su examen sigue dando el logro «Nivel Cero superado». |
| Básico: Productos, Formas de invertir, Invertir ya, Empieza con Trade Republic | **N1 · Etapa B (núcleo)** | Se mantienen. Trade Republic: ver sección 5.7. |
| Básico «Para saber más»: Conocer empresas, Entender noticias, Tipos de trading | **N1 · Ampliación (opcional)** | Se mantienen y no cuentan para el examen N1. |
| Lecturas del Básico (10) | **N1 · Biblioteca** | Se mantienen como lecturas de apoyo enlazadas desde las sesiones. |
| Ejercicio final con dinero ficticio | **N1 · Cierre** | Se mantiene como parte del cierre. |
| Lecturas del Intermedio: largo plazo, indexada vs. activa, aportaciones, asignación y rebalanceo, psicología, gestión del riesgo, órdenes | **N1 · Biblioteca** | Apoyan a Invertir ya y al nuevo módulo «Mantener el rumbo». |
| Lecturas del Intermedio: renta fija y duración; diversificación internacional y divisa | **N2** | Base de las clases de N2-RF y N2-CAR. |
| Estrategias: indexada, dividendos, valor, crecimiento | **N2 · N2-RV** | Se convierten en material de apoyo de las clases de estilos. |
| Avanzado: estados financieros, valoración, análisis técnico, cripto | **N2** (N2-EMP, N2-ALT) | Se reescriben con el formato de clase. |
| Experto: apalancamiento, opciones, futuros, CFD, swing, intradía, historias de fraude | **N2-ALT** y **N3** (N3-DER, N3-ETI) | Se reparten según su profundidad. |
| Página `/es/niveles/` | Mostrar tres niveles | Rehacer con la tabla de la sección 2. |

**Lo que ya era gratis sigue gratis.** Las lecturas, estrategias e historias que hoy son públicas siguen abiertas como biblioteca. Lo que se paga en los niveles 2 y 3 es el formato de clase nuevo (más profundo, con bloque docente, casos y exámenes), no el contenido que ya existía. Quitar algo que era gratis genera desconfianza.

**Exámenes antiguos.** Los exámenes de los niveles Básico, Intermedio, Avanzado y Experto se retiran y sus direcciones redirigen al examen del Nivel 1 o a la página del nivel correspondiente. El examen del Camino Cero se mantiene.

**Nuevo en el Nivel 1:** el módulo «Mantener el rumbo» (`mr`, 7 sesiones) y el examen final del Nivel 1. Sin ellos falta lo que ocurre después de la primera compra: revisar, aguantar, saber cuándo vender y declarar.

---

## 4. Formatos de sesión por nivel

### 4.1 Nivel 1 — Sesión de 5 minutos (formato actual, no cambia)

Orden de bloques, tal como funciona hoy:

1. **Para empezar:** una pregunta o situación que el alumno piensa unos segundos.
2. **Palabras clave:** de 2 a 4 términos del glosario, una frase cada uno.
3. **La idea:** de 80 a 150 palabras, con una tabla pequeña si ayuda.
4. **En la práctica:** de 3 a 4 viñetas accionables.
5. **Error frecuente:** uno.
6. **Te recomendamos:** de 3 a 4 consejos generales, nunca productos concretos.
7. **Caso práctico:** ficticio, con nombre y cifras redondas.
8. **Test:** 3 preguntas sobre el caso, con explicación en cada respuesta y enlace «No lo veo claro: pregúntale al tutor».
9. **Acción de hoy:** una tarea de 2 minutos en la vida real del alumno.
10. **Fuentes y revisión.**

Límites: unas 450–650 palabras visibles y cero fórmulas.

### 4.2 Nivel 2 — Clase de 15 a 30 minutos

El nivel 2 forma a alguien capaz de **enseñar**, así que cada clase añade un bloque docente.

1. **Para empezar:** una pregunta real de un alumno («Mi cuñado dice que…»).
2. **Objetivos:** 3, en formato «Al terminar sabrás…».
3. **Palabras clave:** de 4 a 8.
4. **Lección:** de 3 a 5 apartados cortos de 150 a 300 palabras, con tablas y esquemas. Sin fórmulas; si aparece un número, lo calcula una herramienta.
5. **Caso práctico ampliado:** ficticio o histórico documentado, de 250 a 400 palabras.
6. **Cómo explicarlo:**
   - la idea en 3 frases;
   - una analogía;
   - las 3 dudas más habituales con su respuesta;
   - el error que más cometen los principiantes;
   - dónde está la frontera entre explicar y recomendar en este tema.
7. **Test:** de 5 a 8 preguntas, al menos 2 basadas en el caso.
8. **Explícalo tú:** el alumno escribe la idea en 3 a 5 frases para alguien de nivel 1. El tutor le da su opinión con una rúbrica de exactitud, claridad y ausencia de recomendaciones.
9. **Para profundizar:** de 1 a 3 lecturas o fuentes oficiales.
10. **Fuentes y revisión.**

### 4.3 Nivel 3 — Lección de 30 a 45 minutos

1. **Objetivos de aprendizaje:** de 3 a 5, verificables.
2. **Contexto profesional:** por qué importa en el trabajo real del sector.
3. **Lección principal:** de 4 a 7 apartados. Rigor de nivel profesional, siempre conceptual. Las métricas se explican así: qué mide, cómo se lee, para qué sirve, qué no dice y un ejemplo ya calculado.
4. **Criterio profesional:** cómo decide un profesional con buen criterio en esta situación, y qué conflictos de interés existen.
5. **Expediente:** un caso de uno de los cuatro clientes ficticios del Nivel 3 (sección 7.1) o un caso real documentado.
6. **Test:** de 8 a 12 preguntas de estilo examen, con explicación.
7. **Ejercicio aplicado:** una tarea escrita breve que alimenta el proyecto final.
8. **Resumen para repasar:** de 5 a 8 puntos.
9. **Fuentes y normativa citada**, con fecha de consulta.

### 4.4 Esquema de datos (corregido en la v1.2)

La versión 1.1 proponía añadir campos al esquema de las sesiones. Dos de ellos chocaban con campos que ya existen (`level` y el estado editorial), así que queda así:

**Sesiones del Nivel 1** (colección `sessions`, sin cambios de nombre):

| Campo existente | Valores | Nota |
|---|---|---|
| `level` | `cero`, `basico` | Se mantiene. **No** se reutiliza para el nivel 1-3 |
| `track` | `camino-cero`, `productos`, `formas`, `invertir-ya`, `trade-republic`, `mantener`, `empresas`, `noticias`, `trading` | `mantener` es nuevo |
| `status` | `borrador`, `revision-pendiente`, `revisado` | Es el estado editorial. La v1.1 lo llamaba `editorialState` |
| `reviewer` | nombre o `null` | Solo si lo ha revisado una persona real |
| `minutes`, `skills`, `terms`, `tips`, `scenario`, `questions`, `action` | — | Ya existen |

**Clases del Nivel 2 y lecciones del Nivel 3** (colección nueva `clases`, en `src/content/clases/`), para no tocar las sesiones:

| Campo | Tipo | Uso |
|---|---|---|
| `tier` | 2 o 3 | Nivel |
| `format` | `clase` o `leccion` | Plantilla |
| `module`, `order`, `minutes` | — | Módulo y orden |
| `access` | `sample` o `paid` | Solo las `sample` se publican en la web estática |
| `skills`, `terms` | ids | Competencias y palabras clave |
| `hook`, `objectives`, `summary` | — | Para empezar, objetivos y resumen |
| `teach` | `{tresFrases, analogia, dudas[3], errorPrincipiante, frontera}` | «Cómo explicarlo» (N2) |
| `explainPrompt` | texto | «Explícalo tú» (N2) |
| `profesional`, `caseFile`, `exercise` | — | «Criterio profesional», expediente y ejercicio (N3) |
| `questions` | 5-12 | Test |
| `status`, `reviewer`, `sources` | — | Igual que las sesiones |

**Temario planificado** (metadatos de las 122 clases y lecciones, clientes ficticios y capacidades del examen N1): `src/data/curriculum.json`, generado a partir de las tablas de las secciones 6.3 y 7.3.

**Competencias y glosario:** cada competencia y cada término llevan `level` (1, 2 o 3). En la web gratuita, el mapa de competencias del alumno solo muestra las de nivel 1.

---|---|---|
| `level` | 1, 2 o 3 | Nivel al que pertenece la sesión |
| `format` | `sesion`, `clase` o `leccion` | Plantilla de renderizado |
| `minutes` | número | Duración estimada |
| `access` | `free`, `sample` o `paid` | `sample` = muestra abierta de un nivel de pago |
| `objectives` | lista | Objetivos (N2 y N3) |
| `teach` | objeto `{tresFrases, analogia, dudas[], errorPrincipiante, frontera}` | Bloque «Cómo explicarlo» (N2) |
| `explainPrompt` | texto | Consigna de «Explícalo tú» (N2) |
| `profesional` | texto | Bloque «Criterio profesional» (N3) |
| `caseFile` | id de cliente ficticio | Expediente (N3) |
| `exercise` | texto | Ejercicio aplicado (N3) |
| `editorialState` | `borrador`, `pendiente` o `revisado` | Ya existe en la web; obligatorio |
| `reviewer` | nombre y fecha | Solo si lo ha revisado una persona real |


---

## 5. Nivel 1 — Invertir por tu cuenta (gratis)

### 5.1 Qué sabe hacer quien termina el Nivel 1

Es la definición de «terminado». El examen N1 comprueba exactamente estos puntos:

1. Explica para qué invierte, cuándo necesitará el dinero y qué riesgo acepta.
2. Tiene presupuesto, colchón de emergencia y deudas caras resueltas **antes** de invertir.
3. Distingue invertir, ahorrar y especular, y reconoce las señales de un fraude.
4. Conoce qué es cada producto principal, cómo gana y cómo pierde.
5. Elige una forma de invertir que encaja con él: por su cuenta, gestionada o automatizada.
6. Comprueba que una entidad está autorizada y entiende qué le protege si quiebra.
7. Lee lo esencial de un KID o una ficha: coste, riesgo, réplica y divisa.
8. Monta una cartera indexada sencilla y hace su primera compra.
9. Automatiza una aportación mensual y sabe rebalancear con una regla simple.
10. Sabe qué hacer cuando la bolsa cae y cuándo tiene sentido vender.
11. Sabe cuándo tributa, qué es un traspaso y qué documentos necesita para la renta.
12. Tiene su plan de inversión escrito en una página.

### 5.2 Etapa A — Camino Cero (existente, 14 sesiones, sin cambios)

`01-invertir-no-es-apostar` · `02-tu-numero-del-mes` · `03-el-colchon-primero` · `04-deudas-caras-primero` · `05-la-inflacion-te-cobra` · `06-el-tiempo-trabaja` · `07-las-caidas-son-normales` · `08-no-todos-los-huevos` · `09-los-cuatro-productos` · `10-el-uno-por-ciento` · `11-impuestos-lo-justo` · `12-comprueba-un-broker` · `13-detecta-un-fraude` · `14-tu-lista-antes-de-invertir`

Examen del nivel Cero: 14 preguntas, aprobado con el 80 %, logro «Nivel Cero superado». Se mantiene.

### 5.3 Etapa B — Núcleo (existente, 33 sesiones + 7 nuevas)

**Orden recomendado por defecto** (el plan personalizado puede reordenarlo): Productos → Formas de invertir → Invertir ya → Empieza con tu bróker → Mantener el rumbo. *Cambio de la v1.2:* Productos va primero porque hay que saber qué es un fondo antes de elegir cómo invertir en él, y `fo-01` ya exige la sesión `09`.

| Módulo | Código | Sesiones | Estado |
|---|---|---|---|
| Productos de inversión | `pr` | `pr-01-acciones-por-dentro` · `pr-02-bonos-y-tipos` · `pr-03-cuentas-depositos-letras` · `pr-04-fondos-activos-e-indexados` · `pr-05-etf-por-dentro` · `pr-06-planes-de-pensiones` · `pr-07-inmobiliario-sin-comprar-piso` · `pr-08-oro-materias-primas` · `pr-09-cripto-y-productos-complejos` | Existe |
| Formas de invertir | `fo` | `fo-01-mapa-de-formas` · `fo-02-por-tu-cuenta-con-indexados` · `fo-03-gestores-automatizados` · `fo-04-el-banco-y-los-fondos-gestionados` · `fo-05-invertir-para-la-jubilacion` · `fo-06-acciones-sueltas` · `fo-07-invertir-en-vivienda` · `fo-08-elige-tu-forma` | Existe |
| Invertir ya | `ya` | `ya-01-tu-plan-en-una-pagina` · `ya-02-cuanto-en-bolsa` · `ya-03-una-cartera-indexada` · `ya-04-fondo-o-etf` · `ya-05-tu-primera-compra` · `ya-06-aportar-cada-mes` · `ya-07-rebalancear` · `ya-08-cuando-cae` | Existe |
| Empieza con Trade Republic | `app` | `app-01-por-que-trade-republic` · `app-02-abrir-la-cuenta` · `app-03-conoce-la-app` · `app-04-compara-etf` · `app-05-compara-acciones` · `app-06-tu-primer-plan-de-inversion` · `app-07-impuestos-y-documentos` · `app-08-lo-que-no-debes-tocar` | Existe. Ajustes de la sección 5.7 |
| **Mantener el rumbo** | `mr` | 7 sesiones nuevas (tabla 5.4) | **Publicado en borrador (v1.2)** |

**Ajustes a sesiones existentes:**

- `ya-01-tu-plan-en-una-pagina` crea la versión 1 del plan; `mr-07` la cierra. Ambas deben usar la misma plantilla de plan (sección 5.6).
- `11-impuestos-lo-justo` y `app-07-impuestos-y-documentos` enlazan a `mr-05`.
- `ya-08-cuando-cae` enlaza a `mr-01` y `mr-04`.

### 5.4 Nuevo módulo «Mantener el rumbo» (`mr`)

Lo que pasa después de la primera compra. Son sesiones de 5 minutos con el formato 4.1.

| ID | Título | Qué aprende | Acción de hoy | Competencias |
|---|---|---|---|---|
| `mr-01-tu-cabeza-contra-tu-cartera` | Tu cabeza contra tu cartera | Los 4 sesgos que más dinero hacen perder a un principiante: miedo a perderse algo, aversión a las pérdidas, exceso de confianza y mirar demasiado. Cómo protegerse con reglas escritas. | Desactiva las notificaciones de precio de tu app | `psicologia-sesgos` |
| `mr-02-el-ruido-y-las-redes` | El ruido y las redes | Por qué los titulares y los finfluencers empujan a actuar; cómo distinguir información de publicidad y la pregunta «¿cambia esto mi plan?». | Revisa a quién sigues que hable de dinero | `hecho-opinion`, `filtro-noticias` |
| `mr-03-la-revision-anual` | La revisión anual en 15 minutos | Una lista de cinco preguntas una vez al año: objetivo, colchón, reparto, costes y aportación. Qué no hace falta revisar. | Pon en el calendario tu revisión anual | `revision-anual`, `rebalanceo` |
| `mr-04-cuando-vender` | Cuándo vender (y cuándo no) | Razones válidas para vender: objetivo cumplido, cambio de vida, rebalanceo o un producto que ya no encaja. Razones malas: miedo, una noticia, «ya ha subido mucho». El traspaso como alternativa en fondos. | Escribe tus tres razones válidas para vender | `decidir-venta`, `plan-inversion` |
| `mr-05-tus-inversiones-en-la-renta` | Tus inversiones en la declaración | Qué datos llegan precargados, qué documento fiscal da el bróker, cuándo hay ganancia o pérdida y por qué conviene revisar el borrador. Sin casillas ni porcentajes concretos en el texto: se enlaza a la AEAT y se actualiza cada ejercicio. | Localiza dónde descarga tu bróker el informe fiscal | `fiscalidad-espana` |
| `mr-06-cuando-cambia-tu-vida` | Cuando cambia tu vida | Qué revisar si cambias de trabajo, te independizas, tienes pareja o hijos, compras casa o te acercas al objetivo. Reducir riesgo a medida que se acerca la fecha. | Anota qué cambio de vida esperas en 5 años | `objetivo-horizonte`, `asignacion-activos` |
| `mr-07-tu-plan-definitivo` | Tu plan definitivo | Repaso del Nivel 1 en una sola página: el plan completo con objetivo, reparto, producto, aportación, regla de rebalanceo, plan para caídas y razones para vender. | Completa y guarda tu plan | `plan-inversion` |

### 5.5 Ampliación del Nivel 1 (existente, opcional, 23 sesiones)

No cuenta para el examen N1. Sirve a quien quiera más y prepara el Nivel 2.

| Módulo | Código | Sesiones |
|---|---|---|
| Conocer empresas | `em` | `em-01-como-gana-dinero` · `em-02-la-cuenta-de-resultados` · `em-03-margenes` · `em-04-el-balance-y-la-deuda` · `em-05-caja-no-beneficio` · `em-06-ventaja-competitiva` · `em-07-caro-o-barato` · `em-08-leer-un-informe-de-resultados` · `em-09-tu-ficha-de-empresa` |
| Entender noticias | `no` | `no-01-hecho-dato-opinion` · `no-02-el-bce-y-los-tipos` · `no-03-ipc-pib-paro` · `no-04-buenos-resultados-y-cae` · `no-05-noticias-de-empresa` · `no-06-titulares-de-panico-y-euforia` · `no-07-me-afecta` |
| Tipos de trading | `tr` | `tr-01-invertir-o-hacer-trading` · `tr-02-estilos-de-trading` · `tr-03-tipos-de-ordenes` · `tr-04-apalancamiento-y-cfd` · `tr-05-cuanto-arriesgar` · `tr-06-graficos-y-analisis-tecnico` · `tr-07-lo-que-dicen-los-datos` |

### 5.6 Cierre del Nivel 1

1. **Ejercicio con dinero ficticio** (ya existe): montar una cartera indexada ficticia, simular un año de aportaciones con una caída incluida y escribir qué se hizo en la caída.
2. **«Mi plan en una página»** (`/es/plan-en-una-pagina/`, ya publicada): una plantilla única que se usa en `ya-01` y `mr-07`. Se guarda en el dispositivo (y en la cuenta, si se usa) y se puede descargar o imprimir. Campos:
   - para qué invierto;
   - cuándo necesitaré el dinero;
   - colchón (sí/no y en qué meses de gastos);
   - deudas caras resueltas (sí/no);
   - forma de invertir elegida;
   - reparto entre bolsa, renta fija y liquidez;
   - tipo de producto (no nombre comercial obligatorio);
   - aportación mensual y fecha;
   - regla de rebalanceo;
   - qué haré si cae un 30 %;
   - mis razones para vender;
   - fecha de revisión anual.
3. **Examen N1** (sección 9.1).
4. **Insignia gratuita «Fundamentos de inversión — umotion»** (`/es/insignia/`, ya publicada). Además, el logro «Nivel 1 completo» exige examen, ejercicio y plan.


### 5.7 Cómo se presenta la recomendación de Trade Republic

Decisión de los socios: se recomienda porque es la opción más fácil, útil e intuitiva para empezar y para usar a largo plazo. Hoy umotion no recibe nada por recomendarla. Para que la recomendación sea creíble y coherente con la metodología de la web:

1. **`app-01-por-que-trade-republic` explica los criterios, no solo la conclusión.** Se elige por facilidad de uso, coste para el tipo de inversión del Nivel 1 (aportaciones periódicas a fondos indexados o ETF), supervisión en la UE y disponibilidad para residentes en España. Cada dato concreto (tarifas, productos, protección) lleva fuente oficial y fecha de consulta, y se revisa cada tres meses (sección 11.4).
2. **Se dicen también sus limitaciones** y para qué perfil puede no ser la mejor opción, con enlace al comparador de brókeres (`/es/brokers/`).
3. **Aviso visible en el módulo y en cada sesión:** «Recomendación educativa de umotion basada en la facilidad de uso para empezar. No recibimos ninguna comisión por ella. Puedes seguir el curso con cualquier bróker autorizado». Está ligado al interruptor `PUBLIC_BROKER_PAID`: si un día hay remuneración, el aviso cambia solo a «Colaboración pagada» en todas las páginas.
4. **El resto del Nivel 1 no depende de Trade Republic.** Las sesiones de los módulos `ya` y `mr` deben poder aplicarse con cualquier bróker.
5. **Si algún día hay afiliación o pago:** antes de activarla hay que (a) cambiar el aviso del punto 3 y declararla junto a cada enlace, (b) actualizar `/es/financiacion/` y la metodología, que hoy dice «sin afiliación», y (c) revisar con un profesional las normas de publicidad de servicios de inversión de la CNMV. Una recomendación pagada y no declarada es publicidad encubierta.

---

## 6. Nivel 2 — Saber enseñar (plan Avanzado)

### 6.1 Qué sabe hacer quien termina el Nivel 2

1. Explica con rigor y sin errores cualquier tema del Nivel 1, adaptándolo a quien escucha.
2. Entiende a fondo renta fija, renta variable, fondos y ETF: estructura, costes reales y riesgos.
3. Razona la construcción de una cartera por etapas vitales y la analiza con criterio: concentración, costes, divisa y riesgo.
4. Conoce la fiscalidad del inversor particular en España en sus casos habituales.
5. Lee los estados financieros de una empresa y entiende la valoración por múltiplos.
6. Sitúa las noticias macro y las crisis históricas en contexto.
7. Reconoce los productos complejos y alternativos y explica sus riesgos.
8. Sabe dónde termina la educación y empieza el asesoramiento, y divulga con ética.

### 6.2 Módulos

| Código | Módulo | Clases | Minutos aprox. |
|---|---|---|---|
| `mer` | Mercados y protección del inversor | 5 | 100 |
| `rf` | Renta fija a fondo | 6 | 120 |
| `rv` | Renta variable y estilos | 6 | 120 |
| `veh` | Fondos, ETF y vehículos | 6 | 120 |
| `car` | Construcción de carteras | 7 | 150 |
| `fis` | Fiscalidad práctica en España | 6 | 120 |
| `pla` | Planificación financiera personal | 6 | 120 |
| `emp` | Análisis de empresas | 6 | 135 |
| `mac` | Macroeconomía e historia de los mercados | 5 | 100 |
| `con` | Conducta del inversor | 4 | 75 |
| `alt` | Productos complejos y alternativos | 5 | 110 |
| `ens` | Enseñar inversión con responsabilidad | 4 | 90 |
| **Total** | | **66** | **unas 22 h** |

**Clase del mes.** Además de las 66 clases, cada mes se publica una clase nueva sobre un tema de actualidad, con fines educativos y sin recomendaciones. Es lo que justifica una suscripción mensual: sin contenido nuevo, quien termina las 22 horas en dos meses se da de baja.

Orden recomendado: `ens-01` → `mer` → `veh` → `rf` → `rv` → `car` → `fis` → `pla` → `emp` → `mac` → `con` → `alt` → resto de `ens`. Muestras abiertas (`access: sample`): `n2-ens-01` y `n2-car-01`.

### 6.3 Clases del Nivel 2

**N2-MER — Mercados y protección del inversor**

| ID | Título | Min | Contenido clave | Caso o práctica | Competencias |
|---|---|---|---|---|---|
| `n2-mer-01-del-ahorro-a-la-bolsa` | Del ahorro a la bolsa | 20 | Para qué sirve el sistema financiero, quién participa, mercado primario y secundario, una salida a bolsa por dentro. | Salida a bolsa de una empresa ficticia, paso a paso | `mercados-funcionamiento` |
| `n2-mer-02-que-hay-detras-de-un-indice` | Qué hay detrás de un índice | 20 | Índices ponderados por capitalización, por igual y sectoriales; diferencias entre índice mundial, solo desarrollados y solo EE. UU.; concentración en pocas empresas. | Comparar la composición por país y sector de dos índices con la herramienta | `indices-construccion` |
| `n2-mer-03-como-se-ejecuta-una-orden` | Cómo se ejecuta una orden | 20 | Horquilla, liquidez, horarios, centros de ejecución, mejor ejecución, pago por flujo de órdenes (concepto). | Dos órdenes del mismo ETF a distinta hora | `ordenes-mercado`, `mercados-funcionamiento` |
| `n2-mer-04-quien-vigila-a-quien` | Quién vigila a quién | 20 | CNMV, Banco de España, DGSFP, ESMA y BCE; pasaporte europeo; fondos de garantía; segregación de activos del cliente. | ¿Qué pasa con tus ETF si quiebra tu bróker? | `proteccion-inversor`, `comprobar-broker` |
| `n2-mer-05-tus-derechos-como-inversor` | Tus derechos como inversor | 20 | MiFID II desde el lado del cliente: clasificación, tests de conveniencia e idoneidad, información de costes, cómo reclamar (servicio de atención al cliente → CNMV). | Reclamación ficticia, de principio a fin | `proteccion-inversor` |

**N2-RF — Renta fija a fondo**

| ID | Título | Min | Contenido clave | Caso o práctica | Competencias |
|---|---|---|---|---|---|
| `n2-rf-01-precio-y-tipos` | El balancín entre precio y tipos | 20 | Cupón, vencimiento, rentabilidad a vencimiento explicada con palabras, por qué el precio cae cuando suben los tipos. | Un bono comprado antes y después de una subida de tipos | `rf-precio-tipos` |
| `n2-rf-02-duracion-sin-formulas` | Duración sin fórmulas | 20 | La duración como sensibilidad a los tipos; corto frente a largo plazo; leer la duración en la ficha de un fondo. | Caso histórico de 2022 en fondos de renta fija larga | `duracion-intuitiva` |
| `n2-rf-03-la-curva-de-tipos` | La curva de tipos | 20 | Curva normal, plana e invertida; qué expectativas refleja y por qué no sirve para adivinar el futuro. | Leer una curva de deuda española publicada por el Tesoro o el BCE | `curva-tipos` |
| `n2-rf-04-riesgo-de-credito` | Riesgo de crédito | 20 | Rating, grado de inversión y alto rendimiento, diferencial, prelación en caso de impago. | Bono corporativo ficticio que pierde calificación | `credito-rating` |
| `n2-rf-05-inflacion-flotantes-y-vencimiento` | Contra la inflación y a vencimiento | 20 | Bonos ligados a la inflación, bonos flotantes y fondos de renta fija con vencimiento; Letras, monetarios y fondos de renta fija para objetivos cercanos. | Elegir instrumento para un objetivo a 18 meses (educativo, por tipo) | `carteras-rf` |
| `n2-rf-06-renta-fija-en-tu-cartera` | La renta fija en una cartera | 20 | Papel de la renta fija: estabilizar, dar liquidez y servir a objetivos cercanos; renta fija directa o fondo; cuándo deja de compensar a la bolsa (2022). | Dos carteras ficticias en una caída | `carteras-rf`, `asignacion-activos` |

**N2-RV — Renta variable y estilos**

| ID | Título | Min | Contenido clave | Caso o práctica | Competencias |
|---|---|---|---|---|---|
| `n2-rv-01-de-donde-sale-la-rentabilidad` | De dónde sale la rentabilidad de una acción | 20 | Beneficios, dividendos, crecimiento y cambio de lo que el mercado paga por ellos; prima de riesgo explicada con palabras. | Misma empresa, dos décadas distintas | `acciones`, `estilos-inversion` |
| `n2-rv-02-valor-crecimiento-y-calidad` | Valor, crecimiento y calidad | 20 | Qué define cada estilo, en qué entornos ha ido mejor cada uno y por qué ninguno gana siempre. | Fichas de estilo de dos fondos ficticios | `estilos-inversion` |
| `n2-rv-03-factores` | Factores: tamaño, momento, baja volatilidad | 20 | Qué es un factor, evidencia académica, ETF factoriales y periodos largos en los que decepcionan. | Leer la metodología de un índice factorial | `factores` |
| `n2-rv-04-dividendos-y-recompras` | Dividendos y recompras | 20 | Mitos del dividendo, recompras de acciones, la idea de «vivir de dividendos» y su fiscalidad. | Dos empresas que reparten igual por vías distintas | `dividendos-recompras` |
| `n2-rv-05-sectores-ciclo-y-temas` | Sectores, ciclo y temáticas | 20 | Sectores cíclicos y defensivos, concentración sectorial de los índices y el historial de los ETF temáticos. | Un ETF temático ficticio tras el entusiasmo | `sectores-ciclo` |
| `n2-rv-06-paises-y-emergentes` | Países y emergentes | 20 | Desarrollados y emergentes, riesgo país, divisa y gobierno corporativo; el sesgo de invertir en casa. | Cartera de un inversor «solo España» | `diversificacion-internacional` |

**N2-VEH — Fondos, ETF y vehículos**

| ID | Título | Min | Contenido clave | Caso o práctica | Competencias |
|---|---|---|---|---|---|
| `n2-veh-01-como-esta-hecho-un-fondo` | Cómo está hecho un fondo | 20 | Gestora, depositario y auditor; UCITS; patrimonio separado; IIC españolas. | ¿Qué pasa si quiebra la gestora? | `estructura-fondos` |
| `n2-veh-02-replica-fisica-y-sintetica` | Réplica física y sintética | 20 | Réplica completa, muestreo y swaps; préstamo de valores; riesgo de contraparte. | Dos ETF del mismo índice con réplicas distintas | `estructura-fondos` |
| `n2-veh-03-lo-que-de-verdad-cuesta` | Lo que de verdad cuesta un fondo | 20 | Gastos corrientes frente a costes totales, diferencia de seguimiento, costes de transacción y comisión de éxito. | Comparar la diferencia de seguimiento de dos ETF con la herramienta | `tracking-difference`, `costes-comisiones` |
| `n2-veh-04-domicilio-clases-y-divisa` | Domicilio, clases y divisa | 20 | Domicilio en Irlanda o Luxemburgo, clases Acc/Dist y cubiertas, divisa de cotización frente a exposición real. | Mismo ETF en tres bolsas y dos divisas | `divisa-cobertura` |
| `n2-veh-05-folleto-kid-e-informes` | Folleto, KID e informes | 20 | Qué documento responde a qué pregunta; qué buscar en un informe semestral. | Búsqueda guiada en documentos reales de un fondo | `documentacion-producto` |
| `n2-veh-06-gestion-activa-sicav-y-carteras-modelo` | Gestión activa, SICAV y carteras modelo | 20 | Qué dice la evidencia sobre la gestión activa (informes SPIVA), fondos de fondos, gestores automatizados por dentro y SICAV. | Tres maneras de delegar, comparadas | `gestion-delegada`, `estructura-fondos` |

**N2-CAR — Construcción de carteras**

| ID | Título | Min | Contenido clave | Caso o práctica | Competencias |
|---|---|---|---|---|---|
| `n2-car-01-del-objetivo-al-reparto` | Del objetivo al reparto | 20 | Asignación estratégica según objetivo y horizonte; varias metas a la vez con «cubos». **Muestra abierta.** | Tres objetivos de una misma persona | `asignacion-por-etapas` |
| `n2-car-02-carteras-para-cada-etapa` | Carteras para cada etapa de la vida | 25 | Ejemplos conceptuales por etapa (20, 40 y 60 años), carteras de ciclo de vida y cómo bajar el riesgo al acercarse el objetivo. | Seguir a un personaje ficticio durante 40 años | `asignacion-por-etapas` |
| `n2-car-03-nucleo-y-satelite` | Núcleo y satélite | 20 | Reglas para tener una parte «experimental» sin romper el plan: límite, revisión y salida. | Satélite que crece demasiado | `nucleo-satelite` |
| `n2-car-04-el-riesgo-de-una-cartera` | El riesgo de una cartera | 25 | Volatilidad, caída máxima, tiempo de recuperación y correlación, todo leído en gráficos de la herramienta. | Dos carteras con la misma rentabilidad y distinto camino | `riesgo-cartera` |
| `n2-car-05-divisas-en-la-cartera` | Las divisas en la cartera | 20 | Riesgo de divisa en bolsa y en renta fija, cuándo tiene sentido cubrirlo y cuándo no. | Renta fija global cubierta y sin cubrir | `divisa-cobertura`, `diversificacion-internacional` |
| `n2-car-06-reglas-de-rebalanceo` | Reglas de rebalanceo | 20 | Rebalanceo por calendario o por bandas, usando aportaciones y teniendo en cuenta la fiscalidad de ETF y fondos. | Un año agitado con dos reglas distintas | `rebalanceo` |
| `n2-car-07-analizar-una-cartera-ajena` | Analizar una cartera ajena | 20 | Lista educativa para analizar una cartera: concentración, solapamientos, costes, divisa y coherencia con el objetivo. Cómo comentarla sin recomendar. | Cartera ficticia de Pablo, con 9 fondos que se solapan | `riesgo-cartera`, `frontera-asesoramiento` |

**N2-FIS — Fiscalidad práctica en España**

> Contenido sensible a cambios: cifras, tramos y límites se enlazan a la AEAT o al BOE con fecha y se revisan cada ejercicio (sección 11.4). En el texto no se escriben porcentajes sin fuente y fecha.

| ID | Título | Min | Contenido clave | Caso o práctica | Competencias |
|---|---|---|---|---|---|
| `n2-fis-01-como-tributa-el-ahorro` | Cómo tributa el ahorro | 20 | Base del ahorro y base general; rendimientos del capital mobiliario y ganancias patrimoniales. | Clasificar 6 ingresos de un inversor ficticio | `irpf-ahorro` |
| `n2-fis-02-fondos-etf-y-traspasos` | Fondos, ETF y traspasos | 20 | Diferimiento por traspaso, orden de venta FIFO, por qué los ETF no se traspasan y sus excepciones. | Cambiar de fondo con y sin traspaso | `fiscalidad-fondos-etf` |
| `n2-fis-03-perdidas-que-ayudan` | Pérdidas que ayudan | 20 | Compensación de ganancias y pérdidas, arrastre a años siguientes y regla de recompra de valores homogéneos. | Vender en pérdidas y recomprar demasiado pronto | `perdidas-compensacion` |
| `n2-fis-04-dividendos-y-retenciones-extranjeras` | Dividendos y retenciones extranjeras | 20 | Doble imposición internacional, deducción en la renta, recuperación de retenciones en origen y formularios (concepto). | Dividendo de una empresa estadounidense | `fiscalidad-internacional` |
| `n2-fis-05-brokers-extranjeros` | Brókeres extranjeros y obligaciones | 20 | Brókeres sin retención en España, qué declara uno mismo, obligaciones informativas (modelos 720 y 721, a verificar en cada ejercicio). | Inversor con cuenta en un bróker de otro país de la UE | `fiscalidad-internacional` |
| `n2-fis-06-pensiones-y-productos-con-ventaja` | Pensiones y productos con ventaja fiscal | 20 | Planes individuales y de empleo, reducción en la base, formas de rescate; otros productos con ventaja fiscal a nivel conceptual. | Rescatar en capital o en renta | `planes-pensiones` |

**N2-PLA — Planificación financiera personal**

| ID | Título | Min | Contenido clave | Caso o práctica | Competencias |
|---|---|---|---|---|---|
| `n2-pla-01-tu-mapa-financiero` | Tu mapa financiero | 20 | Patrimonio neto y flujo mensual con la herramienta, sin cálculos a mano. | Mapa de un hogar ficticio | `planificacion-personal` |
| `n2-pla-02-varios-objetivos-a-la-vez` | Varios objetivos a la vez | 20 | Priorizar colchón, deudas, vivienda, jubilación y ocio; resolver conflictos entre metas. | Pareja con tres metas incompatibles | `planificacion-personal` |
| `n2-pla-03-comprar-o-alquilar` | ¿Comprar o alquilar? | 20 | Factores económicos y de vida, hipoteca fija o variable (concepto), entrada frente a inversión. | Dos decisiones razonables con resultados distintos | `vivienda-decision` |
| `n2-pla-04-la-jubilacion-sin-miedo` | La jubilación sin miedo | 25 | Cómo consultar la estimación oficial de la pensión pública, la brecha, ahorro complementario y la «regla del 4 %» con sus críticas. | Estimar una brecha con la herramienta | `jubilacion` |
| `n2-pla-05-seguros-que-protegen-tu-plan` | Seguros que protegen tu plan | 20 | Vida riesgo, incapacidad, salud y hogar; seguros de ahorro con mirada crítica. | Familia sin seguro de vida | `seguros-proteccion` |
| `n2-pla-06-dinero-en-pareja-y-en-familia` | Dinero en pareja y en familia | 15 | Cuentas conjuntas, régimen económico (concepto), hijos y educación financiera de menores. | Pareja que empieza a invertir | `planificacion-personal` |

**N2-EMP — Análisis de empresas**

| ID | Título | Min | Contenido clave | Caso o práctica | Competencias |
|---|---|---|---|---|---|
| `n2-emp-01-los-tres-estados-juntos` | Los tres estados financieros juntos | 25 | Cuenta de resultados, balance y flujo de caja, y cómo se conectan. | Seguir un euro de venta por los tres estados | `estados-financieros` |
| `n2-emp-02-calidad-del-beneficio` | La calidad del beneficio | 25 | Beneficio frente a caja, ajustes, señales de alarma contables. | Caso Wirecard, con fuentes | `calidad-beneficio` |
| `n2-emp-03-rentabilidad-del-negocio` | ¿Es un buen negocio? | 20 | Rentabilidad sobre el capital explicada con palabras; crecer con o sin rentabilidad. | Dos empresas que crecen igual | `estados-financieros` |
| `n2-emp-04-valoracion-por-multiplos` | Valoración por múltiplos | 25 | PER, EV/EBITDA y rentabilidad por flujo de caja; comparar con competidores y con la propia historia; trampas de valor. | La acción «barata» que lo era por algo | `valoracion-multiplos` |
| `n2-emp-05-quien-manda-en-la-empresa` | Quién manda en la empresa | 20 | Gobierno corporativo, incentivos de la dirección, accionistas de control, dilución y criterios ESG con espíritu crítico. | Ampliación de capital que diluye | `gobierno-corporativo` |
| `n2-emp-06-tu-informe-de-una-empresa` | Tu informe de una empresa | 20 | Plantilla de una página con datos de fuentes oficiales (CNMV, informes anuales). Describe y no concluye «comprar» ni «vender». | Completar la plantilla con una empresa real | `informacion-empresas` |

**N2-MAC — Macroeconomía e historia de los mercados**

| ID | Título | Min | Contenido clave | Caso o práctica | Competencias |
|---|---|---|---|---|---|
| `n2-mac-01-el-ciclo-economico` | El ciclo económico | 20 | Fases del ciclo, indicadores adelantados y por qué la bolsa se adelanta a la economía. | Bolsa y PIB en una misma recesión | `ciclo-economico` |
| `n2-mac-02-como-deciden-los-bancos-centrales` | Cómo deciden los bancos centrales | 20 | Mandatos del BCE y la Fed, tipos y balance, transmisión a hipotecas, bonos y bolsa. | Leer un comunicado del BCE | `politica-monetaria` |
| `n2-mac-03-inflacion-y-activos` | Inflación y activos | 20 | Cómo se han comportado históricamente los distintos activos con inflación alta, con matices. | Los años 70 y 2022 | `ciclo-economico`, `inflacion-real` |
| `n2-mac-04-cinco-crisis-que-ensenan` | Cinco crisis que enseñan | 25 | 1929, 2000, 2008, 2020 y 2022: qué pasó, cuánto cayó, cuánto tardó en recuperarse y qué lección deja. | Línea temporal comparada | `historia-crisis` |
| `n2-mac-05-de-la-noticia-a-la-cartera` | De la noticia a la cartera | 15 | Marco de 4 preguntas para analizar una noticia macro sin reaccionar. | Analizar un titular de esta semana | `filtro-noticias`, `hecho-opinion` |

**N2-CON — Conducta del inversor**

| ID | Título | Min | Contenido clave | Caso o práctica | Competencias |
|---|---|---|---|---|---|
| `n2-con-01-finanzas-conductuales` | Finanzas conductuales | 20 | Pensamiento rápido y lento, aversión a las pérdidas, anclaje, disponibilidad y efecto rebaño. | Detectar 5 sesgos en una conversación | `finanzas-conductuales` |
| `n2-con-02-la-brecha-del-inversor` | La brecha del inversor | 20 | Diferencia entre la rentabilidad del fondo y la que obtienen sus inversores, con estudios publicados. | El fondo que ganó y sus partícipes que perdieron | `finanzas-conductuales` |
| `n2-con-03-burbujas-y-manias` | Burbujas y manías | 20 | Tulipanes, puntocom, cripto en 2021 y acciones de moda: patrones comunes. | Lista de señales de euforia | `finanzas-conductuales`, `historia-crisis` |
| `n2-con-04-reglas-que-protegen` | Reglas que protegen | 15 | Automatizar, listas, periodos de espera y cómo ayudar a otros a aplicarlas. | Diseñar las reglas de un amigo ficticio | `finanzas-conductuales` |

**N2-ALT — Productos complejos y alternativos**

| ID | Título | Min | Contenido clave | Caso o práctica | Competencias |
|---|---|---|---|---|---|
| `n2-alt-01-derivados-para-entenderlos` | Derivados para entenderlos | 25 | Futuros, opciones y CFD a nivel conceptual; para qué los usan las empresas y por qué la mayoría de particulares pierden con ellos (avisos obligatorios de la ESMA). | Una empresa que cubre el precio del combustible | `derivados-concepto`, `apalancamiento-cfd` |
| `n2-alt-02-estructurados-y-garantizados` | Estructurados y garantizados | 20 | Cómo se fabrican, costes ocultos y riesgo de emisor. | Caso de las participaciones preferentes en España | `estructurados` |
| `n2-alt-03-criptoactivos-a-fondo` | Criptoactivos a fondo | 25 | Blockchain, monedas estables, MiCA, custodia, fiscalidad y fraudes habituales. | Quiebra de una plataforma y qué protegía al cliente | `cripto-critico` |
| `n2-alt-04-inmobiliario-oro-y-materias-primas` | Inmobiliario, oro y materias primas | 20 | SOCIMI y REIT, ETC de oro, cómo se invierte en materias primas mediante futuros (concepto) y su papel en una cartera. | El ETC que no sigue al precio que esperabas | `alternativos-criterio` |
| `n2-alt-05-plataformas-y-promesas` | Plataformas, capital riesgo y otras promesas | 20 | Plataformas de financiación participativa supervisadas por la CNMV, ELTIF, iliquidez y sesgo de supervivencia. | Folleto ficticio con rentabilidad «objetivo» | `alternativos-criterio` |

**N2-ENS — Enseñar inversión con responsabilidad**

| ID | Título | Min | Contenido clave | Caso o práctica | Competencias |
|---|---|---|---|---|---|
| `n2-ens-01-explicar-sin-recomendar` | Explicar sin recomendar | 20 | Diferencia entre educar, informar y asesorar; cómo responder a «¿qué compro?» sin recomendar. **Muestra abierta.** | 5 preguntas de amigos y cómo contestarlas | `frontera-asesoramiento` |
| `n2-ens-02-como-se-aprende-el-dinero` | Cómo se aprende el dinero | 25 | Una idea por vez, ejemplo, práctica, repaso espaciado y adaptar el mensaje al nivel de quien escucha. | Reescribir una explicación confusa | `explicar-con-rigor` |
| `n2-ens-03-divulgar-con-etica` | Divulgar con ética | 25 | Publicidad, conflictos de interés, normas sobre finfluencers (CNMV, Ley 6/2023 de los Mercados de Valores: verificar el texto vigente) y transparencia si cobras. | Revisar 3 publicaciones ficticias de redes | `etica-divulgacion` |
| `n2-ens-04-prepara-tu-primera-clase` | Prepara tu primera clase | 20 | Estructura de una clase de 10 minutos y preparación del proyecto final (sección 9.2). | Esquema de la clase del proyecto | `explicar-con-rigor` |


---

## 7. Nivel 3 — Profesional con certificado umotion (curso de pago)

### 7.0 Calibre y límites

- **Referencia de calibre:** las áreas de conocimiento de EFA (EFPA España) y CFA Investment Foundations (CFA Institute). **Antes de escribir el contenido, contrasta cada módulo con los temarios oficiales vigentes** y anota en este documento las diferencias. No copies sus materiales ni uses sus marcas como reclamo.
- **Sin cálculos pesados:** el nivel profesional se demuestra en el criterio. Cada métrica se explica por su significado y su uso, con ejemplos ya calculados por una herramienta.
- **El certificado no habilita para asesorar** (sección 2, aviso obligatorio).

### 7.1 Los cuatro clientes ficticios del Nivel 3

Aparecen en los expedientes de las lecciones y en el proyecto final. Sus datos se definen una vez en un archivo de datos y no cambian entre lecciones. Todos llevan «Cliente ficticio con fines educativos».

| ID | Cliente | Situación | Temas que permite trabajar |
|---|---|---|---|
| `lucia` | Lucía, 27 años | Ingeniera en su primer empleo fijo, sin deudas, ahorra cada mes y nunca ha invertido. | Perfil de riesgo, primera cartera, horizonte largo, sesgos |
| `ortega` | Familia Ortega, 41 y 39 años | Dos hijos, hipoteca, quieren ahorrar para estudios y jubilación. | Varios objetivos, seguros, fiscalidad familiar, planes de empleo |
| `antonio` | Antonio, 58 años | Prejubilado con indemnización, perfil conservador, cartera bancaria cara con productos que no entiende. | Renta fija, productos complejos, costes, jubilación, sucesión |
| `elena` | Elena, 35 años | Autónoma con ingresos irregulares. | Colchón ampliado, fiscalidad, previsión sin pensión de empleo |

### 7.2 Módulos

| Código | Módulo | Lecciones | Minutos aprox. |
|---|---|---|---|
| `reg` | Regulación y protección del inversor | 6 | 225 |
| `eti` | Ética y conducta profesional | 4 | 150 |
| `eco` | Economía y mercados financieros | 5 | 185 |
| `rf` | Renta fija profesional | 6 | 230 |
| `rv` | Renta variable y valoración | 6 | 235 |
| `iic` | Instituciones de inversión colectiva y selección de fondos | 6 | 225 |
| `der` | Derivados y activos alternativos | 6 | 230 |
| `gcr` | Gestión de carteras y del riesgo | 7 | 275 |
| `fis` | Fiscalidad del inversor en España | 5 | 190 |
| `pla` | Planificación financiera integral | 5 | 190 |
| `pry` | Proyecto profesional | — | unas 6 h |
| **Total** | | **56** | **unas 40 h** |

Muestra abierta: `n3-reg-01`.

### 7.3 Lecciones del Nivel 3

**N3-REG — Regulación y protección del inversor**

| ID | Título | Min | Contenido clave | Expediente o caso | Competencias |
|---|---|---|---|---|---|
| `n3-reg-01-el-mapa-regulatorio` | El mapa regulatorio | 35 | Arquitectura de supervisión en España y la UE: CNMV, Banco de España, DGSFP, ESMA, EBA, EIOPA y BCE. Tipos de entidades y qué puede hacer cada una. **Muestra abierta.** | Identificar el supervisor de 8 entidades | `marco-supervision` |
| `n3-reg-02-mifid-ii-por-dentro` | MiFID II por dentro | 40 | Servicios de inversión, clasificación de clientes, conveniencia e idoneidad, asesoramiento independiente y no independiente, incentivos y gobernanza de producto. | `antonio`: ¿le vendieron lo adecuado? | `mifid-ii` |
| `n3-reg-03-transparencia-y-documentos` | Transparencia y documentos | 35 | PRIIPs y KID, información de costes antes y después de contratar, indicador de riesgo y escenarios de rentabilidad y sus límites. | Leer el KID de un producto estructurado | `priips-transparencia` |
| `n3-reg-04-abuso-de-mercado-y-blanqueo` | Abuso de mercado y blanqueo | 40 | Información privilegiada, manipulación de mercado y prevención del blanqueo de capitales a nivel conceptual. | Casos sancionados publicados por la CNMV | `abuso-mercado` |
| `n3-reg-05-cripto-y-nuevas-normas` | Cripto y nuevas normas | 35 | MiCA, proveedores de servicios de criptoactivos, plataformas de financiación participativa y régimen de publicidad. | ¿Está autorizada esta plataforma? | `marco-supervision`, `cripto-critico` |
| `n3-reg-06-reclamaciones-y-proteccion` | Reclamaciones y sistemas de protección | 40 | Servicio de atención al cliente, reclamaciones ante la CNMV y el Banco de España, fondos de garantía y sus límites, y qué no está protegido. | `antonio` reclama por un producto que no entendía | `proteccion-inversor` |

**N3-ETI — Ética y conducta profesional**

| ID | Título | Min | Contenido clave | Expediente o caso | Competencias |
|---|---|---|---|---|---|
| `n3-eti-01-el-deber-con-el-cliente` | El deber con el cliente | 35 | Lealtad, diligencia, confidencialidad y actuar en el mejor interés del cliente. | Dilemas breves con decisión razonada | `etica-profesional` |
| `n3-eti-02-conflictos-de-interes` | Conflictos de interés | 40 | Comisiones, productos de la casa, objetivos comerciales: cómo se detectan, gestionan y comunican. | El banco y la cartera de `antonio` | `conflictos-interes` |
| `n3-eti-03-casos-que-cambiaron-las-normas` | Casos que cambiaron las normas | 40 | Participaciones preferentes en España, Madoff, Fórum Filatélico, Wirecard y FTX: qué falló y qué se cambió después. | Línea temporal de cada caso con fuentes | `etica-profesional`, `detectar-fraude` |
| `n3-eti-04-comunicar-con-honestidad` | Comunicar con honestidad | 35 | Rentabilidades pasadas, simulaciones, publicidad y redes; cómo se presenta un resultado sin engañar. | Corregir 3 anuncios ficticios | `etica-profesional`, `etica-divulgacion` |

**N3-ECO — Economía y mercados financieros**

| ID | Título | Min | Contenido clave | Expediente o caso | Competencias |
|---|---|---|---|---|---|
| `n3-eco-01-politica-monetaria-y-fiscal` | Política monetaria y fiscal | 40 | Herramientas del BCE, expansión y reducción del balance, política fiscal y deuda pública, y cómo interactúan. | Respuestas de 2008 y de 2020 comparadas | `politica-economica` |
| `n3-eco-02-tipos-inflacion-y-valoracion` | Tipos, inflación y valoración de activos | 35 | Por qué los tipos de interés afectan al precio de todos los activos, con ejemplos ya calculados. | Bolsa y bonos en 2022 | `politica-economica`, `valoracion-intrinseca` |
| `n3-eco-03-mercados-de-divisas` | Mercados de divisas | 35 | Qué mueve las divisas, régimen de tipos de cambio y efectos en carteras y empresas. | Empresa exportadora con un euro fuerte | `mercados-divisas` |
| `n3-eco-04-eficiencia-de-mercados` | ¿Son eficientes los mercados? | 40 | Hipótesis de eficiencia, sus formas, anomalías documentadas y qué implica para la gestión activa y pasiva. | Debate guiado con evidencia de ambos lados | `eficiencia-mercados` |
| `n3-eco-05-ciclos-y-asignacion` | Ciclos económicos y asignación | 35 | Indicadores del ciclo, por qué el «timing» del ciclo falla tan a menudo y qué se puede hacer con criterio. | Recesión ficticia y tres reacciones de carteras | `ciclo-economico`, `asignacion-estrategica-tactica` |

**N3-RF — Renta fija profesional**

| ID | Título | Min | Contenido clave | Expediente o caso | Competencias |
|---|---|---|---|---|---|
| `n3-rf-01-el-mercado-de-renta-fija` | El mercado de renta fija | 35 | Emisores, mercados primario y secundario, subastas del Tesoro y liquidez de la renta fija corporativa. | Una subasta del Tesoro explicada | `rf-avanzada` |
| `n3-rf-02-duracion-y-convexidad` | Duración y convexidad | 40 | Duración modificada y convexidad explicadas por su significado; leerlas en la ficha de un fondo. | Dos fondos con igual duración y distinto comportamiento | `rf-avanzada` |
| `n3-rf-03-credito-y-diferenciales` | Crédito y diferenciales | 40 | Agencias de calificación y sus límites, diferenciales de crédito, probabilidad de impago y recuperación (concepto). | Un emisor que pierde el grado de inversión | `rf-avanzada`, `credito-rating` |
| `n3-rf-04-deuda-subordinada-y-bancaria` | Deuda subordinada y bancaria | 40 | Prelación, bail-in, bonos convertibles contingentes y cédulas hipotecarias. | Resolución de un banco europeo y qué perdió cada acreedor | `deuda-subordinada` |
| `n3-rf-05-titulizaciones-y-otros` | Titulizaciones, ligados a inflación y otros | 35 | Titulizaciones, bonos ligados a la inflación y bonos verdes, con espíritu crítico. | Lección de 2008 sobre titulizaciones | `rf-avanzada` |
| `n3-rf-06-gestionar-una-cartera-de-renta-fija` | Gestionar una cartera de renta fija | 40 | Escalera de vencimientos, inmunización (concepto), fondos a vencimiento y renta fija en la jubilación. | Cartera de renta fija para `antonio` (educativa) | `gestion-carteras-rf` |

**N3-RV — Renta variable y valoración**

| ID | Título | Min | Contenido clave | Expediente o caso | Competencias |
|---|---|---|---|---|---|
| `n3-rv-01-analisis-fundamental-completo` | Análisis fundamental completo | 45 | Proceso de análisis: negocio, sector, estados financieros, gestión y riesgos. | Empresa real con fuentes oficiales | `estados-financieros`, `analisis-sectorial` |
| `n3-rv-02-analisis-sectorial-y-competitivo` | Análisis sectorial y competitivo | 40 | Las cinco fuerzas de Porter, ciclo del sector, regulación y ventajas competitivas duraderas. | Comparar dos sectores | `analisis-sectorial` |
| `n3-rv-03-valoracion-por-descuento-de-flujos` | Valoración por descuento de flujos | 40 | Idea del descuento de flujos explicada sin fórmulas; supuestos clave y sensibilidad usando la herramienta. | Cómo cambia el valor al tocar un supuesto | `valoracion-intrinseca` |
| `n3-rv-04-multiplos-y-comparables` | Múltiplos y comparables | 35 | Selección de comparables, múltiplos por sector y errores habituales. | Valoración relativa de una empresa ficticia | `valoracion-multiplos` |
| `n3-rv-05-gobierno-corporativo-y-esg` | Gobierno corporativo y ESG | 35 | Estructura de consejos, remuneración, derechos del accionista, ESG, SFDR y riesgo de «lavado verde». | Fondo «sostenible» bajo la lupa | `gobierno-corporativo` |
| `n3-rv-06-el-informe-profesional` | El informe profesional | 40 | Estructura de un informe de análisis, separando datos, opiniones y riesgos. | Preparar el proyecto final B | `informacion-empresas`, `valoracion-intrinseca` |

**N3-IIC — Instituciones de inversión colectiva y selección de fondos**

| ID | Título | Min | Contenido clave | Expediente o caso | Competencias |
|---|---|---|---|---|---|
| `n3-iic-01-tipos-de-iic` | Tipos de IIC | 40 | Fondos, SICAV, UCITS y alternativos (AIF), fondos garantizados y de rentabilidad objetivo, ELTIF. | Clasificar 10 vehículos | `tipos-iic` |
| `n3-iic-02-gestoras-y-depositarios` | Gestoras, depositarios y controles | 35 | Funciones de cada entidad, controles y qué pasa en caso de problemas. | Cambio de gestora de un fondo | `tipos-iic` |
| `n3-iic-03-metricas-de-un-fondo` | Las métricas de un fondo | 40 | Volatilidad, ratio de Sharpe, error de seguimiento, ratio de información y caída máxima: qué mide cada una y qué no dice. | Leer las métricas de 3 fondos en la herramienta | `metricas-fondos` |
| `n3-iic-04-seleccion-de-fondos` | Selección de fondos | 40 | Proceso de selección: costes, consistencia, equipo gestor, tamaño, estilo, y las ventajas y límites de las calificaciones de fondos. | Lista corta educativa para `lucia` | `seleccion-fondos` |
| `n3-iic-05-indexacion-profesional` | Indexación profesional | 35 | Construcción de índices, réplica, diferencia de seguimiento y costes totales a escala. | Comparar 3 vehículos del mismo índice | `seleccion-fondos`, `tracking-difference` |
| `n3-iic-06-fondos-de-pensiones-y-seguros` | Fondos de pensiones y productos de seguro | 35 | Planes individuales, de empleo y simplificados; seguros de ahorro y unit linked. | Los planes de empleo de la familia `ortega` | `productos-seguro` |

**N3-DER — Derivados y activos alternativos**

| ID | Título | Min | Contenido clave | Expediente o caso | Competencias |
|---|---|---|---|---|---|
| `n3-der-01-futuros-y-forwards` | Futuros y forwards | 40 | Funcionamiento, garantías, liquidación y su uso para cubrir riesgos. | Exportador que cubre el tipo de cambio | `derivados-profesional` |
| `n3-der-02-opciones` | Opciones | 45 | Compra y venta de opciones de compra y de venta, qué determina su precio (concepto) y perfiles de resultado mostrados con gráficos. | Seguro de cartera con una opción de venta | `derivados-profesional` |
| `n3-der-03-swaps-y-cobertura` | Swaps y cobertura | 35 | Swaps de tipos y de divisas; cobertura frente a especulación. | Empresa que fija el tipo de su préstamo | `cobertura` |
| `n3-der-04-estructurados-por-dentro` | Estructurados por dentro | 40 | Descomponer un estructurado en sus piezas, coste implícito y riesgo de emisor. | El estructurado de `antonio` | `cobertura`, `estructurados` |
| `n3-der-05-alternativos` | Inversión alternativa | 35 | Capital riesgo, deuda privada, fondos de cobertura, inmobiliario e infraestructuras: iliquidez, costes y acceso. | ELTIF ofrecido a un particular | `activos-alternativos` |
| `n3-der-06-materias-primas-y-criptoactivos` | Materias primas y criptoactivos | 35 | Curva de futuros y su efecto en el inversor, custodia y riesgos de los criptoactivos. | El ETC de petróleo de 2020 | `activos-alternativos`, `cripto-critico` |

**N3-GCR — Gestión de carteras y del riesgo**

| ID | Título | Min | Contenido clave | Expediente o caso | Competencias |
|---|---|---|---|---|---|
| `n3-gcr-01-teoria-de-carteras` | Teoría de carteras sin fórmulas | 40 | Diversificación, correlación, frontera eficiente y sus límites, explicados con gráficos. | Combinar dos activos en la herramienta | `teoria-carteras` |
| `n3-gcr-02-riesgo-sistematico-y-factores` | Riesgo de mercado y factores | 40 | Beta, CAPM (idea), modelos de factores y qué significa el «alfa». | Fondo con alfa que era riesgo escondido | `teoria-carteras` |
| `n3-gcr-03-politica-de-inversion` | La política de inversión | 40 | Objetivos, restricciones, horizonte, liquidez, fiscalidad y preferencias del cliente en un documento de política de inversión. | Borrador de la política de `lucia` | `asignacion-estrategica-tactica` |
| `n3-gcr-04-asignacion-estrategica-y-tactica` | Asignación estratégica y táctica | 40 | Diferencias, evidencia y riesgos de la asignación táctica. | Cartera de la familia `ortega` | `asignacion-estrategica-tactica` |
| `n3-gcr-05-medir-el-riesgo` | Medir el riesgo | 40 | Volatilidad, caída máxima, VaR y pruebas de estrés por su significado; riesgo de liquidez y de concentración. | Prueba de estrés educativa de una cartera | `medicion-riesgo` |
| `n3-gcr-06-medir-la-rentabilidad` | Medir la rentabilidad | 40 | Rentabilidad ponderada por tiempo y por dinero, índices de referencia y atribución (idea). | Por qué el cliente ganó menos que su fondo | `medicion-rentabilidad` |
| `n3-gcr-07-seguimiento-y-rebalanceo` | Seguimiento y rebalanceo profesional | 35 | Revisiones periódicas, informes al cliente y rebalanceo eficiente fiscalmente. | Informe anual de `lucia` | `medicion-rentabilidad`, `rebalanceo` |

**N3-FIS — Fiscalidad del inversor en España**

> Sección 11.4: revisión obligatoria en cada ejercicio fiscal y enlaces a la AEAT o al BOE con fecha.

| ID | Título | Min | Contenido clave | Expediente o caso | Competencias |
|---|---|---|---|---|---|
| `n3-fis-01-irpf-del-inversor` | El IRPF del inversor | 40 | Integración y compensación de rentas, productos y casos especiales. | Declaración de `elena` | `fiscalidad-avanzada` |
| `n3-fis-02-iic-seguros-y-pensiones` | IIC, seguros y pensiones | 40 | Tratamiento fiscal comparado de fondos, ETF, SICAV, seguros de ahorro y planes de pensiones. | Comparar vehículos para la familia `ortega` | `fiscalidad-avanzada`, `productos-seguro` |
| `n3-fis-03-patrimonio-y-sucesiones` | Patrimonio, sucesiones y donaciones | 40 | Impuesto sobre el Patrimonio, solidaridad de grandes fortunas, sucesiones y donaciones, y diferencias autonómicas (verificar en cada ejercicio). | La herencia de `antonio` | `patrimonio-sucesiones` |
| `n3-fis-04-fiscalidad-internacional` | Fiscalidad internacional del inversor | 35 | Residencia fiscal, convenios de doble imposición, retenciones y obligaciones informativas. | Inversor con activos en tres países | `fiscalidad-internacional` |
| `n3-fis-05-planificacion-fiscal-legal` | Planificación fiscal legal | 35 | Diferir, compensar, elegir vehículo y la frontera con la elusión abusiva. | Revisión fiscal anual de `lucia` | `fiscalidad-avanzada` |

**N3-PLA — Planificación financiera integral**

| ID | Título | Min | Contenido clave | Expediente o caso | Competencias |
|---|---|---|---|---|---|
| `n3-pla-01-el-proceso-de-planificacion` | El proceso de planificación | 40 | Recogida de datos, diagnóstico, propuesta, implementación y seguimiento; la entrevista con el cliente. | Ficha de datos de `elena` | `proceso-planificacion` |
| `n3-pla-02-proteccion-y-seguros` | Protección y seguros | 35 | Análisis de necesidades de protección: vida, incapacidad, dependencia y responsabilidad civil. | Necesidades de protección de la familia `ortega` | `seguros-proteccion`, `proceso-planificacion` |
| `n3-pla-03-planificacion-de-la-jubilacion` | Planificación de la jubilación | 40 | Pensión pública, complementos, fase de desacumulación, orden de rescate y riesgo de longevidad. | Plan de jubilación de `antonio` | `planificacion-jubilacion` |
| `n3-pla-04-planificacion-sucesoria` | Planificación sucesoria | 35 | Testamento, beneficiarios de seguros y planes, y la frontera con el asesoramiento jurídico. | Qué preguntas hacer a la familia `ortega` | `planificacion-sucesoria` |
| `n3-pla-05-el-plan-integral` | El plan integral | 40 | Unir todas las piezas en un plan coherente y presentarlo al cliente. | Preparación del proyecto final A | `proceso-planificacion` |

**N3-PRY — Proyecto profesional** (sección 9.3)


---

## 8. Catálogo de competencias

El modelo de datos actual de la web es `{id, domain, label, can}`. Se añade un campo `level` con el nivel en el que se introduce la competencia: las 52 actuales llevan `level: 1`. Una competencia puede volver a trabajarse en niveles superiores; la estimación de dominio es una sola por competencia.

**Total: 126 competencias** (52 existentes + 2 nuevas de N1 + 42 de N2 + 30 de N3).

### 8.1 Nivel 1 — 52 existentes (sin cambios)

| Dominio | Competencias |
|---|---|
| `base` | `objetivo-horizonte`, `presupuesto-ahorro`, `colchon-emergencia`, `deudas-caras`, `inflacion-real`, `interes-compuesto` |
| `riesgo` | `riesgo-volatilidad`, `caidas-recuperacion`, `diversificacion`, `psicologia-sesgos` |
| `cartera` | `plan-inversion`, `asignacion-activos`, `formas-invertir`, `gestion-delegada`, `cartera-indexada`, `ejecutar-compra`, `usar-app-broker`, `comparar-productos`, `aportaciones-periodicas`, `rebalanceo` |
| `productos` | `acciones`, `renta-fija`, `depositos-letras`, `fondos-etf`, `planes-pensiones`, `inmobiliario`, `materias-primas`, `cripto-critico`, `productos-complejos` |
| `costes` | `costes-comisiones`, `fiscalidad-espana` |
| `empresas` (ampliación) | `modelo-negocio`, `cuenta-resultados`, `balance-deuda`, `flujo-caja`, `ventaja-competitiva`, `valoracion-basica`, `informacion-empresas` |
| `noticias` (ampliación) | `hecho-opinion`, `tipos-interes-bce`, `macro-indicadores`, `resultados-expectativas`, `eventos-corporativos`, `filtro-noticias` |
| `trading` (ampliación) | `tipos-trading`, `ordenes-mercado`, `apalancamiento-cfd`, `gestion-riesgo-trading`, `analisis-tecnico-limites`, `evidencia-trading` |
| `proteccion` | `comprobar-broker`, `detectar-fraude` |

**Competencias del examen N1:** todas las de `base`, `riesgo`, `cartera`, `productos`, `costes` y `proteccion`, más las 2 nuevas. En total, **35** (33 + 2; la v1.1 decía 33 por error). Las de `empresas`, `noticias` y `trading` son de ampliación y no se evalúan en el examen N1.

### 8.2 Nivel 1 — 2 nuevas

| id | domain | label | can |
|---|---|---|---|
| `revision-anual` | `cartera` | Revisión anual | Revisas tu plan una vez al año con cinco preguntas y sabes qué no hace falta tocar. |
| `decidir-venta` | `cartera` | Cuándo vender | Distingues las razones válidas para vender de las que vienen del miedo o del ruido. |

### 8.3 Nivel 2 — 42 nuevas

| id | domain | label | can |
|---|---|---|---|
| `mercados-funcionamiento` | `mercados` | Cómo funcionan los mercados | Explicas quién participa en los mercados y cómo pasa el dinero del ahorrador a la empresa. |
| `indices-construccion` | `mercados` | Construcción de índices | Explicas cómo se construye un índice y detectas su concentración por país, sector o empresa. |
| `proteccion-inversor` | `mercados` | Derechos del inversor | Conoces los supervisores, los fondos de garantía, la segregación de activos y cómo se reclama. |
| `rf-precio-tipos` | `renta-fija` | Precio y tipos | Explicas por qué el precio de un bono se mueve al contrario que los tipos de interés. |
| `duracion-intuitiva` | `renta-fija` | Duración | Interpretas la duración de un fondo de renta fija y lo que implica ante un cambio de tipos. |
| `curva-tipos` | `renta-fija` | Curva de tipos | Lees la forma de una curva de tipos sin usarla para predecir. |
| `credito-rating` | `renta-fija` | Riesgo de crédito | Explicas el rating, el diferencial y la prelación ante un impago. |
| `carteras-rf` | `renta-fija` | Renta fija en la cartera | Explicas qué papel cumple la renta fija según el objetivo y el horizonte. |
| `estilos-inversion` | `renta-variable` | Estilos de inversión | Distingues valor, crecimiento, calidad y dividendos, y explicas por qué ninguno gana siempre. |
| `factores` | `renta-variable` | Factores | Explicas qué es un factor, la evidencia que lo apoya y sus periodos de decepción. |
| `dividendos-recompras` | `renta-variable` | Dividendos y recompras | Desmontas los mitos del dividendo y explicas qué es una recompra. |
| `sectores-ciclo` | `renta-variable` | Sectores y ciclo | Distingues sectores cíclicos y defensivos y valoras con criterio los productos temáticos. |
| `diversificacion-internacional` | `renta-variable` | Diversificación internacional | Explicas el riesgo país, los emergentes y el sesgo de invertir solo en casa. |
| `estructura-fondos` | `vehiculos` | Estructura de un fondo | Explicas gestora, depositario, UCITS, tipos de réplica y riesgo de contraparte. |
| `tracking-difference` | `vehiculos` | Coste real de un fondo | Diferencias gastos corrientes, costes totales y diferencia de seguimiento. |
| `divisa-cobertura` | `vehiculos` | Divisa y cobertura | Distingues la divisa de cotización de la exposición real y sabes cuándo se cubre. |
| `documentacion-producto` | `vehiculos` | Documentación de producto | Sabes qué responde el KID, el folleto y el informe periódico, y dónde buscar cada dato. |
| `asignacion-por-etapas` | `cartera` | Asignación por etapas | Razonas un reparto por objetivos y etapa vital, y cómo bajar el riesgo al acercarse la meta. |
| `nucleo-satelite` | `cartera` | Núcleo y satélite | Explicas reglas para una parte experimental sin poner en peligro el plan. |
| `riesgo-cartera` | `cartera` | Riesgo de una cartera | Interpretas la volatilidad, la caída máxima, la recuperación y la correlación de una cartera. |
| `frontera-asesoramiento` | `docencia` | Educar sin asesorar | Sabes dónde acaba la educación y empieza el asesoramiento, y respondes sin recomendar. |
| `irpf-ahorro` | `fiscalidad` | IRPF del ahorro | Clasificas los ingresos del inversor y explicas cómo tributan, con fuentes oficiales. |
| `fiscalidad-fondos-etf` | `fiscalidad` | Fiscalidad de fondos y ETF | Explicas el traspaso, el orden de venta FIFO y la diferencia con los ETF. |
| `perdidas-compensacion` | `fiscalidad` | Compensar pérdidas | Explicas la compensación de pérdidas y la regla de recompra de valores homogéneos. |
| `fiscalidad-internacional` | `fiscalidad` | Fiscalidad internacional | Explicas las retenciones en origen, la doble imposición y las obligaciones informativas. |
| `planificacion-personal` | `planificacion` | Planificación personal | Ordenas el mapa financiero de un hogar y priorizas varios objetivos a la vez. |
| `vivienda-decision` | `planificacion` | Comprar o alquilar | Razonas la decisión de vivienda con factores económicos y de vida. |
| `jubilacion` | `planificacion` | Jubilación | Explicas la pensión pública, la brecha y cómo pensar el ahorro complementario. |
| `seguros-proteccion` | `planificacion` | Seguros de protección | Explicas qué seguros protegen un plan y miras con criterio los seguros de ahorro. |
| `estados-financieros` | `analisis` | Estados financieros | Conectas la cuenta de resultados, el balance y el flujo de caja de una empresa. |
| `calidad-beneficio` | `analisis` | Calidad del beneficio | Detectas diferencias entre beneficio y caja y las señales de alarma contables. |
| `valoracion-multiplos` | `analisis` | Valoración por múltiplos | Interpretas PER, EV/EBITDA y rentabilidad por flujo de caja, y sus trampas. |
| `gobierno-corporativo` | `analisis` | Gobierno corporativo | Valoras incentivos, control, dilución y criterios ESG con espíritu crítico. |
| `ciclo-economico` | `macro` | Ciclo económico | Explicas las fases del ciclo y por qué la bolsa se adelanta a la economía. |
| `politica-monetaria` | `macro` | Bancos centrales | Explicas cómo deciden los bancos centrales y cómo afecta a hipotecas, bonos y bolsa. |
| `historia-crisis` | `macro` | Crisis históricas | Explicas cinco grandes crisis, su recuperación y su lección. |
| `finanzas-conductuales` | `conducta` | Finanzas conductuales | Reconoces los sesgos, la brecha del inversor y los patrones de burbuja, y diseñas reglas contra ellos. |
| `derivados-concepto` | `alternativos` | Derivados | Explicas futuros, opciones y CFD a nivel conceptual y por qué suelen perjudicar al particular. |
| `estructurados` | `alternativos` | Productos estructurados | Explicas cómo se fabrica un estructurado, sus costes ocultos y el riesgo de emisor. |
| `alternativos-criterio` | `alternativos` | Inversiones alternativas | Valoras con criterio el inmobiliario cotizado, las materias primas, las plataformas y el capital riesgo. |
| `explicar-con-rigor` | `docencia` | Explicar con rigor | Preparas e impartes una explicación clara, correcta y adaptada a quien escucha. |
| `etica-divulgacion` | `docencia` | Divulgar con ética | Divulgas declarando conflictos de interés y respetando las normas de publicidad. |

### 8.4 Nivel 3 — 30 nuevas

| id | domain | label | can |
|---|---|---|---|
| `marco-supervision` | `regulacion` | Marco de supervisión | Describes la arquitectura de supervisión española y europea y qué puede hacer cada entidad. |
| `mifid-ii` | `regulacion` | MiFID II | Explicas los servicios de inversión, la clasificación de clientes, la conveniencia, la idoneidad, los incentivos y la gobernanza de producto. |
| `priips-transparencia` | `regulacion` | Transparencia | Interpretas un KID, la información de costes y los escenarios con sus límites. |
| `abuso-mercado` | `regulacion` | Abuso de mercado y blanqueo | Reconoces la información privilegiada, la manipulación y las obligaciones contra el blanqueo. |
| `etica-profesional` | `etica` | Ética profesional | Aplicas lealtad, diligencia y honestidad a dilemas reales del sector. |
| `conflictos-interes` | `etica` | Conflictos de interés | Detectas, gestionas y comunicas conflictos de interés. |
| `politica-economica` | `economia` | Política económica | Explicas la interacción entre política monetaria y fiscal y su efecto en los activos. |
| `mercados-divisas` | `economia` | Divisas | Explicas qué mueve las divisas y su efecto en carteras y empresas. |
| `eficiencia-mercados` | `economia` | Eficiencia de mercados | Razonas la eficiencia de los mercados y sus anomalías, y lo que implica para la gestión. |
| `valoracion-intrinseca` | `analisis` | Valoración intrínseca | Explicas el descuento de flujos, sus supuestos clave y su sensibilidad, sin calcularlo a mano. |
| `analisis-sectorial` | `analisis` | Análisis sectorial | Analizas un sector y la posición competitiva de una empresa. |
| `rf-avanzada` | `renta-fija` | Renta fija avanzada | Interpretas la convexidad, los diferenciales, las titulizaciones y el funcionamiento del mercado. |
| `deuda-subordinada` | `renta-fija` | Deuda subordinada | Explicas la prelación, el bail-in y los instrumentos híbridos bancarios. |
| `gestion-carteras-rf` | `renta-fija` | Carteras de renta fija | Razonas escaleras de vencimientos, inmunización y renta fija para la jubilación. |
| `tipos-iic` | `vehiculos` | Tipos de IIC | Clasificas fondos, SICAV, UCITS, AIF, garantizados y ELTIF, y las funciones de cada entidad. |
| `metricas-fondos` | `vehiculos` | Métricas de fondos | Interpretas el ratio de Sharpe, el error de seguimiento, el ratio de información y la caída máxima. |
| `seleccion-fondos` | `vehiculos` | Selección de fondos | Aplicas un proceso de selección de fondos con criterio y sin conflictos. |
| `productos-seguro` | `vehiculos` | Pensiones y seguros de ahorro | Comparas planes de pensiones y seguros de ahorro e inversión. |
| `derivados-profesional` | `derivados` | Derivados | Explicas futuros, forwards y opciones, sus perfiles de resultado y sus garantías. |
| `cobertura` | `derivados` | Cobertura | Distingues cobertura de especulación y descompones un producto estructurado. |
| `activos-alternativos` | `derivados` | Activos alternativos | Valoras la iliquidez, los costes y el acceso de los activos alternativos. |
| `teoria-carteras` | `gestion-carteras` | Teoría de carteras | Explicas la diversificación, la frontera eficiente, la beta, los factores y el alfa por su significado. |
| `asignacion-estrategica-tactica` | `gestion-carteras` | Asignación y política de inversión | Redactas una política de inversión y distingues la asignación estratégica de la táctica. |
| `medicion-riesgo` | `gestion-carteras` | Medición del riesgo | Interpretas el VaR, las pruebas de estrés y los riesgos de liquidez y concentración. |
| `medicion-rentabilidad` | `gestion-carteras` | Medición de la rentabilidad | Distingues la rentabilidad ponderada por tiempo y por dinero, y usas índices de referencia. |
| `fiscalidad-avanzada` | `fiscalidad` | Fiscalidad avanzada | Comparas el tratamiento fiscal de vehículos y planificas dentro de la ley. |
| `patrimonio-sucesiones` | `fiscalidad` | Patrimonio y sucesiones | Explicas los impuestos sobre patrimonio, sucesiones y donaciones y sus diferencias autonómicas. |
| `proceso-planificacion` | `planificacion` | Proceso de planificación | Aplicas el proceso completo de planificación: datos, diagnóstico, propuesta y seguimiento. |
| `planificacion-jubilacion` | `planificacion` | Planificación de la jubilación | Planificas la acumulación y la desacumulación y el riesgo de longevidad. |
| `planificacion-sucesoria` | `planificacion` | Planificación sucesoria | Identificas las necesidades sucesorias y sabes cuándo derivar a un jurista. |

### 8.5 Nuevos dominios

Se añaden a la lista `domains` con el mismo formato `{id, label, desc}` (las competencias de carteras del N2 usan el dominio existente `cartera`): `mercados`, `renta-fija`, `renta-variable`, `vehiculos`, `fiscalidad`, `planificacion`, `analisis`, `macro`, `conducta`, `alternativos`, `docencia`, `regulacion`, `etica`, `economia`, `derivados` y `gestion-carteras`. La etiqueta y la descripción las redacta Claude Code siguiendo el estilo de los dominios actuales.


---

## 9. Exámenes, insignias y certificado

### 9.1 Examen N1 — «Fundamentos de inversión»

| Parámetro | Valor |
|---|---|
| Requisito | Haber terminado el Camino Cero (o aprobar su examen) |
| Preguntas | 30, aleatorias del banco del núcleo del N1, al menos 2 por cada una de las 12 capacidades de la sección 5.1 |
| Aprobado | 80 % |
| Tiempo | Sin límite |
| Intentos | Ilimitados, con 24 h de espera tras un suspenso |
| Resultado | Detalle de los fallos y sesiones para repasarlos |
| Cierre completo | Examen aprobado + ejercicio con dinero ficticio + «Mi plan en una página» completado |
| Reconocimiento | Insignia gratuita «Fundamentos de inversión — umotion». Para tener una versión verificable hace falta crear una cuenta **y hacer el examen con la sesión iniciada, corregido en el servidor**: si se corrige en el navegador, cualquiera podría falsearlo. |
| Estado | Publicado en `/es/examen/n1/` (versión no verificable, corregida en el dispositivo) |

**Capacidades y competencias del examen N1** (cada pregunta cuenta para la capacidad cuyas competencias mide; se eligen 2 por capacidad y el resto al azar):

| Capacidad (5.1) | Competencias |
|---|---|
| 1. Para qué invierte, plazo y riesgo | `objetivo-horizonte`, `riesgo-volatilidad`, `inflacion-real`, `interes-compuesto` |
| 2. Presupuesto, colchón y deudas | `presupuesto-ahorro`, `colchon-emergencia`, `deudas-caras` |
| 3. Invertir, ahorrar, especular y fraudes | `detectar-fraude` |
| 4. Productos principales | `acciones`, `renta-fija`, `depositos-letras`, `fondos-etf`, `planes-pensiones`, `inmobiliario`, `materias-primas`, `cripto-critico`, `productos-complejos` |
| 5. Forma de invertir | `formas-invertir`, `gestion-delegada` |
| 6. Entidad autorizada y protección | `comprobar-broker` |
| 7. Leer un KID o una ficha | `costes-comisiones`, `comparar-productos` |
| 8. Cartera indexada y primera compra | `cartera-indexada`, `ejecutar-compra`, `usar-app-broker`, `diversificacion`, `asignacion-activos` |
| 9. Aportación y rebalanceo | `aportaciones-periodicas`, `rebalanceo` |
| 10. Caídas y cuándo vender | `caidas-recuperacion`, `psicologia-sesgos`, `decidir-venta` |
| 11. Fiscalidad y documentos | `fiscalidad-espana` |
| 12. Plan en una página | `plan-inversion`, `revision-anual` |

### 9.2 Examen N2 y proyecto «Tu primera clase»

| Parámetro | Valor |
|---|---|
| Banco de preguntas | 250 o más, todas las clases representadas |
| Examen | 50 preguntas aleatorias, 60 min, aprobado con el 80 % |
| Intentos | 3 por mes |
| Proyecto | Guion de una clase de 10 minutos sobre un tema del N1 elegido por el alumno, con: bloque «Cómo explicarlo» completo, 5 preguntas de test con explicación y una respuesta modelo a «¿qué compro?» que no recomiende |
| Rúbrica del proyecto (100) | Exactitud 40 · Claridad y adaptación al nivel 30 · Respeto de la frontera con el asesoramiento 20 · Estructura 10 · Aprobado con 70 |
| Corrección | Primera corrección del tutor con la rúbrica; revisión humana de una muestra y de todos los casos dudosos (entre 60 y 80 puntos) |
| Reconocimiento | Insignia «Nivel 2 — umotion» |

### 9.3 Examen N3 y proyecto profesional

| Parámetro | Valor |
|---|---|
| Banco de preguntas | 600 o más, distribuidas por módulo según su peso en minutos |
| Examen | 100 preguntas aleatorias, 150 min; aprobado con el 70 % global y al menos el 50 % en cada módulo |
| Integridad | Tiempo límite, orden aleatorio, tutor desactivado durante el examen, 3 intentos incluidos. **Corregido en la v1.2:** pagar con tarjeta no verifica la identidad. O se usa un servicio de verificación de identidad (con coste), o el certificado indica «nombre declarado por el titular» (D-09) |
| Proyecto (elegir uno) | **A.** Plan financiero integral para uno de los 4 clientes ficticios, con diagnóstico, política de inversión, cartera por tipos de activo (sin productos concretos obligatorios), protección, fiscalidad y seguimiento. **B.** Informe de análisis de una empresa cotizada real, con fuentes oficiales, separando datos, opinión y riesgos, y sin recomendación de compra o venta. |
| Extensión | Entre 2.500 y 4.000 palabras |
| Rúbrica (100) | Rigor técnico 35 · Coherencia con el cliente o la empresa 25 · Gestión de riesgos y límites 20 · Ética y frontera con el asesoramiento 10 · Claridad 10 · Aprobado con 70 |
| Corrección | Primera corrección del tutor con la rúbrica y **revisión humana obligatoria** de la nota final por una persona cualificada (D-03). Su coste por proyecto debe caber en el precio de la certificación (D-08) |
| Certificado | Requiere examen + proyecto aprobados |

### 9.4 Certificado umotion

- **Nombre:** «Certificado umotion en Inversión — Nivel Profesional» (decisión D-05).
- **Contenido:** nombre del titular, fecha, nota, versión del temario, código único.
- **Verificación pública:** `/verificar/<CODIGO>` con nombre, fecha, nota, temario resumido y aviso legal.
- **Formato:** Open Badges, para que sea comprobable fuera de umotion, y botón «Añadir a LinkedIn».
- **Privacidad:** la página pública muestra el nombre solo con el consentimiento del titular al emitirlo; si no, muestra las iniciales.
- **Emisión:** solo desde el servidor, a partir de un examen y un proyecto corregidos en el servidor.
- **Aviso obligatorio** en el certificado, la página de verificación y la página de venta:

> Certificado privado emitido por umotion. No es una titulación oficial, no habilita para prestar asesoramiento financiero ni sustituye las cualificaciones exigidas por la CNMV al personal que informa o asesora sobre inversiones.

- **Palabras prohibidas** para referirse a él: «oficial», «acreditación oficial», «equivalente a EFA/CFA», «habilita».

---

## 10. Personalización, repaso y tutor

1. **Diagnóstico:** el diagnóstico actual (`/es/empezar/`) se mantiene para el N1. Desde la v1.2 se pueden elegir **varios objetivos** a la vez y el recomendador los tiene todos en cuenta. Los niveles 2 y 3 tienen su propio diagnóstico de acceso (15 preguntas) que coloca al alumno en su ruta y le permite saltarse lo que ya domina.
2. **Mi plan:** propone la siguiente sesión dentro del nivel activo del alumno. Solo recomienda contenido de pago a quien tiene acceso; a los demás les muestra la muestra abierta y el candado.
3. **Repaso espaciado (`/es/repaso/`):** incluye preguntas de todos los niveles a los que el alumno tiene acceso.
4. **Tutor:**
   - **N1:** resuelve dudas y explica noticias (como hoy).
   - **N2:** además corrige «Explícalo tú» con la rúbrica de la sección 4.2.
   - **N3:** además comenta los ejercicios aplicados, pero **nunca** redacta el proyecto final y se desactiva durante el examen.
   - **En todos los niveles:** nunca recomienda productos concretos al usuario ni le dice qué comprar o vender; reconduce hacia los criterios y las sesiones correspondientes.
   - **Límite de uso:** cada plan tiene un tope mensual de consultas (decisión D-07).
5. **Glosario:** cada término nuevo se añade con `level`. En el N1 no se muestran definiciones de términos de N2 o N3 salvo que el alumno las busque.

---

## 11. Reglas editoriales, legales y de calidad

### 11.1 Estilo

- Español de España, tuteo, frases cortas, una idea por párrafo.
- Ningún término técnico sin su explicación en una frase la primera vez.
- Comillas «», cifras con coma decimal y € detrás con espacio (`5 €`).
- Sin fórmulas en el texto. Las cifras de ejemplo, redondas y calculadas por una herramienta con pruebas automáticas.

### 11.2 Frontera con el asesoramiento (todos los niveles)

**Permitido:**
- explicar categorías de producto;
- usar productos reales para enseñar a leer su documentación;
- dar criterios generales («fíjate en el coste total»).

**Prohibido:**
- «te recomendamos comprar X»;
- carteras con productos concretos presentadas como «la mejor»;
- adaptar una recomendación a los datos personales del usuario;
- prometer rentabilidades;
- predicciones de mercado.

**En el N3:** los expedientes de los clientes ficticios pueden llegar a una propuesta por tipos de activo porque son ejercicios sobre personas inventadas. Cada uno lleva el aviso de ejemplo ficticio.

**Afiliación:** si alguna vez hay enlaces de afiliado o comisiones, se declaran junto al enlace y en `/es/financiacion/` (decisión D-02).

### 11.3 Antes de publicar contenido de pago

1. Estado editorial `revisado`, con nombre de un revisor humano identificable y con la cualificación adecuada para N2 y N3 (por ejemplo, EFA o EFPA). Sin revisor, el contenido de pago no se publica.
2. Todas las afirmaciones financieras importantes tienen fuente primaria y fecha de consulta.
3. Revisión legal de la frontera con el asesoramiento y de la presentación de brókeres o productos.
4. Tests revisados: una sola respuesta correcta, explicación que no remite a otra sesión para entenderse y distractores plausibles.

### 11.4 Revisión periódica (igual que la metodología actual)

- Tarifas de intermediarios: cada tres meses o cuando haya un cambio.
- Fiscalidad (N1 `11`, `mr-05`, `app-07`; N2-FIS; N3-FIS): cada ejercicio fiscal.
- Normativa (N2-MER, N2-ENS-03, N3-REG): cuando cambie.
- Resto del contenido: una vez al año.

### 11.5 Definición de «terminado» para cada sesión, clase o lección

- [ ] Sigue la plantilla de su formato (sección 4) con todos los bloques.
- [ ] Duración dentro del rango del nivel.
- [ ] Competencias asignadas y existentes en el catálogo.
- [ ] Términos nuevos añadidos al glosario con `level`.
- [ ] Preguntas con id según la convención, explicación en cada respuesta y enlace al tutor.
- [ ] Caso marcado como ficticio o histórico con fuente.
- [ ] Fuentes con fecha de consulta.
- [ ] `editorialState` correcto y `reviewer` solo si es real.
- [ ] Sin fórmulas, sin recomendaciones personalizadas y sin promesas.
- [ ] Probado en móvil, en tema claro y oscuro.

---

## 12. Acceso y monetización (lo que afecta al contenido)

| Nivel | Acceso | Muestra abierta | Cómo se sirve |
|---|---|---|---|
| N1 | Gratis, sin registro (cuenta opcional para guardar en la nube y para la insignia verificable) | Todo | Estático, como hoy |
| N2 | Plan Avanzado | `n2-ens-01`, `n2-car-01` | Desde el servidor, solo a usuarios con acceso. **No se incluye en el build estático.** |
| N3 | Curso Profesional | `n3-reg-01` | Igual que N2 |

- Los módulos de pago se muestran en la web con su título, descripción y candado, para que se vea lo que hay detrás.
- Los precios no se escriben dentro del contenido de las sesiones: se leen de una configuración (`PRICING` en `src/config/site.ts`), porque pueden cambiar.
- **Antes de cobrar (Fase 3):** cuentas activadas, pagos con Stripe, control de acceso desde el servidor, titular legal (D-04), condiciones de venta, IVA y derecho de desistimiento de 14 días (en contenido digital se puede renunciar a él solo con consentimiento expreso al pagar).
- **Medir el interés:** el botón «Avisadme cuando abra» registra un evento anónimo (`interes_nivel`) y una marca en el dispositivo. El examen N1 registra `examen_n1` (aprobado y aciertos).

---

## 13. Orden de trabajo para Claude Code

Cada fase debe estar terminada y aprobada por los socios antes de empezar la siguiente.

**Fase 1 — Cerrar el Nivel 1** — ✅ hecha en la v1.2 (pendiente de aprobación de los socios)
1. Añadir `level` a las 52 competencias y crear `revision-anual` y `decidir-venta`.
2. Rehacer `/es/niveles/` con tres niveles (sección 2) y aplicar la migración de la sección 3 sin romper slugs ni progreso.
3. Escribir el módulo `mr` (7 sesiones) con el formato 4.1.
4. Plantilla única de «Mi plan en una página» usada en `ya-01` y `mr-07`.
5. Examen N1 e insignia gratuita.
6. **Terminado cuando:** el recorrido completo del N1 funciona de principio a fin en móvil, con el examen y la insignia.

**Fase 2 — Esqueleto del Nivel 2** — ✅ hecha en la v1.2 también para el Nivel 3 (temario visible con candados, 3 muestras y lista de interés)
1. Datos de las 66 clases (solo metadatos: id, título, minutos, competencias, `access`).
2. Página del Nivel 2 con módulos visibles y candados.
3. Redactar completas las dos muestras abiertas (`n2-ens-01`, `n2-car-01`).
4. Botón «Avisadme cuando abra» para medir interés.
5. **Terminado cuando:** un usuario puede ver todo el temario del N2, hacer las dos muestras y apuntarse a la lista.

**Fase 3 — Contenido del Nivel 2** (solo con la aprobación de los socios tras validar interés y pagos)
1. Control de acceso desde el servidor.
2. Redactar primero los módulos `car` y `ens` como piloto; después el resto en el orden de la sección 6.2.
3. Examen N2 y proyecto.

**Fase 4 — Nivel 3** (solo cuando el Nivel 2 tenga usuarios de pago)
1. Contrastar módulos con los temarios oficiales vigentes (sección 7.0).
2. Archivo de datos de los 4 clientes ficticios.
3. Contenido, banco de preguntas, examen, proyecto, certificado y página de verificación.

**Reglas durante todas las fases:**
- No borrar ni renombrar contenido existente sin indicarlo en el registro de correcciones.
- Si una instrucción de este documento es ambigua o choca con la ley o con una fuente oficial, no improvisar: dejar una nota «PENDIENTE: …» y seguir con lo demás.
- Actualizar la versión y la fecha de este documento cuando cambie su estructura.

---

## 14. Decisiones pendientes de los socios

| ID | Decisión | Por qué importa | Propuesta inicial |
|---|---|---|---|
| D-01 | Relación entre el plan Avanzado y el curso Profesional | ¿El N3 exige tener la suscripción activa? Cambia el acceso y el precio real del N3. | El N3 se compra aparte e incluye acceso a los materiales del N2 mientras dure el curso. |
| D-02 | Módulo «Empieza con Trade Republic» — **DECIDIDO (21/10/2026)** | Se mantiene la recomendación: los socios la consideran la opción más fácil, útil e intuitiva para empezar y mantener a largo plazo. Hoy no hay afiliación ni comisión. | Ver sección 5.7. Si en el futuro hay afiliación, revisar antes de activarla. |
| D-03 | Revisor experto para N2 y N3 | Sin revisor no se puede publicar contenido de pago con credibilidad. | Buscar a una persona con EFA o EFPA que revise por módulo; acordar coste antes de la fase 3. |
| D-04 | Titular legal antes de cobrar | Hace falta una persona o sociedad para facturar con IVA y para el aviso legal. | Resolverlo antes de la fase 3. |
| D-05 | Nombre definitivo del certificado — **propuesta aceptada** | Debe ser claro y no confundirse con un título oficial. | «Certificado umotion en Inversión — Nivel Profesional». |
| D-06 | Validez del certificado | ¿Caduca? La normativa y la fiscalidad cambian. | Sin caducidad, pero indicando la versión del temario y la fecha. |
| D-07 | Límite de uso del tutor | El coste por usuario muy activo puede superar los ingresos del plan. | Tope mensual de consultas por plan. |
| D-08 | Precio y modelo del Nivel 3 — **DECIDIDO (21/10/2026)** | A 50 € no cabe pagar a una persona cualificada que corrija cada proyecto de 2.500 a 4.000 palabras. | Curso Profesional a **50 €** (lecciones, test y examen de práctica) y **certificación aparte a 99 €** (examen final + proyecto con revisión humana). |
| D-09 | Supervisión del examen e identidad | El certificado pierde valor si no se sabe quién hizo el examen. | Lanzar con «nombre declarado por el titular» y examen con tiempo y preguntas aleatorias; valorar verificación de identidad o vigilancia por cámara cuando haya volumen. |
| D-10 | Orden por defecto del Nivel 1 — **DECIDIDO (21/10/2026)** | Productos o Formas de invertir primero. | Productos primero (sección 5.3). |

---

## 15. Registro de cambios de la versión 1.2 (21/10/2026)

**Correcciones del documento**
- Esquema de datos: `tier` en lugar de un segundo `level`; `status` como estado editorial; colección nueva `clases` para N2 y N3 (sección 4.4).
- Competencias del examen N1: 35, no 33 (sección 8.1).
- Identificadores de pregunta del Camino Cero (`sNN`) y de Trade Republic (`apNN`) registrados como excepciones (sección 0.1).
- «Examen supervisado» y «nombre verificado al pagar» sustituidos por decisiones explícitas (D-09).

**Mejoras añadidas**
- Nivel 2 presentado como «Avanzado», con «Clase del mes» para que la suscripción tenga contenido nuevo.
- Plan anual (49 €) y 7 días de prueba del Plan Avanzado.
- Certificación del Nivel 3 separada del curso: curso 50 €, certificación 99 € (D-08, decidido).
- Menú «Formaciones» arriba a la izquierda (tres líneas): panel lateral que se despliega en Inversión → Nivel 1, 2 y 3 → módulos. Preparado para añadir más formaciones.
- Lo que ya era gratis sigue gratis; los exámenes antiguos redirigen al nuevo.
- Tabla de capacidades y competencias del examen N1 (sección 9.1).
- Insignia y certificados verificables solo con corrección en el servidor; consentimiento para mostrar el nombre.
- Objetivos múltiples en el diagnóstico.
- Eventos anónimos para medir el embudo: `sesion_completada`, `examen_n1`, `interes_nivel`, `recordatorio_activado`.

**Hecho en la web**
- Fase 1 completa:
  - competencias con `level` y las 2 nuevas;
  - `/es/niveles/` con tres niveles;
  - módulo «Mantener el rumbo» (7 sesiones);
  - «Mi plan en una página»;
  - examen N1 (30 preguntas por capacidades, espera de 24 h);
  - insignia y logro «Nivel 1 completo».
- Fase 2 adelantada:
  - `/es/nivel-2/` y `/es/nivel-3/` con todo el temario, candados, clientes ficticios y avisos del certificado;
  - muestras abiertas `n2-ens-01`, `n2-car-01` y `n3-reg-01`;
  - botón «Avisadme cuando abra».
- Diseño:
  - opciones de las preguntas una debajo de otra, con espacio, en el diagnóstico, el repaso y los exámenes;
  - verdadero/falso también en columna.


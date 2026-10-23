# Pendientes: datos, credenciales y revisiones

## Datos y credenciales que debe aportar el titular

| Dato | Dónde | Para qué |
|---|---|---|
| Nombre o razón social, NIF, domicilio, correo, datos registrales | `src/config/site.ts` → `OWNER` | Aviso legal (LSSI art. 10), privacidad, contacto |
| Dominio definitivo | Variable `SITE_URL` | Canonical, sitemap, Open Graph |
| Proveedor de alojamiento | Política de privacidad | Información sobre tratamientos y transferencias |
| Cuenta de AdSense (`ca-pub-…`) y bloques de anuncios | Variables `PUBLIC_*` | Publicidad (solo cuando todo lo demás esté listo) |
| Mensaje de consentimiento configurado en AdSense (Privacidad y mensajes) | Panel de AdSense | CMP certificada exigida por Google en el EEE |
| Confirmar el nombre de autor tal como debe aparecer | `src/config/site.ts` → `AUTHOR` | Solo se muestra en letra pequeña al final de la política de privacidad. Se ha tomado «Hugo Velilla Sánchez» del correo de la cuenta; corrígelo si no es exacto. Al monetizar, completar `OWNER` para el aviso legal |
| Dominio definitivo y comprobación de la marca «umotion Academy» | Registrador, OEPM/EUIPO | Hoy es un prototipo sin indexar |
| Revisores reales, si los hay (nombre y credencial verificable) | Frontmatter `reviewer` | Solo si existen; no se inventan |

No hace falta ninguna credencial para ejecutar ni compilar la web.

## Revisión profesional necesaria

1. **Jurídica**: aviso legal, privacidad, cookies, condiciones; encaje de la actividad con la normativa de servicios de inversión (que el contenido sea información general y no asesoramiento ni comunicación publicitaria de productos); ley aplicable; publicidad de terceros.
2. **Fiscal**: lección de comisiones y fiscalidad (escala del ahorro 2025, traspasos, regla de los dos meses), criptoactivos y fiscalidad de dividendos. Confirmar la escala de 2026 cuando esté disponible.
3. **Financiera / editorial**: todas las lecciones, estrategias e historias están en estado «Pendiente de revisión humana».

## Cumplimiento legal (octubre de 2026)

Detalle y listas por función en `docs/LEGAL.md`. **Todos los textos legales son borradores revisados el 23/10/2026 y deben pasar por un abogado**: aviso legal, privacidad, cookies, condiciones (incluye IA y planes de pago futuros), accesibilidad (página nueva), alcance educativo, financiación, metodología, contacto, la primera capa del alta en «Mi cuenta» y el aviso de la recomendación de bróker.

**Titular**
- Rellenar `OWNER` y, si hay SMTP propio, `LEGAL.mailProvider` (`src/config/site.ts`).
- Aceptar o firmar y guardar los contratos de encargado: Vercel, Supabase, Anthropic, el proveedor de correo y, al activarlos, Cloudflare Turnstile y Google.
- Confirmar los plazos de los registros de Vercel y de las copias de Supabase del plan contratado, y decidir si se borran las cuentas sin uso en 24 meses.
- AdSense, al activarlo: mensaje del RGPD (CMP certificada, TCF v2.2) con «No consentir» en la primera capa, consentimiento recordado como máximo 24 meses y bloqueo de categorías (apuestas, CFD, criptoactivos, préstamos rápidos).
- Confirmar que Trade Republic no paga nada (ni referidos); si paga, `PUBLIC_BROKER_PAID=true`.
- Comprobar o registrar la marca «umotion» (OEPM o EUIPO) y no usar logotipos de Anthropic, OpenAI ni Trade Republic.
- Mantener el registro de actividades (borrador en `docs/LEGAL.md`, apartado 3) y un procedimiento de brechas (72 horas).

**Código**
- Aviso de IA visible en la primera interacción del corrector de peticiones (`PromptCoach.astro`), junto al botón «Opinión con IA» y en su respuesta (art. 50 del Reglamento de IA). El tutor ya etiqueta cada respuesta.
- Antes de cobrar: «impuestos incluidos» en los precios, información previa, botón «pedido con obligación de pago», botón de desistimiento y consentimiento para empezar el contenido digital antes de 14 días.

**Abogado**
- Encaje de Vercel Web Analytics con el art. 22.2 LSSI y la base de interés legítimo.
- Excepción de consentimiento para el almacenamiento local técnico y de preferencias.
- Transferencias internacionales de cada proveedor, ley aplicable y forma jurídica del titular.
- Si la DSA (punto de contacto, avisos de contenido) y la Ley 11/2023 de accesibilidad aplican o hay exención por microempresa.
- Condiciones de contratación de los niveles 2 y 3 antes de cobrar.

## Seguridad e infraestructura (octubre de 2026)

Detalle, lista del titular punto por punto y pasos de cada panel en `docs/SEGURIDAD.md`.

**Titular (paneles)**
- Poner `SECURITY_CONTACT` en Vercel (`mailto:` con el correo de `OWNER.email`, o una página `https://`) para `/.well-known/security.txt`. Hoy lleva un marcador y la compilación avisa. Renovar su fecha `Expires` antes del 23/10/2027.
- Verificación en dos pasos (llave o aplicación, no SMS) en GitHub, Vercel, Supabase, Anthropic, Google y el registrador del dominio; códigos de recuperación en un gestor de contraseñas.
- Vercel Firewall: Bot Protection y límites de peticiones en `/api/*` (tabla en `docs/SEGURIDAD.md`, apartado 3). Límite de gasto en la consola de Anthropic.
- GitHub: activar Dependabot alerts y security updates, proteger la rama principal y pasar la rama por defecto a `main` al publicar.
- Copias fuera de Vercel: clon del repositorio, exportación semanal de Supabase y variables en un gestor de contraseñas (apartado 6). Probar una restauración al año.
- Dominio definitivo: bloqueo de transferencia, DNSSEC, registros CAA y, cuando todos los subdominios usen HTTPS, solicitar el HSTS preload.

**Código**
- Migrar a Astro 7 en una rama aparte: `npm audit` mantiene avisos (uno crítico) que no se arreglan en Astro 5. Riesgo bajo en una web estática; explicación en `docs/SEGURIDAD.md`, apartado 5.
- Al activar AdSense, Supabase con dominio propio u otro servicio externo: revisar la consola y añadir sus dominios en `scripts/csp.mjs` y `vercel.json`.

## Currículo v1.2 (docs/CURRICULO.md)

- **Decisiones de los socios:** D-01, D-03, D-04, D-06, D-07, D-08 (precio y modelo del Nivel 3: propuesta de curso a 50 € y certificación aparte) y D-09 (supervisión e identidad del examen).
- **Revisión fiscal** de `mr-05-tus-inversiones-en-la-renta`: qué llega precargado al borrador, ventas de acciones y ETF y brókeres extranjeros, y orden de venta FIFO.
- **Muestra `n3-reg-01`:** contrastar con fuente primaria:
  - fecha de inicio del MUS (4/11/2014);
  - competencias del BCE en autorizaciones y participaciones significativas;
  - sede de la EBA;
  - mediadores de seguros supervisados por las comunidades autónomas;
  - reparto entre país de origen y de acogida en el pasaporte europeo.

  Añadir como fuentes los Reglamentos (UE) 1024/2013 y 1093, 1094 y 1095/2010.
- **Muestra `n2-car-01`:** valorar sustituir la fuente `markowitz-1952` por una guía de la CNMV.

## Cuentas y recordatorio diario

Construidos y probados con Supabase simulado; desactivados hasta configurarlos (ver `docs/CUENTAS-Y-AVISOS.md`): proyecto de Supabase en la UE, claves VAPID, `CRON_SECRET`, correo del enlace mágico en español con SMTP propio y revisión de privacidad. Con el plan Hobby de Vercel el aviso llega entre las 16:00 y las 16:59; para la hora exacta, plan Pro o `pg_cron` de Supabase.

## Recomendación de Trade Republic

- **Confirmar si hay remuneración** (referidos, afiliación o acuerdo). Si la hay, definir `PUBLIC_BROKER_PAID=true`: la web lo mostrará como «Colaboración pagada» en todas las páginas donde aparece. Hoy figura como recomendación editorial sin remuneración.
- Datos verificados el 16/10/2026 en fuentes oficiales (web, ayuda, contrato, registros del Banco de España y la CNMV). Pendiente: modelo 721 para cripto (lo presta la sede alemana), criterio de la AEAT sobre el modelo 720 (solo lo afirma la entidad), traspasos de entrada de fondos y sus costes, planes periódicos en fondos y nombres exactos de las pantallas de la app.
- Revisar el módulo cada vez que cambien las condiciones o la app.

## Contenido nuevo del nivel Básico

Escrito con asistencia de IA y en estado «Pendiente de revisión humana». Prioridades de revisión:

- **Fiscalidad y planes de pensiones** (Productos 06, Invertir ya 04): límites de aportación y supuestos de rescate vigentes.
- **Tipos del BCE** (Noticias 02): cita la facilidad de depósito vigente en octubre de 2026; actualizar con cada decisión.
- **Estudios citados de forma indirecta**: Chague et al. y Barber et al. (Taiwán), verificados en sus resúmenes (RePEc), no en el texto completo; Bessembinder (2018), por su resumen; Baumeister (2001), URL no accesible; Vanguard (2012), sin URL.
- **Umbrales orientativos** (deuda neta/EBITDA, cobertura de intereses) presentados como referencia, no como norma.
- Las empresas, noticias y operaciones de los casos son ficticias y lo indican.

## Contenido pendiente de verificar (señalado en la propia web)

- **Trade Republic**: la lista de precios oficial consultada es de abril de 2023; la vigente está en la aplicación. Pendiente: coste de cambio de divisa, tipos de cuenta, condiciones de las fracciones y protección de valores.
- **Interactive Brokers**: comisiones de retirada e inactividad, transferencia de valores, atención telefónica en español y límite del sistema de indemnización irlandés.
- **DEGIRO**: aportaciones automáticas, fracciones, transferencia de valores y detalle del informe fiscal.
- **MyInvestor**: comisión de retirada en el folleto de tarifas, titularidad múltiple en la cuenta de valores y planes automáticos de ETF.
- **Peter Lynch**: la rentabilidad anual de Magellan (en torno al 29 %) debe contrastarse con un documento primario de Fidelity.
- **Benjamin Graham**: la cifra de pérdidas de 1929-1932 (en torno al 70 %) debe contrastarse con una fuente primaria.
- **Charlie Munger**: las caídas de 1973-1974 están tomadas de *Poor Charlie's Almanack*; contrastar con una fuente primaria.
- **Fórum Filatélico y Afinsa**: cifras de afectados, importes y sentencias pendientes de enlazar al CENDOJ.
- **Nikkei 225**: precisar la caída máxima con la serie oficial (en la web figura como «más del 75 %»).
- **Referencias bibliográficas** marcadas como «no consultada en línea»: comprobar edición y páginas.
- **Resoluciones de la CNMV sobre CFD (2019 y 2023)**: confirmar que siguen vigentes sin cambios (se revisan cada año).

## Mejoras pedagógicas propuestas (octubre de 2026)

Revisión del temario como experto: que se aprenda de verdad, sin relleno. Datos de partida: 77 sesiones de unas 770 palabras, todas con `reviewer: null`; 155 preguntas de opción múltiple y 74 de verdadero o falso; 39 sesiones sin herramienta; solo 3 citan una crisis real. Orden recomendado: 1 → 2 → 3 → 4.

1. **Credibilidad (urgente)**
   - Revisión humana con titulación (EFPA o similar) del Camino Cero y el núcleo, con su nombre como revisor.
   - Ejemplos reales junto a los ficticios: 2008, 2020 y 2022, y cuánto se tardó en recuperar.
2. **Que aprendan de verdad**
   - Preguntas de decisión con consecuencias («tu cartera cae un 25 %: ¿vendes, esperas o aportas?»), mostrando qué habría pasado con cada opción.
   - Una pregunta al principio de cada sesión, antes de la explicación.
   - Repaso mezclado y espaciado: una pregunta de sesiones anteriores en cada sesión; los fallos vuelven días después (conectar `/es/repaso/` con el motor adaptativo).
   - Calculadoras pequeñas con los números del alumno en las 39 sesiones sin herramienta que lo necesiten.
   - Explicación de por qué tienta y por qué falla cada opción incorrecta.
3. **Quitar relleno**
   - Pasar de 4 consejos por sesión a 1 o ninguno (repiten la idea clave).
   - Una idea por sesión, unos 5 minutos; por encima de 600 palabras, partir o recortar.
   - Trading: en el Nivel 1 solo una sesión («por qué no es para ti»); el resto, a la Biblioteca o al Nivel 2.
   - Que cada acción final rellene «Mi plan en una página».
4. **Web**
   - Progreso por las 12 capacidades, no por sesiones completadas.
   - Porcentaje de acierto anónimo por pregunta, para detectar preguntas mal hechas.
   - Ruta exprés de unas 8 sesiones clave (colchón, deudas, fondo indexado, bróker, primera compra, aportar cada mes, qué hacer en una caída).
   - En `/es/empezar/`, entrar en la primera sesión con un clic.

Siguiente paso propuesto: sesión piloto `ya-08-cuando-cae` con todo aplicado, para comparar el antes y el después.

## Formación Emprendimiento

Ver `docs/EMPRENDIMIENTO.md`. Las 69 sesiones del Nivel 1 son un borrador: necesitan revisión de una gestoría o asesor (impuestos, Seguridad Social y laboral) y de un abogado mercantil (forma jurídica y cierre). Allí están las cifras que faltan por confirmar en fuente oficial y los siguientes pasos (herramientas, muestras de los niveles 2 y 3, diagnóstico y repaso).

## Formación Claude

Ver `docs/CLAUDE-FORMACION.md`. Las 50 sesiones del Nivel 1 son un borrador pendiente de revisión humana. Las funciones y los planes de Claude cambian a menudo: hay que revisar su vigencia cada trimestre. La opinión con IA en las prácticas necesita `AI_TUTOR_ENABLED` y `ANTHROPIC_API_KEY` en Vercel.

## Formación ChatGPT

Ver `docs/CHATGPT-FORMACION.md`. Las 50 sesiones del Nivel 1 son un borrador pendiente de revisión humana. ChatGPT cambia muy a menudo (canvas, el agente, Atlas y los GPTs han cambiado o se han retirado en 2026): hay que revisar su vigencia cada trimestre. Pendiente de confirmar en el centro de ayuda oficial, que no se pudo leer directamente: grabación de reuniones, voz con cámara, anuncios en el plan gratis en España, memoria solo del proyecto por plan, qué incluye Work en el plan gratis y qué apps faltan en el Espacio Económico Europeo.

## Funcionalidades no incluidas a propósito

- **Cuentas de usuario**: no existe un backend seguro; el progreso es local, exportable y borrable.
- **Recordatorios por correo o notificaciones**: no hay integración real. Se ofrece un archivo de calendario `.ics` generado en el navegador.
- **Analítica**: Vercel Web Analytics, sin cookies. Se activa en el panel de Vercel (Analytics → Enable). Solo envía la ruta (sin parámetros) y el evento anónimo «sesion_completada» (módulo y aciertos) y «recordatorio_activado»; los eventos personalizados solo se ven en el plan Pro de Vercel. Pendiente: revisión jurídica de la base de interés legítimo.
- **Tutor con IA**: construido pero desactivado. Para activarlo hace falta una clave de la API de Anthropic, revisión jurídica y de privacidad, y un límite de gasto (ver `docs/TUTOR-IA.md`). Mientras tanto funciona en modo guiado sin conexión.
- **Cotizaciones en tiempo real**: no se usan; no se simulan.
- **Módulos de materias primas, inmobiliario, planes de pensiones**: anunciados como «En preparación», sin páginas vacías.

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

## Funcionalidades no incluidas a propósito

- **Cuentas de usuario**: no existe un backend seguro; el progreso es local, exportable y borrable.
- **Recordatorios por correo o notificaciones**: no hay integración real. Se ofrece un archivo de calendario `.ics` generado en el navegador.
- **Analítica**: Vercel Web Analytics, sin cookies. Se activa en el panel de Vercel (Analytics → Enable). Solo envía la ruta (sin parámetros) y el evento anónimo «sesion_completada» (módulo y aciertos) y «recordatorio_activado»; los eventos personalizados solo se ven en el plan Pro de Vercel. Pendiente: revisión jurídica de la base de interés legítimo.
- **Tutor con IA**: construido pero desactivado. Para activarlo hace falta una clave de la API de Anthropic, revisión jurídica y de privacidad, y un límite de gasto (ver `docs/TUTOR-IA.md`). Mientras tanto funciona en modo guiado sin conexión.
- **Cotizaciones en tiempo real**: no se usan; no se simulan.
- **Módulos de materias primas, inmobiliario, planes de pensiones**: anunciados como «En preparación», sin páginas vacías.

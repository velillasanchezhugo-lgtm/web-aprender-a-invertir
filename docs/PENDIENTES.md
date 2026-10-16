# Pendientes: datos, credenciales y revisiones

## Datos y credenciales que debe aportar el titular

| Dato | Dónde | Para qué |
|---|---|---|
| Nombre o razón social, NIF, domicilio, correo, datos registrales | `src/config/site.ts` → `OWNER` | Aviso legal (LSSI art. 10), privacidad, contacto |
| Dominio definitivo | Variable `SITE_URL` | Canonical, sitemap, Open Graph |
| Proveedor de alojamiento | Política de privacidad | Información sobre tratamientos y transferencias |
| Cuenta de AdSense (`ca-pub-…`) y bloques de anuncios | Variables `PUBLIC_*` | Publicidad (solo cuando todo lo demás esté listo) |
| Mensaje de consentimiento configurado en AdSense (Privacidad y mensajes) | Panel de AdSense | CMP certificada exigida por Google en el EEE |
| Confirmar el nombre de autor tal como debe aparecer | `src/config/site.ts` → `AUTHOR` | Se ha tomado «Hugo Velilla Sánchez» a partir del correo de la cuenta; corrígelo si no es exacto |
| Dominio definitivo y comprobación de la marca «umotion Academy» | Registrador, OEPM/EUIPO | Hoy es un prototipo sin indexar |
| Revisores reales, si los hay (nombre y credencial verificable) | Frontmatter `reviewer` | Solo si existen; no se inventan |

No hace falta ninguna credencial para ejecutar ni compilar la web.

## Revisión profesional necesaria

1. **Jurídica**: aviso legal, privacidad, cookies, condiciones; encaje de la actividad con la normativa de servicios de inversión (que el contenido sea información general y no asesoramiento ni comunicación publicitaria de productos); ley aplicable; publicidad de terceros.
2. **Fiscal**: lección de comisiones y fiscalidad (escala del ahorro 2025, traspasos, regla de los dos meses), criptoactivos y fiscalidad de dividendos. Confirmar la escala de 2026 cuando esté disponible.
3. **Financiera / editorial**: todas las lecciones, estrategias e historias están en estado «Pendiente de revisión humana».

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
- **Analítica**: no se ha instalado. Si se añade, debe respetar el consentimiento (o ser una analítica sin cookies, revisada jurídicamente) y nunca recibir respuestas del test.
- **Chatbot financiero**: no se ha añadido; exigiría fuentes, controles y una necesidad real.
- **Cotizaciones en tiempo real**: no se usan; no se simulan.
- **Módulos de materias primas, inmobiliario, planes de pensiones**: anunciados como «En preparación», sin páginas vacías.

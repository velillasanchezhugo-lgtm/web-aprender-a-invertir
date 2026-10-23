# Cumplimiento legal de umotion Academy

Estado a 23 de octubre de 2026. **Todo lo de este documento y los textos legales de la web son un borrador**: debe revisarlos un abogado antes de publicar la web con dominio, publicidad, IA o pagos. No es asesoramiento jurídico.

Normativa comprobada en fuentes oficiales o primarias en octubre de 2026 (enlaces al final). Donde no se pudo leer el texto oficial, se indica.

## 1. Dónde está cada cosa

| Pieza | Archivo |
|---|---|
| Datos del titular (LSSI art. 10) | `src/config/site.ts` → `OWNER` (vacío: lo aporta el titular) |
| Datos legales comunes (edad mínima, fecha, proveedor de correo, región de las funciones, autoridad de control) | `src/config/site.ts` → `LEGAL` |
| Aviso legal | `src/pages/es/aviso-legal.astro` |
| Privacidad | `src/pages/es/privacidad.astro` |
| Cookies y almacenamiento local | `src/pages/es/cookies.astro` |
| Condiciones de uso (incluye IA y planes de pago futuros) | `src/pages/es/condiciones.astro` |
| Declaración de accesibilidad | `src/pages/es/accesibilidad.astro` (nueva) |
| Alcance educativo (no asesoramiento, no publicidad, Trade Republic, IA) | `src/pages/es/alcance-educativo.astro` |
| Financiación y conflictos de interés | `src/pages/es/financiacion.astro` |
| Primera capa de información y edad en el alta | `src/pages/es/cuenta.astro` |
| Aviso de la recomendación de bróker | `src/components/BrokerDisclosure.astro` |
| Consentimiento de publicidad (CMP de Google) | `src/components/Consent.astro` |
| Pie: enlaces legales, aviso de no afiliación y de marcas | `src/components/Footer.astro` |

Las páginas legales llevan el aviso «Borrador pendiente de revisión jurídica» (`LegalPage.astro` con `legal`) y `noindex` mientras falten los datos del titular.

## 2. Mapa de cumplimiento

Estado: **Hecho** (en el código), **Titular** (depende de un dato, un contrato o un panel), **Abogado** (necesita revisión profesional), **No aplica**.

### 2.1. LSSI-CE (Ley 34/2002)

| Obligación | Estado |
|---|---|
| Art. 10: nombre o razón social, NIF, domicilio, correo, datos registrales | Hecho el hueco (`OwnerData.astro`); **Titular**: rellenar `OWNER`. Sin esos datos las páginas legales no se indexan |
| Art. 10.1.f: precios claros con impuestos incluidos | **Titular/código**: `PRICING` no dice «IVA incluido». Antes de cobrar, añadir «impuestos incluidos» en `Price.astro` o en los textos de `PRICING` |
| Art. 20: identificar la publicidad | Hecho: anuncios con la etiqueta «Publicidad»; si Trade Republic pagara, «Publicidad · colaboración pagada» (`PUBLIC_BROKER_PAID`) |
| Art. 21: comunicaciones comerciales por correo o push solo con consentimiento expreso | Hecho: no se envían. **Código**: si algún día se avisa por correo de la apertura de un plan de pago, casilla aparte, no marcada, y baja en cada envío |
| Art. 22.2: cookies y almacenamiento | Ver 2.3 |

### 2.2. RGPD y LOPDGDD

| Obligación | Estado |
|---|---|
| Información por capas (art. 13 RGPD, art. 11 LOPDGDD) | Hecho: primera capa en el alta de «Mi cuenta» y política completa |
| Bases legales y finalidades | Hecho en la política (ver el registro, 3) |
| Encargados de tratamiento (art. 28) | **Titular**: aceptar o firmar el contrato de encargado (DPA) de Vercel, Supabase, Anthropic, el proveedor de correo y, si se activa, Google. Guardar copia fechada |
| Transferencias internacionales (cap. V) | Hecho en la política. **Abogado**: confirmar el mecanismo de cada proveedor (ver 4) |
| Plazos de conservación | Hecho en la política; **Titular**: confirmar el plazo de los registros de Vercel y de las copias de Supabase según el plan contratado, y decidir si se borran las cuentas sin uso en 24 meses |
| Derechos y reclamación ante la AEPD | Hecho |
| Menores: 14 años (art. 7 LOPDGDD) | Hecho: casilla en el alta y cláusula en privacidad y condiciones |
| Registro de actividades (art. 30) | Hecho en borrador (apartado 3). **Titular**: guardarlo fuera del repositorio si incluye datos personales y mantenerlo al día |
| Delegado de protección de datos | No aplica, en principio (no hay tratamiento a gran escala de categorías especiales ni seguimiento sistemático a gran escala). **Abogado**: confirmar |
| Evaluación de impacto (art. 35) | No aplica, en principio. Revisar si se activan perfiles con IA o publicidad personalizada a gran escala |
| Brechas de seguridad (arts. 33 y 34) | Hecho en la política (72 horas). **Titular**: tener un procedimiento y un registro de incidentes |
| Minimización | Hecho: el test y el plan en una página, que pueden incluir datos de la situación económica, no se sincronizan con la cuenta (`SYNC_KEYS` en `src/lib/sync.ts`); la política y «Mi cuenta» lo dicen |

### 2.3. Cookies y almacenamiento local (art. 22.2 LSSI y guía de la AEPD de julio de 2023)

| Obligación | Estado |
|---|---|
| Sin publicidad: solo almacenamiento técnico o pedido por la persona, exceptuado del consentimiento | Hecho. Tabla completa de claves en `/es/cookies/`. **Abogado**: confirmar la excepción |
| Vercel Web Analytics sin cookies | Hecho y explicado. **Abogado**: confirmar que no entra en el art. 22.2 (las Directrices 2/2023 del CEPD amplían el ámbito a técnicas sin cookies) y la base de interés legítimo. Si no fuera así, cargar la analítica solo tras consentimiento |
| Con publicidad: consentimiento previo, informado y granular | **Titular**: configurar en AdSense → Privacidad y mensajes el mensaje del RGPD (CMP certificada por Google con TCF v2.2, obligatoria en el EEE, Reino Unido y Suiza) |
| Rechazar tan fácil como aceptar (botón «No consentir» en la primera capa, misma visibilidad) | **Titular**: activar la opción «No consentir» y el cierre sin consentir en el mensaje de Google |
| Retirar el consentimiento en cualquier momento | Hecho: botón «Configurar privacidad» en el pie (llama a `googlefc.showRevocationMessage`). Limitación: solo funciona en páginas que cargan AdSense; en las demás avisa |
| Recordar la elección un máximo de 24 meses | **Titular**: comprobarlo en la configuración del mensaje |
| No cargar nada de publicidad antes de elegir | Hecho: sin `PUBLIC_ADS_ENABLED` y un `ca-pub-` válido no se carga ningún script. Con AdSense, el bloqueo previo lo hace la CMP de Google. **Abogado**: comprobar con el navegador que no se escriben cookies de Google antes de elegir |

### 2.4. Reglamento de IA (Reglamento (UE) 2024/1689, modificado por el Reglamento (UE) 2026/1744, «ómnibus digital sobre IA»)

- El ómnibus se publicó en el DOUE el 24 de julio de 2026 y entró en vigor el 27 de julio. **No aplaza** la obligación del art. 50.1: desde el 2 de agosto de 2026, quien ofrece un sistema de IA que conversa con personas debe informar de que es una IA, salvo que sea evidente. Solo da hasta el 2 de diciembre de 2026 para el marcado legible por máquina del art. 50.2 a los proveedores de IA generativa que ya estaban en el mercado (aquí lo cumple Anthropic, no umotion).
- umotion pone el tutor y el corrector en servicio con su nombre, así que debe cumplir el art. 50.1 y 50.5: aviso **claro y a más tardar en la primera interacción**.
  - Hecho: condiciones (apartado 3), privacidad (3.6), alcance educativo y metodología.
  - Hecho en el tutor: cada respuesta lleva la etiqueta «Respuesta generada por IA (Claude) · puede equivocarse».
  - **Código**: en el corrector (`PromptCoach.astro`), una línea junto a «Opinión con IA» y la misma etiqueta en su respuesta.
- Art. 50.4 (textos generados con IA que informan al público): el contenido está hecho con asistencia de IA y lo dice en cada página y en la metodología. Al pasar a «Revisado» con revisor identificable, hay control editorial humano.
- Art. 4 (alfabetización en IA, reformulado por el ómnibus): **Titular**: que quien gestione el tutor conozca sus límites. Basta con documentarlo (por ejemplo, `docs/TUTOR-IA.md`).
- No es un sistema de alto riesgo: no evalúa el acceso a la educación ni puntúa exámenes con efectos oficiales. **Abogado**: confirmar si el examen o la certificación del Nivel 3 llegaran a usar IA para puntuar (anexo III, punto 3).

### 2.5. Inversión (CNMV)

| Riesgo | Estado |
|---|---|
| Asesoramiento sin autorización (Ley 6/2023 de los Mercados de Valores y de los Servicios de Inversión) | Hecho: solo educación general, sin carteras ni recomendaciones personalizadas (reglas de `CLAUDE.md` y `CURRICULO.md` 11.2). El tutor tiene la misma regla en su prompt |
| Recomendaciones de inversión (Reglamento (UE) 596/2014 sobre abuso de mercado, art. 20) | Hecho: no se opina sobre comprar o vender instrumentos concretos; los casos de empresas son ficticios. La CNMV revisó «finfluencers» en abril de 2026 con este criterio |
| Publicidad de productos financieros | Hecho: no se hace. La recomendación de Trade Republic es una opinión sobre un intermediario, sin pago, declarada en cada página (`BrokerDisclosure.astro`). **Titular**: confirmar que no hay remuneración ni referidos; si los hay, `PUBLIC_BROKER_PAID=true` |
| Anuncios de terceros de CFD, criptoactivos o préstamos | **Titular**: bloquear esas categorías en AdSense al activarlo |

### 2.6. Marcas de terceros

Hecho: uso nominativo (solo para identificar el producto del que habla la clase), aviso de no afiliación en el pie y en el aviso legal, sin logotipos de terceros. **Titular**: no usar logotipos ni colores de Anthropic, OpenAI o Trade Republic, ni nombres como «Academia Claude oficial». Comprobar o registrar «umotion» en la OEPM o la EUIPO.

### 2.7. Consumidores (TRLGDCU), para los planes de pago

Hoy no se cobra (`PRICING.paymentsEnabled = false`). Las condiciones ya anuncian las reglas. Antes de cobrar:

- Información previa (arts. 97 y 98): características, precio final con impuestos, duración, renovación automática, cancelación, requisitos técnicos y datos del vendedor.
- Botón con la frase «pedido con obligación de pago» o equivalente (art. 98.2).
- Desistimiento de 14 días (art. 102) con formulario modelo. La Directiva (UE) 2023/2673 añade un **botón de desistimiento** visible, aplicable desde el 19 de junio de 2026; en octubre de 2026 España aún no la había transpuesto (seguía unida al anteproyecto de ley de crédito al consumo). Conviene ofrecerlo igualmente.
- Contenido digital entregado al momento: consentimiento expreso y reconocimiento de que se pierde el desistimiento (art. 103.m); para la suscripción como servicio, pago proporcional si se pide empezar antes (art. 108).
- Conformidad del contenido y los servicios digitales (arts. 114 y siguientes).
- Factura y, si se cobra con una pasarela, su contrato de encargado.
- La plataforma europea de resolución de litigios en línea se cerró el 20 de julio de 2025 (Reglamento (UE) 2024/3228): no hace falta enlazarla.
- La Ley 10/2025 de atención a la clientela solo obliga a grandes empresas (250 trabajadores o 50 M€ de facturación): no aplica hoy.

### 2.8. Accesibilidad

La Ley 11/2023 (transpone la Directiva (UE) 2019/882) se aplica desde el 28 de junio de 2025 al comercio electrónico con consumidores. Las **microempresas que prestan servicios** (menos de 10 personas y hasta 2 M€) están exentas. Hecho: declaración voluntaria en `/es/accesibilidad/`, con objetivo WCAG 2.2 AA, sin afirmar certificaciones. **Titular**: revisar la declaración cada año; **Abogado**: confirmar la exención al cobrar.

### 2.9. Propiedad intelectual

- Contenido propio: todos los derechos reservados, con permiso de uso personal y cita (art. 32 LPI). Prohibido el uso masivo o para entrenar IA sin permiso (aviso legal y condiciones).
- Tipografías: Instrument Sans y Geist Mono, licencia SIL Open Font License 1.1, alojadas en el propio sitio (comprobado en `node_modules`).
- Imágenes: solo el logotipo propio y la imagen para redes generada por el proyecto. No hay fotos de terceros.
- Textos hechos con IA: los derechos de autor en España exigen creación humana. La revisión y edición humana refuerza la titularidad. **Abogado**: valorar.

### 2.10. Reglamento de Servicios Digitales (DSA, Reglamento (UE) 2022/2065)

umotion publica su propio contenido: no es una plataforma ni aloja contenido público de terceros. La cuenta guarda en la nube notas y progreso privados de cada persona, lo que podría verse como «alojamiento de datos». Por prudencia, el aviso legal ofrece un punto de contacto (arts. 11 y 12) y un canal para avisar de contenido ilícito (art. 16). Como microempresa, no le aplican las obligaciones de plataformas (art. 19). **Abogado**: confirmar.

## 3. Registro de actividades de tratamiento (borrador, art. 30 RGPD)

Responsable: el titular (`OWNER`). Destinatarios: solo los encargados del apartado 4. Medidas de seguridad: HTTPS, acceso sin contraseña, seguridad de filas en Supabase, claves en variables de entorno, verificación en dos pasos en los paneles (ver `docs/SEGURIDAD.md`).

| Actividad | Personas | Datos | Finalidad | Base legal | Plazo |
|---|---|---|---|---|---|
| Navegación y seguridad | Visitantes | IP, fecha, página, navegador | Servir la web y evitar abusos | Interés legítimo (6.1.f) | Según el plan de Vercel; contador de peticiones en memoria, máximo 1 hora |
| Estadísticas | Visitantes | Ruta, eventos anónimos, identificador diario | Medir y mejorar | Interés legítimo (6.1.f) | Identificador, 24 horas; datos agregados, según Vercel |
| Cuenta | Personas registradas (14 años o más) | Correo, progreso, notas, prácticas y nombre de la insignia (no el test ni el plan en una página) | Guardar y sincronizar el progreso | Contrato (6.1.b) | Mientras exista la cuenta; copias según Supabase |
| Protección contra robots (si se activa Turnstile) | Quien envía un formulario | Señales técnicas del navegador, IP | Evitar abusos | Interés legítimo (6.1.f) | Según Cloudflare |
| Recordatorio | Quien lo activa | Suscripción push, último día de estudio, racha, último aviso | Enviar el recordatorio | Consentimiento (6.1.a) | Hasta que se desactive o caduque la suscripción |
| Tutor y corrector con IA | Quien los usa | Texto escrito, últimos turnos, resumen de nivel | Generar la respuesta | Solicitud de la persona (6.1.b) | umotion no guarda; Anthropic, 30 días (más si detecta un uso prohibido) |
| Contacto y derechos | Quien escribe | Nombre, correo, mensaje | Responder y atender derechos | Solicitud (6.1.b) y obligación legal (6.1.c) | Hasta responder y 1 año; bloqueo según art. 32 LOPDGDD |
| Publicidad (si se activa) | Visitantes que consienten | Identificadores de cookies, IP | Mostrar y medir anuncios | Consentimiento (6.1.a) | Según Google y la CMP |

## 4. Encargados y transferencias

| Proveedor | Papel | Ubicación | Mecanismo de transferencia | Acción del titular |
|---|---|---|---|---|
| Vercel Inc. | Encargado: alojamiento, funciones, analítica | Red mundial; funciones en EE. UU. por defecto (región `iad1`) | Adherido al Marco de Privacidad de Datos UE-EE. UU. y cláusulas contractuales tipo en su DPA | Aceptar el DPA. Valorar fijar la región `fra1` (anotado para infraestructura) y reflejarlo en `LEGAL.functionsRegion` |
| Supabase Inc. | Encargado: cuenta, progreso, avisos y, por defecto, correo del enlace | Proyecto en la UE (Fráncfort); soporte desde fuera | Cláusulas contractuales tipo en su DPA (no consta adhesión al Marco) | Crear el proyecto en la UE y aceptar el DPA |
| Proveedor SMTP (si se configura) | Encargado: correo del enlace | Según el proveedor | Según el proveedor | Elegirlo, aceptar su DPA y escribir su nombre en `LEGAL.mailProvider` |
| Anthropic Ireland, Limited | Encargado: tutor y corrector | Procesa en EE. UU. | Cláusulas contractuales tipo en su DPA, que forma parte de sus condiciones comerciales | Usar una cuenta de la API (no un plan de consumo), revisar el DPA y fijar un límite de gasto |
| Cloudflare, Inc. (Turnstile, opcional con `PUBLIC_TURNSTILE_SITE_KEY`) | Encargado: comprobación anti-robots | Red mundial | Marco de Privacidad de Datos y cláusulas contractuales tipo | Aceptar su DPA si se activa |
| Google Ireland Limited (AdSense) | Responsable independiente de la publicidad | UE y EE. UU. | Marco de Privacidad de Datos y cláusulas de Google | Aceptar las condiciones de protección de datos de Google Ads y configurar la CMP |
| Servicios push de los navegadores | Entrega técnica del aviso | Según el navegador | — | Ninguna |

El Marco de Privacidad de Datos UE-EE. UU. sigue vigente: el Tribunal General lo confirmó el 3 de septiembre de 2025 y está recurrido ante el Tribunal de Justicia (asunto C-703/25 P). Si se anulara, quedan las cláusulas contractuales tipo.

## 5. Listas antes de activar cada cosa

**Antes de publicar con dominio**
- [ ] `OWNER` completo (aviso legal, contacto y privacidad).
- [ ] Revisión del abogado de las páginas legales y de este documento; quitar los «[Pendiente…]».
- [ ] Contratos de encargado aceptados y guardados.
- [ ] Comprobar la marca «umotion».

**Antes de activar la cuenta y los avisos**
- [ ] Proyecto de Supabase en la UE; `LEGAL.mailProvider` si hay SMTP propio.
- [ ] Plazo de copias de Supabase en la política.

**Antes de activar el tutor o el corrector con IA**
- [ ] Aviso visible de IA en el corrector, como ya tiene el tutor (art. 50).
- [ ] Revisar el DPA de Anthropic y el plazo de conservación vigente.
- [ ] Pruebas de que no da recomendaciones personalizadas.

**Antes de activar AdSense**
- [ ] Mensaje del RGPD de Google con «No consentir» en la primera capa.
- [ ] Categorías sensibles bloqueadas (apuestas, CFD, criptoactivos, préstamos rápidos).
- [ ] Comprobar que no hay cookies antes de elegir.

**Antes de cobrar**
- [ ] Condiciones de contratación completas (2.7), precios con impuestos, factura.
- [ ] Botón de desistimiento y flujo de consentimiento para el contenido digital.
- [ ] Revisar si sigue la exención de accesibilidad para microempresas.

## 6. Fuentes consultadas (octubre de 2026)

- LSSI-CE: [BOE-A-2002-13758](https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758).
- RGPD: [Reglamento (UE) 2016/679](https://eur-lex.europa.eu/eli/reg/2016/679/oj). LOPDGDD: [BOE-A-2018-16673](https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673).
- AEPD, [Guía sobre el uso de las cookies, julio de 2023](https://www.aepd.es/sites/default/files/2020-07/guia-cookies.pdf).
- Reglamento de IA: [Reglamento (UE) 2024/1689](https://eur-lex.europa.eu/eli/reg/2024/1689/oj) y Reglamento (UE) 2026/1744 (ómnibus digital sobre IA, DOUE de 24/7/2026). No se pudo abrir el texto en EUR-Lex desde este entorno: fechas y alcance contrastados con Cuatrecasas, ECIJA e iubenda. **Abogado**: leer el texto consolidado.
- TRLGDCU: [BOE-A-2007-20555](https://www.boe.es/buscar/act.php?id=BOE-A-2007-20555). Directiva (UE) 2023/2673 (estado de la transposición según OCU y Grant Thornton, junio de 2026).
- Plataforma de litigios en línea: [Reglamento (UE) 2024/3228](https://www.boe.es/doue/2024/3228/L00001-00003.pdf).
- Ley 10/2025 de atención a la clientela (BOE de 27/12/2025), por resúmenes de KPMG y Consumo Responde.
- Accesibilidad: Ley 11/2023 ([BOE-A-2023-11022](https://www.boe.es/buscar/act.php?id=BOE-A-2023-11022)) y Directiva (UE) 2019/882.
- Ley 6/2023 de los Mercados de Valores y de los Servicios de Inversión; Reglamento (UE) 596/2014; nota de la CNMV sobre finfluencers de abril de 2026 (por resúmenes de prensa).
- DSA: [Reglamento (UE) 2022/2065](https://eur-lex.europa.eu/eli/reg/2022/2065/oj).
- Proveedores: [condiciones comerciales](https://www.anthropic.com/legal/commercial-terms) y [conservación de datos](https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data) de Anthropic; [cumplimiento de Vercel](https://vercel.com/docs/security/compliance); [DPA](https://supabase.com/legal/customer-resources/data-processing-addendum) y [transferencias](https://supabase.com/legal/privacy-resources/data-residency-and-transfers-faq) de Supabase.

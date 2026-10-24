# Seguridad de umotion Academy

Estado a 23/10/2026. Este documento recoge la lista de seguridad que pidió el titular (pensada para WordPress) adaptada a esta web, y lo que hay que hacer en cada panel.

**Cómo es la web.** Astro 5 estático en Vercel: casi todo son archivos HTML ya generados, sin base de datos propia ni panel de administración. Lo único que se ejecuta en el servidor son las funciones de `api/` (tutor y corrector con IA, avisos push, cuenta con Supabase). Por eso muchos riesgos de WordPress (plugins, contraseñas de administrador, inyección SQL en el panel) aquí no existen, y los que quedan están en las cuentas de los proveedores.

## 1. La lista del titular, punto por punto

| # | Punto | Estado | Dónde |
|---|---|---|---|
| 1 | HTTPS en toda la web | **Hecho.** Vercel redirige `http://` a `https://` con un 308 (comprobado el 23/10/2026) y renueva el certificado solo. La cabecera HSTS obliga al navegador a usar siempre HTTPS. | `vercel.json`; panel solo para el preload (abajo) |
| 2 | Cortafuegos | **Hecho en parte en el código** (reglas que bloquean rastreos de WordPress, archivos ocultos y métodos raros). **Hacer en el panel:** límites de peticiones y protección contra robots. | `vercel.json` → `routes`; apartado 3 |
| 3 | reCAPTCHA en los formularios | **Hecho en el código** (campo trampa, tiempo mínimo y límite por IP en las funciones, sin rastreo). **Opcional en el panel:** Cloudflare Turnstile, que no usa cookies de seguimiento, en lugar de reCAPTCHA. | `src/scripts/bot-guard.ts`, `api/_guard.js`, `docs/CUENTAS-Y-AVISOS.md` |
| 4 | Bloqueo de intentos de contraseña | **No aplica tal cual:** la web no tiene contraseñas (la cuenta entra con enlace mágico). Lo equivalente está **hecho en el código** (límite de peticiones por IP en `api/`) y **en el panel** de Supabase (*Authentication → Rate Limits*). | `docs/CUENTAS-Y-AVISOS.md` |
| 5 | Escáner de virus diario | **Hecho en el código:** CodeQL analiza el código en cada cambio y cada semana; `npm audit` revisa las dependencias en cada cambio; GitHub vigila los secretos (activado en el repositorio). **Hacer en el panel:** activar los avisos de Dependabot. | `.github/workflows/`, apartado 5 |
| 6 | Todo al día | **Hecho en el código:** Dependabot propone cada semana las actualizaciones menores y de seguridad. **Pendiente (código):** pasar a Astro 7 (versión mayor). | `.github/dependabot.yml`, apartado 5 |
| 7 | Ningún plugin pirata | **Hecho en el código:** `npm run check:deps` comprueba en cada cambio que todas las dependencias vienen del registro oficial de npm, con huella de integridad y con licencia compatible. | `scripts/check-deps.mjs` |
| 8 | Copia fuera del hosting | **Hacer (titular):** el código ya está fuera de Vercel (GitHub); faltan la copia de Supabase y de las variables. | Apartado 6 |
| 9 | Acceso distinto al panel de administración | **No aplica tal cual:** no hay panel propio (no existe `/wp-admin`; el cortafuegos bloquea quien lo busca). Los «paneles» son las cuentas de Vercel, GitHub, Supabase, Anthropic, Google y el registrador. **Hacer (titular):** protegerlas. | Apartado 7 |
| 10 | Verificación en dos pasos | **Hacer (titular)** en todas esas cuentas, con llave de seguridad o aplicación (no SMS). | Apartado 7 |

**Ciberseguridad avanzada (además de la lista):** cabeceras de seguridad y política de contenido (CSP) estricta por página, funciones en la UE, `security.txt`, pruebas automáticas de las cabeceras y revisión de la aplicación (XSS, entradas de las funciones, inyección de instrucciones en la IA) hecha en paralelo en `api/` y `src/`.

## 2. Cabeceras y política de contenido (CSP)

Todas las cabeceras están en `vercel.json` y las comprueba `tests/security-headers.test.ts`. No se aplican en `astro preview` (solo en Vercel).

| Cabecera | Valor | Para qué |
|---|---|---|
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` | Siempre HTTPS, dos años, también en subdominios |
| `Content-Security-Policy` | ver abajo | Solo se ejecuta código de la propia web |
| `X-Frame-Options` y `frame-ancestors 'none'` | `DENY` | Nadie puede meter la web en un marco (clickjacking) |
| `X-Content-Type-Options` | `nosniff` | El navegador no adivina tipos de archivo |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | A otras webs solo llega el dominio, no la ruta |
| `Permissions-Policy` | cámara, micrófono, ubicación, pagos, USB, sensores, captura de pantalla, Topics… desactivados; portapapeles solo para la propia web | Ni la web ni un anuncio pueden pedir esos permisos |
| `Cross-Origin-Opener-Policy` | `same-origin-allow-popups` | Aísla la ventana de otras pestañas; deja abrir anuncios |
| `Cross-Origin-Resource-Policy` | `same-origin` (en `/og-default.png` y `/brand/`, `cross-origin`) | Otras webs no pueden incrustar nuestros archivos, salvo logo e imagen para redes |
| `X-Permitted-Cross-Domain-Policies`, `Origin-Agent-Cluster` | `none`, `?1` | Endurecimiento menor |
| En `/api/*` | `Cache-Control: no-store`, `X-Robots-Tag: noindex`, CSP `default-src 'none'` | Respuestas privadas, sin caché ni indexación. Sin CORS: las funciones rechazan otros orígenes |

**Permissions-Policy y planes de pago futuros.** `payment=()` bloquea la API de pagos del navegador, y `publickey-credentials-get=()` bloquea las llaves de acceso (*passkeys*). Hoy no se usan. Si al cobrar se usa un formulario de pago incrustado (por ejemplo, con Apple Pay o Google Pay) o se añaden llaves de acceso, habrá que abrirlos solo para la propia web y el proveedor (por ejemplo, `payment=(self "https://js.stripe.com")`). Una página de pago alojada por el proveedor (redirección) no necesita cambios.

**Navegación de los avisos push.** `public/sw.js` solo abre rutas de la propia web, aunque el aviso traiga otra dirección.

### Cómo funciona la CSP

Dos capas, y un script tiene que pasar las dos (`scripts/csp.mjs`):

1. **Cabecera en `vercel.json`** (fija): el techo de orígenes permitidos y lo que solo puede ir en cabecera (`frame-ancestors`, `upgrade-insecure-requests`).
2. **Etiqueta `<meta>` en cada página**, que `scripts/postbuild-check.mjs` inserta al compilar: permite **solo** los scripts en línea de esa página, por su huella `sha256`, y solo los orígenes que necesita esa compilación: Supabase si hay cuentas, Google solo con la publicidad activa, Cloudflare solo con Turnstile. Un script inyectado por un atacante, un `onerror=` o un script de otro dominio no se ejecutan (comprobado en el navegador).

Los estilos en línea están permitidos (`style-src 'unsafe-inline'`): la web usa muchos atributos `style` y el riesgo de inyectar estilos es bajo.

**Si un servicio nuevo deja de funcionar** (la consola dice «Refused to load… Content Security Policy»): añade su dominio a `scripts/csp.mjs` y regenera la cabecera de `vercel.json` con `headerPolicy()` (la prueba avisa si no coinciden). Para AdSense, el listado de dominios de Google está en `ADS_SCRIPT`, `ADS_CONNECT` y `ADS_FRAME`. Al activarlo, revisa la consola en una página con anuncios y el mensaje de consentimiento. Si la cuenta usa un dominio propio de Supabase (no `*.supabase.co`), añádelo a `SUPABASE_CEILING`.

**Antes de activar AdSense (importante).** Google dice en su ayuda («Integrate the AdSense ad code with a Content Security Policy») que **solo da soporte a una CSP estricta** con *nonce* y `'strict-dynamic'` (su ejemplo incluye además `'unsafe-eval'`), porque los dominios de su código cambian con el tiempo. Esta web usa una lista de dominios, porque es estática y no puede generar un *nonce* por visita. Puede funcionar, pero Google no lo garantiza. Al activarlo:
1. Despliega primero en una vista previa con `PUBLIC_ADS_ENABLED=true` y abre una página con anuncios y la página de cookies en un navegador limpio (sin consentimiento guardado).
2. Comprueba en la consola que no aparece ningún «Refused to…» ni en el mensaje de consentimiento ni en los anuncios. Si falta un dominio, añádelo a `ADS_SCRIPT` (la prueba `tests/security-headers.test.ts` comprueba que la cabecera y la `<meta>` coinciden).
3. Si Google pide `'unsafe-eval'` o los anuncios fallan de forma intermitente, la salida es una CSP por huellas con `'strict-dynamic'`: cargar AdSense y los scripts de Astro desde un pequeño cargador en línea con huella. Es un cambio de código que hay que probar aparte. No añadas `https:` ni `*` a `script-src` como atajo.

**La barra de comentarios de Vercel** en las vistas previas (`vercel.live`) queda bloqueada por la CSP. Es a propósito; si se quiere usar, añadir `https://vercel.live` solo en las vistas previas.

### HSTS preload

La cabecera ya lleva `preload`. Para entrar en la lista de los navegadores, **cuando el dominio definitivo esté en marcha** y todos sus subdominios funcionen con HTTPS (también correo web u otros servicios), envíalo en <https://hstspreload.org>. Es difícil de deshacer: no lo hagas si algún subdominio tiene que servir HTTP.

La lista de precarga solo admite el **dominio raíz** (por ejemplo, `umotion.es`), no un subdominio (`academy.umotion.es`). Si la academia vive en un subdominio, el `preload` de esta cabecera no tiene efecto, y para precargar habría que poner HSTS con `includeSubDomains; preload` en el dominio raíz, lo que obliga a HTTPS a **todos** los subdominios de umotion. Decídelo con quien gestione el dominio principal.

## 3. Cortafuegos (Vercel Firewall)

**En el repositorio** (`vercel.json` → `routes` con `mitigate: deny`, bloqueo en el borde antes de llegar a la web):
- rutas típicas de WordPress y paneles: `/wp-admin`, `/wp-login.php`, `/xmlrpc.php`, `/wp-content`, `/phpmyadmin`, `/cgi-bin`…;
- archivos `.php`, `.asp`, `.env`, `.sql`, `.bak`, `.git`… y cualquier ruta que empiece por punto (salvo `/.well-known/`);
- métodos `PUT`, `PATCH`, `TRACE` y `CONNECT` en `/api/`.

**En el panel** (*Vercel → proyecto → Firewall*):
1. **Bot Protection** y **AI Bots** (reglas gestionadas): activar en modo *Log* una semana y después en *Challenge* o *Deny*.
2. **Límites de peticiones** (*Rate limit*, por IP, respuesta 429). Las funciones ya limitan por IP, pero solo dentro de cada instancia; el límite del borde es el que vale de verdad:

| Ruta | Límite propuesto |
|---|---|
| `/api/tutor` y `/api/prompt-coach` | 10 por minuto |
| `/api/push` | 30 por minuto |
| `/api/account` | 5 por minuto |

   El número de reglas depende del plan de Vercel; si solo cabe una, que sea para `/api/tutor` y `/api/prompt-coach`.
3. **Attack Challenge Mode**: activarlo solo si hay un ataque en curso.
4. **Límite de gasto** en la consola de Anthropic (*Billing → Spend limits*) y alertas de uso: es el freno final si alguien abusa del tutor.

## 4. Funciones en la UE

`vercel.json` fija `"regions": ["fra1"]` (Fráncfort): el tutor, la cuenta y los avisos se procesan en la UE. La llamada a Anthropic sigue yendo a EE. UU. (lo cubre la política de privacidad). Crea el proyecto de Supabase también en una región de la UE.

### Privacidad de estas medidas

Las medidas de seguridad también tratan datos personales. Tienen que estar en la política de privacidad (`/es/privacidad/`, apartado 3.1) y en el registro de actividades (`docs/LEGAL.md`):
- **Cortafuegos y límites de peticiones**: el cortafuegos de Vercel ve y registra la **dirección IP**, la ruta, el navegador y la acción tomada (permitida, reto o bloqueo). Base legal: interés legítimo en la seguridad (RGPD art. 6.1.f y considerando 49). El plazo de los registros depende del plan de Vercel; confírmalo y escríbelo en la política.
- **Retos contra robots** (*Bot Protection*, *Attack Challenge Mode*): el navegador resuelve una prueba en JavaScript y puede quedar guardada una cookie técnica de seguridad para no repetirla. Es necesaria para la seguridad y no requiere consentimiento, pero si se activan hay que citarla en `/es/cookies/`.
- **Cloudflare Turnstile**: solo con su clave; ya está en privacidad y cookies.
- **Región de las funciones**: `fra1` procesa las funciones en la UE. Los archivos estáticos y los registros del borde se sirven desde la red mundial de Vercel, y Vercel es una empresa de EE. UU., así que la transferencia sigue cubierta por su contrato (Marco de Privacidad de Datos y cláusulas contractuales tipo).
- **`security.txt`**: si el titular es una persona física, su correo de contacto es un dato personal publicado. Mejor un buzón específico (por ejemplo, de seguridad o de contacto) que el correo personal.
- **Repositorio público**: todo lo que se sube es visible para cualquiera, también `docs/` y el autor en `src/config/site.ts`. No subas nunca exportaciones de Supabase, registros, capturas con correos ni datos de alumnos.

## 5. Dependencias y análisis de código (puntos 5, 6 y 7)

- **CI** (`.github/workflows/ci.yml`): pruebas, control editorial, `check:deps` (origen y licencias), compilación y `npm audit` (informativo).
- **CodeQL** (`.github/workflows/codeql.yml`): JavaScript/TypeScript y los propios workflows, en cada cambio y cada lunes. Resultados en *GitHub → Security → Code scanning*. Si prefieres la «configuración predeterminada» de GitHub, actívala en el panel y borra este archivo (no pueden convivir).
- **Dependabot** (`.github/dependabot.yml`): propuestas semanales de versiones menores y parches (agrupadas) y mensuales de las acciones de GitHub. Las versiones mayores se hacen a mano.
- **Secretos**: el repositorio es público y tiene activados el escaneo de secretos y la protección al subir (*push protection*). Las claves solo viven en las variables de Vercel.
- **Licencias permitidas** (`scripts/check-deps.mjs`): MIT, ISC, BSD, Apache-2.0, MPL-2.0, OFL-1.1 (fuentes) y similares. Excepciones revisadas: libvips (LGPL-3.0, la usa `sharp` solo al compilar y no se distribuye) y `zod-to-ts` (MIT en su archivo LICENSE).

### Estado de `npm audit` (23/10/2026)

- **Arreglado:** `js-yaml` 4.1.0 → 4.3.2 (contaminación de prototipos y bloqueos por alias; solo se usa en scripts de comprobación).
- **Queda abierto, sin arreglo dentro de Astro 5:** `astro` ≤ 7.3.1 (crítico según npm), `esbuild`, `sharp` y `zod`. Solo se cierran pasando a **Astro 7**, una versión mayor que puede romper cosas. El riesgo real hoy es **bajo**, porque:
  - la web se compila a HTML estático: no hay servidor de Astro, islas de servidor ni optimización de imágenes en producción, que es donde están la mayoría de los fallos;
  - los fallos de XSS de Astro necesitan que datos de un atacante entren en la plantilla al compilar (`define:vars`, nombres de atributos, ranuras); aquí todo el contenido sale del repositorio y no se usa `define:vars`;
  - `esbuild` solo afecta al servidor de desarrollo en Windows.
- **Pendiente (código):** migrar a Astro 7 en una rama aparte, con todas las comprobaciones de `CLAUDE.md`, antes de publicar con dominio propio.

## 6. Copias de seguridad fuera de Vercel (punto 8)

Vercel no guarda nada que no esté en otro sitio, salvo las variables de entorno. Qué guardar:

| Qué | Dónde está | Copia | Frecuencia |
|---|---|---|---|
| Código, contenido y documentos | GitHub | Clonar en tu ordenador (`git clone --mirror`) y guardar en un disco cifrado o una nube distinta | Cada mes y antes de cambios grandes |
| Base de datos de cuentas (progreso y suscripciones push) | Supabase | Copia diaria del plan (comprueba cuántos días guarda) **y** exportación propia: `supabase db dump --data-only` (o *Database → Backups → Download*) a un almacenamiento cifrado fuera de Supabase | Cada semana mientras haya usuarios |
| Variables de entorno y claves | Vercel | Exportar con `vercel env pull` y guardarlas **solo** en un gestor de contraseñas (Bitwarden, 1Password…), nunca en el repositorio ni en un correo | Cada vez que cambien |
| Claves VAPID | Vercel | Igual que las variables. Si se pierden, todos los avisos push dejan de funcionar | Una vez |
| Configuración del dominio (DNS) | Registrador | Captura o exportación de la zona DNS | Cada vez que cambie |
| Cuentas de AdSense y Google | Google | No necesitan copia; guarda los códigos de recuperación de la cuenta | Una vez |

**Prueba la restauración** una vez al año: crear un proyecto de Supabase vacío, cargar la copia y comprobar que una cuenta de prueba recupera su progreso. La exportación de Supabase contiene datos personales (correos): guárdala cifrada y bórrala según los plazos de la política de privacidad.

## 7. Paneles, verificación en dos pasos y claves (puntos 9 y 10)

No hay panel de administración propio. Cada proveedor es un panel y hay que protegerlo igual que el `/wp-admin` de WordPress.

**En todas las cuentas:**
- verificación en dos pasos **obligatoria**, con llave de seguridad (FIDO2 o passkey) o aplicación de códigos; **nunca SMS**;
- códigos de recuperación guardados en el gestor de contraseñas;
- contraseña única y larga, del gestor;
- un correo de la cuenta protegido igual (si cae el correo, caen todas);
- revisar cada tres meses quién tiene acceso y quitar a quien ya no lo necesite.

| Panel | Qué hacer |
|---|---|
| **GitHub** | 2FA con llave o passkey. Protección de la rama principal (sin *force push*, cambios por pull request con CI en verde). Activar *Dependabot alerts* y *security updates* (*Settings → Code security*). Dejar activados el escaneo de secretos y la *push protection*. La rama por defecto hoy es `claude/quirky-pasteur-jrmay5`: al publicar, pasar a `main`. |
| **Vercel** | 2FA. Si hay equipo, roles mínimos (solo el titular como *Owner*). *Deployment Protection* en las vistas previas. Marcar las claves como *Sensitive*. Alertas de gasto y de uso de funciones. Reglas del Firewall del apartado 3. |
| **Supabase** | 2FA en la organización. La clave `service_role` solo en Vercel (nunca en el navegador ni en el repositorio). Seguridad de filas (RLS) activada en todas las tablas. *Rate Limits* y CAPTCHA en *Authentication*. SMTP propio con SPF, DKIM y DMARC si se envían muchos correos. |
| **Anthropic** (consola) | 2FA. Una clave solo para esta web, con nombre, en un *workspace* propio con límite de gasto. |
| **Google** (AdSense) | 2FA con llave. Solo el titular como administrador. |
| **Registrador del dominio** | 2FA, bloqueo de transferencia (*registrar lock*), renovación automática, DNSSEC si lo ofrece, avisos por correo de cualquier cambio. Registros CAA que permitan solo la autoridad que usa Vercel (Let's Encrypt). |
| **Cloudflare** (si se usa Turnstile) | 2FA; la clave secreta solo en Vercel. |

**Rotación de claves:** cada 12 meses, y en el momento si alguien que las conocía deja el proyecto o hay sospecha de fuga. Orden: crear la nueva, ponerla en Vercel, volver a desplegar, comprobar y borrar la antigua.

| Variable | Secreta | Cómo rotar |
|---|---|---|
| `ANTHROPIC_API_KEY` | Sí | Consola de Anthropic → nueva clave → Vercel → borrar la antigua |
| `SUPABASE_SERVICE_ROLE_KEY` | Sí | Supabase → *Settings → API Keys*: crear una clave secreta nueva y revocar la antigua. Si se rota el secreto JWT antiguo, cambia también la `anon` (`PUBLIC_SUPABASE_ANON_KEY`) |
| `CRON_SECRET` | Sí | Cadena aleatoria nueva (`openssl rand -hex 32`) |
| `VAPID_PRIVATE_KEY` | Sí | No rotar salvo fuga: obliga a que todos vuelvan a activar los avisos |
| `TURNSTILE_SECRET_KEY` | Sí | Panel de Cloudflare → Turnstile → *Rotate secret* |
| `PUBLIC_*` | No | Son públicas por diseño |
| `EMPRESAS_SECRET` | Sí | Cadena aleatoria nueva (`openssl rand -hex 32`). Al cambiarla hay que volver a dar de alta todas las empresas (`npm run empresas:alta`) y cierra todas las sesiones |
| `EMPRESAS_ACCESS` | Sí | Lista JSON de empresas (nombre y hash de su contraseña). Para dar de baja una empresa, quitar su entrada |
| `SECURITY_CONTACT` | No | Contacto de `security.txt` (`mailto:…` o `https://…`) |

## 8. `security.txt` y avisos de fallos

`public/.well-known/security.txt` (RFC 9116) dice a quien encuentre un fallo cómo avisar. El contacto **no está puesto** (no se inventa): se rellena al compilar con la variable `SECURITY_CONTACT` de Vercel (por ejemplo, `mailto:` y el mismo correo de `OWNER.email`). Mientras falte, la compilación avisa, **pero el archivo se publica con el texto `PENDIENTE-SECURITY-CONTACT`**, que no es un contacto válido según el RFC 9116. Define `SECURITY_CONTACT` antes del primer despliegue en producción. [Pendiente (código): que la compilación de producción (`VERCEL_ENV=production`) falle o no publique el archivo si falta el contacto.] La fecha `Expires` hay que renovarla cada año (la compilación avisa 60 días antes y falla si caduca).

**Si hay un incidente:** rotar las claves afectadas (apartado 7), revisar los registros de Vercel y Supabase, y si afecta a datos personales, valorar la notificación a la AEPD en 72 horas (procedimiento en `docs/LEGAL.md`).

## 9. Comprobaciones

```bash
npm test                 # incluye tests/security-headers.test.ts y tests/check-deps.test.ts
npm run check:deps       # origen y licencias de las dependencias
npm run audit:deps       # vulnerabilidades conocidas (hoy falla por Astro 5: ver apartado 5)
npm run build            # inserta la CSP en cada página y revisa security.txt
```

Después de desplegar, comprueba las cabeceras reales con `curl -sI https://TU-DOMINIO/es/` o con <https://securityheaders.com> y <https://observatory.mozilla.org>.

Para probar la CSP en local con la cabecera de `vercel.json` (que `astro preview` no aplica), inyéctala con Playwright (`context.route` añadiendo las cabeceras de `vercel.json` a cada respuesta) y revisa la consola: no debe aparecer ningún «Refused to…».

## 10. Ideas para más adelante

- **Trusted Types** (`require-trusted-types-for 'script'`): frenaría los XSS por `innerHTML`, pero exige revisar todos sus usos primero.
- **Informes de la CSP** (`report-to`): recibir avisos de bloqueos reales; necesita un servicio que los recoja.
- **Fijar las acciones de GitHub por su commit** (SHA) en lugar de por versión; Dependabot las mantiene igual.
- **Integridad (SRI)** de scripts externos: no es posible con AdSense (Google cambia el archivo), por eso se limita por dominio.

## 11. Área «Formación para empresas»

- **Cómo funciona:** la contraseña de cada empresa es «umotion» + su nombre. Se comprueba en el servidor (`api/empresas.js`) contra la lista `EMPRESAS_ACCESS`, que guarda solo un hash con la clave `EMPRESAS_SECRET`. Al acertar, una cookie firmada (`ua_emp`, HttpOnly, solo para `/api/empresas`, 12 horas) mantiene la sesión. La página estática no contiene nada privado: el contenido de cada empresa lo enviará la API solo con sesión.
- **Límite:** 5 intentos cada 15 minutos por IP (por instancia). Añade también una regla de límite en el cortafuegos de Vercel para `/api/empresas` (por ejemplo, 10 por hora).
- **Riesgo:** la contraseña sigue un patrón que cualquiera puede adivinar si sabe que la empresa es cliente. Mientras el área no tenga contenido confidencial es aceptable; antes de subir materiales de una empresa, añadir a la contraseña un código aleatorio o dar cuentas por persona.
- **Dar de alta una empresa:** `EMPRESAS_SECRET=<la de Vercel> npm run empresas:alta -- "Café Luna"` → añadir la línea a `EMPRESAS_ACCESS` en Vercel y volver a desplegar.

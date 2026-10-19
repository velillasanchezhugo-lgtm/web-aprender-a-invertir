# Cuentas opcionales y recordatorio diario

La academia se puede usar **sin registrarse**: el progreso se guarda en el navegador. Sobre eso hay dos funciones opcionales:

1. **Cuenta** (Supabase): guarda el progreso en la nube y lo sincroniza entre dispositivos. Acceso con enlace mágico al correo, sin contraseñas.
2. **Recordatorio diario a las 16:00 (hora de España)**:
   - **Notificaciones push** (con o sin cuenta). Se envían solo si ese día aún no se ha estudiado, con un mensaje según la racha.
   - **Recordatorio de calendario** (`.ics` diario a las 16:00, zona Europe/Madrid). Funciona ya, sin servidor y en cualquier móvil.

Sin configurar nada, la web funciona igual: la página «Mi cuenta» explica que las cuentas aún no están activas y ofrece el recordatorio de calendario.

## Cómo funciona

| Pieza | Archivo |
|---|---|
| Mezcla del progreso local y de la nube (nunca se pierde nada) | `src/lib/sync.ts` (pruebas en `tests/sync.test.ts`) |
| Cliente de la cuenta y sincronización automática | `src/scripts/account.ts` |
| Notificaciones en el navegador | `src/scripts/push.ts`, `public/sw.js` |
| Arranque ligero (solo carga lo anterior si la persona lo usa) | `src/scripts/boot.ts` |
| Página «Mi cuenta» y tarjeta del recordatorio | `src/pages/es/cuenta.astro`, `src/components/ReminderCard.astro` |
| Alta, actividad y baja de avisos | `api/push.js` |
| Envío diario | `api/cron-reminder.js` y `api/_reminder-core.js` (pruebas en `tests/sync.test.ts`) |
| Borrado de la cuenta | `api/account.js` |
| Tablas y permisos | `supabase/schema.sql` |

**Sincronización**: al entrar, se mezclan el dispositivo y la nube (lo completado se suma, los repasos y el modelo se quedan con lo más avanzado, el plan más reciente gana) y el resultado se sube. Después, cada cambio se sube a los 2-3 segundos. El tema visual y el consentimiento no se sincronizan.

**Hora de envío**: Vercel Cron funciona en UTC, así que hay dos ejecuciones diarias (14:00 y 15:00 UTC). Solo envía la que cae a las 16:00 en España: en verano, la de las 14 UTC; en invierno, la de las 15 UTC. Con el plan **Hobby** de Vercel la ejecución puede llegar en cualquier minuto de esa hora (de 16:00 a 16:59). Para que llegue en punto: plan Pro de Vercel o la programación con `pg_cron` de Supabase que viene comentada en `supabase/schema.sql`.

## Activarlo (unos 20 minutos)

1. **Supabase**: crea un proyecto en supabase.com (región UE, por ejemplo Fráncfort). En *SQL Editor*, ejecuta `supabase/schema.sql`.
2. En *Authentication → URL Configuration*, pon como *Site URL* el dominio de la web y añade `https://TU-DOMINIO/es/cuenta/` a las *Redirect URLs*. En *Authentication → Emails* puedes traducir el correo del enlace mágico al español. Para enviar muchos correos, configura un SMTP propio (el de Supabase tiene un límite bajo por hora).
3. **Claves de notificación (VAPID)**: en tu ordenador, `npx web-push generate-vapid-keys`.
4. **Variables en Vercel** (*Settings → Environment Variables*):

| Variable | Valor | Pública |
|---|---|---|
| `PUBLIC_SUPABASE_URL` | URL del proyecto de Supabase | Sí |
| `PUBLIC_SUPABASE_ANON_KEY` | Clave `anon` (pública por diseño; los permisos los protege la seguridad de filas) | Sí |
| `SUPABASE_SERVICE_ROLE_KEY` | Clave `service_role` (secreta, solo servidor) | **No** |
| `PUBLIC_VAPID_PUBLIC_KEY` | Clave pública VAPID | Sí |
| `VAPID_PRIVATE_KEY` | Clave privada VAPID | **No** |
| `VAPID_SUBJECT` | `mailto:` con un correo de contacto | No |
| `CRON_SECRET` | Una cadena larga aleatoria (Vercel la envía al cron) | **No** |

5. Vuelve a desplegar. Comprueba el envío manualmente: `curl -H "Authorization: Bearer $CRON_SECRET" "https://TU-DOMINIO/api/cron-reminder?force=1"`.

## Límites conocidos

- **iPhone**: las notificaciones web solo funcionan si la web se añade a la pantalla de inicio (iOS 16.4 o posterior). La página lo explica y ofrece el calendario como alternativa.
- El límite de peticiones de `api/push.js` es por instancia (orientativo). En producción, añade un límite en el borde (Vercel Firewall).
- El correo del enlace mágico debe abrirse en el mismo navegador para entrar (flujo PKCE).

## Antes de abrirlo al público

- Política de privacidad: ya describe la cuenta y los avisos; falta completar responsable, encargado del tratamiento (Supabase, Vercel) y transferencias internacionales.
- Los avisos son opt-in (permiso explícito del navegador) y se pueden desactivar en «Mi cuenta» o en el navegador.
- La cuenta se puede borrar desde «Mi cuenta» (borra cuenta, progreso en la nube y avisos).

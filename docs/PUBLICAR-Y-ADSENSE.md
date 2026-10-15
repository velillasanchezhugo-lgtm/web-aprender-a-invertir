# Publicar la web y preparar la solicitud de AdSense

> Consultado el 15/10/2026. Las políticas de Google y la normativa cambian: verifica cada punto en la fuente antes de actuar. Nada aquí garantiza la aprobación de Google.

## 1. Antes de publicar

1. Completa los datos del titular en `src/config/site.ts` (`OWNER`). La LSSI (art. 10) exige identificar al titular. Mientras falten, las páginas legales muestran «Pendiente» y no se indexan.
2. Pide una revisión jurídica del aviso legal, la privacidad, las cookies y las condiciones (ver `PENDIENTES.md`).
3. Elige un dominio propio y comprueba que esté disponible y que la marca no esté registrada por terceros (OEPM / EUIPO). **No se ha comprobado.**
4. Revisa y cambia el estado editorial de las páginas que una persona haya revisado (`status: revisado` y `reviewer`).

## 2. Publicación (sitio estático)

Cualquier alojamiento de sitios estáticos sirve. El sitio se compila en `dist/`.

```bash
SITE_URL=https://tu-dominio.es npm run verify
# sube dist/ a tu alojamiento
```

- Configura el alojamiento para servir `dist/404.html` como página de error.
- Redirige `http://` a `https://` y la versión con `www` a la canónica (o al revés), siempre a la misma que pongas en `SITE_URL`.
- Redirige `/` a `/es/` con un 301 en el servidor si es posible (ahora lo hace una página con *meta refresh*).
- Añade el dominio en Google Search Console y envía `https://tu-dominio.es/sitemap.xml`.
- Completa en la política de privacidad el proveedor de alojamiento, la ubicación de los servidores y la conservación de registros.

## 3. Google AdSense: requisitos (políticas de Google)

Según la ayuda de AdSense:

- Tener **18 años o más** ([requisito de edad](https://support.google.com/adsense/answer/14230)).
- Tener **contenido propio**, original y de calidad, que cumpla las políticas del programa ([requisitos de admisión](https://support.google.com/adsense/answer/9724), [preparar las páginas](https://support.google.com/adsense/answer/7299563)).
- Poder editar el HTML del sitio para insertar el código y publicar `ads.txt`.
- Para servir anuncios a usuarios del EEE, Reino Unido y Suiza, usar una **CMP certificada por Google** integrada con el TCF de IAB ([requisito de CMP](https://support.google.com/adsense/answer/13554020)). Sin ella no se pueden servir anuncios personalizados. La mensajería de «Privacidad y mensajes» de AdSense es una CMP de Google.

Las políticas de Google también prohíben incentivar los clics, generar tráfico artificial y colocar anuncios que puedan confundirse con contenido o navegación. La configuración del sitio ya lo respeta (ver `/es/financiacion/`).

## 4. Obligaciones legales españolas y europeas (distintas de las políticas de Google)

- **LSSI, art. 22.2**: hace falta consentimiento informado para almacenar o leer información no necesaria en el dispositivo (cookies publicitarias, identificadores).
- **Guía de cookies de la AEPD (actualizada en julio de 2023)**: rechazar debe ser igual de fácil que aceptar, sin muros de cookies salvo excepciones, con información por capas y la posibilidad de retirar el consentimiento.
- **RGPD**: base jurídica, información a los usuarios, encargos de tratamiento y transferencias internacionales.
- Los **anuncios no personalizados** también pueden usar cookies o identificadores, por ejemplo para limitar la frecuencia o medir. No eliminan por sí solos el deber de informar ni, en su caso, de pedir consentimiento.
- Que la CMP esté certificada por Google no significa que cumpla la ley española: Google no audita el cumplimiento legal.

## 5. Activar la publicidad paso a paso

1. Crea la cuenta de AdSense con los datos reales del titular y añade el sitio.
2. En AdSense, configura **Privacidad y mensajes → Mensaje del RGPD** con las opciones «Aceptar», «Rechazar» (en el primer nivel) y «Gestionar opciones». Revisa los textos con tu asesor.
3. Crea tres bloques de anuncios adaptables (artículo, listado y lateral) y anota sus identificadores.
4. Compila con:

   ```bash
   SITE_URL=https://tu-dominio.es PUBLIC_ADS_ENABLED=true PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX \
   PUBLIC_AD_SLOT_ARTICLE=… PUBLIC_AD_SLOT_LISTING=… npm run build
   ```

   Esto inserta el código de AdSense **solo** en las páginas que lo permiten, genera `ads.txt` y añade el enlace «Configurar privacidad» al pie, que reabre el mensaje de consentimiento.
5. Actualiza la política de cookies y la de privacidad con los proveedores y las finalidades reales que muestre tu CMP.
6. En AdSense, revisa en **Controles de bloqueo** las categorías sensibles y bloquea los anuncios de CFD, opciones binarias, criptoactivos de alto riesgo y «ganancias rápidas». En España la publicidad de CFD a minoristas está prohibida desde 2023 y sería incoherente con el contenido.
7. Solicita la revisión del sitio en AdSense.

## 6. Lista de comprobación para la solicitud

- [ ] Dominio propio con HTTPS.
- [ ] Datos del titular completos y textos legales revisados.
- [ ] Contacto operativo.
- [ ] Contenido revisado por una persona en las páginas principales (ruta inicial al menos).
- [ ] Sin páginas vacías indexadas (la versión inglesa no se indexa; el control de compilación lo vigila).
- [ ] Sitemap enviado a Search Console y sin errores graves de rastreo.
- [ ] CMP configurada y probada: aceptar, rechazar, configurar y retirar el consentimiento.
- [ ] `ads.txt` accesible en `https://tu-dominio.es/ads.txt`.
- [ ] Publicidad etiquetada, lejos de los controles y ausente del test, los ejercicios, las herramientas en uso, la búsqueda y el progreso.
- [ ] Ninguna respuesta del test ni dato financiero llega a scripts de terceros (verificado: no salen del navegador).

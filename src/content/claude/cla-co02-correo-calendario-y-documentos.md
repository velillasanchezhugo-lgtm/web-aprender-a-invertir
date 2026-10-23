---
title: Correo, calendario y documentos
description: "Usos prácticos de los conectores más comunes: preparar tu semana, buscar en tus documentos y resumir hilos de correo, revisando antes de enviar o cambiar."
level: basico
track: cla-conectar
order: 502
skills: [cla-conectores, cla-verificar]
terms: [conector]
hook: "Tienes 40 correos sin leer, tres reuniones mañana y no encuentras el documento del presupuesto. ¿Puede Claude ayudarte sin que tú copies nada?"
takeaway: Con el correo, el calendario y los documentos conectados, Claude busca, resume y prepara borradores. Tú revisas y apruebas todo lo que envíe, cambie o comparta.
scenario:
  kind: producto
  label: Caso práctico
  title: El lunes de Andrés
  body: "Andrés coordina un club de baloncesto en Valladolid. Conecta su correo y su calendario y pide a Claude el resumen de la semana: partidos, reuniones y correos de padres sin contestar. De los tres borradores de respuesta, corrige uno con una hora equivocada antes de aprobar el envío."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-co02-q1
    q: "Mercedes pide a Claude que conteste a un cliente que se queja de un retraso. Claude prepara la respuesta con el correo conectado. ¿Qué hace Mercedes antes de aprobar el envío?"
    options: ["Nada: si Claude la ha escrito, estará bien", "Leerla entera y comprobar fechas, importes y compromisos", "Pedirle que la envíe ya y revisarla después"]
    answer: 1
    explain: "Un correo enviado no se puede retirar y lleva tu nombre. Claude puede confundir una fecha o prometer algo que no quieres. Tienta revisarla después, pero entonces el error ya está en la bandeja del cliente."
  - type: truefalse
    id: cla-co02-q2
    q: "Con el conector de Gmail, Claude puede leer el contenido de los archivos adjuntos de un correo."
    answer: false
    explain: "Según el centro de ayuda, ve los datos del adjunto (nombre, tipo), pero no su contenido. Si el adjunto está en Google Drive, puede leerlo con el conector de Drive."
  - type: choice
    id: cla-co02-q3
    q: "Jaime quiere preparar la reunión del jueves con un proveedor. ¿Qué petición aprovecha mejor los conectores?"
    options: ["«Prepárame la reunión del jueves»", "«Busca en mi correo y en mis documentos lo último sobre el proveedor Hierros Duero, resume lo pendiente y dime de qué correo o archivo sale cada punto»", "«Escribe un correo al proveedor para cancelar»"]
    answer: 1
    explain: "Dice dónde buscar, qué quiere y pide las fuentes para poder comprobarlo. La primera tienta por corta, pero Claude no sabe qué reunión ni qué buscar."
tips:
  - "Pide siempre «dime de qué correo o documento sale cada dato»: así compruebas en un clic."
  - "Para cambios en el calendario, pídele primero la propuesta en lista y aprueba después."
action:
  title: Prepara tu semana con Claude
  steps:
    - "Conecta tu calendario (y tu correo, si quieres) desde la sección de conectores."
    - "Copia la petición de ejemplo y adáptala a tu semana."
    - "Comprueba dos datos de la respuesta en tu calendario o en tu correo."
    - "Guarda la petición que mejor te funcione en «Mi kit de Claude»."
  check: He preparado mi semana con un conector y he comprobado lo que me dio
practice:
  task: "Estás en la junta del AMPA y tienes un hilo de 30 correos sobre la fiesta de fin de curso. Escribe la petición para que Claude lo resuma y prepare una respuesta, sin enviar nada sin tu permiso."
  require: [formato, verificar, limites]
  extra:
    - label: "Decir dónde buscar"
      any: ["correo", "bandeja", "calendario", "drive", "carpeta", "hilo"]
      hint: "Di dónde tiene que buscar: «en mi correo, el hilo sobre…»."
    - label: "Pedir un borrador, no un envío"
      any: ["borrador", "no envies", "antes de enviar", "aprobacion"]
      hint: "Pide un borrador y que no envíe nada hasta que lo revises."
  sample: "Busca en mi correo el hilo sobre la fiesta de fin de curso del colegio de las últimas dos semanas. Resume en cinco puntos qué se ha decidido y qué preguntas siguen sin respuesta, y cita el correo de donde sale cada punto. Después prepara un borrador de respuesta para las familias, con tono cordial. No envíes nada sin mi aprobación: lo revisaré antes."
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [claude-ayuda]
---

## La idea

Los conectores más usados son los de **correo, calendario y documentos**. Claude tiene conectores para Gmail, Google Calendar y Google Drive en todos los planes, y en el directorio hay muchos más (Microsoft 365, Notion, Slack, gestores de tareas…). Comprueba allí cuáles hay para lo que usas.

Lo que mejor funciona:

- **Preparar la semana:** cruzar reuniones y correos pendientes en un solo resumen.
- **Buscar en tus documentos:** «¿dónde está el presupuesto de la reforma?» sin recordar el nombre del archivo.
- **Resumir hilos largos:** qué se ha decidido y qué falta por contestar.
- **Preparar borradores:** respuestas, convocatorias, cambios de cita.

Claude también puede **hacer cosas**: con los conectores de Google puede enviar o responder correos, crear o mover citas y compartir o mover archivos. Por defecto, **pide tu aprobación** antes de enviar, compartir, mover o tirar a la papelera.

Aprobar no es un trámite. Claude puede leer mal una fecha, mezclar dos hilos o sonar más seco de lo que quieres. Lo que envía o cambia **lleva tu nombre**.

Sobre tus datos: según Anthropic, la información de estos conectores de Google no se usa para entrenar sus modelos. Lo que copies tú en el chat sigue tus ajustes de privacidad.

## En la práctica

1. Activa en el chat solo los conectores que vas a usar.
2. Di **dónde buscar** y **qué quieres** al final.
3. Pide que cite el correo o el archivo de cada dato.
4. Para enviar o cambiar algo, pide primero un borrador y revísalo.

> Prueba: «Mira mi calendario de esta semana y los correos sin contestar de los últimos 7 días. Hazme una lista por día con reuniones y respuestas pendientes, y dime de qué correo sale cada punto. No envíes ni cambies nada.»

Si falta algo, dile dónde mirar: «revisa también la carpeta Facturas».

## Error frecuente

Aprobar los envíos sin leerlos porque «las tres anteriores estaban bien». Cada borrador se revisa, sobre todo si lleva fechas, importes o promesas.

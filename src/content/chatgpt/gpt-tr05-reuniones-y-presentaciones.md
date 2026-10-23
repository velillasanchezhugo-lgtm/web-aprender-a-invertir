---
title: Reuniones y presentaciones
description: "Cómo preparar con ChatGPT una reunión o una presentación, ensayar las preguntas difíciles y convertir tus notas en un acta con tareas, responsables y fechas."
level: basico
track: gpt-trabajo
order: 405
skills: [gpt-pensar, gpt-escribir, gpt-privacidad]
terms: [orden-del-dia, acta-de-reunion, datos-personales]
hook: "Sales de una reunión de una hora con tres folios de notas. Una semana después nadie recuerda quién iba a hacer qué."
takeaway: "Antes de la reunión, ChatGPT te ayuda a ordenar los temas y a ensayar las preguntas difíciles. Después, convierte tus notas en un acta con tareas, responsable y fecha, que revisas antes de enviarla."
scenario:
  kind: operacion
  label: Caso práctico
  title: La reunión de Dolores
  body: "Dolores coordina la enfermería de un centro de salud y tiene 30 minutos para explicar al equipo el nuevo sistema de citas. Pide a ChatGPT un orden del día con tiempos y las cinco dudas que más le van a plantear. Después de la reunión pega sus notas, sin nombres ni datos de pacientes, y pide el acta. En la lista de tareas aparece «Marcos revisará los turnos el lunes»: nadie dijo «lunes». Lo cambia por «fecha por decidir» antes de enviarla."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-tr05-q1
    q: "Iker es encargado de una tienda de muebles y tiene que presentar a su jefa los resultados de la campaña de rebajas en cinco minutos. ¿Qué petición le ayuda más?"
    options: ["«Hazme una presentación sobre las rebajas.»", "«Tengo 5 minutos para contar a mi jefa cómo fueron las rebajas: ventas +12 %, devoluciones al alza y falta de sofás en stock. Propón 4 diapositivas con un título y tres frases cada una, y las 3 preguntas que probablemente me hará.»", "«Escribe un discurso largo para impresionar a mi jefa.»"]
    answer: 1
    explain: "La segunda da el tiempo, el público, los datos y el formato, y prepara las preguntas. La primera tienta por sencilla, pero ChatGPT tendría que inventarse los resultados. Un discurso largo no cabe en cinco minutos."
  - type: truefalse
    id: gpt-tr05-q2
    q: "Si usas ChatGPT para grabar o transcribir una reunión solo para ti, no hace falta avisar a los demás."
    answer: false
    explain: "Grabar la voz de otras personas exige avisarles y tener su permiso, y el propio centro de ayuda de OpenAI lo pide. Que sea «solo para ti» no cambia que estás tratando sus datos."
  - type: choice
    id: gpt-tr05-q3
    q: "En el acta que ha hecho ChatGPT pone «Ana enviará el presupuesto el viernes». En tus notas no hay fecha. ¿Qué haces?"
    options: ["La dejo: el viernes parece razonable", "La cambio por «sin fecha» y pregunto a Ana antes de enviar el acta", "Borro esa tarea para no liarla"]
    answer: 1
    explain: "ChatGPT tiende a completar huecos con algo que suena bien. Dejar la fecha tienta porque parece lógica, pero Ana recibirá un plazo que no aceptó. Borrar la tarea pierde un acuerdo real."
tips:
  - "Pide «haz de la persona más escéptica de la reunión y pregúntame lo que me preguntaría». Ensayar en voz alta con el modo de voz también funciona."
  - "Termina siempre la petición del acta con: «No añadas nada que no esté en mis notas; si falta un responsable o una fecha, indícalo como sin asignar»."
action:
  title: Convierte unas notas en tareas
  steps:
    - "Busca las notas de tu última reunión, clase o reunión de la comunidad. Cambia nombres de personas ajenas por iniciales o cargos."
    - "Pégalas en ChatGPT con la petición del acta de esta sesión."
    - "Comprueba que cada tarea tiene responsable y fecha reales, y guarda la petición en «Mi kit de ChatGPT»."
  check: He convertido unas notas en un acta con tareas y la he revisado antes de enviarla
practice:
  task: "Acabas de salir de la reunión semanal de tu tienda de deportes con tus notas desordenadas. Escribe la petición para que ChatGPT saque el acta con las tareas, sin inventar nada."
  require: [formato, limites]
  extra:
    - label: Pedir responsable y fecha de cada tarea
      any: [responsable, quien, quién, fecha, plazo]
      hint: "Pide una tabla con tarea, responsable y fecha límite."
  sample: "Tengo una tienda de deportes y estas son mis notas de la reunión semanal con el equipo de cinco personas [pego las notas]. Hazme un acta breve para enviarla por correo: primero las decisiones en 3-5 puntos y después una tabla con tarea, responsable y fecha límite. No inventes nada que no esté en las notas: si falta un responsable o una fecha, escribe «sin asignar». Al final, dime qué temas quedaron abiertos."
deeper: null
tool: constructor-de-peticiones
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, aepd-guias]
---

## La idea

Una reunión útil tiene tres momentos, y ChatGPT ayuda en los tres:

1. **Antes: preparar.** Le cuentas el objetivo, quién va a estar y cuánto dura, y te propone un **orden del día**: la lista de temas, en orden y con tiempos. Para una presentación, te sugiere la estructura y el texto de cada diapositiva.
2. **Antes también: ensayar.** Le pides las objeciones o preguntas difíciles que es probable que te hagan y practicas cómo responderlas. Es lo que más seguridad da.
3. **Después: el acta.** Pegas tus notas y te devuelve un **acta**, es decir, el resumen escrito de lo que se decidió, con una tabla de tareas: qué, quién y para cuándo.

Dos cuidados:

- **Revisa el acta antes de enviarla.** ChatGPT a veces rellena huecos: una fecha, un responsable, un acuerdo que nadie cerró. Lo que no está en tus notas, fuera.
- **Cuidado con lo que pegas.** Si en la reunión se habló de la salud de alguien, de una sanción o de datos de clientes, quítalo o cámbialo por algo general. Son **datos personales** de otros.

En algunos planes de pago, la aplicación de escritorio de ChatGPT puede **grabar una reunión y resumirla**. Comprueba en el centro de ayuda si está disponible en tu plan y tu sistema, avisa siempre a los asistentes y pide su permiso antes de grabar, y revisa la transcripción: también se equivoca.

## En la práctica

1. **Prepara:** objetivo, asistentes, duración y lo que te preocupa.
2. **Ensaya:** pide las preguntas difíciles y responde tú; luego pide opinión sobre tus respuestas.
3. **Cierra:** notas, acta con tabla y la regla de no inventar.

> Prueba: «El martes tengo 20 minutos con la dirección de mi instituto para proponer un huerto escolar. Prepárame un orden del día con tiempos, un guion de 4 diapositivas y las 5 objeciones más probables (coste, horario, responsable en verano…) con una respuesta breve para cada una.»

> Prueba: «Hazme preguntas como si fueras el cliente de un hotel al que voy a presentar nuestro servicio de lavandería. Una a una, y espera mi respuesta antes de seguir.»

## Error frecuente

Enviar el acta tal como sale, con fechas o responsables que nadie acordó.

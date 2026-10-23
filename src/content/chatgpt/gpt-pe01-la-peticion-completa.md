---
title: Las cinco piezas de una petición
description: "Las cinco piezas de una buena petición a ChatGPT (contexto, tarea, detalles, formato y tono) y una lista rápida para repasarlas antes de enviar."
level: basico
track: gpt-pedir
order: 101
skills: [gpt-peticion]
terms: [prompt, contexto-de-la-peticion]
hook: "Pides a ChatGPT «un mensaje para el vecino de arriba por la mancha del techo» y te da un texto correcto que no dice desde cuándo está ni qué quieres que haga. ¿Qué se quedó fuera?"
takeaway: Cada pieza que falta en tu petición es una vuelta más de corrección. Antes de enviar, repasa contexto, tarea, detalles, formato y tono.
scenario:
  kind: operacion
  label: Caso práctico
  title: La mancha de Ascensión
  body: "A Ascensión le ha salido una mancha de humedad en el techo del baño y cree que viene del piso de arriba. Pide «un mensaje para el vecino por la mancha» y sale un texto largo y genérico. Lo repite contando desde cuándo está, que tiene fotos y que quiere que el vecino avise a su seguro esta semana, en menos de 80 palabras y con tono cordial. Ahora le sirve casi tal cual."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-pe01-q1
    q: "Alberto pide a ChatGPT «hazme una presentación sobre seguridad en el almacén» y sale algo de nivel universitario. Es para cinco compañeros nuevos y tiene 10 minutos. ¿Qué hace?"
    options: ["Pulsa para regenerar la respuesta hasta que salga mejor", "Añade quién la va a ver, cuánto debe durar y qué temas del almacén importan", "Escribe «hazla más sencilla, por favor»"]
    answer: 1
    explain: "Faltaban el público, el tiempo y los temas. Regenerar tienta porque es un clic, pero sin información nueva vuelve a adivinar. «Más sencilla» ayuda algo, pero no dice para quién ni de qué hablar."
  - type: truefalse
    id: gpt-pe01-q2
    q: "Si a tu petición le falta un dato importante, ChatGPT siempre te lo preguntará antes de responder."
    answer: false
    explain: "Lo normal es que no pregunte: rellena el hueco con lo más típico y responde con seguridad. Tienta pensar «ya me dirá si le falta algo», pero casi nunca lo hace. Si quieres que pregunte, pídeselo."
  - type: choice
    id: gpt-pe01-q3
    q: "Tienes exámenes en tres semanas. ¿Con cuál de estas peticiones tendrá ChatGPT menos que adivinar?"
    options: ["«Hazme un horario de estudio»", "«Hazme un buen horario de estudio para aprobar»", "«Estudio 2.º de Bachillerato y trabajo los sábados. Tengo exámenes de Historia y Química en tres semanas. Hazme un horario de lunes a viernes en una tabla, con descansos»"]
    answer: 2
    explain: "La tercera da contexto, detalles (asignaturas, plazo), tarea y formato. «Bueno» y «para aprobar» suenan a detalle, pero no dan nada que ChatGPT pueda usar."
tips:
  - "Relee tu petición antes de enviarla y pregúntate qué tendría que adivinar ChatGPT: eso es lo que falta."
  - "Cuenta tu situación, no tus datos: «vivo en un segundo piso en Ourense» basta; tu DNI o tu dirección no hacen falta."
action:
  title: Rescata una petición floja
  steps:
    - "Busca en tu historial una petición que te dio un resultado flojo."
    - "Reescríbela con las cinco piezas y envíala en un chat nuevo."
    - "Compara las respuestas y guarda la buena en «Mi kit de ChatGPT»."
  check: He rehecho una petición con las cinco piezas y he comparado el resultado
practice:
  task: "Eres tesorero de una peña ciclista y la cuota anual sube el año que viene. Escribe una petición completa para que ChatGPT redacte el aviso a los socios."
  require: [contexto, publico, formato, tono]
  sample: "Soy el tesorero de una peña ciclista de Huesca con 80 socios. La cuota anual pasa de 30 € a 36 € desde enero porque ha subido el seguro de la federación. Redacta un aviso para enviar a los socios por correo: que explique la subida, desde cuándo se aplica y que el resto de servicios sigue igual. Formato: un párrafo corto y una línea final con el plazo de pago. Tono cercano y claro, sin pedir perdón."
deeper: null
tool: constructor-de-peticiones
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-23
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-academy]
---

## La idea

Un **prompt** (en español, petición) es lo que le escribes a ChatGPT. No ve tu casa, tu trabajo ni lo que ya ha pasado: solo tu mensaje. Lo que no le cuentas, lo rellena con lo más habitual. Por eso las peticiones cortas dan respuestas correctas, pero de manual.

En el Camino Cero viste cuatro piezas. Aquí las afinamos en cinco:

1. **Contexto**: la situación de fondo. Quién eres, para quién es y qué ha pasado.
2. **Tarea**: qué quieres, con un verbo claro: escribe, resume, compara, revisa.
3. **Detalles y restricciones**: lo que debe incluir o evitar. Plazos, cifras, lo que ya has intentado.
4. **Formato**: cómo quieres el resultado. Correo, lista, tabla, longitud.
5. **Tono**: cómo debe sonar. Cercano, formal, firme.

Para una duda general basta la pregunta. Pero cuando el resultado depende de tu caso, cada pieza que falta es **una vuelta más de corrección**.

**Lista rápida antes de enviar:**

- ¿Sabría un desconocido qué hacer con esto?
- ¿He dicho para quién es y cómo lo quiero?

## En la práctica

La petición de Ascensión, ya completa:

> Prueba: «Vivo en un segundo piso en Ourense. Desde hace diez días tengo una mancha de humedad en el techo del baño que va creciendo, y creo que viene del piso de arriba. Escribe un WhatsApp para mi vecino de arriba: que mire si tiene una fuga y que avise a su seguro esta semana. Le mandaré fotos aparte. Menos de 80 palabras, tono cordial, porque nos llevamos bien. No le eches la culpa ni inventes datos que no te he dado.»

Lee el resultado antes de usarlo: a veces añade detalles que no le has dado, como una fecha o un arreglo que nadie ha prometido. Si algo no es tuyo, quítalo.

El «Constructor de peticiones» de esta web te pide cada pieza para que no olvides ninguna.

## Error frecuente

Escribir «mejóralo» sin decir qué falla. Di qué no te gusta y qué esperabas.

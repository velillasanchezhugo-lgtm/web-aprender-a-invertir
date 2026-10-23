---
title: Tu primera petición, en cuatro piezas
description: "Las cuatro piezas de una buena petición a ChatGPT (quién eres, qué necesitas, para quién y cómo lo quieres) con un ejemplo pobre y uno bueno."
level: cero
track: gpt-cero
order: 3
skills: [gpt-peticion]
terms: [prompt, contexto-de-la-peticion]
hook: "Le pides a ChatGPT «un mensaje para la profesora» y te da un texto tan educado y tan vacío que nunca lo enviarías. ¿Qué tendrías que haberle contado?"
takeaway: "Cuatro datos cambian la respuesta: quién eres, qué necesitas, para quién es y cómo lo quieres. No hace falta escribir mucho, sino lo que ChatGPT no puede adivinar."
scenario:
  kind: operacion
  label: Caso práctico
  title: La tutoría de Hamza
  body: "Hamza quiere pedir una tutoría a la profesora de su hijo, que estos días vuelve triste del colegio. Su «escríbeme un mensaje para la profesora» da un texto largo y rígido. Cuando cuenta quién es, el motivo, qué tardes puede ir y que lo quiere corto para la aplicación del colegio, el mensaje le sirve casi tal cual."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-c03-q1
    q: "A Hamza le sale un mensaje largo y rígido que no enviaría. ¿Cuál es su mejor siguiente paso?"
    options: ["Generar otra respuesta varias veces hasta que salga una buena", "Contar quién es, el motivo, qué tardes puede ir y cómo lo quiere", "Pedirle que lo haga «más natural»"]
    answer: 1
    explain: "ChatGPT solo puede usar lo que le cuentas. Con el motivo, el destinatario y el formato, el mensaje pasa de genérico a útil. Regenerar tienta porque cada vez sale algo distinto, pero sin información nueva no puede acertar con tu caso."
  - type: choice
    id: gpt-c03-q2
    q: "Hamza va a contarle a ChatGPT estos datos. ¿Cuál sobra?"
    options: ["Que es el padre de Adam, de 3.º B", "Las tardes en que puede ir a la tutoría", "Su DNI y el nombre completo de su hijo"]
    answer: 2
    explain: "Quién es y cuándo puede ir cambian el mensaje; el DNI y el nombre completo no lo mejoran y son datos personales que no hace falta dar. Tienta pensar que cuantos más datos, mejor, pero basta con lo que ChatGPT no puede adivinar."
  - type: truefalse
    id: gpt-c03-q3
    q: "Si no le dices qué tono quieres, ChatGPT elegirá uno por su cuenta."
    answer: true
    explain: "Lo que no le cuentas lo rellena con lo más típico, a menudo un texto formal y largo. Tienta pensar que acertará con tu estilo, pero no lo conoce: una palabra («cercano», «de usted») basta."
tips:
  - "Si no sabes qué más contarle, deja que pregunte él: «¿Qué te falta saber para hacerlo bien?»."
  - "Escribe como hablas: no hace falta un orden fijo ni palabras técnicas, solo que estén las cuatro piezas."
action:
  title: Escribe una petición con las cuatro piezas
  steps:
    - "Piensa en algo real que tengas que escribir esta semana: un mensaje, un correo, una nota."
    - "Escríbele a ChatGPT las cuatro piezas: quién eres, qué necesitas, para quién es y cómo lo quieres."
    - "Si el resultado te sirve, copia la petición en tu nota «Mi kit de ChatGPT»."
  check: He hecho una petición con las cuatro piezas y la he guardado
practice:
  task: "Tu hija quiere aprender violín en la escuela municipal de música y no sabes si quedan plazas. Escribe la petición del correo a la escuela con las cuatro piezas: quién eres, qué necesitas, para quién es y cómo lo quieres."
  require: [contexto, publico, formato]
  extra: []
  sample: "Soy madre de una niña de 9 años que quiere aprender violín. Escribe un correo para la secretaría de la escuela municipal de música de mi barrio preguntando si quedan plazas este curso, qué horarios hay por la tarde y cómo se hace la inscripción. Tono educado y directo, máximo seis líneas. Si te falta algún dato, pregúntamelo antes de escribir."
deeper: null
tool: constructor-de-peticiones
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-academy]
---

## La idea

Lo que le escribes a ChatGPT se llama **petición** (en inglés, *prompt*). ChatGPT **no te conoce**: no sabe tu situación ni para quién es el texto. Si no se lo dices, lo rellena con lo más general. La información de fondo que le das es el **contexto**.

Una petición útil tiene **cuatro piezas**:

1. **Quién eres.** «Soy padre de un alumno de 3.º de primaria», «estudio un ciclo de FP».
2. **Qué necesitas.** La tarea concreta: un mensaje, un resumen, un horario.
3. **Para quién o para qué.** «Para la tutora», «para colgarlo en el tablón», «para entenderlo yo».
4. **Cómo lo quieres.** Tono, extensión y formato: «cordial», «máximo cuatro líneas», «en una tabla».

No hace falta escribir mucho. Hace falta **lo que ChatGPT no puede adivinar**.

**Ejemplo pobre:** «Escríbeme un mensaje para la profesora».

**Ejemplo bueno:** «Soy el padre de Adam, de 3.º B. Escribe un mensaje para su tutora pidiendo una tutoría, porque estos días vuelve triste del colegio y quiero saber cómo lo ve ella. Puedo ir martes o jueves por la tarde. Tono cordial, máximo cuatro líneas».

## En la práctica

Antes de enviar, repasa tu mensaje con las cuatro piezas. Si falta alguna, añádela en una frase.

> Prueba: «Soy camarero y trabajo los fines de semana. Necesito un mensaje para el grupo de familias del equipo de baloncesto de mi hijo: este sábado no puedo llevar a los niños al partido y pido que alguien me cambie el turno de coche. Es para WhatsApp. Tono cercano, máximo cuatro líneas. Si te falta algún dato, pregúntamelo antes de escribir».

Cuando llegue la respuesta, **léela entera** y cambia lo que no sea verdad o no suene a ti. Lo que envíes es tuyo, no de ChatGPT.

## Error frecuente

Escribir tres palabras, recibir algo flojo y pensar que «no sirve». Casi siempre faltaba contexto.

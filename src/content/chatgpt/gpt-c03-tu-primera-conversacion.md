---
title: Tu primera petición útil
description: "Las cuatro piezas de una buena petición a ChatGPT (quién eres, qué necesitas, para quién y cómo lo quieres) con un ejemplo pobre y uno bueno."
level: cero
track: gpt-cero
order: 3
skills: [gpt-peticion]
terms: [prompt, contexto-de-la-peticion]
hook: "Le pides a ChatGPT «un mensaje para la profesora» y te da un texto tan educado y tan vacío que nunca lo enviarías. ¿Qué le faltaba?"
takeaway: "ChatGPT no sabe nada de tu situación. Si le dices quién eres, qué necesitas, para quién es y cómo lo quieres, la primera respuesta ya se parece a lo que buscas."
scenario:
  kind: operacion
  label: Caso práctico
  title: La tutoría de Hamza
  body: "Hamza quiere pedir una tutoría a la profesora de su hijo, que estos días vuelve triste del colegio. Su «escríbeme un mensaje para la profesora» da un texto largo y rígido. Cuando cuenta quién es, el motivo, qué tardes puede ir y que lo quiere corto para la aplicación del colegio, el mensaje le sirve casi tal cual."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-c03-q1
    q: "Hamza ha recibido un mensaje genérico que no enviaría. ¿Qué es lo más útil que puede hacer?"
    options: ["Generar otra respuesta varias veces hasta que salga una buena", "Contar quién es, el motivo, qué tardes puede ir y cómo lo quiere", "Pedirle que lo haga «más natural»"]
    answer: 1
    explain: "ChatGPT solo puede usar lo que le cuentas. Con el motivo, el destinatario y el formato, el mensaje pasa de genérico a útil. Regenerar tienta porque cada vez sale algo distinto, pero sin información nueva no puede acertar con tu caso."
  - type: choice
    id: gpt-c03-q2
    q: "¿Cuál de estas peticiones dará un resultado más útil?"
    options: ["«Ayúdame con las oposiciones»", "«Preparo las oposiciones de auxiliar administrativo y trabajo por las mañanas. Hazme un horario de estudio de lunes a viernes, por las tardes, en una tabla»", "«Oposiciones: horario»"]
    answer: 1
    explain: "La buena dice quién eres, qué necesitas y en qué formato. La primera tienta por directa, pero obliga a ChatGPT a adivinar qué oposición, cuánto tiempo tienes y qué quieres recibir."
  - type: truefalse
    id: gpt-c03-q3
    q: "Para que ChatGPT te entienda hay que usar palabras técnicas o fórmulas especiales."
    answer: false
    explain: "Basta con escribir como se lo explicarías a alguien que no te conoce. Tienta buscar «frases mágicas», pero lo que más mejora la respuesta es el contexto."
tips:
  - "Si no sabes qué contarle, termina con «Antes de escribirlo, pregúntame lo que necesites»."
  - "No añadas datos que no aportan nada: el nombre completo de tu hijo o tu DNI no mejoran el mensaje."
action:
  title: Haz tu primera petición completa
  steps:
    - "Piensa en algo real que tengas que escribir esta semana: un mensaje, un correo, una nota."
    - "Escríbele a ChatGPT las cuatro piezas: quién eres, qué necesitas, para quién es y cómo lo quieres."
    - "Si el resultado te sirve, copia la petición en tu nota «Mi kit de ChatGPT»."
  check: He hecho una petición con las cuatro piezas y la he guardado
practice:
  task: "Quieres cambiar la bañera por un plato de ducha y vas a pedir presupuesto a varios fontaneros por mensaje. Escribe la petición con las cuatro piezas: quién eres, qué necesitas, para quién es y cómo lo quieres."
  require: [contexto, publico, formato]
  extra: []
  sample: "Vivo en un piso de los años 80 y quiero cambiar la bañera por un plato de ducha. Escribe un mensaje para enviar a varios fontaneros de mi zona pidiendo presupuesto. Incluye qué quiero hacer, que el baño mide unos 4 metros cuadrados, que me vendría bien hacerlo en noviembre y que pueden venir a verlo por las tardes. Tono educado y directo, máximo seis líneas. Si te falta algún dato, pregúntamelo."
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

> Prueba: «Soy [quién eres]. Necesito [qué]. Es para [quién o para qué]. Lo quiero [tono, extensión y formato]. Si te falta algún dato, pregúntamelo antes de escribir».

Cuando llegue la respuesta, **léela entera** y cambia lo que no sea verdad o no suene a ti. Lo que envíes es tuyo, no de ChatGPT.

## Error frecuente

Escribir tres palabras, recibir algo flojo y pensar que «no sirve». Casi siempre faltaba contexto.

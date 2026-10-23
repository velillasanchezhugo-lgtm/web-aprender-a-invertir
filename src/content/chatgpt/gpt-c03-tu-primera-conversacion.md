---
title: Tu primera petición útil
description: "Las cuatro piezas de una buena petición a ChatGPT (quién eres, qué necesitas, para quién y cómo lo quieres) con un ejemplo pobre y uno bueno."
level: cero
track: gpt-cero
order: 3
skills: [gpt-peticion]
terms: [prompt, contexto-de-la-peticion]
hook: "Le pides a ChatGPT «un mensaje para cambiar el turno» y te da un texto tan educado y tan vacío que nunca lo enviarías. ¿Qué le faltaba?"
takeaway: "ChatGPT no sabe nada de tu situación. Si le dices quién eres, qué necesitas, para quién es y cómo lo quieres, la primera respuesta ya se parece a lo que buscas."
scenario:
  kind: operacion
  label: Caso práctico
  title: El turno de Hamza
  body: "Hamza es camarero y necesita cambiar el turno del sábado porque se casa su hermano. Su «escríbeme un mensaje para cambiar el turno» da un texto largo y rígido. Cuando cuenta a quién va dirigido, el motivo, qué ofrece a cambio y que lo quiere corto para WhatsApp, el mensaje le sirve casi tal cual."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-c03-q1
    q: "Hamza ha recibido un mensaje genérico que no enviaría. ¿Qué es lo más útil que puede hacer?"
    options: ["Pulsar para generar otra respuesta varias veces hasta que salga una buena", "Contar a quién va, el motivo, qué ofrece a cambio y cómo lo quiere", "Pedirle que lo haga «más natural»"]
    answer: 1
    explain: "ChatGPT solo puede usar lo que le cuentas. Con el destinatario, el motivo y el formato, el mensaje pasa de genérico a útil. Regenerar tienta porque cada vez sale algo distinto, pero sin información nueva no puede acertar con tu caso."
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
    explain: "Basta con escribir como se lo explicarías a alguien que no te conoce. Tienta buscar «trucos» o frases mágicas, pero lo que más mejora la respuesta es el contexto."
tips:
  - "Si no sabes qué contarle, termina con «Antes de escribirlo, pregúntame lo que necesites»."
  - "No añadas datos que no aportan nada: tu dirección o tu DNI no mejoran un mensaje al encargado."
action:
  title: Haz tu primera petición completa
  steps:
    - "Piensa en algo real que tengas que escribir esta semana: un mensaje, un correo, una nota."
    - "Escríbele a ChatGPT las cuatro piezas: quién eres, qué necesitas, para quién es y cómo lo quieres."
    - "Si el resultado te sirve, copia la petición en tu nota «Mi kit de ChatGPT»."
  check: He hecho una petición con las cuatro piezas y la he guardado
practice:
  task: "Vas a vender tu bicicleta en una web de anuncios de segunda mano. Escribe la petición del anuncio con las cuatro piezas: quién eres, qué necesitas, para quién es y cómo lo quieres."
  require: [contexto, publico, formato]
  extra: []
  sample: "Tengo una bicicleta de montaña de hace tres años que apenas he usado y quiero venderla en una web de anuncios de segunda mano. Escribe el anuncio para personas que buscan una bici para salir los fines de semana. Incluye título, una descripción de máximo cinco líneas y una lista con el estado y lo que incluye. Tono cercano y claro. No inventes características: si te falta algún dato, pregúntamelo."
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

Lo que le escribes a ChatGPT se llama **petición** (en inglés, *prompt*). ChatGPT **no te conoce**: no sabe tu trabajo, tu situación ni para quién es el texto. Si no se lo dices, lo rellena con lo más general. A esa información que le das se le llama **contexto**.

Una petición útil tiene **cuatro piezas**:

1. **Quién eres.** «Soy camarero», «estudio un ciclo de FP», «llevo una autoescuela».
2. **Qué necesitas.** La tarea concreta: un mensaje, un resumen, un horario, una explicación.
3. **Para quién o para qué.** «Para mi encargada», «para colgarlo en el tablón», «para entenderlo yo».
4. **Cómo lo quieres.** Tono, extensión y formato: «cercano», «máximo cuatro líneas», «en una tabla».

No hace falta escribir mucho. Hace falta **lo que ChatGPT no puede adivinar**.

**Ejemplo pobre:**

«Escríbeme un mensaje para cambiar el turno».

**Ejemplo bueno:**

«Soy camarero en un restaurante. Escribe un mensaje de WhatsApp para mi encargada pidiéndole cambiar mi turno del sábado por el del domingo, porque se casa mi hermano. Ofrécele cubrir otro día si lo necesita. Tono cercano y respetuoso, máximo cuatro líneas».

## En la práctica

Antes de enviar, repasa tu mensaje con las cuatro piezas. Si falta alguna, añádela en una frase.

> Prueba: «Soy [quién eres]. Necesito [qué]. Es para [quién o para qué]. Lo quiero [tono, extensión y formato]. Si te falta algún dato, pregúntamelo antes de escribir».

Cuando llegue la respuesta, **léela entera** y cambia lo que no sea verdad o no suene a ti. Lo que envíes es tuyo, no de ChatGPT.

## Error frecuente

Escribir tres palabras, recibir algo flojo y pensar que «no sirve». Casi siempre faltaba contexto.

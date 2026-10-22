---
title: Dale ejemplos
description: Cómo mostrarle a Claude ejemplos de lo que quieres (y de lo que no) para que acierte con el estilo, el tono y la estructura a la primera.
level: basico
track: cla-pedir
order: 102
skills: [cla-ejemplos-formato]
terms: [prompt]
hook: "Le explicas a Claude cómo escribes las publicaciones de tu tienda y no lo clava. ¿Y si en vez de explicárselo se lo enseñas?"
takeaway: Un buen ejemplo vale más que muchas explicaciones. Muestra dos o tres ejemplos variados de lo que quieres, di qué tienen en común y, si ayuda, uno de lo que no quieres.
scenario:
  kind: empresa
  label: Caso práctico
  title: Las publicaciones de la floristería de Rocío
  body: "Rocío tiene una floristería en Cáceres. Pide a Claude «publicaciones cercanas para Instagram» y le salen textos llenos de emojis y frases de anuncio. Después pega tres publicaciones suyas que funcionaron, todas cortas, con una pregunta al final y un solo emoji. Las nuevas ya suenan a ella."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-pe02-q1
    q: "Óscar quiere que Claude escriba descripciones para los pisos de su inmobiliaria con su estilo. ¿Qué le da mejor resultado?"
    options: ["Pegar una sola descripción y pedir «igual que esta»", "Pegar tres descripciones distintas (un estudio, un piso familiar, un ático) y decir qué tienen en común", "Pedir «descripciones profesionales» sin ejemplos"]
    answer: 1
    explain: "Con ejemplos variados Claude distingue lo que es tu estilo de lo que es propio de un solo piso. Con un único ejemplo tiende a copiarlo demasiado: misma longitud, mismas frases, incluso los mismos detalles."
  - type: truefalse
    id: cla-pe02-q2
    q: "También ayuda mostrar un ejemplo de lo que no quieres, siempre que digas claramente que es lo que hay que evitar."
    answer: true
    explain: "Un contraejemplo marca el límite: «así no, demasiado vendedor». Lo importante es etiquetarlo bien; si no, Claude podría tomarlo como modelo."
  - type: choice
    id: cla-pe02-q3
    q: "¿Qué conviene hacer con los ejemplos que pegas?"
    options: ["Separarlos y etiquetarlos («Ejemplo 1», «Ejemplo 2») y explicar qué copiar de ellos", "Mezclarlos con tu petición en un solo párrafo", "Pegar todos los que tengas, cuantos más mejor"]
    answer: 0
    explain: "Etiquetados y con una frase de qué tienen en común, Claude sabe qué imitar. Pegar veinte no suele mejorar el resultado y hace más difícil ver qué importa."
tips:
  - "Quita de tus ejemplos nombres de clientes, teléfonos o datos que no quieras compartir: el estilo se ve igual."
  - "Si no tienes ejemplos propios, pide a Claude tres versiones muy distintas, elige la que más te guste y úsala como ejemplo."
action:
  title: Prueba con tres ejemplos
  steps:
    - "Elige algo que escribas a menudo: un mensaje a clientes, una publicación, una nota para tu equipo."
    - "Pega tres ejemplos tuyos con la petición de esta sesión y pide uno nuevo."
    - "Si te sirve, guarda la petición con los ejemplos en «Mi kit de Claude»."
  check: He pedido a Claude un texto con tres ejemplos míos
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [claude-docs, claude-ayuda]
---

## La idea

Describir un estilo con palabras es difícil. «Cercano pero profesional» significa cosas distintas para cada persona. Un **ejemplo** lo deja claro de golpe: longitud, tono, estructura y hasta el tipo de palabras.

Tres cosas que funcionan:

- **Varios mejor que uno.** Con un solo ejemplo, Claude tiende a copiarlo casi igual. Con **dos o tres**, entiende qué se repite y qué cambia.
- **Variados.** Si todos tus ejemplos hablan de lo mismo, Claude pensará que el tema también es parte del estilo. Elige ejemplos distintos entre sí.
- **Explica qué tienen en común.** Una frase basta: «Fíjate en que son cortos, empiezan con una pregunta y no usan mayúsculas para destacar».

También puedes añadir un **contraejemplo**: algo que no quieres, bien marcado. «Esto es lo que NO quiero: suena a anuncio de televisión.» Ayuda a poner límites.

Los ejemplos sirven para casi todo: publicaciones, respuestas a clientes, preguntas de examen, nombres para un proyecto, el formato de una tabla.

## En la práctica

1. Pega tus ejemplos separados y numerados.
2. Di qué tienen en común y qué quieres que imite.
3. Pide lo nuevo, con su tema concreto.

> Prueba: «Escribo las publicaciones de Instagram de mi floristería. Aquí tienes tres que funcionaron bien.
> Ejemplo 1: […]
> Ejemplo 2: […]
> Ejemplo 3: […]
> Fíjate en que son cortas (menos de 40 palabras), terminan con una pregunta y llevan un solo emoji. Escribe una nueva con ese estilo para anunciar los ramos del Día de la Madre. Evita frases tipo anuncio como «¡No te lo pierdas!».»

Si el resultado copia demasiado un ejemplo, dilo: «No repitas frases de los ejemplos; quiero el estilo, no el contenido».

## Error frecuente

Pegar un solo ejemplo y quejarse de que la respuesta se parece demasiado a él. Añade otro distinto y explica qué copiar.

---
title: Qué es ChatGPT
description: "Qué es ChatGPT, cómo genera sus respuestas, en qué te ayuda de verdad y por qué puede equivocarse con total seguridad."
level: cero
track: gpt-cero
order: 1
skills: [gpt-que-es, gpt-limites]
terms: [chatgpt, openai, ia-generativa, modelo-de-lenguaje, alucinacion]
hook: "Tu nieto te instala ChatGPT y te dice «pregúntale lo que quieras». ¿Qué le puedes pedir y de qué no te debes fiar?"
takeaway: "ChatGPT escribe respuestas a partir de patrones de lenguaje. Es muy útil para redactar, explicar, resumir y ordenar ideas, pero no es una persona ni un buscador, y puede decir algo falso con total seguridad."
scenario:
  kind: producto
  label: Caso práctico
  title: El último tren de Manuel
  body: "Manuel tiene 68 años y estrena ChatGPT. Le pide que le explique una carta de la compañía del agua y le aclara todo. Luego le pregunta a qué hora sale esta noche el último tren de cercanías a su pueblo, y le da una hora exacta sin ninguna fuente."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-c01-q1
    q: "Manuel tiene la hora del último tren que le ha dado ChatGPT, sin ninguna fuente. Si lo pierde, se queda sin volver a casa. ¿Qué hace?"
    options: ["Fiarse: si le ha dado una hora exacta, es que lo sabe", "Comprobarlo en la web o la aplicación oficial del tren antes de salir", "Preguntarle a ChatGPT «¿seguro?» y fiarse si dice que sí"]
    answer: 1
    explain: "Los horarios cambian y ChatGPT, si no busca en internet, responde con lo que aprendió, que puede ser antiguo o inventado. La hora exacta tienta porque suena a dato comprobado, pero el detalle no prueba nada. Y a «¿seguro?» puede contestar que sí con la misma seguridad."
  - type: truefalse
    id: gpt-c01-q2
    q: "ChatGPT entiende lo que dice como una persona; por eso, cuando contesta con seguridad, es que lo sabe."
    answer: false
    explain: "Genera el texto que mejor encaja con tu pregunta según lo que aprendió. Su seguridad al escribir no depende de si acierta. Tienta creerlo porque escribe con soltura, como alguien que domina el tema."
  - type: choice
    id: gpt-c01-q3
    q: "¿Cuál de estas tareas es la mejor para empezar con ChatGPT?"
    options: ["Reescribir con más claridad el aviso que vas a colgar en el portal sobre la limpieza de la escalera", "Decidir si dejas el tratamiento que te mandó el médico", "Saber el resultado del partido de anoche sin que busque en internet"]
    answer: 0
    explain: "Redactar y aclarar un texto tuyo es justo lo que mejor hace, y tú compruebas el resultado al leerlo. La decisión médica es de un profesional. El partido tienta por fácil, pero es un dato reciente que quizá no tiene."
tips:
  - "Empieza por cosas que puedas juzgar tú al leerlas: un texto, una explicación, una lista. Así aprendes a medir cuándo acierta."
  - "Descarga la aplicación solo desde la tienda oficial y comprueba que el desarrollador es OpenAI: hay copias que se hacen pasar por ChatGPT."
action:
  title: Hazle una pregunta que puedas comprobar
  steps:
    - "Abre ChatGPT y pídele que te explique algo que conozcas bien (tu trabajo, tu pueblo, una receta tuya)."
    - "Lee la respuesta buscando algo que no sea del todo así."
    - "Apunta en una nota del móvil qué acertó y qué no: será el principio de «Mi kit de ChatGPT»."
  check: He probado ChatGPT con un tema que conozco y he buscado sus errores
practice:
  task: "Es tu primer día con ChatGPT. Escribe una petición para que te explique en qué te puede ayudar en tu día a día y en qué cosas no deberías fiarte de él sin comprobarlo."
  require: [contexto, verificar]
  extra: []
  sample: "Soy jubilada y es la primera vez que uso un asistente de IA. Explícame en cinco puntos cortos para qué me puedes servir en casa, por ejemplo con cartas, recetas o facturas. Después dime si hay cosas que debería comprobar siempre en otra fuente antes de fiarme de ti. Usa un lenguaje sencillo, sin tecnicismos."
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-condiciones-ue]
---

## La idea

**ChatGPT** es un asistente de inteligencia artificial de **OpenAI**, una empresa estadounidense. Le escribes (o le hablas) y te contesta. Es **IA generativa**: crea contenido nuevo, como textos o imágenes, a partir de lo que le pides.

Por dentro funciona con un **modelo de lenguaje**: un programa entrenado con muchísimos textos que aprendió qué palabras suelen ir detrás de otras. Cuando le preguntas algo, **escribe la respuesta que mejor encaja**; no la saca de una lista de verdades.

**Lo que hace bien:**

- Redactar y mejorar textos: correos, avisos, cartas.
- Explicar cosas difíciles con palabras sencillas.
- Resumir, ordenar ideas, hacer listas y planes.
- Traducir y cambiar el tono de un texto.

**Lo que no es:**

- **No es una persona.** No siente y no sabe nada de ti salvo lo que le cuentas (o lo que recuerde, si usas su memoria).
- **No es un buscador.** Muchas veces contesta con lo que aprendió. Cuando busca en internet, enseña enlaces a las fuentes. **Si no ves fuentes, no ha comprobado nada.**
- **No es infalible.** Puede inventarse un dato y decirlo **con total seguridad**: es lo que se llama una **alucinación**. La propia aplicación avisa de que puede cometer errores.

## En la práctica

Empieza con tareas cuyo resultado **puedas juzgar tú**. Escribe como se lo contarías a alguien que no te conoce.

> Prueba: «Es la primera vez que uso ChatGPT. Explícame con un ejemplo de la vida diaria qué es un modelo de lenguaje y por qué a veces se equivoca, en menos de 100 palabras».

Lee la respuesta entera. Si algo no te cuadra, díselo («no lo entiendo», «hazlo más corto»): la conversación sigue.

## Error frecuente

Usarlo como oráculo para datos del momento: horarios, guardias o precios. Para eso, la fuente oficial.

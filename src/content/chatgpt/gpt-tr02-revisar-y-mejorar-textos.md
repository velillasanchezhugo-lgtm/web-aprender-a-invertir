---
title: Revisar textos sin perder tu voz
description: "Cómo pedir a ChatGPT que corrija y mejore un texto tuyo con cada cambio explicado, usar las sugerencias de canvas y decidir tú qué aceptar."
level: basico
track: gpt-trabajo
order: 402
skills: [gpt-escribir, gpt-canvas]
terms: [control-de-cambios, tono, canvas]
hook: "Le pides a ChatGPT que mejore tu texto y te devuelve otro: más pulido, sí, pero lleno de palabras que tú nunca usarías. ¿Dónde ha quedado lo que querías decir?"
takeaway: "Pide correcciones marcadas y explicadas, no un texto nuevo, y dile qué no debe tocar. Así ves cada cambio, aprendes de él y decides tú cuál aceptar."
scenario:
  kind: empresa
  label: Caso práctico
  title: La web de Inés
  body: "Inés es comercial en una pequeña distribuidora de vinos de La Rioja y escribe el texto de presentación de la web. Pide a ChatGPT «mejóralo» y recibe frases como «una experiencia sensorial inigualable». Ya no suena a ellos. Repite pidiendo que corrija solo errores y frases confusas, que mantenga su estilo sencillo y que explique cada cambio en una tabla. Acepta siete de los diez cambios."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-tr02-q1
    q: "Pablo es profesor de FP y ha escrito las instrucciones de las prácticas para sus alumnos. Quiere que ChatGPT las revise. ¿Qué pide?"
    options: ["«Mejora este texto.»", "«Corrige faltas y frases que se puedan entender mal, sin cambiar las fechas ni los requisitos. Mantén mi tono directo. Dame una tabla con el original, la propuesta y el motivo.»", "«Reescríbelo para que parezca más profesional.»"]
    answer: 1
    explain: "La segunda acota qué tocar, protege lo que no puede cambiar y deja cada cambio a la vista. «Mejora este texto» tienta por corta, pero da permiso para cambiarlo todo, incluido el sentido."
  - type: truefalse
    id: gpt-tr02-q2
    q: "Si la versión de ChatGPT suena mejor, lo sensato es aceptarla entera."
    answer: false
    explain: "Sonar mejor no es decir lo mismo. Al pulir, puede convertir un «quizá» en un «seguro», quitar un matiz o cambiar un dato. Revisa los cambios uno a uno."
  - type: choice
    id: gpt-tr02-q3
    q: "Revisas en canvas el aviso de un plazo. Entre las sugerencias, ChatGPT cambia «antes del 15 de mayo» por «en las próximas semanas» porque «suena más natural». ¿Qué haces?"
    options: ["La aplico: si lo propone, será mejor", "La descarto y acepto solo las sugerencias que no cambian datos ni compromisos", "Borro todas las sugerencias y vuelvo a empezar"]
    answer: 1
    explain: "Una fecha concreta es información, no estilo: quitarla cambia el aviso. Fiarse tienta porque la sugerencia viene explicada, pero el motivo de estilo no compensa perder el dato. Las demás sugerencias pueden seguir siendo útiles."
tips:
  - "Si tienes un texto antiguo tuyo que te gusta, pégalo y pide: «Revisa el nuevo para que suene como este». Mantiene tu voz mejor que cualquier adjetivo."
  - "Pide a la vez solo un tipo de revisión (ortografía, claridad o tono). Si pides todo junto, es más difícil ver qué ha cambiado."
action:
  title: Revisa un texto tuyo con los cambios a la vista
  steps:
    - "Elige un texto que vayas a usar esta semana: un aviso, un informe corto o la presentación de tu negocio."
    - "Pide a ChatGPT una revisión con tabla (original, propuesta y motivo) y dile qué no debe tocar."
    - "Acepta o rechaza cada cambio tú, y apunta en «Mi kit de ChatGPT» el error que más te repite."
  check: He revisado un texto mío con ChatGPT decidiendo yo cada cambio
practice:
  task: "Eres técnica de recursos humanos en una empresa de 60 personas y has escrito el aviso del nuevo horario de verano. Escribe la petición para que ChatGPT lo revise sin quitarle tu estilo."
  require: [formato, limites]
  extra:
    - label: Pedir que explique cada cambio
      any: [motivo, explica, explicando, por que, porque]
      hint: "Pide el motivo de cada cambio: «Explica por qué propones cada uno»."
    - label: Proteger tu voz o los datos
      any: [mi estilo, mi tono, mi voz, no cambies, sin cambiar, manten, mantén]
      hint: "Di qué tiene que respetar: «Mantén mi estilo y no cambies los horarios»."
  sample: "Trabajo en recursos humanos de una empresa de 60 personas. Te pego el aviso del horario de verano para la plantilla. Revisa faltas, frases confusas y repeticiones. Mantén mi estilo sencillo y cercano, y no cambies los horarios, las fechas ni los nombres de los departamentos. Dame una tabla con tres columnas: texto original, propuesta y motivo del cambio. No reescribas el aviso entero: solo quiero ver los cambios para decidir yo cuáles aplico."
deeper: null
tool: evaluador-de-peticiones
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda]
---

## La idea

Pedir «mejora este texto» es darle permiso a ChatGPT para cambiarlo todo. Suele devolverte algo más pulido, pero también más genérico, y a veces **cambia el sentido**: un «puede que» se vuelve «seguro», desaparece un matiz o se mueve una fecha.

Para revisar sin perderte, pide tres cosas:

- **Qué revisar**: ortografía, frases confusas, repeticiones o el tono, pero no todo a la vez.
- **Qué no tocar**: datos, fechas, nombres, el contenido y **tu voz**, es decir, tu manera de escribir.
- **Los cambios a la vista**: una tabla con el texto original, la propuesta y el motivo. Es parecido al **control de cambios** de un procesador de textos, que marca lo que se ha modificado.

El motivo es lo más valioso: así **aprendes** y dejas de repetir el mismo error.

Cuando se trata de un texto largo, ChatGPT puede abrirlo en **canvas**, un espacio de edición junto al chat en el que trabajáis sobre el mismo documento. Allí puedes pedirle que **sugiera cambios**: los deja como comentarios en el texto y tú decides en cada uno si lo aplicas, lo editas a mano o lo descartas. También puedes seleccionar un párrafo y pedir algo solo sobre él. Canvas está en los planes gratuito y de pago, aunque sus opciones pueden variar entre la web, el escritorio y el móvil.

## En la práctica

1. Pega el texto y di **para quién es** (la plantilla, clientes, un tribunal de prácticas).
2. Acota la revisión y lo que no debe cambiar.
3. Pide la tabla o, en canvas, las sugerencias en el propio texto.
4. Decide tú cambio a cambio. Si una propuesta no te convence, pregunta: «¿Por qué esta?».

> Prueba: «Revisa este texto para la carta de mi restaurante. Corrige faltas y frases liosas, pero no cambies los nombres de los platos ni los precios. Mantén mi tono cercano. Dame una tabla: original, propuesta y motivo.»

> Prueba: «Soy autónoma y este es el texto de mi perfil profesional. ¿Hay alguna frase que suene exagerada o poco creíble? Señálala, explica por qué y propón una alternativa más sencilla. No toques el resto.»

## Error frecuente

Copiar la versión «mejorada» sin compararla con la tuya y enviar un texto que ya no dice exactamente lo que querías.

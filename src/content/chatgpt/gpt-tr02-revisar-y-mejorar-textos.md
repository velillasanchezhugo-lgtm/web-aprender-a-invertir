---
title: Revisar textos sin perder tu voz
description: "Cómo pedir a ChatGPT un diagnóstico de tu texto antes que una versión nueva, pulirlo por partes y decidir tú qué cambios aceptar."
level: basico
track: gpt-trabajo
order: 402
skills: [gpt-escribir, gpt-canvas]
terms: [bloque-de-escritura]
hook: "Has escrito la presentación de tu negocio y te suena torpe. Si se la das a ChatGPT para que la «mejore», ¿seguirá sonando a ti?"
takeaway: "Primero pide un diagnóstico, no un texto nuevo: qué frases fallan y por qué. Luego arregla por partes lo que tú decidas y protege lo que no se puede tocar."
scenario:
  kind: empresa
  label: Caso práctico
  title: La web de Jimena
  body: "Jimena escribe la presentación web de una pequeña distribuidora de vinos de La Rioja. Pide «mejóralo» y le sale «una experiencia sensorial inigualable»: ya no suena a ellos. Vuelve a empezar y pide las cinco frases que peor se entienden y por qué. Arregla tres a su manera y, en el recuadro editable, señala el último párrafo para que lo acorte sin tocar el resto."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-tr02-q1
    q: "Abel es monitor de un campamento de verano y ha escrito la circular para las familias. Quiere que ChatGPT la revise. ¿Qué pide?"
    options: ["«Mejora este texto.»", "«Señala las faltas y las frases que se puedan entender mal, con el motivo de cada una. No cambies fechas ni lo que hay que llevar, y mantén mi tono directo.»", "«Reescríbelo para que parezca más profesional.»"]
    answer: 1
    explain: "La segunda acota qué mirar, protege lo que no puede cambiar y explica cada problema. «Mejora este texto» tienta por corta, pero da permiso para cambiarlo todo, incluido el sentido."
  - type: truefalse
    id: gpt-tr02-q2
    q: "Si le has dicho «no cambies las fechas», ya no hace falta revisar las fechas del texto final."
    answer: false
    explain: "Suele respetarlo, pero no siempre: al pulir una frase puede mover un día o quitar un matiz. Tienta fiarse porque se lo dijiste claro, pero lo que importa se revisa igual."
  - type: choice
    id: gpt-tr02-q3
    q: "Pides a ChatGPT que revise el aviso de un plazo. Propone cambiar «antes del 15 de mayo» por «en las próximas semanas» porque «suena más natural». ¿Qué haces?"
    options: ["La aplico: si lo propone, será mejor", "Borro todas las sugerencias y vuelvo a empezar", "La descarto y acepto solo las sugerencias que no cambian datos ni compromisos"]
    answer: 2
    explain: "Una fecha es información, no estilo: quitarla cambia el aviso. Fiarse tienta porque la sugerencia viene explicada, pero el estilo no compensa perder el dato. Las demás pueden seguir siendo útiles."
tips:
  - "Lee el texto en voz alta al final. Si una frase no la dirías nunca, vuelve a la tuya."
  - "Pide también «dime qué está bien y no hay que tocar»."
action:
  title: Diagnóstico antes que reescritura
  steps:
    - "Elige un texto que vayas a usar esta semana."
    - "Pide a ChatGPT las frases que fallan y el motivo, sin reescribir el texto, y dile qué no debe tocar."
    - "Arregla tú lo que te convenza y apunta en «Mi kit de ChatGPT» el error que más te repite."
  check: He revisado un texto mío con ChatGPT decidiendo yo cada cambio
practice:
  task: "Eres técnica de recursos humanos y has escrito el aviso del horario de verano. Escribe la petición para que ChatGPT lo revise sin quitarle tu estilo."
  require: [formato, limites]
  extra:
    - label: Pedir que explique cada cambio
      any: [motivo, explica, explicando, por que, razon]
      hint: "Pide el motivo de cada cambio: «Explica por qué propones cada uno»."
    - label: Proteger tu voz o los datos
      any: [mi estilo, mi tono, mi voz, mi forma de escribir, no cambies, sin cambiar, no toques, manten, respeta]
      hint: "Di qué tiene que respetar: «Mantén mi estilo y no cambies los horarios»."
  sample: "Trabajo en recursos humanos de una empresa de 60 personas. Te pego el aviso del horario de verano para la plantilla. Revisa faltas y frases confusas. Mantén mi estilo cercano y no cambies horarios ni fechas. Dame una lista con cada frase que cambiarías, tu propuesta y el motivo. No reescribas el aviso: decido yo qué cambios aplico."
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

«Mejora este texto» da permiso a ChatGPT para cambiarlo todo. Suele devolver algo más pulido y genérico, y a veces **cambia el sentido**: se pierde un matiz o se mueve una fecha.

Funciona mejor en dos pasos:

1. **Diagnóstico.** Pide que señale lo que falla (faltas, frases confusas, exageraciones) y **por qué**, sin reescribir nada. El motivo te enseña a no repetir el error. Dile qué no debe tocar: datos, fechas, nombres y **tu voz**, es decir, tu manera de escribir.
2. **Arreglo por partes.** Corrige tú lo fácil y pide cambios solo donde los quieras.

Para el segundo paso ayuda el **bloque de escritura**: cuando ChatGPT escribe un texto largo, suele mostrarlo en un recuadro editable dentro de la respuesta. Puedes cambiar tú una palabra, señalar un párrafo y pedir algo solo sobre él, o abrirlo a pantalla completa. Con los modelos actuales ha sustituido a canvas, el antiguo editor en panel aparte. Lo que ves depende del plan, del dispositivo y del modelo.

## En la práctica

1. Pega el texto y di **para quién es**.
2. Pide el diagnóstico con motivos y lo que no debe cambiar.
3. Arregla y, si hace falta, señala la parte y di: «cambia solo esto».
4. Decide tú. Si una propuesta no te convence, pregunta: «¿Por qué esta?».

> Prueba: «Te pego tres entradas de mi blog de recetas. Antes de corregir nada, describe en tres líneas cómo escribo. Después señala solo las frases que se salen de ese estilo o se entienden mal, y explica por qué. No toques las cantidades ni los tiempos. No reescribas las entradas.»

## Error frecuente

Copiar la versión «mejorada» sin compararla con la tuya.

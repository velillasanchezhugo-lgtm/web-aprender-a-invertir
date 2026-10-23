---
title: "Bloques de escritura: editar por partes"
description: Cómo escribir y editar un texto con ChatGPT por partes, en un espacio editable, en lugar de pedir que lo rehaga entero cada vez.
level: basico
track: gpt-funciones
order: 203
skills: [gpt-canvas, gpt-escribir]
terms: [canvas, bloque-de-escritura]
hook: "Le pides a ChatGPT que cambie una sola frase de tu carta y te devuelve la carta entera, con otros tres cambios que no querías. ¿Cómo se trabaja un texto por partes?"
takeaway: Para un texto que vas a pulir, trabájalo en un bloque de escritura (lo que antes hacía canvas) y pide cambios sobre una parte concreta, diciendo qué no debe tocar.
scenario:
  kind: producto
  label: Caso práctico
  title: El discurso de Julián
  body: "Julián tiene que leer unas palabras en la jubilación de su compañera Pilar. Pide a ChatGPT un borrador de dos minutos y le sale en un recuadro editable. Cambia él mismo una anécdota que no era exacta, abre el texto a pantalla completa y pide: «haz más emotivo solo el último párrafo». El resto queda como estaba."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-fu03-q1
    q: "Tu informe está casi listo, pero el segundo párrafo suena muy frío. ¿Qué pides?"
    options: ["«Mejóralo»", "«Haz más cercano solo el segundo párrafo y deja el resto igual»", "«Escríbelo otra vez desde cero»"]
    answer: 1
    explain: "Señalar la parte y decir qué no tocar evita cambios que no quieres. «Mejóralo» tienta por corto, pero deja que ChatGPT decida qué cambia, y suele cambiar de más."
  - type: truefalse
    id: gpt-fu03-q2
    q: "En un bloque de escritura puedes corregir tú el texto directamente, sin pedírselo a ChatGPT."
    answer: true
    explain: "Es editable: cambias una palabra o un dato a mano y sigues. Para cambios pequeños suele ser más rápido que explicarlos."
  - type: choice
    id: gpt-fu03-q3
    q: "Escribes un texto importante en un chat temporal. ¿Qué conviene hacer al acabar?"
    options: ["Nada: se guarda solo para siempre", "Copiarlo a tu documento, porque los cambios pueden no conservarse", "Borrar el historial de chats"]
    answer: 1
    explain: "Según el centro de ayuda de OpenAI, en un chat temporal las ediciones pueden no conservarse. Dar por hecho que se guarda tienta, pero puedes perder el trabajo."
tips:
  - "Cuando el texto esté listo, cópialo a tu documento o correo: el chat no es tu archivo."
  - "Si no te sale un bloque editable, pídelo: «escríbelo en un documento que pueda editar»."
action:
  title: Pule un texto por partes
  steps:
    - "Pide a ChatGPT un texto corto que necesites esta semana (un aviso, un correo, una nota)."
    - "Corrige a mano una palabra o un dato."
    - "Pide un cambio sobre una sola parte y di qué debe quedar igual."
    - "Apunta en «Mi kit de ChatGPT» la frase «cambia solo… y deja el resto igual»."
  check: He editado un texto por partes con ChatGPT
practice:
  task: "Quieres pedir unas prácticas en la recepción de un hotel de Málaga y vas a pulir la carta de presentación con ChatGPT. Escribe la primera petición para trabajarla por partes."
  require: [contexto, formato, tono, limites]
  extra:
    - label: "Pedir que cambie solo una parte"
      any: ["solo el", "solo la", "solo ese", "por partes", "deja el resto"]
      hint: "Di que los cambios serán por partes: «cambia solo el párrafo que te diga y deja el resto igual»."
  sample: "Soy estudiante de Turismo y quiero hacer prácticas en la recepción de un hotel de Málaga. Escribe una carta de presentación de una página, en tres párrafos, con tono formal pero cercano, en un documento que pueda editar. Después la revisaremos por partes: cuando te pida un cambio, toca solo el párrafo que te diga y deja el resto igual. No inventes experiencia que no te he contado."
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

Si un texto llega como respuesta normal, cada cambio trae el texto entero otra vez. Para pulir un documento eso cansa: hay que releerlo todo y a veces cambia lo que no querías.

Por eso ChatGPT tiene **bloques de escritura**: recuadros editables dentro de la respuesta, pensados para correos, mensajes, informes o cartas. (Para el código hay **bloques de código**, que funcionan parecido.)

- **Editas a mano**: cambias una palabra, un dato, un nombre.
- **Pides cambios** sobre todo el texto o sobre la parte que selecciones, y puedes deshacerlos.
- **Lo abres a pantalla completa** si el texto es largo, para trabajar con calma.
- **Se guarda con el chat** al poco de editar, y ChatGPT usa tu última versión en lo que le pidas después. En un chat temporal, las ediciones pueden no conservarse.

¿Y **canvas**? Era el editor anterior, en un panel aparte. Desde finales de mayo de 2026 ya no está en los modelos actuales: lo sustituyen estos bloques. En los planes de pago puede verse un tiempo con modelos antiguos.

Las opciones exactas dependen del plan, del dispositivo y del modelo, y van cambiando.

## En la práctica

1. Pide el texto diciendo que lo vas a editar. Para documentos, ChatGPT suele abrir un bloque de escritura solo.
2. Corrige tú lo pequeño.
3. Para lo demás, **señala la parte** y **di qué no tocar**.
4. Al final, copia el texto a su sitio.

> Prueba: «Escribe un aviso de 120 palabras para el grupo de familias de la clase de mi hijo: la excursión al Retiro pasa del jueves al viernes. Tono amable. Luego te pediré cambios por partes: cambia solo lo que te diga y deja el resto igual».

## Error frecuente

Pedir «mejóralo» sin decir qué. ChatGPT cambiará muchas cosas y tendrás que releerlo todo.

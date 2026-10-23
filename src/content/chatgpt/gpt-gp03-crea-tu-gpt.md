---
title: Tu asistente a medida, sin programar
description: "Las piezas de un asistente a medida, dónde montarlo hoy si no puedes crear GPTs y cómo probarlo antes de usarlo."
level: basico
track: gpt-gpts
order: 303
skills: [gpt-crear-gpts, gpt-instrucciones]
terms: [gpt-personalizado, proyecto-de-chatgpt, plugin-de-chatgpt, plantilla-de-prompt]
hook: "En tu academia cada compañera pide a ChatGPT las respuestas a las familias a su manera, y salen todas distintas. Sin crear un GPT, ¿cómo lo dejas preparado una vez?"
takeaway: "Un asistente a medida se monta escribiendo: instrucciones claras, pocos archivos buenos y unas peticiones de ejemplo, y se prueba antes de usarlo en serio. En una cuenta personal, hoy se monta en un proyecto."
scenario:
  kind: empresa
  label: Caso práctico
  title: Las respuestas de la academia de Aitana
  body: "Aitana trabaja en una academia de idiomas de Bilbao y usa su cuenta personal de ChatGPT, donde ya no puede crear GPTs. Monta un proyecto: escribe las instrucciones, sube el calendario y las normas del curso, que son públicos, y apunta tres peticiones de ejemplo. Lo prueba con diez preguntas reales y corrige dos que inventaban horarios."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-gp03-q1
    q: "Ximena tiene un plan de pago en su cuenta personal y quiere un asistente que responda siempre igual sobre su tienda. ¿Qué es lo más realista hoy?"
    options: ["Crear un GPT nuevo desde el móvil", "Pagar un plan personal más caro para poder crear GPTs", "Saber que en cuentas personales ya no se crean GPTs y poner esas instrucciones y archivos en un proyecto"]
    answer: 2
    explain: "En cuentas personales ya no se crean GPTs nuevos, ni gratis ni de pago. Subir de plan tienta, pero no lo cambia. Las mismas instrucciones y archivos funcionan en un proyecto."
  - type: choice
    id: gpt-gp03-q2
    q: "Aitana prueba su proyecto y ve que se inventa un horario que no está en sus archivos. ¿Qué cambia primero?"
    options: ["Añade a las instrucciones: «Responde solo con la información de los archivos; si no está, di que lo consulten en secretaría»", "Sube veinte archivos más por si acaso", "Lo usa igual: ya lo corregirán las familias"]
    answer: 0
    explain: "Una instrucción clara sobre qué hacer cuando falta un dato corta la invención. Subir más archivos tienta, pero mezcla información y no le dice qué hacer cuando no sabe."
  - type: truefalse
    id: gpt-gp03-q3
    q: "Conviene probar un asistente con preguntas reales, también difíciles, antes de usarlo con otras personas."
    answer: true
    explain: "Las pruebas sacan lo que se inventa antes de que nadie se fíe de él. Tienta probar con una pregunta fácil, pero así casi todo parece funcionar."
tips:
  - "Escribe las peticiones de ejemplo como las escribiría quien lo va a usar, no como las escribirías tú."
  - "Para probarlo, pide en otro chat: «Escribe diez dudas difíciles que podría tener una familia»."
action:
  title: Escribe las instrucciones de tu asistente
  steps:
    - "Elige una tarea que repites y escribe sus instrucciones: para quién es, qué hace, cómo responde y qué hace si le falta un dato."
    - "Crea un proyecto, pega las instrucciones y sube solo los archivos que debe consultar."
    - "Pruébalo con cinco preguntas reales y guarda las instrucciones finales en «Mi kit de ChatGPT»."
  check: He escrito y probado las instrucciones de un asistente para una tarea que repito
practice:
  task: "Llevas la gestión de un club de pádel y las dudas de los socios son siempre las mismas. Escribe las instrucciones de un proyecto (o de un GPT, si tu empresa aún lo permite) que las responda."
  require: [contexto, tono, formato, limites]
  extra:
    - label: Decir qué archivos debe usar
      any: ["archivo", "documento", "he subido", "adjunt", "conocimiento"]
      hint: "Di qué archivos debe consultar: «usa el reglamento y el calendario que he subido»."
    - label: Decir qué hacer si no sabe algo
      any: ["si no esta", "si no lo sabes", "si no aparece", "si falta", "si te falta", "no inventes"]
      hint: "Indica qué debe hacer cuando el dato no está en los archivos."
  sample: "Llevo la gestión de un club de pádel de Murcia con 200 socios. Eres su asistente. Respondes dudas de los socios sobre reservas, cuotas y torneos. Usa solo los documentos que he subido: el reglamento del club y el calendario de la temporada. Tono cercano y educado, respuestas de como máximo cinco líneas. Si el dato no está en los archivos, no inventes: di que escriban a la secretaría del club. No des datos de otros socios."
deeper: null
tool: constructor-de-peticiones
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-23
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-planes]
---

## La idea

Un GPT era la forma de dejar ChatGPT preparado para una tarea. Ese «asistente a medida» se monta **sin programar** y sus piezas sirven en cualquier sitio:

- **Instrucciones.** Lo más importante: para quién es, qué hace, cómo responde y **qué hace cuando no sabe algo**.
- **Archivos de referencia.** Pocos, actualizados y sin datos personales.
- **Peticiones de ejemplo.** Tres frases que enseñan qué pedirle (en los GPTs, «frases de inicio»). Funcionan como una **plantilla de prompt**: una petición con huecos que solo rellenas.

**Dónde montarlo hoy:**

- **Cuenta personal** (gratis o de pago): ya **no se pueden crear GPTs nuevos**. Usa un **proyecto de ChatGPT**, que guarda instrucciones, archivos y chats de un mismo asunto.
- **Espacio de trabajo de empresa o educación:** puede que aún se creen GPTs si el administrador lo permite, pero OpenAI está cerrando su creación y propone los **plugins**, que pueden llevar instrucciones reutilizables («skills»). Qué puedes crear depende de tu plan y de tu empresa.

Bien escritas, las piezas **no se pierden**: las pegas donde toque.

## En la práctica

1. Escribe las instrucciones como si se las dieras a una persona nueva.
2. Crea el proyecto, pega las instrucciones y sube solo los archivos que debe consultar.
3. Prueba con preguntas reales, incluidas algunas cuya respuesta no está en los archivos.
4. Corrige las instrucciones donde falle y vuelve a probar.

> Prueba (como instrucciones del proyecto): «Respondes dudas de familias de una academia de idiomas. Usa solo el calendario y las normas que he subido. Tono amable, máximo seis líneas. Si el dato no está en los archivos, no lo inventes: di que llamen a secretaría».

## Error frecuente

Darlo por bueno tras una sola prueba: las invenciones salen con las preguntas que no esperabas.

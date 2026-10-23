---
title: Crear un GPT sin programar
description: "Las piezas de un GPT (instrucciones, archivos, frases de inicio y funciones), quién puede crearlo hoy y cómo probarlo antes de usarlo."
level: basico
track: gpt-gpts
order: 303
skills: [gpt-crear-gpts, gpt-instrucciones]
terms: [gpt-personalizado, plantilla-de-prompt, plugin-de-chatgpt]
hook: "En tu oficina cada compañero pide a ChatGPT las respuestas a clientes a su manera y salen todas distintas. ¿Se puede dejar preparado una vez para todos?"
takeaway: "Un GPT se monta escribiendo, no programando: instrucciones claras, pocos archivos buenos y frases de inicio, y se prueba antes de compartirlo. Hoy solo se crean en espacios de trabajo de empresa o educación que lo permitan."
scenario:
  kind: empresa
  label: Caso práctico
  title: Las respuestas de la academia de Aitana
  body: "Aitana trabaja en una academia de idiomas de Bilbao con plan de empresa de ChatGPT. Crea un GPT para responder dudas de familias: escribe las instrucciones, sube el calendario y las normas del curso y pone tres frases de inicio. Antes de compartirlo, lo prueba con diez preguntas reales y corrige dos respuestas que inventaban horarios."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-gp03-q1
    q: "Pablo tiene ChatGPT Plus en su cuenta personal y quiere crear un GPT para su tienda. ¿Qué es lo más realista hoy?"
    options: ["Crearlo desde el móvil", "Saber que en cuentas personales ya no se pueden crear GPTs nuevos y guardar esas instrucciones en un proyecto", "Pagar un plan personal más caro"]
    answer: 1
    explain: "OpenAI ya no permite crear GPTs nuevos en cuentas personales, ni gratis ni de pago. Subir de plan tienta, pero no lo cambia. Las mismas instrucciones y archivos sirven en un proyecto."
  - type: choice
    id: gpt-gp03-q2
    q: "Aitana prueba su GPT y ve que se inventa un horario que no está en sus archivos. ¿Qué cambia primero?"
    options: ["Añade a las instrucciones: «Responde solo con la información de los archivos; si no está, di que lo consulten en secretaría»", "Sube veinte archivos más por si acaso", "Lo comparte igual: ya lo corregirán las familias"]
    answer: 0
    explain: "Una instrucción clara sobre qué hacer cuando falta un dato corta la invención. Subir más archivos tienta, pero mezcla información y no le dice qué hacer cuando no sabe."
  - type: truefalse
    id: gpt-gp03-q3
    q: "Conviene probar un GPT con preguntas reales antes de compartirlo."
    answer: true
    explain: "La vista previa sirve para eso: ver cómo responde, encontrar lo que se inventa y ajustar las instrucciones antes de que lo use otra persona."
tips:
  - "Escribe en las instrucciones qué hacer cuando no sabe algo: es la línea que más errores evita."
  - "Las frases de inicio enseñan a los demás qué pedirle; ponlas como las escribiría un usuario."
  - "Desactiva las funciones que el GPT no necesita, como crear imágenes en uno de respuestas a clientes."
action:
  title: Escribe las instrucciones de tu asistente
  steps:
    - "Elige una tarea que repites con el mismo formato."
    - "Escribe sus instrucciones: para quién es, qué hace, cómo responde y qué hace si le falta un dato."
    - "Si tu espacio de trabajo permite crear GPTs, móntalo y pruébalo; si no, pega esas instrucciones en un proyecto."
    - "Guarda las instrucciones en «Mi kit de ChatGPT»."
  check: He escrito y probado las instrucciones de un asistente para una tarea que repito
practice:
  task: "Llevas la gestión de un club de pádel y las dudas de los socios son siempre las mismas. Escribe las instrucciones de un GPT (o de un proyecto) que las responda."
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
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-planes]
---

## La idea

Un GPT se crea **sin programar**, escribiendo. Sus piezas:

- **Nombre y descripción.** Qué hace, en una frase.
- **Instrucciones.** Lo más importante: para quién es, qué hace, cómo responde y **qué hace cuando no sabe algo**.
- **Conocimiento.** Archivos de referencia: pocos, actualizados y sin datos personales.
- **Frases de inicio.** Ejemplos de peticiones que el usuario puede pulsar para empezar.
- **Funciones.** Búsqueda web, creación de imágenes, análisis de datos… Activa solo las que necesita.

**Quién puede crearlo hoy:** solo en los espacios de trabajo **Business, Enterprise y Edu**, si el administrador lo permite, y desde la web (en el móvil se usan, no se crean). En las **cuentas personales**, gratis o de pago, **ya no se pueden crear GPTs nuevos**. OpenAI prevé retirarlos y propone los **plugins**; en algunos espacios de empresa la creación se cierra antes de la retirada. Compruébalo en el centro de ayuda y en la página de planes, porque cambia.

Si no puedes crear un GPT, no pierdes nada: **unas buenas instrucciones** valen igual en un proyecto de ChatGPT o en tu kit de peticiones.

## En la práctica

En el editor de GPTs puedes **describir lo que quieres conversando** o **rellenar cada campo** tú. Lo segundo da más control.

1. Escribe las instrucciones como si se las dieras a una persona nueva.
2. Sube solo los archivos que debe consultar.
3. Añade tres frases de inicio.
4. Usa la **vista previa** con preguntas reales, incluidas algunas difíciles.
5. Corrige las instrucciones donde falle y vuelve a probar.

> Prueba (como instrucciones): «Respondes dudas de familias de una academia de idiomas. Usa solo el calendario y las normas que he subido. Tono amable, máximo seis líneas. Si el dato no está en los archivos, no lo inventes: di que llamen a secretaría».

## Error frecuente

Dar por bueno el GPT tras una sola prueba. Las invenciones salen con las preguntas que no esperabas.

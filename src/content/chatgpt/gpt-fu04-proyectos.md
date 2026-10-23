---
title: "Proyectos: un tema, un sitio"
description: Qué es un proyecto en ChatGPT, cuándo crear uno, cómo usar sus instrucciones, archivos y memoria, y cómo compartirlo con otras personas.
level: basico
track: gpt-funciones
order: 204
skills: [gpt-proyectos-memoria, gpt-instrucciones]
terms: [proyecto-de-chatgpt, memoria-de-chatgpt, instrucciones-personalizadas]
hook: "Llevas un mes usando ChatGPT para buscar piso: tienes chats sueltos con anuncios, cuentas y correos al casero, y cada vez le vuelves a explicar tu presupuesto. ¿Cómo lo juntas todo?"
takeaway: Un proyecto agrupa los chats, los archivos y unas instrucciones de un mismo asunto. Créalo cuando vayas a volver al tema muchas veces.
scenario:
  kind: producto
  label: Caso práctico
  title: La mudanza de Andrés y Aurora
  body: "Andrés y Aurora se mudan a Burgos en enero. Andrés crea un proyecto llamado «Mudanza», sube la lista de muebles y tres presupuestos de empresas de mudanzas, y escribe unas instrucciones: «Somos dos, presupuesto máximo de 1.500 €, respuestas cortas». Comparte el proyecto con Aurora para que ella también pregunte."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-fu04-q1
    q: "Eduardo escribe cada semana con ChatGPT una entrada para el blog de su huerto urbano: siempre el mismo tono, el mismo público y sus notas de cultivo. Ahora lo explica de nuevo en cada chat. ¿Qué le conviene?"
    options: ["Seguir así: es lo más rápido", "Crear un proyecto con esas instrucciones y sus notas subidas", "Escribir todas las entradas en un único chat larguísimo"]
    answer: 1
    explain: "Es un tema al que vuelve siempre, con un documento de referencia: justo para lo que sirve un proyecto. El chat único tienta, pero en conversaciones muy largas ChatGPT acaba perdiendo detalles del principio."
  - type: truefalse
    id: gpt-fu04-q2
    q: "Un proyecto compartido también usa lo que ChatGPT recuerda de tus otros chats."
    answer: false
    explain: "Los proyectos compartidos solo usan lo que hay dentro del proyecto. Tienta pensar que la otra persona verá tus recuerdos, pero la memoria de tus demás chats queda fuera."
  - type: choice
    id: gpt-fu04-q3
    q: "Yolanda comparte con su hermano el proyecto de la boda, pero no quiere que él cambie las instrucciones ni los archivos. ¿Qué acceso le da?"
    options: ["Acceso para editar", "Acceso solo para chatear", "Su contraseña de ChatGPT"]
    answer: 1
    explain: "Con acceso para chatear puede usar el proyecto, pero no cambiarlo. Dar acceso de edición tienta por comodidad, pero le deja tocarlo todo. La contraseña no se comparte nunca."
tips:
  - "Escribe instrucciones cortas: quién eres, qué buscas y cómo quieres las respuestas."
  - "Antes de compartir un proyecto, revisa qué archivos tiene: la otra persona verá todo lo que hay dentro."
action:
  title: Crea un proyecto para algo que repites
  steps:
    - "Piensa en un tema al que vuelves a menudo (estudios, una mudanza, una afición, tu trabajo)."
    - "Crea un proyecto con ese nombre y escribe tres líneas de instrucciones."
    - "Sube un archivo de referencia y abre un chat dentro para probarlo."
    - "Copia tus instrucciones en «Mi kit de ChatGPT»."
  check: He creado un proyecto con instrucciones y al menos un archivo
practice:
  task: "Organizas con dos amigas la despedida de soltera de otra amiga en Cádiz y vais a usar ChatGPT durante semanas. Escribe las instrucciones del proyecto."
  require: [contexto, formato, limites]
  extra:
    - label: "Decir qué archivos debe usar"
      any: ["archivo", "documento", "he subido", "adjunt"]
      hint: "Di qué archivos del proyecto tiene que consultar: «usa la lista de preferencias que he subido»."
  sample: "Estamos organizando entre tres amigas una despedida de soltera en Cádiz para diez personas, un fin de semana de junio. En este proyecto, ayúdanos a planificar actividades, comidas y transporte. Usa los archivos que he subido: la lista de preferencias del grupo y el presupuesto máximo por persona. Responde en listas cortas, con un máximo de tres opciones cada vez. No reserves ni des nada por confirmado: si te falta un dato, pregúntame."
deeper: null
tool: constructor-de-peticiones
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda]
---

## La idea

Un **proyecto** es una carpeta de trabajo dentro de ChatGPT. Junta tres cosas:

- **Chats.** Todas las conversaciones de un mismo asunto, en un sitio.
- **Archivos.** Documentos de referencia (un temario, unos presupuestos, tus apuntes) que ChatGPT tiene a mano en cada chat del proyecto.
- **Instrucciones.** Un texto fijo que sigue en todos los chats de ese proyecto: tu situación, tu objetivo, cómo quieres las respuestas.

Además:

- **Memoria del proyecto.** Según el plan, puedes elegir que el proyecto solo use lo que hay dentro de él, sin lo que ChatGPT recuerda de tus otros chats. Así un tema delicado no se mezcla. Los proyectos compartidos funcionan siempre así.
- **Se puede compartir**, en planes gratis y de pago, con dos tipos de acceso: **editar** (cambiar instrucciones y archivos) o **solo chatear** (usarlo sin cambiarlo).
- **Hay límites** de archivos y de personas según el plan. Míralos en el centro de ayuda de OpenAI.

## En la práctica

**Cuándo crear uno:** si vas a volver al mismo tema muchas veces o tienes documentos que ChatGPT debe consultar siempre.

1. Crea el proyecto desde la barra lateral y ponle un nombre claro.
2. Escribe las instrucciones.
3. Sube los archivos clave.
4. Abre un chat nuevo por tarea, dentro del proyecto.

> Prueba (como instrucciones del proyecto): «Estoy preparando el trabajo de fin de grado sobre turismo rural en Asturias. Usa los artículos que he subido como fuentes principales y di de cuál sale cada dato. Explícame con ejemplos sencillos y no escribas el trabajo por mí: ayúdame a ordenar ideas y a revisar lo que yo escriba».

## Error frecuente

Meter en un mismo proyecto temas que no tienen nada que ver. Un proyecto por asunto: así las instrucciones encajan.

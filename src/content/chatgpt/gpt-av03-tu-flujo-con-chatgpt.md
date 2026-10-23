---
title: Tu primer flujo de trabajo
description: "Cierre del Nivel 1: convierte una tarea que repites en un flujo por pasos, con un punto de control tuyo, guárdalo en «Mi kit de ChatGPT» y mira qué trae el Nivel 2."
level: basico
track: gpt-avanzado
order: 803
skills: [gpt-automatizar, gpt-instrucciones, gpt-verificar]
terms: [flujo-de-trabajo, plantilla-de-prompt, tareas-programadas-chatgpt]
hook: "Cada semana usas ChatGPT para lo mismo, pero cada vez lo haces de una forma distinta y a veces se te escapa un error. ¿Cómo lo conviertes en una rutina que salga bien sin pensarla?"
takeaway: "Un flujo es tu tarea repetida escrita en pasos: qué le das a ChatGPT, qué hace él, en qué paso revisas tú y dónde lo guardas. Apúntalo en «Mi kit de ChatGPT» y repásalo cada mes."
scenario:
  kind: producto
  label: Caso práctico
  title: Las reseñas de la casa rural de Teo
  body: "Teo lleva una casa rural en Albarracín. Antes contestaba cada reseña en un chat nuevo; ahora sigue siempre los mismos pasos: pega la reseña sin el nombre del huésped en su proyecto «Reseñas», que tiene sus instrucciones de tono, y ChatGPT le propone dos respuestas. Teo elige una, comprueba que no promete nada que no pueda cumplir y la publica él."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-av03-q1
    q: "Elsa usa ChatGPT para preparar cada semana la factura de sus clases particulares a partir de sus horas. ¿Dónde pone su punto de control?"
    options: ["Antes de enviarla: comprueba horas, importe y fecha", "Cuando la familia le avisa de que hay un error", "En ningún sitio: unas buenas instrucciones bastan"]
    answer: 0
    explain: "El punto de control sirve si llega antes de que el resultado salga. Fiarse de las instrucciones tienta porque ya funcionaron otras veces, pero ChatGPT puede equivocarse igual con una cifra. Esperar a que avise la familia es revisar cuando ya no tiene arreglo."
  - type: choice
    id: gpt-av03-q2
    q: "Cada semana corriges lo mismo en los textos que te prepara tu proyecto de redes: son demasiado largos y muy formales. ¿Qué haces?"
    options: ["Seguir corrigiéndolos a mano: es cosa de un minuto", "Cambiar las instrucciones del proyecto para que escriba más corto y cercano, y probarlo", "Crear otro proyecto desde cero"]
    answer: 1
    explain: "Si corriges siempre lo mismo, el fallo está en las instrucciones: cámbialas una vez y te lo ahorras cada semana. Corregir a mano tienta por rápido, pero repites el trabajo sin fin. Empezar de cero es más esfuerzo del necesario."
  - type: truefalse
    id: gpt-av03-q3
    q: "Si una tarea programada te ha salido bien diez semanas seguidas, ya no hace falta revisar sus cifras antes de enviarlas."
    answer: false
    explain: "Tienta confiar porque lleva semanas acertando, pero ChatGPT puede equivocarse cualquier semana, y las fuentes o tus datos cambian. Lo que sale con tu nombre, sobre todo cifras y fechas, se revisa siempre."
tips:
  - "Si tu flujo no cabe en seis pasos, son dos flujos: divídelo."
  - "Cuando ChatGPT cambie el nombre o el sitio de una función, actualiza esa línea de tu kit; el resto del flujo suele seguir valiendo."
action:
  title: Convierte una tarea en tu primer flujo
  steps:
    - "Elige la tarea que más repites con ChatGPT y en la que un error se vea fácil."
    - "Envía la petición de ejemplo con esa tarea (sin datos de otras personas) y ajusta los pasos hasta que te convenzan."
    - "Guarda el flujo en «Mi kit de ChatGPT», con tus reglas: qué nunca compartes y qué revisas siempre."
  check: He escrito mi primer flujo con ChatGPT y lo he guardado en mi kit
practice:
  task: "Cada semana contestas las reseñas de tu casa rural. Escribe la petición para que ChatGPT convierta esa tarea en un flujo por pasos: qué le das, qué hace él, qué haces tú y en qué paso revisas."
  require: [contexto, formato, limites]
  extra:
    - label: Pedir en qué paso revisas
      any: [revisar, reviso, revisa, comprobar, compruebo, punto de control]
      hint: "Pide que marque en qué paso revisas tú antes de seguir."
  sample: "Llevo una casa rural pequeña en la sierra de Albarracín y cada semana contesto entre cinco y diez reseñas en las webs de reservas. Convierte esta tarea en un flujo de cinco pasos como máximo, en una tabla con estas columnas: paso, quién lo hace (tú o yo), qué necesito darte y qué reviso antes de seguir. Dime también dónde guardarlo en ChatGPT: un proyecto, una plantilla o una tarea programada. No te daré datos de los huéspedes: no inventes nombres en los ejemplos. Si te falta algo, pregúntame antes de empezar."
deeper: null
tool: plantillas
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-23
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-academy]
---

## La idea

Has llegado al final del Nivel 1. Ya tienes las piezas: peticiones claras, instrucciones, proyectos, plantillas y tareas programadas. Ahora toca unirlas en un **flujo de trabajo**: los mismos pasos cada vez que haces una tarea que repites.

Un buen flujo contesta cuatro preguntas:

- **¿Qué le das?** El texto, los datos o el archivo, sin nombres ni datos de otras personas.
- **¿Qué hace ChatGPT?** Preparar, resumir, proponer, ordenar.
- **¿Dónde revisas tú?** El **punto de control**: el paso en el que miras cifras, fechas, nombres y promesas **antes** de enviar o publicar. Sin él, no es un flujo, es una apuesta.
- **¿Dónde vive?** En unas instrucciones, un proyecto, una plantilla o una tarea programada.

Fuera del flujo quedan siempre las contraseñas, los datos de salud o bancarios de terceros y las decisiones de un médico, un abogado o un asesor. Empieza por **una sola tarea**; cuando salga bien sin pensarla, añade otra.

Tu kit también envejece: ChatGPT cambia funciones y nombres a menudo (el antiguo agente, por ejemplo, es hoy ChatGPT Work). Repásalo cada mes.

**¿Y después?** El **Nivel 2** profundiza en pedir a fondo, proyectos y asistentes, investigar y analizar, crear contenidos, conectar y automatizar, ChatGPT en tu oficio y en equipo. Termina con un proyecto: tu flujo completo. OpenAI también ofrece recursos gratuitos en su OpenAI Academy.

## En la práctica

1. Escribe la tarea tal como la haces hoy, paso a paso.
2. Marca tu punto de control.
3. Guarda lo que se repite en su sitio y el flujo en «Mi kit de ChatGPT».

> Prueba: «Te describo una tarea que repito cada semana: [TU TAREA]. Conviértela en un flujo de cinco pasos como máximo. En cada paso dime quién lo hace (tú o yo), qué necesitas que te dé y en qué paso tengo que revisar antes de seguir. Pregúntame lo que te falte antes de empezar.»

## Error frecuente

Poner el punto de control al final, cuando ya está enviado. Revisa antes de que salga: después solo puedes pedir disculpas.

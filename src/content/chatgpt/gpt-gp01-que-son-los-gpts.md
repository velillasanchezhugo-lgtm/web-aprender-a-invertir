---
title: Qué es un GPT
description: "Qué es un GPT personalizado (instrucciones, conocimiento y funciones), para qué sirve, para qué no y qué cambia ahora que OpenAI prevé retirarlos."
level: basico
track: gpt-gpts
order: 301
skills: [gpt-usar-gpts]
terms: [gpt-personalizado, tienda-de-gpts, plugin-de-chatgpt]
hook: "Un compañero te pasa el enlace de un GPT «para hacer actas en dos minutos». ¿Qué es eso exactamente y en qué se diferencia de un chat normal?"
takeaway: Un GPT es ChatGPT con unas instrucciones fijas, unos archivos de referencia y unas funciones elegidas por quien lo creó. Ahorra repetir lo mismo, pero no sabe más que ChatGPT y puede equivocarse igual.
scenario:
  kind: producto
  label: Caso práctico
  title: El GPT de las actas de Rocío
  body: "Rocío es secretaria de su comunidad de vecinos en Zaragoza. Un vecino le pasa un GPT para redactar actas. Lo abre, ve que solo le pide las notas de la reunión y le devuelve el acta con un formato fijo. Le ahorra explicar el formato cada vez, pero sigue revisando los acuerdos y los nombres antes de enviarla."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-gp01-q1
    q: "Un GPT de «asesor fiscal» responde con mucha seguridad sobre tu declaración de la renta. ¿Qué es lo correcto?"
    options: ["Fiarte: está especializado en impuestos", "Tomarlo como orientación y comprobarlo en la web de la Agencia Tributaria o con un profesional", "Preguntarle si está seguro y, si dice que sí, darlo por bueno"]
    answer: 1
    explain: "Un GPT es ChatGPT con instrucciones y archivos: puede equivocarse igual y no sustituye a un profesional. El nombre «asesor» tienta a fiarse, pero cualquiera puede ponérselo. Preguntarle si está seguro no comprueba nada."
  - type: truefalse
    id: gpt-gp01-q2
    q: "Un GPT tiene sus propias instrucciones fijas, así que no hace falta repetirle en cada chat para qué sirve."
    answer: true
    explain: "Esa es su ventaja: quien lo crea deja escritas las instrucciones y los archivos de referencia una vez. Tú solo le das lo que cambia en cada caso, como las notas de la reunión."
  - type: choice
    id: gpt-gp01-q3
    q: "Daniel usa cada día un GPT para preparar menús semanales. Lee que OpenAI prevé retirar los GPTs. ¿Qué hace?"
    options: ["Nada: los GPTs no se retiran nunca", "Guarda en una nota las instrucciones y peticiones que le funcionan, y revisa en el centro de ayuda las fechas y la alternativa", "Deja de usar ChatGPT"]
    answer: 1
    explain: "OpenAI ha anunciado que prevé retirarlos y pasar a los plugins; las fechas dependen del plan. Lo que vale es tu forma de pedir, y esa se guarda en una nota. Dejar ChatGPT es exagerado: lo demás sigue igual."
tips:
  - "Si un GPT solo te ahorra escribir dos líneas, una buena petición en un chat normal hace lo mismo."
  - "Antes de usar un GPT para algo serio, mira quién lo ha hecho y qué funciones tiene: lo verás en la sesión siguiente."
action:
  title: Prueba un GPT con una tarea pequeña
  steps:
    - "Abre la sección de GPTs de ChatGPT y busca uno de un tema que te interese (recetas, idiomas, viajes)."
    - "Mira su descripción: qué dice que hace y quién lo ha creado."
    - "Pruébalo con una tarea sin datos personales y compara el resultado con una petición tuya en un chat normal."
  check: He probado un GPT y lo he comparado con una petición mía
practice:
  task: "Un GPT de recetas te gusta, pero quieres hacer lo mismo en un chat normal. Escribe la petición que le darías a ChatGPT para tener el menú semanal de tu casa."
  require: [contexto, formato, limites]
  extra: []
  sample: "En mi casa somos cuatro, dos adultos y dos niños de 8 y 11 años, y uno no come pescado. Prepara un menú de comidas y cenas de lunes a viernes, en una tabla, con platos sencillos de menos de 30 minutos y la lista de la compra agrupada por secciones del súper. Sin ingredientes caros ni difíciles de encontrar en España. Si te falta algún dato, pregúntame antes."
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-noticias]
---

## La idea

Un **GPT personalizado** (o simplemente «GPT») es una versión de ChatGPT preparada para una tarea. Quien lo crea le da tres cosas:

- **Instrucciones.** Un texto fijo que dice qué hace, cómo responde y qué no debe hacer.
- **Conocimiento.** Archivos de referencia (un manual, una carta de productos, unas normas) que el GPT consulta.
- **Funciones.** Las capacidades que puede usar: buscar en la web, crear imágenes, analizar datos o conectarse a servicios externos.

**Para qué sirve:** tareas que se repiten con el mismo formato (actas, menús, correos tipo) o que necesitan siempre los mismos documentos. Ahorra explicar lo mismo cada vez.

**Para qué no:**

- **No sabe más que ChatGPT.** Usa el mismo modelo. Si se inventa algo, lo hace igual.
- **No es un profesional.** Un GPT llamado «abogado» o «nutricionista» no lo es. Cualquiera puede ponerle ese nombre.
- **No es de OpenAI** (salvo algunos). La mayoría los crean personas y empresas.

**Lo que ha cambiado:** OpenAI ha anunciado que **prevé retirar los GPTs** y propone pasarlos a los **plugins**, paquetes que juntan instrucciones reutilizables y apps conectadas. Ya **no se pueden crear GPTs nuevos en las cuentas personales** (gratis y de pago); los que existen se siguen usando hasta su retirada, con fechas que dependen del plan. Compruébalo en el centro de ayuda de OpenAI.

## En la práctica

Los GPTs están en su propia sección de ChatGPT, la **tienda de GPTs**, y también se abren desde un enlace. Cuando uses uno:

1. Lee su descripción y quién lo ha creado.
2. Dale solo lo que cambia: las notas, el texto, la pregunta.
3. Revisa el resultado como revisarías cualquier respuesta de ChatGPT.

Si ves que siempre pides lo mismo, guarda tu petición: te servirá con o sin GPT.

> Prueba: «Te paso mis notas de la reunión de vecinos. Redacta el acta con fecha, asistentes, orden del día y acuerdos, en un tono formal. No inventes acuerdos: si algo no está claro, márcalo con [REVISAR]».

## Error frecuente

Creer que un GPT con nombre de experto da respuestas fiables. Es ChatGPT con instrucciones: compruébalo igual.

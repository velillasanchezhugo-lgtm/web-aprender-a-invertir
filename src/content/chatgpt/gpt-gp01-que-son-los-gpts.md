---
title: Qué es un GPT
description: "Qué es un GPT personalizado (instrucciones, conocimiento y funciones), para qué sirve, para qué no y qué cambia ahora que OpenAI prevé retirarlos."
level: basico
track: gpt-gpts
order: 301
skills: [gpt-usar-gpts]
terms: [gpt-personalizado, tienda-de-gpts, plugin-de-chatgpt]
hook: "Un amigo te pasa el enlace de un GPT «para adaptar tu currículum a cada oferta». ¿Qué es eso exactamente, en qué se diferencia de un chat normal y te servirá dentro de unos meses?"
takeaway: Un GPT es ChatGPT con unas instrucciones fijas, unos archivos de referencia y unas funciones elegidas por quien lo creó. Ahorra repetir lo mismo, pero no sabe más que ChatGPT y OpenAI prevé retirarlos, así que lo que vale es tu forma de pedir.
scenario:
  kind: producto
  label: Caso práctico
  title: El GPT del currículum de Eneko
  body: "Eneko busca trabajo de administrativo en Logroño. Un amigo le pasa un GPT que adapta el currículum a cada oferta. Lo abre, ve que solo le pide la oferta y el currículum, y le devuelve la experiencia reordenada. Le ahorra explicar lo mismo cada vez, pero antes quita su teléfono y su DNI, y después comprueba que no le haya inventado tareas ni fechas."
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
    explain: "Esa es su ventaja: quien lo crea deja escritas las instrucciones y los archivos de referencia una vez. Tú solo le das lo que cambia en cada caso, como la oferta de trabajo."
  - type: choice
    id: gpt-gp01-q3
    q: "Jacinto usa cada día un GPT para preparar menús semanales. Ve un aviso de que OpenAI va a retirar los GPTs. ¿Qué hace?"
    options: ["Nada: seguirá funcionando siempre", "Guarda en una nota las instrucciones y peticiones que le funcionan, y mira en el aviso o en el centro de ayuda la fecha y la alternativa", "Deja de usar ChatGPT"]
    answer: 1
    explain: "OpenAI ha anunciado que retirará los GPTs y propone los plugins; las fechas dependen del plan. Lo que vale es su forma de pedir, y esa se guarda en una nota y sirve en un chat o en un proyecto. Dejar ChatGPT es exagerado: lo demás sigue igual."
tips:
  - "Si un GPT solo te ahorra escribir dos líneas, una buena petición en un chat normal hace lo mismo y no depende de que lo retiren."
  - "Antes de usar un GPT para algo serio, mira quién lo ha hecho y qué funciones tiene: lo verás en la sesión siguiente."
action:
  title: Prueba un GPT y quédate con lo que funciona
  steps:
    - "Abre la sección de GPTs de ChatGPT y busca uno de un tema que te interese (recetas, idiomas, viajes)."
    - "Mira su descripción: qué dice que hace y quién lo ha creado."
    - "Pruébalo con una tarea sin datos personales y compara el resultado con una petición tuya en un chat normal."
    - "Si te ha gustado, apunta en «Mi kit de ChatGPT» la petición que le hiciste."
  check: He probado un GPT, lo he comparado con una petición mía y he guardado la que funciona
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
reviewed: 2026-10-23
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-noticias]
---

## La idea

Un **GPT personalizado** (o simplemente «GPT») es una versión de ChatGPT preparada para una tarea. Quien lo crea le da tres cosas:

- **Instrucciones.** Un texto fijo que dice qué hace, cómo responde y qué no debe hacer.
- **Conocimiento.** Archivos de referencia (un manual, una carta de productos, unas normas) que el GPT consulta.
- **Funciones.** Las capacidades que puede usar: buscar en la web, crear imágenes, analizar datos o conectarse a servicios externos.

**Para qué sirve:** tareas que se repiten con el mismo formato (currículums, menús, correos tipo) o que necesitan siempre los mismos documentos. Ahorra explicar lo mismo cada vez.

**Para qué no:**

- **No sabe más que ChatGPT.** Usa los mismos modelos. Si se inventa algo, lo hace igual.
- **No es un profesional.** Un GPT llamado «abogado» o «nutricionista» no lo es. Cualquiera puede ponerle ese nombre.
- **No es de OpenAI** (salvo algunos). La mayoría los crean personas y empresas.

**Lo que ha cambiado:** en septiembre de 2026 OpenAI anunció que **retirará los GPTs** y propone pasarlos a los **plugins**, paquetes que juntan instrucciones reutilizables y conexiones con otras apps. Ya **no se pueden crear GPTs nuevos en las cuentas personales** (gratis y de pago). Los que existen se siguen usando hasta su retirada; las fechas dependen del plan (en algunas empresas, diciembre de 2026) y ChatGPT las avisa. Compruébalo en el centro de ayuda de OpenAI.

## En la práctica

Los GPTs están en su propia sección de ChatGPT, la **tienda de GPTs**, y también se abren desde un enlace. Cuando uses uno:

1. Lee su descripción y quién lo ha creado.
2. Dale solo lo que cambia: la oferta, el texto, la pregunta.
3. Revisa el resultado como revisarías cualquier respuesta de ChatGPT.

Si ves que siempre pides lo mismo, **guarda tu petición**: te servirá en un chat normal o en un proyecto cuando el GPT ya no esté.

> Prueba: «Te pego una oferta de auxiliar administrativo y mi currículum sin datos de contacto. Adapta el apartado de experiencia a la oferta, en viñetas. No inventes puestos, tareas ni fechas: si algo de la oferta no encaja con mi experiencia, dímelo en vez de rellenarlo».

## Error frecuente

Creer que un GPT con nombre de experto da respuestas fiables. Es ChatGPT con instrucciones: compruébalo igual.

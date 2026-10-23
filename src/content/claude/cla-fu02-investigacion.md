---
title: La investigación a fondo
description: Qué hace la función de investigación (Research) de Claude, para qué preguntas compensa, cuánto tarda y cómo leer su informe con espíritu crítico.
level: basico
track: cla-funciones
order: 202
skills: [cla-busqueda, cla-verificar]
terms: [investigacion-a-fondo, busqueda-web]
hook: "Quieres comparar en serio tres ciudades para irte a estudiar un máster: alquileres, transporte, ambiente. Una búsqueda rápida te da cuatro datos sueltos. ¿Hay algo mejor?"
takeaway: La investigación a fondo sirve para preguntas amplias que necesitarían horas de búsqueda; tarda minutos, entrega un informe con fuentes y hay que revisarlo como el trabajo de un becario listo.
scenario:
  kind: producto
  label: Caso práctico
  title: El máster de Julián
  body: "Julián duda entre estudiar en Valencia, Granada o Zaragoza. Con un plan de pago, activa la investigación y pide comparar el coste de una habitación, el transporte y las becas de cada ciudad. Al rato recibe un informe con tablas y enlaces. Abre las cifras de alquiler: una es de hace tres años. Le pide a Claude que la actualice y lo señale."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-fu02-q1
    q: "¿Para cuál de estas preguntas compensa más usar la investigación a fondo?"
    options: ["¿Qué hora es en Tokio?", "¿Qué ayudas públicas existen en España para reformar una vivienda y quién puede pedirlas?", "Reescribe este correo en un tono más amable"]
    answer: 1
    explain: "Es una pregunta amplia, con muchas fuentes y requisitos que comparar. La hora tiene una respuesta corta y el correo no necesita buscar nada: ahí la investigación solo gasta tiempo y uso del plan."
  - type: truefalse
    id: cla-fu02-q2
    q: "Como el informe es largo y está lleno de citas, puedes copiar sus conclusiones en un trabajo sin revisarlas."
    answer: false
    explain: "La extensión no garantiza que sea correcto. Revisa las cifras y las afirmaciones clave en sus fuentes. Tienta fiarse porque «parece profesional», pero puede citar páginas viejas o mezclar datos."
  - type: choice
    id: cla-fu02-q3
    q: "Ana tiene el plan gratuito y no encuentra la opción de investigación. ¿Qué es lo más probable?"
    options: ["Que tenga que actualizar la aplicación", "Que la función sea de los planes de pago; puede usar la búsqueda web normal", "Que esté bloqueada en España"]
    answer: 1
    explain: "Hoy la investigación está en los planes de pago. La búsqueda web normal sí está en el gratuito. Actualizar la aplicación tienta, pero no cambia lo que incluye tu plan."
tips:
  - "Antes de lanzarla, deja claro el alcance: país, años, qué fuentes prefieres y qué formato quieres al final."
  - "Pide al final una lista de «datos que no he podido confirmar»: es la parte más útil para revisar."
action:
  title: Prepara una buena pregunta de investigación
  steps:
    - "Elige una duda amplia de tu vida real (un viaje, una compra grande, un trámite, un curso)."
    - "Escríbela con alcance, fuentes y formato, como en el ejemplo de «En la práctica»."
    - "Si tienes plan de pago, lánzala y revisa tres cifras del informe en sus fuentes. Si no, pruébala con la búsqueda web normal."
    - "Guarda la pregunta en «Mi kit de Claude»."
  check: He preparado una pregunta de investigación y he revisado al menos una fuente del resultado
practice:
  task: "Tu comunidad de vecinos quiere montar un huerto en la azotea y nadie sabe qué permisos ni ayudas hay. Escribe una petición de investigación bien acotada: lugar, fechas, fuentes y formato del informe."
  require: [formato, verificar, limites]
  extra:
    - label: "Acotar lugar y fechas"
      any: ["espana", "202", "ultimos", "anos", "comunidad autonoma", "ciudad"]
      hint: "Acota el alcance: país o ciudad y de qué años quieres los datos."
    - label: "Pedir lo que no ha podido confirmar"
      any: ["no has podido", "no hayas podido", "sin confirmar", "no puedas confirmar", "no confirmad"]
      hint: "Pide al final una lista de lo que no ha podido confirmar: es lo primero que revisarás."
  sample: "Investiga y prepárame un informe sobre qué hace falta para montar un huerto urbano en la azotea de una comunidad de vecinos en España. Céntrate en los últimos tres años y en Madrid, Barcelona y Valencia. Quiero saber qué permisos piden los ayuntamientos, si hay ayudas públicas y qué problemas han tenido otras comunidades. Usa fuentes oficiales y medios conocidos, cita cada dato y no incluyas blogs comerciales. Pon una tabla por ciudad y termina con una lista de lo que no has podido confirmar."
deeper: null
tool: constructor-de-peticiones
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [claude-ayuda, claude-planes]
---

## La idea

La **búsqueda web** normal hace una o pocas consultas y responde en segundos. La **investigación a fondo** (en la aplicación se llama **«Research»**) va más lejos: encadena muchas búsquedas, cada una basada en lo que encontró la anterior, mira la pregunta desde varios ángulos y te entrega un **informe con citas**.

Lo que conviene saber:

- **Para qué sirve.** Preguntas amplias que te llevarían horas: comparar opciones, reunir requisitos de varias fuentes, ponerte al día de un tema.
- **Para qué no.** Datos sueltos, textos que redactar o preguntas con una respuesta corta.
- **Cuánto tarda.** Desde unos minutos hasta bastante más en temas muy amplios. No es una respuesta al instante.
- **Qué gasta.** Consume tu límite de uso más deprisa que un chat normal.
- **Dónde está.** Solo en los **planes de pago**, en la web, el escritorio y el móvil. Necesita la búsqueda web activada.
- **Qué más consulta.** Si tienes conectadas otras aplicaciones (por ejemplo, tu correo o tus documentos), también puede buscar en ellas desde la web o el escritorio; desde el móvil, solo busca en internet.

## En la práctica

1. Ábrela desde el menú de herramientas del chat (el botón «+»), o pide a Claude que use la herramienta de investigación.
2. Escribe una pregunta con **alcance claro**. Claude puede hacerte alguna pregunta antes de empezar.
3. Al recibir el informe, léelo así:
   - ¿Las cifras clave llevan cita? Abre tres.
   - ¿De qué fecha son las fuentes?
   - ¿Son oficiales o blogs?
   - ¿Hay conclusiones sin ninguna fuente detrás?

> Prueba: «Investiga qué ayudas públicas hay en España en 2026 para cambiar las ventanas de un piso y ahorrar energía. Distingue entre ayudas estatales y de comunidades autónomas, usa fuentes oficiales, pon una tabla con requisitos y plazos, y termina con una lista de lo que no has podido confirmar».

Un informe así es un buen **punto de partida**. Si la decisión es importante (dinero, salud, papeles), confírmala con la fuente oficial o con un profesional.

## Error frecuente

Lanzar una pregunta vaga («háblame de becas») y fiarse del informe porque es largo. Pregunta concreta, lectura crítica.

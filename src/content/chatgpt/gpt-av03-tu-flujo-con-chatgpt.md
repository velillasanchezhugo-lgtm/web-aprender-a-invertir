---
title: Tu flujo semanal con ChatGPT
description: "Cierre del Nivel 1: reparte tu semana (qué hace ChatGPT, qué haces tú y qué revisas), actualiza «Mi kit de ChatGPT» y mira qué trae el Nivel 2."
level: basico
track: gpt-avanzado
order: 803
skills: [gpt-automatizar, gpt-instrucciones, gpt-verificar]
terms: [flujo-de-trabajo, plantilla-de-prompt, tareas-programadas-chatgpt]
hook: "Ya sabes pedir bien, usar proyectos y plantillas, y programar tareas. Pero si mañana alguien te pregunta qué parte de tu semana hace ChatGPT, ¿sabrías contestar?"
takeaway: "Un buen flujo reparte papeles: ChatGPT prepara, busca y redacta; tú decides, envías y revisas lo que importa. Escríbelo en «Mi kit de ChatGPT» y revísalo cada mes."
scenario:
  kind: producto
  label: Caso práctico
  title: La casa rural de Teo
  body: "Teo lleva una casa rural en Albarracín. Su flujo: el lunes, ChatGPT le prepara las respuestas a las reseñas y él las corrige antes de publicarlas. El miércoles, en su proyecto «Redes», con sus instrucciones de estilo, ChatGPT redacta la publicación de la semana en tres idiomas. El viernes, ChatGPT ordena en una tabla los gastos que él le pega y Teo la compara con el banco. Los datos de sus huéspedes no entran en el chat."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-av03-q1
    q: "Elsa montó cinco automatizaciones en su primera semana y ya no sabe qué hace cada una. ¿Qué es lo más sensato?"
    options: ["Añadir una sexta que le resuma las otras cinco", "Quedarse con las dos que de verdad usa, apuntarlas en su kit y pausar el resto", "Borrarlas todas y dejar de usar ChatGPT"]
    answer: 1
    explain: "Pocas tareas bien entendidas valen más que muchas olvidadas. Añadir otra tienta porque parece arreglarlo, pero suma más de lo mismo. Abandonar tampoco hace falta: basta con ordenar."
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
    explain: "ChatGPT puede equivocarse cualquier semana, y las fuentes o tus datos cambian. Lo que sale con tu nombre, sobre todo cifras y fechas, se revisa siempre."
tips:
  - "Pon en el calendario una revisión mensual de tu flujo: quita lo que no usas y añade lo que repites."
  - "Si una tarea sale mal dos veces seguidas, vuelve a hacerla a mano y ajusta la petición."
action:
  title: Escribe tu flujo y cierra tu kit
  steps:
    - "Copia la petición de ejemplo en ChatGPT, completa el final con tu semana real (sin datos de otras personas) y envíala."
    - "Pega la tabla resultante en «Mi kit de ChatGPT», junto a tus mejores peticiones."
    - "Añade tus reglas: qué proyectos, plantillas y tareas usas, qué nunca compartes y qué revisas siempre."
  check: He escrito mi flujo semanal con ChatGPT y he actualizado mi kit
practice:
  task: "Llevas una casa rural: reservas, reseñas, redes y gastos. Escribe la petición para que ChatGPT te ayude a repartir la semana entre lo que prepara él, lo que haces tú y lo que revisas."
  require: [contexto, formato, limites]
  extra:
    - label: Pedir qué revisar siempre
      any: [revisar, reviso, revisa, comprobar, compruebo]
      hint: "Pide una columna con lo que tienes que revisar siempre antes de usarlo."
  sample: "Llevo una casa rural pequeña en Teruel. Cada semana contesto unas 15 consultas de reservas, respondo reseñas, publico dos veces en redes y apunto los gastos en una hoja. Organízame la semana en una tabla con estas columnas: día, tarea, lo que me puede dejar preparado ChatGPT, lo que hago yo y lo que reviso antes de usarlo. Señala las tareas que no debería delegar y explica por qué en una frase. No te doy datos de huéspedes."
deeper: null
tool: plantillas
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-academy]
---

## La idea

Has llegado al final del Nivel 1. Ahora toca juntar las piezas en **tu flujo de trabajo**: tu forma fija de usar ChatGPT cada semana. Para cada tarea que repites, contesta tres preguntas:

- **¿Qué hace ChatGPT?** Preparar, buscar, resumir, redactar borradores, ordenar datos.
- **¿Qué haces tú?** Decidir, enviar, publicar, hablar con las personas.
- **¿Qué revisas?** Cifras, fechas, nombres, fuentes y todo lo que sale con tu nombre.

Añade una cuarta lista: **lo que nunca le das**. Contraseñas, datos de salud o bancarios de otras personas, y decisiones que corresponden a un médico, un abogado o un asesor.

Empieza con **dos o tres tareas** que repitas y en las que un error se vea fácil. Dale a cada una su sitio: instrucciones, proyecto, plantilla o tarea programada.

Tu flujo **cambiará**: ChatGPT añade y renombra funciones a menudo, y tus tareas también cambian. Revísalo cada mes.

**¿Y después?** El **Nivel 2** profundiza en peticiones avanzadas, proyectos y GPTs a fondo, investigar y analizar, crear contenidos, conectar y automatizar, ChatGPT en tu oficio y en equipo. Termina con un proyecto: tu propio flujo de trabajo, completo. OpenAI también ofrece recursos gratuitos en su OpenAI Academy.

## En la práctica

1. Apunta las tareas que repites cada semana.
2. Para cada una, decide qué hace ChatGPT, qué haces tú y qué revisas.
3. Guárdalo en «Mi kit de ChatGPT» con tus mejores peticiones y tus reglas.

> Prueba: «Te cuento mi semana de trabajo. Hazme una tabla con cuatro columnas: tarea, qué puede preparar ChatGPT, qué decido o hago yo y qué tengo que revisar siempre. Añade una fila final con lo que no debería darte nunca. Antes de empezar, pregúntame lo que te falte. Mi semana es: …»

## Error frecuente

Querer meter ChatGPT en todo desde el primer día. Empieza por dos tareas, consolídalas y crece desde ahí.

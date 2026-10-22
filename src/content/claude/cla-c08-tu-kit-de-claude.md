---
title: Tu kit de Claude
description: "Cierre del Camino Cero: crea «Mi kit de Claude», una nota con tus 5 peticiones-plantilla, tus ajustes revisados y tus 3 reglas personales."
level: cero
track: cla-cero
order: 8
skills: [cla-plantillas, cla-privacidad, cla-verificar]
terms: [alucinacion, chat-incognito]
hook: "Ya sabes pedir, corregir y comprobar. Pero dentro de un mes, ¿te acordarás de qué te funcionó y de qué no debías compartir?"
takeaway: Una nota corta con tus mejores peticiones y tus reglas te ahorra tiempo cada día y te protege de los errores más comunes. Créala hoy y mejórala cada vez que algo te funcione.
scenario:
  kind: producto
  label: Caso práctico
  title: La nota de Carmen
  body: "Carmen es enfermera y usa Claude para correos, apuntes y la compra de la semana. Antes reescribía las peticiones cada vez. Ahora tiene una nota con cinco plantillas y tres reglas; la primera es «nunca datos de pacientes»."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-c08-q1
    q: "Carmen va a pedir ayuda para escribir sobre un caso del hospital. Su kit dice «nunca datos de pacientes». ¿Cómo lo aplica?"
    options: ["Usa un chat incógnito y escribe el caso tal cual", "Describe la situación sin nombres, edades exactas ni detalles que identifiquen al paciente", "Escribe el caso completo y luego borra la conversación"]
    answer: 1
    explain: "Quitar todo lo que identifica a la persona es lo que protege de verdad. El incógnito y el borrado tientan porque parecen «limpiar» el rastro, pero el texto ya ha salido de tu dispositivo y se conserva un tiempo."
  - type: truefalse
    id: cla-c08-q2
    q: "Una buena plantilla deja huecos para lo que cambia cada vez, como [destinatario] o [tono]."
    answer: true
    explain: "Los huecos te obligan a dar el contexto que Claude no puede adivinar. Tienta guardar peticiones cerradas, pero solo sirven para un caso; con huecos valen para muchos."
  - type: choice
    id: cla-c08-q3
    q: "Llevas un mes usando Claude y una de tus plantillas ya no te da buenos resultados. ¿Qué haces?"
    options: ["Dejar de usar Claude para esa tarea", "Ajustar la plantilla con lo que le falta (más contexto, otro formato) y guardar la versión nueva", "Seguir usándola igual: la culpa será del día"]
    answer: 1
    explain: "El kit es una nota viva: se mejora con el uso. Abandonar la tarea tienta tras un mal resultado, pero casi siempre basta con añadir la pieza que faltaba."
tips:
  - "Guarda el kit donde lo tengas siempre a mano, como las notas del móvil, y pon la fecha de la última revisión."
  - "Repasa tus ajustes de privacidad cada pocos meses: las opciones de Claude cambian y tu kit debe reflejarlo."
action:
  title: Crea «Mi kit de Claude»
  steps:
    - "Abre una nota nueva en tu móvil u ordenador y llámala «Mi kit de Claude»."
    - "Escribe 5 peticiones-plantilla con huecos entre corchetes para lo que cambia (usa las que guardaste en las sesiones anteriores o las de ejemplo)."
    - "Añade una línea con tus ajustes revisados: cómo has dejado el ajuste de privacidad y la fecha."
    - "Escribe tus 3 reglas: qué compruebo siempre, qué no comparto y cuándo consulto a una persona."
  check: He creado «Mi kit de Claude» con 5 plantillas, mis ajustes y 3 reglas
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [claude-ayuda, claude-privacidad]
---

## La idea

Has terminado el **Camino Cero**. Lo que falta es **no olvidarlo**. Para eso sirve **«Mi kit de Claude»**: una nota corta, tuya, con tres partes.

**1. Cinco peticiones-plantilla.** Las que más vas a repetir, con **huecos entre corchetes** para lo que cambia. Así no empiezas de cero cada vez y no se te olvida el contexto.

**2. Tus ajustes revisados.** Una línea: cómo has dejado el ajuste de privacidad sobre el uso de tus chats para mejorar los modelos y en qué fecha lo miraste.

**3. Tres reglas personales.** Una frase para cada una:

- **Qué compruebo siempre.** Por ejemplo: «Cifras, fechas, nombres y fuentes, en la web original, antes de usarlos». Así te proteges de las **alucinaciones**.
- **Qué no comparto.** Por ejemplo: «Contraseñas, datos bancarios y datos de otras personas, tampoco en un **chat incógnito**».
- **Cuándo consulto a una persona.** Por ejemplo: «Salud, temas legales y decisiones de dinero: Claude me ayuda a preparar las preguntas, la decisión la tomo con un profesional».

## En la práctica

Ideas de plantillas para empezar (cámbialas a tu vida):

- **Escribir:** «Soy [quién]. Escribe un [correo o mensaje] para [destinatario] sobre [tema]. Tono [cercano o formal], máximo [N] líneas».
- **Entender:** «Explícame [tema] como si no supiera nada, en cinco puntos cortos y con un ejemplo de la vida diaria».
- **Resumir:** «Resume este documento en cinco puntos e indica la página de cada uno. Si algo no aparece, dímelo».
- **Corregir:** «Corrige la ortografía y la claridad de este texto sin cambiar mi estilo: [texto]».
- **Organizar:** «Ayúdame a organizar [tarea] en pasos pequeños para hacer en [plazo]».

> Prueba: «Te paso mis cinco plantillas para usar contigo. Dime si a alguna le falta contexto importante y propón una versión mejorada de cada una, sin alargarlas: [pega tus plantillas]».

## Error frecuente

Hacer el kit y no volver a abrirlo. Úsalo la próxima vez que abras Claude y añade lo que aprendas.

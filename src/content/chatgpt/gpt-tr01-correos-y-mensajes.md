---
title: Correos y mensajes difíciles
description: "Cómo pedir a ChatGPT un mensaje incómodo (contestar una queja, decir que no, dar una mala noticia) con el tono justo, y qué revisar antes de enviarlo."
level: basico
track: gpt-trabajo
order: 401
skills: [gpt-escribir, gpt-peticion]
terms: [tono, datos-personales, bloque-de-escritura]
hook: "Un cliente te ha dejado un mensaje furioso y tienes que contestarle hoy. Si escribes en caliente, lo empeoras; si tardas, también."
takeaway: "Dale a ChatGPT los hechos, lo que quieres conseguir y el tono, y tendrás un buen borrador. Antes de enviarlo, busca lo que promete en tu nombre: es lo que más se cuela."
scenario:
  kind: empresa
  label: Caso práctico
  title: La señal de Maite
  body: "Maite lleva un hotel rural en Teruel. Un cliente canceló dos días antes y exige que le devuelva la señal de 150 €, aunque su política no la devuelve con menos de siete días. Pega en ChatGPT el mensaje del cliente y sus hechos, y pide una respuesta amable y firme que ofrezca cambiar la fecha sin coste. El borrador le gusta, pero al releerlo ve una frase que no pidió: «como gesto, le devolveremos la mitad». La borra antes de enviarlo."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-tr01-q1
    q: "Javier es profesor de Primaria y una compañera le pide que cubra su guardia del viernes. No puede. ¿Qué petición le dará un mensaje útil?"
    options: ["«Escribe un mensaje para decir que no.»", "«Una compañera me pide que cubra su guardia del viernes y no puedo porque tengo tutoría con familias. Escribe un WhatsApp corto y cercano que diga que no, dé el motivo en una frase y le proponga preguntar a otro compañero del ciclo.»", "«Escribe una excusa creíble para no cubrir una guardia.»"]
    answer: 1
    explain: "La segunda da la situación, el motivo, el tono, el formato y una salida. La primera tienta por rápida, pero ChatGPT tendrá que inventarse el motivo y el tono. La tercera pide una excusa: si no es verdad, el problema lo tienes tú."
  - type: choice
    id: gpt-tr01-q2
    q: "Un proveedor se retrasa por tercera vez y estás muy enfadado. ¿Qué es lo más sensato?"
    options: ["Pedir a ChatGPT que escriba ya el mensaje «con todo mi enfado»", "Contarle los hechos y lo que necesitas, pedir un tono firme y sin reproches, y releer el borrador un rato después", "No decir nada para no estropear la relación"]
    answer: 1
    explain: "Los hechos y una petición clara consiguen más que el enfado, y releer en frío evita frases de las que te arrepientes. Desahogarse tienta, pero un mensaje agresivo suele dar peores resultados y queda por escrito."
  - type: truefalse
    id: gpt-tr01-q3
    q: "Si el borrador de ChatGPT no tiene faltas de ortografía, ya está listo para enviar."
    answer: false
    explain: "Lo que más falla no son las faltas, sino lo que dice: una disculpa que no quieres dar, una fecha que no has dicho o una promesa que no puedes cumplir. Léelo entero pensando en eso."
tips:
  - "Si no sabes qué tono elegir, pide «la versión más corta posible que siga siendo amable». Los mensajes difíciles funcionan mejor cortos."
  - "Escribe tú la primera frase, la que más te cuesta, y pide a ChatGPT que siga a partir de ella. Así el mensaje arranca sonando a ti."
action:
  title: El mensaje que llevas días aplazando
  steps:
    - "Elige un mensaje pendiente: una queja, un «no» o un aviso que va a molestar."
    - "Escribe a ChatGPT los hechos, el objetivo, el tono y la extensión. Cambia nombres y datos por huecos como «[nombre]»."
    - "Pide un ajuste concreto («más corto», «sin disculparte tanto») y busca en el resultado cualquier promesa que no hayas pedido."
    - "Guarda la petición que mejor te funcionó en «Mi kit de ChatGPT»."
  check: He preparado con ChatGPT un mensaje difícil y lo he releído entero antes de enviarlo
practice:
  task: "Trabajas en la recepción de un gimnasio y tienes que avisar por correo a los socios de que la piscina cierra un mes por obras en pleno verano. Escribe la petición para que ChatGPT te prepare ese correo."
  require: [contexto, tono, formato]
  extra:
    - label: Decir qué quieres conseguir
      any: [quiero que, quiero conseguir, objetivo, para que, que no se den de baja, me gustaria que, conseguir, sin perder]
      hint: "Di qué quieres que pase después de leerlo: «Quiero que entiendan el cierre y no se den de baja»."
  sample: "Trabajo en la recepción de un gimnasio de barrio. La piscina cerrará del 1 al 31 de julio por obras de mejora y muchos socios se van a enfadar. Quiero que lo entiendan y no se den de baja. Escribe un correo de máximo 150 palabras, con tono cercano y profesional, que explique el motivo en una frase, recuerde que el resto de instalaciones sigue abierto y ofrezca una clase de prueba gratis de otra actividad. Sin tecnicismos y sin disculparte en cada frase."
deeper: null
tool: constructor-de-peticiones
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, aepd-guias]
---

## La idea

Los mensajes que más cuestan son los incómodos: **contestar una queja, decir que no, reclamar o dar una mala noticia**. ChatGPT te quita el bloqueo, pero solo acierta si le cuentas lo que no puede saber:

- **Los hechos**: qué ha pasado y con quién, sin adjetivos.
- **El objetivo**: qué quieres que haga la otra persona después de leerlo.
- **El tono**: cómo quieres que suene. Por ejemplo, «amable pero firme» o «de usted».
- **La forma**: un correo, un WhatsApp, «máximo 100 palabras».

Antes de enviar, revisa por este orden:

1. **Lo que promete.** Para suavizar, ChatGPT a veces añade disculpas, descuentos o plazos que no has pedido. Y salen en tu nombre.
2. **Los datos.** Fechas, importes y nombres, uno a uno.
3. **Que suene a ti.** Si nunca dices «lamentamos profundamente», quítalo.

Y no pegues **datos personales** (los que permiten saber quién es alguien, como el DNI o el teléfono) que no hagan falta. Para redactar, basta un hueco.

## En la práctica

1. Pega el mensaje que te han enviado, si lo hay, y escribe tus hechos tal como te salgan.
2. Pide la respuesta con objetivo, tono y extensión.
3. Corrige en la misma conversación: «más corto», «tutéale», «quita la segunda disculpa». Si el texto sale en un **bloque de escritura** (un recuadro editable dentro de la respuesta), puedes cambiar tú una palabra o señalar una frase y pedir que cambie solo esa.
4. Completa los huecos y **reléelo en frío**.

> Prueba: «Tengo una tienda de electrodomésticos. Un cliente se queja muy enfadado porque la lavadora llegó con un golpe. Ya hemos pedido otra y llega el [fecha]. Quiero que se sienta atendido sin admitir culpas que no son nuestras. Escribe una respuesta de máximo 120 palabras, de usted, amable y concreta, que ofrezca recoger la dañada sin coste. No prometas nada más.»

## Error frecuente

Enviar el borrador tal cual porque «suena muy profesional»: a menudo promete más de lo que puedes cumplir.

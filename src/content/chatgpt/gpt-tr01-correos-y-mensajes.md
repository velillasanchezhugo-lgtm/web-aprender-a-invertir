---
title: Correos y mensajes difíciles
description: "Cómo pedir a ChatGPT un mensaje incómodo (una queja, un «no», una mala noticia) con el tono justo, y qué revisar antes de enviarlo."
level: basico
track: gpt-trabajo
order: 401
skills: [gpt-escribir, gpt-peticion]
terms: [tono, datos-personales, bloque-de-escritura]
hook: "Un cliente te ha dejado un mensaje furioso y tienes que contestarle hoy. Si escribes en caliente, lo empeoras."
takeaway: "Con los hechos, el objetivo y el tono, ChatGPT te da un buen borrador. Antes de enviarlo, busca lo que promete en tu nombre."
scenario:
  kind: empresa
  label: Caso práctico
  title: La señal de Arantxa
  body: "Arantxa lleva un hotel rural en Teruel. Un cliente canceló dos días antes y exige la señal de 150 €, que su política no devuelve. Arantxa pide a ChatGPT una respuesta amable y firme que ofrezca cambiar la fecha sin coste. El borrador le gusta, pero al releerlo ve una frase que no pidió: «como gesto, le devolveremos la mitad». La borra antes de enviarlo."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-tr01-q1
    q: "Javier es profesor de Primaria y una compañera le pide que cubra su guardia del viernes. No puede. ¿Qué petición le dará un mensaje útil?"
    options: ["«Escribe un mensaje para decir que no.»", "«Escribe una excusa creíble para no cubrir una guardia.»", "«No puedo cubrir la guardia del viernes de una compañera porque tengo tutoría con familias. Escribe un WhatsApp corto y cercano que diga que no, con el motivo en una frase, y le sugiera preguntar a otro compañero.»"]
    answer: 2
    explain: "La segunda da situación, motivo, tono, formato y una salida. La primera tienta por rápida, pero ChatGPT tendrá que inventarse el motivo y el tono. La tercera pide una excusa: si no es verdad, el problema es tuyo."
  - type: choice
    id: gpt-tr01-q2
    q: "Un proveedor se retrasa por tercera vez y estás muy enfadado. ¿Qué es lo más sensato?"
    options: ["Darle los hechos y lo que necesitas, pedir un tono firme sin reproches y releer el borrador más tarde", "Pedir a ChatGPT que escriba ya el mensaje «con todo mi enfado»", "No decir nada para no estropear la relación"]
    answer: 0
    explain: "Los hechos y una petición clara consiguen más que el enfado. Desahogarse tienta, pero un mensaje agresivo suele funcionar peor y queda por escrito."
  - type: truefalse
    id: gpt-tr01-q3
    q: "Si el borrador de ChatGPT no tiene faltas de ortografía, ya está listo para enviar."
    answer: false
    explain: "Lo que más falla no son las faltas, sino lo que dice: una disculpa que no quieres dar, una fecha que no has dicho o una promesa que no puedes cumplir."
tips:
  - "Pide «la versión más corta que siga siendo amable». Los mensajes difíciles funcionan mejor cortos."
  - "Escribe tú la primera frase y pide a ChatGPT que siga a partir de ella. Así arranca sonando a ti."
action:
  title: El mensaje que llevas días aplazando
  steps:
    - "Elige un mensaje pendiente que te cueste escribir."
    - "Escribe a ChatGPT hechos, objetivo, tono y extensión, con huecos como «[nombre]» en lugar de datos."
    - "Busca en el resultado cualquier promesa que no hayas pedido."
    - "Guarda la petición que mejor te funcionó en «Mi kit de ChatGPT»."
  check: He preparado con ChatGPT un mensaje difícil y lo he releído entero antes de enviarlo
practice:
  task: "Trabajas en la recepción de un gimnasio y tienes que avisar a los socios de que la piscina cierra un mes por obras en verano. Escribe la petición para que ChatGPT prepare el correo."
  require: [contexto, tono, formato]
  extra:
    - label: Decir qué quieres conseguir
      any: [quiero que, quiero conseguir, objetivo, para que, que no se den de baja, me gustaria que, conseguir, sin perder]
      hint: "Di qué quieres que pase: «Quiero que lo entiendan y no se den de baja»."
  sample: "Trabajo en la recepción de un gimnasio de barrio. La piscina cerrará del 1 al 31 de julio por obras de mejora y muchos socios se van a enfadar. Quiero que lo entiendan y no se den de baja. Escribe un correo de máximo 150 palabras, con tono cercano, que explique el motivo en una frase y recuerde que el resto de instalaciones sigue abierto. Sin disculparte en cada frase."
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

Los mensajes que más cuestan son los incómodos: **una queja, un «no», una reclamación, una mala noticia**. ChatGPT te quita el bloqueo si le cuentas lo que no puede saber:

- **Los hechos**: qué ha pasado y con quién, sin adjetivos.
- **El objetivo**: qué quieres que haga la otra persona al leerlo.
- **El tono**: cómo quieres que suene. Por ejemplo, «amable pero firme» o «de usted».
- **La forma**: un correo, un WhatsApp, «máximo 100 palabras».

Antes de enviar, revisa por este orden:

1. **Lo que promete.** Para suavizar, ChatGPT a veces añade disculpas, descuentos o plazos que no has pedido. Y salen en tu nombre.
2. **Los datos.** Fechas, importes y nombres, uno a uno.
3. **Que suene a ti.** Si nunca dices «lamentamos profundamente», quítalo.

Y no pegues **datos personales** (los que permiten saber quién es alguien, como el DNI o el teléfono) que no hagan falta. Para redactar, basta un hueco.

## En la práctica

1. Pega el mensaje recibido, si lo hay, y tus hechos tal como te salgan.
2. Pide la respuesta con objetivo, tono y extensión.
3. Corrige en el mismo chat: «más corto», «tutéale». Si sale en un **bloque de escritura** (un recuadro editable dentro de la respuesta), cambia tú una palabra o señala una frase para que cambie solo esa.
4. Completa los huecos y **reléelo en frío**.

> Prueba: «Tengo una tienda de electrodomésticos. Un cliente se queja muy enfadado porque la lavadora llegó con un golpe. La nueva llega el [fecha]. Quiero que se sienta atendido sin admitir culpas que no son nuestras. Escribe una respuesta de máximo 120 palabras, de usted y amable. No prometas nada más.»

## Error frecuente

Enviarlo tal cual porque «suena muy profesional».

---
title: Correos y mensajes difíciles
description: "Cómo pedir a ChatGPT un correo o un mensaje incómodo (una queja, un «no», un aviso que molesta) con el tono justo, y qué revisar antes de pulsar «Enviar»."
level: basico
track: gpt-trabajo
order: 401
skills: [gpt-escribir, gpt-peticion]
terms: [tono, datos-personales]
hook: "Un cliente te ha dejado un mensaje furioso y tienes que contestarle hoy. Si escribes en caliente, lo empeoras; si tardas, también."
takeaway: "ChatGPT redacta bien un mensaje difícil si le das los hechos, lo que quieres conseguir y el tono. Pero el mensaje sale con tu nombre: lo relees en frío y lo dejas sonando a ti."
scenario:
  kind: empresa
  label: Caso práctico
  title: La señal de Rocío
  body: "Rocío lleva un hotel rural en Teruel. Un cliente canceló dos días antes de llegar y exige que le devuelva la señal de 150 €, aunque la política dice que no se devuelve con menos de siete días. Pide a ChatGPT «contéstale que no» y le sale un texto seco y lleno de normas. Repite con los hechos, lo que sí puede ofrecer (cambiar la fecha sin coste en los próximos seis meses) y un tono amable y firme. El segundo borrador le sirve con un retoque."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-tr01-q1
    q: "Javier es profesor de Primaria y una compañera le pide que cubra su guardia del viernes. No puede. ¿Qué petición le dará un mensaje útil?"
    options: ["«Escribe un mensaje para decir que no.»", "«Una compañera me pide que cubra su guardia del viernes y no puedo porque tengo una tutoría con familias. Escribe un WhatsApp corto y cercano que diga que no, explique el motivo en una frase y le proponga preguntar a otro compañero del ciclo.»", "«Escribe una excusa creíble para no cubrir una guardia.»"]
    answer: 1
    explain: "La segunda da la situación, el motivo, el tono, el formato y una salida. La primera tienta por rápida, pero ChatGPT tendrá que inventarse el motivo y el tono. La tercera pide una excusa: si no es verdad, el problema lo tienes tú."
  - type: choice
    id: gpt-tr01-q2
    q: "Un proveedor se retrasa por tercera vez y estás muy enfadado. ¿Qué es lo más sensato?"
    options: ["Pedir a ChatGPT que escriba ya el mensaje «con todo mi enfado»", "Contarle los hechos y lo que necesitas, pedir un tono firme y sin reproches, y releer el borrador un rato después antes de enviarlo", "No decir nada para no estropear la relación"]
    answer: 1
    explain: "Los hechos y una petición clara consiguen más que el enfado, y releer en frío evita frases de las que te arrepientes. Desahogarse tienta, pero un mensaje agresivo suele dar peores resultados y queda por escrito."
  - type: truefalse
    id: gpt-tr01-q3
    q: "Si el borrador de ChatGPT no tiene faltas de ortografía, ya está listo para enviar."
    answer: false
    explain: "Lo que más falla no son las faltas, sino lo que dice: puede añadir una disculpa que no quieres dar, una fecha que no has dicho o una promesa que no puedes cumplir. Léelo entero pensando en eso."
tips:
  - "Pide «tres versiones: una más cálida, una neutra y una más firme». Comparar te ayuda a ver qué tono encaja."
  - "Si un mensaje largo no te convence, pide «quita todo lo que no sea imprescindible». Los mensajes difíciles funcionan mejor cortos."
  - "Pon «[nombre]», «[importe]» o «[fecha]» en lugar de los datos reales y complétalos tú al final."
action:
  title: El mensaje que llevas días aplazando
  steps:
    - "Elige un mensaje pendiente: una queja, un «no» o un aviso que va a molestar."
    - "Escríbele a ChatGPT los hechos, lo que quieres conseguir, el tono y la extensión. Cambia nombres y datos por huecos."
    - "Pide un ajuste concreto («más corto», «sin disculparte tanto») y relee el resultado en frío."
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

Los mensajes que más cuesta escribir son los incómodos: **contestar una queja, decir que no, reclamar o dar una mala noticia**. ChatGPT te quita el bloqueo del folio en blanco, pero solo acierta si le cuentas lo que no puede saber.

Una petición de mensaje difícil necesita cuatro cosas:

- **Los hechos**: qué ha pasado y con quién, sin adjetivos.
- **El objetivo**: qué quieres que haga la otra persona después de leerlo (aceptar, pagar, cambiar la fecha, quedarse tranquila).
- **El tono**: cómo quieres que suene. Por ejemplo, «amable pero firme», «de usted», «cercano».
- **La forma y la extensión**: un correo, un WhatsApp, «máximo 100 palabras».

Antes de enviar, **revisa tres cosas**, por este orden:

1. **Lo que promete.** ChatGPT a veces añade compromisos o disculpas que no has pedido.
2. **Los datos.** Fechas, importes y nombres, uno a uno.
3. **Que suene a ti.** Si nunca dices «lamentamos profundamente», quítalo.

Y no pegues lo que no hace falta: **datos personales** (los que permiten saber quién es alguien, como el DNI, la dirección o el teléfono) tuyos o de otros. Para redactar, basta un hueco como «[nombre]».

## En la práctica

1. Escribe los hechos y el objetivo tal como te salgan.
2. Pide el mensaje con tono y extensión.
3. Corrige en la misma conversación: «más corto», «tutéale», «quita la segunda disculpa». Si tu versión de ChatGPT abre el texto en un panel de edición, puedes seleccionar una frase y pedir que cambie solo esa.
4. Copia el texto, completa los huecos y **reléelo en frío**.

> Prueba: «Tengo una tienda de electrodomésticos. Un cliente se queja en un correo muy enfadado porque la lavadora llegó con un golpe. Ya hemos pedido otra al proveedor y llega el [fecha]. Quiero que se sienta atendido sin admitir culpas que no son nuestras. Escribe una respuesta de máximo 120 palabras, de usted, amable y concreta, que ofrezca recogerla sin coste.»

> Prueba: «Soy autónomo y hago reformas. Tengo que decirle a un cliente que la obra se retrasa dos semanas porque falta material. Dame dos versiones de un WhatsApp corto: una más cálida y otra más directa.»

## Error frecuente

Enviar el borrador tal cual porque «suena muy profesional»: a menudo promete más de lo que puedes cumplir o no suena a ti.

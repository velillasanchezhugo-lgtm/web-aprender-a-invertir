---
title: Tu kit de ChatGPT
description: "Cierre del Camino Cero: crea «Mi kit de ChatGPT», una nota con 5 peticiones-plantilla, tus ajustes revisados y tus 3 reglas personales."
level: cero
track: gpt-cero
order: 8
skills: [gpt-instrucciones, gpt-privacidad, gpt-verificar]
terms: [plantilla-de-prompt, controles-de-datos, chat-temporal]
hook: "Llevas siete sesiones probando peticiones y ajustes. ¿Dónde está ahora lo que te funcionó, para no empezar de cero la próxima vez?"
takeaway: "«Mi kit de ChatGPT» reúne en un sitio tus peticiones con huecos, cómo dejaste tus ajustes y las tres reglas que no te saltas. Empiézalo hoy con lo que ya te ha funcionado y añádele cada hallazgo."
scenario:
  kind: producto
  label: Caso práctico
  title: La nota de Teodoro
  body: "Teodoro es técnico de mantenimiento en un polideportivo municipal. Usa ChatGPT para escribir a proveedores, redactar partes de avería y entender manuales en inglés. Perdía tiempo rehaciendo peticiones hasta que guardó en el móvil las que le funcionaban, con huecos para rellenar, y una regla que no se salta: ni nombres ni datos de los abonados."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-c08-q1
    q: "Un abonado se queja de que las duchas no tienen agua caliente y Teodoro quiere ayuda para contestarle. Su regla dice «ni nombres ni datos de los abonados». ¿Cómo la aplica?"
    options: ["Pega la queja completa en un chat temporal, que no se guarda en el historial", "Describe la avería y la queja sin nombre, número de abonado ni datos de contacto", "Pega la queja tal cual y borra el chat al terminar"]
    answer: 1
    explain: "Para contestar bien no hace falta saber quién es el abonado. El chat temporal y borrar después tientan porque parecen «limpiar» el rastro, pero el texto ya ha salido del polideportivo y puede conservarse un tiempo."
  - type: truefalse
    id: gpt-c08-q2
    q: "En el kit conviene apuntar la fecha en que revisaste tus ajustes, porque las opciones de ChatGPT y sus nombres cambian."
    answer: true
    explain: "Con la fecha sabes cuándo toca mirarlos otra vez. Tienta pensar que un ajuste se revisa una vez y ya, pero ChatGPT cambia a menudo sus menús y sus opciones."
  - type: choice
    id: gpt-c08-q3
    q: "Tu plantilla para entender cartas oficiales te da respuestas cada vez más largas y te cuesta encontrar lo importante. ¿Qué haces?"
    options: ["Añadir a la plantilla el formato que quieres (por ejemplo, «primero el plazo y qué tengo que hacer, en tres puntos») y guardar la versión nueva", "Dejar de usarla y preguntar cada vez de una forma distinta", "Pasarte a un plan de pago para que conteste mejor"]
    answer: 0
    explain: "Casi siempre basta con añadir la pieza que faltaba, aquí el formato. Cambiar de plan tienta, pero la longitud depende sobre todo de lo que pides."
tips:
  - "Ten el kit a mano: una nota fijada en el móvil se usa; un documento perdido en una carpeta, no."
  - "Cuando una petición te funcione a la primera, cópiala al kit en ese momento: luego se olvida."
action:
  title: Crea «Mi kit de ChatGPT»
  steps:
    - "Abre una nota nueva en el móvil o el ordenador y llámala «Mi kit de ChatGPT»."
    - "Escribe 5 peticiones-plantilla con huecos entre corchetes (usa las que guardaste en las sesiones anteriores o las de ejemplo)."
    - "Añade una línea con tus ajustes revisados: cómo dejaste «Mejorar el modelo para todos», cuándo usas el chat temporal y la fecha."
    - "Escribe tus 3 reglas: qué compruebo siempre, qué no comparto y cuándo consulto a una persona."
  check: He creado «Mi kit de ChatGPT» con 5 plantillas, mis ajustes y 3 reglas
practice:
  task: "Te llegan a menudo cartas del ayuntamiento, del banco o de Hacienda que cuesta entender. Escribe la petición-plantilla para tu kit, con huecos entre corchetes para lo que cambia cada vez."
  require: [contexto, formato, limites]
  extra:
    - label: Huecos entre corchetes
      any: ["["]
      hint: "Deja huecos entre corchetes para lo que cambia: [organismo], [texto de la carta]."
  sample: "Me ha llegado una carta de [organismo] y no la entiendo bien. Te copio el texto sin mis datos personales: [texto de la carta]. Explícamela en tres puntos sencillos: qué me piden, qué plazo tengo y qué pasa si no hago nada. No inventes plazos ni importes que no aparezcan. Si hay algo que debería consultar con [gestoría o el propio organismo], dímelo."
deeper: null
tool: plantillas
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-privacidad]
---

## La idea

Has terminado el **Camino Cero**. Ahora falta **no olvidarlo**. Para eso sirve **«Mi kit de ChatGPT»**: una nota corta, tuya, con tres partes.

**1. Cinco peticiones-plantilla.** Una **plantilla** es una petición que ya te funcionó, guardada con **huecos entre corchetes** para lo que cambia.

**2. Tus ajustes revisados.** Una o dos líneas: cómo dejaste el ajuste «Mejorar el modelo para todos» en los **controles de datos**, cuándo usas el **chat temporal** y en qué fecha lo miraste.

**3. Tres reglas personales.** Una frase para cada una:

- **Qué compruebo siempre.** Por ejemplo: «Plazos, cifras, nombres y fuentes, en la web oficial, antes de usarlos».
- **Qué no comparto.** Por ejemplo: «Contraseñas, datos bancarios y datos de otras personas, en ningún modo de chat».
- **Cuándo consulto a una persona.** Por ejemplo: «Salud, temas legales y dinero: ChatGPT me ayuda con las preguntas; decido con un profesional».

## En la práctica

Ideas de plantillas para empezar (adáptalas a tu vida):

- **Escribir:** «Soy [quién]. Escribe un [mensaje o correo] para [destinatario] sobre [tema]. Tono [cercano o formal], máximo [N] líneas».
- **Entender:** «Explícame [tema] como si no supiera nada, en cinco puntos cortos y con un ejemplo de la vida diaria».
- **Leer un documento:** «Te adjunto [documento]. Dime [lo que busco] e indica la página de cada dato. Si algo no aparece, dímelo».
- **Buscar algo actual:** «Busca en internet [dato] y dame el enlace a la fuente oficial».

> Prueba: «Esta es mi plantilla para escribir a proveedores: [pega tu plantilla]. Úsala con este caso: [describe el caso]. Después dime en una línea qué dato te ha faltado para hacerlo mejor, para añadirlo a la plantilla».

## Error frecuente

Hacer el kit y no volver a abrirlo. Úsalo la próxima vez y añade lo que aprendas.

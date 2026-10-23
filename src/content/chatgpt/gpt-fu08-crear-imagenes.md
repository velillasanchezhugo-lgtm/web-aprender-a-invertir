---
title: Crear y editar imágenes
description: Cómo pedir a ChatGPT una imagen que sirva, cómo corregirla por partes, qué límites tiene con personas reales y qué marca de procedencia llevan sus imágenes.
level: basico
track: gpt-funciones
order: 208
skills: [gpt-imagenes, gpt-etica-normas]
terms: [generacion-de-imagenes, metadatos-c2pa, derechos-de-autor, deepfake]
hook: "Pides «una imagen bonita para mi tienda» y te sale algo que no tiene nada que ver con lo que imaginabas. ¿Qué le faltaba a tu petición?"
takeaway: Una buena imagen empieza por una buena descripción (qué sale, estilo, formato y texto exacto). Corrígela pidiendo un cambio cada vez y evita usar a personas reales sin su permiso.
scenario:
  kind: producto
  label: Caso práctico
  title: Las tazas de Vega
  body: "Vega vende tazas de cerámica por internet. Sube una foto hecha en su cocina y pide: «pon la taza sobre una mesa de madera clara, con luz de mañana, sin cambiar la taza». La primera versión cambia el color del asa. Ella responde: «deja el asa como en mi foto». La segunda le sirve para la web."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-fu08-q1
    q: "La imagen está casi bien, pero el texto del cartel tiene una falta. ¿Qué pides?"
    options: ["Que haga otra imagen nueva desde cero", "Que corrija solo esa palabra y deje todo lo demás igual", "«Mejórala»"]
    answer: 1
    explain: "Un cambio concreto conserva lo que ya te gustaba. Empezar de cero tienta, pero puede cambiar todo lo demás."
  - type: choice
    id: gpt-fu08-q2
    q: "Fede quiere una foto realista de su alcaldesa firmando un contrato que nunca firmó, para gastar una broma en el grupo del pueblo. ¿Qué es lo correcto?"
    options: ["Hacerla: si ChatGPT la crea, está permitido", "No hacerla: una imagen falsa realista de una persona real puede engañar y dañarla", "Hacerla y quitarle la marca de procedencia"]
    answer: 1
    explain: "Es un ultrafalso de una persona real, aunque sea en broma. Que la herramienta lo genere tienta a pensar que está permitido, pero quien la difunde responde de ella."
  - type: truefalse
    id: gpt-fu08-q3
    q: "Las imágenes creadas con ChatGPT llevan siempre una etiqueta de procedencia que nunca se pierde."
    answer: false
    explain: "OpenAI les añade metadatos C2PA y una marca invisible, pero una captura de pantalla, un recorte o algunas redes sociales pueden borrarlos o debilitarlos."
tips:
  - "Al editar una foto tuya, di qué debe quedar igual: el producto, la cara, tu logotipo."
  - "Si vas a publicar la imagen, añade una nota como «Imagen creada con IA» cuando pueda confundir."
action:
  title: Crea una imagen que necesites
  steps:
    - "Piensa en una imagen real para esta semana (una invitación, una portada)."
    - "Descríbela con qué sale, estilo, colores, formato y el texto exacto."
    - "Pide al menos un cambio concreto sobre la primera versión."
    - "Guarda en «Mi kit de ChatGPT» la descripción que mejor te ha funcionado."
  check: He creado y corregido una imagen con ChatGPT
practice:
  task: "Das clases de yoga en un centro cívico de Alicante y quieres anunciar en Instagram el nuevo horario de otoño. Escribe la petición para crear la imagen."
  require: [limites]
  extra:
    - label: "Decir el formato de la imagen"
      any: ["cuadrad", "vertical", "horizontal", "formato", "tamano", "apaisad", "historia"]
      hint: "Di el formato: cuadrado para una publicación, vertical para una historia o un cartel."
    - label: "Dar el texto exacto"
      any: ["texto", "que ponga", "que diga", "titulo"]
      hint: "Escribe entre comillas el texto exacto que debe salir: si no, lo inventará o lo escribirá mal."
    - label: "Describir el estilo"
      any: ["estilo", "colores", "ilustracion", "fotografia", "acuarela", "tonos"]
      hint: "Describe el estilo y los colores: «ilustración sencilla, tonos verdes y crema»."
  sample: "Crea una imagen en formato cuadrado para Instagram que anuncie mis clases de yoga en un centro cívico de Alicante. Estilo ilustración sencilla, tonos verdes y crema, con una esterilla y plantas junto a una ventana luminosa. El texto debe decir exactamente: «Yoga para principiantes · Martes y jueves, 19:00 · Desde octubre». Sin personas reconocibles ni logotipos de marcas. Deja espacio arriba para el título y revisa que el texto no tenga faltas."
deeper: null
tool: evaluador-de-peticiones
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-uso]
---

## La idea

ChatGPT puede **crear imágenes** a partir de una descripción y **editar** una que le subas o que haya creado. Gratis y de pago, con un límite de uso propio, más amplio en los de pago.

- **Cuanto más concreto, mejor.** Di qué sale, el estilo (foto, ilustración, acuarela), los colores, el formato (cuadrado, vertical) y, si lleva texto, **el texto exacto** entre comillas.
- **Se corrige por partes.** Pide un cambio cada vez y di qué debe quedar igual.
- **Revisa el texto.** A veces sale con letras cambiadas o faltas.
- **Personas reales: más límites.** ChatGPT es más estricto cuando sale alguien real, y puede negarse. Usar la cara de alguien sin permiso, o fabricar una imagen falsa que parezca real (un **deepfake** o ultrafalso), puede dañarle y meterte en problemas.
- **Derechos.** Evita copiar personajes, logotipos u obras de otros: tienen **derechos de autor** o de marca.
- **Marca de procedencia.** OpenAI añade a sus imágenes **metadatos C2PA** (una etiqueta interna que dice con qué herramienta se hizo) y una marca de agua invisible en los píxeles (SynthID). Ayudan, pero pueden perderse o debilitarse.

## En la práctica

1. Pídela en el chat o desde el menú de herramientas (el botón «+»).
2. Para editar, sube tu foto y explica el cambio.
3. Corrige con «cambia solo…, deja el resto igual».
4. Descárgala y revisa los detalles.

> Prueba: «Crea una invitación vertical para el cumpleaños de mi hija, que cumple 6 años. Estilo acuarela, con dinosaurios y globos en tonos pastel. El texto debe decir exactamente: “¡Noa cumple 6! Sábado 14, a las 17:00”. Revisa que el texto no tenga faltas».

## Error frecuente

Pedir algo vago («una imagen chula») y rehacerla diez veces.

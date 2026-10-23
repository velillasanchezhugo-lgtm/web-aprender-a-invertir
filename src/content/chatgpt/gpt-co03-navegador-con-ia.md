---
title: ChatGPT en el navegador
description: "El navegador integrado de la app de escritorio y la extensión para Chrome: qué hacen, cuándo actúan por ti, qué permisos piden y cómo cuidar tu historial."
level: basico
track: gpt-conectar
order: 603
skills: [gpt-agente, gpt-privacidad]
terms: [navegador-con-ia, memoria-de-chatgpt, inyeccion-de-instrucciones]
hook: "Tienes seis pestañas con pisos de alquiler y no recuerdas cuál tenía ascensor. ¿Puede ChatGPT mirarlas contigo? ¿Y qué ve de tu navegador si le dejas?"
takeaway: "ChatGPT lee la web contigo y actúa en ella desde el navegador de su app de escritorio o con su extensión. Te pide permiso para cada web nueva y para tu historial: concédelo de uno en uno, nunca en todas las webs."
scenario:
  kind: producto
  label: Caso práctico
  title: Los pisos de Nerea
  body: "Nerea busca piso en Gijón. Con la extensión de ChatGPT en Chrome, pide comparar las pestañas abiertas: precio, metros, ascensor y fianza. ChatGPT pide permiso para cada web y le da una tabla. Cuando Nerea quiere escribir a un anunciante, ChatGPT le enseña el mensaje antes de enviarlo."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-co03-q1
    q: "Lorena usaba el navegador ChatGPT Atlas y ahora no le abre. ¿Qué hace?"
    options: ["Lo reinstala: será un fallo", "Usa el navegador de la app de escritorio o la extensión: Atlas dejó de funcionar en agosto de 2026", "Pasa a un plan de pago para seguir usándolo"]
    answer: 1
    explain: "OpenAI retiró Atlas y llevó sus funciones a la app de escritorio y a una extensión. Reinstalar tienta, pero el servicio ya no existe."
  - type: choice
    id: gpt-co03-q2
    q: "En una web que no conoces, la extensión te ofrece permitir una vez, en este sitio, en todos los sitios o rechazar. ¿Qué eliges?"
    options: ["En todos los sitios, para que no vuelva a preguntar", "Una vez o rechazar, después de mirar qué web es", "Da igual: el permiso solo sirve para leer"]
    answer: 1
    explain: "«En todos los sitios» quita las preguntas en cualquier web, también en las que esconden instrucciones maliciosas. Tienta por cómodo, pero el permiso deja a ChatGPT actuar en la web, no solo leerla."
  - type: truefalse
    id: gpt-co03-q3
    q: "Si dejas que ChatGPT mire tu historial para una tarea, ese permiso queda activado para siempre."
    answer: false
    explain: "Lo pide cada vez: no hay opción de permitirlo siempre. Aun así, tu historial guarda búsquedas privadas, así que acéptalo solo si de verdad hace falta."
tips:
  - "Inicia sesión en las webs tú mismo, en el formulario de la página, nunca escribiendo la contraseña en el chat."
  - "El navegador de la app de escritorio guarda su propio historial y sus inicios de sesión; puedes borrarlos en sus ajustes."
action:
  title: Revisa qué webs tiene permitidas
  steps:
    - "En los ajustes de la extensión o del navegador de la app de escritorio, busca la lista de webs permitidas."
    - "Quita las que no reconozcas y comprueba que no está activado «en todos los sitios»."
    - "Apunta en «Mi kit de ChatGPT» qué permisos das y cuáles no."
  check: He revisado los permisos de webs y sé cómo quitarlos
practice:
  task: "Tienes abiertas cuatro pestañas con portátiles para tu hija, que empieza la universidad. Escribe la petición para que ChatGPT las compare en el navegador sin comprar nada."
  require: [formato, limites, contexto]
  extra:
    - label: Decir que solo lea las pestañas
      any: ["solo lee", "solo leer", "solo mira", "solo consulta", "solo compara", "pestañas abiertas", "pestañas que tengo abiertas", "solo las pestañas"]
      hint: "Di qué puede usar: «Mira solo las pestañas abiertas»."
  sample: "Mi hija empieza la universidad y le busco un portátil para tomar apuntes y hacer trabajos. Mira solo las cuatro pestañas abiertas con portátiles y compáralos en una tabla con precio, peso, autonomía de batería y memoria. No compres, no añadas nada a la cesta y no rellenes formularios. Dime si algún dato no aparece en la página."
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-23
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-privacidad, openai-noticias]
---

## La idea

Un **navegador con IA** lee las páginas contigo y, si le dejas, **actúa** en ellas: abre webs, hace clic, escribe. OpenAI tuvo uno propio, **ChatGPT Atlas**, que **dejó de funcionar el 9 de agosto de 2026**. Sus funciones pasaron a dos sitios:

- **El navegador de la app de escritorio** de ChatGPT. Tiene su propio perfil: no usa las pestañas ni las sesiones de tu navegador habitual, así que inicias sesión en cada web dentro de él.
- **La extensión de ChatGPT** para Chrome, Edge, Brave, Opera y Vivaldi. Sirve cuando la tarea necesita tu navegador de siempre: tus pestañas abiertas o webs donde ya has iniciado sesión. Abre un chat al lado de la página (salvo en Opera).

**Los permisos, de uno en uno:**

- Al instalarla, la extensión pide permisos amplios: es el máximo que podría usar, no lo que usa siempre.
- ChatGPT **pregunta antes de usar cada web nueva**: una vez, en ese sitio o en todos. «En todos» quita las preguntas: evítalo.
- Para tu **historial** pregunta cada vez.
- Antes de **enviar datos, comprar o borrar**, pide confirmación.

**Privacidad.** El control del navegador sigue tu ajuste de **memoria de ChatGPT** (lo que recuerda de ti entre chats): si la desactivas, no la usa. Lo que entra en el chat (texto de la página, capturas) queda en la conversación, con tus controles de datos.

Y trata **las webs como no fiables**: una página puede esconder instrucciones para desviar a ChatGPT.

## En la práctica

1. Instala la app o la extensión solo desde fuentes oficiales.
2. Empieza con tareas de **solo lectura**: comparar, resumir, buscar un dato.
3. Concede permisos **web a web**.
4. Si actúa con tu cuenta (enviar, comprar), **quédate delante** y lee cada confirmación.

> Prueba: «Compara las pestañas abiertas de pisos en alquiler en una tabla con precio, metros, ascensor y fianza. Solo lee las páginas: no escribas a nadie ni rellenes formularios. Dime qué dato no aparece en cada anuncio.»

Si abre webs que no pediste o pide permisos raros, rechaza y para la tarea.

## Error frecuente

Permitir «en todos los sitios» para no ver más avisos. Así puede actuar en cualquier web, también en una preparada para engañarlo.

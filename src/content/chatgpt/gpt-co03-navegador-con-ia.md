---
title: ChatGPT en el navegador
description: "El navegador integrado de la app de escritorio y la extensión para Chrome: qué hacen, cuándo actúan por ti, qué permisos piden y cómo cuidar tu historial."
level: basico
track: gpt-conectar
order: 603
skills: [gpt-agente, gpt-privacidad]
terms: [navegador-con-ia, memoria-de-chatgpt, inyeccion-de-instrucciones]
hook: "Tienes abiertas seis pestañas con pisos de alquiler y no recuerdas cuál tenía ascensor. ¿Puede ChatGPT mirarlas contigo? ¿Y qué ve de tu navegador si le dejas?"
takeaway: "ChatGPT puede leer la web contigo y actuar en ella desde el navegador de su app de escritorio o con su extensión. Te pide permiso para cada web nueva y para tu historial: concédelo de uno en uno y no le dejes vía libre en todas las webs."
scenario:
  kind: producto
  label: Caso práctico
  title: Los pisos de Andrés
  body: "Andrés busca piso en Málaga. Con la extensión de ChatGPT en Chrome, le pide que compare las pestañas abiertas: precio, metros, ascensor y fianza. ChatGPT le pide permiso para cada web y le da una tabla. Cuando Andrés le pide escribir al anunciante, ChatGPT le enseña el mensaje antes de enviarlo."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-co03-q1
    q: "Lorena usaba ChatGPT Atlas en su Mac y ahora no le abre. ¿Qué ha pasado y qué hace?"
    options: ["Es un fallo: lo reinstala", "Atlas dejó de funcionar en agosto de 2026; ahora usa el navegador de la app de escritorio o la extensión para su navegador", "Tiene que pasar a un plan de pago para seguir usándolo"]
    answer: 1
    explain: "OpenAI retiró Atlas y llevó sus funciones a la app de escritorio de ChatGPT y a una extensión para Chrome y otros navegadores. Reinstalar tienta, pero el servicio ya no existe."
  - type: choice
    id: gpt-co03-q2
    q: "Al pedirle una tarea en una web, la extensión te ofrece «Permitir una vez», «Permitir en este sitio», «Permitir en todos los sitios» o «Rechazar». Es una web que no conoces. ¿Qué eliges?"
    options: ["«Permitir en todos los sitios», para que no vuelva a preguntar", "«Permitir una vez» o rechazar, después de mirar qué web es", "Da igual: el permiso solo sirve para leer"]
    answer: 1
    explain: "Dar permiso en todos los sitios quita las preguntas en cualquier web, también en las que podrían esconder instrucciones maliciosas. Es cómodo, por eso tienta, pero el permiso deja a ChatGPT actuar en esa web, no solo leerla."
  - type: truefalse
    id: gpt-co03-q3
    q: "Si dejas que ChatGPT mire tu historial para una tarea, ese permiso queda activado para siempre."
    answer: false
    explain: "Te lo pide cada vez y solo para esa tarea: no hay opción de permitirlo siempre. Aun así, tu historial puede tener búsquedas y direcciones privadas, así que acéptalo solo si de verdad lo necesita."
tips:
  - "Inicia sesión en las webs tú mismo, en el formulario de la página, nunca escribiendo la contraseña en el chat."
  - "Si no quieres que use lo que recuerda de ti al navegar, desactiva la memoria: el control del navegador sigue ese ajuste."
  - "El navegador de la app de escritorio guarda su propio historial y sus inicios de sesión; puedes borrarlos en sus ajustes."
action:
  title: Revisa qué webs tiene permitidas
  steps:
    - "Si usas la extensión o el navegador de la app de escritorio, abre sus ajustes y busca la lista de webs permitidas."
    - "Quita las que no reconozcas y comprueba que no está activado «permitir en todos los sitios»."
    - "Prueba una tarea de solo lectura en una web pública y apunta en «Mi kit de ChatGPT» qué permisos das."
  check: He revisado los permisos de webs y sé cómo quitarlos
practice:
  task: "Tienes abiertas cuatro pestañas con portátiles para tu hija, que empieza la universidad. Escribe la petición para que ChatGPT las compare en el navegador sin comprar nada."
  require: [formato, limites, contexto]
  extra:
    - label: Decir que solo lea las pestañas
      any: ["solo lee", "solo leer", "solo mira", "solo consulta", "solo compara", "pestañas abiertas", "solo las pestañas"]
      hint: "Di qué puede usar: «Mira solo las pestañas abiertas»."
  sample: "Mi hija empieza la universidad y le busco un portátil para tomar apuntes y hacer trabajos. Mira solo las cuatro pestañas abiertas con portátiles y compáralos en una tabla con precio, peso, autonomía de batería y memoria. No compres, no añadas nada a la cesta y no rellenes formularios. Dime si algún dato no aparece en la página."
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-privacidad, openai-noticias]
---

## La idea

Un **navegador con IA** lee las páginas contigo y, si le dejas, **actúa** en ellas: abre webs, hace clic, escribe. OpenAI tuvo uno propio para Mac, **ChatGPT Atlas**, pero **dejó de funcionar el 9 de agosto de 2026**. Sus funciones pasaron a dos sitios:

- **El navegador integrado de la app de escritorio** de ChatGPT. Tiene su propio perfil: no usa tus pestañas, contraseñas ni sesiones de tu navegador habitual. Inicias sesión en cada web dentro de él.
- **La extensión de ChatGPT** para Chrome, Edge, Brave, Opera y Vivaldi. Sirve cuando la tarea necesita tu navegador de siempre: tus pestañas abiertas, el texto que seleccionas o webs donde ya has iniciado sesión. Abre un chat al lado de la página (en Opera, no) y funciona junto a la app de escritorio.

**Los permisos importan más que nunca:**

- Al instalar la extensión, el navegador pide permisos amplios (leer y cambiar datos de las webs, historial, descargas). Es el acceso máximo que podría usar.
- Aun así, ChatGPT **pregunta antes de usar cada web nueva**. Puedes permitir una vez, en ese sitio o en todos. «En todos» quita las preguntas: evítalo.
- Para el **historial** pregunta cada vez y solo para esa tarea.
- Antes de **enviar datos, comprar o borrar**, pide confirmación.

**Memoria y privacidad.** El control del navegador sigue tu ajuste de **memoria de ChatGPT**: si la desactivas, no la usa. OpenAI dice que no guarda un registro completo de lo que hace en el navegador, solo lo que entra en el chat (texto de la página, capturas), y ahí se aplican tus controles de datos.

Trata **el contenido de las webs como no fiable**: una página puede esconder instrucciones para desviar a ChatGPT.

## En la práctica

1. Instala la app de escritorio o la extensión desde fuentes oficiales.
2. Empieza con tareas de **solo lectura**: comparar, resumir, buscar un dato.
3. Concede permisos **web a web** y revisa la lista de vez en cuando.
4. Para acciones con tu cuenta (enviar, comprar), **quédate delante** y revisa cada confirmación.

> Prueba: «Compara las pestañas abiertas de pisos en alquiler en una tabla con precio, metros, ascensor y fianza. Solo lee las páginas: no escribas a nadie ni rellenes formularios. Dime qué dato no aparece en cada anuncio.»

## Error frecuente

Permitir «en todos los sitios» para no ver más avisos. Así ChatGPT puede actuar en cualquier web abierta, también en una preparada para engañarlo.

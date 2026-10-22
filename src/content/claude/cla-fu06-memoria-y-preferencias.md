---
title: Memoria, instrucciones y estilo
description: Qué recuerda Claude de tus chats, cómo verlo, pausarlo y borrarlo, y cómo dejar fijado una vez cómo quieres que te responda.
level: basico
track: cla-funciones
order: 206
skills: [cla-proyectos, cla-privacidad, cla-plantillas]
terms: [memoria-de-claude, estilo-de-respuesta, instrucciones-personales, chat-incognito]
hook: "Un día Claude te saluda recordando que estás buscando piso en Bilbao. Nunca se lo dijiste en ese chat. ¿Qué sabe de ti y cómo lo controlas?"
takeaway: La memoria hace que Claude recuerde datos útiles entre conversaciones; puedes verla, corregirla, pausarla o borrarla en los ajustes. Para el tono y el formato, déjalo escrito una vez en tus instrucciones para Claude.
scenario:
  kind: producto
  label: Caso práctico
  title: Lo que Claude sabía de Carmen
  body: "Carmen abre los ajustes de memoria y ve varios temas guardados: su trabajo de enfermera, que prepara un viaje a Lisboa y un problema de salud que comentó una vez. Borra ese último tema. Después, en sus instrucciones para Claude, escribe: «Respóndeme corto, sin listas largas, y en español de España»."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-fu06-q1
    q: "Tomás quiere consultar a Claude algo delicado sobre una deuda familiar y prefiere que no quede en la memoria ni en el historial. ¿Qué hace?"
    options: ["Usa un chat normal y lo borra luego", "Abre un chat de incógnito", "Restablece toda la memoria antes de preguntar"]
    answer: 1
    explain: "Los chats de incógnito no se guardan en la memoria ni en el historial. Restablecer la memoria tienta, pero borra todo lo demás para siempre y no hace falta."
  - type: truefalse
    id: cla-fu06-q2
    q: "Si restableces la memoria de Claude, puedes deshacerlo al día siguiente si te arrepientes."
    answer: false
    explain: "Restablecer borra para siempre todos los recuerdos, también los de tus proyectos. Si solo quieres parar un tiempo, usa la opción de pausar, que conserva lo guardado."
  - type: choice
    id: cla-fu06-q3
    q: "Te cansa que Claude te conteste siempre con listas larguísimas. ¿Cuál es la solución más duradera?"
    options: ["Pedirlo en cada mensaje", "Escribirlo en tus instrucciones para Claude, en los ajustes", "Cambiar de modelo"]
    answer: 1
    explain: "Las instrucciones de tu cuenta se aplican a todas las conversaciones, así no lo repites. Pedirlo en cada mensaje funciona, pero se olvida; cambiar de modelo no cambia tus preferencias."
tips:
  - "Una vez al mes, abre los ajustes de memoria y borra lo que ya no quieras que recuerde."
  - "Puedes decírselo en el chat: «recuerda que soy vegetariana» u «olvida lo de mi mudanza»."
  - "Si un proyecto es delicado, desactiva en él el uso de la memoria de tu cuenta para que vaya por separado."
action:
  title: Revisa tu memoria y fija tu estilo
  steps:
    - "Abre en los ajustes la sección de memoria y lee los temas guardados."
    - "Borra o corrige al menos uno que no quieras o que esté mal."
    - "Escribe en tus instrucciones para Claude dos líneas sobre cómo quieres las respuestas."
    - "Copia esas dos líneas en «Mi kit de Claude»."
  check: He revisado lo que Claude recuerda de mí y he escrito mis instrucciones
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

Hay tres ajustes que hacen que Claude «te conozca»:

**1. La memoria.** Claude guarda datos útiles de tus chats, por **temas**, y los usa en conversaciones nuevas. Así no repites quién eres ni en qué estás.

- **Viene activada** en los planes individuales, gratis y de pago. En los planes de empresa la activa primero la organización y luego cada persona.
- **La controlas tú** desde la sección de memoria de los ajustes:
  - **Ver y editar** cada tema guardado, o **borrarlo**.
  - **Pausar**: deja de usarla y de crear recuerdos, pero conserva lo guardado.
  - **Restablecer**: lo borra todo, también la memoria de tus proyectos. **No se puede deshacer.**
- **Cada proyecto tiene su propia memoria**, que no se mezcla con la de otros proyectos.
- **Los chats de incógnito** no se guardan en la memoria ni en el historial.

**2. Las instrucciones para Claude.** Un texto en los ajustes de tu cuenta que se aplica a **todas** tus conversaciones: tu idioma, tu nivel, lo que no quieres.

**3. El estilo de respuesta.** Cómo te escribe: corto o largo, formal o cercano. Claude tenía un menú de «estilos», que se está sustituyendo por **habilidades**. Lo más sencillo y estable es escribir tu estilo en tus instrucciones.

## En la práctica

1. Abre los ajustes de memoria y revisa qué hay. Borra lo que no deba estar (salud, deudas, datos de otras personas).
2. Si un chat concreto no debe usar la memoria, usa **incógnito**.
3. Escribe tus instrucciones generales, cortas.

> Prueba (en tus instrucciones para Claude): «Escríbeme en español de España, con tuteo y frases cortas. Ve al grano y usa listas solo si hay más de tres puntos. Si no estás seguro de un dato, dilo. Cuando el tema sea de salud, dinero o leyes, recuérdame consultar a un profesional».

## Error frecuente

No mirar nunca qué ha guardado. La memoria es útil, pero conviene revisarla de vez en cuando, como el historial del navegador.

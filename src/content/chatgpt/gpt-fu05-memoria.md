---
title: "La memoria: qué recuerda de ti"
description: Cómo funciona la memoria de ChatGPT (memorias guardadas e historial), cómo verla, borrarla o desactivarla, y cuándo usar un chat temporal.
level: basico
track: gpt-funciones
order: 205
skills: [gpt-proyectos-memoria, gpt-privacidad]
terms: [memoria-de-chatgpt, chat-temporal, datos-personales]
hook: "Un día ChatGPT te sugiere recetas sin gluten. No se lo has dicho en ese chat, pero sí hace meses en otro. ¿Qué sabe de ti y cómo lo controlas?"
takeaway: La memoria hace que ChatGPT use en chats nuevos lo que sabe de ti. Revísala de vez en cuando, borra lo que no deba estar y usa un chat temporal para lo delicado.
scenario:
  kind: producto
  label: Caso práctico
  title: Lo que ChatGPT sabía de Samuel
  body: "Samuel se mudó de Bilbao a Sevilla hace medio año, pero ChatGPT le sigue proponiendo planes en Bilbao. Le pregunta «¿qué sabes de mí?» y ve que tiene guardada su antigua ciudad. Borra esa memoria en la configuración, escribe «recuerda que ahora vivo en Sevilla» y comprueba que la nueva aparece en la lista."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-fu05-q1
    q: "Consuelo contó en un chat normal un problema de salud y ahora no quiere que ChatGPT lo recuerde. ¿Qué hace?"
    options: ["Borra el chat y ya está", "Revisa sus memorias guardadas, borra la que hable de eso y borra también el chat", "Cambia la contraseña de su cuenta"]
    answer: 1
    explain: "Las memorias guardadas van aparte del historial. Borrar solo el chat tienta por rápido, pero si ChatGPT guardó una memoria a partir de él, esa memoria sigue ahí."
  - type: truefalse
    id: gpt-fu05-q2
    q: "Un chat temporal no crea memorias nuevas ni aparece en tu historial."
    answer: true
    explain: "Para eso sirve. Ojo: tienta pensar que no queda nada en ningún sitio, pero OpenAI puede guardar una copia hasta 30 días por seguridad."
  - type: choice
    id: gpt-fu05-q3
    q: "Quieres que ChatGPT deje de usar tus chats antiguos, pero sin perder esos chats. ¿Qué haces?"
    options: ["Borras todo el historial", "Cambias de contraseña", "Desactivas la referencia al historial de chats en la configuración"]
    answer: 2
    explain: "Desactivarla hace que deje de usar lo que recuerda de chats pasados, y esos chats siguen en tu historial. Borrar el historial tienta por rápido, pero pierdes conversaciones que quizá quieras."
tips:
  - "Puedes pedirlo en el chat: «recuerda que soy vegetariana» u «olvida lo de mi mudanza». Luego compruébalo en la configuración."
  - "Las opciones de memoria varían según el plan y el país; en el plan gratis, la referencia al historial es más ligera."
action:
  title: Revisa tu memoria
  steps:
    - "Abre la personalización en la configuración y mira las opciones de memoria que tienes."
    - "Lee tus memorias guardadas y borra al menos una que no quieras o esté mal."
    - "Pregunta en un chat: «¿Qué sabes de mí?» y compara con lo que has visto."
    - "Apunta en «Mi kit de ChatGPT» qué temas usarás solo en chats temporales."
  check: He revisado lo que ChatGPT recuerda de mí
practice:
  task: "Le contaste a ChatGPT que estás de baja por ansiedad y no quieres que lo recuerde, pero sí que preparas un traslado de trabajo a Valladolid. Escribe la petición."
  require: [limites]
  extra:
    - label: "Pedir que olvide algo concreto"
      any: ["olvida", "no recuerdes", "borra", "no guardes"]
      hint: "Di qué tiene que olvidar: «olvida lo que te conté sobre…»."
    - label: "Pedir que te diga qué ha guardado"
      any: ["que has guardado", "que recuerdas", "que tienes guardado", "que sabes de mi"]
      hint: "Pide que te diga qué tiene guardado y compruébalo en la configuración."
  sample: "Olvida lo que te conté sobre mi baja médica y no lo guardes en la memoria. En cambio, recuerda que estoy preparando un traslado de trabajo a Valladolid para septiembre y que prefiero respuestas cortas, en español de España y sin tecnicismos. No guardes datos de salud ni de mi familia. Al terminar, dime qué tienes guardado sobre mí para que lo compruebe en la configuración."
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-privacidad]
---

## La idea

La **memoria** hace que ChatGPT use en chats nuevos lo que sabe de ti, para no tener que repetírselo. Tiene dos partes:

- **Memorias guardadas.** Datos concretos que ChatGPT apunta o que le pides apuntar («recuerda que…»). Puedes verlas y borrarlas una a una.
- **Referencia al historial de chats.** ChatGPT tiene en cuenta tus conversaciones pasadas aunque no haya guardado nada concreto.

Lo que conviene saber:

- **La controlas tú** en la personalización de la configuración: activarla o desactivarla, ver y borrar memorias. Lo que ves depende de tu plan y tu versión.
- **Borrar un chat no borra la memoria** que salió de él. Para quitarlo del todo, borra las dos cosas.
- **Desactivar la referencia al historial** no borra tus chats, pero sí lo que ChatGPT recordaba de ellos (OpenAI lo elimina en un plazo de 30 días).
- **En Europa,** la referencia al historial no se activa sola: tienes que aceptarla o activarla tú.
- **El chat temporal** no aparece en tu historial, no crea memorias y no se usa para entrenar modelos.

## En la práctica

1. Revisa tus memorias y **borra lo delicado**: salud, deudas, datos de otras personas.
2. Para un tema puntual delicado, abre un **chat temporal** desde el principio.
3. Si quieres que deje de tirar de chats antiguos, desactiva la referencia al historial.

> Prueba: «¿Qué sabes de mí? Haz una lista de lo que tienes guardado y de lo que usas de mis chats anteriores, para que yo decida qué borrar».

## Error frecuente

Contar algo íntimo en un chat normal y creer que, al borrar el chat, ya no queda nada. Revisa también las memorias.

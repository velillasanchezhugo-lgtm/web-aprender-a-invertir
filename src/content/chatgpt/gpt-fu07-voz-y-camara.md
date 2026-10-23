---
title: Hablar con ChatGPT y enseñarle lo que ves
description: Cómo usar el modo de voz de ChatGPT, cuándo puedes compartir la cámara o la pantalla del móvil y qué cuidar con lo que enseñas.
level: basico
track: gpt-funciones
order: 207
skills: [gpt-modelos-modos, gpt-privacidad]
terms: [modo-de-voz, datos-personales]
hook: "Estás en la cocina con las manos llenas de harina y no recuerdas cuánto tiempo tiene que reposar la masa. ¿Puedes preguntárselo a ChatGPT sin tocar el móvil?"
takeaway: El modo de voz sirve para conversar con ChatGPT cuando no puedes o no quieres escribir. Si tu app permite enseñarle la cámara o la pantalla, fíjate antes en qué sale en la imagen.
scenario:
  kind: producto
  label: Caso práctico
  title: La lavadora de Ramón
  body: "A Ramón le parpadea un código de error en la lavadora. Abre el modo de voz en el móvil, enseña con la cámara el panel y pregunta qué significa. ChatGPT le dice que suele ser un filtro atascado y le explica dónde mirar, pero le avisa de que lo confirme en el manual de su modelo. Antes de enfocar, Ramón aparta la carta del banco que había encima."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-fu07-q1
    q: "Vas a compartir la pantalla del móvil con ChatGPT para que te ayude a rellenar un formulario. ¿Qué haces antes?"
    options: ["Nada: ChatGPT no se fija en lo que no le preguntas", "Cierras las notificaciones y las apps con datos privados que puedan verse", "Compartes la pantalla con la app del banco abierta, por si hace falta"]
    answer: 1
    explain: "Todo lo que aparece en pantalla llega a ChatGPT: mensajes, avisos, números. Pensar que «solo mira lo que le preguntas» tienta, pero la imagen va entera."
  - type: truefalse
    id: gpt-fu07-q2
    q: "Si ChatGPT reconoce por la cámara una pastilla o un producto químico, puedes fiarte sin leer el envase."
    answer: false
    explain: "Puede confundir cosas parecidas por la luz o el ángulo. Con medicamentos y productos peligrosos, manda lo que dice el envase o el prospecto, y si hay dudas, tu farmacia."
  - type: choice
    id: gpt-fu07-q3
    q: "Abres el modo de voz y no ves el botón de la cámara. ¿Qué es lo más probable?"
    options: ["Tu móvil está roto", "Esa opción depende del plan, de la app y del tipo de voz que tengas elegido", "ChatGPT ya no tiene voz"]
    answer: 1
    explain: "Compartir vídeo o pantalla solo está en algunas cuentas, en la app del móvil y con ciertas experiencias de voz. Pensar en una avería tienta, pero es cuestión de opciones."
tips:
  - "Pide respuestas cortas: escuchar una lista de diez puntos cansa mucho más que leerla."
  - "En sitios con gente, recuerda que los demás oyen lo que preguntas y lo que te contesta."
action:
  title: Prueba una conversación de voz
  steps:
    - "Abre el modo de voz desde el icono de voz del chat."
    - "Pregunta algo práctico de hoy (una receta, una duda de casa, preparar una entrevista) y pide respuestas breves."
    - "Mira en la configuración qué opciones de voz tienes."
    - "Apunta en «Mi kit de ChatGPT» qué cosas no enseñarás nunca por la cámara."
  check: He tenido una conversación de voz con ChatGPT
practice:
  task: "Estás en una ferretería y no sabes qué tacos necesitas para colgar una estantería en tu pared de pladur. Escribe lo que le dirías a ChatGPT mientras le enseñas el pasillo con la cámara."
  require: [contexto, formato, verificar]
  extra:
    - label: "Decir qué le estás enseñando"
      any: ["te enseño", "en la imagen", "con la camara", "lo que ves", "en la foto"]
      hint: "Di qué está viendo: «te enseño con la cámara los tacos de este pasillo»."
  sample: "Estoy en una ferretería y quiero colgar en casa una estantería de unos 15 kilos en una pared de pladur. Te enseño con la cámara los tacos que hay en este pasillo. Dime cuál me sirve y por qué, en frases cortas, porque te escucho por el auricular. Si por la imagen no estás seguro, dímelo y explícame qué debo preguntar al dependiente."
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

Con el **modo de voz** hablas con ChatGPT y te contesta en voz alta, como en una llamada. Puedes interrumpirle y seguir.

- **Dónde está.** En la app del móvil y en la web, desde el icono de voz junto a donde escribes. Gratis y de pago, con límites de uso que cambian.
- **Hay varias experiencias de voz.** En la configuración eliges la experiencia y la voz. Las opciones dependen del plan, del país y de la versión de la app.
- **Cámara y pantalla.** En la app del móvil (iOS y Android), algunas cuentas de pago pueden enseñar a ChatGPT lo que ve la cámara o lo que hay en la pantalla. Solo funciona con algunas experiencias de voz (no con la más reciente, «Live») y tiene límites de uso.

**Usos que funcionan:** cocinar o hacer bricolaje con las manos ocupadas, ensayar una entrevista, practicar un idioma.

**Cuidado con lo que muestras.** Lo que sale en la cámara o en la pantalla llega a ChatGPT: cartas, DNI, notificaciones, caras de otras personas. Apártalo o ciérralo antes.

## En la práctica

1. Habla con frases completas, como a una persona.
2. Pide **respuestas cortas** para escucharlas bien.
3. Si vas a enseñar algo, encuadra solo eso y di qué es.
4. Para lo importante (medicinas, electricidad, gas), comprueba la respuesta en el manual, el envase o con un profesional.

> Prueba (en voz alta): «Voy a ensayar una entrevista para un puesto de dependiente en una librería. Hazme las preguntas de una en una, espera mi respuesta y, al final, dime en tres frases qué he hecho bien y qué puedo mejorar».

## Error frecuente

Compartir la pantalla con notificaciones abiertas. Un mensaje privado que aparece en ese momento también lo ve ChatGPT.

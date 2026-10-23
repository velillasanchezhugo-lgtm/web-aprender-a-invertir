---
title: "Artefactos: lo que Claude te deja hecho"
description: Qué son los artefactos de Claude, cómo pedir un documento, un gráfico o una pequeña app sin programar, cómo cambiarlos y cómo compartirlos con cuidado.
level: basico
track: cla-funciones
order: 203
skills: [cla-artefactos]
terms: [artefacto]
hook: "Le pides a Claude un cuadrante de turnos para limpiar el piso compartido y, en vez de un texto en el chat, aparece algo en un panel al lado. ¿Qué es eso y qué puedes hacer con ello?"
takeaway: Un artefacto es un resultado que puedes reutilizar (documento, tabla, gráfico, pequeña app) que Claude crea junto al chat. Lo mejoras pidiendo cambios concretos y es privado hasta que tú lo compartes.
scenario:
  kind: producto
  label: Caso práctico
  title: El cuadrante de Noelia
  body: "Noelia comparte piso con tres personas. Pide a Claude una pequeña app para repartir las tareas de limpieza por semanas. Claude la crea en un artefacto con botones para marcar lo hecho. Noelia pide dos cambios («añade la tarea de sacar el vidrio», «pon los nombres en colores») y, como tiene un plan de pago, la comparte con sus compañeras de piso, que también tienen cuenta de Claude."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-fu03-q1
    q: "¿Cuál de estas peticiones encaja mejor con un artefacto?"
    options: ["¿Cuántos gramos tiene una libra?", "Crea una hoja para controlar los gastos del mes con categorías y un gráfico", "¿Qué significa «cuota» en una factura de la luz?"]
    answer: 1
    explain: "Es un contenido largo, independiente y que vas a reutilizar: justo lo que va a un artefacto. Las otras dos son respuestas cortas, que se quedan en el chat."
  - type: truefalse
    id: cla-fu03-q2
    q: "Un artefacto nuevo es público desde el principio: cualquiera puede verlo si adivina el enlace."
    answer: false
    explain: "Los artefactos empiezan siendo privados. Nada se comparte hasta que tú lo decides. Tienta pensar lo contrario porque tienen enlace, pero sin compartir nadie más puede abrirlo."
  - type: choice
    id: cla-fu03-q3
    q: "Gabriel tiene un artefacto con el presupuesto de su boda y quiere cambiar solo la tabla del catering. ¿Qué hace?"
    options: ["Pide que lo rehaga entero desde cero", "Pide el cambio concreto: «en la tabla del catering, sube el precio por invitado y recalcula el total»", "Copia el texto en otro chat y empieza de nuevo"]
    answer: 1
    explain: "Un cambio concreto mantiene lo que ya estaba bien. Rehacerlo entero tienta cuando algo falla, pero puede estropear partes que ya te servían."
tips:
  - "Si Claude no te lo crea en un artefacto, pídelo: «hazlo como documento en un panel aparte»."
  - "Antes de compartir una app con datos, comprueba qué datos guarda y quién podrá verlos."
  - "Si el artefacto hace cálculos (un presupuesto, una tabla de gastos), comprueba a mano dos o tres resultados."
action:
  title: Crea tu primer artefacto
  steps:
    - "Pide a Claude algo que vayas a reutilizar: una lista de la compra semanal por pasillos, un plan de estudio o un cuadrante de tareas."
    - "Pide un cambio concreto sobre el resultado."
    - "Busca dónde se guarda en la aplicación para encontrarlo otro día."
  check: He creado un artefacto y le he pedido al menos un cambio
practice:
  task: "Entrenas a un equipo de fútbol infantil y cada sábado apuntas en un papel quién juega y cuántos minutos. Escribe la petición para que Claude te cree una pequeña app (un artefacto) que puedas reutilizar."
  require: [contexto, publico, formato]
  extra:
    - label: "Decir qué debe poder hacer"
      any: ["que se pueda", "que permita", "poder ", "boton", "marcar", "sumar"]
      hint: "Di qué debe poder hacer la app: «un botón para…», «que se pueda marcar…»."
  sample: "Soy entrenador voluntario de un equipo de fútbol infantil de doce niños. Crea una pequeña app en un artefacto para apuntar cada sábado quién juega y cuántos minutos. Es para la otra entrenadora y para mí, y la usaremos en el móvil desde la banda. Que tenga un botón por jugador para sumar minutos, una tabla con el total de la temporada y que se pueda reiniciar en cada partido. Usa nombres de ejemplo, sin datos reales de los niños."
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [claude-ayuda]
---

## La idea

Un **artefacto** es algo que Claude te deja hecho y que podrías enseñar a otra persona: un documento, una presentación, una tabla, un gráfico, una página web o una **pequeña app** con botones. Se abre en un **panel junto al chat**, no mezclado con la conversación.

Claude lo crea cuando el contenido es **largo, independiente y reutilizable**. Ejemplos sin programar nada:

- Un plan de comidas de la semana con lista de la compra.
- Una tabla de gastos del mes con un gráfico.
- Un cuadrante de turnos o de tareas de casa.
- Una presentación para una reunión de vecinos.

Lo que conviene saber:

- **Está en todos los planes**, gratis y de pago. Necesita la función de ejecución de código y creación de archivos, que viene activada en los ajustes de **Capacidades**.
- **Se guarda.** Todos tus artefactos quedan en la sección «Artefactos» de la barra lateral, donde también puedes empezar desde plantillas de documento, presentación o diseño.
- **Es privado** hasta que lo compartes. Compartirlo (con un enlace o invitando a personas por correo) es cosa de los planes de pago, y quien lo abra necesita una cuenta de Claude. En los planes de empresa, por defecto se queda dentro de la organización.
- **Apps que usan Claude.** Algunas apps llaman a Claude por dentro. Si las compartes, lo que gaste cada persona cuenta en su propio plan.

## En la práctica

1. Pide el resultado diciendo **qué es, para quién y qué debe incluir**.
2. Revisa el panel y pide **cambios concretos**, de uno en uno. En algunos documentos puedes seleccionar un trozo y pedir que cambie solo eso.
3. Cuando esté listo, expórtalo (por ejemplo, a Word, PDF o PowerPoint, según el tipo) o compártelo desde su botón de compartir.

> Prueba: «Crea una pequeña app para repartir las tareas de limpieza entre cuatro compañeros de piso: Ana, Iván, Sara y yo. Que rote cada semana, que se pueda marcar cada tarea como hecha y que se vea bien en el móvil».

## Error frecuente

Pedir «hazlo mejor» sin decir qué. Di exactamente qué parte cambiar y cómo.

---
title: Tareas largas, por pasos
description: "Cómo dividir un encargo grande en Claude: primero el esquema, luego cada parte, revisando sobre la marcha en vez de pedirlo todo de golpe."
level: basico
track: cla-pedir
order: 105
skills: [cla-iterar]
terms: [prompt, ventana-de-contexto]
hook: "Le pides a Claude «escríbeme el trabajo de fin de curso entero» y recibes algo largo que no sabes por dónde corregir. ¿Cómo se hace para no perder el control?"
takeaway: Para algo grande, pide primero un esquema, corrígelo y luego avanza parte por parte. Revisar cada paso cuesta menos que arreglar el resultado entero.
scenario:
  kind: operacion
  label: Caso práctico
  title: El plan de la boda de Lorena
  body: "Lorena pide «organízame la boda» y recibe una lista enorme y general. Empieza de nuevo: primero pide un esquema de las grandes tareas con fechas para una boda en junio. Lo corrige (ya tiene finca) y después trabaja cada bloque por separado: invitados, presupuesto y proveedores. Cada parte tarda unos minutos y se ajusta a lo suyo."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-pe05-q1
    q: "Diego debe preparar un informe de 10 páginas sobre las ventas del año para su empresa. ¿Cuál es el mejor primer paso con Claude?"
    options: ["Pedir el informe completo de una vez", "Pedir un esquema de los apartados, revisarlo y luego desarrollar cada uno con sus datos", "Pedir que lo escriba y luego leerlo solo por encima"]
    answer: 1
    explain: "Con el esquema decides tú la estructura antes de que se escriba nada. Pedirlo todo de golpe tienta porque parece más rápido, pero luego es difícil ver qué falla y corregirlo."
  - type: truefalse
    id: cla-pe05-q2
    q: "En una conversación muy larga, Claude puede perder de vista detalles del principio, así que a veces conviene empezar un chat nuevo con un resumen."
    answer: true
    explain: "Cada conversación tiene un límite de lo que Claude puede tener en cuenta a la vez. Si notas que olvida cosas, pide un resumen de lo decidido y pégalo en un chat nuevo."
  - type: choice
    id: cla-pe05-q3
    q: "Has pedido la parte 2 de tu documento y no te gusta. ¿Qué haces?"
    options: ["Decir qué falla en esa parte y pedir que la rehaga antes de seguir", "Seguir con la parte 3 y arreglarlo al final", "Borrar todo y empezar de cero"]
    answer: 0
    explain: "Corregir cada parte en su momento evita arrastrar el error. Si sigues adelante, las partes siguientes pueden apoyarse en lo que estaba mal."
tips:
  - "Al final, pide una revisión de conjunto: repeticiones, contradicciones entre partes y huecos."
  - "Si el trabajo es para clase o para tu empresa, revisa qué normas hay sobre usar IA antes de empezar."
action:
  title: Divide un encargo
  steps:
    - "Elige algo que tengas pendiente y que te dé pereza por grande: un viaje, un informe, una mudanza."
    - "Pide a Claude solo el esquema y corrígelo con lo que tú sabes."
    - "Desarrolla hoy solo la primera parte."
  check: He dividido un encargo grande y he hecho la primera parte con Claude
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [claude-docs, claude-ayuda]
---

## La idea

Cuando pides algo grande de una sola vez, pasan tres cosas:

- Claude tiene que **adivinar** muchas decisiones que te tocaban a ti: la estructura, qué es importante, qué sobra.
- Recibes un bloque largo y es **difícil ver qué falla**.
- Si algo del principio está mal, **todo lo demás se apoya en ese error**.

La alternativa es trabajar **por pasos**:

1. **Esquema primero.** Pide solo la estructura: apartados, orden y una línea de qué irá en cada uno.
2. **Corrige el esquema.** Quita, añade y reordena. Es el momento más barato para cambiar de idea.
3. **Parte por parte.** Pide cada apartado por separado, con los datos que necesita.
4. **Revisa cada parte** antes de pasar a la siguiente.
5. **Repaso final** del conjunto.

Además, las conversaciones tienen un límite de lo que Claude puede tener en cuenta a la vez. En chats muy largos puede olvidar detalles del principio. Si pasa, pide un resumen de lo decidido y continúa en un chat nuevo.

## En la práctica

> Prueba: «Quiero preparar una mudanza de Valencia a Bilbao para dentro de dos meses. Somos dos adultos y un perro. Antes de nada, dame solo un esquema de las grandes tareas ordenadas por semanas, en una lista. No desarrolles nada todavía: primero quiero revisarlo.»

Cuando lo tengas corregido:

> «Perfecto. Con el esquema que hemos acordado, desarrolla solo la semana 1. Dame una lista de tareas con lo que tengo que tener a mano para cada una.»

Y al acabar: «Repasa todo el plan y dime si hay tareas repetidas, contradicciones o algo importante que falte».

## Error frecuente

Pedirlo todo de golpe, leer por encima y dar por bueno el resultado. Lo que no has revisado en cada paso es lo que más fallos esconde.

---
title: Un tutor que pregunta
description: "Cómo pedirle a Claude que te enseñe con preguntas y pistas en vez de darte la respuesta, y qué opciones tiene para trabajar en «modo aprendizaje»."
level: basico
track: cla-aprender
order: 401
skills: [cla-aprender]
terms: [modo-aprendizaje, metodo-socratico, instrucciones-personales]
hook: "Le pides a Claude que te resuelva un problema de física, copias la solución y al día siguiente, en el examen, no sabes hacer uno parecido. ¿Qué ha fallado?"
takeaway: Si Claude te da la respuesta, aprendes poco. Pídele que te guíe con preguntas y pistas, y que no te dé la solución hasta que lo intentes tú.
scenario:
  kind: operacion
  label: Caso práctico
  title: Los porcentajes de Aitana
  body: "Aitana, de 2.º de Bachillerato, no entiende los problemas de porcentajes encadenados. Primero pide a Claude que se los resuelva y los copia. Luego cambia: «No me des la solución. Hazme preguntas paso a paso y dime si voy bien». Tarda más, pero al tercer ejercicio ya los hace sola."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-ap01-q1
    q: "Bruno prepara un examen de economía y no entiende la oferta y la demanda. ¿Qué petición le ayuda a aprender?"
    options: ["«Explícame la oferta y la demanda»", "«Quiero entender la oferta y la demanda. No me lo expliques de golpe: hazme preguntas, de una en una, y dame pistas si me atasco»", "«Hazme el ejercicio 4 del libro»"]
    answer: 1
    explain: "Con preguntas, Bruno tiene que pensar y Claude ve dónde se atasca. Una explicación de golpe también sirve, pero tienta porque parece más rápida y se olvida antes. Que le haga el ejercicio no le enseña nada."
  - type: truefalse
    id: cla-ap01-q2
    q: "Para que Claude te enseñe con preguntas necesitas obligatoriamente una opción especial de pago."
    answer: false
    explain: "Basta con pedírselo con palabras, en cualquier plan. Las opciones de la aplicación pensadas para aprender lo hacen más cómodo, pero no son imprescindibles."
  - type: choice
    id: cla-ap01-q3
    q: "Llevas veinte minutos atascado en el mismo paso y empiezas a frustrarte. ¿Qué haces?"
    options: ["Pedir una pista más concreta o un ejemplo parecido resuelto, y luego volver a intentarlo", "Rendirte y copiar la solución sin leerla", "Cerrar el chat y dejarlo"]
    answer: 0
    explain: "Un tutor también ajusta la ayuda. Una pista mayor o un ejemplo resuelto parecido te desatasca sin quitarte el ejercicio. Copiar tienta cuando estás cansado, pero vuelve el mismo atasco en el examen."
tips:
  - "Al terminar, pide «hazme dos ejercicios parecidos sin ayuda» para comprobar que lo sabes."
  - "Claude también se equivoca en ejercicios, sobre todo con cálculos. Si algo no te cuadra, compruébalo con tu libro o tu profesor."
action:
  title: Estudia un tema con preguntas
  steps:
    - "Elige un tema que te cueste, de clase, del trabajo o por curiosidad."
    - "Pega la petición de esta sesión en Claude y responde a sus preguntas durante cinco minutos."
    - "Si te gusta, guárdala en tu nota «Mi kit de Claude» o añádela a tus instrucciones."
  check: He estudiado un tema con Claude haciéndome preguntas
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [claude-ayuda, anthropic-noticias]
---

## La idea

Leer una respuesta bien explicada da sensación de entender. Pero aprender de verdad exige **pensar tú**: equivocarte, corregirte y llegar a la respuesta. Si Claude lo hace por ti, el esfuerzo (y lo aprendido) se queda en el chat.

Puedes pedirle que funcione como un **tutor que pregunta**, al estilo del **método socrático**: enseñar con preguntas encadenadas para que llegues tú a la conclusión. En la práctica, Claude:

- te pregunta qué sabes ya;
- te plantea el siguiente paso como pregunta;
- te da **pistas**, no soluciones, cuando te atascas;
- te dice si vas bien y por qué.

**¿Existe un modo especial?** Claude ha ofrecido una forma de responder llamada «Aprendizaje» (Learning) pensada justo para esto. Estas opciones han cambiado de nombre y de sitio hace poco (el centro de ayuda ya no habla de «estilos», sino de «habilidades»), así que puede que la encuentres con otro nombre o que no la veas. Mira el menú de herramientas del chat o los ajustes, y consulta el centro de ayuda.

Lo importante: **no la necesitas**. Funciona igual pidiéndolo con palabras, en cualquier plan.

## En la práctica

> Prueba: «Quiero aprender [TEMA]. Actúa como un tutor paciente. No me des la respuesta: hazme preguntas de una en una, espera a que conteste y dame una pista si me equivoco. Empieza preguntándome qué sé ya. Cuando creas que lo domino, ponme un ejercicio sin ayuda.»

Si quieres que Claude te enseñe así siempre, añade una línea a tus **instrucciones personales** en los ajustes: «Cuando te pida aprender algo, guíame con preguntas en vez de darme la respuesta».

Y si un día solo necesitas el dato, dilo: «Hoy solo quiero la respuesta, sin preguntas».

## Error frecuente

Copiar la solución «para entenderla luego». Casi nunca llega ese luego, y el día del examen el atasco sigue ahí.

---
title: Titulares de pánico y de euforia
description: «Se desploma», «sangría», «récord histórico». Cómo pasar de puntos a porcentaje, poner la cifra en contexto y no dejar que el titular decida por ti.
level: basico
track: noticias
order: 406
skills: [psicologia-sesgos, caidas-recuperacion, hecho-opinion]
goals: [miedo, entender, jubilacion]
prereqs: [no-01-hecho-dato-opinion]
hook: "«Sangría en la bolsa: el Ibex se desploma 300 puntos». Suena a catástrofe. ¿Cuánto es eso en tu cartera?"
takeaway: "Pasa siempre de puntos a porcentaje, y de porcentaje a euros de tu cartera. Casi siempre el titular se queda en un susto."
scenario:
  kind: noticia
  label: Noticia de ejemplo
  title: "Sangría en los mercados: el Ibex 35 se desploma 300 puntos en su peor sesión en dos meses"
  body: "El Ibex 35 se desplomó ayer 300 puntos y cerró en 14.700, desde los 15.000 del día anterior. Los operadores hablan de «pánico» por las dudas sobre el crecimiento mundial. Hace solo tres semanas, el mismo índice marcaba un «récord histórico». «Esto puede ser el principio de algo peor», advierte un gestor en una tertulia. En lo que va de año, el índice acumula todavía una subida."
  note: Noticia ficticia con fines educativos.
questions:
  - type: estimate
    id: no06-q1
    q: "El Ibex pasa de 15.000 a 14.700 puntos. ¿Qué caída es en porcentaje?"
    answer: 2
    tolerance: 0.2
    min: 0
    max: 20
    step: 0.1
    unit: "%"
    explain: "300 / 15.000 = 2 %. Un día del −2 % es incómodo pero frecuente en bolsa. Con el índice en 2.000 puntos, 300 puntos habrían sido un 15 %: por eso los puntos, sin contexto, no dicen nada."
  - type: choice
    id: no06-q2
    q: "Tu cartera tiene 20.000 €, de los que el 5 % está en bolsa española. Si esa parte cae como el Ibex de la noticia, ¿cuánto pierdes ese día?"
    options: ["Unos 400 €", "Unos 20 €", "Unos 300 €", "Unos 1.000 €"]
    answer: 1
    explain: "20.000 × 5 % = 1.000 € en bolsa española; un 2 % de 1.000 € son 20 €. El error típico es aplicar el 2 % a toda la cartera (400 €) o confundir puntos con euros (300 €). Una cartera global depende poco de un solo país."
  - type: truefalse
    id: no06-q3
    q: "Si la bolsa marca un récord histórico, es señal de que está cara y va a caer pronto."
    answer: false
    explain: "En un mercado que sube a largo plazo, los récords son frecuentes y suelen llegar en grupo: cada nuevo máximo es un «récord». Un récord no predice una caída, igual que un −2 % no predice un desastre."
action:
  title: Traduce un titular a tu cartera
  steps:
    - "Busca el titular de bolsa más dramático de hoy (subida o bajada)."
    - "Pásalo a porcentaje: puntos movidos / nivel del día anterior."
    - "Multiplica ese porcentaje por la parte de tu cartera expuesta a ese índice. Escribe la cifra en euros."
  check: Sé convertir un titular de pánico o de euforia en euros de mi cartera
deeper: riesgo-volatilidad-perdidas
tool: simulador-caidas
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: General
sources: [baumeister-2001, kahneman-tversky-1979, sp500-history]
---

## La idea

Los titulares de bolsa usan palabras de catástrofe o de fiesta: «se desploma», «sangría», «se dispara», «récord». Tres pasos para leerlos:

1. **De puntos a porcentaje.** 300 puntos no significan nada sin el nivel del índice.
2. **De porcentaje a tu cartera.** ¿Qué parte de tu dinero está en ese índice?
3. **Contexto.** ¿Es una caída frecuente o rara? ¿Qué ha hecho el índice en el año o en diez años?

¿Por qué nos asustan tanto? Las malas noticias pesan más en la mente que las buenas (**sesgo de negatividad**), y una pérdida duele más que una ganancia igual (**aversión a las pérdidas**). Los medios lo saben: el miedo atrae lectores.

Y los **récords** no son raros: si un mercado sube a largo plazo, pasa mucho tiempo cerca de sus máximos, y cada nuevo máximo es «histórico».

## Con números

| Titular | Nivel previo | Movimiento | En % |
|---|---:|---:|---:|
| «Se desploma 300 puntos» | 15.000 | −300 | −2,0 % |
| El mismo movimiento con el índice en 2.000 | 2.000 | −300 | −15,0 % |
| «Se dispara 150 puntos» | 14.700 | +150 | +1,0 % |

Con una cartera de 20.000 € y un 5 % en bolsa española, el «desplome» supone **20 €**.

## Error frecuente

Vender tras el titular. Quien sale con el susto fija la pérdida y tiene que acertar cuándo volver. Incluso tras la crisis de 2008, el S&P 500 recuperó en 2013 sus máximos de 2007.

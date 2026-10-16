---
title: "Cuánto arriesgar: el tamaño lo decide el stop"
description: "Cómo calcular el tamaño de una posición con un riesgo fijo, qué tasa de acierto necesitas para no perder con costes y por qué las rachas malas son seguras."
level: basico
track: trading
order: 505
skills: [gestion-riesgo-trading, caidas-recuperacion]
goals: [miedo, entender]
prereqs: [tr-03-tipos-de-ordenes]
hook: "Aciertas 4 de cada 10 operaciones. ¿Estás perdiendo dinero? Depende de una cuenta que casi nadie hace antes de entrar."
takeaway: "Decide primero cuánto puedes perder (un % pequeño de tu capital); el tamaño de la posición sale de dividir ese riesgo entre la distancia al stop."
scenario:
  kind: operacion
  label: "Operación de ejemplo (en simulación)"
  title: "Elena planifica una operación en su cuenta de práctica"
  body: "Elena tiene una cuenta de práctica de 10.000 € y decide arriesgar como mucho el 1 % por operación: 100 €. Quiere comprar la acción ficticia Conservas Atlántico a 25,00 € con un stop en 23,75 € (1,25 € por debajo) y un objetivo en 27,50 € (2,50 € por encima). Cada operación completa le cuesta 6 € en comisiones y diferencial."
  note: "Ejemplo ficticio con fines educativos."
questions:
  - type: estimate
    id: tr05-q1
    q: "¿Cuántas acciones debe comprar Elena para que, si salta el stop, pierda 100 € (sin contar costes)?"
    answer: 80
    tolerance: 0
    min: 0
    max: 400
    step: 10
    unit: "acciones"
    explain: "Tamaño = riesgo / distancia al stop = 100 € / 1,25 € = 80 acciones (2.000 € invertidos). Fíjate: no arriesga 2.000 €, arriesga 100 €. Recuerda que en un hueco el stop puede ejecutarse peor."
  - type: estimate
    id: tr05-q2
    q: "Con un beneficio/riesgo de 2 a 1 y sin costes, ¿qué porcentaje mínimo de aciertos necesita Elena para no perder?"
    answer: 33
    tolerance: 1
    min: 0
    max: 100
    step: 1
    unit: "%"
    explain: "Si gana 2 cuando acierta y pierde 1 cuando falla, empata con 1 acierto de cada 3: 1 / (1 + 2) ≈ 33 %. Con los 6 € de costes, gana 194 € y pierde 106 €: necesita un 106 / 300 ≈ 35 %."
  - type: choice
    id: tr05-q3
    q: "Elena sufre 10 pérdidas seguidas. ¿Cómo queda su cuenta si arriesgó un 1 % cada vez, y si arriesgó un 5 %?"
    options: ["Con el 1 %, unos 9.044 € (−9,6 %); con el 5 %, unos 5.987 € (−40 %)", "Con el 1 %, 9.000 €; con el 5 %, 5.000 €", "Igual en los dos casos: el stop la protege"]
    answer: 0
    explain: "Cada pérdida es un % de lo que queda: 10.000 × 0,99^10 ≈ 9.044 € y 10.000 × 0,95^10 ≈ 5.987 €. Para recuperar un −40 % hace falta subir un +67 %. Para recuperar un −9,6 %, un +10,6 %."
action:
  title: "Calcula una operación en papel"
  steps:
    - "Elige una cifra de capital ficticio (por ejemplo, 5.000 €) y un riesgo del 1 %."
    - "Mira el precio actual de cualquier acción o ETF y elige dónde pondrías el stop."
    - "Calcula el tamaño: riesgo en € / (precio de entrada − stop). Anótalo sin enviar ninguna orden."
  check: "Sé calcular el tamaño de una posición a partir del stop"
deeper: gestion-del-riesgo
tool: simulador-caidas
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: General
sources: [cnmv-guia-ordenes]
---

## La idea

Quien opera sin plan decide primero cuánto comprar. Quien gestiona el riesgo lo hace al revés:

1. **Riesgo por operación**: una parte pequeña del capital. Una regla prudente habitual es no pasar del **1 %**.
2. **Stop**: dónde reconoces que te has equivocado.
3. **Tamaño** = riesgo en € / distancia al stop.

Después, dos números que deciden si ganas a la larga:

- **Beneficio/riesgo**: cuánto ganas cuando aciertas frente a cuánto pierdes cuando fallas.
- **Tasa de acierto necesaria** = 1 / (1 + beneficio/riesgo), y algo más con costes.

Y una certeza: **las rachas de pérdidas llegan**. Con un 40 % de aciertos, en 100 operaciones la probabilidad de encadenar al menos 6 pérdidas seguidas es de un **87 %**, y la de 8 seguidas, de un **49 %**.

## Con números

Tasa de acierto mínima para empatar, sin costes:

| Beneficio/riesgo | Aciertos necesarios |
|---:|---:|
| 1 a 1 | 50 % |
| 1,5 a 1 | 40 % |
| 2 a 1 | 33 % |
| 3 a 1 | 25 % |

Parece fácil, pero cuanto más lejos pones el objetivo, menos veces se alcanza. Y los costes suben la barrera en cada operación.

## Error frecuente

Mover el stop más lejos «para darle aire» cuando el precio se acerca. Así conviertes una pérdida pequeña y planificada en una grande.

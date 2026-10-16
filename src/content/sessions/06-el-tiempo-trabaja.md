---
title: El tiempo trabaja por ti
description: El interés compuesto explicado con números, por qué empezar pronto pesa más que la cantidad, y su lado oscuro.
level: cero
order: 6
goals: [jubilacion, entender]
prereqs: [05-la-inflacion-te-cobra]
hook: "Dos personas invierten 100 € al mes. Una empieza 10 años antes. ¿Cuánta diferencia crees que hay al final?"
takeaway: El interés compuesto premia el tiempo. Pero una tasa constante es un supuesto, no una promesa.
questions:
  - type: estimate
    id: s06-q1
    q: "Inviertes 100 € y ganas un 10 % cada año durante 2 años, reinvirtiendo lo ganado. ¿Cuánto tienes al final?"
    answer: 121
    tolerance: 0
    min: 100
    max: 140
    step: 1
    unit: "€"
    explain: "Año 1: 100 × 1,10 = 110 €. Año 2: 110 × 1,10 = 121 €. El segundo año ganas también sobre los 10 € del primero."
  - type: choice
    id: s06-q2
    q: "A largo plazo, ¿qué suele influir más en el resultado del interés compuesto?"
    options: ["El tiempo que dejas trabajar al dinero", "El día de la semana en que compras", "Tener muchas aplicaciones de inversión"]
    answer: 0
    explain: "El tiempo es el exponente de la fórmula C × (1 + r)^n. Por eso empezar antes, aunque sea con poco, suele importar más que esperar a tener mucho."
action:
  title: Prueba tus números
  steps:
    - "Abre la calculadora de interés compuesto."
    - "Pon tu aportación mensual posible y prueba con un 2 %, un 4 % y un 0 %."
    - "Mira la columna «en euros de hoy»: es la que de verdad importa."
  check: He probado el interés compuesto con mis números
deeper: inflacion-e-interes-compuesto
tool: interes-compuesto
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: General
sources: [ine-ipc]
---

## La idea

El **interés compuesto** significa ganar sobre lo que ya habías ganado. Con una tasa constante *r* durante *n* años, un capital *C* se convierte en `C × (1 + r)^n`. El tiempo está en el exponente: por eso pesa tanto.

Dos avisos honestos:

1. **Una tasa constante es un supuesto**, no lo que pasará. Los mercados tienen años buenos y años malos.
2. **Funciona igual con los costes y las pérdidas**: una comisión anual también se compone en tu contra (lo verás en la sesión 10).

## Con números

100 € al mes con una rentabilidad supuesta del 4 % anual constante:

| Empieza | Años | Aportado | Valor final |
|---|---:|---:|---:|
| A los 30 | 30 | 36.000 € | 68.527 € |
| A los 40 | 20 | 24.000 € | 36.384 € |

Quien empezó diez años antes aportó 12.000 € más, pero terminó con **32.143 € más**. Son cifras nominales: con un 2 % de inflación, los 68.527 € equivalen a unos 37.800 € de hoy.

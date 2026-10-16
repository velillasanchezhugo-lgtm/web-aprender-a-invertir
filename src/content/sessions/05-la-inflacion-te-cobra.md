---
title: La inflación te cobra aunque no hagas nada
description: Por qué el dinero quieto pierde poder de compra y cómo calcular tu rentabilidad real con una sola fórmula.
level: cero
order: 5
goals: [entender, jubilacion, miedo]
prereqs: [01-invertir-no-es-apostar]
hook: "Guardaste 10.000 € en 2020. Siguen siendo 10.000 €. ¿Has perdido dinero?"
takeaway: "Rentabilidad real = (1 + nominal) / (1 + inflación) − 1. Si no supera a la inflación, pierdes poder de compra."
questions:
  - type: estimate
    id: s05-q1
    q: "Una cuenta te paga un 3 % y la inflación es del 3 %. ¿Cuál es tu rentabilidad real, aproximadamente?"
    answer: 0
    tolerance: 0.3
    min: -5
    max: 6
    step: 0.1
    unit: "%"
    explain: "(1,03 / 1,03) − 1 = 0 %. Tu dinero mantiene su poder de compra, pero no crece. Y aún falta pagar impuestos por los intereses."
  - type: truefalse
    id: s05-q2
    q: "Si el saldo de tu cuenta en euros no baja, no pierdes nada."
    answer: false
    explain: "Con inflación, los mismos euros compran menos cosas. Es una pérdida silenciosa de poder de compra."
action:
  title: Compara tu cuenta con la inflación
  steps:
    - "Mira qué interés (TAE) te paga la cuenta donde tienes tus ahorros."
    - "Compáralo con el último dato de inflación del INE (IPC). En diciembre de 2025 fue del 2,9 %."
    - "Prueba la calculadora de inflación con tu cantidad."
  check: Sé si mi dinero ahorrado gana o pierde frente a la inflación
deeper: inflacion-e-interes-compuesto
tool: inflacion
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: España (datos del INE)
sources: [ine-ipc]
---

## La idea

La **inflación** es la subida general de los precios. En España la mide el INE con el IPC. Si los precios suben, el mismo dinero compra menos.

Por eso hay dos rentabilidades:

- **Nominal**: lo que ganas en euros.
- **Real**: lo que ganas en poder de compra. Se calcula con una fórmula: `(1 + nominal) / (1 + inflación) − 1`.

El dinero en efectivo o en una cuenta sin intereses no «se queda igual»: pierde poder de compra cada año que hay inflación.

## Con números

Según el IPC del INE (dato de diciembre de cada año), los precios subieron un **22,8 %** entre diciembre de 2020 y diciembre de 2025, sobre todo por la inflación de 2021 (6,5 %) y 2022 (5,7 %).

Quien guardó **10.000 €** en efectivo esos cinco años sigue teniendo 10.000 €, pero con ellos compra lo que antes costaba unos **8.145 €**. Ha perdido casi 1.900 € de poder de compra sin hacer nada.

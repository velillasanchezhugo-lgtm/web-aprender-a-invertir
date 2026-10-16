---
title: ¿Cuánto en bolsa?
description: Cómo repartir entre acciones, renta fija y liquidez con una regla sencilla, según cuándo necesitarás el dinero y cuánta caída puedes aguantar sin vender.
level: basico
track: invertir-ya
order: 102
skills: [asignacion-activos, riesgo-volatilidad]
goals: [objetivo, jubilacion, miedo]
prereqs: [ya-01-tu-plan-en-una-pagina]
hook: "Tienes 30.000 € para invertir a 20 años. ¿Todo en bolsa, la mitad o casi nada? La respuesta no está en el mercado, está en ti."
takeaway: "Peso en bolsa × caída de la bolsa ≈ caída de tu cartera. Elige el peso cuya caída podrías mirar sin vender."
scenario:
  kind: operacion
  label: Caso de ejemplo
  title: "Marcos decide su reparto"
  body: "Marcos tiene 40 años, un colchón aparte y 30.000 € que no necesitará en 20 años. Se pregunta cuánto podría ver caer su cartera sin vender. Su respuesta sincera: un 20 %, es decir, 6.000 €. Para hacer la prueba supone una caída de la bolsa del 50 %, parecida a la del S&P 500 entre 2007 y 2009, y que la renta fija no se mueve."
  note: Ejemplo ficticio con fines educativos. Las caídas reales pueden ser mayores o menores.
questions:
  - type: estimate
    id: ya02-q1
    q: "Con la regla del caso: si Marcos aguantara una caída de la cartera del 30 % y la bolsa cae un 50 %, ¿qué peso máximo en acciones le encaja?"
    answer: 60
    tolerance: 0
    min: 0
    max: 100
    step: 5
    unit: "%"
    explain: "Peso máximo = caída que aguantas / caída de la bolsa = 30 / 50 = 60 %. Con un 60 % en acciones, una caída del 50 % deja la cartera en −30 % si la renta fija aguanta."
  - type: choice
    id: ya02-q2
    q: "Además, Marcos ahorra 15.000 € para la entrada de un piso dentro de dos años. ¿Dónde encaja ese dinero?"
    options: ["En bolsa, porque es lo que más rinde a largo plazo", "En liquidez o productos de bajo riesgo y plazo corto: cuenta remunerada, depósito o Letras", "Mitad en bolsa y mitad en un fondo sectorial"]
    answer: 1
    explain: "A dos años, una caída del 30 % no da tiempo a recuperarse y la compra del piso no espera. El horizonte manda: el dinero de corto plazo no se arriesga."
  - type: truefalse
    id: ya02-q3
    q: "La renta fija nunca cae, así que la parte de bonos de la cartera es tan segura como un depósito."
    answer: false
    explain: "Los fondos de renta fija también pueden bajar, sobre todo cuando suben los tipos de interés o empeora la solvencia de los emisores. Caen mucho menos que la bolsa, pero no son un depósito."
action:
  title: Pon tu reparto en el plan
  steps:
    - "Escribe qué caída de tu cartera, en euros, podrías ver sin vender."
    - "Divídela entre lo que tienes para invertir: ese porcentaje es tu caída tolerable."
    - "Divide esa caída entre 50 y tendrás un peso máximo orientativo en acciones. Anótalo en tu plan."
    - "Separa el dinero que necesitarás en menos de 3-5 años: no entra en este reparto."
  check: He decidido qué parte de mi cartera irá a acciones y por qué
deeper: asignacion-y-rebalanceo
tool: simulador-caidas
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: General
sources: [sp500-history, markowitz-1952]
---

## La idea

Tu cartera tiene tres cajones:

- **Acciones (renta variable)**: el motor a largo plazo. También lo que más cae.
- **Renta fija**: amortigua las caídas. Rinde menos y también puede bajar, aunque mucho menos.
- **Liquidez**: lo que necesitarás pronto. No se arriesga.

Dos preguntas deciden el reparto:

1. **¿Cuándo necesitas el dinero?** Lo de menos de 3-5 años, fuera de la bolsa.
2. **¿Cuánta caída aguantas sin vender?** Usa esta regla aproximada: **caída de la cartera ≈ peso en acciones × caída de la bolsa**.

Un **60 % en acciones** con una **caída de la bolsa del 50 %** deja la cartera en **−30 %**. Por eso el reparto importa más que el fondo concreto que elijas.

## Con números

Los 30.000 € de Marcos si la bolsa cae un 50 % y la renta fija no se mueve:

| Peso en acciones | Caída de la cartera | En euros |
|---:|---:|---:|
| 20 % | −10 % | −3.000 € |
| 40 % | −20 % | −6.000 € |
| 60 % | −30 % | −9.000 € |
| 80 % | −40 % | −12.000 € |
| 100 % | −50 % | −15.000 € |

Marcos aguanta −6.000 €, así que su peso máximo orientativo es un **40 %**. Si con los años aprende a soportar más, podrá subirlo con calma. No es una caída imposible: el S&P 500 perdió un **56,8 %** entre 2007 y 2009.

## Error frecuente

Elegir el reparto pensando en lo que se puede ganar. Elígelo pensando en lo que puedes perder sin vender.

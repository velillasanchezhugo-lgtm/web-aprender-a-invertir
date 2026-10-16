---
title: ¿Caro o barato?
description: "PER, rentabilidad por beneficio, rentabilidad por flujo de caja libre y valor empresa: qué expectativas paga el precio y por qué un gran negocio puede ser mala inversión."
level: basico
track: empresas
order: 307
skills: [valoracion-basica]
goals: [entender, miedo]
prereqs: [em-05-caja-no-beneficio]
hook: "Nubia Software es mejor negocio que Café Brío. ¿Significa eso que su acción es mejor compra?"
takeaway: El precio ya incluye lo que el mercado espera. Un gran negocio comprado demasiado caro puede ser una mala inversión.
scenario:
  kind: empresa
  label: Empresas de ejemplo
  title: Café Brío S.A. y Nubia Software S.A. en bolsa
  body: "Café Brío: 50 millones de acciones a 4,80 €. Beneficio neto 12 M€, flujo de caja libre 12 M€, deuda neta 30 M€, EBITDA 30 M€. Nubia Software: 20 millones de acciones a 45 €. Beneficio neto 15 M€, flujo de caja libre 18 M€, caja neta 20 M€ (sin deuda). Sus ventas crecen un 25 % al año."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: estimate
    id: em07-q1
    q: "¿Cuál es el PER de Café Brío (precio / beneficio por acción)?"
    answer: 20
    tolerance: 1
    min: 0
    max: 80
    step: 1
    unit: "veces"
    explain: "Beneficio por acción = 12 M€ / 50 M acciones = 0,24 €. PER = 4,80 / 0,24 = 20. Es lo mismo que capitalización / beneficio: 240 / 12 = 20."
  - type: choice
    id: em07-q2
    q: "Nubia cotiza a un PER de 60 (900/15). ¿Qué rentabilidad por beneficio te ofrece hoy?"
    options: ["60 %", "Un 6 %", "Alrededor del 1,7 %", "Un 25 %, como su crecimiento"]
    answer: 2
    explain: "Es la inversa del PER: 1/60 ≈ 1,7 %. Café Brío ofrece 1/20 = 5 %. Quien compra Nubia acepta poco hoy a cambio de que el beneficio crezca mucho durante años."
  - type: choice
    id: em07-q3
    q: "El beneficio de Nubia crece un 10 % el año que viene (de 15 a 16,5 M€), pero el mercado esperaba más y su PER baja de 60 a 30. ¿Qué pasa con su valor en bolsa?"
    options: ["Sube un 10 %, como el beneficio", "Cae alrededor de un 45 %, de 900 a 495 M€", "No cambia", "Se duplica"]
    answer: 1
    explain: "16,5 × 30 = 495 M€, un 45 % menos que 900. La empresa va bien, pero no tan bien como el precio daba por hecho. Así una buena empresa se convierte en mala inversión."
action:
  title: Mira cuánto pagas por una empresa real
  steps:
    - "Busca la capitalización bursátil de la empresa que estás siguiendo (precio × número de acciones; aparece en su web de inversores o en cualquier página de cotizaciones)."
    - "Divide la capitalización entre el beneficio neto del último año (PER) y entre su flujo de caja libre."
    - "Escribe qué crecimiento crees que espera el mercado: con PER por encima de 30, pregúntate qué tendría que salir bien."
  check: Sé calcular el PER y la rentabilidad por flujo de caja libre de una empresa real
deeper: analisis-fundamental-valoracion
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: General
sources: [graham-intelligent, brk-letters]
---

## La idea

Precio y valor no son lo mismo. Cuatro medidas sencillas:

- **Capitalización** = precio × número de acciones. Lo que cuesta comprar todas las acciones.
- **Valor empresa (VE)** = capitalización + deuda neta. Lo que costaría el negocio entero, deudas incluidas. Sirve para comparar empresas con distinto endeudamiento.
- **[PER](/es/glosario/#per)** = capitalización / beneficio neto. Cuántos años de beneficio actual pagas.
- **Rentabilidad por beneficio** (1/PER) y **por flujo de caja libre** (FCL / capitalización): cuánto «rinde» tu precio hoy, comparable con lo que te paga un depósito o un bono.

Un PER alto no es «caro» por sí solo: significa que el mercado **espera mucho crecimiento**. El riesgo es que no llegue.

## Con números

| | Café Brío | Nubia Software |
|---|---:|---:|
| Capitalización | 50 M × 4,80 € = 240 M€ | 20 M × 45 € = 900 M€ |
| Valor empresa | 240 + 30 = 270 M€ | 900 − 20 = 880 M€ |
| PER | 240/12 = **20** | 900/15 = **60** |
| Rentabilidad por beneficio | **5 %** | **1,7 %** |
| Rentabilidad por FCL | 12/240 = **5 %** | 18/900 = **2 %** |

Graham lo resumía con el **margen de seguridad**: pagar bastante menos de lo que crees que vale, por si te equivocas.

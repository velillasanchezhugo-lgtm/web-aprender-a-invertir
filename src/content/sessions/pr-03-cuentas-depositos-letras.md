---
title: "Cuentas, depósitos, Letras y monetarios: el dinero tranquilo"
description: "Cómo se comparan una cuenta remunerada, un depósito, una Letra del Tesoro y un fondo monetario: rentabilidad, garantía, liquidez e impuestos."
level: basico
track: productos
order: 203
skills: [depositos-letras, inflacion-real]
goals: [ordenar, miedo, objetivo]
prereqs: [pr-02-bonos-y-tipos]
hook: "Tienes 10.000 € que necesitarás dentro de un año. ¿Cuenta, depósito, Letra del Tesoro o fondo monetario? ¿Y cuál te protege si quiebra tu banco?"
takeaway: "Para el dinero a corto plazo, compara la TAE, quién garantiza qué y cuándo puedes sacarlo. Y réstale la inflación."
scenario:
  kind: producto
  label: "Comparativa de ejemplo"
  title: "Cuatro sitios para 10.000 € durante un año"
  body: "Cuenta remunerada del Banco Ribera: 2 % TAE, dinero disponible al momento. Depósito a 12 meses del mismo banco: 2,2 % TAE, con penalización si cancelas antes. Letra del Tesoro a 12 meses: pagas 980 € por cada 1.000 € que te devuelven al vencimiento. Fondo monetario: invierte en deuda a muy corto plazo y lo puedes reembolsar en pocos días. Inflación supuesta: 2,5 %."
  note: "Ejemplo ficticio con fines educativos. Los tipos reales cambian cada mes."
questions:
  - type: estimate
    id: pr03-q1
    q: "Compras una Letra a 12 meses por 980 € y al vencimiento el Tesoro te paga 1.000 €. ¿Qué rentabilidad obtienes en el año?"
    answer: 2.04
    tolerance: 0.05
    min: 0
    max: 5
    step: 0.01
    unit: "%"
    explain: "Ganas 20 € sobre lo que pagaste: 20 / 980 = 2,04 %. Ojo: no es 20 / 1.000 (2 %). Las Letras se compran «al descuento» y la rentabilidad se calcula sobre el precio pagado."
  - type: choice
    id: pr03-q2
    q: "Tienes 30.000 € repartidos entre la cuenta del Banco Ribera y Letras del Tesoro. Si el banco quiebra, ¿qué cubre el Fondo de Garantía de Depósitos (FGD)?"
    options: ["Todo, porque está todo en el mismo banco", "El dinero de la cuenta, hasta 100.000 € por titular y entidad; las Letras no son un depósito: dependen de que pague el Estado", "Nada, el FGD solo cubre fondos de inversión"]
    answer: 1
    explain: "El FGD cubre depósitos (cuentas y depósitos a plazo) hasta 100.000 € por titular y entidad. Una Letra es deuda del Estado: su riesgo es el Estado español, no el banco donde la guardas."
  - type: truefalse
    id: pr03-q3
    q: "Los 20 € que ganas con la Letra tributan como ganancia patrimonial, igual que vender acciones."
    answer: false
    explain: "Son rendimiento del capital mobiliario, como los intereses de la cuenta o del depósito. Todos van a la base del ahorro (19 % en el primer tramo). Diferencia práctica: a los intereses de cuentas y depósitos te retienen un 19 % al cobrarlos; a las Letras no se les practica retención, pero los declaras igual."
action:
  title: "Mira qué rinde tu dinero tranquilo"
  steps:
    - "Busca la TAE de tu cuenta o depósito en tu banca online (no el TIN: la TAE incluye la frecuencia de pago)."
    - "Comprueba si tu banco está adherido al FGD en fgd.es."
    - "Resta a esa TAE la última inflación anual publicada por el INE: si sale negativo, tu dinero pierde poder de compra."
  check: "Conozco la TAE de mi dinero a corto plazo y si gana a la inflación"
deeper: inflacion-e-interes-compuesto
tool: inflacion
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: España
sources: [fgd-home, cnmv-renta-fija-publica, tesoro-letras, boe-irpf, boe-rirpf, aeat-ahorro-2025, bde-cliente-bancario]
---

## La idea

Cuatro opciones para dinero que necesitarás pronto:

| | Liquidez | Quién responde | Impuestos |
|---|---|---|---|
| **Cuenta remunerada** | Inmediata | Banco; FGD hasta 100.000 € | Capital mobiliario, retención 19 % |
| **Depósito a plazo** | Al vencimiento (o con penalización) | Banco; FGD hasta 100.000 € | Igual |
| **Letra del Tesoro** | Al vencimiento (3, 6, 9 o 12 meses) o vendiéndola antes | Estado español | Capital mobiliario, sin retención |
| **Fondo monetario** | Pocos días | Los activos del fondo; sin FGD | Ganancia al vender; admite traspasos |

Las **Letras** se emiten en subasta, desde **1.000 €**, y se compran **al descuento**: pagas menos de 1.000 € y te devuelven 1.000 €. Puedes comprarlas directamente al Tesoro Público o a través de tu banco o bróker (que puede cobrar comisiones).

Para comparar, usa la **TAE**, no el TIN.

## Con números

10.000 € durante un año, con una inflación supuesta del 2,5 %:

| | Rentabilidad | Tras impuestos (19 %) | Real tras impuestos |
|---|---:|---:|---:|
| Cuenta 2 % TAE | 200 € | 162 € (1,62 %) | −0,86 % |
| Depósito 2,2 % TAE | 220 € | 178 € (1,78 %) | −0,70 % |
| Letra a 980 € | 200 € (2,04 %) | 162 € (1,65 %) | −0,83 % |

Con 9.800 € compras 10 Letras y cobras 10.000 €. Las tres opciones protegen tu dinero, pero **ninguna gana a esa inflación**. Para el corto plazo está bien; para 20 años, no.

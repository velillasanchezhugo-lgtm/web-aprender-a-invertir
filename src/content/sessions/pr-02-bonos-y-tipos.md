---
title: "Bonos: cupón, TIR y por qué bajan cuando suben los tipos"
description: "Qué cobras con un bono, qué es la TIR, cómo la duración te dice cuánto puede caer su precio y qué es el riesgo de crédito."
level: basico
track: productos
order: 202
skills: [renta-fija, tipos-interes-bce]
goals: [entender, miedo]
prereqs: [09-los-cuatro-productos]
hook: "Tu fondo de renta fija cae un 10 % en un año en el que los tipos suben con fuerza. ¿Cómo puede perder dinero algo que paga intereses fijos?"
takeaway: "Duración = sensibilidad. Si los tipos suben un punto, el precio cae más o menos tantos puntos porcentuales como años de duración."
scenario:
  kind: producto
  label: "Ficha de ejemplo"
  title: "Bono Autopistas del Cierzo 4 % (vence en 5 años)"
  body: "Valor nominal: 1.000 €. Cupón: 4 % anual (40 € al año). Vencimiento: dentro de 5 años, cuando devuelve los 1.000 €. Precio hoy: 100 % del nominal. Duración modificada: 4,5. Calificación crediticia media (BBB). Un bono del Estado al mismo plazo ofrece un 2,8 %."
  note: "Ejemplo ficticio con fines educativos."
questions:
  - type: estimate
    id: pr02-q1
    q: "El bono de Autopistas del Cierzo tiene una duración modificada de 4,5. Si los tipos de mercado a 5 años suben 1 punto, ¿cuánto caerá su precio, aproximadamente?"
    answer: 4.5
    tolerance: 0.5
    min: 0
    max: 15
    step: 0.5
    unit: "%"
    explain: "Regla rápida: caída ≈ duración modificada × subida de tipos = 4,5 × 1 % ≈ 4,5 %. El cálculo exacto da un 4,3 %, de 1.000 € a unos 957 €. Un bono a 10 años caería casi el doble."
  - type: choice
    id: pr02-q2
    q: "¿Por qué este bono paga un 4 % y uno del Estado al mismo plazo solo un 2,8 %?"
    options: ["Porque la empresa tiene más probabilidad de no pagar y el inversor exige una prima por ese riesgo de crédito", "Porque el Estado cobra comisiones más altas", "Porque el bono de la empresa es más fácil de vender"]
    answer: 0
    explain: "Ese 1,2 % extra es la prima por riesgo de crédito. Si la empresa empeora, su bono cae aunque los tipos no se muevan; si quiebra, puedes recuperar solo una parte."
  - type: truefalse
    id: pr02-q3
    q: "Si el BCE baja los tipos de interés, los bonos ya emitidos tienden a subir de precio."
    answer: true
    explain: "Los nuevos bonos pagarán menos, así que los antiguos, con cupones más altos, valen más. Es el mismo mecanismo que en la subida, al revés."
action:
  title: "Lee la sensibilidad de tu renta fija"
  steps:
    - "Busca la ficha mensual de un fondo o ETF de renta fija (el que tengas o uno cualquiera)."
    - "Localiza su duración y su TIR (a veces «rentabilidad a vencimiento»)."
    - "Multiplica la duración por 1 %: es, más o menos, lo que caería si los tipos subieran un punto."
  check: "Sé cuánto podría caer mi renta fija si suben los tipos"
deeper: renta-fija-duracion-credito
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: General
sources: [cnmv-renta-fija-publica, cnmv-inversor]
---

## La idea

Un **[bono](/es/glosario/#bono)** es un préstamo que haces a un Estado o a una empresa. Tiene tres datos:

- **Cupón**: el interés que paga cada año sobre el nominal.
- **Vencimiento**: cuándo te devuelven el nominal.
- **TIR**: lo que ganas al año si lo compras al precio de hoy, lo mantienes hasta el final y te pagan todo.

Su precio se mueve por dos motivos:

1. **Tipos de interés.** Si suben, los bonos nuevos pagan más y el tuyo vale menos. La **[duración](/es/glosario/#duracion)** mide esa sensibilidad: cuanto más larga, más se mueve.
2. **[Riesgo de crédito](/es/glosario/#credito).** Si el emisor empeora o deja de pagar, su bono cae.

Si lo mantienes hasta el vencimiento y el emisor paga, cobras lo pactado: la caída intermedia solo es pérdida si vendes.

## Con números

Bono con cupón del 4 % que se compra al 100 %. Los tipos suben del 4 % al 5 %:

| Plazo | Caída de precio |
|---:|---:|
| 2 años | −1,9 % |
| 5 años | −4,3 % |
| 10 años | −7,7 % |

Y al revés: si compras el bono de 5 años a **95 %** (950 €), cobras 40 € al año más 1.000 € al final. Tu TIR sube a un **5,2 %**, más que el cupón, porque además ganas 50 € al vencimiento.

## Error frecuente

Pensar que «renta fija» significa «precio fijo». Lo fijo es el cupón, no el valor del bono antes del vencimiento.

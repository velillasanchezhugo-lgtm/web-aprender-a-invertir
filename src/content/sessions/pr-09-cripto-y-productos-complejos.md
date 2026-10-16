---
title: "Cripto y productos complejos: la regla de las dos frases"
description: "Criptoactivos, estructurados, warrants y CFD: por qué la CNMV y ESMA avisan, qué protege MiCA (y qué no) y una regla sencilla para no comprar lo que no entiendes."
level: basico
track: productos
order: 209
skills: [cripto-critico, productos-complejos, detectar-fraude]
goals: [miedo, entender]
prereqs: [pr-01-acciones-por-dentro]
hook: "En la misma semana te ofrecen un token que «paga un 2 % semanal», un bono que «da un 8 % si el mercado no se hunde» y operar con oro «con solo 1.000 €». ¿Por dónde empiezas?"
takeaway: "Si no puedes explicar en dos frases cómo gana dinero un producto y cómo puede perderlo, no lo compres."
scenario:
  kind: producto
  label: "Tres ofertas de ejemplo"
  title: "EbroCoin, Bono Autocancelable Ribera y un CFD sobre oro"
  body: "EbroCoin: un token nuevo; una web promete un 2 % semanal si lo dejas «en staking» con ellos. Bono Autocancelable Ribera: paga un 8 % al año mientras tres acciones bancarias no caigan más de un 40 %; si al vencimiento alguna ha caído más, recuperas tu dinero menos la caída de la peor. CFD sobre oro: con 1.000 € de garantía controlas 20.000 € de oro (apalancamiento 20:1, el máximo para minoristas)."
  note: "Ejemplo ficticio con fines educativos. No es una recomendación ni una invitación a operar."
questions:
  - type: estimate
    id: pr09-q1
    q: "En el CFD controlas 20.000 € de oro con 1.000 € de garantía. ¿Qué caída del oro te hace perder la mitad de la garantía, el punto en que la entidad debe cerrarte la posición?"
    answer: 2.5
    tolerance: 0.2
    min: 0
    max: 20
    step: 0.1
    unit: "%"
    explain: "La mitad de la garantía son 500 €; 500 / 20.000 = 2,5 %. Un movimiento normal de pocos días del oro basta para perder la mitad de lo aportado. Según las autoridades europeas, entre el 74 % y el 89 % de las cuentas minoristas de CFD pierden dinero."
  - type: choice
    id: pr09-q2
    q: "Tienes el Bono Autocancelable Ribera y al vencimiento una de las tres acciones ha caído un 50 %. ¿Qué te devuelven por cada 10.000 €?"
    options: ["10.000 €, porque es un bono", "Unos 5.000 €: asumes la caída de la peor de las tres acciones", "10.800 €, el capital más el cupón"]
    answer: 1
    explain: "El 8 % compensa un riesgo que vendes sin verlo: si cualquiera de las tres se hunde, te comes su caída. Para estructurados así, la CNMV obliga a la entidad a advertir por escrito y a que escribas a mano: «Producto difícil de entender»."
  - type: truefalse
    id: pr09-q3
    q: "Si compras EbroCoin a través de un proveedor autorizado bajo MiCA, tu inversión está protegida frente a caídas de precio, como un depósito por el FGD."
    answer: false
    explain: "MiCA exige autorización, información y normas de conducta a emisores y proveedores, pero no protege del riesgo de mercado ni hay un fondo de garantía. Y un 2 % semanal (más del 180 % al año) es la promesa típica de un fraude."
action:
  title: "Aplica la regla de las dos frases"
  steps:
    - "Piensa en un producto que te hayan ofrecido o que hayas visto anunciado."
    - "Escribe en una frase cómo gana dinero y en otra cómo puede perderlo. Si no puedes, descártalo por ahora."
    - "Si es una entidad o plataforma, búscala en los registros y en las advertencias de la CNMV antes de nada."
  check: "Puedo explicar en dos frases cómo gana y cómo pierde lo que tengo"
deeper: criptoactivos-introduccion-critica
tool: apalancamiento
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: España y UE
sources: [mica, esma-crypto-warning, bde-cripto-2025, cnmv-circular-1-2018, cnmv-cfd-2019, cnmv-cfd-2023, cnmv-chiringuitos]
---

## La idea

**Criptoactivos.** No generan beneficios ni pagan cupones: su precio depende de lo que otros paguen. Los supervisores europeos y españoles (ESMA, CNMV, Banco de España) avisan de que son de alto riesgo y muy volátiles, y de que su protección es limitada. Además:

- **MiCA** regula a emisores y proveedores en la UE, pero no te protege de las caídas.
- **Custodia**: si pierdes tus claves o la plataforma quiebra o te estafa, puedes perderlo todo.
- **Estafas**: rentabilidades fijas altas, prisas y famosos falsos son señales clásicas.

**Productos complejos.** Estructurados, warrants, [CFD](/es/glosario/#cfd): combinan derivados, plazos y condiciones. Para los más complejos, la CNMV exige que la entidad te advierta que **no los considera adecuados para minoristas** y que escribas a mano «Producto difícil de entender». En los CFD, la publicidad a minoristas está prohibida en España desde 2023.

La regla: **dos frases**. Una para cómo gana, otra para cómo pierde. Si no te salen, no compres. Si quieres aprender, practica en simulación, nunca con dinero real.

## Con números

| | Cómo gana | Cómo pierde |
|---|---|---|
| EbroCoin | Si otro paga más por él | Caídas, estafa, quiebra de la plataforma: hasta el 100 % |
| Bono Autocancelable | Cupón del 8 % mientras las tres acciones aguanten | Si una cae más del 40 %: su caída entera |
| CFD sobre oro (20:1) | Un 1 % de subida del oro = +20 % de tu garantía | Un 2,5 % de caída = −50 % y cierre forzoso |

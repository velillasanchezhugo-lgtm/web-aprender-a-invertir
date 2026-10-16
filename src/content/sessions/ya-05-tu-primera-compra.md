---
title: Tu primera compra, paso a paso
description: "De elegir una entidad autorizada a confirmar la orden: abrir la cuenta, test de conveniencia, buscar el producto, leer el KID y guardar el justificante."
level: basico
track: invertir-ya
order: 105
skills: [ejecutar-compra, ordenes-mercado, comprobar-broker]
terms: [test-de-conveniencia, kid, isin, indicador-de-riesgo]
goals: [objetivo, miedo, ordenar]
prereqs: [ya-04-fondo-o-etf]
hook: "Tienes el plan y sabes qué buscas. Llega la pantalla de compra con diez campos y un botón verde. ¿Qué miras antes de pulsarlo?"
takeaway: "Entidad comprobada, producto correcto, KID leído. Después confirmas y guardas el justificante."
scenario:
  kind: operacion
  label: Caso de ejemplo
  title: "La primera compra de Sara"
  body: "Sara ha abierto su cuenta en una entidad que antes buscó en los registros de la CNMV. Escribe «fondo indexado mundial» en el buscador y le salen cinco productos casi iguales. Pega el código ISIN que había apuntado en su plan y le aparece uno solo. Abre su documento de datos fundamentales, comprueba el índice, los costes y el riesgo, escribe 300 € y confirma."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: ya05-q1
    q: "En el buscador te salen cinco productos con nombres casi iguales. ¿Qué haces?"
    options: ["Elegir el primero, que será el más popular", "Buscar por el ISIN, el código que identifica a cada producto, y comprobar en su KID que es el que querías", "Elegir el que más ha subido este año"]
    answer: 1
    explain: "Dos productos con nombres casi iguales pueden tener costes, moneda o reparto de dividendos distintos. El ISIN es como el DNI del producto: no hay dos iguales."
  - type: choice
    id: ya05-q2
    q: "Al abrir la cuenta, la entidad te hace un test sobre tu experiencia y conocimientos. ¿Cómo lo respondes?"
    options: ["Exagerando lo que sé, para que no me ponga pegas", "Con sinceridad: sirve para que la entidad me avise si un producto no encaja con lo que conozco", "Al azar, porque no sirve para nada"]
    answer: 1
    explain: "Es el test de conveniencia que exige la normativa europea (MiFID). Si lo falseas, pierdes un aviso que existe para protegerte."
  - type: truefalse
    id: ya05-q3
    q: "Al comprar un fondo indexado (no cotizado) sabes el precio exacto de la participación en el momento de dar la orden."
    answer: false
    explain: "Los fondos se compran al valor liquidativo del día o del siguiente, que se publica después. Por eso en un fondo no eliges precio: indicas cuánto dinero quieres invertir."
tips:
  - "Comprueba siempre en la CNMV o en el Banco de España que la entidad está autorizada."
  - "Busca el producto por su ISIN, no por el nombre."
  - "Lee el KID antes de confirmar: qué es, cuánto cuesta y cuánto riesgo tiene."
  - "Desconfía si alguien te llama o te escribe para meterte prisa en la compra."
action:
  title: Prepara tu primera compra
  steps:
    - "Busca en los registros de la CNMV la entidad donde quieres abrir la cuenta."
    - "Localiza el KID del producto que encaja con tu plan y apunta su ISIN."
    - "Escribe la cantidad que invertirás en esta primera compra."
  check: Tengo preparada mi primera compra y sé qué revisar antes de confirmar
deeper: ordenes-liquidez-ejecucion
tool: comparador-comisiones
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: España y UE
sources: [cnmv-entidades, cnmv-mifid-infografia, priips-kid, cnmv-etf-guia-rapida, cnmv-guia-fondos]
---

## La idea

Siete pasos, en este orden:

1. **Elige una entidad autorizada**: un banco, una plataforma de fondos o un bróker que aparezca en los registros de la CNMV o del Banco de España.
2. **Abre la cuenta**: DNI, datos personales y fiscales y, a veces, una videollamada.
3. **Responde el test de conveniencia** con sinceridad.
4. **Pasa el dinero** desde tu banco a tu cuenta en la entidad.
5. **Busca el producto por su ISIN**, el código de doce caracteres que lo identifica.
6. **Lee el KID** (documento de datos fundamentales): qué índice sigue, sus costes y su nivel de riesgo.
7. **Confirma y guarda el justificante.**

## En la práctica

Antes de pulsar «confirmar», repasa:

- **¿Es el producto correcto?** El ISIN de la pantalla coincide con el de tu plan.
- **¿Es la cantidad correcta?** Un cero de más pasa más a menudo de lo que crees.
- **¿Qué te cobran?** La pantalla suele mostrar la comisión antes de confirmar.
- **Si es un fondo**, indicas cuánto dinero; el precio lo sabrás después.
- **Si es un ETF**, compra con el mercado abierto y usa una orden limitada, que fija el precio máximo que estás dispuesto a pagar.

## Error frecuente

Comprar lo primero que sale en el buscador. Unos minutos con el ISIN y el KID te ahorran años con el producto equivocado.

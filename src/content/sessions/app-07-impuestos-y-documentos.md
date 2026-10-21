---
title: Impuestos y documentos en la app
description: "Qué te retiene Trade Republic, qué tienes que declarar tú en la renta, dónde está el informe fiscal y qué pasa con los modelos 720 y 721."
level: basico
track: trade-republic
order: 267
skills: [fiscalidad-espana, usar-app-broker]
terms: [retencion, irpf, modelo-720, modelo-721]
goals: [ordenar, miedo]
prereqs: [app-03-conoce-la-app]
hook: "Llega la campaña de la renta y has cobrado intereses, algún dividendo y has vendido un ETF. ¿Ya lo ha hecho todo la app o te toca a ti?"
takeaway: La app retiene parte y te da el informe, pero la declaración es tuya. Revisa los datos y pregunta si tienes dudas.
scenario:
  kind: operacion
  label: Caso
  title: La primera renta de Álvaro
  body: "Álvaro abrió su cuenta el año pasado con IBAN español. Ha cobrado intereses por su efectivo, unos pocos dividendos y ha vendido un ETF con algo de ganancia. En abril descarga el informe fiscal de la app y lo compara con el borrador de Hacienda. Ve que la venta del ETF no aparece igual en el borrador, así que la revisa y la añade antes de presentar."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: truefalse
    id: ap07-q1
    q: "Si la app te ha retenido impuestos, ya no tienes que revisar nada en tu declaración de la renta."
    answer: false
    explain: "La retención es un adelanto. Las ganancias por vender acciones, ETF o cripto no llevan retención y tienes que declararlas tú. Revisa siempre el borrador."
  - type: choice
    id: ap07-q2
    q: "Quieres cambiar de un fondo de inversión a otro sin pagar impuestos todavía. ¿Cómo lo haces?"
    options: ["Vendes el primero y compras el segundo", "Haces un traspaso entre fondos traspasables", "Pasas el dinero por tu cuenta corriente primero"]
    answer: 1
    explain: "El traspaso entre fondos permite aplazar el impuesto hasta que vendas de verdad. Si vendes y compras, tributas por la ganancia."
  - type: choice
    id: ap07-q3
    q: "¿Dónde encuentras los datos para tu declaración?"
    options: ["En el informe fiscal y los documentos del buzón de la app", "En los gráficos de la cartera", "Te los manda Hacienda por SMS"]
    answer: 0
    explain: "Al empezar la campaña la app pone a tu disposición un informe fiscal. Los justificantes de cada operación están en el buzón."
tips:
  - "Comprueba en tu perfil que tienes la cuenta con IBAN español y tus datos fiscales al día."
  - "Descarga el informe fiscal y compáralo con el borrador antes de presentar la renta."
  - "Guarda los justificantes de compra y venta."
  - "Consulta con la AEAT o un asesor si tienes dudas."
action:
  title: Prepara la renta
  steps:
    - "Localiza en la app el apartado de impuestos y el buzón de documentos."
    - "Comprueba que tu cuenta tiene IBAN español y que tu NIF está bien."
    - "Apunta en el calendario revisar el informe fiscal cuando empiece la campaña."
  check: Sé dónde están mis documentos fiscales y qué debo revisar
deeper: comisiones-y-fiscalidad
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: España
sources: [tr-ayuda-es-2026, tr-branch-2025-es, tr-contract-es, aeat-ahorro-2025, aeat-traspasos-2025, aeat-720, aeat-721-faq, cnmv-etf-guia-rapida]
---

## La idea

Lo que ganas invirtiendo (intereses, dividendos y ganancias al vender) va a la **base del ahorro** de tu declaración de la renta.

Si tu cuenta es de la **sucursal española con IBAN español**, Trade Republic dice que:

- **Retiene** la retención general del 19 % de los **intereses**, los **dividendos**, el **Saveback** y la **venta de fondos de inversión**, y lo ingresa en Hacienda.
- En los dividendos de empresas extranjeras, además, se descuenta el **impuesto del otro país**.
- **No retiene** al vender **acciones, ETF o cripto**: esas ganancias o pérdidas las declaras tú.
- Al empezar la campaña de la renta te deja un **informe fiscal** en la app.

Si sigues con una cuenta antigua de **IBAN alemán**, estas retenciones no se aplican.

## En la práctica

- Los **fondos traspasables** te permiten cambiar de fondo sin tributar hasta que vendas. Los ETF, no.
- **Modelo 720:** Trade Republic indica que sus clientes de la sucursal española no lo necesitan.
- **Modelo 721 (cripto en el extranjero):** sus servicios de cripto no los presta la sucursal española, sino la sede en Alemania. No está claro si tienes que presentarlo: consúltalo.

La declaración siempre es responsabilidad tuya. **Consulta con la AEAT o un asesor si tienes dudas.**

Para revisar el borrador con el informe fiscal delante, sigue [Tus inversiones en la declaración](/es/sesion/mr-05-tus-inversiones-en-la-renta/).

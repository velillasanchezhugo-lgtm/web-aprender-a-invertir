---
title: El IVA lo recaudas tú
description: Cómo funciona el IVA de tu negocio, por qué no es tu dinero, qué se presenta en el modelo 303 y qué pasa con las facturas que aún no has cobrado.
level: basico
track: em-impuestos
order: 302
skills: [em-iva]
terms: [iva, iva-repercutido, iva-soportado, modelo-303, criterio-de-caja]
hook: "Has facturado 10.000 € más IVA este trimestre y tienes 12.100 € en la cuenta. ¿Cuánto de eso es realmente tuyo?"
takeaway: El IVA que cobras no es un ingreso tuyo. Cada trimestre ingresas la diferencia entre el que has cobrado y el que has pagado en gastos del negocio, y se debe aunque el cliente aún no te haya pagado.
scenario:
  kind: operacion
  label: Caso práctico
  title: El primer 303 de Iker
  body: "Iker monta un servicio de reformas. En su primer trimestre factura 10.000 € más 2.100 € de IVA. Compra material y herramientas por 4.000 € más 840 € de IVA, con facturas a su nombre. El 20 de abril tiene que ingresar 1.260 €. Aunque un cliente aún no le ha pagado una factura, su IVA también cuenta."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: em-im02-q1
    q: "En un trimestre cobras 2.100 € de IVA en tus ventas y pagas 840 € de IVA en compras del negocio con factura. ¿Qué sale en tu modelo 303?"
    options: ["2.100 € a ingresar", "1.260 € a ingresar", "2.940 € a ingresar", "Nada: el IVA lo paga el cliente"]
    answer: 1
    explain: "Se resta el IVA soportado deducible del repercutido: 2.100 − 840 = 1.260 €."
  - type: choice
    id: em-im02-q2
    q: "Lucía emite el 15 de marzo una factura de 1.000 € más 210 € de IVA y el cliente le paga en mayo. No está en el criterio de caja. ¿En qué 303 declara ese IVA?"
    options: ["En el del primer trimestre (lo presenta en abril)", "En el del segundo trimestre, cuando cobra", "En el resumen anual, en enero"]
    answer: 0
    explain: "Con la regla general, el IVA se declara en el trimestre en que se emite la factura (cuando se hace la venta), no cuando se cobra. Puedes adelantar un IVA que aún no has cobrado."
  - type: truefalse
    id: em-im02-q3
    q: "Si en un trimestre tu IVA soportado es mayor que el repercutido, Hacienda te lo devuelve automáticamente ese mismo trimestre."
    answer: false
    explain: "Con carácter general, el resultado negativo se compensa en los trimestres siguientes. La devolución se puede pedir en la última declaración del año (la del cuarto trimestre), salvo que estés en el registro de devolución mensual."
tips:
  - "Cada vez que cobres, pasa el IVA a una cuenta aparte el mismo día."
  - "Pide siempre factura completa a tu nombre y con tu NIF: un tique sin tus datos no te deja deducir el IVA."
action:
  title: Calcula tu IVA del trimestre
  steps:
    - "Suma el IVA de las facturas que has emitido desde el inicio del trimestre."
    - "Suma el IVA de tus facturas de gastos del negocio."
    - "Resta y compara el resultado con lo que tienes apartado. Si falta, empieza a apartar hoy."
  check: He calculado cuánto IVA debo este trimestre y lo tengo apartado
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [aeat-iva, ley-iva]
---

## La idea

El IVA lo paga el **consumidor final**. Tú, como negocio, haces de **recaudador**: lo cobras en tus ventas y se lo entregas a Hacienda.

- **IVA repercutido**: el que cobras en tus facturas.
- **IVA soportado**: el que te cobran en las facturas de lo que compras para el negocio.

Cada periodo haces una resta:

> **IVA repercutido − IVA soportado deducible = lo que ingresas.**

Con números redondos: vendes 10.000 € y cobras 2.100 € de IVA. Compras material por 4.000 € y pagas 840 € de IVA. Ingresas **1.260 €**. Si la resta sale negativa, no pagas: lo **compensas** en los trimestres siguientes o pides la **devolución** en la última declaración del año.

Dos ideas clave:

- **No es tu dinero.** Si gastas el IVA cobrado, el día 20 no podrás pagarlo. Apártalo en cuanto cobres.
- **Se debe aunque no hayas cobrado.** Con la regla general, el IVA se declara en el trimestre de la factura, no del cobro. Si un cliente tarda, adelantas tú ese IVA. La excepción es el **criterio de caja**, un régimen voluntario para negocios pequeños en el que declaras el IVA al cobrar (y deduces el de tus compras al pagarlas).

## En la práctica

- **Modelo 303**: declaración del IVA, normalmente **trimestral**. Se presenta en la sede electrónica de la AEAT del 1 al 20 de abril, julio y octubre, y del 1 al 30 de enero (cuarto trimestre).
- **Modelo 390**: resumen anual del IVA, en enero junto al último 303. No se paga nada con él.
- Para deducir el IVA de un gasto necesitas **factura completa** a tu nombre y que el gasto sea **del negocio**.
- Si una factura no se cobra, hay un procedimiento con plazos estrictos para recuperar su IVA: consúltalo pronto.

## Error frecuente

Ver el saldo de la cuenta a final de trimestre como beneficio y gastarlo. Una parte es IVA que debes y llega puntualmente el día 20.

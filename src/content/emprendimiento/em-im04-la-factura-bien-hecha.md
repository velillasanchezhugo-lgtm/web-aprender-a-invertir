---
title: La factura bien hecha
description: Qué datos debe llevar una factura en España, cuándo vale un tique, cómo se corrige un error, cuánto tiempo se guardan y qué cambia con VeriFactu y la factura electrónica.
level: basico
track: em-impuestos
order: 304
skills: [em-factura]
terms: [factura, factura-simplificada, verifactu, iva]
hook: "Un cliente te devuelve la factura: «Le falta mi NIF y no puedo deducirla». ¿Qué tiene que llevar una factura para que valga?"
takeaway: Una factura completa lleva número, fecha, los datos y el NIF de las dos partes, la descripción, la base, el tipo y la cuota de IVA, la retención si la hay y el total. Un error no se tacha ni se borra, se corrige con una rectificativa.
scenario:
  kind: operacion
  label: Caso práctico
  title: La factura de Rubén
  body: "Rubén, fotógrafo autónomo, factura un reportaje a una empresa con una plantilla de internet. No pone serie ni el NIF del cliente y se equivoca en el importe. Para arreglarlo, borra la factura y hace otra con el mismo número. La empresa no puede deducir ese IVA, y el cambio de número es una señal de alarma para Hacienda."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: em-im04-q1
    q: "Rubén ha emitido una factura con un importe equivocado y ya se la ha enviado al cliente. ¿Qué hace?"
    options: ["La borra y hace otra con el mismo número", "Emite una factura rectificativa que la corrige, con su propia serie", "Modifica el PDF y lo vuelve a enviar"]
    answer: 1
    explain: "Una factura emitida no se borra ni se modifica: se corrige con una rectificativa que identifica la original. Reutilizar el número rompe la numeración correlativa."
  - type: choice
    id: em-im04-q2
    q: "Tienes una cafetería y un cliente te pide factura de un desayuno de 12 € para su empresa. ¿Qué le das?"
    options: ["Un tique sin más: es suficiente siempre", "Una factura con sus datos y su NIF, si los necesita para deducir el gasto", "Nada: en hostelería no se hacen facturas"]
    answer: 1
    explain: "Para ventas pequeñas a particulares vale la factura simplificada (tique). Pero si el cliente es empresario y te la pide, debes añadir sus datos y su NIF: sin ellos no puede deducir el IVA."
  - type: truefalse
    id: em-im04-q3
    q: "A octubre de 2026, los autónomos ya están obligados a usar un programa de facturación que cumpla VeriFactu."
    answer: false
    explain: "Las fechas se han aplazado: según el Real Decreto-ley 15/2025, las sociedades deben adaptarse a partir del 1 de enero de 2027 y el resto (entre ellos los autónomos) a partir del 1 de julio de 2027."
tips:
  - "Usa un programa de facturación que declare que cumple el reglamento de sistemas verificables: te ahorrará cambiar en 2027."
action:
  title: Revisa tu plantilla de factura
  steps:
    - "Abre tu última factura o tu plantilla."
    - "Comprueba uno a uno los datos de la lista de «En la práctica»."
    - "Corrige lo que falte."
  check: He comprobado que mi factura lleva todos los datos obligatorios
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [reglamento-facturacion, ley-crea-crece, aeat-iva]
---

## La idea

La factura es la **prueba** de tus ventas. A tu cliente empresario le sirve para **deducir** el gasto y su IVA.

Hay tres tipos:

- **Factura completa**: la normal, sobre todo entre empresas.
- **Factura simplificada (tique)**: con menos datos, sin los del comprador. Vale, con carácter general, para operaciones de **hasta 400 € con IVA incluido**, y hasta **3.000 €** en algunas actividades (comercio minorista, hostelería, peluquerías y otras). Si el cliente es empresario y te pide sus datos, debes incluirlos.
- **Factura rectificativa**: corrige una factura ya emitida. Lleva serie propia e identifica la original. **Nunca se borra ni se reescribe** una factura emitida.

**Lo que viene: dos cambios distintos.**

- **VeriFactu** (sistemas informáticos de facturación verificables): los programas de facturar tendrán que impedir que se borren o alteren facturas sin dejar rastro. Según el Real Decreto-ley 15/2025, es obligatorio desde el **1 de enero de 2027** para sociedades y desde el **1 de julio de 2027** para el resto. No afecta a quienes usan el SII ni a los territorios forales, que tienen sistemas propios.
- **Factura electrónica obligatoria entre empresas** (Ley Crea y Crece): la desarrolla el Real Decreto 238/2026. Será obligatoria **12 meses** después de que entre en vigor una orden ministerial pendiente para quien facture más de 8 millones de euros, y **24 meses** después para el resto. Para la mayoría, no antes de 2028: comprueba la fecha en la AEAT.

## En la práctica

Una factura completa lleva:

- **Número** correlativo y, si usas varias, **serie** (por ejemplo, 2026-001).
- **Fecha** de emisión (y de la operación, si es distinta).
- **Nombre o razón social, NIF y domicilio** tuyos y del cliente.
- **Descripción** de lo vendido.
- **Base imponible**, **tipo de IVA** y **cuota** de IVA.
- **Retención** de IRPF, si procede (por ejemplo, profesionales que facturan a empresas).
- **Total**.
- Si está exenta, la **mención** de la exención y el artículo de la ley.

Si el cliente es empresario, emítela antes del día 16 del mes siguiente. Conserva facturas emitidas y recibidas **al menos 4 años** (lo que Hacienda puede revisar); la normativa mercantil pide 6 años.

## Error frecuente

Facturar con plantillas sin numeración correlativa y «arreglar» los errores borrando facturas. VeriFactu lo impedirá.

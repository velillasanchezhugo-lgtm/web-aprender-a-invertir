---
title: Comprueba un bróker en 3 minutos
description: Cómo saber si una entidad está autorizada en la CNMV o el Banco de España, y qué te protege (y qué no) si quiebra.
level: cero
track: camino-cero
order: 12
skills: [comprobar-broker]
goals: [miedo, ordenar, objetivo]
prereqs: [09-los-cuatro-productos]
hook: "Una app de inversión tiene buenas valoraciones y anuncios por todas partes. ¿Basta eso para confiarle tus ahorros?"
takeaway: Quién es, quién la supervisa y si está en el registro oficial. Y recuerda que las garantías cubren el fallo de la entidad, nunca las caídas del mercado.
scenario:
  kind: producto
  label: Caso
  title: Elena y la app de los anuncios
  body: "Elena ve en redes una app de inversión con miles de opiniones de cinco estrellas. Antes de darse de alta, busca en el aviso legal el nombre completo de la empresa. Después lo busca en la web de la CNMV y comprueba que figura como entidad autorizada y que la web coincide. Solo entonces abre la cuenta."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: s12-q1
    q: "Tus acciones caen por una crisis. ¿Te cubre el Fondo de Garantía de Depósitos (FGD) o el FOGAIN?"
    options: ["Sí, hasta 100.000 €", "No: cubren que la entidad no te devuelva tus valores si quiebra, no las pérdidas del mercado", "Solo si las acciones son españolas"]
    answer: 1
    explain: "El propio FGD lo indica: no cubre las caídas de valor de lo que tienes, solo que la entidad no te lo devuelva."
  - type: truefalse
    id: s12-q2
    q: "Si una entidad no aparece en la lista de advertencias de la CNMV, es que está autorizada."
    answer: false
    explain: "Hay que buscarla en los registros de entidades autorizadas. No figurar en las advertencias no prueba nada: puede ser nueva."
  - type: choice
    id: s12-q3
    q: "¿Cuál es la señal de alarma al comprobar un bróker?"
    options: ["Que su aviso legal diga quién es y dónde está", "Que el nombre o la web no coincidan con los del registro oficial", "Que te pida tu DNI al abrir la cuenta"]
    answer: 1
    explain: "Los estafadores copian el nombre de entidades reales. Si la web o los datos no coinciden con el registro, no sigas."
tips:
  - "Busca siempre la entidad en el registro de la CNMV o del Banco de España, nunca solo en su propia web."
  - "Desconfía si no encuentras en su aviso legal el nombre completo de la empresa y su país."
  - "Pregunta a qué fondo de garantía está adherida y de qué país es."
  - "Prefiere entidades supervisadas en España o en otro país de la UE."
action:
  title: Comprueba una entidad
  steps:
    - "Elige una app o bróker que conozcas y busca en su aviso legal el nombre completo de la entidad y su país."
    - "Búscala en el registro de entidades de la CNMV (y en el del Banco de España si es un banco)."
    - "Comprueba que el nombre y la dirección web coinciden con los del registro."
  check: He comprobado una entidad en un registro oficial
deeper: investigar-broker-y-fraudes
tool: comparador-comisiones
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: España y UE
sources: [cnmv-entidades, bde-registro, fgd-valores, cnmv-fogain]
---

## La idea

Tres preguntas antes de abrir una cuenta:

1. **¿Quién es?** El nombre de la app no basta: busca el nombre completo de la empresa en su aviso legal.
2. **¿Quién la supervisa?** En España, la **CNMV** (inversión) o el **Banco de España** (bancos). Si es de otro país de la UE, su supervisor de allí.
3. **¿Está en el registro oficial?** Compruébalo en la web del supervisor.

Si la entidad quiebra, existen fondos de garantía (el **FGD** para bancos y el **FOGAIN** para empresas de inversión españolas) que cubren, hasta un límite, que no te devuelvan tu dinero o tus valores. Las entidades de otros países de la UE tienen el sistema de su país, que puede cubrir menos.

## En la práctica

- Ninguna garantía te devuelve lo que pierdas porque el mercado baje: eso es riesgo de inversión.
- Tus fondos y acciones, en una entidad seria, están a tu nombre y separados de su dinero.
- Las buenas opiniones y la publicidad no son una comprobación.

---
title: El IRPF del autónomo
description: Cómo tributa en el IRPF lo que gana un autónomo, qué son la estimación directa simplificada y la normal, la provisión de gastos de difícil justificación y la renta anual.
level: basico
track: em-impuestos
order: 305
skills: [em-irpf-actividad]
terms: [irpf, rendimiento-de-la-actividad, estimacion-directa, gasto-deducible]
hook: "Este año has facturado 30.000 € como autónomo y además cobraste una nómina hasta marzo. ¿Sobre qué cantidad pagas el IRPF?"
takeaway: El autónomo paga IRPF por su rendimiento (ingresos menos gastos deducibles), que se suma a sus otras rentas y tributa a un tipo que sube cuanto más ganas. Casi todos están en estimación directa simplificada.
scenario:
  kind: empresa
  label: Caso práctico
  title: El primer año de Amaia
  body: "Amaia deja su trabajo en marzo y se hace autónoma como traductora. De enero a marzo cobró 6.000 € de nómina. De abril a diciembre factura 30.000 € y tiene 8.000 € de gastos deducibles, cuota de autónomo incluida. En la renta declarará juntos la nómina y el rendimiento de su actividad."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: em-im05-q1
    q: "Amaia factura 30.000 € y tiene 8.000 € de gastos deducibles. ¿Sobre qué cantidad (antes de otros ajustes) calcula el IRPF de su actividad?"
    options: ["Sobre 30.000 €", "Sobre 22.000 €", "Sobre 38.000 €", "Sobre nada hasta que gane más que su antiguo sueldo"]
    answer: 1
    explain: "Tributa el rendimiento: ingresos menos gastos deducibles, 30.000 − 8.000 = 22.000 €. Tienta pensar que se paga por lo facturado, pero en el IRPF cuenta lo que ganas."
  - type: choice
    id: em-im05-q2
    q: "Diego tiene una nómina de 25.000 € y empieza un negocio por las tardes que le deja 10.000 € de rendimiento. ¿Cómo tributa ese rendimiento?"
    options: ["Aparte, a un tipo fijo del 15 %", "Se suma a su nómina y tributa por la escala, al tipo de su tramo", "No tributa porque ya paga IRPF en la nómina"]
    answer: 1
    explain: "El rendimiento de la actividad forma parte de la base general con la nómina. Como la escala es progresiva, esos 10.000 € tributan a los tipos más altos que le correspondan. Tienta confundir la retención del 15 % de las facturas con el impuesto final: la retención solo es un adelanto."
  - type: truefalse
    id: em-im05-q3
    q: "En estimación directa simplificada puedes restar un porcentaje de «gastos de difícil justificación» sin necesidad de facturas de esos gastos."
    answer: true
    explain: "Con carácter general es el 5 % del rendimiento neto previo, con un máximo de 2.000 € al año. No te exime de guardar facturas del resto."
tips:
  - "Calcula cada trimestre tu rendimiento acumulado: así sabrás cuánto te tocará en la renta y no te sorprenderá."
  - "Si empiezas una actividad y no la tuviste el año anterior, pregunta por la reducción del 20 % del rendimiento por inicio de actividad (tiene requisitos)."
action:
  title: Estima tu rendimiento del año
  steps:
    - "Suma lo que llevas facturado este año sin IVA."
    - "Resta tus gastos del negocio con factura, incluida tu cuota de autónomo."
    - "Apunta el resultado en «Mi proyecto en una página» como «rendimiento previsto»."
  check: He calculado mi rendimiento aproximado del año
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [ley-irpf, aeat-irpf-sede, aeat-empresarios]
---

## La idea

Como autónomo no pagas IRPF por lo que facturas, sino por lo que **ganas**:

> **Rendimiento de la actividad = ingresos − gastos deducibles.**

Ese rendimiento **se suma a tus otras rentas** del año (una nómina, un alquiler) y tributa por la **escala progresiva**: el tipo sube por tramos a medida que tu renta crece. Tiene una parte estatal y otra autonómica.

**¿Cómo se calcula el rendimiento?** Hay tres métodos:

- **Estimación directa simplificada**: la de casi todos los que empiezan. Se aplica si tu cifra de negocios del año anterior no pasó de **600.000 €** y no renuncias a ella. Permite restar una **provisión de gastos de difícil justificación**: con carácter general, el **5 %** del rendimiento neto, con un máximo de **2.000 € al año**.
- **Estimación directa normal**: la misma lógica, con una contabilidad más completa. Obligatoria por encima de 600.000 € o si renuncias a la simplificada.
- **Estimación objetiva (módulos)**: solo para algunas actividades (ciertos comercios, hostelería, transporte, agricultura) y con límites; se paga por indicadores como metros o personal.

## En la práctica

- Durante el año **adelantas** parte del impuesto: con el modelo 130 cada trimestre y con las retenciones de tus facturas, si eres profesional y facturas a empresas.
- La **declaración de la renta** (modelo 100) se presenta del inicio de abril al 30 de junio del año siguiente, en la sede de la AEAT o con la app. El borrador no incluye tu actividad: la añades tú.
- Lo que adelantaste se descuenta. Si adelantaste de más, te devuelven; si de menos, pagas la diferencia (puedes fraccionarla en dos plazos).
- Lleva un **libro registro** de ingresos y de gastos: lo exige la ley y es lo que te pedirán si te revisan.

## Error frecuente

Pensar que la retención del 15 % de las facturas ya es «el IRPF pagado». Es un adelanto: si ganas bien y tienes otras rentas, en junio puede salir a pagar bastante más.

---
title: "Inmobiliario sin comprar un piso (y qué rinde un piso de verdad)"
description: "SOCIMI y REIT, fondos inmobiliarios y crowdfunding frente a comprar para alquilar. Rentabilidad bruta y neta, liquidez y cómo puedes perder."
level: basico
track: productos
order: 207
skills: [inmobiliario, diversificacion]
goals: [entender, objetivo]
prereqs: [pr-01-acciones-por-dentro]
hook: "Un anuncio dice: «Piso para inversores: 5,4 % de rentabilidad». ¿Es eso lo que vas a ganar?"
takeaway: "La rentabilidad bruta de un piso no es la tuya: resta gastos, vacíos e impuestos. Y si inviertes en ladrillo sin comprar, mira cuándo y cómo podrás salir."
scenario:
  kind: producto
  label: "Tres opciones de ejemplo"
  title: "Piso en Zaragoza, Alquileres del Ebro SOCIMI y una plataforma de crowdfunding"
  body: "Piso: precio 200.000 €, más 20.000 € de impuestos, notaría y registro. Alquiler: 900 € al mes. Gastos anuales: IBI 600 €, comunidad 960 €, seguro 300 €, mantenimiento 800 € y un mes vacío al año (900 €). Alquileres del Ebro SOCIMI: cotiza en bolsa y su dividendo equivale al 4 % de su precio. Plataforma de crowdfunding: préstamo a un promotor a 18 meses con un 9 % anual previsto."
  note: "Ejemplo ficticio con fines educativos. Los gastos de compra varían por comunidad autónoma."
questions:
  - type: estimate
    id: pr07-q1
    q: "Con los datos del piso, ¿cuál es su rentabilidad neta anual sobre todo lo que pagas (220.000 €), antes del IRPF?"
    answer: 3.3
    tolerance: 0.2
    min: 0
    max: 8
    step: 0.1
    unit: "%"
    explain: "Ingresos 10.800 € − gastos 3.560 € = 7.240 €. 7.240 / 220.000 = 3,3 %. El 5,4 % del anuncio es bruto: alquiler / precio, sin gastos de compra, gastos anuales ni meses vacíos."
  - type: choice
    id: pr07-q2
    q: "La plataforma de crowdfunding está autorizada por la CNMV. ¿Qué significa eso para tu inversión de 3.000 €?"
    options: ["Que el 9 % está garantizado", "Que la plataforma cumple requisitos, pero puedes perder todo si el promotor no paga, y no podrás salir antes de tiempo con facilidad", "Que el FGD te devuelve hasta 100.000 €"]
    answer: 1
    explain: "La autorización obliga a la plataforma a informar, avisarte del riesgo de pérdida total y darte 4 días para echarte atrás, pero no garantiza el préstamo. No hay FGD y no suele haber mercado para vender antes."
  - type: truefalse
    id: pr07-q3
    q: "Las acciones de Alquileres del Ebro SOCIMI pueden caer un 30 % en bolsa aunque todos sus pisos sigan alquilados."
    answer: true
    explain: "Una SOCIMI es una acción: su precio depende de los tipos de interés, del valor esperado de sus inmuebles y del ánimo del mercado. A cambio, la vendes en segundos y con 500 € tienes una parte de cientos de inmuebles."
action:
  title: "Calcula la rentabilidad neta de un anuncio"
  steps:
    - "Busca un piso en venta en tu ciudad y el alquiler de uno parecido en la misma zona."
    - "Calcula la bruta: alquiler anual / precio."
    - "Calcula la neta: (alquiler anual − IBI − comunidad − seguro − 1 mes vacío − mantenimiento estimado) / (precio + 10 % de gastos de compra)."
  check: "Sé distinguir la rentabilidad bruta de la neta de un piso"
deeper: diversificacion
tool: diversificacion-rebalanceo
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: España y UE
sources: [boe-socimi, reg-crowdfunding, cnmv-entidades, fgd-home]
---

## La idea

Formas de invertir en inmuebles:

| | Qué compras | Liquidez | Cómo puedes perder |
|---|---|---|---|
| **Piso para alquilar** | El inmueble | Meses para vender | Impagos, vacíos, obras, caída de precios, todo concentrado |
| **SOCIMI / REIT** | Acciones de una empresa de alquiler | Diaria, en bolsa | Caídas en bolsa, deuda de la empresa |
| **Fondo inmobiliario** | Participaciones de una cesta | Limitada en muchos casos | Valor de los inmuebles, reembolsos limitados |
| **Crowdfunding** | Un préstamo o parte de un proyecto | Casi nula hasta el final | Impago del promotor: hasta el 100 % |

Las **SOCIMI** españolas están obligadas a repartir como dividendo al menos el **80 %** del beneficio que no venga de ventas ni de otras participadas. Por eso su rentabilidad se parece a un alquiler, pero su precio se mueve como una acción.

En **crowdfunding**, usa solo plataformas inscritas en el registro de la CNMV, y no pongas ahí dinero que no puedas perder.

## Con números

| Concepto | Piso de Zaragoza |
|---|---:|
| Alquiler anual | 10.800 € |
| Rentabilidad bruta (sobre 200.000 €) | 5,4 % |
| Gastos anuales | −3.560 € |
| Ingreso neto | 7.240 € |
| Rentabilidad neta (sobre 220.000 €) | 3,3 % |

Y aún falta el IRPF del alquiler y el riesgo de un inquilino que no paga.

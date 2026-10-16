---
title: "Scalping, intradía, swing: el reloj decide los costes"
description: "Los cinco estilos de trading más comunes, cuánto dura cada operación, qué exigen y cuánto suman los costes cuando operas muchas veces."
level: basico
track: trading
order: 502
skills: [tipos-trading]
goals: [entender, miedo]
prereqs: [tr-01-invertir-o-hacer-trading]
hook: "Un vídeo dice que con el scalping «solo necesitas sacar unos euros por operación». Si pagas un poco en cada una, ¿cuántas veces lo pagas al mes?"
takeaway: "Cuanto más corto el plazo, más operaciones; cuantas más operaciones, más costes. El estilo que eliges decide cuánto tienes que ganar solo para empatar."
scenario:
  kind: operacion
  label: "Operación de ejemplo"
  title: "Sara prueba el intradía con 5.000 €"
  body: "Sara abre y cierra cada día 20 operaciones de 5.000 € sobre un futuro ficticio. El diferencial entre compra y venta le cuesta un 0,05 % por operación (2,50 €). Su bróker cobra 1 € por orden: 2 € por operación completa (entrar y salir). No mantiene nada abierto de un día para otro."
  note: "Ejemplo ficticio con fines educativos."
questions:
  - type: estimate
    id: tr02-q1
    q: "¿Cuánto paga Sara en costes cada día, sumando diferencial y comisiones de sus 20 operaciones?"
    answer: 90
    tolerance: 0
    min: 0
    max: 300
    step: 5
    unit: "€"
    explain: "Cada operación cuesta 2,50 € de diferencial + 2 € de comisiones = 4,50 €. Por 20 operaciones, 90 € al día. En 21 días de mercado son 1.890 €: casi un 38 % de su cuenta en un mes, gane o pierda."
  - type: choice
    id: tr02-q2
    q: "¿Qué estilo asume el riesgo de que el precio salte con el mercado cerrado (por ejemplo, tras una noticia de madrugada)?"
    options: ["El swing trading, porque mantiene posiciones varios días", "El scalping, porque opera en segundos", "Ninguno: los mercados nunca saltan de un día a otro"]
    answer: 0
    explain: "Quien mantiene posiciones abiertas por la noche o el fin de semana puede encontrarse un hueco en la apertura. El intradía y el scalping lo evitan, pero a cambio acumulan muchos más costes."
  - type: truefalse
    id: tr02-q3
    q: "Un sistema algorítmico elimina las emociones, así que si funcionó en el pasado seguirá ganando."
    answer: false
    explain: "Un algoritmo solo aplica reglas. Si esas reglas se ajustaron demasiado a datos pasados (sobreajuste) o ignoran costes reales, perderá igual, y más rápido."
action:
  title: "Calcula tu peaje"
  steps:
    - "Busca en la web de tu bróker (o de uno que conozcas) la comisión por orden en acciones o ETF."
    - "Multiplícala por 2 (entrar y salir) y por las operaciones que harías al mes con cada estilo: 1, 10 y 100."
    - "Divide el resultado por el dinero que usarías: es el porcentaje que tendrías que ganar solo para empatar."
  check: "Sé cuánto me costaría operar con cada estilo"
deeper: analisis-tecnico-y-limites
tool: comparador-comisiones
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: General
sources: [barber-odean-2000, barber-taiwan-2014, cnmv-guia-ordenes]
---

## La idea

Los estilos de trading se distinguen, sobre todo, por **cuánto dura cada operación**:

| Estilo | Duración típica | Operaciones | Qué exige |
|---|---|---|---|
| **[Scalping](/es/glosario/#scalping)** | Segundos o minutos | Decenas o cientos al día | Ejecución muy rápida, costes mínimos, pantalla constante |
| **Intradía** | Minutos u horas; cierra antes del final de la sesión | Varias al día | Horario de mercado libre, disciplina estricta |
| **[Swing](/es/glosario/#swing-trading)** | De días a pocas semanas | Unas pocas a la semana | Aceptar huecos de precio por la noche |
| **Posicional** | Semanas o meses | Pocas al mes | Paciencia con tendencias largas y caídas intermedias |
| **Sistemático o algorítmico** | Cualquiera | Las que marque la regla | Programar, probar sin engañarse y vigilar el sistema |

La regla de oro: **cada operación paga peaje** (comisión, diferencial y, a veces, deslizamiento). Si tu ganancia media por operación es pequeña, el peaje se la come.

## Con números

Mismo peaje de **4,50 €** por operación completa, con una cuenta de 5.000 €:

| Estilo | Operaciones al mes | Costes al mes | Sobre la cuenta |
|---|---:|---:|---:|
| Intradía (20 al día) | 420 | 1.890 € | 37,8 % |
| Swing (3 a la semana) | 12 | 54 € | 1,1 % |
| Posicional | 2 | 9 € | 0,2 % |

Los estudios con datos reales lo confirman: en Taiwán, Barber y otros (2014) hallaron que **menos del 1 %** de los operadores intradía ganaba de forma predecible después de comisiones.

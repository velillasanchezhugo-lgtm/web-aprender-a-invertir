---
title: "Apalancamiento y CFD: por qué se pierde tan rápido"
description: "Qué es el apalancamiento, qué es un CFD, por qué multiplica las pérdidas y qué dice la normativa sobre cuántos minoristas pierden dinero."
level: basico
track: trading
order: 504
skills: [apalancamiento-cfd, productos-complejos]
terms: [apalancamiento, cfd, margen, proteccion-saldo-negativo]
goals: [miedo, entender]
prereqs: [tr-03-tipos-de-ordenes]
hook: "Con 1.000 € te dejan «mover» 20.000 € en un índice. Suena a multiplicar tus ganancias. ¿Qué más multiplica?"
takeaway: "El apalancamiento multiplica las pérdidas igual que las ganancias. Por eso un movimiento pequeño puede llevarse tu dinero, y la mayoría de cuentas minoristas de CFD pierde."
scenario:
  kind: operacion
  label: "Caso de ejemplo"
  title: "Javier abre un CFD sobre un índice"
  body: "Javier deposita 1.000 € en una plataforma de CFD y abre una apuesta a que sube un índice bursátil, con un apalancamiento que le hace moverse como si tuviera 20.000 €. Esa misma tarde el índice baja un poco, menos de un 3 %. La plataforma le cierra la posición automáticamente: ha perdido la mitad de lo que puso en una sola tarde."
  note: "Ejemplo ficticio con fines educativos. No incluye costes."
questions:
  - type: choice
    id: tr04-q1
    q: "¿Qué hace el apalancamiento?"
    options: ["Multiplica solo las ganancias", "Multiplica las ganancias y las pérdidas por igual", "Reduce el riesgo, porque pones menos dinero", "Te asegura un beneficio mínimo"]
    answer: 1
    explain: "Si te mueves como si tuvieras veinte veces tu dinero, cada pequeño movimiento del precio te afecta veinte veces más, a favor o en contra."
  - type: choice
    id: tr04-q2
    q: "Según las advertencias que exige la normativa europea, ¿qué parte de las cuentas minoristas de CFD pierde dinero?"
    options: ["Entre un 74 % y un 89 %", "Alrededor de la mitad", "Menos de un 20 %, si se usan stops"]
    answer: 0
    explain: "Es el rango que recogió ESMA, el supervisor europeo, a partir de los datos de los supervisores nacionales. Hoy cada entidad debe mostrar el porcentaje de sus propios clientes que pierde."
  - type: truefalse
    id: tr04-q3
    q: "Con un CFD contratado como minorista con una entidad sujeta a la normativa de la UE, no puedes acabar debiendo dinero a la entidad por esos CFD."
    answer: true
    explain: "La protección frente a saldo negativo limita tu pérdida a lo que tienes en la cuenta de CFD. Ojo: no se aplica igual a otros productos, a clientes profesionales ni a entidades de fuera de la UE."
tips:
  - "Si estás empezando, no uses apalancamiento ni CFD."
  - "Desconfía de cualquier anuncio de CFD: en España su publicidad dirigida a minoristas está prohibida."
  - "Si quieres entenderlo, pruébalo solo en un simulador."
  - "Lee la advertencia de pérdidas que la entidad está obligada a mostrarte."
action:
  title: "Prueba el apalancamiento sin arriesgar"
  steps:
    - "Abre el simulador de apalancamiento de la academia."
    - "Prueba una caída pequeña con poco apalancamiento y luego con mucho."
    - "Fíjate en con qué caída se cerraría tu posición en cada caso."
  check: "He visto en simulación cuánto amplifica el apalancamiento una caída"
deeper: apalancamiento-margen-liquidacion
tool: apalancamiento
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: España y UE (medidas de ESMA de 2018 y resoluciones de la CNMV de 2019 y 2023)
sources: [esma-cfd-2018, esma-cfd-notice-2018, cnmv-cfd-2019, cnmv-cfd-2023, cnmv-cfd-faq]
---

## La idea

- **[Apalancamiento](/es/glosario/#apalancamiento)**: operar con más dinero del que tienes. Pones una garantía (el **[margen](/es/glosario/#margen)**) y la entidad te deja moverte como si tuvieras mucho más.
- **[CFD](/es/glosario/#cfd)**: un contrato con la entidad en el que te pagan o te cobran la diferencia de precio de algo (un índice, una acción, una divisa). No compras nada real: apuestas a si sube o baja.

¿Por qué es peligroso? Porque una caída pequeña se convierte en una pérdida grande de tu dinero. Con un apalancamiento de 20, basta una caída del 5 % para perderlo todo. Además, mantener la posición abierta tiene un coste cada día.

## En la práctica

Para proteger a los minoristas, la normativa europea (ESMA) y la CNMV obligan a:

- Limitar cuánto apalancamiento te pueden dar.
- Cerrar tu posición automáticamente si pierdes la mitad de tu garantía.
- Impedir que pierdas más de lo que tienes en la cuenta.
- Avisarte del porcentaje de clientes que pierde: según ESMA, **entre el 74 % y el 89 %** de las cuentas minoristas perdía dinero.

Además, desde 2023 la CNMV prohíbe la publicidad de CFD dirigida a minoristas en España. Si te llega un anuncio, ya es una señal de alarma.

## Error frecuente

Pensar que con poco dinero arriesgas poco. Con apalancamiento puedes perder todo lo que pones en muy poco tiempo.

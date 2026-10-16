---
title: Tu ficha de empresa en una página
description: "Una ficha de diez preguntas para analizar cualquier empresa, y por qué aun así la base de la cartera suele ser un indexado y las acciones sueltas, una parte pequeña."
level: basico
track: empresas
order: 309
skills: [modelo-negocio, valoracion-basica, diversificacion]
goals: [entender, ordenar, objetivo]
prereqs: [em-08-leer-un-informe-de-resultados]
hook: "Ya sabes leer unas cuentas. ¿Basta eso para poner la mitad de tus ahorros en la empresa que mejor te parece?"
takeaway: Analiza empresas para entender lo que tienes y aprender; construye la cartera sobre un indexado y deja las acciones sueltas en una parte que podrías perder sin que cambie tu plan.
scenario:
  kind: empresa
  label: Ficha de ejemplo
  title: Ficha de Café Brío S.A. (datos de 2025)
  body: "Negocio: cafeterías, clientes que repiten (60 % vía app). Ventas 200 M€ (+8,7 %). Margen operativo 9 % (sector, 7 %), estable tres años. Deuda neta / EBITDA: 1 vez; cobertura de intereses: 9 veces. Flujo de caja libre 12 M€, igual al beneficio. Ventaja: marca, app y escala de compras; ROIC 15 %. Precio: PER 20, rentabilidad por flujo de caja libre 5 %. Riesgos: precio del café, alquileres y el último semestre (margen a la baja, deuda al alza). Lucía tiene 20.000 € invertidos: quiere poner la mitad en Café Brío."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: estimate
    id: em09-q1
    q: "Lucía pone 10.000 € de sus 20.000 € en Café Brío y la acción cae un 60 %. ¿Cuánto pierde su cartera total?"
    answer: 30
    tolerance: 1
    min: 0
    max: 100
    step: 1
    unit: "%"
    explain: "10.000 × 60 % = 6.000 € de 20.000 €: un 30 % de toda la cartera. Si solo hubiera puesto un 5 % (1.000 €), la misma caída le costaría 600 €, un 3 %."
  - type: choice
    id: em09-q2
    q: "¿Por qué tantos estudios recomiendan que la base de la cartera sea un fondo indexado amplio y no unas pocas acciones?"
    options: ["Porque las acciones sueltas siempre pierden", "Porque en una acción concreta pesa mucho el riesgo de esa empresa, la mayoría de acciones individuales lo hace peor que el conjunto y hasta muchos profesionales quedan por detrás del índice", "Porque los indexados no pueden caer"]
    answer: 1
    explain: "Bessembinder encontró que más de la mitad de las acciones de EE. UU. desde 1926 rindieron menos que las letras del Tesoro y que alrededor de un 4 % de las empresas explican toda la ganancia neta. Los informes SPIVA muestran que la mayoría de fondos activos queda por detrás de su índice a largo plazo. Un indexado también cae, pero no depende de acertar con unas pocas."
  - type: truefalse
    id: em09-q3
    q: "Haber completado la ficha de una empresa y que todo salga bien significa que su acción subirá."
    answer: false
    explain: "La ficha reduce errores de bulto (deuda peligrosa, beneficio sin caja, precio desorbitado), pero el futuro sigue siendo incierto y el mercado ya conoce lo mismo que tú."
action:
  title: Rellena tu ficha con una empresa real
  steps:
    - "Elige una cotizada que conozcas y descarga su último informe anual (web de inversores o CNMV, Informes financieros anuales)."
    - "Responde la ficha de diez puntos de esta sesión con sus cifras reales, aunque sea de forma aproximada."
    - "Decide qué porcentaje máximo de tu cartera dedicarías a acciones sueltas y pruébalo antes en la cartera de práctica, sin dinero real."
  check: He rellenado la ficha de una empresa real con sus cuentas públicas
deeper: analisis-fundamental-valoracion
tool: cartera-practica
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: General
sources: [spiva, bessembinder-2018, cnmv-ifa, cnmv-guia-bolsa]
---

## La idea

**La ficha, en diez preguntas** (una página):

1. **Negocio**: ¿quién paga, qué compra, cuánto cuesta dárselo, se repite?
2. **Crecimiento**: ¿cuánto suben las ventas al año?
3. **Márgenes**: ¿cuánto se queda de cada euro, frente al sector y a su historia?
4. **Deuda**: deuda neta / EBITDA y cobertura de intereses; vencimientos y tipo.
5. **Caja**: ¿el flujo de caja libre acompaña al beneficio?
6. **Ventaja**: ¿qué impide que la copien? ¿se ve en el ROIC?
7. **Precio**: PER y rentabilidad por flujo de caja libre.
8. **Expectativas**: ¿qué tiene que salir bien para que ese precio tenga sentido?
9. **Riesgos**: los tres que más te preocupan.
10. **Último informe**: ¿las cifras oficiales confirman o contradicen lo anterior?

**Y el sitio de las acciones en tu cartera**: analizar empresas te enseña qué tienes y te protege de errores, pero una acción suelta lleva **riesgo específico** (que le vaya mal a *esa* empresa). Por eso, para la mayoría, la base es una cartera **[diversificada](/es/glosario/#diversificacion)** con un indexado amplio de bajo coste, y las acciones sueltas, si las quieres, una parte **pequeña**.

## Con números

Lucía, con 20.000 € y una caída del 60 % en Café Brío:

| Peso de Café Brío | Pérdida en euros | Pérdida de la cartera |
|---:|---:|---:|
| 50 % (10.000 €) | 6.000 € | **30 %** |
| 5 % (1.000 €) | 600 € | **3 %** |

Misma empresa, mismo análisis, mismo error: la diferencia la marca **cuánto** pones.

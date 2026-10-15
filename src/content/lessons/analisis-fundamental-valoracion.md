---
title: Análisis fundamental y valoración
description: Valorar una empresa es estimar el dinero que generará en el futuro y cuánto vale hoy. Métodos básicos, sus supuestos y por qué pequeños cambios mueven mucho el resultado.
level: avanzado
topic: analisis-empresas
minutes: 11
learn:
  - Qué intenta responder el análisis fundamental.
  - Cómo funcionan los múltiplos (PER) y el descuento de flujos.
  - Por qué una valoración es tan sensible a los supuestos.
prereqs: [productos-basicos, estados-financieros]
mistake: Tomar un PER bajo como señal automática de que una acción está barata. Puede estarlo, o puede que el mercado espere que sus beneficios caigan. El múltiplo no explica por qué.
summary:
  - El valor de una empresa depende de los flujos de caja que generará y del riesgo de obtenerlos.
  - Los múltiplos como el PER son atajos útiles para comparar, pero esconden supuestos de crecimiento y riesgo.
  - En un descuento de flujos, cambiar un punto la tasa de descuento o el crecimiento puede mover el valor un 25 % o más.
  - "Analizar no da una cifra exacta: da un rango y una lista de lo que tiene que salir bien."
quiz:
  - q: "Con el modelo de crecimiento constante, una acción con dividendo esperado de 2 €, tasa exigida del 8 % y crecimiento del 3 % vale 40 €. Si el crecimiento esperado fuera del 4 %, ¿cuánto valdría?"
    options: ["41,6 €", "50 €", "80 €"]
    answer: 1
    explain: "2 / (0,08 − 0,04) = 50 €. Un punto más de crecimiento aumenta el valor un 25 %: la valoración es muy sensible a ese supuesto."
  - q: "¿Qué significa un PER de 20?"
    options: ["Que la acción subirá un 20 %", "Que el precio equivale a 20 años de los beneficios actuales", "Que la empresa reparte el 20 % de sus beneficios"]
    answer: 1
    explain: "PER = precio / beneficio por acción. Su inverso (1/20 = 5 %) es la rentabilidad por beneficios a precios actuales, antes de considerar crecimiento."
next: ordenes-liquidez-ejecucion
related: [estados-financieros]
tools: []
author: Redacción de Criterio (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-15
reviewed: 2026-10-15
status: revision-pendiente
jurisdiction: General
sources: [graham-dodd, graham-intelligent, brk-letters]
---

## Explicación

El **análisis fundamental** intenta responder a una pregunta: ¿cuánto vale este negocio, comparado con lo que cuesta en bolsa? El valor de una empresa, en última instancia, es el dinero que generará para sus dueños en el futuro, expresado en euros de hoy y ajustado por el riesgo de que no llegue.

### Múltiplos

Son atajos para comparar empresas:

- **[PER](/es/glosario/#per)**: precio / beneficio por acción.
- **EV/EBITDA**: valor de la empresa (capitalización más deuda neta) entre el resultado operativo antes de amortizaciones.
- **Precio / valor contable**: útil en bancos y aseguradoras, poco en empresas con activos intangibles.
- **Rentabilidad por flujo de caja libre**: [flujo de caja libre](/es/glosario/#flujo-de-caja-libre) / capitalización.

Un múltiplo bajo puede indicar una oportunidad o un problema. Siempre hay que preguntarse qué espera el mercado y por qué.

### Descuento de flujos

Consiste en estimar los flujos futuros y descontarlos a una tasa que refleje el riesgo. La versión más simple, el **modelo de crecimiento constante** (Gordon), dice:

`Valor = flujo del próximo año / (tasa exigida − crecimiento)`

Solo vale si el crecimiento es estable y menor que la tasa exigida. En la práctica se proyectan unos años en detalle y se añade un valor terminal.

### El margen de seguridad

Benjamin Graham propuso comprar solo cuando el precio estuviera claramente por debajo del valor estimado, para tener un colchón frente a los errores de estimación. La idea sigue siendo útil precisamente porque las valoraciones son imprecisas.

## Ejemplo numérico

Una empresa estable pagará el próximo año 2 € por acción, y se espera que ese flujo crezca al 3 % anual. Exiges un 8 %:

| Supuesto | Valor por acción |
|---|---:|
| Base: 8 % exigido, 3 % de crecimiento | 2 / 0,05 = **40,0 €** |
| Exiges un 7 % | 2 / 0,04 = **50,0 €** (+25 %) |
| Crecimiento del 4 % | 2 / 0,04 = **50,0 €** (+25 %) |
| Exiges un 9 % | 2 / 0,06 = **33,3 €** (−17 %) |

Si la acción cotiza a 42 €, ¿está cara o barata? Depende de supuestos que nadie conoce con precisión. Un análisis honesto presenta un **rango** (por ejemplo, 33–50 €) y una lista de condiciones: qué tiene que pasar con ventas, márgenes y competencia para que el valor esté arriba o abajo.

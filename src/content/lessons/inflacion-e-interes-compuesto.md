---
title: Inflación e interés compuesto
description: Dos fuerzas que actúan en silencio durante años. La inflación resta poder de compra; el interés compuesto acumula rendimientos, y también costes.
level: inicial
topic: fundamentos
route: { id: desde-cero, order: 4 }
minutes: 8
learn:
  - Qué es la inflación y cómo reduce el valor real de tu dinero.
  - Cómo funciona el interés compuesto y por qué el tiempo importa tanto.
  - La diferencia entre rentabilidad nominal y real.
prereqs: [ahorrar-invertir-especular]
mistake: Proyectar una rentabilidad alta y constante durante décadas y tomarla como lo esperable. Las calculadoras usan tasas fijas por sencillez; los mercados reales alternan años buenos y malos, y el resultado final puede ser muy distinto.
summary:
  - La inflación hace que el mismo dinero compre menos con el tiempo; entre diciembre de 2020 y diciembre de 2025 los precios subieron en España un 22,8 % acumulado según el IPC del INE.
  - Rentabilidad real = (1 + nominal) / (1 + inflación) − 1.
  - El interés compuesto hace crecer los rendimientos sobre rendimientos; el tiempo es su ingrediente principal.
  - Los costes también se componen: una diferencia de 1,6 puntos anuales puede llevarse un tercio del resultado en 25 años.
quiz:
  - q: "Un depósito te paga un 3 % anual y la inflación es del 2,9 %. ¿Cuál es aproximadamente tu rentabilidad real antes de impuestos?"
    options: ["5,9 %", "0,1 %", "3 %"]
    answer: 1
    explain: "(1,03 / 1,029) − 1 ≈ 0,1 %. Tu dinero casi mantiene su poder de compra, pero apenas crece en términos reales. Y aún faltan los impuestos sobre los intereses."
  - q: "¿Qué ocurre con el interés compuesto si los costes anuales de un fondo suben del 0,2 % al 1,8 %?"
    options: ["Nada importante, es menos de un 2 %", "Se reduce el crecimiento cada año, y el efecto se acumula con el tiempo", "Solo afecta el primer año"]
    answer: 1
    explain: "Los costes se descuentan cada año del capital que luego se compone. En el ejemplo de la lección, a 25 años la diferencia supera los 10.000 € sobre una inversión inicial de 10.000 €."
next: riesgo-volatilidad-perdidas
related: [comisiones-y-fiscalidad]
tools: [interes-compuesto, inflacion]
author: Redacción de Criterio (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-15
reviewed: 2026-10-15
status: revision-pendiente
jurisdiction: España (datos de inflación del INE)
sources: [ine-ipc]
---

## Explicación

### Inflación

La **[inflación](/es/glosario/#inflacion)** es la subida general de los precios. En España la mide el INE mediante el Índice de Precios de Consumo (IPC). Si los precios suben un 3 % en un año, 100 € compran al final lo que antes costaba unos 97 €.

La inflación no es constante. Según la serie del INE (variación anual en diciembre), fue del **−0,5 % en 2020**, del **6,5 % en 2021**, del **5,7 % en 2022** y del **2,9 % en 2025**. Encadenando esos datos, los precios subieron un **22,8 % entre diciembre de 2020 y diciembre de 2025**. Quien guardó 10.000 € en efectivo durante esos cinco años conserva 10.000 €, pero con ellos compra lo que antes costaba unos 8.145 €.

Por eso distinguimos:

- **[Rentabilidad nominal](/es/glosario/#rentabilidad-nominal)**: lo que ganas en euros.
- **[Rentabilidad real](/es/glosario/#rentabilidad-real)**: lo que ganas en poder de compra. Se calcula así: `(1 + nominal) / (1 + inflación) − 1`.

### Interés compuesto

El **[interés compuesto](/es/glosario/#interes-compuesto)** significa que los rendimientos de un año pasan a generar rendimientos al siguiente. Con una tasa constante r durante n años, un capital C se convierte en `C × (1 + r)^n`. El exponente es el tiempo: por eso empezar antes suele importar más que intentar acertar con el producto.

Dos advertencias honestas:

1. **Una tasa constante es un supuesto, no una previsión.** Ningún mercado ofrece cada año la misma rentabilidad. Una cartera con años de +20 % y −15 % tiene un resultado distinto al de un 5 % fijo, y el orden en que llegan los años malos importa mucho si aportas o retiras dinero.
2. **Los costes y las pérdidas también se componen.** Un 1 % de comisión anual no se lleva un 1 % del resultado final: se lleva bastante más, porque ese dinero deja de crecer cada año.

## Ejemplo numérico

**Aportar con tiempo.** 100 € al mes durante 30 años (36.000 € aportados):

| Supuesto (tasa anual constante) | Valor final nominal | En euros de hoy (inflación 2 %) |
|---|---:|---:|
| 0 % | 36.000 € | — |
| 4 % | 68.527 € | 37.832 € |

Con un 4 % nominal constante y una inflación del 2 %, el poder de compra final es solo algo mayor que lo aportado. Es un recordatorio de que las cifras nominales a 30 años impresionan más de lo que valen.

**Los costes se componen.** 10.000 € durante 25 años con una rentabilidad bruta supuesta del 5 % anual:

- Con costes del **0,2 %** anual: **32.210 €**.
- Con costes del **1,8 %** anual: **21.504 €**.

La diferencia, **10.706 €**, es mayor que la inversión inicial. Los costes son de las pocas variables que puedes controlar. Comprueba estas cifras, o las tuyas, en la [calculadora de interés compuesto](/es/herramientas/interes-compuesto/) y en la de [pérdida de poder adquisitivo](/es/herramientas/inflacion/).

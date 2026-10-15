---
title: Análisis técnico y sus límites
description: Qué es el análisis técnico, qué dice la evidencia y por qué un backtest atractivo no demuestra que una regla funcione.
level: avanzado
topic: mercados-y-ordenes
minutes: 10
learn:
  - Qué intenta hacer el análisis técnico y sus herramientas habituales.
  - Qué limitaciones tiene la evidencia, sobre todo para particulares después de costes.
  - Cómo detectar un backtest engañoso.
prereqs: [ordenes-liquidez-ejecucion, psicologia-y-sesgos]
mistake: Dar por buena una regla porque un gráfico la muestra funcionando en el pasado. Si se probaron muchas reglas, alguna funcionará por azar; y sin costes, impuestos ni deslizamiento, el resultado está inflado.
summary:
  - El análisis técnico estudia precios y volúmenes pasados para tomar decisiones; no analiza el negocio.
  - Hay estudios que encuentran patrones como el momentum, pero su aprovechamiento por particulares después de costes es otra cuestión.
  - "Un backtest no es un resultado real: puede sufrir sobreajuste, sesgo de anticipación y de supervivencia."
  - Si usas reglas técnicas, pruébalas con costes realistas, en datos que no usaste para diseñarlas y en simulación.
quiz:
  - q: "Pruebas 100 reglas técnicas sin ninguna capacidad real de predicción. Con un criterio estadístico del 5 %, ¿cuántas parecerán funcionar por azar, aproximadamente?"
    options: ["Ninguna", "Unas 5", "Unas 50"]
    answer: 1
    explain: "Con un 5 % de falsos positivos, unas 5 de cada 100 reglas parecerán significativas por pura suerte. Es el problema de las comparaciones múltiples."
  - q: "¿Qué es el sesgo de anticipación en un backtest?"
    options: ["Usar información que no estaba disponible en el momento de cada decisión simulada", "Operar muy pronto por la mañana", "Esperar demasiado para vender"]
    answer: 0
    explain: "Por ejemplo, usar el precio de cierre para decidir una compra que, en la simulación, se hace en la apertura del mismo día."
next: criptoactivos-introduccion-critica
related: [psicologia-y-sesgos]
tools: []
author: Redacción de Criterio (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-15
reviewed: 2026-10-15
status: revision-pendiente
jurisdiction: General
sources: [barber-odean-2000, barber-taiwan-2014, chague-daytrade-2019]
---

## Explicación

El **análisis técnico** estudia los precios y volúmenes pasados para identificar tendencias, niveles o patrones y decidir cuándo comprar o vender. Sus herramientas habituales son medias móviles, soportes y resistencias, indicadores de impulso y figuras en gráficos.

### Qué dice la evidencia

- La investigación académica ha documentado algunos patrones de precios, como el **momentum** (lo que ha subido en los últimos meses tiende a seguir subiendo durante un tiempo), especialmente en carteras amplias y con implementación profesional.
- Para **particulares que operan con frecuencia**, los estudios con datos reales son desfavorables. Por ejemplo, Barber, Lee, Liu y Odean (2014) analizaron operadores intradía en Taiwán y encontraron que solo una pequeña minoría obtenía beneficios de forma persistente después de costes. Chague, De-Losso y Giovannetti (2019) estudiaron a personas que operaban a diario con futuros en Brasil y hallaron que la gran mayoría de las que persistieron perdió dinero.
- Que un patrón exista en datos no significa que puedas explotarlo después de comisiones, diferencial, impuestos y errores de ejecución.

### Por qué los backtests engañan

Un **[backtest](/es/glosario/#backtest)** simula cómo habría funcionado una regla con datos pasados. Problemas frecuentes:

1. **Sobreajuste**: ajustar parámetros hasta que el resultado sea bueno en esos datos concretos.
2. **Comparaciones múltiples**: probar muchas reglas y quedarse con la mejor.
3. **Sesgo de anticipación**: usar datos que no se conocían en el momento de la decisión.
4. **Sesgo de supervivencia**: probar solo con empresas que siguen cotizando hoy.
5. **Costes irreales**: ignorar comisiones, diferencial, impuestos y precios de ejecución peores.

Un backtest no es un resultado real. Si quieres estudiar una regla, divídela en datos de diseño y datos de comprobación, incluye costes realistas y practica primero en simulación.

## Ejemplo numérico

Una regla de cruce de medias muestra en un backtest un 12 % anual bruto con **200 operaciones al año** sobre una cuenta de 10.000 €.

- Comisión de 2 € por operación: 400 € al año (**4 %** de la cuenta).
- Diferencial y deslizamiento estimados del 0,1 % por operación sobre 10.000 €: 2.000 € al año (**20 %**).

Con estos supuestos, la regla pasa de +12 % a **−12 % al año** antes de impuestos. Además, si los parámetros se eligieron entre 50 combinaciones probadas, es probable que una parte del 12 % inicial sea pura suerte. La operativa frecuente necesita una ventaja muy grande solo para cubrir sus costes.

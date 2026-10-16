---
title: Apalancamiento, margen y liquidación
description: Con números, cómo el apalancamiento multiplica ganancias y pérdidas, qué cuesta financiarlo, cuándo te cierran la posición y si puedes perder más de lo que pusiste.
level: avanzado
topic: derivados-y-apalancamiento
minutes: 12
learn:
  - Cómo se calcula la exposición y el resultado de una posición apalancada.
  - Qué es el margen, qué es el cierre forzoso y en qué nivel se aplica a los CFD para minoristas en España.
  - Cuándo las pérdidas pueden superar el dinero aportado y qué protecciones existen según el producto.
prereqs: [riesgo-volatilidad-perdidas, ordenes-liquidez-ejecucion]
mistake: Pensar que un apalancamiento de 5 veces solo «acelera» la inversión. Una caída del 10 % en el subyacente se convierte en una pérdida de la mitad de tu garantía, y la posición puede cerrarse en ese mismo momento, sin dar tiempo a una recuperación.
summary:
  - Con apalancamiento L, una variación del subyacente de x % produce una variación de L × x % sobre tu garantía, antes de costes.
  - Mantener la posición cuesta financiación sobre todo el importe prestado, cada día.
  - En CFD para minoristas en España, la entidad debe cerrar posiciones cuando el saldo cae por debajo del 50 % de la garantía inicial, y existe protección frente a saldo negativo.
  - Esas protecciones son propias de los CFD (y, desde 2023, el cierre al 50 % se extiende a futuros y opciones con riesgo ilimitado vendidos a minoristas en España); no se aplican igual a todas las cuentas de margen ni a todas las jurisdicciones.
quiz:
  - q: "Aportas 1.000 € de garantía con un apalancamiento de 5 (exposición de 5.000 €). El subyacente sube un 10 %. ¿Cuál es tu resultado antes de costes?"
    options: ["+100 €", "+500 €", "+1.000 €"]
    answer: 1
    explain: "5.000 € × 10 % = 500 €, un 50 % sobre tu garantía. El mismo cálculo, con signo negativo, vale para una caída."
  - q: "Con el cierre al 50 % de la garantía inicial y un apalancamiento de 20, ¿qué caída del subyacente, aproximadamente, provoca el cierre de la posición?"
    options: ["Un 50 %", "Un 2,5 %", "Un 20 %"]
    answer: 1
    explain: "El cierre llega cuando pierdes la mitad de la garantía: 50 % / 20 = 2,5 % de movimiento adverso, sin contar costes."
  - q: "¿En cuál de estos casos puede un minorista perder más de lo que aportó?"
    options: ["En CFD con un proveedor sujeto a la normativa de la UE para minoristas", "En una posición de futuros o una cuenta de margen sin protección de saldo negativo, si el precio salta bruscamente", "En un fondo indexado sin apalancamiento"]
    answer: 1
    explain: "La protección frente a saldo negativo es obligatoria en CFD para minoristas en la UE, pero no en todos los productos. Un hueco de precios puede dejar la cuenta en negativo."
next: derivados-y-cfd
related: [derivados-y-cfd, gestion-del-riesgo]
tools: [apalancamiento]
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-15
reviewed: 2026-10-15
status: revision-pendiente
jurisdiction: España (resoluciones CNMV de 2019 y 2023). Otras jurisdicciones y entidades pueden aplicar reglas distintas.
sources: [cnmv-cfd-2019, cnmv-cfd-2023, cnmv-cfd-faq, ibkr-other, pwg-ltcm]
---

## Explicación

### Exposición y resultado

**[Apalancarse](/es/glosario/#apalancamiento)** es tener una exposición mayor que el dinero aportado, ya sea con un préstamo (compra a crédito, cuenta de margen) o con un derivado (CFD, futuros). Si aportas una garantía G con un apalancamiento L:

- **Exposición** (nocional) = G × L.
- **Resultado** = exposición × variación del subyacente.
- **Resultado sobre tu garantía** = L × variación del subyacente.

La amplificación es simétrica: lo que multiplica las ganancias multiplica igual las pérdidas.

### Coste de financiación

Si la posición se mantiene de un día para otro, pagas intereses por el dinero que, en la práctica, te prestan (la exposición menos tu garantía). Una aproximación: `importe prestado × tipo anual × días / 365`. Cada entidad tiene su fórmula, sus tipos de referencia y sus diferenciales, que hay que leer en sus tarifas.

### Margen y cierre forzoso

La **[garantía o margen](/es/glosario/#margen)** inicial es lo que debes depositar para abrir. Si las pérdidas reducen tu saldo por debajo de un nivel, la entidad te pedirá más garantía o **cerrará la posición** ([liquidación](/es/glosario/#liquidacion)).

En España, para **CFD vendidos a minoristas**, la Resolución de la CNMV de 27 de junio de 2019 (que continuó las medidas de ESMA de 2018) obliga a:

| Subyacente | Garantía inicial mínima | Apalancamiento máximo |
|---|---:|---:|
| Pares de divisas principales | 3,33 % | 30:1 |
| Índices principales, otras divisas, oro | 5 % | 20:1 |
| Otras materias primas e índices | 10 % | 10:1 |
| Acciones y otros | 20 % | 5:1 |
| Criptodivisas | 50 % | 2:1 |

Además exige **cierre de posición** cuando el saldo de la cuenta de CFD cae por debajo del **50 % de la garantía inicial**, **protección frente a saldo negativo**, prohibición de incentivos y una advertencia de riesgo con el porcentaje de cuentas minoristas que pierden dinero.

La Resolución de la CNMV de 11 de julio de 2023 añadió la **prohibición de la publicidad de CFD dirigida a minoristas** en España y extendió los límites de garantía y el cierre al 50 % a **futuros y opciones** cuyo riesgo máximo no se conoce o puede superar lo aportado, vendidos a minoristas en España.

### ¿Puedo perder más de lo que aporto?

Depende del producto, de la entidad y de tu clasificación como cliente:

- **CFD para minoristas en la UE**: la protección frente a saldo negativo limita la pérdida a los fondos de la cuenta de CFD.
- **Futuros, cuentas de margen y venta de opciones**: en general, **sí puedes perder más** de lo aportado si el precio salta. Las normas españolas de 2023 imponen garantías y cierres, pero un hueco de precios puede dejarte un saldo deudor.
- **Clientes profesionales** o entidades de fuera de la UE: las protecciones pueden no aplicarse. No supongas que la protección de un producto vale para otro.

Este contenido es educativo: sirve para entender el riesgo, no para animarte a usar estos productos. La CNMV recuerda que la mayoría de minoristas que operan con CFD pierden dinero.

## Ejemplo numérico

Garantía de **1.000 €**, posición mantenida 30 días, financiación supuesta del 6 % anual sobre el importe prestado. Cálculos hechos con el [simulador de apalancamiento](/es/herramientas/apalancamiento/):

| Apalancamiento | Movimiento | Exposición | Resultado bruto | Financiación | Resultado sobre la garantía | ¿Cierre forzoso? |
|---:|---:|---:|---:|---:|---:|---|
| 1:1 | −10 % | 1.000 € | −100 € | 0 € | −10 % | No |
| 5:1 | +10 % | 5.000 € | +500 € | 19,73 € | +48,0 % | No |
| 5:1 | −10 % | 5.000 € | −500 € | 19,73 € | −52,0 % | Sí, al perder la mitad |
| 20:1 | −5 % | 20.000 € | −1.000 € | 93,70 € | −100 % | Sí, mucho antes |
| 30:1 | −4 % | 30.000 € | −1.200 € | 143,01 € | −100 % con protección | Sí |

En la última fila, sin protección frente a saldo negativo, la cuenta quedaría unos **343 € en negativo** que deberías a la entidad (1.200 + 143 − 1.000). En la práctica, el cierre al 50 % se activaría antes, salvo que el precio salte de golpe por encima del umbral, por ejemplo tras una noticia con el mercado cerrado.

Un ejemplo histórico de cómo el apalancamiento convierte un problema en una crisis es el fondo Long-Term Capital Management en 1998: con unos 4.800 millones de dólares de capital, su balance superaba los 125.000 millones, un apalancamiento de más de 25 a 1. Lo verás en las [historias de inversores](/es/inversores/ltcm/).

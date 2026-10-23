---
title: Archivos, datos y gráficos
description: Qué puede hacer ChatGPT con un PDF o una hoja de cálculo, cómo pedirle tablas, gráficos y archivos para descargar, y cómo comprobar sus cifras.
level: basico
track: gpt-funciones
order: 209
skills: [gpt-archivos-datos, gpt-analizar, gpt-verificar]
terms: [analisis-de-datos, hoja-de-calculo, datos-personales]
hook: "Tienes un Excel con los gastos de casa de todo el año y quieres saber en qué se te va el dinero. ¿Puede ChatGPT hacer las cuentas y un gráfico sin que tú escribas una sola fórmula?"
takeaway: ChatGPT puede leer tus PDF y hojas de cálculo, hacer cuentas, gráficos y archivos nuevos. Pide que te diga cuántas filas ha leído y comprueba dos o tres cifras antes de usarlas.
scenario:
  kind: producto
  label: Caso práctico
  title: Los gastos del club de Óscar
  body: "Óscar es tesorero de un club de baloncesto de barrio. Sube la hoja de gastos de la temporada y pide un resumen por categorías y un gráfico. ChatGPT dice haber leído 212 filas, pero hay 230: se ha saltado una pestaña. Óscar lo corrige y comprueba el total con el extracto del banco."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-fu09-q1
    q: "ChatGPT te da el total de gastos de tu hoja. ¿Cuál es la mejor forma de comprobarlo?"
    options: ["Preguntarle si está seguro", "Pedirle cuántas filas ha usado y comparar el total con otra fuente, como el extracto del banco", "Fiarte: los ordenadores no fallan sumando"]
    answer: 1
    explain: "El cálculo suele estar bien, pero puede haber leído mal el archivo: filas de menos, una columna equivocada. Preguntar «¿estás seguro?» tienta, pero casi siempre contesta que sí."
  - type: truefalse
    id: gpt-fu09-q2
    q: "Para analizar una hoja, ChatGPT puede escribir y ejecutar código por su cuenta sin que tú sepas programar."
    answer: true
    explain: "Para muchas tareas con datos, ChatGPT escribe y ejecuta pequeños programas (en Python) para calcular y dibujar gráficos. Tú pides lo que necesitas en español; pensar que hace falta programar tienta, pero no es así."
  - type: choice
    id: gpt-fu09-q3
    q: "Milagros quiere analizar una hoja con nombres, DNI y teléfonos de los socios de su asociación. ¿Qué hace antes de subirla?"
    options: ["La sube tal cual: es para un análisis", "Borra o cambia las columnas con datos personales que no necesita", "La convierte en PDF para que no se vean"]
    answer: 1
    explain: "Para contar socios o cuotas no hacen falta el DNI ni el teléfono. Pasarlo a PDF tienta, pero los datos siguen ahí. Sube solo lo necesario."
tips:
  - "Si la hoja tiene varias pestañas, di cuál usar."
  - "Si te devuelve un Excel, ábrelo en tu programa de siempre y revísalo allí."
action:
  title: Analiza una hoja tuya
  steps:
    - "Elige una hoja de cálculo pequeña y sin datos personales (gastos, notas, horas)."
    - "Súbela y pide un resumen y un gráfico, con el número de filas leídas."
    - "Comprueba a mano dos cifras."
    - "Guarda en «Mi kit de ChatGPT» la frase que usas para pedir comprobaciones."
  check: He analizado una hoja con ChatGPT y he comprobado dos cifras
practice:
  task: "Llevas en una hoja de cálculo los gastos de tu comunidad de vecinos de este año y tienes que presentarlos en la junta. Escribe la petición al subir el archivo."
  require: [verificar]
  extra:
    - label: "Pedir una tabla, un gráfico o un archivo"
      any: ["tabla", "grafico", "excel", "archivo", "descargar"]
      hint: "Di qué resultado quieres: una tabla, un gráfico de barras o un Excel para descargar."
    - label: "Pedir que diga cuántas filas ha leído o el total"
      any: ["filas", "total", "cuadra", "cuantos registros"]
      hint: "Pide que te diga cuántas filas ha leído y el total para comprobarlo con otra fuente."
  sample: "Te subo la hoja con los gastos de mi comunidad de vecinos de este año, una fila por factura. Suma los gastos por categoría y por mes, y hazme un gráfico de barras con el total mensual. Dime cuántas filas has leído y el total general para que compruebe que cuadra con el extracto del banco. Avísame si hay filas vacías, importes raros o facturas repetidas. Al final, dame una tabla de resumen que pueda descargar en Excel."
deeper: null
tool: anonimizador
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-academy]
---

## La idea

Puedes subir a ChatGPT **documentos** (PDF, Word) y **hojas de cálculo** (Excel, CSV) en los planes gratis y de pago, con límites de tamaño y de uso según el plan.

Con ellos hace **análisis de datos**: escribe y ejecuta por su cuenta pequeños programas para calcular. Así puede:

- **Resumir y contar**: totales, medias, lo que más se repite.
- **Ordenar y filtrar**: por mes, por categoría, de mayor a menor.
- **Hacer gráficos**: de barras, de líneas, de sectores; algunos, interactivos.
- **Crear archivos** para descargar: una hoja limpia, una tabla, un PDF.

**Lo importante: comprobar.** Las cuentas suelen salir bien, pero el fallo está en **cómo lee el archivo**: se salta una pestaña, confunde columnas, toma una celda vacía por cero o lee mal un PDF escaneado. Por eso:

- Pide **cuántas filas ha leído** y qué columnas ha usado.
- Compara **dos o tres cifras** con el original o con otra fuente.
- Si algo no cuadra, pide que explique cómo lo ha calculado.

**Ojo con los datos personales.** Antes de subir una hoja, quita lo que no haga falta: nombres, DNI, teléfonos, cuentas bancarias.

## En la práctica

1. Sube el archivo desde el botón «+» del chat.
2. Di qué contiene y qué quieres saber.
3. Pide el formato: tabla, gráfico o archivo.
4. Pide los datos de control y compruébalos.

> Prueba: «Te subo un PDF con mis facturas del gas de este año (he tapado mi nombre y mi dirección). Hazme una tabla con el periodo, el consumo y el importe de cada factura. Dime de qué página sale cada dato y avísame si alguna no se lee bien».

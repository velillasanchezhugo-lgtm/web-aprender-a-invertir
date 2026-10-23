---
title: Analizar una hoja de cálculo
description: "Cómo preguntar a un Excel o un CSV en ChatGPT para sacar un resultado que presentar en el trabajo, sin datos personales y con las cifras comprobadas."
level: basico
track: gpt-trabajo
order: 404
skills: [gpt-archivos-datos, gpt-analizar, gpt-privacidad]
terms: [hoja-de-calculo, csv, anonimizar, datos-personales]
hook: "Tu jefe te pide para mañana «cuánto nos cuestan las furgonetas». Los datos están en un Excel de 800 filas y tú de Excel sabes poco."
takeaway: "Sube solo las columnas necesarias, pregunta en lenguaje normal y pide el resultado tal como lo vas a enseñar. Las cifras que vayas a defender, compruébalas tú."
scenario:
  kind: empresa
  label: Caso práctico
  title: Las furgonetas de Adrián
  body: "Adrián es administrativo en una empresa de reformas con seis furgonetas. Hace una copia del Excel de gastos, borra la columna de conductores y la sube. Pide el gasto por furgoneta y mes en un gráfico de barras. Una sale disparada en marzo: ChatGPT había sumado dos veces el IVA, que iba en otra columna. Lo corrige con una frase."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-tr04-q1
    q: "Ainhoa quiere analizar en su cuenta personal de ChatGPT un Excel de clientes de la empresa donde trabaja. ¿Qué hace primero?"
    options: ["Lo sube: si desactiva que sus chats se usen para mejorar los modelos, no hay problema", "Pregunta en su empresa qué puede usar y, si le dejan, sube una copia sin datos de clientes", "Hace una captura de pantalla de la hoja para no subir el archivo"]
    answer: 1
    explain: "Los datos de clientes no son suyos: decide la empresa. Desactivar ese ajuste tienta porque suena a solución, pero sigue compartiendo datos de otros sin permiso. Una captura lleva los mismos datos."
  - type: choice
    id: gpt-tr04-q2
    q: "Marisa sube el Excel de pedidos de su floristería, que tiene dos filas de título y celdas combinadas. ¿Qué le pide primero?"
    options: ["Que le haga directamente el gráfico de ventas por mes", "Que le diga qué columnas y cuántas filas ve, y qué cree que significa cada columna", "Que adivine qué quiere saber"]
    answer: 1
    explain: "Las filas de título y las celdas combinadas confunden. Pedir antes una descripción saca los malentendidos. Ir al gráfico tienta porque es lo que quiere, pero si ha leído mal la tabla, el gráfico estará mal."
  - type: truefalse
    id: gpt-tr04-q3
    q: "Si ChatGPT te enseña un gráfico claro, puedes fiarte de los números que hay detrás."
    answer: false
    explain: "El gráfico solo dibuja lo calculado. Si tomó una columna equivocada, será claro y erróneo. Comprueba las cifras clave en tu hoja."
tips:
  - "Antes de subirla, deja una sola pestaña y quita las filas de totales: es donde más se lía."
  - "Si una cifra no cuadra, pide «enséñame las filas que has usado para este total»."
action:
  title: Prepara un dato para tu jefe
  steps:
    - "Haz una copia de una hoja de trabajo que te dejen usar y quita los datos de personas (el anonimizador de esta web ayuda)."
    - "Súbela, pide que describa las columnas y después la tabla o el gráfico que enseñarías."
    - "Comprueba a mano una de las cifras."
  check: He analizado una hoja sin datos personales y he comprobado una cifra a mano
practice:
  task: "Trabajas en una agencia de viajes y tienes un Excel con las reservas de 2025 (cliente, destino, fecha e importe). Escribe la petición para saber qué destinos y meses dejan más."
  require: [contexto, formato]
  extra:
    - label: Avisar de que va sin datos personales
      any: [sin datos, he quitado, he borrado, he eliminado, anonimiz, sin nombres, sin los nombres]
      hint: "Quita antes la columna de clientes y dilo: «He quitado los nombres de los clientes»."
    - label: Pedir una cifra o las filas para comprobar
      any: [compruebe, comprobar, comprobarlo, filas, verificar, revisar, cuadrar]
      hint: "Pide el total de un mes o las filas que ha usado, para comprobarlo tú."
  sample: "Trabajo en una agencia de viajes pequeña. Te adjunto un Excel con las reservas de 2025: destino, fecha de viaje e importe. He quitado la columna con los nombres de los clientes. Primero dime qué columnas ves. Después hazme una tabla con los 5 destinos que más facturan y un gráfico de barras por mes. Dame el total de agosto y cuántas filas has sumado, para comprobarlo."
deeper: null
tool: anonimizador
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, aepd-guias, lopdgdd]
---

## La idea

Puedes subir a ChatGPT una **hoja de cálculo** (un Excel) o un **CSV**, una tabla guardada como texto que exportan casi todos los programas. Le preguntas como a un compañero: «¿qué furgoneta gasta más?». ChatGPT hace las cuentas y devuelve tablas, gráficos o una hoja para descargar, en los planes gratis y de pago (con más margen en los de pago).

En el trabajo importan tres cosas, por este orden:

1. **Permiso y datos personales.** Si la hoja es de la empresa, pregunta qué se puede usar. Después, **anonimiza**: quita o cambia por códigos (A1, A2…) nombres, DNI y teléfonos. Para sumar casi nunca hacen falta.
2. **El resultado que vas a enseñar.** Pide lo que llevarás a la reunión: «una tabla de 5 filas», «un gráfico por mes», «el Excel resumen».
3. **Las cifras que vas a defender.** Puede leer mal una columna o contar dos veces una fila. Comprueba en tu hoja las dos o tres que importan.

## En la práctica

1. Haz una **copia** y deja solo las columnas necesarias.
2. Súbela y pide primero que **describa las columnas** y cuántas filas ve.
3. Pregunta una cosa cada vez y pide el formato final.
4. Pide **qué filas ha usado** en las cifras importantes y compáralas.

> Prueba: «Soy encargada de un almacén. Te adjunto las horas extra de 2025 por turno y mes, sin nombres. Primero dime qué columnas ves. Después hazme una tabla por turno y un gráfico de líneas por mes para la reunión del lunes. Dame el total de julio para comprobarlo.»

## Error frecuente

Subir la hoja tal como sale del programa, con nombres y teléfonos, «porque solo era para sumar».

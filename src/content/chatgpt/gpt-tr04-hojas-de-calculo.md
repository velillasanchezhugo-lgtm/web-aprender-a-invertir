---
title: Analizar una hoja de cálculo
description: "Cómo subir un Excel o un CSV a ChatGPT, hacerle preguntas, pedir gráficos y comprobar las cifras, quitando antes los datos personales."
level: basico
track: gpt-trabajo
order: 404
skills: [gpt-archivos-datos, gpt-analizar, gpt-privacidad]
terms: [hoja-de-calculo, csv, anonimizar, datos-personales]
hook: "Tienes un Excel con todos los gastos del año y una pregunta sencilla: ¿en qué se nos va el dinero? No sabes hacer tablas dinámicas y no tienes una tarde libre."
takeaway: "ChatGPT puede leer tu hoja, hacer las cuentas y dibujar gráficos si le preguntas en lenguaje normal. Antes, quita los datos personales; después, comprueba a mano las dos o tres cifras con las que vas a decidir."
scenario:
  kind: empresa
  label: Caso práctico
  title: Las furgonetas de Raúl
  body: "Raúl es administrativo en una empresa de reformas con seis furgonetas. Lleva en un Excel los gastos de combustible, taller y peajes de cada una. Hace una copia, borra la columna con el nombre de los conductores y la sube a ChatGPT. Pide el gasto por furgoneta y mes con un gráfico de barras. Una furgoneta sale disparada en marzo; al revisar, ve que ChatGPT ha sumado dos veces el IVA, que estaba en otra columna. Lo corrige con una frase y el gráfico cambia."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-tr04-q1
    q: "Lucía coordina una academia de baile y tiene un Excel con nombre, teléfono, clase, cuota y fecha de baja de cada alumno. Quiere saber qué clases pierden más alumnos. ¿Qué sube?"
    options: ["La hoja tal cual: así no se equivoca de fila", "Una copia solo con las columnas de clase, mes y baja, con los alumnos como A1, A2, A3…", "Una captura de pantalla de la hoja, que no es lo mismo que subir el archivo"]
    answer: 1
    explain: "Para contar bajas por clase no hacen falta nombres ni teléfonos. Subirla entera tienta por cómodo, pero compartes datos personales de otros sin necesidad. Una captura lleva exactamente los mismos datos."
  - type: choice
    id: gpt-tr04-q2
    q: "Marisa sube el Excel de pedidos de su floristería, que tiene dos filas de título y celdas combinadas. ¿Qué le pide primero?"
    options: ["Que le haga directamente el gráfico de ventas por mes", "Que le diga qué columnas y cuántas filas ve, y qué cree que significa cada columna", "Que adivine qué quiere saber"]
    answer: 1
    explain: "Las filas de título y las celdas combinadas confunden a cualquiera que lea la tabla. Pedir antes una descripción saca los malentendidos a la luz. Ir al gráfico tienta porque es lo que quiere, pero si ha leído mal la tabla, el gráfico estará mal."
  - type: truefalse
    id: gpt-tr04-q3
    q: "Si ChatGPT te enseña un gráfico claro, puedes fiarte de los números que hay detrás."
    answer: false
    explain: "El gráfico solo dibuja lo que ha calculado. Si ha tomado una columna equivocada o ha contado filas repetidas, el gráfico será claro y erróneo. Comprueba las cifras clave en tu hoja."
tips:
  - "Pon nombres claros a las columnas («Fecha», «Importe sin IVA») y quita filas de totales antes de subir la hoja."
  - "Si una cifra no te cuadra, pide «enséñame las filas que has usado para este total»: el error suele aparecer enseguida."
  - "Pide la hoja corregida o la tabla resumen como archivo descargable para trabajarla después en tu programa."
action:
  title: Hazle una pregunta a tu hoja
  steps:
    - "Elige una hoja sencilla (gastos de casa, ventas de un mes, horas de un proyecto) y haz una copia."
    - "Pasa los datos que identifiquen a personas por el anonimizador de esta web, o borra esas columnas."
    - "Súbela a ChatGPT, pide que describa las columnas y hazle una pregunta con gráfico."
    - "Comprueba a mano una de las cifras."
  check: He analizado una hoja sin datos personales y he comprobado una cifra a mano
practice:
  task: "Trabajas en una agencia de viajes pequeña y tienes un Excel con las reservas de 2025 (cliente, destino, fecha e importe). Escribe la petición para saber qué destinos y meses dejan más, sin datos de clientes."
  require: [contexto, formato]
  extra:
    - label: Avisar de que va sin datos personales
      any: [sin datos, he quitado, he borrado, anonimiz, sin nombres, sin el nombre]
      hint: "Quita antes la columna de clientes y dilo: «He quitado los nombres de los clientes»."
    - label: Pedir una cifra o las filas para comprobar
      any: [compruebe, comprobar, comprobarlo, filas, verificar]
      hint: "Pide el total de un mes o las filas que ha usado, para comprobarlo tú."
  sample: "Trabajo en una agencia de viajes pequeña. Te adjunto un Excel con las reservas de 2025: destino, fecha de viaje e importe. He quitado la columna con los nombres de los clientes. Primero dime qué columnas ves y cuántas filas hay. Después hazme una tabla con los 5 destinos que más facturan y un gráfico de barras con el importe por mes. Dame también el total de agosto y cuántas filas has sumado, para que lo compruebe con mi programa."
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

Puedes subir a ChatGPT una **hoja de cálculo** (un Excel) o un **CSV**, que es una tabla guardada como texto y el formato que exportan casi todos los bancos, tiendas en línea y programas de gestión. Después le preguntas como a un compañero: «¿qué mes gastamos más?», «¿qué producto ha caído?».

Para responder, ChatGPT hace las cuentas por dentro y puede devolverte **tablas, gráficos** (algunos, como los de barras o líneas, interactivos) y archivos para descargar. Funciona en los planes gratuito y de pago, con más margen de uso en los de pago.

Dos reglas, por orden de importancia:

1. **Quita los datos personales antes.** Nombres, DNI, teléfonos, correos, direcciones. **Anonimizar** es quitarlos o cambiarlos por códigos (A1, A2…) para que no se sepa de quién se habla. Casi nunca los necesita para contar o sumar. Si los datos son de clientes o empleados, sigue además las normas de tu empresa.
2. **Comprueba las cifras clave.** Puede leer mal una columna, tomar un texto por un número o contar dos veces una fila. Antes de decidir, verifica dos o tres números en tu programa.

## En la práctica

1. Haz una **copia** de la hoja y borra o anonimiza las columnas personales.
2. Súbela y pide primero que **describa las columnas** y cuántas filas ve.
3. Haz tus preguntas, una a una, y pide un **gráfico** cuando ayude.
4. Pide **qué filas ha usado** en las cifras importantes y compáralas.

> Prueba: «Te adjunto los gastos de mi casa de 2025, sin datos personales. Primero dime qué columnas ves. Después agrupa los gastos por categoría, dime cuáles han subido más respecto a 2024 y hazme un gráfico de barras. Dame el total de diciembre para que lo compruebe.»

> Prueba: «Soy profesor. Adjunto las notas de mis grupos de 3.º de ESO, con los alumnos como A1, A2, A3… ¿En qué grupo y en qué evaluación baja más la media? Hazme un gráfico de líneas.»

## Error frecuente

Subir la hoja tal como sale del programa, con nombres y teléfonos, «porque solo era para sumar».

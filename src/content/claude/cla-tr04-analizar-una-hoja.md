---
title: Preguntar a una hoja de cálculo
description: Cómo subir a Claude una hoja de cálculo o un CSV, hacerle preguntas y pedir un gráfico, comprobando las cifras clave y quitando antes los datos personales.
level: basico
track: cla-trabajo
order: 304
skills: [cla-analizar, cla-archivos, cla-privacidad]
terms: [hoja-de-calculo, csv, anonimizar, datos-personales]
hook: "Tienes un Excel con las ventas de todo el año y una pregunta sencilla: ¿qué se vende peor en verano? No sabes hacer tablas dinámicas."
takeaway: Claude puede leer tu hoja, responder preguntas en lenguaje normal y hacer gráficos. Antes, quita los datos personales. Después, comprueba a mano dos o tres cifras clave.
scenario:
  kind: empresa
  label: Caso práctico
  title: Las ventas de la tienda de Inés
  body: "Inés tiene una tienda de ropa infantil. Exporta las ventas del año en un CSV, borra nombre, correo y dirección de los clientes, y lo sube a Claude. Pregunta qué productos bajan en verano y pide un gráfico por meses. Antes de hacer el pedido, comprueba el total de julio en su programa: coincide."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-tr04-q1
    q: "Pablo lleva las cuotas del club de pádel en un Excel con nombre, DNI, teléfono, cuota y fecha de pago. Quiere saber cuánto se cobró por meses. ¿Qué sube?"
    options: ["La hoja tal cual: es más rápido", "Una copia solo con las columnas de cuota y fecha de pago", "Una captura de pantalla de la hoja, que no es lo mismo que subir el archivo"]
    answer: 1
    explain: "Para sumar por meses no hacen falta nombres, DNI ni teléfonos. Subir la hoja entera tienta por rápido, pero compartes datos personales de otros sin necesidad. Una captura contiene los mismos datos."
  - type: truefalse
    id: cla-tr04-q2
    q: "Si Claude ha calculado el total con un programa, no hace falta comprobarlo."
    answer: false
    explain: "El cálculo suele ser correcto, pero puede leer mal una columna, contar dos veces una fila o tomar textos como números. Comprueba las dos o tres cifras en las que vas a basar una decisión."
  - type: choice
    id: cla-tr04-q3
    q: "Claude te dice que tus ventas de marzo fueron 12.000 €, y a ti te suena que fueron unos 8.000 €. ¿Qué haces?"
    options: ["Me fío de Claude: los números los ha calculado él", "Le pido que me enseñe qué filas ha sumado y lo comparo con mi programa", "Borro la conversación y vuelvo a empezar"]
    answer: 1
    explain: "Pedirle el detalle suele revelar el fallo enseguida: una columna equivocada, devoluciones contadas como ventas o fechas mal leídas. Empezar de cero no te dice dónde estaba el error."
tips:
  - "Pon nombres claros a las columnas («Fecha», «Importe sin IVA»): Claude las entenderá mejor."
  - "Empieza preguntando «¿Qué columnas ves y qué crees que significa cada una?» para detectar malentendidos."
action:
  title: Hazle una pregunta a tus datos
  steps:
    - "Exporta una hoja sencilla (gastos de casa, ventas de un mes, notas de una clase) y borra nombres, DNI, teléfonos y correos."
    - "Súbela con la primera petición de ejemplo."
    - "Comprueba a mano una de las cifras que te dé."
  check: He analizado una hoja sin datos personales y he comprobado una cifra a mano
practice:
  task: "Tienes un bar y has exportado a CSV las ventas diarias de un año. Escribe la petición para que Claude te diga qué días y franjas flojean, con un gráfico y una cifra que puedas comprobar."
  require: [contexto, formato]
  extra:
    - label: Avisar de que va sin datos personales
      any: [sin datos, he quitado, he borrado, anonimiz, sin nombres]
      hint: "Quita antes los datos de clientes y dilo: «He quitado los datos de las tarjetas»."
    - label: Pedir una cifra o las filas para comprobar
      any: [compruebe, comprobar, comprobarlo, filas, verificar]
      hint: "Pide el total de un mes o las filas que ha sumado, para comprobarlo tú."
  sample: "Tengo un bar de barrio y te adjunto un CSV con las ventas de 2025 por día y por franja (mañana, mediodía y tarde). He quitado los datos de las tarjetas de los clientes. Primero dime qué columnas ves y qué significa cada una. Después dime qué días de la semana y qué franjas venden menos, con un gráfico de barras por día. Dame también el total de marzo y las filas que has sumado, para que lo compruebe con mi caja."
deeper: null
tool: anonimizador
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [claude-ayuda, aepd-guias, lopdgdd]
---

## La idea

Puedes subir a Claude una **hoja de cálculo** (un Excel, por ejemplo) o un **CSV**, que es una tabla guardada como texto y es el formato que exportan casi todos los bancos, tiendas en línea y programas. Después le preguntas como a un compañero: «¿qué mes vendimos más?», «¿qué gasto ha crecido?».

Para responder, Claude puede **escribir y ejecutar un pequeño programa** que hace las cuentas, y crear **gráficos** o un archivo de Excel nuevo. Esta función está en el plan gratuito y en los de pago. Si no te deja trabajar con un Excel, mira en Ajustes que esté activada la opción de ejecutar código y crear archivos.

Dos reglas, por orden de importancia:

1. **Quita los datos personales antes.** Nombres, DNI, teléfonos, correos, direcciones, datos de salud. **Anonimizar** es quitarlos o cambiarlos para que no se sepa de quién se habla. Si los datos son de clientes o empleados, sigue además las normas de tu empresa.
2. **Comprueba las cifras clave.** Puede leer mal una columna o contar una fila dos veces. Antes de decidir, verifica dos o tres números con tu programa o con una suma rápida.

## En la práctica

1. Haz una copia de la hoja y **borra las columnas personales** que no necesitas.
2. Súbela y pídele primero que **describa las columnas**: así detectas malentendidos.
3. Haz tus preguntas y pide un **gráfico** cuando ayude.
4. Pide que te diga **qué filas ha usado** para las cifras importantes.

> Prueba: «Te adjunto las ventas de mi tienda de 2025 (sin datos de clientes). Primero dime qué columnas ves. Después: ¿qué 5 productos venden menos entre junio y agosto que el resto del año? Hazme un gráfico de barras de las ventas por mes y dime el total de julio para que lo compruebe.»

> Prueba: «Soy profesora. Adjunto las notas de mi clase, con los alumnos como A1, A2, A3… ¿En qué preguntas del examen falló más de la mitad? Ordénalas de peor a mejor resultado.»

## Error frecuente

Subir la hoja tal como sale del programa, con nombres y teléfonos de clientes, «porque solo era para sumar».

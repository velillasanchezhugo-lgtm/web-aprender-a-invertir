---
title: Pedir archivos de verdad
description: Cómo pedir a Claude un Word, un Excel, un PowerPoint o un PDF que puedas descargar, qué ajuste lo activa y qué revisar antes de usarlo o enviarlo.
level: basico
track: cla-funciones
order: 204
skills: [cla-archivos, cla-verificar]
terms: [artefacto]
hook: "Tu jefa te pide para mañana una hoja de Excel con las vacaciones del equipo y una presentación de cinco diapositivas. ¿Puede Claude darte los archivos, no solo el texto?"
takeaway: Claude puede crear archivos de Word, Excel, PowerPoint y PDF que descargas y abres en tus programas. Antes de enviarlos, ábrelos y revisa datos, fórmulas y formato como si los hubiera hecho un compañero nuevo.
scenario:
  kind: producto
  label: Caso práctico
  title: El Excel de vacaciones de Rocío
  body: "Rocío pega en Claude una lista con las vacaciones que ha pedido cada persona de su equipo y pide un Excel con un calendario por meses y una columna que sume los días de cada una. Lo descarga y lo abre. Al revisar, ve que a un compañero le cuenta un festivo como día de vacaciones. Se lo dice a Claude, que corrige la fórmula."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-fu04-q1
    q: "Javier pide a Claude un Excel, pero solo recibe una tabla escrita en el chat. ¿Qué revisa primero?"
    options: ["Que su plan sea de pago: en el gratuito no se pueden crear archivos", "Que tenga activada la ejecución de código y creación de archivos en los ajustes de Capacidades", "Que su ordenador tenga instalado Excel"]
    answer: 1
    explain: "La creación de archivos depende de ese ajuste y está en todos los planes, también en el gratuito. Pensar que es solo de pago tienta, pero hoy no es así. Tener Excel instalado solo hace falta para abrir el archivo después."
  - type: truefalse
    id: cla-fu04-q2
    q: "Si Claude te da un Excel con fórmulas, los totales serán correctos y no hace falta comprobarlos."
    answer: false
    explain: "Claude puede equivocarse al entender tus datos o al montar una fórmula. Comprueba a mano dos o tres resultados. Tienta fiarse porque «lo ha calculado el ordenador», pero el ordenador hace lo que se le ha pedido, bien o mal."
  - type: choice
    id: cla-fu04-q3
    q: "Te llega por correo un archivo de un desconocido y piensas subirlo a Claude para que lo convierta en una presentación. ¿Qué es lo más prudente?"
    options: ["Subirlo sin más: Claude lo revisa todo", "Abrirlo antes tú y vigilar lo que hace Claude, porque un archivo puede esconder instrucciones maliciosas", "Pedir a Claude que lo envíe a otra persona"]
    answer: 1
    explain: "La propia ayuda de Claude avisa de que un archivo o una web pueden llevar instrucciones escondidas que intenten engañarlo. Por eso hay que saber qué subes y vigilar el resultado."
tips:
  - "Pide el formato exacto: «un .xlsx con una pestaña por mes», «un .docx con estilos de título», «un PDF de una página»."
  - "Crear archivos gasta más uso del plan que una respuesta normal: pide primero el contenido, ajústalo y luego el archivo."
action:
  title: Pide un archivo y revísalo
  steps:
    - "Comprueba en los ajustes que está activada la creación de archivos."
    - "Pide un Excel pequeño y útil: tus gastos fijos del mes o un horario de estudio, con un total."
    - "Descárgalo, ábrelo y comprueba a mano un total."
  check: He pedido a Claude un archivo, lo he abierto y he comprobado un resultado
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [claude-ayuda]
---

## La idea

Claude no solo escribe texto en el chat: también puede **crear archivos de verdad** que descargas y abres en tus programas.

- **Word** (.docx): cartas, informes, plantillas.
- **Excel** (.xlsx): tablas con fórmulas, presupuestos, calendarios.
- **PowerPoint** (.pptx): presentaciones.
- **PDF**: documentos listos para imprimir o enviar.

Para hacerlo, Claude usa un **espacio aislado** donde ejecuta código y genera el archivo. Puedes descargarlo o guardarlo en tu Google Drive.

Lo que conviene saber:

- **Está en todos los planes**, gratis y de pago, en la web, el escritorio y el móvil.
- **Hay que activarlo.** Se llama algo así como «Ejecución de código y creación de archivos» y está en los ajustes de **Capacidades**. En los planes de empresa lo controla quien administra la cuenta.
- **Gasta más uso** que un chat normal.
- **Cuidado con lo que subes.** La ayuda de Claude avisa de que un archivo o una web de terceros pueden esconder instrucciones para engañarlo. Usa archivos de confianza y mira lo que hace.

## En la práctica

1. Describe el archivo: **tipo, contenido, estructura y para quién es**.
2. Si tienes datos, pégalos o súbelos.
3. **Ábrelo y revísalo** antes de usarlo:
   - ¿Están todos los datos y bien copiados?
   - ¿Los totales cuadran? Comprueba dos a mano.
   - ¿El formato se ve bien en tu programa?
   - ¿Hay datos personales que no deberían ir?
4. Pide correcciones concretas y vuelve a descargar.

> Prueba: «Crea un Excel para controlar los gastos de casa de este mes. Columnas: fecha, concepto, categoría (alquiler, comida, transporte, ocio, otros) e importe en euros. Añade diez filas de ejemplo, un total por categoría y un gráfico de barras. Formato de números español, con coma decimal».

## Error frecuente

Enviar el archivo tal cual sale sin abrirlo. Un dato mal copiado en un presupuesto o una fórmula mal hecha te los apuntan a ti, no a Claude.

---
title: La app de escritorio y sus extensiones
description: "Qué añade la aplicación de Claude para el ordenador: extensiones, trabajo con tus archivos y carpetas, y qué carpetas compartir y cuáles no."
level: basico
track: cla-conectar
order: 505
skills: [cla-habilidades, cla-acceso, cla-privacidad]
terms: [extension-de-escritorio]
hook: "Tienes 200 facturas en PDF en una carpeta del ordenador y quieres una tabla con fecha, proveedor e importe. ¿Las subes una a una al chat?"
takeaway: La app de escritorio puede trabajar con programas y archivos de tu ordenador mediante extensiones y carpetas conectadas. Comparte solo una carpeta de trabajo, nunca la de documentos personales entera.
scenario:
  kind: producto
  label: Caso práctico
  title: Las facturas de Marcelo
  body: "Marcelo tiene una tienda de bicicletas en Logroño. Copia las facturas del trimestre en una carpeta nueva y solo conecta esa a Claude. Le pide una hoja con fecha, proveedor e importe, revisa diez filas al azar y corrige dos importes mal leídos."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-co05-q1
    q: "Sara quiere que Claude ordene los apuntes de sus oposiciones, que tiene en el ordenador. ¿Qué carpeta conecta?"
    options: ["Su carpeta de usuario entera, para que lo encuentre todo", "Una carpeta solo con los apuntes, y una copia de seguridad hecha antes", "La de Descargas, donde está todo mezclado"]
    answer: 1
    explain: "Una carpeta de trabajo limita lo que Claude puede leer o cambiar, y la copia te protege si algo sale mal. Tienta dar acceso a todo por comodidad, pero así entran también la nómina, el DNI escaneado o los papeles del banco."
  - type: truefalse
    id: cla-co05-q2
    q: "Las extensiones de escritorio funcionan igual en la web de Claude y en la app del móvil."
    answer: false
    explain: "Se ejecutan en tu ordenador, así que solo funcionan en la aplicación de escritorio (y en Claude Code). En la web y el móvil se usan los conectores en la nube."
  - type: choice
    id: cla-co05-q3
    q: "Encuentras en un foro una extensión de escritorio que «lee todo tu disco y lo organiza». ¿Qué haces?"
    options: ["Instalarla: si es para Claude, Anthropic la ha revisado", "Preferir las del directorio de la app, revisadas por Anthropic, y desconfiar de las sueltas", "Instalarla y darle acceso a todo para probar"]
    answer: 1
    explain: "El directorio de la app reúne extensiones revisadas. Un archivo bajado de un foro puede hacer cualquier cosa con tu ordenador. Tienta pensar que todo lo que funciona con Claude está revisado, y no es así."
tips:
  - "Crea una carpeta «Para Claude» y copia allí solo lo que necesite cada tarea."
  - "Haz copia de seguridad antes de pedirle que renombre, mueva u ordene archivos."
action:
  title: Prepara tu carpeta de trabajo
  steps:
    - "Instala la app de escritorio de Claude desde su web oficial, si aún no la tienes."
    - "Crea en tu ordenador una carpeta vacía llamada «Para Claude»."
    - "Mira en los ajustes de la app qué extensiones hay en el directorio."
    - "Apunta en «Mi kit de Claude» qué carpetas nunca vas a compartir."
  check: He creado mi carpeta de trabajo y sé qué no compartir
practice:
  task: "Tienes 60 fotos de un viaje con nombres como IMG_2034 y quieres que Claude, desde la app de escritorio, les ponga nombres claros. Escribe la petición: qué carpeta, qué puede cambiar y qué no."
  require: [limites, ejemplos]
  extra:
    - label: "Nombrar una carpeta concreta"
      any: ["carpeta"]
      hint: "Di en qué carpeta trabaja, y que sea una copia creada para la tarea."
    - label: "Pedir una prueba antes de cambiar"
      any: ["antes de cambiar", "antes de renombrar", "preguntame", "confirmacion", "primero"]
      hint: "Pide que te enseñe primero unos cambios de prueba y espere tu confirmación."
  sample: "En la carpeta «Viaje Asturias copia» hay 60 fotos con nombres como IMG_2034. Ordena y renombra las fotos con la fecha en que se hicieron y un número, por ejemplo 2026-07-14_01. Trabaja solo en esa carpeta y no borres ni muevas ninguna foto. Antes de cambiar nada, enséñame una lista con el nombre actual y el nuevo de las diez primeras y espera mi confirmación. Dime si alguna foto no tiene fecha."
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [claude-ayuda, claude-planes]
---

## La idea

Claude tiene **aplicación de escritorio** para Mac y Windows (y una beta para Linux). Sirve para chatear como en la web, pero además puede trabajar con **lo que hay en tu ordenador**.

- **Extensiones de escritorio:** complementos que se instalan con un clic y conectan Claude con programas y archivos de tu equipo, o con servicios que no tienen versión en la nube. Solo funcionan en la app de escritorio. En la app hay un **directorio de extensiones revisadas** por Anthropic.
- **Carpetas conectadas:** en los planes de pago, Claude puede leer y crear archivos **solo en las carpetas que tú le conectas**, sin subirlos uno a uno. Antes de **borrar** un archivo para siempre, te pide permiso.
- **Uso del ordenador:** en los planes Pro y Max, en fase beta, Claude puede manejar aplicaciones de tu pantalla haciendo clic y escribiendo. Es lo más delicado: no tiene las barreras de las demás herramientas.

La regla de oro es **compartir poco**. Qué carpetas sí y cuáles no:

- **Sí:** una carpeta de trabajo creada para la tarea, con copias.
- **No:** tu carpeta de usuario entera, documentos de banco, nóminas, salud, DNI escaneado o contraseñas.

Las funciones y los planes de la app cambian a menudo: compruébalos en el centro de ayuda y en la página de planes.

## En la práctica

1. Crea una carpeta solo para la tarea y copia allí los archivos.
2. Conecta **esa carpeta**, no una más grande.
3. Di qué debe crear y qué **no** debe tocar.
4. Revisa una muestra del resultado.

> Prueba: «En la carpeta Facturas T3 hay facturas en PDF. Crea una hoja de cálculo con fecha, proveedor, base, IVA y total de cada una. No modifiques ni borres ningún PDF. Al final, dime qué facturas no has podido leer bien.»

## Error frecuente

Conectar la carpeta de Documentos «para que lo tenga todo». Si algo sale mal, Claude habrá podido leer o cambiar mucho más de lo que necesitaba.

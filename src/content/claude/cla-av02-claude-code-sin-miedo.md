---
title: Claude Code sin miedo
description: "Qué es Claude Code, dónde se usa, qué puede hacer con él alguien que no programa (una web sencilla, una pequeña automatización) y por qué se revisa lo que hace."
level: basico
track: cla-avanzado
order: 702
skills: [cla-agentes, cla-verificar]
terms: [claude-code, agente-de-ia]
hook: "Quieres una web sencilla para tu clase de yoga con horarios y un mapa, pero no sabes programar. ¿Es esto para ti o solo para informáticos?"
takeaway: Claude Code es la herramienta de Claude para crear y cambiar programas. Sin saber programar puedes hacer cosas pequeñas con él, siempre en una carpeta de prueba, aprobando sus cambios y comprobando el resultado.
scenario:
  kind: producto
  label: Caso práctico
  title: La web de Olga
  body: "Olga da clases de yoga en Gijón. Abre Claude Code en la app de escritorio, en una carpeta vacía, y pide una web de una página con horarios y precios. Claude la crea y le explica cómo verla. Olga pide cambios y, antes de publicarla, se la enseña a una amiga que sabe de webs."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-av02-q1
    q: "Claude Code te pide permiso para ejecutar una orden que no entiendes. ¿Qué haces?"
    options: ["Aprobarla: si la propone Claude, estará bien", "Pedirle que te explique en palabras sencillas qué hace y qué puede cambiar, y aprobar solo si lo entiendes", "Aprobar todas a partir de ahora para no perder tiempo"]
    answer: 1
    explain: "Las órdenes pueden borrar, mover o instalar cosas en tu ordenador. Pedir la explicación te protege y te enseña. Aprobarlo todo tienta por cómodo, pero quitas tu única barrera."
  - type: choice
    id: cla-av02-q2
    q: "Benito, que no programa, quiere probar Claude Code. ¿Por dónde empieza?"
    options: ["Por la aplicación de la empresa donde trabaja, con datos reales de clientes", "Por una carpeta nueva con un proyecto pequeño, como una web personal o un script para renombrar fotos copiadas", "Por un programa que gestione sus cuentas bancarias"]
    answer: 1
    explain: "Un proyecto pequeño en una carpeta aparte es fácil de revisar y, si algo sale mal, no rompe nada importante. Lo del trabajo tienta por útil, pero mezcla datos ajenos y sistemas que no controlas."
  - type: truefalse
    id: cla-av02-q3
    q: "Si la web que te ha hecho Claude Code se ve bien en tu ordenador, ya es segura para publicarla con un formulario que recoge datos de personas."
    answer: false
    explain: "Verse bien no es lo mismo que ser segura. Un formulario con datos personales tiene obligaciones de protección de datos y riesgos técnicos: pide revisión a alguien que sepa antes de publicarla."
tips:
  - "Pídele que te explique cada cambio importante «como si no supiera programar»."
  - "Nunca le pegues contraseñas ni claves de acceso en el chat ni en los archivos."
action:
  title: Echa un vistazo a Claude Code
  steps:
    - "Si tienes un plan de pago, busca Claude Code en la app de escritorio o en la web de Claude; si no, lee su página de introducción."
    - "Crea una carpeta vacía llamada «Prueba Claude Code»."
    - "Pídele una página web sencilla sobre una afición tuya y revisa cada cambio antes de aprobarlo."
  check: Sé qué es Claude Code y cómo probarlo sin riesgo
practice:
  task: "Tienes en el ordenador una copia de 2.000 fotos del móvil, todas mezcladas. Escribe la petición a Claude Code para ordenarlas por año y mes, en una carpeta de prueba y explicando antes su plan."
  require: [contexto, limites]
  extra:
    - label: Pedir el plan antes de tocar nada
      any: [plan, explícame primero, antes de tocar, antes de crear, antes de cambiar]
      hint: "Pide que te explique en sencillo qué va a hacer antes de tocar nada."
    - label: Trabajar sobre una copia o carpeta de prueba
      any: [copia, carpeta de prueba]
      hint: "Di que trabaje solo en una carpeta de prueba o sobre una copia, nunca con los originales."
  sample: "No sé programar. Tengo en esta carpeta una copia de unas 2.000 fotos de mi móvil, todas mezcladas. Crea un pequeño programa que las ordene en carpetas por año y mes según la fecha de cada foto. Trabaja solo dentro de esta carpeta de prueba y no borres ninguna foto. Antes de tocar nada, explícame en palabras sencillas tu plan y cómo lo pondré en marcha."
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [claude-docs, claude-planes]
---

## La idea

**Claude Code** es la herramienta de Anthropic para trabajar con código junto a Claude. Es un **agente**: lee los archivos de un proyecto, los modifica, ejecuta órdenes en el ordenador y comprueba si funciona.

Dónde se usa hoy:

- En la **terminal**, la ventana de texto donde se escriben órdenes al ordenador.
- En **editores de código**, los programas que usan los programadores.
- En la **aplicación de escritorio** de Claude, con ventanas y botones.
- En la **web** y la app del móvil, para tareas que se ejecutan en la nube.

Requiere un **plan de pago**. Lo usan sobre todo programadores, pero sin programar puedes hacer cosas **pequeñas y útiles**:

- Una **web sencilla** de una página para un negocio o una afición.
- Un pequeño programa que **renombre u ordene archivos** (por ejemplo, fotos por fecha).
- Convertir o limpiar **hojas de cálculo** que cada mes te llevan una hora.

¿Por qué se revisa? Porque **actúa en tu ordenador**: puede borrar, mover o instalar cosas, y el código puede tener fallos que no se ven a simple vista. En su modo **manual**, Claude Code **pide permiso** antes de cambiar archivos o ejecutar órdenes; otros modos le dan más libertad. Al empezar, elige el manual: ese permiso es tu control, no lo des a ciegas.

## En la práctica

1. Trabaja en una **carpeta nueva**, sin documentos personales.
2. Describe qué quieres como se lo contarías a una persona.
3. Pide que te explique el plan **antes** de tocar nada.
4. Aprueba solo lo que entiendas; si no, pregunta.
5. Comprueba el resultado tú mismo.

> Prueba: «No sé programar. Quiero una web de una sola página para mi clase de yoga con horarios, precios y cómo llegar. Explícame primero en palabras sencillas qué archivos vas a crear y cómo podré verla en mi navegador.»

## Error frecuente

Publicar en internet lo que ha hecho Claude Code sin que nadie lo revise. Para algo que recoge datos de personas o pagos, pide ayuda profesional.

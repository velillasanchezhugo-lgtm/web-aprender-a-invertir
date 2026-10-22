---
title: "Proyectos: tu carpeta de trabajo"
description: Qué es un proyecto en Claude, cuándo crear uno, cómo usar sus instrucciones y su conocimiento, y cómo se comparte en los planes de equipo.
level: basico
track: cla-funciones
order: 205
skills: [cla-proyectos, cla-plantillas]
terms: [proyecto-de-claude, ventana-de-contexto, instrucciones-personales]
hook: "Llevas tres semanas preparando oposiciones con Claude y cada día le vuelves a explicar el temario, tu nivel y cómo quieres que te pregunte. ¿Hay una forma de no repetirlo?"
takeaway: Un proyecto reúne los chats de un mismo tema con unas instrucciones fijas y unos archivos de referencia. Créalo cuando vayas a volver al mismo asunto muchas veces.
scenario:
  kind: producto
  label: Caso práctico
  title: Las oposiciones de Ibrahim
  body: "Ibrahim prepara unas oposiciones de auxiliar administrativo. Crea un proyecto llamado «Oposiciones 2027», sube el temario oficial en PDF y escribe estas instrucciones: «Soy principiante. Explícame con ejemplos y hazme tres preguntas al final de cada tema». Desde entonces abre un chat nuevo por tema dentro del proyecto y no tiene que repetir nada."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-fu05-q1
    q: "¿En cuál de estos casos compensa más crear un proyecto?"
    options: ["Preguntar una vez cómo se quita una mancha de vino", "Preparar durante meses la reforma de tu cocina, con presupuestos, planos y correos al reformista", "Traducir una frase al inglés"]
    answer: 1
    explain: "La reforma es un tema largo al que volverás muchas veces y con documentos que Claude debe tener a mano. Para dudas sueltas, un chat normal basta: crear un proyecto solo añade pasos."
  - type: truefalse
    id: cla-fu05-q2
    q: "Las instrucciones de un proyecto se aplican a todos los chats de ese proyecto, pero no a tus demás conversaciones."
    answer: true
    explain: "Las instrucciones del proyecto valen solo dentro de él. Para algo que quieras en todas tus conversaciones, están las instrucciones generales de tu cuenta, en los ajustes."
  - type: choice
    id: cla-fu05-q3
    q: "Elena trabaja en una gestoría con plan de equipo y quiere que dos compañeros usen su proyecto de plantillas de correos, pero sin que cambien las instrucciones. ¿Qué hace?"
    options: ["Comparte el proyecto con permiso de solo ver", "Les da permiso para editar", "Les pasa su contraseña"]
    answer: 0
    explain: "Con permiso de ver pueden usar el proyecto y chatear en él, pero no tocar las instrucciones ni los archivos. Dar permiso de edición tienta por comodidad, pero les deja cambiarlo todo. La contraseña no se comparte nunca."
tips:
  - "Escribe instrucciones cortas y concretas: quién eres, qué quieres conseguir y cómo quieres las respuestas."
  - "Sube solo los archivos que de verdad uses y quita los viejos: todo ocupa espacio en la memoria de trabajo de Claude."
  - "No subas a un proyecto documentos con datos personales de otras personas si no es imprescindible."
action:
  title: Crea un proyecto para algo que repites
  steps:
    - "Piensa en un tema al que vuelves a menudo (estudios, un trámite largo, tu trabajo, una afición)."
    - "Crea un proyecto con ese nombre y escribe tres líneas de instrucciones."
    - "Sube un archivo de referencia y abre un chat dentro para probarlo."
    - "Copia tus instrucciones en «Mi kit de Claude»."
  check: He creado un proyecto con instrucciones y al menos un archivo
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

Un **proyecto** es como una carpeta de trabajo dentro de Claude. Reúne tres cosas:

- **Chats.** Todas las conversaciones sobre un mismo tema, juntas.
- **Instrucciones del proyecto.** Un texto fijo que Claude sigue en todos los chats de ese proyecto: tu nivel, tu objetivo, el tono que quieres.
- **Conocimiento del proyecto.** Archivos y textos de referencia (un temario, un contrato, tus apuntes) que Claude usa como contexto en cada chat.

Ojo: un chat del proyecto **no ve lo que dijiste en otro chat** del mismo proyecto. Lo que comparten son las instrucciones, los archivos y, si la tienes activada, la memoria propia del proyecto.

Lo que conviene saber:

- **Está en todos los planes.** En el gratuito puedes crear un número limitado de proyectos.
- **Hay un límite de espacio.** Todo lo que Claude tiene a la vista en un chat cabe en su **ventana de contexto**, su memoria de trabajo. En los planes de pago, Claude amplía automáticamente la capacidad cuando el proyecto tiene mucho material.
- **En equipo se comparte.** En los planes de equipo y empresa puedes compartir un proyecto con compañeros y elegir si pueden **solo verlo y chatear** o también **editarlo**.

## En la práctica

**Cuándo crear uno:** si vas a volver al mismo tema muchas veces o tienes documentos que Claude debe consultar siempre. Para una duda suelta, un chat normal basta.

1. Crea el proyecto desde la sección de proyectos de la aplicación y ponle un nombre claro.
2. Escribe las instrucciones.
3. Sube los archivos clave.
4. Abre chats dentro del proyecto, uno por tarea.

> Prueba (como instrucciones del proyecto): «Estoy preparando la reforma de la cocina de mi piso en Sevilla. Presupuesto máximo: 12.000 €. Usa los presupuestos que he subido para comparar. Contesta en frases cortas, avisa si algo parece caro o falta en un presupuesto, y recuérdame que pida siempre factura con IVA».

## Error frecuente

Meter en un mismo proyecto temas que no tienen nada que ver. Un proyecto por asunto: así las instrucciones encajan.

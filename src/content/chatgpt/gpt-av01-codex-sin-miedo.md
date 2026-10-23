---
title: Codex sin miedo
description: "Qué es Codex, el agente de programación de OpenAI, dónde se usa, qué puede hacer con él alguien que no programa y cómo probarlo sin riesgo."
level: basico
track: gpt-avanzado
order: 801
skills: [gpt-agente, gpt-verificar]
terms: [codex, agente-de-ia]
hook: "Tienes 300 facturas en PDF con nombres como «scan_0042.pdf» y te gustaría ordenarlas por trimestre. No sabes programar. ¿Puede ayudarte Codex o es solo para informáticos?"
takeaway: "Codex es el agente de OpenAI que crea y cambia archivos en una carpeta. Sin programar puedes hacer cosas pequeñas con él si trabajas sobre copias, pides el plan antes y compruebas el resultado."
scenario:
  kind: producto
  label: Caso práctico
  title: La web del horno de Andrés
  body: "Andrés tiene una panadería en Cuenca y quiere una página sencilla con horarios, encargos y cómo llegar. Abre Codex en la app de escritorio de ChatGPT, elige una carpeta nueva y vacía, y le pide la página explicando antes el plan. Revisa el resultado en su navegador, pide dos cambios y, antes de publicarla, se la enseña a su sobrina, que hace webs."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-av01-q1
    q: "Rosa quiere que Codex ordene las facturas de su peluquería. ¿Qué carpeta le da?"
    options: ["Toda su carpeta «Documentos», para que encuentre todas las facturas", "Una carpeta nueva con una copia de las facturas", "El escritorio, que es donde guarda lo que usa a diario"]
    answer: 1
    explain: "Codex puede crear, cambiar y mover archivos dentro de la carpeta que eliges. Con una copia, un error no te cuesta nada. «Documentos» tienta porque está todo, pero también pone en juego archivos que no quieres que toque."
  - type: choice
    id: gpt-av01-q2
    q: "Codex te pide permiso para conectarse a internet e instalar algo cuyo nombre no te dice nada. ¿Qué haces?"
    options: ["Aprobarlo: si lo pide, hará falta", "Preguntarle qué es, para qué lo necesita y si hay otra forma; aprobar solo si lo entiendes", "Cerrar Codex y no volver a usarlo"]
    answer: 1
    explain: "Ese permiso es justo el punto en el que decides tú. Aprobar sin entender tienta por rápido, pero quitas tu única barrera. Huir tampoco hace falta: pedir una explicación sencilla suele bastar."
  - type: truefalse
    id: gpt-av01-q3
    q: "En su modo automático, Codex puede crear y cambiar archivos dentro de la carpeta elegida sin preguntarte cada cambio."
    answer: true
    explain: "Según la documentación de OpenAI, en ese modo trabaja libremente dentro de la carpeta y pide permiso para salir de ella o usar internet. Por eso la carpeta de prueba es tu protección principal."
tips:
  - "Pídele que te explique cada cambio «como a alguien que no programa» y apúntate lo que no entiendas."
  - "No le pegues contraseñas ni claves en el chat ni en los archivos de la carpeta."
  - "Si algo sale mal, borra la copia y empieza de nuevo: para eso es una prueba."
action:
  title: Prepara tu primera prueba con Codex
  steps:
    - "Mira en la página de planes de OpenAI qué parte de Codex incluye el tuyo."
    - "Crea una carpeta llamada «Prueba Codex» y copia dentro unos pocos archivos que no te importe perder."
    - "Si tienes acceso, abre Codex, elige esa carpeta y envía la petición de ejemplo. Si no, guárdala en «Mi kit de ChatGPT» para más adelante."
  check: He preparado una carpeta de prueba y sé cómo probar Codex sin riesgo
practice:
  task: "Tienes en una carpeta una copia de 300 facturas en PDF con nombres sin sentido. Escribe la petición a Codex para renombrarlas y ordenarlas por trimestre, explicando antes su plan."
  require: [contexto, limites]
  extra:
    - label: Pedir el plan antes de tocar nada
      any: [plan, explícame primero, antes de tocar, antes de cambiar, antes de empezar, antes de mover]
      hint: "Pide que te explique en sencillo qué va a hacer antes de tocar nada."
    - label: Trabajar sobre una copia o carpeta de prueba
      any: [copia, carpeta de prueba]
      hint: "Di que trabaje solo en esta carpeta de prueba, sobre una copia, nunca con los originales."
  sample: "No sé programar. En esta carpeta de prueba tengo una copia de unas 300 facturas en PDF con nombres como «scan_0042.pdf». Quiero que las renombres con la fecha y el nombre del proveedor que aparecen en cada factura y las ordenes en carpetas por trimestre. Trabaja solo dentro de esta carpeta y no borres ningún archivo. Antes de tocar nada, explícame tu plan en palabras sencillas y dime qué harás con las facturas que no puedas leer."
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-planes, openai-developers]
---

## La idea

**Codex** es el **agente de programación** de OpenAI. Un agente es una IA que no solo contesta: da varios pasos seguidos para terminar un encargo. Codex lee los archivos de una carpeta, crea o cambia otros y ejecuta órdenes para comprobar si lo que ha hecho funciona.

Dónde se usa hoy:

- En la **app de escritorio de ChatGPT**, eligiendo Codex en lugar del chat normal.
- Según el plan, también en la **web**, en la **terminal** (la ventana donde se escriben órdenes al ordenador) y en los **editores de código**.

Está incluido en los planes de ChatGPT, también en el gratuito, pero **no igual en todos**: en los más básicos el uso es limitado y solo en la app de escritorio, y puede que aún no te haya llegado. Mira la página de planes.

Sin programar puedes hacer **cosas pequeñas**:

- Una **web sencilla** de una página para un negocio o una afición.
- **Renombrar u ordenar archivos**: facturas, fotos, apuntes.
- Limpiar una **hoja de cálculo** que cada mes arreglas a mano.

¿Por qué se revisa? Porque **actúa en tu ordenador**. En su modo automático, Codex trabaja libremente **dentro de la carpeta que eliges** y pide permiso para salir de ella o usar internet. La carpeta es tu límite: que solo tenga **copias**.

## En la práctica

1. Crea una **carpeta nueva** solo con copias.
2. Cuenta lo que quieres como se lo dirías a una persona, y di que no sabes programar.
3. Pide **el plan antes** de que toque nada.
4. Aprueba solo los permisos que entiendas.
5. **Comprueba el resultado** tú: abre la web, cuenta los archivos.

> Prueba: «No sé programar. Quiero una página web sencilla para mi panadería con horarios, cómo hacer encargos y cómo llegar. Trabaja solo en esta carpeta. Antes de empezar, explícame en palabras sencillas qué archivos vas a crear y cómo podré verla en mi navegador.»

## Error frecuente

Publicar en internet lo que ha hecho Codex sin que nadie lo revise. Si la web recoge datos de personas o cobra, pide ayuda a un profesional.

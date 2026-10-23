---
title: Codex para quien no programa
description: "Qué es Codex, el agente de programación de OpenAI, dónde se usa, qué puede hacer con él alguien que no programa y cómo probarlo sin riesgo."
level: basico
track: gpt-avanzado
order: 801
skills: [gpt-agente, gpt-verificar]
terms: [codex, agente-de-ia]
hook: "Tienes 300 facturas en PDF con nombres como «scan_0042.pdf» y te gustaría ordenarlas por trimestre. No sabes programar. ¿Puede ayudarte Codex o es solo para informáticos?"
takeaway: "Codex trabaja directamente con los archivos de una carpeta de tu ordenador. Dale solo copias, pídele que te cuente el plan antes de tocar nada y cuenta y abre tú lo que entrega."
scenario:
  kind: producto
  label: Caso práctico
  title: Los apuntes de Amparo
  body: "Amparo prepara unas oposiciones de auxiliar administrativo en Soria. Tiene 200 archivos de apuntes en Word y PDF con nombres como «tema nuevo (3).docx». Copia todo en una carpeta nueva, abre Codex en la app de escritorio y le pide un índice en una hoja de cálculo, sin mover nada. Al final abre diez archivos al azar y comprueba que el índice acierta el tema."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-av01-q1
    q: "Marisol quiere que Codex ordene las facturas de su tienda de ropa. ¿Qué carpeta le da?"
    options: ["Una carpeta nueva con una copia de las facturas", "Toda su carpeta «Documentos», para que encuentre todas las facturas", "El escritorio, que es donde guarda lo que usa a diario"]
    answer: 0
    explain: "Codex puede crear, cambiar y mover archivos dentro de la carpeta que eliges. Con una copia, un error no te cuesta nada. «Documentos» tienta porque está todo, pero también pone en juego archivos que no quieres que toque."
  - type: choice
    id: gpt-av01-q2
    q: "Codex te dice: «He renombrado y ordenado las 300 facturas». Quieres borrar los originales para no tenerlo todo repetido. ¿Qué haces antes?"
    options: ["Nada más: si Codex dice que ha terminado, está hecho", "Pedirle a Codex que confirme que todo está bien", "Contar las facturas de cada trimestre y abrir unas cuantas al azar para ver que el nombre coincide con lo que dicen"]
    answer: 2
    explain: "Contar y abrir algunas al azar destapa los fallos rápido. Pedirle a Codex que lo confirme tienta porque parece una revisión, pero puede equivocarse igual al revisarse. Y hasta comprobarlo, no borres los originales."
  - type: truefalse
    id: gpt-av01-q3
    q: "En el modo de permisos «Auto», Codex puede crear y cambiar archivos dentro de la carpeta elegida sin preguntarte cada cambio."
    answer: true
    explain: "Según la documentación de OpenAI, en ese modo lee, edita y ejecuta órdenes dentro de la carpeta, y pide permiso para salir de ella o usar internet. Por eso la carpeta con copias es tu protección principal."
tips:
  - "Pídele que te explique cada cambio «como a alguien que no programa» y apúntate lo que no entiendas."
  - "Lo que Codex lee de la carpeta lo procesa OpenAI: no metas contraseñas ni documentos con datos de clientes o de salud."
action:
  title: Prepara tu primera prueba con Codex
  steps:
    - "Crea una carpeta «Prueba Codex» y copia dentro unos pocos archivos que no te importe perder."
    - "Si tu plan lo incluye, abre Codex, elige esa carpeta y envía la petición de ejemplo. Si no, guárdala en «Mi kit de ChatGPT»."
  check: He preparado una carpeta de prueba y sé cómo probar Codex sin riesgo
practice:
  task: "Tienes en una carpeta de prueba una copia de 300 facturas en PDF con nombres sin sentido. Escribe la petición a Codex para renombrarlas y ordenarlas por trimestre, y poder comprobar luego que no falta ninguna."
  require: [contexto, limites]
  extra:
    - label: Proteger los archivos
      any: [no borres, sin borrar, no elimines, no sobrescribas, copia]
      hint: "Di que no borre ni sobrescriba ningún archivo y que trabaje solo sobre la copia."
    - label: Pedir algo para comprobar el resultado
      any: [lista, cuántas, recuento, resumen, comprobar, compruebe]
      hint: "Pide al final una lista con el nombre antiguo y el nuevo de cada factura, y cuántas hay por trimestre."
  sample: "No sé programar. En esta carpeta de prueba tengo una copia de unas 300 facturas en PDF con nombres como «scan_0042.pdf». Renómbralas con la fecha y el proveedor que aparecen en cada una y ordénalas en carpetas por trimestre. Trabaja solo dentro de esta carpeta y no borres ningún archivo. Las que no puedas leer, déjalas en una carpeta aparte llamada «Revisar». Al terminar, dame una lista con el nombre antiguo y el nuevo de cada factura y cuántas hay en cada trimestre."
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-23
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-planes, openai-developers]
---

## La idea

**Codex** es el **agente de programación** de OpenAI. Un agente es una IA que da varios pasos seguidos para terminar un encargo. Codex lee los archivos de una carpeta, crea o cambia otros y ejecuta órdenes para comprobar si funciona.

Dónde se usa hoy:

- En la **app de escritorio de ChatGPT**, eligiendo Codex en lugar del chat normal.
- Según el plan, también en la **web**, la **terminal** (donde se escriben órdenes al ordenador) y los **editores de código**.

Está en los planes de ChatGPT, también en el gratuito, pero **no igual en todos**: en los más básicos, con uso limitado, solo en la app de escritorio y según despliegue. Mira la página de planes.

Sin programar puedes hacer **cosas pequeñas**: una **web sencilla** de una página, **renombrar u ordenar archivos** o limpiar una **hoja de cálculo** que cada mes arreglas a mano.

¿Por qué se revisa? Porque **actúa en tu ordenador**. Al abrir una carpeta te propone un **modo de permisos**: en una carpeta normal puede empezar solo leyendo; en el modo **«Auto»** lee, cambia archivos y ejecuta órdenes **dentro de esa carpeta** sin preguntarte, y pide permiso para salir de ella o usar internet. La carpeta es tu límite: que solo tenga **copias**.

## En la práctica

1. Crea una **carpeta nueva** solo con copias.
2. Cuenta lo que quieres como se lo dirías a una persona, y di que no sabes programar.
3. Pide **el plan antes** de que toque nada.
4. Aprueba solo los permisos que entiendas.
5. **Comprueba el resultado** tú: abre lo que ha creado y cuenta los archivos.

> Prueba: «No sé programar. En esta carpeta hay una copia de mis apuntes: unos 200 archivos Word y PDF con nombres desordenados. Crea una hoja de cálculo con el nombre de cada archivo, el tema del que trata y su fecha. No cambies, muevas ni borres ningún archivo: solo crea la hoja. Antes de empezar, cuéntame tu plan en dos o tres frases.»

## Error frecuente

Aprobar todos los permisos sin leerlos para que deje de preguntar. Si no entiendes lo que pide, pregúntale para qué lo necesita y si hay otra forma.

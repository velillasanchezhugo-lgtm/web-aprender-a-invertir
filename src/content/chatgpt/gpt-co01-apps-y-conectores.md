---
title: Apps en ChatGPT
description: "Cómo conectar ChatGPT con tu correo, tu calendario o tus documentos: qué ve cada app, cuándo te pide permiso y cómo desconectarla."
level: basico
track: gpt-conectar
order: 601
skills: [gpt-apps, gpt-privacidad]
terms: [apps-en-chatgpt, plugin-de-chatgpt, datos-personales]
hook: "Le preguntas a ChatGPT qué facturas te han llegado este mes y te contesta que no puede ver tu correo. ¿Le das acceso? ¿Y qué podrá hacer entonces con él?"
takeaway: "Una app conecta ChatGPT con un servicio tuyo. Ve lo que ve la cuenta que conectas, te pide permiso antes de las acciones importantes y se desconecta en Configuración cuando ya no la necesitas."
scenario:
  kind: producto
  label: Caso práctico
  title: Las facturas de Sergio
  body: "Sergio, fontanero autónomo en Valladolid, conecta su correo y pide las facturas de proveedores del trimestre en una tabla. Cuando Sergio le pide que reenvíe una a su gestora, ChatGPT le enseña el correo y espera su aprobación."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-co01-q1
    q: "Marta conecta su Google Drive del trabajo a ChatGPT. ¿Qué documentos puede consultar ChatGPT?"
    options: ["Solo los que Marta suba al chat", "Los que puede abrir la cuenta que Marta ha conectado", "Todos los de su empresa, aunque Marta no tenga acceso"]
    answer: 1
    explain: "La app usa los permisos de la cuenta conectada, ni más ni menos. Tienta pensar que solo ve lo que subes, pero puede buscar en todo lo que alcanza esa cuenta."
  - type: choice
    id: gpt-co01-q2
    q: "Óscar tiene el correo conectado y le pide a ChatGPT que conteste a un cliente. Con el ajuste de permisos que viene por defecto, ¿qué pasa?"
    options: ["Lo envía directamente, sin avisar", "Le enseña el mensaje y espera su aprobación antes de enviarlo", "No puede: las apps solo sirven para leer"]
    answer: 1
    explain: "Por defecto lee sin preguntar, pero se para antes de enviar, borrar o comprar. Pensar que «solo lee» tienta, pero muchas apps también actúan."
  - type: truefalse
    id: gpt-co01-q3
    q: "Si desconectas una app, ChatGPT borra también las conversaciones en las que la usaste."
    answer: false
    explain: "Desconectar corta el acceso a partir de ese momento, pero no borra tus chats ni tus memorias. Si quieres borrarlos, se hace aparte."
tips:
  - "Revisa cada pocos meses qué apps tienes conectadas y quita las que ya no uses."
  - "Si una app no aparece, puede que no esté en tu plan o en tu país: consulta el centro de ayuda."
action:
  title: Revisa tus apps conectadas
  steps:
    - "En ChatGPT, entra en Configuración y abre la sección de apps."
    - "Desconecta lo que no uses y apunta en «Mi kit de ChatGPT» qué apps tienes y para qué."
  check: He revisado mis apps conectadas y sé cómo desconectar una
practice:
  task: "Has conectado tu Google Drive a ChatGPT y quieres saber cuándo vence tu contrato de alquiler y con cuánto preaviso hay que avisar. Escribe la petición dejando claro qué puede hacer y qué no."
  require: [limites, formato, verificar]
  extra:
    - label: "Decir que solo consulte"
      any: ["solo consulta", "solo mira", "solo lee", "solo leer", "solo consultar", "puedes leer", "puedes consultar", "solo mirar", "solo busca"]
      hint: "Di qué le permites: «Solo consulta, no cambies nada»."
    - label: "Pedir que te pregunte antes de cambiar algo"
      any: ["preguntame", "consultame", "antes de cambiar", "antes de editar", "antes de compartir", "pide permiso", "mi aprobacion", "pideme permiso"]
      hint: "Di qué debe consultarte: «Pregúntame antes de editar o compartir nada»."
  sample: "Con mi Google Drive conectado, busca el contrato de alquiler de mi piso y dime en una lista breve cuándo vence, cuántos días de preaviso hay que dar, y cita la cláusula de donde sale cada dato. Solo consulta: no edites, no muevas y no compartas ningún archivo. Si crees que hace falta algo más, pregúntame antes."
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-23
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, mcp, openai-planes]
---

## La idea

Una **app en ChatGPT** es una conexión con un servicio tuyo (correo, calendario, documentos) que le deja **consultar tus datos y, si lo permites, hacer cosas** en él. Antes se llamaban **conectores**. Desde el 9 de julio de 2026 se añaden desde el **directorio de plugins**: un **plugin** es un paquete que puede traer una o varias apps e instrucciones de trabajo.

Tres reglas:

- **Ve lo que ve tu cuenta.** Al conectar eliges una cuenta y aceptas sus permisos. ChatGPT no llega más allá de lo que esa cuenta puede abrir.
- **Te pide permiso para lo importante.** Por defecto lee sin preguntar, pero se para antes de **enviar**, **crear, cambiar o borrar**, **cambiar quién ve** algo o **pagar**. Puedes hacerlo más estricto o más suelto; lo suelto es más arriesgado.
- **Se desconecta.** En Configuración, en la sección de apps, la eliges y la desconectas. Eso corta el acceso, pero no borra tus chats ni tus memorias.

Hay apps en el plan gratis y en los de pago, pero no todas están en todos los planes ni en todos los países. Por debajo, muchas usan **MCP**, un estándar abierto para conectar asistentes de IA con herramientas; no necesitas saber más para empezar.

## En la práctica

1. Abre el directorio de plugins y busca el servicio que usas.
2. Lee qué puede **leer** y qué puede **hacer**, y conecta la cuenta adecuada.
3. Empieza por preguntas de **solo lectura** y pide que diga de dónde saca cada dato.

> Prueba: «Con mi correo conectado, busca las facturas que me han llegado este mes y ponlas en una tabla con remitente, fecha e importe. Solo consulta: no respondas, no borres y no muevas nada.»

No conectes una cuenta con datos de clientes o de salud si no lo necesitas, y en el trabajo, solo si tu empresa lo permite.

## Error frecuente

Conectarlo todo «por si acaso» y aflojar los permisos para que no pregunte. Así es más fácil que algo salga en tu nombre sin que lo veas.

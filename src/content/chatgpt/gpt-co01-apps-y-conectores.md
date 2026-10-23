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
  body: "Sergio es fontanero autónomo en Valladolid. Conecta su correo a ChatGPT y le pide la lista de facturas de proveedores del trimestre. ChatGPT las busca y se la da en una tabla. Cuando Sergio le pide que reenvíe una a su gestora, ChatGPT le enseña el correo y espera a que lo apruebe."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-co01-q1
    q: "Marta conecta su Google Drive del trabajo a ChatGPT. ¿Qué documentos puede consultar ChatGPT?"
    options: ["Solo los que Marta suba al chat", "Los que puede abrir la cuenta que Marta ha conectado", "Todos los de su empresa, aunque Marta no tenga acceso"]
    answer: 1
    explain: "La app usa los permisos de la cuenta que conectas: ni más ni menos. Tienta pensar que solo ve lo que subes, pero con la app conectada puede buscar en todo lo que alcanza esa cuenta."
  - type: choice
    id: gpt-co01-q2
    q: "Óscar tiene el correo conectado y le pide a ChatGPT que conteste a un cliente. Con el ajuste de permisos que viene por defecto, ¿qué pasa?"
    options: ["Lo envía directamente, sin avisar", "Le enseña el mensaje y espera su aprobación antes de enviarlo", "No puede: las apps solo sirven para leer"]
    answer: 1
    explain: "Por defecto, ChatGPT puede leer sin preguntar, pero se para antes de acciones con efectos fuera del chat, como enviar un correo, borrar un archivo o comprar. Pensar que «solo lee» tienta, pero muchas apps también pueden actuar."
  - type: truefalse
    id: gpt-co01-q3
    q: "Si desconectas una app, ChatGPT borra también las conversaciones en las que la usaste."
    answer: false
    explain: "Desconectar corta el acceso a partir de ese momento, pero no borra tus chats, tus archivos guardados ni tus memorias. Si quieres borrarlos, se hace aparte."
tips:
  - "Al conectar, elige la cuenta que tiene justo lo que necesitas: la personal para lo personal, la del trabajo solo si tu empresa lo permite."
  - "Revisa cada pocos meses qué apps tienes conectadas y quita las que ya no uses."
  - "Si una app no aparece, puede que no esté en tu plan o en tu país: en el Espacio Económico Europeo algunas apps no están disponibles."
action:
  title: Revisa tus apps conectadas
  steps:
    - "En ChatGPT, entra en Configuración y abre la sección de apps."
    - "Mira qué tienes conectado y desconecta lo que no uses."
    - "Si conectas una nueva, empieza con una pregunta de solo lectura y apunta en «Mi kit de ChatGPT» qué apps tienes y para qué."
  check: He revisado mis apps conectadas y sé cómo desconectar una
practice:
  task: "Has conectado tu calendario a ChatGPT y quieres saber qué huecos libres tienes la semana que viene para una cita con el dentista. Escribe la petición dejando claro qué puede hacer y qué no."
  require: [limites, formato]
  extra:
    - label: "Decir que solo consulte"
      any: ["solo consulta", "solo mira", "solo lee", "solo leer", "solo consultar", "puedes leer", "puedes consultar", "solo mirar"]
      hint: "Di qué le permites: «Solo consulta mi calendario»."
    - label: "Pedir que te pregunte antes de cambiar algo"
      any: ["preguntame", "consultame", "antes de crear", "antes de cambiar", "antes de mover", "pide permiso", "mi aprobacion"]
      hint: "Di qué debe consultarte: «Pregúntame antes de crear o mover cualquier cita»."
  sample: "Con mi calendario conectado, mira qué huecos libres de al menos una hora tengo la semana que viene entre las 9:00 y las 14:00. Solo consulta, no crees ni muevas ninguna cita. Dámelos en una lista por día, del lunes al viernes. Si quieres proponerme apuntar la cita del dentista, pregúntame antes y espera mi aprobación."
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, mcp, openai-planes]
---

## La idea

Sin ayuda, ChatGPT solo sabe lo que escribes o subes al chat. Una **app en ChatGPT** es una conexión con un servicio tuyo (correo, calendario, documentos, herramientas de trabajo) que le deja **consultar tus datos y, si lo permites, hacer cosas** en él. Antes se llamaban **conectores**. Desde julio de 2026 se añaden desde el **directorio de plugins**: un **plugin** es un paquete que puede traer una o varias apps e instrucciones de trabajo.

Tres reglas que conviene tener claras:

- **Ve lo que ve tu cuenta.** Al conectar eliges una cuenta y aceptas sus permisos. ChatGPT no llega más allá de lo que esa cuenta puede abrir.
- **Te pide permiso para lo importante.** Por defecto, ChatGPT lee sin preguntar, pero se para antes de **enviar** un mensaje, **crear, cambiar o borrar** archivos, **cambiar quién ve** algo o **pagar**. Puedes hacerlo más estricto («preguntar siempre») o más suelto. Lo suelto es más cómodo y más arriesgado.
- **Se desconecta.** En Configuración, en la sección de apps, eliges la app y la desconectas. Eso corta el acceso, pero no borra tus chats ni tus memorias. También puedes retirar el permiso desde la cuenta del servicio, por ejemplo en tu cuenta de Google.

Hay apps en el plan gratis y en los de pago; algunas piden un plan concreto o **no están en todos los países**, también dentro de la Unión Europea. Por debajo, muchas usan **MCP**, un estándar abierto para conectar asistentes de IA con herramientas; conectar servidores MCP propios es una opción avanzada que no necesitas para empezar.

## En la práctica

1. Abre el directorio de plugins y busca el servicio que usas.
2. Lee qué puede **leer** y qué puede **hacer**.
3. Conecta la cuenta adecuada y revisa los permisos antes de aceptar.
4. Empieza por preguntas de **solo lectura** y pide que diga de dónde saca cada dato.

> Prueba: «Con mi correo conectado, busca las facturas que me han llegado este mes y ponlas en una tabla con remitente, fecha e importe. Solo consulta: no respondas, no borres y no muevas nada.»

No conectes una cuenta con datos de clientes o de salud si no lo necesitas, y en el trabajo, solo si tu empresa lo permite.

## Error frecuente

Conectarlo todo «por si acaso» y aflojar los permisos para que no pregunte. Cuantas más apps y menos confirmaciones, más fácil es que algo salga en tu nombre sin que lo hayas visto.

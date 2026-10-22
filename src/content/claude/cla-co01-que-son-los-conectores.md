---
title: Qué es un conector
description: "Cómo Claude se conecta con tu correo, tu calendario o tus documentos: qué es MCP, qué ve Claude, qué permisos das y cómo desconectarlo."
level: basico
track: cla-conectar
order: 501
skills: [cla-conectores, cla-privacidad]
terms: [conector, mcp]
hook: "Le pides a Claude que te diga qué reuniones tienes el jueves y te contesta que no puede ver tu calendario. ¿Cómo se lo enseñas sin copiar y pegar nada?"
takeaway: Un conector deja a Claude consultar una app tuya y, si lo permites, actuar en ella. Solo ve lo que ve tu cuenta, lo activas en cada chat y lo puedes desconectar cuando quieras.
scenario:
  kind: producto
  label: Caso práctico
  title: El calendario de Marta
  body: "Marta, administrativa en Zaragoza, conecta su calendario a Claude. Le pregunta qué huecos tiene el miércoles y Claude se los lista. Cuando le pide mover una cita, Claude le enseña el cambio y espera su aprobación."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-co01-q1
    q: "Javier conecta su Google Drive a Claude. ¿Qué documentos puede ver Claude?"
    options: ["Todos los documentos de Google Drive del mundo", "Los mismos a los que Javier tiene acceso con su cuenta", "Solo los que Javier haya subido al chat"]
    answer: 1
    explain: "Claude hereda los permisos de tu cuenta: ve lo que tú puedes ver, ni más ni menos. Tienta pensar que solo ve lo subido al chat, pero con el conector puede buscar en todo lo que alcanza tu cuenta."
  - type: choice
    id: cla-co01-q2
    q: "Lucía ya no usa el conector de su gestor de tareas y quiere que Claude deje de tener acceso. ¿Qué hace?"
    options: ["Borrar la última conversación en la que lo usó", "Desconectarlo en los ajustes de conectores y, si el servicio lo permite, retirar el acceso también desde su cuenta del servicio", "Nada: si no lo menciona, Claude no entra"]
    answer: 1
    explain: "Desconectar es lo que corta el acceso. Con Google, además, puedes retirar el permiso desde tu cuenta de Google. Borrar un chat elimina esa conversación, pero el conector sigue conectado."
  - type: truefalse
    id: cla-co01-q3
    q: "Cualquier conector que añadas por tu cuenta, aunque no esté en el directorio, ha sido revisado por Anthropic."
    answer: false
    explain: "Los conectores personalizados se conectan a servicios que Anthropic no ha verificado. Que funcionen con el mismo estándar (MCP) no significa que sean de fiar: conecta solo servicios que conozcas."
tips:
  - "Activa en cada chat solo los conectores que necesites para esa tarea; el resto, apagados."
  - "Revisa cada pocos meses qué tienes conectado y desconecta lo que ya no uses."
action:
  title: Mira el directorio de conectores
  steps:
    - "En Claude, abre la sección de conectores (en los ajustes o desde el menú de herramientas del chat)."
    - "Busca uno que uses a diario, como tu correo o tu calendario, y lee qué puede leer y qué puede hacer."
    - "Si lo conectas, prueba una pregunta de solo lectura y apunta en «Mi kit de Claude» qué tienes conectado."
  check: He revisado qué conectores hay y sé cómo desconectar uno
practice:
  task: "Has conectado a Claude tu app de notas, donde está la lista de tareas de tu mudanza. Escribe la petición para que la ordene por fechas, diciendo qué puede hacer y qué debe consultarte antes."
  require: [limites, verificar]
  extra:
    - label: "Decir qué puede hacer"
      any: ["puedes leer", "puedes consultar", "solo lee", "solo consulta", "solo leer", "solo mirar"]
      hint: "Di qué le permites: «puedes leer las notas…»."
    - label: "Pedir que te consulte antes de cambiar"
      any: ["preguntame", "consultame", "antes de cambiar", "antes de modificar", "pide permiso", "aprobacion"]
      hint: "Di qué debe consultarte antes: «pregúntame antes de cambiar o borrar algo»."
  sample: "Con la app de notas conectada, busca mi lista de tareas de la mudanza. Puedes leerla y consultar las notas relacionadas, pero no cambies ni borres nada. Ordena las tareas por fecha límite en una lista y dime de qué nota sale cada una. Indícame si alguna tarea no tiene fecha. Si quieres marcar algo como hecho o mover una tarea, pregúntame antes y espera mi aprobación."
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [claude-ayuda, mcp]
---

## La idea

Sin ayuda, Claude solo sabe lo que escribes o subes al chat. Un **conector** es una conexión entre Claude y una app tuya (correo, calendario, documentos, gestores de tareas) que le deja **consultar tus datos y, si lo permites, hacer cosas** en ella: crear un borrador, mover una cita, guardar un archivo.

Muchos conectores usan **MCP** (Model Context Protocol), un estándar abierto, es decir, un «enchufe» común para que cualquier asistente de IA se conecte con herramientas de la misma forma.

Tres reglas que conviene tener claras:

- **Claude ve lo que ve tu cuenta.** Hereda tus permisos en ese servicio. Si no puedes abrir una carpeta, Claude tampoco.
- **Tú decides cuándo.** Los conectores se activan o desactivan en cada conversación, y Claude solo consulta datos cuando se lo pides.
- **Las acciones se aprueban.** En los conectores de Google, por ejemplo, enviar un correo, compartir o mover un archivo pide tu aprobación por defecto.

Hay conectores del **directorio** (listos con iniciar sesión) y **personalizados**, que conectan cualquier servicio compatible con MCP pero que Anthropic no ha verificado. El directorio está en el plan gratuito y en los de pago.

Para quitar el acceso, **desconecta** el servicio en los ajustes de conectores. Con Google, además, puedes retirarlo desde tu cuenta de Google.

## En la práctica

1. Entra en la sección de conectores de Claude y elige uno del directorio.
2. Lee su descripción: qué lee y qué puede escribir o cambiar.
3. Inicia sesión en el servicio y acepta los permisos que pide.
4. En el chat, activa ese conector solo cuando lo necesites.
5. Empieza con preguntas de **solo lectura** para ver qué encuentra.

> Prueba: «Con mi calendario conectado, dime qué tengo entre el lunes y el miércoles. Solo consulta, no cambies nada.»

Si algo no cuadra, pídele que diga **de dónde** sale cada dato.

## Error frecuente

Conectarlo todo «por si acaso». Cada conector abierto es más información a la que Claude puede llegar: conecta lo que vayas a usar y desconecta lo que no.

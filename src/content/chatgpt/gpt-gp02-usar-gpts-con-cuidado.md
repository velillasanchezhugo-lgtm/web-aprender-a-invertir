---
title: Usar GPTs con cuidado
description: "Cómo elegir un GPT de la tienda: quién lo ha hecho, qué ve su creador, qué pasa con las acciones externas y qué datos no darle."
level: basico
track: gpt-gpts
order: 302
skills: [gpt-usar-gpts, gpt-privacidad]
terms: [tienda-de-gpts, accion-de-gpt, datos-personales]
hook: "Encuentras en la tienda un GPT que promete «revisar tu contrato de alquiler en un minuto». Te pide que subas el contrato. ¿Lo haces?"
takeaway: "Antes de usar un GPT, mira quién lo ha hecho y si se conecta a servicios externos. Su creador no ve tus chats, pero lo que envía una acción sale de OpenAI: ahí, nada de datos personales."
scenario:
  kind: producto
  label: Caso práctico
  title: El contrato de Óscar
  body: "Óscar va a firmar su primer alquiler en Valencia y encuentra un GPT para revisar contratos. Antes de subir nada, mira quién lo ha creado y ve que usa una acción con una web desconocida. Decide copiar solo las cláusulas, sin nombres ni DNI, en un chat normal, y pedir que le explique qué preguntar al casero."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-gp02-q1
    q: "Un GPT de la tienda te avisa de que va a enviar datos a un servicio externo y te pide permiso. ¿Qué haces?"
    options: ["Aceptar siempre: si está en la tienda, es seguro", "Mirar qué servicio es y qué datos van, y aceptar solo si no hay nada personal o confías en él", "Aceptar y luego borrar el chat para que no quede nada"]
    answer: 1
    explain: "Lo que envía una acción llega a un servicio que OpenAI no controla. Estar en la tienda tienta a fiarse, pero no es una garantía. Borrar el chat después no recupera lo que ya salió."
  - type: truefalse
    id: gpt-gp02-q2
    q: "Quien crea un GPT puede leer las conversaciones que tienes con él."
    answer: false
    explain: "Según el centro de ayuda de OpenAI, los creadores no ven las conversaciones individuales. Otra cosa son las acciones: lo que el GPT manda a un servicio externo sí lo recibe ese servicio."
  - type: choice
    id: gpt-gp02-q3
    q: "Sara busca un GPT para practicar inglés. Encuentra dos parecidos. ¿Cuál es la mejor pista para elegir?"
    options: ["El que tenga el nombre más llamativo", "El de un creador identificable, con descripción clara y sin acciones que no necesita", "El que prometa «hablar inglés en un mes»"]
    answer: 1
    explain: "Un creador que se puede identificar y una descripción concreta dan más confianza. Las promesas exageradas tientan, pero son una señal de alarma, no de calidad."
tips:
  - "Si un GPT te pide iniciar sesión en otra web o datos que no necesita para la tarea, ciérralo."
  - "Tus controles de datos de ChatGPT también se aplican cuando usas un GPT: revísalos en la configuración."
action:
  title: Revisa un GPT antes de usarlo
  steps:
    - "Abre un GPT que uses o que te interese y lee su ficha: creador, descripción y funciones."
    - "Pruébalo con una tarea sin datos personales y fíjate si te pide permiso para conectarse a algo."
    - "Apunta en «Mi kit de ChatGPT» tu regla: «En GPTs de otros, nada de datos personales»."
  check: He revisado la ficha de un GPT y he escrito mi regla
practice:
  task: "Quieres que un GPT te ayude con la carta de reclamación por una factura de la luz mal cobrada. Escribe la petición sin datos que te identifiquen."
  require: [contexto, formato, limites]
  extra:
    - label: Cambiar los datos personales por etiquetas
      any: ["[nombre]", "[dni]", "[direccion]", "[numero", "[importe]", "sin datos", "he quitado", "anonimiz"]
      hint: "Pon etiquetas como [NOMBRE] o [IMPORTE] en lugar de tus datos reales y dilo en la petición."
  sample: "Vivo de alquiler y mi compañía de la luz me ha cobrado dos veces el mismo mes. He quitado mis datos: donde haga falta, pon [NOMBRE], [DIRECCIÓN] y [NÚMERO DE CONTRATO], que los relleno yo. Escribe una carta de reclamación formal y breve, de unas 15 líneas, pidiendo la devolución de [IMPORTE]. No inventes artículos de leyes ni plazos: si no estás seguro de alguno, dímelo."
deeper: null
tool: anonimizador
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-privacidad, aepd]
---

## La idea

La **tienda de GPTs** reúne los GPTs que publican personas y empresas. Que esté ahí **no significa que OpenAI responda** de lo que hace cada uno. Antes de usar uno, mira tres cosas:

1. **Quién lo ha hecho.** La ficha muestra el creador. Mejor si es una persona o empresa identificable.
2. **Qué promete.** Una descripción concreta («redacta actas con este formato») es buena señal. «Te hará rico» o «diagnóstico en un minuto», mala.
3. **Qué funciones usa.** Sobre todo, si tiene **acciones**.

**Qué datos ve cada uno:**

- **El creador** no ve tus conversaciones individuales, según el centro de ayuda de OpenAI.
- **OpenAI** trata tus chats con GPTs según tus **controles de datos**, igual que el resto.
- **Las acciones** son conexiones con servicios externos. Lo que el GPT les envía **sale de OpenAI** y ese servicio decide qué hace con ello. Por eso ChatGPT puede pedirte permiso antes y los GPTs públicos con acciones deben tener política de privacidad.

**Regla práctica:** en GPTs de otros, **ningún dato personal** (DNI, cuentas, salud, contratos con nombres), y menos si usa acciones.

## En la práctica

1. Busca en la tienda y abre la ficha antes de empezar.
2. Si te pide permiso para conectarse a un servicio, **lee qué servicio es y qué envía**. Puedes decir que no.
3. Quita o cambia los datos que identifiquen a alguien antes de pegarlos.
4. Para algo delicado, usa un chat normal con tus controles de datos revisados.

> Prueba: «He quitado los nombres y el DNI del contrato. Te paso solo las cláusulas de fianza y duración. Explícame en una lista sencilla qué significan y qué cinco preguntas debería hacerle al casero antes de firmar. Si algo depende de la ley, dime que lo compruebe».

Recuerda que ni ChatGPT ni un GPT sustituyen a un abogado o a la oficina de consumo.

## Error frecuente

Subir un documento con todos tus datos porque el GPT «es de la tienda». OpenAI no controla qué hace cada servicio externo con lo que recibe.

---
title: Usar GPTs con cuidado
description: "Cómo elegir un GPT o un plugin: quién lo ha hecho, qué ve su creador, qué pasa con los servicios externos y qué datos no darle."
level: basico
track: gpt-gpts
order: 302
skills: [gpt-usar-gpts, gpt-privacidad]
terms: [tienda-de-gpts, accion-de-gpt, plugin-de-chatgpt, datos-personales]
hook: "Encuentras en la tienda un GPT que promete «calcular tu indemnización por despido en un minuto». Te pide que subas la carta de despido y tu nómina. ¿Lo haces?"
takeaway: "Antes de usar un GPT o un plugin, mira quién lo ha hecho y si se conecta a servicios externos. Su creador no ve tus chats, pero lo que se envía a otro servicio sale de OpenAI: ahí, nada de datos personales."
scenario:
  kind: producto
  label: Caso práctico
  title: La carta de Gorka
  body: "A Gorka le han despedido de un almacén en Vitoria y encuentra un GPT que promete calcular la indemnización. Antes de subir nada, mira quién lo ha creado y ve que usa una acción con una web desconocida. Copia solo los párrafos de la carta, sin nombres ni DNI, en un chat normal, y pide que le explique qué preguntar en el sindicato."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-gp02-q1
    q: "Un GPT de la tienda te avisa de que va a enviar datos a un servicio externo y te pide permiso. ¿Qué haces?"
    options: ["Aceptar siempre: si está en la tienda, es seguro", "Mirar qué servicio es y qué datos van, y aceptar solo si no hay nada personal o confías en él", "Aceptar y luego borrar el chat para que no quede nada"]
    answer: 1
    explain: "Lo que envía una acción llega a un servicio que OpenAI no controla. Estar en la tienda tienta a fiarse, pero no es una garantía, y borrar el chat no recupera lo que ya salió."
  - type: truefalse
    id: gpt-gp02-q2
    q: "Quien crea un GPT puede leer las conversaciones que tienes con él."
    answer: false
    explain: "Según el centro de ayuda de OpenAI, los creadores no ven tus conversaciones. Tienta pensar que sí, pero el riesgo está en otro sitio: lo que una acción manda a un servicio externo sí lo recibe ese servicio."
  - type: choice
    id: gpt-gp02-q3
    q: "Sara busca un GPT para practicar inglés. Encuentra dos parecidos. ¿Cuál es la mejor pista para elegir?"
    options: ["El que tenga el nombre más llamativo", "El que prometa «hablar inglés en un mes»", "El de un creador identificable, con descripción clara y sin acciones que no necesita"]
    answer: 2
    explain: "Un creador que se puede identificar y una descripción concreta dan más confianza. Las promesas exageradas tientan, pero son una señal de alarma."
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
  task: "Quieres usar un GPT de viajes para preparar unos días en Roma con tu familia, sin darle nombres, pasaportes ni datos de pago. Escribe la petición."
  require: [contexto, formato, limites]
  extra:
    - label: Cambiar los datos personales por etiquetas
      any: ["[nombre]", "[dni]", "[direccion]", "[numero", "[importe]", "[reserva]", "sin datos", "he quitado", "no te voy a dar", "anonimiz"]
      hint: "Pon etiquetas como [NOMBRE] o [RESERVA] en lugar de tus datos reales y dilo en la petición."
  sample: "Preparo un viaje de cuatro días a Roma en abril con mi pareja y nuestros hijos de 7 y 10 años. No te voy a dar nombres, pasaportes ni datos de pago: si algo los necesita, pon [NOMBRE] o [RESERVA] y lo relleno yo. Hazme un plan por días en una tabla, con una visita principal por la mañana y planes tranquilos por la tarde. No reserves nada ni me pidas iniciar sesión en ninguna web."
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

1. **Quién lo ha hecho.** Mejor si es una persona o empresa identificable.
2. **Qué promete.** Una descripción concreta («redacta actas con este formato») es buena señal. «Te hará rico» o «diagnóstico en un minuto», mala.
3. **Qué funciones usa.** Sobre todo, si tiene **acciones**.

**Qué datos ve cada uno:**

- **El creador** no ve tus conversaciones individuales, según el centro de ayuda de OpenAI.
- **Las acciones** son conexiones con servicios externos. Lo que el GPT les envía **sale de OpenAI** y ese servicio decide qué hace con ello. Por eso ChatGPT puede pedirte permiso antes.

**Regla práctica:** en GPTs de otros, **ningún dato personal** (DNI, cuentas, salud, contratos con nombres), y menos si usa acciones.

**Con los plugins, lo mismo.** Los que OpenAI propone como relevo también pueden conectarse a otros servicios, con sus propias condiciones y privacidad. Mira quién lo publica y qué conecta antes de instalarlo.

## En la práctica

1. Busca en la tienda y abre la ficha antes de empezar.
2. Si te pide permiso para conectarse a un servicio, **lee qué servicio es y qué envía**. Puedes decir que no.
3. Quita o cambia los datos que identifiquen a alguien antes de pegarlos.
4. Para algo delicado, mejor un chat normal.

> Prueba: «He quitado mi nombre, el de la empresa y mi DNI. Te paso solo los párrafos de mi carta de despido. Explícame en una lista sencilla qué dicen y qué cinco preguntas debería llevar al sindicato o a un abogado laboralista. No calcules cifras: solo ayúdame a entenderla».

## Error frecuente

Subir un documento con todos tus datos porque el GPT «es de la tienda».

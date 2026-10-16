---
title: Detecta un fraude antes de que te detecte a ti
description: Las cinco señales que comparten casi todas las estafas financieras, con un caso real y la cuenta que lo delata.
level: cero
track: camino-cero
order: 13
skills: [detectar-fraude]
goals: [miedo]
prereqs: [12-comprueba-un-broker]
hook: "Te escriben por WhatsApp ofreciendo un 2 % al mes «garantizado» con criptomonedas. ¿Qué haces?"
takeaway: Rentabilidad alta y garantizada, prisa y contacto no solicitado son señales de alarma. Antes de pagar, compruébalo.
questions:
  - type: estimate
    id: s13-q1
    q: "Un 2 % mensual «garantizado», reinvertido, ¿qué rentabilidad anual supone, aproximadamente?"
    answer: 26.8
    tolerance: 1.5
    min: 0
    max: 60
    step: 0.1
    unit: "%"
    explain: "1,02^12 − 1 ≈ 26,8 % al año, «garantizado». Ningún producto serio promete algo así sin riesgo: es una señal clara de fraude."
  - type: truefalse
    id: s13-q2
    q: "Una rentabilidad muy alta y muy estable, sin meses malos, es una buena señal."
    answer: false
    explain: "El fraude de Madoff se apoyaba precisamente en rentabilidades demasiado regulares. La regularidad excesiva es una señal de alarma."
  - type: choice
    id: s13-q3
    q: "¿Cuál de estas peticiones es típica de una estafa?"
    options: ["Que te pidan instalar una aplicación de control remoto «para ayudarte»", "Que te entreguen el KID del producto", "Que te pregunten por tu experiencia inversora"]
    answer: 0
    explain: "Las aplicaciones de control remoto permiten vaciar tu cuenta. Las entidades autorizadas deben informarte y preguntarte por tu experiencia, no controlar tu dispositivo."
action:
  title: Protégete (y protege a los tuyos)
  steps:
    - "Guarda el teléfono de atención al inversor de la CNMV: 900 535 015."
    - "Comparte las cinco señales con alguien de tu familia que pueda recibir este tipo de mensajes."
  check: He guardado el teléfono de la CNMV y he compartido las señales
deeper: investigar-broker-y-fraudes
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: España
sources: [cnmv-chiringuitos, cnmv-entidades, sec-oig-madoff, an-forum-afinsa]
---

## La idea

Las cinco señales:

1. **Contacto no solicitado**: llamadas, redes sociales, mensajería.
2. **Rentabilidad alta y «garantizada»** o «sin riesgo».
3. **Prisa**: «la oferta acaba hoy».
4. **Pagos extraños**: a cuentas personales, en criptoactivos o a otro país.
5. **No aparece en ningún registro oficial**, o los datos no coinciden (la CNMV advierte de «clones» de entidades reales).

Si dudas, consulta a la CNMV **antes** de enviar dinero. Recuperarlo después es muy difícil.

## Con números

**Madoff** prometía rentabilidades estables, casi sin meses negativos, durante años. Era un esquema piramidal: pagaba a los antiguos con el dinero de los nuevos. Se derrumbó en 2008; el administrador concursal ha recuperado unos 15.494 millones de dólares (a septiembre de 2026), pero muchos inversores perdieron años de ahorro.

En España, **Fórum Filatélico y Afinsa** ofrecían rentabilidades fijas con sellos y no estaban supervisadas como entidades financieras. Cuando se intervinieron en 2006, sus clientes no tenían fondo de garantía al que acudir.

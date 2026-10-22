---
title: Que te pregunte primero
description: "Pide a Claude que te haga preguntas antes de responder, que diga cuándo no sabe algo y que critique tu idea en vez de darte la razón."
level: basico
track: cla-pedir
order: 106
skills: [cla-iterar, cla-peticion]
terms: [prompt, contexto-de-la-peticion, alucinacion]
hook: "Le cuentas a Claude tu idea de dejar el trabajo para montar una cafetería y te contesta que es una idea estupenda. ¿Te está ayudando de verdad?"
takeaway: "Tres frases cambian la conversación: «hazme preguntas antes de responder», «dime si no estás seguro» y «critica mi idea». Así sacas lo que falta, ves la duda y evitas que solo te dé la razón."
scenario:
  kind: operacion
  label: Caso práctico
  title: La cafetería de Mireia
  body: "Mireia escribe: «Quiero dejar mi trabajo y abrir una cafetería en mi pueblo, ¿qué te parece?». Claude le da ánimos y una lista de pasos. Ella añade: «Antes de opinar, hazme las preguntas que necesites. Luego dime los tres motivos más probables por los que podría salir mal». Las preguntas sobre ahorros, clientes y competencia le hacen ver lo que aún no ha pensado."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-pe06-q1
    q: "Rubén quiere que Claude le ayude a preparar su primera entrevista de trabajo, pero no sabe qué contarle. ¿Qué hace?"
    options: ["Pide directamente «prepárame para la entrevista»", "Pide «antes de ayudarme, hazme hasta cinco preguntas sobre el puesto y sobre mí»", "Espera a tener todos los datos antes de abrir Claude"]
    answer: 1
    explain: "Si no sabes qué contexto dar, deja que Claude te lo pregunte: sale lo que importa para ese puesto. Pedirlo directamente tienta, pero Claude rellenará los huecos con consejos genéricos."
  - type: truefalse
    id: cla-pe06-q2
    q: "Si le pides que diga cuándo no está seguro, Claude ya no se equivocará nunca."
    answer: false
    explain: "Ayuda a que marque las dudas, pero puede seguir dando datos falsos con seguridad (lo que se llama alucinación). Las cifras, fechas y citas importantes compruébalas siempre."
  - type: choice
    id: cla-pe06-q3
    q: "¿Qué petición te protege mejor de que Claude solo te dé la razón?"
    options: ["«¿Verdad que es buena idea?»", "«Hazme de abogado del diablo: dame los argumentos más fuertes en contra y lo que yo podría estar pasando por alto»", "«Dime si te gusta»"]
    answer: 1
    explain: "Preguntar «¿verdad que…?» invita a darte la razón. Pedir expresamente argumentos en contra le da permiso para llevarte la contraria y te deja decidir con más información."
tips:
  - "Pide que separe «lo que sé seguro» de «lo que supongo»: verás dónde comprobar."
  - "Responde a sus preguntas aunque sea con «no lo sé»: también es información útil."
  - "La crítica de Claude es un punto de vista más, no un veredicto. Para decisiones grandes, habla también con personas que conozcan el tema."
action:
  title: Añade tus tres frases
  steps:
    - "Copia en tu nota «Mi kit de Claude» las tres frases de esta sesión."
    - "Úsalas hoy con una decisión o idea que tengas pendiente, por pequeña que sea."
    - "Responde a sus preguntas y lee la crítica antes de decidir."
  check: He pedido a Claude que me pregunte primero y que critique mi idea
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [claude-ayuda, anthropic-constitucion, claude-docs]
---

## La idea

Normalmente le das información a Claude y responde. Pero puedes cambiar las reglas de la conversación con tres peticiones:

**1. «Hazme preguntas antes de responder.»** Si no sabes qué contexto dar, deja que Claude te lo pregunte. Sale lo que de verdad necesita para tu caso y te ahorras respuestas genéricas. Pon un límite («hasta cinco preguntas») para no eternizarlo.

**2. «Dime si no estás seguro.»** Claude puede dar datos falsos con tono seguro. A esto se le llama **alucinación**. Pedirle que marque lo que no sabe o supone te ayuda a ver dónde comprobar. No lo elimina: lo reduce y lo hace visible.

**3. «Critica mi idea.»** Los asistentes de IA tienden a ser amables y a seguirte la corriente, sobre todo si preguntas «¿verdad que…?». Anthropic dice que busca que Claude sea honesto aunque no sea lo que quieres oír, pero ayuda pedirlo de forma expresa. Pide los argumentos en contra, los riesgos o lo que se te escapa.

Estas tres frases sirven para casi todo: decisiones, planes, textos, ideas de negocio, compras grandes.

## En la práctica

Ponlas al principio de la petición, antes de contar tu idea:

> Prueba: «Antes de responder, hazme hasta cinco preguntas que necesites para entender mi situación. Cuando tengas mis respuestas, dime los tres motivos más probables por los que mi plan podría salir mal. Si algo de lo que digas es una suposición o no estás seguro, márcalo. Mi plan es: […]»

Después, contesta a sus preguntas en un solo mensaje. Si la crítica te parece injusta, discútela: «¿Por qué crees que eso es un riesgo en mi caso?».

Para temas de salud, derecho o dinero, usa esto para preparar las preguntas que harás a un profesional, no para sustituirlo.

## Error frecuente

Preguntar «¿te parece buena idea?» y tomarse el «sí» como validación. Una respuesta amable no es una opinión contrastada.

---
title: Las normas de uso
description: Qué prohíben las políticas de uso de OpenAI, por qué ChatGPT a veces se niega y cómo reformular una petición legítima sin buscar trucos.
level: basico
track: gpt-seguro
order: 705
skills: [gpt-etica-normas]
terms: [politicas-de-uso-de-openai, deepfake]
hook: "Escribes una novela negra y le preguntas a ChatGPT cómo envenenar a alguien sin dejar rastro. Se niega. ¿Te has topado con una censura absurda o hay otra forma de pedirlo?"
takeaway: Al usar ChatGPT aceptas las políticas de uso de OpenAI. Si se niega a algo legítimo, explica para qué lo quieres y pide lo que de verdad necesitas; si choca con una norma, no busques trucos.
scenario:
  kind: producto
  label: Caso práctico
  title: La novela de Marta
  body: "Marta escribe una novela negra y pide «cómo envenenar a alguien sin dejar rastro». ChatGPT se niega. Marta lo piensa: no necesita una receta, sino que la trama sea creíble. Reformula: «Escribo una novela negra. Sin detalles técnicos reales, ayúdame con la escena en que la forense sospecha que no fue una muerte natural: qué pistas ve y qué pruebas pide». Obtiene una escena mejor que la que buscaba."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-se05-q1
    q: "Trabajas en un estanco y quieres enseñar a tu compañero a detectar billetes falsos. Pides «cómo se fabrica un billete falso» y ChatGPT se niega. ¿Qué haces?"
    options: ["Le digo que es para una novela, aunque no lo sea", "Explico mi situación y pido las señales para reconocer un billete falso y qué hacer si nos llega uno", "Lo intento en varios chats hasta que salga"]
    answer: 1
    explain: "Lo que necesitas es reconocerlos, no fabricarlos, y eso ChatGPT lo explica sin problema. Inventar una excusa tienta porque a veces funciona, pero intentar engañar a la herramienta para saltarse sus protecciones va contra las normas."
  - type: truefalse
    id: gpt-se05-q2
    q: "Si ChatGPT se niega a algo, siempre es porque has pedido algo prohibido."
    answer: false
    explain: "A veces una petición inocente se parece a algo dañino y se pasa de prudente. Tienta pensar que has hecho algo mal, pero muchas veces basta con dar contexto. Si aun así se niega, probablemente choca con una norma."
  - type: choice
    id: gpt-se05-q3
    q: "Una gestoría quiere poner en su web un asistente con ChatGPT que diga a cada cliente cuánto pagará de IRPF y qué deducciones aplicarse, sin que lo revise nadie. ¿Qué choca con las normas de OpenAI?"
    options: ["Nada: es información pública", "Dar asesoramiento a medida que requiere un profesional sin que intervenga ninguno", "Usar ChatGPT para temas de impuestos"]
    answer: 1
    explain: "Las políticas piden que un profesional cualificado intervenga cuando se da asesoramiento a medida que lo requiere. Que sea información pública tienta, pero aplicarla al caso de cada cliente es asesorar. Explicar cómo funciona el IRPF en general sí está bien."
tips:
  - "Si te niega algo legítimo, dale contexto en el mismo chat: quién eres, para qué y qué no necesitas."
  - "Pide la versión segura: datos inventados, señales para reconocer algo en lugar de instrucciones para hacerlo."
  - "Si crees que la negativa es un error, puedes valorar la respuesta en ChatGPT para que OpenAI lo revise."
action:
  title: Reformula una negativa
  steps:
    - "Piensa en algo legítimo que te dé reparo pedir (una escena dura de una novela, cómo reconocer una estafa, un tema de salud)."
    - "Escribe la petición con tu propósito y lo que no necesitas, por ejemplo «sin instrucciones reales»."
    - "Guarda en «Mi kit de ChatGPT» la frase de contexto que mejor te funcione."
  check: He escrito una petición delicada explicando el propósito y lo que no necesito
practice:
  task: "Trabajas en un estanco y quieres que tu nuevo compañero reconozca billetes falsos. Pediste «cómo se hace un billete falso» y ChatGPT se negó. Escribe una petición legítima."
  require: [contexto, publico, limites]
  extra:
    - label: Pedir la versión segura
      any: [reconocer, detectar, distinguir, señales, senales, que hacer si]
      hint: "Pide lo que de verdad necesitas: cómo reconocerlo y qué hacer, no cómo fabricarlo."
  sample: "Trabajo en un estanco en Sevilla y la semana que viene empieza un compañero nuevo. Prepara una guía breve para él, para que sepa reconocer un billete de euro falso en el mostrador: las señales que se comprueban al tacto, a contraluz y al inclinarlo, en una lista de cinco puntos. Añade qué hacer si nos llega uno. No necesito saber cómo se fabrican, solo cómo detectarlos."
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-uso, openai-model-spec]
---

## La idea

OpenAI tiene unas **políticas de uso**: las reglas sobre lo que no se puede hacer con ChatGPT. Las aceptas al usarlo y, si se incumplen, OpenAI puede limitar o cerrar la cuenta. En sencillo, giran en torno a tres ideas:

- **Proteger a las personas.** Nada de amenazas, acoso, violencia, armas, autolesiones, contenido sexual con menores, fraudes ni estafas. Tampoco dar a otros **asesoramiento a medida** que requiere un profesional (legal, médico, financiero) sin que intervenga uno.
- **Respetar la privacidad.** No vigilar a nadie, no recopilar datos de personas sin permiso y no usar la cara o la voz de alguien sin su consentimiento de forma que parezca real (un **deepfake**).
- **No engañar ni saltarse las protecciones.** Ni desinformación, ni hacerse pasar por otra persona, ni trucos para que ChatGPT ignore sus reglas.

Además, OpenAI publica un documento que describe cómo deben comportarse sus modelos: ayudar todo lo posible sin causar daño.

**¿Por qué a veces dice que no?** Porque tu petición se parece a algo dañino. Lo que suena a «receta» para hacer daño se frena, aunque tu intención sea buena. Otras veces se pasa de prudente con algo inocente.

Fíjate: casi siempre lo que necesitas no es la receta, sino **entender, reconocer o contar** algo. Y eso suele poder pedirse.

## En la práctica

Si se niega y tu petición es legítima:

1. **Di quién eres y para qué**: «Trabajo en un estanco», «escribo una novela».
2. **Pide lo que necesitas de verdad** y aclara lo que no: «sin instrucciones reales», «solo las señales para reconocerlo».
3. **Acepta la versión segura**: ejemplos inventados, un caso marcado como falso.

> Prueba: «Doy una charla a padres sobre el acoso por redes. No necesito saber cómo se hace: explícame las señales para detectar que un hijo lo sufre y qué pasos dar, en una lista sencilla.»

Si con contexto sigue sin poder ayudarte, probablemente choca con una norma: acéptalo y busca otro camino (un profesional, una fuente oficial).

## Error frecuente

Inventarse una excusa («es para una novela») cuando no lo es, o probar trucos hasta que salga. Es saltarse las normas, y la cuenta es tuya.

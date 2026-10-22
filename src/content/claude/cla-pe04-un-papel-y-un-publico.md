---
title: Un papel y un público
description: "Darle a Claude un papel («actúa como revisor») y un público («para un niño de 10 años»): por qué cambia la respuesta y hasta dónde llega."
level: basico
track: cla-pedir
order: 104
skills: [cla-peticion]
terms: [prompt, contexto-de-la-peticion]
hook: "Le pides a Claude que te explique la factura de la luz y te responde como un manual técnico. ¿Cómo haces que te lo cuente como lo haría un vecino que sabe del tema?"
takeaway: Un papel le dice a Claude desde dónde mirar; un público, a quién hablar. Mejoran mucho la respuesta, pero no le dan conocimientos ni títulos que no tiene.
scenario:
  kind: operacion
  label: Caso práctico
  title: El currículum de Samuel
  body: "Samuel pide «revisa mi currículum» y recibe elogios y dos retoques. Lo repite así: «Actúa como una persona de selección que recibe 200 currículums para un puesto de administrativo. Dime en qué tres puntos dejarías de leer el mío y por qué». Esta vez recibe críticas concretas que puede corregir."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-pe04-q1
    q: "Alba quiere que su hijo de 10 años entienda qué es la inflación. ¿Qué petición funciona mejor?"
    options: ["«Explica la inflación»", "«Explica la inflación para un niño de 10 años, con un ejemplo de chucherías y sin palabras técnicas, en cinco frases»", "«Actúa como el mejor economista del mundo y explica la inflación»"]
    answer: 1
    explain: "Lo que cambia la respuesta aquí es el público: edad, ejemplo cercano y longitud. «El mejor economista del mundo» suena potente, pero no le dice a quién hablar y puede salir una explicación más difícil."
  - type: truefalse
    id: cla-pe04-q2
    q: "Si le dices a Claude «actúa como mi médico», sus respuestas sobre tu salud son tan fiables como las de un médico."
    answer: false
    explain: "El papel cambia el enfoque y el tono, no da formación ni conoce tu historial. Para salud, derecho o dinero, Claude puede ayudarte a preparar preguntas, pero la decisión se toma con un profesional."
  - type: choice
    id: cla-pe04-q3
    q: "Raúl ha escrito una propuesta para su jefe y quiere detectar puntos débiles antes de enviarla. ¿Qué papel le pide a Claude?"
    options: ["Un revisor exigente que busque los fallos y las objeciones que pondría su jefe", "Un amigo que le diga que está muy bien", "Ninguno: que la corrija sin más"]
    answer: 0
    explain: "Un papel crítico y concreto saca objeciones reales. Pedir ánimo tienta porque sienta bien, pero no te prepara para la reunión."
tips:
  - "Combina los dos: «Como profesor de autoescuela, explícaselo a alguien que nunca ha conducido»."
  - "Cuanto más concreto el papel, mejor: «revisor de un tribunal de oposiciones» dice más que «experto»."
action:
  title: Pide una crítica con papel
  steps:
    - "Elige un texto tuyo: un correo importante, tu currículum o una propuesta."
    - "Pide a Claude que lo lea con un papel crítico y un público concreto, como en la petición de esta sesión."
    - "Apunta las dos críticas que te parezcan más útiles y decide tú si las aplicas."
  check: He pedido a Claude una crítica con un papel y un público concretos
practice:
  task: "Vas a presentar en la reunión del AMPA un plan de huerto escolar y quieres prever las objeciones. Escribe la petición dándole a Claude un papel concreto y diciendo a qué público te diriges."
  require: [publico, contexto]
  extra:
    - label: "Darle un papel"
      any: ["actua como", "haz de", "haz el papel", "ponte en el lugar", "como si fueras", "en el papel de", "eres un", "eres una"]
      hint: "Dale un papel concreto al principio: «Actúa como la directora de un colegio con poco presupuesto…»."
  sample: "Actúa como la directora de un colegio público con poco presupuesto y poco tiempo. Soy madre de dos alumnas y el jueves voy a presentar en la reunión del AMPA un plan de huerto escolar para primaria. Te pego el plan abajo. Dime las cinco objeciones más probables de la dirección y de las familias, de la más fuerte a la más débil, y cómo responder a cada una en una frase. Es para preparar una intervención de cinco minutos ante unas 30 familias."
deeper: null
tool: constructor-de-peticiones
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [claude-docs, claude-ayuda]
---

## La idea

Dos piezas cambian mucho una respuesta:

- **El papel**: desde dónde mira Claude. «Actúa como revisor de textos», «como entrevistador de trabajo», «como profesor de matemáticas de 2.º de la ESO». El papel decide qué se fija, qué critica y qué vocabulario usa.
- **El público**: a quién habla. «Para un niño de 10 años», «para mi abuela, que no usa internet», «para un comité de dirección con prisa». El público decide el nivel, los ejemplos y la longitud.

**Por qué ayuda:** con un papel y un público, Claude no tiene que adivinar el punto de vista. Un «revisor exigente» busca fallos; un «amigo» anima.

**Sus límites, que importan:**

- El papel **no da conocimientos** que Claude no tenga ni lo convierte en profesional. «Actúa como abogado» no sustituye a un abogado: puede equivocarse igual y no conoce tu caso entero.
- Un papel exagerado («el mejor experto del mundo») no hace la respuesta más exacta. Lo útil es que sea **concreto**.
- Para salud, derecho o dinero, úsalo para entender y preparar preguntas, no para decidir.

## En la práctica

Pon el papel al principio y el público donde digas la tarea.

> Prueba: «Actúa como una persona de selección que ha leído cientos de currículums para puestos de administración. Lee el mío (te lo pego abajo) y dime los tres puntos en los que dejarías de leer y por qué. Sé directa: prefiero críticas útiles a elogios.»

Para explicar algo, cambia el foco al público:

> Prueba: «Explícame mi factura de la luz como si fuera la primera vez que veo una. Usa un ejemplo con números redondos y dime qué tres líneas debo mirar cada mes.»

## Error frecuente

Creer que «actúa como experto» basta para fiarse de la respuesta. El papel mejora el enfoque, no la exactitud: comprueba los datos importantes.

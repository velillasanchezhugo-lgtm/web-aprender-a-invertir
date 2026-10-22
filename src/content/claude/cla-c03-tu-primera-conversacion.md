---
title: Tu primera petición útil
description: Las cuatro piezas de una buena petición a Claude (quién eres, qué necesitas, para qué y cómo lo quieres) con un ejemplo pobre y uno bueno.
level: cero
track: cla-cero
order: 3
skills: [cla-peticion]
terms: [prompt, modelo-de-lenguaje]
hook: "Le pides a Claude «un correo para mi casero» y te devuelve algo correcto pero que no sirve. ¿Qué le faltaba?"
takeaway: Claude no sabe nada de ti ni de tu situación. Si le dices quién eres, qué necesitas, para qué o para quién es y cómo lo quieres, la primera respuesta ya se parece a lo que buscas.
scenario:
  kind: operacion
  label: Caso práctico
  title: La caldera de Lucía
  body: "Lucía vive de alquiler en Valencia. La caldera lleva cinco días sin funcionar y el casero no contesta al teléfono. Primero escribe «hazme un correo para mi casero» y recibe un texto genérico. Después le da los detalles, el tono que quiere y la extensión, y obtiene un correo que envía casi sin cambios."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-c03-q1
    q: "Lucía ha escrito «hazme un correo para mi casero» y el resultado es genérico. ¿Qué es lo más útil que puede hacer?"
    options: ["Repetir la misma petición hasta que salga mejor", "Contarle el problema, desde cuándo, qué quiere conseguir y en qué tono lo quiere", "Pedirle que lo haga «mucho mejor»"]
    answer: 1
    explain: "Claude solo puede usar lo que tú le cuentas. Con los detalles, el objetivo y el tono, el correo pasa de genérico a útil. Repetir tienta porque a veces sale algo distinto, pero sin información nueva no puede acertar con tu caso."
  - type: choice
    id: cla-c03-q2
    q: "¿Cuál de estas peticiones dará un resultado más útil?"
    options: ["«Explícame la declaración de la renta»", "«Soy estudiante, trabajé este verano por primera vez y nunca he hecho la renta. Explícame en cinco pasos sencillos qué tengo que mirar para saber si debo presentarla»", "«Renta, ¿qué hago?»"]
    answer: 1
    explain: "La buena dice quién eres, qué necesitas y en qué formato. La primera tienta por directa, pero obliga a Claude a adivinar tu nivel y tu situación, y te dará un texto largo y general."
  - type: truefalse
    id: cla-c03-q3
    q: "Para que Claude te entienda, hay que escribir con palabras técnicas o en un lenguaje especial."
    answer: false
    explain: "Basta con escribir como se lo explicarías a una persona que no te conoce. Tienta pensar que hay «fórmulas mágicas», pero lo que más mejora la respuesta es el contexto, no las palabras raras."
tips:
  - "Si no sabes qué contarle, termina tu petición con «Pregúntame lo que necesites saber antes de escribirlo»."
  - "No pongas datos que no hacen falta: el nombre de la calle o tu DNI no mejoran un correo al casero."
action:
  title: Haz tu primera petición completa
  steps:
    - "Piensa en algo real que tengas que escribir esta semana: un correo, un mensaje o una reclamación."
    - "Escríbele a Claude las cuatro piezas: quién eres, qué necesitas, para qué o para quién es y cómo lo quieres."
    - "Si el resultado te sirve, copia tu petición en una nota: será la primera de «Mi kit de Claude»."
  check: He hecho una petición con las cuatro piezas y la he guardado
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [claude-docs, claude-ayuda]
---

## La idea

Lo que le escribes a Claude se llama **petición** (en inglés, *prompt*). Claude es un **modelo de lenguaje**: responde a partir de lo que le das. **No te conoce**, no sabe tu situación ni para quién es el texto. Si no se lo dices, lo rellena con lo más general.

Una petición útil tiene **cuatro piezas**:

1. **Quién eres.** «Soy inquilina», «soy estudiante de 2.º de Bachillerato», «tengo una peluquería».
2. **Qué necesitas.** La tarea concreta: un correo, un resumen, una lista, una explicación.
3. **Para qué o para quién.** «Para mi casero, que no contesta», «para mi jefa», «para entenderlo yo».
4. **Cómo lo quieres.** Tono, extensión y formato: «educado pero firme», «máximo diez líneas», «en una lista».

No hace falta escribir mucho. Hace falta **lo que Claude no puede adivinar**.

**Ejemplo pobre:**

«Hazme un correo para mi casero».

Saldrá un texto correcto y vacío, que tendrás que reescribir casi entero.

**Ejemplo bueno:**

«Vivo de alquiler. La caldera lleva cinco días sin funcionar y mi casero no contesta al teléfono. Escríbele un correo educado pero firme pidiéndole que envíe a un técnico esta semana. Máximo diez líneas».

Aquí Claude ya sabe el problema, el objetivo, el destinatario y la forma.

## En la práctica

Antes de enviar, repasa tu mensaje con las cuatro piezas. Si falta alguna, añádela en una frase.

> Prueba: «Soy [quién eres]. Necesito [qué]. Es para [quién o para qué]. Lo quiero [tono, extensión, formato]. Si te falta algún dato, pregúntamelo antes de escribir».

Un ejemplo relleno:

> Prueba: «Soy auxiliar administrativo y empiezo en un trabajo nuevo el lunes. Necesito un mensaje corto para presentarme al equipo por correo. Que suene cercano y profesional, en cinco líneas como mucho».

Cuando la respuesta llegue, **léela entera** y cambia lo que no sea verdad o no suene a ti. El texto final es tuyo.

## Error frecuente

Escribir tres palabras y pensar que «la IA no sirve». Casi siempre faltaba contexto, no capacidad.

---
title: Las normas de uso
description: Qué no permite la política de uso de Anthropic, por qué a veces Claude dice que no y cómo pedir de otra forma algo que es legítimo.
level: basico
track: cla-seguro
order: 605
skills: [cla-etica-normas, cla-peticion]
terms: [prompt, deepfake]
hook: "Le pides a Claude un correo que imite a tu banco para enseñar a tus padres a detectar estafas, y se niega. ¿Por qué? ¿Cómo lo consigues sin saltarte nada?"
takeaway: Claude sigue una política de uso que prohíbe dañar, engañar o vulnerar derechos. Si te dice que no a algo legítimo, explica para qué lo quieres y pide una versión que no pueda usarse para hacer daño.
scenario:
  kind: producto
  label: Caso práctico
  title: El taller de Maite
  body: "Maite prepara un taller contra estafas para su asociación de vecinos. Pide «un SMS falso de un banco» y Claude le propone otra cosa. Reformula: «Es para un taller de mayores. Haz un ejemplo con un banco inventado, marca en él las cinco señales de estafa y añade cómo actuar». Obtiene justo lo que necesitaba."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-se05-q1
    q: "Claude no te ayuda con un relato porque hay una escena de un robo, y tú solo escribes una novela. ¿Qué es lo más útil?"
    options: ["Buscar un truco para engañarle", "Explicar que es ficción, decir qué necesita la escena y pedir que no dé instrucciones reales", "Dejarlo: Claude nunca escribe sobre delitos"]
    answer: 1
    explain: "El contexto ayuda a distinguir una petición legítima. Los trucos para saltarse las normas tientan, pero la propia política de uso los prohíbe y pueden llevar a perder la cuenta."
  - type: truefalse
    id: cla-se05-q2
    q: "La política de uso permite crear imágenes íntimas o comprometedoras de una persona real si es solo para gastar una broma."
    answer: false
    explain: "Las imágenes íntimas sin consentimiento, el acoso y hacerse pasar por otra persona están prohibidos, sea broma o no. Además, en España pueden ser delito."
  - type: choice
    id: cla-se05-q3
    q: "¿Cuál de estas peticiones va contra la política de uso?"
    options: ["Un correo de queja firme a una compañía de luz", "Diez reseñas positivas de tu restaurante firmadas como si fueran clientes", "Una presentación sobre los riesgos del tabaco"]
    answer: 1
    explain: "Las reseñas falsas son un engaño a los consumidores. La queja firme es legítima aunque sea dura, y hablar de riesgos para la salud con fines informativos también."
tips:
  - "Di para qué lo quieres: el propósito suele ser lo que le falta a Claude para ayudarte."
  - "Si crees que la negativa es un error, márcalo con el botón de valorar la respuesta: así llega como comentario."
  - "No pidas a Claude que finja que no tiene normas: no funciona y va contra las condiciones."
action:
  title: Reformula una petición con su propósito
  steps:
    - "Piensa en algo que Claude te haya rechazado o que no te atrevas a pedir."
    - "Escríbelo de nuevo diciendo quién eres, para qué es y qué no necesitas."
    - "Si es legítimo, guarda esa forma de pedir en «Mi kit de Claude»."
  check: He reformulado una petición explicando para qué la quiero
practice:
  task: "Preparas una charla para adolescentes sobre seguridad en redes. Pediste a Claude «cómo hackear una cuenta» y se negó. Escribe una petición legítima que te dé lo que de verdad necesitas."
  require: [contexto, limites]
  extra:
    - label: Decir para qué lo quieres
      any: [para una charla, para un taller, para ensenar, es para, el objetivo, para que aprendan, preparo]
      hint: "Explica el propósito: «Preparo una charla para…»."
    - label: Pedir una versión que no pueda hacer daño
      any: [sin instrucciones, no necesito instrucciones, nada de pasos, sin pasos, como protegerse, como reconocer]
      hint: "Di qué no necesitas y pide la parte útil: «Sin pasos reales, solo cómo reconocerlo y protegerse»."
  sample: "Soy monitor en un centro juvenil y preparo una charla de 30 minutos para chavales de 14 a 16 años sobre cómo proteger sus redes sociales. Antes te pedí cómo hackear una cuenta y entiendo que no lo hicieras: no necesito instrucciones reales. Explica en lenguaje sencillo las tres formas de engaño más comunes para robar una cuenta y cómo reconocerlas. Termina con una lista de 5 consejos para protegerse. Nada de pasos técnicos para entrar en cuentas ajenas."
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [anthropic-aup, anthropic-condiciones, anthropic-constitucion]
---

## La idea

Anthropic tiene una **política de uso**: las reglas sobre lo que no se puede hacer con Claude. Al usarlo, aceptas cumplirla. En resumen, **no se permite**:

- **Actividades ilegales**: fraude, estafas, documentos falsos, vulnerar derechos de autor.
- **Hacer daño**: armas, ataques informáticos, violencia, odio o discriminación.
- **Dañar a personas**: acoso, imágenes íntimas sin consentimiento, autolesiones, cualquier contenido que explote a menores.
- **Espiar o exponer**: vigilar a alguien a escondidas, crear perfiles de personas sin su permiso, publicar sus datos.
- **Engañar**: desinformación, reseñas falsas, bots que se hacen pasar por personas, suplantar a alguien (también con un **deepfake**, un vídeo o audio falso que parece real).
- **Saltarse las normas**: trucos para que Claude ignore sus reglas o varias cuentas para evitar un bloqueo.

Para usos delicados, como dar consejos legales, médicos o financieros a otras personas a través de un servicio, la política pide además que un profesional revise el resultado y que se avise de que intervino la IA.

**¿Por qué a veces dice que no?** Porque una petición se parece a algo dañino. Claude intenta no ser ni demasiado permisivo ni demasiado estricto, y a veces se pasa de prudente con algo inocente.

## En la práctica

Si te dice que no y tu petición es legítima, no busques trucos: **dale el contexto que le falta**.

1. **Quién eres y para qué**: «Soy profesora de 4.º de ESO…».
2. **Qué necesitas exactamente** y qué no: «Sin instrucciones reales, solo las señales para reconocerlo».
3. **Una versión segura**: datos inventados, un ejemplo con marcas de que es falso.

> Prueba: «Preparo una charla para mayores sobre estafas por SMS. Escribe un mensaje de ejemplo de un banco inventado, señala en él las señales de alarma y termina con tres consejos para actuar si reciben uno de verdad.»

Si aun así no puede ayudarte, probablemente esa petición choca con una norma. Acéptalo y busca otro camino.

## Error frecuente

Pensar que Claude «se ha vuelto tonto» cuando dice que no y repetir la misma petición. Casi siempre basta con explicar el propósito.

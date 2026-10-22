---
title: Explícamelo a mi nivel
description: Pide explicaciones ajustadas a lo que ya sabes, con analogías, y comprueba que lo has entendido explicándoselo tú a Claude.
level: basico
track: cla-aprender
order: 402
skills: [cla-aprender]
terms: [tecnica-feynman, alucinacion]
hook: "Buscas qué es una hipoteca a tipo variable y todo lo que encuentras usa palabras que tampoco entiendes. ¿Cómo consigues una explicación hecha para ti?"
takeaway: "Dile a Claude qué sabes ya y pide una analogía. Después, explícaselo tú con tus palabras: donde te atasques está lo que aún no entiendes."
scenario:
  kind: operacion
  label: Caso práctico
  title: Las placas solares de Gonzalo
  body: "Gonzalo quiere poner placas solares en su casa de Murcia y no entiende qué es la «compensación de excedentes». Pide a Claude una explicación para alguien sin conocimientos de electricidad, con una analogía. Luego se lo explica él a Claude con sus palabras y Claude le corrige un punto que había entendido al revés."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-ap02-q1
    q: "Nuria lee la explicación de Claude sobre la declaración de la renta y cree que la entiende. ¿Cuál es la mejor forma de comprobarlo?"
    options: ["Releerla dos veces", "Explicársela a Claude con sus palabras y pedirle que señale lo que no está bien", "Pedir otra explicación más larga"]
    answer: 1
    explain: "Releer da sensación de entender, pero no lo demuestra. Al explicarlo tú aparecen los huecos, y Claude puede señalar en cuál te has equivocado."
  - type: truefalse
    id: cla-ap02-q2
    q: "Las analogías ayudan a entender, pero ninguna encaja del todo; conviene preguntar dónde falla."
    answer: true
    explain: "Una analogía simplifica. Preguntar «¿en qué se parece y en qué no?» evita quedarte con una idea equivocada."
  - type: choice
    id: cla-ap02-q3
    q: "Pides que te explique algo «para un niño de 10 años» y te queda demasiado simple. ¿Qué haces?"
    options: ["Decirle tu nivel real: «Tengo el Bachillerato y nociones básicas; súbelo un poco y explica los términos nuevos»", "Volver a la explicación técnica", "Pensar que el tema es demasiado difícil para ti"]
    answer: 0
    explain: "El nivel se ajusta en ambas direcciones. Decir lo que sabes de verdad da mejores resultados que elegir entre muy fácil y muy técnico."
tips:
  - "Pide que marque en negrita cada término nuevo y lo explique en una frase."
  - "Si la explicación incluye cifras, normas o plazos, compruébalos en una fuente oficial: Claude puede equivocarse."
  - "Para temas de salud, dinero o derecho, entender está bien; decidir, con un profesional."
action:
  title: Explícaselo tú
  steps:
    - "Elige un concepto que oigas a menudo y no sepas explicar (en el trabajo, en las noticias o en tus facturas)."
    - "Pide una explicación a tu nivel con una analogía."
    - "Explícaselo tú en cinco frases y pide que te corrija."
  check: He explicado un concepto con mis palabras y Claude me ha corregido
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [claude-ayuda, anthropic-academy]
---

## La idea

Una buena explicación depende de **lo que ya sabes**. La misma idea se explica distinto a alguien que empieza que a alguien con experiencia. Claude puede ajustarse, pero tiene que saber tu punto de partida.

Tres cosas que funcionan:

- **Di tu nivel de verdad.** «No sé nada de electricidad», «hice Contabilidad en el instituto pero no me acuerdo», «soy enfermera, no hace falta explicar lo médico».
- **Pide una analogía.** Comparar con algo cotidiano ayuda mucho: un depósito de agua, una cola del supermercado, una hucha. Pero ninguna analogía encaja del todo: pregunta **en qué falla**.
- **Explícaselo tú.** Es la **técnica Feynman**: si puedes explicarlo con palabras sencillas, lo entiendes. Donde te atasques o te enredes está lo que aún no tienes claro.

El último paso es el que más se salta y el que más enseña. Leer una explicación clara da sensación de haber entendido; explicarla tú lo demuestra.

Recuerda que Claude puede dar datos falsos con seguridad (lo que se llama **alucinación**). Para entender una idea general es muy útil; para cifras y normas concretas, comprueba la fuente.

## En la práctica

> Prueba: «Explícame qué es [CONCEPTO]. Mi nivel: [lo que sé]. Usa una analogía de la vida diaria y dime en qué falla esa analogía. Explica cada término nuevo en una frase. Después, pídeme que te lo explique yo con mis palabras y corrígeme.»

Cuando se lo expliques, pide una corrección sincera:

> «Esta es mi explicación: […]. Dime qué está bien, qué está mal y qué me falta. No me digas que está perfecto si no lo está.»

## Error frecuente

Quedarse en «ah, vale, lo entiendo» después de leer. Si no puedes explicarlo tú en cinco frases, todavía no lo has aprendido.

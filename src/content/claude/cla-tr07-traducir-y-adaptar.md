---
title: Traducir y adaptar un texto
description: Cómo pedir a Claude que traduzca o adapte un texto a otro público o canal, revisar los términos delicados y saber cuándo hace falta un traductor profesional.
level: basico
track: cla-trabajo
order: 307
skills: [cla-escribir, cla-verificar]
terms: [falso-amigo, traduccion-jurada, tono]
hook: "Tienes un informe técnico de diez páginas y te piden un post para la web y un mensaje para los clientes. Mismo contenido, tres textos distintos."
takeaway: Claude traduce y adapta bien si le dices para quién y para qué canal es el texto. Revisa los nombres, cifras y términos delicados. Para textos legales u oficiales, una traducción profesional.
scenario:
  kind: empresa
  label: Caso práctico
  title: El menú de Iván
  body: "Iván tiene un restaurante en Valencia con muchos turistas. Pide a Claude la carta en inglés y francés, con una línea que explique cada plato típico y sin traducir sus nombres. Una camarera que habla inglés revisa la versión final y corrige un plato traducido de forma demasiado literal."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-tr07-q1
    q: "Rebeca trabaja en una empresa de seguros y tiene que convertir una nota técnica sobre una nueva cobertura en un mensaje para clientes. ¿Qué pide?"
    options: ["«Resume esto.»", "«Adapta esta nota para clientes sin conocimientos de seguros: máximo 150 palabras, tono cercano, sin tecnicismos y sin cambiar las condiciones. Señala las frases que hayas simplificado para que compruebe que siguen siendo exactas.»", "«Hazlo más atractivo para vender más.»"]
    answer: 1
    explain: "La segunda dice para quién es, la longitud, el tono y lo que no puede cambiar, y pide marcar lo simplificado. «Resume esto» tienta por rápido, pero un resumen no es lo mismo que adaptar a otro público, y puede perder condiciones importantes."
  - type: truefalse
    id: cla-tr07-q2
    q: "Para presentar en un organismo oficial un certificado traducido, basta con la traducción de Claude."
    answer: false
    explain: "Muchos trámites oficiales en España piden una traducción jurada, firmada por un traductor acreditado por el Ministerio de Asuntos Exteriores. Claude te sirve para entender el documento, no para presentarlo."
  - type: choice
    id: cla-tr07-q3
    q: "Has traducido con Claude la ficha de un producto de tu tienda en línea al inglés. ¿Qué revisas sobre todo?"
    options: ["Que el texto sea largo", "Precios, medidas, materiales, instrucciones de seguridad y el nombre de la marca", "Nada: las traducciones de una IA son perfectas"]
    answer: 1
    explain: "Un error en una cifra o una advertencia puede causar devoluciones o problemas. La calidad general suele ser buena, pero los datos concretos y los términos delicados se comprueban siempre."
tips:
  - "Dile qué palabras no debe traducir: nombres de productos, de platos típicos o de tu empresa."
  - "Pide una retrotraducción: «Vuelve a traducir tu versión al español». Si cambia el sentido, algo falla."
action:
  title: Adapta un texto tuyo a otro público
  steps:
    - "Elige un texto que ya tengas (un aviso, una descripción, un informe breve) sin datos personales."
    - "Pide con la primera petición de ejemplo una versión para otro público o canal."
    - "Revisa las cifras y los términos marcados, y guarda la petición en «Mi kit de Claude»."
  check: He adaptado un texto a otro público con Claude y he revisado los datos clave
practice:
  task: "Tienes una tienda online de cerámica y empiezas a vender en Francia. Escribe la petición para que Claude traduzca y adapte una ficha de producto a esos clientes."
  require: [publico, tono, limites]
  extra:
    - label: Pedir que marque lo dudoso
      any: [marca, senala, dudas, suene raro, suenen raras, puedan sonar]
      hint: "Pide que marque las frases que le generen dudas o que puedan sonar raras en el otro idioma."
  sample: "Tengo una tienda online de cerámica hecha a mano en Talavera y empiezo a vender en Francia. Traduce al francés esta ficha de producto para clientes franceses que compran por internet. Tono cercano y cuidado, con el trato habitual en las tiendas francesas. No traduzcas el nombre de la marca ni el de las colecciones, y no cambies medidas, precios ni instrucciones de lavado. Marca las frases que te generen dudas o que en francés puedan sonar raras. Ficha: [pega aquí]"
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [claude-ayuda]
---

## La idea

Claude traduce entre muchos idiomas con buena calidad. Pero en el trabajo casi nunca basta con **traducir**: hay que **adaptar**. El mismo contenido se escribe distinto según el público y el canal:

- De **técnico a sencillo**: un informe para dirección o una nota para clientes.
- De **largo a corto**: de un informe a un post de una red social o a un mensaje de WhatsApp.
- De **un idioma a otro**, cuidando la cultura: el trato, las fórmulas de cortesía, las medidas o los formatos de fecha.

Para que acierte, dile siempre **para quién** es, **en qué canal** se publica, **el tono** y **qué no puede cambiar** (cifras, condiciones, nombres propios).

Qué revisar siempre:

- **Cifras, fechas, precios y medidas.**
- **Términos delicados**: lo legal, lo médico, las advertencias de seguridad y los temas que pueden ofender.
- **Falsos amigos**: palabras que se parecen pero significan otra cosa, como «actually», que es «en realidad» y no «actualmente».

Y una línea roja: los **textos legales u oficiales** (contratos, certificados, documentos para un juzgado o un organismo) necesitan una **traducción profesional**. Muchos trámites piden una **traducción jurada**. Claude te ayuda a entenderlos, pero no la sustituye.

## En la práctica

1. Pega el texto con el público, el canal, el tono y lo que no se toca.
2. Pide que **marque** lo que haya simplificado o le genere dudas.
3. Revisa los datos y, si puedes, que lo lea alguien que domine el idioma.

> Prueba: «Este es el informe trimestral de mi departamento [pega aquí]. Hazme dos versiones: un post para LinkedIn de 120 palabras, tono profesional y cercano, y un resumen de 5 puntos para el equipo. No inventes datos que no estén en el informe y no cambies ninguna cifra.»

> Prueba: «Traduce al inglés este aviso para los huéspedes de mi apartamento turístico. Tono amable y claro. No traduzcas los nombres de calles. Marca cualquier frase que en inglés pueda sonar brusca y propón una alternativa.»

## Error frecuente

Publicar una traducción sin que nadie que conozca el idioma la haya leído, sobre todo en textos con precios, normas o advertencias.

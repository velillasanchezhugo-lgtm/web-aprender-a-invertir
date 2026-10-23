---
title: Archivos, fotos y capturas
description: "Cómo subir a ChatGPT un PDF, una foto o una captura, qué puede leer y qué no, cómo pedirle la página de cada dato y qué tapar antes de subirlo."
level: cero
track: gpt-cero
order: 7
skills: [gpt-archivos-datos, gpt-verificar]
terms: [chatgpt, datos-personales, alucinacion]
hook: "Tienes un PDF de 80 páginas y solo quieres saber una cosa. ¿Puedes dárselo a ChatGPT y fiarte de lo que te diga?"
takeaway: "Puedes subir PDF, documentos, fotos y capturas para que ChatGPT los lea, resuma o explique. Pide siempre la página o la frase exacta de cada dato para comprobarlo, y tapa los datos personales antes de subir nada."
scenario:
  kind: empresa
  label: Caso práctico
  title: El convenio de Iván
  body: "Iván trabaja en un almacén y quiere saber cuántos días de vacaciones le corresponden. Sube a ChatGPT el convenio colectivo en PDF, de 80 páginas. La respuesta dice «30 días naturales». Le pide el artículo y la página, abre el PDF y comprueba que es así, pero que hay un día más por antigüedad que la respuesta no mencionaba."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-c07-q1
    q: "Iván tiene la respuesta «30 días naturales» sobre su convenio de 80 páginas. ¿Qué hace antes de reclamar a su empresa?"
    options: ["Reclamar ya: ChatGPT ha leído el documento entero", "Pedir el artículo y la página de ese dato, y leerlo él en el PDF", "Subir el PDF otra vez y ver si le dice lo mismo"]
    answer: 1
    explain: "Con la página o el artículo, comprobarlo te lleva un minuto, y además ves lo que hay alrededor (como el día extra por antigüedad). Confiar porque «lo ha leído» tienta, pero en documentos largos puede pasar por alto partes o mezclar datos. Que repita lo mismo no lo confirma."
  - type: choice
    id: gpt-c07-q2
    q: "Quieres que ChatGPT te explique un informe médico de tu madre que tienes en papel. ¿Cómo lo haces?"
    options: ["Fotografiarlo entero, con su nombre, DNI y número de historia", "Tapar o recortar nombre, DNI y números antes de hacer la foto, y llevar las dudas a su médico", "No hacer nada: un informe médico no se puede subir nunca"]
    answer: 1
    explain: "Lo que hay que explicar es el contenido, no quién es la paciente. Quitar lo que la identifica protege sus datos, que son de salud. Prohibirlo del todo tienta por prudencia, pero entender un informe para preparar preguntas al médico es un uso razonable."
  - type: truefalse
    id: gpt-c07-q3
    q: "Si un PDF tiene un gráfico que ChatGPT no interpreta bien, puedes hacer una captura de esa página y subirla como imagen."
    answer: true
    explain: "ChatGPT lee bien el texto de los PDF, pero los gráficos y las tablas en imagen no siempre los interpreta igual. Una captura de esa parte suele funcionar mejor. Tienta pensar que si no lo entendió a la primera, no puede, pero cambiar el formato ayuda."
tips:
  - "Si el documento es largo, dile qué buscas («solo lo que habla de vacaciones y permisos»): la respuesta será más precisa."
  - "Las fotos con texto torcido, borroso o a mano se leen peor. Haz la foto con buena luz y de frente, y revisa las cifras que copie."
action:
  title: Sube un documento y caza la página
  steps:
    - "Elige un PDF que tengas a mano y que no tenga datos de nadie (un manual, unas bases, un reglamento público)."
    - "Súbelo con el botón de adjuntar o el «+» del chat y pregunta una cosa concreta, pidiendo la página."
    - "Abre el PDF en esa página y comprueba que dice lo mismo."
    - "Guarda la petición que mejor te funcione en «Mi kit de ChatGPT»."
  check: He subido un documento y he comprobado en su página un dato que me dio ChatGPT
practice:
  task: "Te han pasado en PDF el reglamento de 20 páginas del huerto urbano de tu barrio, donde te han dado una parcela. Escribe la petición para saber qué normas te afectan, con la página de cada una."
  require: [formato, verificar]
  extra:
    - label: Pedir la página de cada dato
      any: [página, pagina, copia la frase, frase exacta, cita]
      hint: "Pide que indique la página o copie la frase de cada dato para comprobarlo."
  sample: "Te adjunto el reglamento del huerto urbano de mi barrio, donde me acaban de dar una parcela. Hazme una lista de las normas que me afectan como usuario: horarios, riego, qué se puede plantar y qué pasa si no cuido la parcela. Pon junto a cada norma la página donde aparece. Si algo no viene en el documento, dímelo en vez de suponerlo."
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-privacidad, aepd-guias]
---

## La idea

Además de escribirle, puedes **darle archivos** a ChatGPT: un PDF, un documento de texto, una hoja de cálculo, una foto o una captura de pantalla. Está en el plan gratuito y en los de pago, con límites de cuántos archivos subes al día que cambian según el plan.

**Qué puede hacer con ellos:**

- **Leer y resumir** un PDF o un documento, y responder preguntas sobre él.
- **Leer el texto de una foto o captura**: un cartel, una factura, un mensaje de error.
- **Describir una imagen** y explicarte lo que ve.

**Lo que conviene saber:**

- **El texto, mejor que los dibujos.** Lee bien el texto de un PDF, pero los **gráficos y tablas en imagen** no siempre los interpreta igual. Si importan, haz una captura de esa página y súbela aparte.
- **En documentos largos puede saltarse cosas** o mezclar datos de partes distintas. Puede incluso darte una **alucinación**: un dato que no está en el documento.
- **Pide la página o la frase exacta** de cada dato. Así compruebas en un minuto.

**Cuidado con los datos personales.** Una foto del DNI, una receta médica o un contrato llevan datos tuyos o de otros. Antes de subirlos, **tapa o recorta** lo que no haga falta: nombre, DNI, dirección, números de cuenta.

## En la práctica

1. En el chat, pulsa el botón de **adjuntar** o el **«+»** y elige el archivo o la foto. En el móvil también puedes hacer la foto en ese momento.
2. Escribe una pregunta **concreta** y pide **la página**.
3. Abre el documento y comprueba.

> Prueba: «Te adjunto las bases de un concurso de fotografía de mi ayuntamiento. Dime en cinco puntos qué tengo que hacer para participar y el plazo. Indica la página de cada punto y, si algo no aparece, dímelo».

## Error frecuente

Subir el documento y dar por buena la respuesta sin abrir la página. Treinta segundos de comprobación evitan muchos disgustos.

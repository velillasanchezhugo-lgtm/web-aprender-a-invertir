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
  kind: producto
  label: Caso práctico
  title: El seguro de Eusebio
  body: "A Eusebio se le estropea la tele por una subida de tensión. Sube a ChatGPT las condiciones de su seguro de hogar, 80 páginas en PDF, y le dice que los daños eléctricos están cubiertos. Pide la página, la abre y ve que es así, pero con una franquicia y un límite para aparatos antiguos que no le había mencionado."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-c07-q1
    q: "Eusebio tiene la respuesta «los daños eléctricos están cubiertos». ¿Qué hace antes de llamar al seguro?"
    options: ["Llamar ya: ChatGPT ha leído el documento entero", "Pedir la página de ese dato y leerla él en el PDF", "Subir el PDF otra vez y ver si le dice lo mismo"]
    answer: 1
    explain: "Con la página, comprobarlo lleva un minuto y ves lo que hay alrededor (como la franquicia). Confiar porque «lo ha leído» tienta, pero en documentos largos puede saltarse partes. Que repita lo mismo no lo confirma."
  - type: choice
    id: gpt-c07-q2
    q: "Quieres que ChatGPT te explique un informe médico de tu madre que tienes en papel. ¿Cómo lo haces?"
    options: ["Tapar o recortar nombre, DNI y números antes de hacer la foto, y llevar las dudas a su médico", "Fotografiarlo entero, con su nombre, DNI y número de historia", "No hacer nada: un informe médico no se puede subir nunca"]
    answer: 0
    explain: "Lo que hay que explicar es el contenido, no quién es la paciente: quitar lo que la identifica protege sus datos de salud. Prohibirlo tienta por prudencia, pero entenderlo para preparar preguntas al médico es razonable."
  - type: truefalse
    id: gpt-c07-q3
    q: "Si un PDF tiene un gráfico que ChatGPT no interpreta bien, puedes hacer una captura de esa página y subirla como imagen."
    answer: true
    explain: "Lee bien el texto de los PDF, pero no siempre los gráficos; una captura de esa parte suele funcionar mejor. Tienta pensar que si no lo entendió a la primera, no puede."
tips:
  - "Si el documento es largo, dile qué buscas («solo lo que habla de daños eléctricos»): la respuesta será más precisa."
  - "Las fotos torcidas, borrosas o a mano se leen peor: hazlas con luz y de frente."
  - "Los archivos que subes pueden quedar guardados en tu cuenta aunque borres el chat. Revísalos de vez en cuando."
action:
  title: Sube un documento y caza la página
  steps:
    - "Elige un PDF sin datos de nadie (un manual, unas bases, un reglamento público)."
    - "Súbelo con el botón de adjuntar o el «+» del chat y pregunta una cosa concreta, pidiendo la página."
    - "Abre el PDF en esa página y comprueba que dice lo mismo."
  check: He subido un documento y he comprobado en su página un dato que me dio ChatGPT
practice:
  task: "Te han pasado en PDF el reglamento de 20 páginas del huerto urbano de tu barrio, donde te han dado una parcela. Escribe la petición para saber qué normas te afectan, con la página de cada una."
  require: [formato, verificar]
  extra:
    - label: Pedir la página de cada dato
      any: [página, pagina, copia la frase, frase exacta, cita]
      hint: "Pide que indique la página o copie la frase de cada dato para comprobarlo."
  sample: "Te adjunto el reglamento del huerto urbano de mi barrio, donde me acaban de dar una parcela. Hazme una lista de las normas que me afectan como usuario: horarios, riego, qué se puede plantar y qué pasa si no cuido la parcela. Pon junto a cada norma la página donde aparece. Si algo no viene en el documento o no estás seguro, dímelo en vez de suponerlo."
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

Además de escribirle, puedes **darle archivos** a ChatGPT: un PDF, un documento, una hoja de cálculo, una foto o una captura de pantalla. Gratis y de pago, con límites según el plan.

**Qué puede hacer con ellos:**

- **Leer y resumir** un documento y responder preguntas sobre él.
- **Leer una foto o captura** y explicarte lo que ve: un cartel, una factura, un mensaje de error.

**Lo que conviene saber:**

- **El texto, mejor que los dibujos.** Los **gráficos y tablas en imagen** de un PDF no siempre los interpreta. Si importan, sube una captura de esa página.
- **En documentos largos puede saltarse cosas** o mezclar partes. Incluso puede darte una **alucinación**: un dato que no está en el documento.
- **Pide la página o la frase exacta** de cada dato. Así compruebas en un minuto.

**Cuidado con los datos personales.** Un DNI, una receta o un contrato llevan datos tuyos o de otros. Antes de subirlos, **tapa o recorta** lo que no haga falta: nombre, DNI, dirección, cuentas.

## En la práctica

1. Pulsa **adjuntar** o el **«+»** del chat y elige el archivo o la foto (en el móvil, también puedes hacerla en ese momento).
2. Escribe una pregunta **concreta** y pide **la página**.
3. Abre el documento y comprueba.

> Prueba: «Te adjunto las bases de un concurso de fotografía de mi ayuntamiento. Dime en cinco puntos qué tengo que hacer para participar y el plazo. Indica la página de cada punto y, si algo no aparece, dímelo».

## Error frecuente

Dar por buena la respuesta sin abrir la página. Treinta segundos de comprobación evitan muchos disgustos.

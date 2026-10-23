---
title: Archivos e imágenes
description: Cómo subir a Claude un PDF, una foto o una captura, qué puede leer de ellos, cómo pedir un resumen que cite las páginas y qué documentos no conviene subir.
level: cero
track: cla-cero
order: 7
skills: [cla-archivos, cla-analizar]
terms: [alucinacion]
hook: "Te llega un contrato de 20 páginas para la nueva línea de móvil y no tienes ganas de leerlo entero. ¿Puedes pedirle a Claude que te diga lo importante sin fiarte a ciegas?"
takeaway: Claude puede leer el texto, las tablas y las imágenes de los archivos que subes. Pídele que cite la página de cada dato para comprobarlo, y quita antes los datos personales que no hagan falta.
scenario:
  kind: producto
  label: Caso práctico
  title: El contrato de Nuria
  body: "Nuria cambia de compañía de teléfono y recibe las condiciones en un PDF largo. Pide a Claude la permanencia y la penalización, con la página de cada dato, y comprueba dos antes de firmar."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-c07-q1
    q: "Nuria sube el contrato y quiere saber la penalización por darse de baja antes de tiempo. ¿Qué petición le conviene más?"
    options: ["«Resúmeme el contrato»", "«¿Cuál es la penalización si me doy de baja antes? Dime en qué página lo pone y copia la frase exacta»", "«¿Me conviene firmar?»"]
    answer: 1
    explain: "Pedir la página y la frase exacta te permite comprobar el dato en segundos. El resumen general tienta por cómodo, pero puede dejar fuera justo lo que buscas. Y «¿me conviene?» es una decisión tuya, que Claude no puede tomar por ti."
  - type: truefalse
    id: cla-c07-q2
    q: "Si un dato viene de un documento que tú has subido, Claude ya no puede equivocarse."
    answer: false
    explain: "Con un documento delante se equivoca menos, pero puede leer mal una tabla, confundir dos cifras o rellenar algo que no está. Tienta pensar que «lo está leyendo», pero por eso mismo conviene pedir la página y mirarla."
  - type: choice
    id: cla-c07-q3
    q: "Quieres ayuda para entender una carta del banco que lleva tu nombre, tu IBAN y tu DNI. ¿Qué haces?"
    options: ["Hacer una captura solo del párrafo que no entiendes, o tapar esos datos antes de subirla", "Subir la carta completa: Claude necesita todo el contexto", "No usar Claude nunca para nada relacionado con el banco"]
    answer: 0
    explain: "Para explicar un párrafo no hace falta tu IBAN ni tu DNI. Subirlo todo tienta por rapidez, pero compartes datos que no aportan nada. Prohibírtelo todo también es exagerado: el truco es subir solo lo necesario."
tips:
  - "Si una foto sale torcida o borrosa, repítela con buena luz: Claude lee mucho mejor una imagen nítida."
  - "En documentos largos, pregunta por lo que te importa («¿qué dice sobre la permanencia?») en vez de pedir un resumen de todo."
  - "Si las páginas impresas del PDF no coinciden con las del visor, aclara cuáles quieres: «usa el número de página del visor de PDF»."
action:
  title: Resume un documento citando páginas
  steps:
    - "Elige un PDF que tengas a mano y que no lleve datos personales sensibles: unas instrucciones, un folleto, unas condiciones."
    - "Súbelo a Claude con el botón de adjuntar o arrastrándolo al chat."
    - "Pide los cinco puntos clave con la página de cada uno y comprueba dos en el documento."
  check: He subido un documento y he comprobado dos datos en sus páginas
practice:
  task: "Vas a subir el manual en PDF de tu lavadora nueva. Escribe la petición para saber cómo limpiar el filtro y qué significa el aviso E21, con la página de cada dato."
  require: [formato, verificar]
  extra:
    - label: Pedir la página de cada dato
      any: [página, pagina, copia la frase, frase exacta]
      hint: "Pide que indique la página o copie la frase de cada dato para comprobarlo."
  sample: "Te adjunto el manual de instrucciones de mi lavadora nueva. Explícame en una lista de pasos cortos cómo se limpia el filtro y qué significa el aviso E21 que sale en la pantalla. Para cada dato, indica la página del manual. Si algo no aparece en el documento, dímelo y no lo inventes. Si no estás seguro de un dato, avísame."
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [claude-ayuda, aepd-guias]
---

## La idea

Además de escribirle, puedes **darle archivos** a Claude para que trabaje con ellos:

- **Documentos**: PDF, Word, hojas de cálculo, textos.
- **Imágenes**: fotos hechas con el móvil, capturas de pantalla, escaneos.

**Qué puede leer:**

- El **texto** de los documentos.
- Las **tablas**, por ejemplo una factura o un horario.
- En los PDF, también **imágenes y gráficos**. En PDF muy largos solo lee el texto, y en otros tipos de documento, como Word, solo el texto.
- En las fotos, lo que se ve: un ticket, una pizarra, un cartel.

Ahorra lectura, pero **no elimina los errores**. Puede leer mal una cifra o inventarse algo que no está, lo que se llama **alucinación**. Por eso, la mejor costumbre es **pedir que cite la página** de cada dato. Así compruebas en segundos.

**Límites.** Hay un tamaño máximo por archivo y un número máximo de archivos por chat. Cambian con el tiempo: si un archivo no se sube, consulta el centro de ayuda.

**Cuidado con lo que subes.** Un documento puede llevar datos que no ves a primera vista: nombres, DNI, cuentas, firmas. Sube **solo lo necesario** o tapa esos datos antes.

## En la práctica

Para subir un archivo, usa el botón de adjuntar del chat o arrástralo a la ventana. En el móvil puedes hacer la foto directamente desde la aplicación.

> Prueba: «Te adjunto las condiciones de mi nueva tarifa de móvil. Dime en una lista: la permanencia, la penalización si me doy de baja antes y si el precio cambia a partir de algún momento. Para cada dato, indica la página y copia la frase exacta. Si algo no aparece, dímelo».

La última frase es importante: le das permiso para decir «no lo pone» en vez de rellenar.

## Error frecuente

Firmar o pagar con lo que dice el resumen sin abrir el documento. El resumen te dice dónde mirar; mirar sigue siendo cosa tuya.

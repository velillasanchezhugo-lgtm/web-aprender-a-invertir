---
title: Correos con el tono justo
description: Cómo pedir a Claude un correo o un mensaje para pedir un favor, reclamar o decir que no, con los datos clave, tu voz y una revisión antes de enviar.
level: basico
track: cla-trabajo
order: 301
skills: [cla-escribir, cla-peticion]
terms: [tono, datos-personales]
hook: "Tienes que decirle a un cliente que no puedes rebajarle el precio, sin perderlo. Llevas veinte minutos delante de un correo en blanco."
takeaway: Claude escribe un buen borrador si le das la situación, lo que quieres conseguir, el tono y los datos exactos. El correo lo firmas tú, así que lo revisas y lo dejas sonando a ti.
scenario:
  kind: empresa
  label: Caso práctico
  title: El «no» de Marta
  body: "Marta lleva una imprenta. Un cliente habitual le pide un 20 % de descuento que no puede hacer. Pide a Claude «un correo para decir que no» y recibe un texto frío y larguísimo. Lo repite con el contexto, lo que sí puede ofrecer (entrega en 48 horas sin recargo) y un tono cercano y breve. El segundo borrador le sirve con dos retoques."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-tr01-q1
    q: "Jorge quiere reclamar a su compañía de luz una factura cobrada dos veces. ¿Qué petición le dará mejor resultado?"
    options: ["«Escribe una reclamación a la compañía de luz.»", "«Escribe una reclamación firme y educada: me han cobrado dos veces la factura de septiembre (85 €). Pido la devolución en 10 días. Máximo 120 palabras.»", "«Escribe una reclamación muy dura para que me hagan caso.»"]
    answer: 1
    explain: "La segunda da los hechos, lo que pide, el tono y la longitud. La primera tienta por rápida, pero obliga a Claude a inventarse los detalles. La tercera suele salir agresiva y no acelera nada."
  - type: truefalse
    id: cla-tr01-q2
    q: "Si el correo lo ha escrito Claude, no hace falta leerlo entero antes de enviarlo."
    answer: false
    explain: "Puede poner una fecha, una cifra o un compromiso que no has dicho. El correo sale con tu nombre: léelo entero."
  - type: choice
    id: cla-tr01-q3
    q: "Vas a pedir ayuda con un correo para un proveedor. ¿Qué datos conviene no pegar?"
    options: ["El tono que quieres y la extensión", "El IBAN de tu empresa y el DNI del proveedor", "Lo que quieres conseguir con el mensaje"]
    answer: 1
    explain: "Claude no necesita números de cuenta ni documentos de identidad para redactar: pon «[IBAN]» o «[DNI]» y los añades tú al final. Lo demás sí le ayuda a acertar."
tips:
  - "Pega un correo que hayas escrito tú y te guste, y pide: «Escribe con este estilo». Sonará más a ti."
  - "Pide dos o tres versiones con distinto tono y quédate con la que mejor encaje."
action:
  title: Tu primer correo difícil
  steps:
    - "Piensa en un mensaje que lleves días aplazando (pedir un favor, reclamar o decir que no)."
    - "Escríbele a Claude la situación, lo que quieres conseguir, el tono y la extensión. Pon «[dato]» en lugar de cuentas, DNI o direcciones."
    - "Pide un cambio concreto («más corto», «menos formal») y retoca tú la versión final."
    - "Guarda la petición que mejor te funcionó en «Mi kit de Claude»."
  check: He preparado con Claude un correo que tenía pendiente y lo he revisado antes de enviarlo
practice:
  task: "Eres electricista autónomo y el material ha subido: el presupuesto que diste hace dos meses ya no te sale. Escribe la petición para que Claude te prepare el correo al cliente."
  require: [contexto, tono, formato]
  extra:
    - label: Decir qué quieres conseguir
      any: [quiero que, quiero conseguir, objetivo, que acepte, que confirme, que me conteste, sin perder]
      hint: "Di qué quieres que haga el cliente después de leerlo: «Quiero que acepte el nuevo precio sin perderlo»."
  sample: "Soy electricista autónomo. Hace dos meses di a un cliente un presupuesto de 2.400 € para renovar la instalación de su piso, pero el cable y los cuadros han subido un 15 %. Quiero que acepte el nuevo precio, 2.750 €, sin perderlo como cliente. Escribe un correo de máximo 120 palabras, tono cercano y profesional, que explique la subida con sencillez, ofrezca empezar la obra la semana que viene y no suene a excusa. Tutéale."
deeper: null
tool: constructor-de-peticiones
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [claude-ayuda, aepd-guias]
---

## La idea

Claude escribe muy bien correos, también los incómodos: **pedir un favor, reclamar o decir que no**. Pero solo acierta si le cuentas lo que no puede saber.

Una buena petición de correo tiene cinco piezas:

- **La situación**: quién es la otra persona y qué ha pasado.
- **El objetivo**: qué quieres que haga después de leerlo (pagar, contestar, aceptar otra fecha…).
- **El tono**: la forma en que suena el texto. Por ejemplo, «firme pero amable», «cercano», «formal de usted».
- **Los datos clave**: fechas, importes, números de pedido. Si faltan, puede rellenarlos con datos inventados.
- **La extensión**: «máximo 100 palabras» evita correos eternos.

Dos reglas que no se rompen:

1. **Lo revisas antes de enviar.** Cada cifra, cada fecha y cada promesa. El correo sale con tu nombre.
2. **No subas lo que no hace falta**: IBAN, DNI, contraseñas, datos de salud de nadie. Pon un hueco («[IBAN]») y lo completas tú.

Para **mantener tu voz**, dale un mensaje tuyo como muestra.

## En la práctica

1. Escribe la petición con las cinco piezas. No hace falta que sea bonita.
2. **Pide cambios concretos**: «más corto», «tutéale», «sin disculparte tanto».
3. Copia el texto, completa los huecos y **reléelo entero**.

> Prueba: «Soy autónoma y diseño páginas web. Una clienta me debe una factura de 600 € que venció hace 30 días y no contesta. Quiero cobrar sin romper la relación. Escribe un correo breve (máximo 120 palabras), cordial y firme, que recuerde la factura n.º [número], pida el pago antes del [fecha] y ofrezca una llamada si hay algún problema. Tutéala.»

> Prueba: «Soy profesor de instituto. Un padre me pide que suba la nota de su hijo y no voy a hacerlo. Escribe una respuesta respetuosa, de usted, que explique que la nota sigue los criterios publicados, ofrezca una tutoría y no entre en discusiones. Dame dos versiones: una más cálida y otra más formal.»

## Error frecuente

Pedir «un correo para reclamar» sin dar los hechos: sale genérico y acabas reescribiéndolo.

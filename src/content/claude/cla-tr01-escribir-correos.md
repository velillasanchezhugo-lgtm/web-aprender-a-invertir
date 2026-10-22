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
  body: "Marta lleva una pequeña imprenta. Un cliente habitual le pide un 20 % de descuento en un pedido urgente. No puede hacerlo, pero quiere conservarlo. Le pide a Claude «un correo para decir que no» y recibe un texto frío y larguísimo. Lo repite contando quién es el cliente, qué puede ofrecerle (entrega en 48 horas sin recargo) y que quiere un tono cercano y breve. El segundo borrador le sirve con dos retoques."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: cla-tr01-q1
    q: "Jorge quiere reclamar a su compañía de luz una factura cobrada dos veces. ¿Qué petición le dará mejor resultado?"
    options: ["«Escribe una reclamación a la compañía de luz.»", "«Escribe una reclamación firme y educada: me han cobrado dos veces la factura de septiembre (85 €). Pido la devolución en 10 días. Máximo 120 palabras.»", "«Escribe una reclamación muy dura para que me hagan caso.»"]
    answer: 1
    explain: "La segunda da los hechos, lo que pide, el tono y la longitud. La primera tienta por rápida, pero obliga a Claude a inventarse los detalles. La tercera suele salir agresiva, y un tono duro rara vez acelera una devolución."
  - type: truefalse
    id: cla-tr01-q2
    q: "Si el correo lo ha escrito Claude, no hace falta leerlo entero antes de enviarlo."
    answer: false
    explain: "Puede poner una fecha, una cifra o un compromiso que no has dicho, o un tono que no es el tuyo. El correo sale con tu nombre: léelo entero y comprueba cada dato."
  - type: choice
    id: cla-tr01-q3
    q: "Vas a pedir ayuda con un correo para un proveedor. ¿Qué datos conviene no pegar?"
    options: ["El tono que quieres y la extensión", "El IBAN de tu empresa y el DNI del proveedor", "Lo que quieres conseguir con el mensaje"]
    answer: 1
    explain: "Claude no necesita números de cuenta ni documentos de identidad para redactar: pon «[IBAN]» o «[DNI]» y los añades tú al final. Lo demás sí le ayuda a acertar."
tips:
  - "Pega un correo que hayas escrito tú y te guste, y pide: «Escribe con este estilo». Sonará más a ti."
  - "Pide dos o tres versiones con distinto tono y quédate con la que mejor encaje."
  - "Antes de un correo delicado, deja el borrador una hora y reléelo con calma."
action:
  title: Tu primer correo difícil
  steps:
    - "Piensa en un mensaje que lleves días aplazando (pedir un favor, reclamar o decir que no)."
    - "Escríbele a Claude la situación, lo que quieres conseguir, el tono y la extensión. Pon «[dato]» en lugar de cuentas, DNI o direcciones."
    - "Pide un cambio concreto («más corto», «menos formal») y retoca tú la versión final."
    - "Guarda la petición que mejor te funcionó en «Mi kit de Claude»."
  check: He preparado con Claude un correo que tenía pendiente y lo he revisado antes de enviarlo
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

Escribir correos es de lo que mejor hace Claude, sobre todo los incómodos: **pedir un favor, reclamar o decir que no**. Pero solo acierta si le cuentas lo que él no puede saber.

Una buena petición de correo tiene cinco piezas:

- **La situación**: quién es la otra persona y qué ha pasado.
- **El objetivo**: qué quieres que haga después de leerlo (pagar, contestar, aceptar otra fecha…).
- **El tono**: la forma en que suena el texto. Por ejemplo, «firme pero amable», «cercano», «formal de usted».
- **Los datos clave**: fechas, importes, números de pedido. Si no se los das, puede rellenar huecos con datos que parecen ciertos y no lo son.
- **La extensión**: «máximo 100 palabras» evita correos eternos.

Dos reglas que no se rompen:

1. **Lo revisas antes de enviar.** Cada cifra, cada fecha y cada promesa. El correo sale con tu nombre.
2. **No subas lo que no hace falta**: IBAN, DNI, contraseñas, datos de salud de nadie. Pon un hueco («[IBAN]») y lo completas tú.

Y un truco para **mantener tu voz**: dale un mensaje tuyo como muestra. Si suenas igual que siempre, la otra persona no notará la diferencia, y el mensaje seguirá siendo tuyo.

## En la práctica

1. Escribe la petición con las cinco piezas. No hace falta que sea bonita.
2. Lee el borrador y **pide cambios concretos**: «quita la segunda frase», «tutéale», «sin disculparte tanto».
3. Si dudas entre tonos, pide versiones.
4. Copia el texto a tu correo, completa los huecos y **reléelo entero**.

> Prueba: «Soy autónoma y diseño páginas web. Una clienta me debe una factura de 600 € que venció hace 30 días y no contesta. Quiero cobrar sin romper la relación. Escribe un correo breve (máximo 120 palabras), cordial y firme, que recuerde la factura n.º [número], pida el pago antes del [fecha] y ofrezca una llamada si hay algún problema. Tutéala.»

> Prueba: «Soy profesor de instituto. Un padre me pide que suba la nota de su hijo y no voy a hacerlo. Escribe una respuesta respetuosa, de usted, que explique que la nota sigue los criterios publicados, ofrezca una tutoría y no entre en discusiones. Dame dos versiones: una más cálida y otra más formal.»

## Error frecuente

Pedir «un correo para reclamar» sin dar los hechos. Claude rellena con detalles genéricos o inventados y acabas reescribiéndolo entero.

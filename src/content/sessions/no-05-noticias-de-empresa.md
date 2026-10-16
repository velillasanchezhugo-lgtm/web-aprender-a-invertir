---
title: Dividendos, ampliaciones, splits y OPA
description: Qué significan las noticias corporativas más habituales, qué pasa con el precio y con tus acciones, y cuáles exigen que hagas algo.
level: basico
track: noticias
order: 405
skills: [eventos-corporativos, acciones]
goals: [entender, miedo]
prereqs: [no-04-buenos-resultados-y-cae]
hook: "Tu acción amanece un 2,5 % más barata sin ninguna mala noticia. ¿Has perdido dinero?"
takeaway: "Dividendos y splits reparten o trocean lo que ya tenías: no crean valor de golpe. Ampliaciones y OPA sí pueden pedirte una decisión: lee siempre el folleto en la CNMV."
scenario:
  kind: noticia
  label: Noticia de ejemplo
  title: "Aceites del Sur paga 0,50 € de dividendo y aprueba un split; Grupo Faro lanza una OPA sobre Conservas Atlántico"
  body: "Aceites del Sur S.A., que cotiza a 20 €, pagará un dividendo bruto de 0,50 € por acción; la fecha ex-dividendo es el 3 de noviembre. Su junta aprobó además un desdoblamiento (split) de 4 acciones nuevas por cada antigua y un programa de recompra del 2 % de su capital. Por otro lado, Grupo Faro ha anunciado una OPA sobre el 100 % de Conservas Atlántico S.A. a 15 € por acción en efectivo; ayer, antes del anuncio, Conservas cerró a 12 €. El plazo de aceptación se conocerá cuando la CNMV autorice la oferta."
  note: Noticia ficticia con fines educativos.
questions:
  - type: estimate
    id: no05-q1
    q: "Aceites del Sur cierra a 20,00 € el día antes de la fecha ex-dividendo. Si nada más cambia, ¿a qué precio teórico abrirá ese día, tras descontar el dividendo de 0,50 €?"
    answer: 19.5
    tolerance: 0.1
    min: 18
    max: 21
    step: 0.1
    unit: "€"
    explain: "20,00 − 0,50 = 19,50 € (−2,5 %). No has perdido: ese 0,50 € te llega como dinero, del que además se descuenta la retención de IRPF. Lo que tenías vale lo mismo, repartido entre acción y efectivo."
  - type: choice
    id: no05-q2
    q: "Tienes 100 acciones de Aceites del Sur a 20 € (2.000 €). Tras el split de 4 por 1, ¿qué tienes?"
    options: ["100 acciones a 80 €", "400 acciones a 5 €: siguen siendo 2.000 €", "400 acciones a 20 €: ahora 8.000 €", "100 acciones a 5 €"]
    answer: 1
    explain: "Un split solo trocea la empresa en más partes: cada acción vale una cuarta parte. Tu porcentaje y tu dinero no cambian. Un contrasplit hace lo contrario (agrupa) y tampoco cambia el valor."
  - type: choice
    id: no05-q3
    q: "La OPA ofrece 15 € y Conservas Atlántico cotizaba a 12 €. ¿Qué prima ofrece y qué tienes que hacer si tienes acciones?"
    options: ["Un 3 %; tus acciones se venden solas", "Un 25 %; acudir es voluntario y, si quieres, das la orden de aceptación en tu entidad dentro del plazo", "Un 20 %; estás obligado a vender", "Un 25 %; tienes que vender ya en bolsa"]
    answer: 1
    explain: "Prima = 15 / 12 − 1 = 25 %. Según la CNMV, acudir a una OPA siempre es voluntario y no acudir no te hace perder las acciones. Excepción: si la aceptan al menos el 90 % y se cumplen los requisitos, el oferente puede exigir la venta forzosa al precio de la OPA."
action:
  title: Revisa un evento corporativo real
  steps:
    - "Busca en la web de la CNMV o en la de relación con inversores de una cotizada española su último dividendo, ampliación u OPA."
    - "Anota la fecha clave (ex-dividendo, periodo de derechos o plazo de aceptación) y el importe."
    - "Calcula el efecto en el precio: dividendo restado, prima de la OPA o valor teórico del derecho."
  check: Sé qué significa un dividendo, un split, una ampliación o una OPA y si me exige actuar
deeper: productos-basicos
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-16
reviewed: 2026-10-16
status: revision-pendiente
jurisdiction: España
sources: [cnmv-opas, cnmv-dsp, rd-1066-2007-opas, boe-lsc, cnmv-cip-oir]
---

## La idea

Cinco noticias de empresa y lo que significan para ti:

- **Dividendo**: la empresa reparte caja. En la **fecha ex-dividendo** el precio baja más o menos lo que paga. No ganas ni pierdes ese día: pasas parte del valor a efectivo.
- **Split / contrasplit**: trocea o agrupa las acciones. **No cambia el valor** de lo que tienes.
- **Recompra de acciones**: la empresa compra sus propias acciones. Si las amortiza, cada acción restante representa un trozo algo mayor.
- **Ampliación de capital**: se emiten acciones nuevas. Si no acudes, tu porcentaje se **diluye**. Para compensarlo recibes **derechos de suscripción preferente**, que puedes usar o vender (cotizan al menos 15 días naturales). Si no das instrucciones, tu entidad suele venderlos por ti.
- **OPA**: alguien ofrece comprar las acciones a un precio, normalmente con **prima**. Acudir es **voluntario**; el plazo de aceptación va de 15 a 70 días naturales.

## Con números

Ampliación ficticia: **1 acción nueva por cada 4** que tengas, a **8 €**, con la acción cotizando a **12 €**.

| | Cálculo | Resultado |
|---|---|---:|
| Precio teórico tras la ampliación | (4 × 12 + 8) / 5 | 11,20 € |
| Valor teórico de cada derecho | 12 − 11,20 | 0,80 € |
| Tu porcentaje si no acudes | 4 / 5 del anterior | −20 % |

Si no acudes pero vendes tus derechos, recuperas en dinero lo que pierdes en precio. Si los dejas caducar, pierdes ese valor.

## Error frecuente

Comprar justo antes del dividendo «para cobrarlo gratis». El precio baja lo mismo y encima tributas por el dividendo.

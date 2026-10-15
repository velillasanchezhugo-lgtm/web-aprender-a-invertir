---
title: Cómo investigar un bróker y detectar fraudes
description: Comprueba quién presta el servicio, quién lo supervisa y qué te protege si quiebra. Y aprende las señales típicas de un chiringuito financiero.
level: inicial
topic: intermediarios
route: { id: desde-cero, order: 9 }
minutes: 10
learn:
  - Cómo identificar la entidad jurídica detrás de una marca comercial.
  - Cómo comprobar su autorización en los registros oficiales.
  - Qué cubren y qué no el FGD, el FOGAIN y los sistemas de otros países.
  - Qué señales indican un posible fraude.
prereqs: [comisiones-y-fiscalidad]
mistake: Creer que el Fondo de Garantía protege tus inversiones si caen. Los sistemas de garantía cubren la no devolución de tu dinero o tus valores si la entidad falla, hasta un límite; nunca las pérdidas de mercado.
summary:
  - Detrás de cada aplicación hay una entidad jurídica con país, supervisor y número de registro; búscala y compruébala en el registro oficial.
  - Una entidad de otro país de la UE puede operar en España con sucursal o en libre prestación; su sistema de indemnización puede ser el de su país, con coberturas distintas.
  - El FGD cubre depósitos hasta 100.000 € y, por separado, la no devolución de valores en entidades de crédito hasta 100.000 €; el FOGAIN cubre clientes de empresas de servicios de inversión hasta 100.000 €.
  - Rentabilidades garantizadas altas, prisa, contacto no solicitado y pagos a cuentas extrañas son señales de alarma.
quiz:
  - q: "Tus acciones, depositadas en una entidad solvente, caen un 30 % por una crisis bursátil. ¿Te cubre el FGD o el FOGAIN?"
    options: ["Sí, hasta 100.000 €", "No: cubren la no devolución por fallo de la entidad, no las caídas de precio", "Solo si las acciones son españolas"]
    answer: 1
    explain: "Las garantías actúan si la entidad no puede devolverte lo que es tuyo. La pérdida de mercado es un riesgo de la inversión, no de la entidad."
  - q: "Una entidad no aparece en las advertencias de la CNMV. ¿Significa que está autorizada?"
    options: ["Sí", "No: hay que comprobarlo en los registros oficiales de entidades autorizadas", "Solo si tiene web en español"]
    answer: 1
    explain: "La propia CNMV advierte que no figurar en sus advertencias no equivale a estar autorizado. Lo que cuenta es el registro."
  - q: "¿Qué señal es típica de un chiringuito financiero?"
    options: ["Publicar sus tarifas y su número de registro", "Prometer rentabilidades altas sin riesgo y presionar para invertir ya", "Pedir que hagas un test de conveniencia"]
    answer: 1
    explain: "Las promesas de alta rentabilidad garantizada y la urgencia son las señales más habituales. Una entidad autorizada debe evaluar tus conocimientos antes de venderte productos complejos."
next: checklist-antes-de-invertir
related: [comisiones-y-fiscalidad]
tools: [comparador-comisiones]
author: Redacción de Criterio (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-15
reviewed: 2026-10-15
status: revision-pendiente
jurisdiction: España y UE (servicios transfronterizos)
sources: [cnmv-entidades, cnmv-chiringuitos, cnmv-fogain, fgd-home, fgd-valores, bde-registro, degiro-seguridad, ibkr-other]
---

## Explicación

### 1. ¿Quién te presta el servicio?

La marca que ves en la aplicación no siempre coincide con la entidad que te presta el servicio. Busca en el aviso legal y en el contrato:

- **Denominación social** completa (por ejemplo, «Interactive Brokers Ireland Limited», no solo «Interactive Brokers»).
- **País** y **supervisor** principal.
- **Número de registro** ante ese supervisor.
- Si opera en España mediante **sucursal** o en **libre prestación de servicios** desde otro país de la UE.

### 2. Compruébalo en los registros oficiales

- **CNMV**: registros de entidades autorizadas para prestar servicios de inversión en España, incluidas las de otros países de la UE que operan aquí.
- **Banco de España**: registro de entidades de crédito.
- El **supervisor del país de origen**, si la entidad es extranjera (por ejemplo, el Banco Central de Irlanda o la BaFin alemana).

Comprueba que el dominio web y los datos coinciden con los del registro. La CNMV advierte de **clones**: entidades falsas que copian el nombre de una autorizada.

### 3. Qué te protege si la entidad falla

| Sistema | Qué cubre | Límite |
|---|---|---|
| [FGD](/es/glosario/#fgd), depósitos | Dinero en entidades de crédito españolas adheridas | 100.000 € por titular y entidad |
| FGD, valores | No devolución de valores depositados en entidades de crédito adheridas | 100.000 € por depositante y entidad, independiente del de depósitos |
| [FOGAIN](/es/glosario/#fogain) | No devolución de dinero o valores por empresas de servicios de inversión españolas adheridas | 100.000 € por inversor |
| Sistemas de otros países de la UE | Según el país de la entidad | El mínimo europeo es 20.000 €; por ejemplo, el alemán cubre el 90 % hasta 20.000 € |

Lo más importante:

- **Ninguno cubre pérdidas de mercado.** El FGD lo dice expresamente: no cubre las pérdidas de valor de los títulos, solo su no devolución.
- La primera protección es la **segregación**: tus valores deben estar separados del patrimonio de la entidad. Si la entidad quiebra, en la mayoría de los casos los valores se traspasan a otra.
- Los **CFD y otros derivados** son contratos con la entidad, no activos tuyos depositados. Su protección es distinta (ver la lección sobre derivados).

### 4. Señales de alarma

- Te contactan sin que lo pidas (llamada, redes sociales, mensajería).
- Prometen rentabilidades altas y estables, o «sin riesgo».
- Te meten prisa: «la oferta acaba hoy».
- Piden que pagues a una cuenta personal, en criptoactivos o a un país distinto del de la entidad.
- Te piden instalar programas de acceso remoto o te ofrecen «recuperar» dinero perdido a cambio de una comisión.
- No encuentras la entidad en ningún registro oficial, o los datos no coinciden.

Si dudas, consulta a la CNMV (teléfono de atención al inversor: 900 535 015) antes de enviar dinero.

## Ejemplo numérico

Carmen tiene 60.000 € en un intermediario A: 10.000 € en efectivo y 50.000 € en acciones y ETF.

- **Mercado**: si los ETF caen un 20 %, su cartera pasa a 40.000 € de valores. Ninguna garantía cubre esos 10.000 € de pérdida.
- **Fallo de la entidad**: si A quebrara y, en un caso extremo, no pudiera devolverle parte de sus valores, la cobertura dependería del sistema aplicable. Con un sistema español de 100.000 €, quedaría cubierta. Con un sistema que compensa el 90 % hasta 20.000 €, la compensación máxima sería de 20.000 € por los valores no devueltos.
- **El efectivo** tiene su propia garantía de depósitos (normalmente hasta 100.000 €), que depende de en qué banco esté depositado.

Por eso merece la pena saber dónde está cada parte de tu dinero y qué sistema lo cubre. Las fichas del [comparador](/es/brokers/) recogen esta información para cada intermediario analizado.

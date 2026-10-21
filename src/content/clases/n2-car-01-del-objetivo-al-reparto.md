---
title: Del objetivo al reparto
description: "Cómo se pasa de un objetivo y un plazo a un reparto entre liquidez, renta fija y bolsa, y cómo se ordenan varias metas a la vez con el método de los cubos."
tier: 2
format: clase
module: car
order: 1
minutes: 20
access: sample
skills: [asignacion-por-etapas]
terms: [asignacion-de-activos, horizonte-temporal, perfil-de-riesgo, fondo-de-emergencia, renta-fija, renta-variable, volatilidad, rebalanceo]
hook: "«Mi cuñado dice que, si eres joven, lo inteligente es tenerlo todo en bolsa. Pero yo tengo 32 años, quiero cambiar de coche en dos años y también ahorrar para jubilarme. ¿Todo en bolsa también?»"
objectives:
  - "Al terminar sabrás explicar por qué el reparto de una cartera se decide a partir del objetivo y del plazo, y no a partir de la edad ni del producto de moda."
  - "Al terminar sabrás separar varios objetivos de una misma persona en «cubos», cada uno con su propio plazo y su propio nivel de riesgo."
  - "Al terminar sabrás distinguir capacidad, tolerancia y necesidad de riesgo, y usarlas para razonar un reparto sin recomendar productos."
teach:
  tresFrases:
    - "El reparto entre liquidez, renta fija y bolsa se decide por el objetivo y por cuándo vas a necesitar el dinero, no por lo que está subiendo."
    - "Si tienes varios objetivos, cada uno va en su propio cubo con su propio plazo: el dinero del coche de dentro de dos años no se invierte como el de la jubilación."
    - "Cuanto más cerca está la meta, menos riesgo puede asumir ese cubo, porque queda menos tiempo para recuperarse de una caída."
  analogia: "Piensa en las maletas de un viaje largo con varias paradas. Lo que necesitas mañana va en la mochila de mano, a la vista. Lo de la semana que viene, en la maleta de cabina. Lo que solo usarás al final del viaje puede ir facturado, aunque tarde en llegar. Cada objetivo es una parada, y cada maleta se prepara pensando en cuándo la vas a abrir."
  dudas:
    - q: "¿No sería más sencillo tener una sola cartera para todo?"
      a: "Puede gestionarse en una sola cuenta, pero conviene pensarla por partes. Si mezclas el dinero del coche con el de la jubilación, una caída de la bolsa justo antes de comprar el coche te obliga a vender en mal momento. Separarlo en cubos evita esa trampa."
    - q: "¿La edad no decide el reparto?"
      a: "La edad influye porque suele ir unida al plazo hasta la jubilación, pero no decide sola. Una persona de 25 años que necesita el dinero el año que viene no debería invertirlo como si faltaran 40 años. Manda el plazo de cada objetivo."
    - q: "¿Y si puedo aguantar mucho riesgo porque no me ponen nerviosa las caídas?"
      a: "Eso es tolerancia al riesgo, y es solo una de las tres patas. También cuenta la capacidad, es decir, si podrías asumir la pérdida sin dañar tu vida, y la necesidad, es decir, cuánto riesgo hace falta de verdad para llegar a la meta. Si una pata dice «menos», se suele hacer caso a la más prudente."
  errorPrincipiante: "Elegir primero el producto («me han hablado bien de este fondo») y buscarle después un objetivo. El orden correcto es el contrario: objetivo, plazo, riesgo que puedes asumir y, solo al final, qué tipo de producto encaja."
  frontera: "Puedes explicar el método de los cubos y cómo cambia el papel de cada tipo de activo según el plazo. Lo que no haces es fijar el reparto de una persona real a partir de sus datos ni decirle qué fondos comprar para cada cubo. Eso ya es una recomendación personalizada y requiere un test de idoneidad hecho por una entidad autorizada."
explainPrompt: "Explícale a alguien de nivel 1, en 3 a 5 frases, por qué el dinero que necesitará en dos años no debería invertirse igual que el de su jubilación. Usa la idea de los cubos, no des porcentajes ni nombres de productos y termina con una pregunta que le ayude a ordenar sus propios objetivos."
summary:
  - "El reparto de una cartera se decide en este orden: objetivo, plazo, riesgo que se puede asumir y, al final, tipo de producto."
  - "A plazos cortos manda la seguridad; a plazos largos la bolsa tiene tiempo para recuperarse de las caídas."
  - "Con varios objetivos, cada uno va en su propio cubo, con su plazo y su nivel de riesgo."
  - "El colchón de emergencia no es un cubo de inversión: es la base que se tiene antes de invertir."
  - "El riesgo adecuado sale de tres patas: capacidad, tolerancia y necesidad; si no coinciden, se suele seguir la más prudente."
  - "Al acercarse la meta, el cubo correspondiente va bajando su riesgo de forma gradual y planificada."
questions:
  - type: choice
    id: n2car01-q1
    q: "¿En qué orden se razona el reparto de una cartera?"
    options:
      - "Producto que más ha subido, objetivo y plazo."
      - "Objetivo, plazo, riesgo que se puede asumir y tipo de producto."
      - "Edad, producto recomendado por un conocido y riesgo."
    answer: 1
    explain: "Primero se sabe para qué es el dinero y cuándo se necesitará; con eso se decide cuánto riesgo cabe y, solo al final, qué tipo de producto encaja."
  - type: truefalse
    id: n2car01-q2
    q: "Si una persona tiene varios objetivos con plazos distintos, lo razonable es pensar cada uno como un cubo con su propio nivel de riesgo."
    answer: true
    explain: "Cada objetivo tiene su propio plazo. Separarlos evita, por ejemplo, tener que vender bolsa tras una caída para pagar algo que llega pronto."
  - type: choice
    id: n2car01-q3
    q: "Una persona dice que las caídas no le ponen nerviosa, pero si perdiera ese dinero no podría pagar el alquiler. ¿Qué pata del riesgo falla?"
    options:
      - "La tolerancia."
      - "La capacidad."
      - "La necesidad."
    answer: 1
    explain: "La tolerancia es cómo vive las caídas; la capacidad es si puede permitirse perder sin dañar su vida. Aquí la tolerancia es alta, pero la capacidad es baja, y se suele seguir la pata más prudente."
  - type: choice
    id: n2car01-q4
    q: "En el caso práctico, ¿por qué el cubo del coche de Marta, para dentro de dos años, no lleva bolsa?"
    options:
      - "Porque la bolsa siempre da menos que un depósito."
      - "Porque, con solo dos años, una caída de la bolsa podría coincidir con la compra y no daría tiempo a recuperarse."
      - "Porque Marta es demasiado joven para invertir en bolsa."
    answer: 1
    explain: "No es que la bolsa sea mala: es que dos años es poco tiempo. Si llega una caída justo antes de comprar el coche, Marta tendría que vender con pérdidas."
  - type: choice
    id: n2car01-q5
    q: "En el caso práctico, ¿qué ocurre con el cubo de la entrada del piso, para dentro de unos siete años, a medida que pasa el tiempo?"
    options:
      - "Va bajando su riesgo poco a poco conforme se acerca la fecha de compra."
      - "Sube su riesgo para intentar llegar antes a la meta."
      - "Se mantiene igual hasta el último día y después se vende todo de golpe."
    answer: 0
    explain: "Al acercarse la meta queda menos tiempo para recuperarse de una caída, así que la parte de bolsa de ese cubo se va reduciendo de forma gradual y planificada."
  - type: truefalse
    id: n2car01-q6
    q: "En el caso práctico, el colchón de emergencia de Marta es uno de sus tres cubos de inversión."
    answer: false
    explain: "El colchón no es un cubo de inversión: es la base que Marta ya tiene apartada antes de invertir, en dinero disponible y sin riesgo. Sus tres cubos son el coche, la entrada del piso y la jubilación."
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-21
reviewed: 2026-10-21
status: revision-pendiente
jurisdiction: España
sources: [cnmv-inversor, cnmv-mifid-infografia, cnmv-guia-fondos, markowitz-1952]
---

## Primero el objetivo, después el producto

Cuando alguien empieza a invertir, casi siempre empieza por el producto: «¿qué fondo compro?». Es empezar la casa por el tejado.

La **asignación de activos** es el reparto del dinero entre grandes familias: liquidez (cuentas y depósitos), renta fija (bonos y fondos de bonos) y renta variable (acciones y fondos de bolsa). Ese reparto explica buena parte de cómo se comportará la cartera: cuánto puede subir, cuánto puede caer y cómo de tranquilo vas a dormir.

Para decidirlo, el orden es siempre el mismo:

1. **Objetivo.** ¿Para qué es este dinero? Un coche, una entrada, la jubilación, los estudios de un hijo.
2. **Plazo.** ¿Cuándo lo vas a necesitar? Es el **horizonte temporal**.
3. **Riesgo que puedes asumir.** Cuánto puede bajar sin que cambies de plan ni dañes tu vida.
4. **Tipo de producto.** Solo ahora tiene sentido mirar qué categoría encaja.

Antes de todo eso hay una base que no es inversión: el **fondo de emergencia** y las deudas caras resueltas. Sin esa base, cualquier imprevisto te obliga a vender lo invertido en el peor momento.

Este orden sirve para enseñar porque es fácil de recordar y porque desactiva el error más habitual: elegir algo porque ha subido mucho y buscarle después una excusa.

## El horizonte manda

El plazo es la variable que más pesa en el reparto. La razón es sencilla: la bolsa cae a menudo, a veces mucho, y necesita tiempo para recuperarse. Si el dinero hace falta pronto, ese tiempo no existe.

| Plazo del objetivo | Qué importa más | Papel habitual de cada familia |
|---|---|---|
| **Menos de 3 años** | Que el dinero esté cuando lo necesites | Predomina la liquidez y la renta fija de plazo corto; la bolsa, si aparece, tiene un papel muy pequeño o ninguno. |
| **De 3 a 10 años** | Equilibrio entre crecer y no llevarse un susto al final | Mezcla de renta fija y bolsa, que se va inclinando hacia la renta fija al acercarse la fecha. |
| **Más de 10 años** | Crecer por encima de la inflación | La bolsa suele tener el papel principal; la renta fija amortigua la **volatilidad**. |

Fíjate en que la tabla no da porcentajes. A propósito: el reparto concreto depende de cada persona y de cada objetivo, y fijarlo para alguien real ya es asesorar. Lo que sí puedes enseñar es la lógica: a menos plazo, menos riesgo.

Un matiz importante para explicarlo bien: en el largo plazo, tener demasiado poco riesgo también es un riesgo. Si el dinero de la jubilación está todo en liquidez durante 30 años, la inflación se come su poder de compra. Prudente no es lo mismo que inmóvil.

## Varios objetivos a la vez: el método de los cubos

La mayoría de las personas no tiene un objetivo, sino varios a la vez. El método de los cubos consiste en tratar cada uno por separado.

- Cada objetivo tiene **su propio cubo**, con su plazo y su nivel de riesgo.
- El dinero de un cubo **no se usa** para otro sin decidirlo de forma consciente.
- Cada cubo se revisa por su cuenta y **va bajando el riesgo** a medida que se acerca su meta.

| Cubo | Plazo | Riesgo | Pregunta de control |
|---|---|---|---|
| Corto | Pocos años | Bajo | ¿Estará el dinero entero cuando lo necesite? |
| Medio | Varios años | Moderado y decreciente | ¿Estoy bajando el riesgo según se acerca la fecha? |
| Largo | Décadas | Más alto | ¿Puedo aguantar caídas fuertes sin vender? |

Los cubos pueden vivir en una misma cuenta o en varias; lo importante es pensarlos por separado. Esa separación tiene también un efecto psicológico muy útil: cuando la bolsa cae, la persona sabe que solo afecta al cubo largo, el que tiene tiempo para recuperarse, y le cuesta menos mantener el plan.

Bajar el riesgo al acercarse la meta se hace de forma **gradual y planificada**, no de golpe ni según las noticias. Algunos fondos llamados «de ciclo de vida» o «con fecha objetivo» automatizan esa bajada; lo verás en la próxima clase.

## Capacidad, tolerancia y necesidad de riesgo

Dentro de cada cubo, el plazo marca el máximo de riesgo razonable. Pero hay tres preguntas más que lo ajustan.

| Pata | Pregunta | Ejemplo |
|---|---|---|
| **Capacidad** | ¿Puedes permitirte perder sin dañar tu vida? | Ingresos estables y colchón amplio dan más capacidad que un contrato temporal sin ahorros. |
| **Tolerancia** | ¿Cómo vives las caídas? ¿Venderías asustado? | Hay quien mira la cartera cada día y no duerme si baja. |
| **Necesidad** | ¿Cuánto riesgo hace falta de verdad para llegar a la meta? | Si ya tienes casi todo lo que necesitas, no hace falta arriesgar más. |

Cuando las tres patas no coinciden, la regla prudente es seguir la que pide menos riesgo. Una persona con mucha tolerancia pero poca capacidad no debería asumir el riesgo que le pide el cuerpo.

Las entidades que asesoran recogen esta información con el **test de idoneidad** y la resumen en un **perfil de riesgo**. Tú no haces ese test a nadie, pero sí puedes enseñar estas tres preguntas para que cada persona llegue a la conversación con su banco o su asesor sabiendo qué le van a preguntar y por qué.

## Caso práctico

> Ejemplo ficticio con fines educativos.

Marta tiene 32 años, trabajo estable y un colchón de emergencia de seis meses de gastos ya apartado en una cuenta. No tiene deudas caras. Quiere ordenar sus ahorros y tiene tres objetivos.

**Cubo 1: cambiar de coche dentro de dos años.** El plazo es corto y la fecha es bastante fija. Si la bolsa cayera justo antes de la compra, Marta tendría que vender con pérdidas o retrasar el coche. Por eso este cubo no lleva bolsa: se razona con liquidez y opciones que no puedan bajar de valor, comparando su rentabilidad y sus condiciones de salida.

**Cubo 2: la entrada de un piso dentro de unos siete años.** Hay tiempo para algo de crecimiento, pero no tanto como para olvidarse de las caídas. Este cubo combina renta fija y bolsa. Marta decide revisarlo cada año y, a partir del quinto año, ir pasando poco a poco la parte de bolsa a renta fija, para que una caída en el último tramo no le cambie los planes.

**Cubo 3: la jubilación, dentro de más de 30 años.** Es el cubo con más tiempo para recuperarse. Aquí la bolsa puede tener el papel principal, con una parte de renta fija para que las caídas sean más llevaderas. Marta tolera bien las caídas y tiene capacidad, porque los otros dos objetivos ya están cubiertos por sus propios cubos.

Cuando su compañero de trabajo le dice «a tu edad, todo en bolsa», Marta ya sabe responder: eso solo vale para el cubo de la jubilación. El dinero del coche y el de la entrada tienen otros plazos, y por eso otro reparto.

Fíjate en lo que este caso **no** hace: no da porcentajes ni nombres de fondos. El reparto exacto de una persona real depende de toda su situación y se decide con un test de idoneidad. Lo que enseña el caso es el razonamiento, que es lo que tú vas a poder explicar.

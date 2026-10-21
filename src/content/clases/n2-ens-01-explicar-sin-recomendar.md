---
title: Explicar sin recomendar
description: "La diferencia entre educar, informar y asesorar, y un método para responder a «¿qué compro?» con criterios útiles y sin recomendar productos a nadie."
tier: 2
format: clase
module: ens
order: 1
minutes: 20
access: sample
skills: [frontera-asesoramiento]
terms: [asesoramiento-independiente, mifid, test-de-idoneidad, test-de-conveniencia, perfil-de-riesgo, finfluencer, cnmv]
hook: "«Mi cuñado sabe que llevo años invirtiendo y me ha pedido que le diga en qué fondo meter los 20.000 € que tiene en la cuenta. ¿Se lo digo y ya está?»"
objectives:
  - "Al terminar sabrás distinguir educar, informar y asesorar, y por qué no son lo mismo ni ante la ley ni ante quien te escucha."
  - "Al terminar sabrás reconocer qué convierte una respuesta en una recomendación personalizada."
  - "Al terminar sabrás responder a «¿qué compro?» con preguntas, criterios y categorías, sin decirle a nadie qué producto comprar."
teach:
  tresFrases:
    - "Educar es explicar cómo funciona algo para que la otra persona decida mejor; asesorar es decirle a una persona concreta qué hacer con un producto concreto."
    - "Una respuesta se convierte en recomendación cuando se adapta a la situación de quien pregunta y le empuja a comprar, vender o mantener algo concreto."
    - "Ante «¿qué compro?», devuelve preguntas y criterios: para qué es el dinero, cuándo lo necesita, cuánto puede soportar ver caer y cuánto cuesta cada opción."
  analogia: "Un profesor de autoescuela te enseña a leer las señales, a mirar los espejos y a calcular distancias, pero no conduce por ti ni te dice a qué ciudad tienes que ir. Quien enseña inversión hace lo mismo: da el mapa y las reglas de circulación; el destino y el volante son de la otra persona."
  dudas:
    - q: "¿Es ilegal que le diga a un amigo lo que yo tengo en mi cartera?"
      a: "Contar lo que haces tú no es ilegal ni es asesoramiento por sí solo. Lo que la ley reserva a entidades autorizadas es asesorar de forma profesional o habitual. Aun así, decir «yo tengo esto» suele recibirse como «compra esto», así que conviene añadir siempre que tu situación no es la suya."
    - q: "Si no puedo decir productos, ¿no se queda la explicación en el aire?"
      a: "No. Puedes usar productos reales para enseñar a leer su documentación, comparar categorías (fondo indexado, fondo activo, depósito) y dar criterios concretos como fijarse en el coste total o en el indicador de riesgo. Lo que no haces es elegir por la otra persona."
    - q: "¿Y si la persona insiste en que le diga uno concreto?"
      a: "Explícale con calma por qué no lo haces: no conoces toda su situación y no eres un asesor autorizado. Ofrécele el siguiente paso útil: una lista de preguntas para su banco o asesor, o cómo comprobar en la CNMV que una entidad está autorizada."
  errorPrincipiante: "Creer que basta con añadir «esto no es una recomendación» al final. Si antes has dicho «con tu sueldo y tu edad, mete el dinero en este fondo», la frase final no cambia lo que has hecho: le has recomendado un producto a su medida."
  frontera: "Explicar categorías, enseñar a leer un KID y dar criterios generales es educar. Elegir un producto para una persona concreta teniendo en cuenta su edad, su dinero o sus objetivos es recomendar. Si alguna vez cobras por recomendar o por enlazar productos, el problema es doble: necesitas autorización y debes declarar el conflicto de interés."
explainPrompt: "Explícale a alguien que acaba de empezar, en 3 a 5 frases, por qué no le vas a decir qué fondo comprar y qué le vas a dar a cambio. Usa palabras sencillas, no menciones ningún producto concreto y termina con una pregunta que le ayude a pensar en su propio objetivo."
summary:
  - "Educar es explicar cómo funciona algo; informar es dar datos objetivos de un producto; asesorar es recomendar a una persona concreta qué hacer con un producto concreto."
  - "Una recomendación es personalizada cuando se basa en las circunstancias de quien pregunta o se le presenta como adecuada para él."
  - "Asesorar de forma profesional o habitual está reservado a entidades autorizadas e inscritas en la CNMV o el Banco de España."
  - "Ante «¿qué compro?», devuelve preguntas (objetivo, plazo, colchón, tolerancia a las caídas) y criterios (coste, riesgo, diversificación)."
  - "Poner «esto no es una recomendación» al final no arregla una respuesta que ya recomienda."
  - "Si cobras algo relacionado con lo que explicas, decláralo siempre junto a la explicación."
questions:
  - type: choice
    id: n2ens01-q1
    q: "¿Cuál de estas respuestas es educación y no asesoramiento?"
    options:
      - "«Con tus 30 años, mete los 20.000 € en este fondo indexado mundial.»"
      - "«Un fondo indexado copia un índice y suele cobrar menos que uno activo; mira en su KID los gastos corrientes y el indicador de riesgo.»"
      - "«Vende ya ese fondo del banco y pásate a este otro, que es mejor para ti.»"
    answer: 1
    explain: "La segunda respuesta explica cómo funciona una categoría y qué mirar, sin elegir por la otra persona. Las otras dos se adaptan a su situación y le dicen qué producto concreto comprar o vender."
  - type: truefalse
    id: n2ens01-q2
    q: "Si al final de un mensaje añades «esto no es una recomendación», ya no puede considerarse una recomendación."
    answer: false
    explain: "Lo que cuenta es el contenido. Si el mensaje elige un producto concreto para una persona concreta según su situación, es una recomendación aunque lleve esa frase al final."
  - type: choice
    id: n2ens01-q3
    q: "¿Qué elemento convierte una explicación general en una recomendación personalizada?"
    options:
      - "Que se mencione un tipo de producto, como «fondo indexado»."
      - "Que la respuesta se base en las circunstancias de quien pregunta y le diga qué hacer con un producto concreto."
      - "Que la explicación incluya una tabla o un ejemplo con cifras."
    answer: 1
    explain: "Hablar de categorías o usar ejemplos es educar. La recomendación personalizada une dos cosas: tener en cuenta la situación de esa persona y empujarla a comprar, vender o mantener un producto concreto."
  - type: choice
    id: n2ens01-q4
    q: "En el caso práctico, Irene pregunta: «Tengo 5.000 € y los necesito para la entrada de un piso dentro de un año, ¿en qué acciones los meto?». ¿Qué respuesta respeta la frontera y le ayuda de verdad?"
    options:
      - "«Mejor en este depósito del banco X, que da más.»"
      - "«No te digo dónde, pero un plazo de un año es muy corto para la bolsa: una caída te puede pillar justo cuando necesitas el dinero. Pregunta por opciones que no puedan bajar de valor y compara su rentabilidad y sus condiciones.»"
      - "«Compra acciones de una eléctrica, que son tranquilas.»"
    answer: 1
    explain: "La segunda respuesta explica la relación entre plazo y riesgo, que es un criterio general, y deja la elección a Irene. Las otras dos eligen un producto o un valor concreto por ella."
  - type: choice
    id: n2ens01-q5
    q: "En el caso práctico, Dani dice: «Un influencer me ha pasado un enlace para abrir cuenta en una plataforma y dice que es lo mejor». ¿Cuál es la respuesta más útil sin recomendar?"
    options:
      - "«Ese influencer sabe mucho, hazle caso.»"
      - "«Comprueba en los registros de la CNMV o del Banco de España si la entidad está autorizada, pregunta si el influencer cobra por ese enlace y compara costes con otras opciones.»"
      - "«Esa plataforma es mala, abre cuenta en esta otra.»"
    answer: 1
    explain: "La segunda respuesta da tres criterios generales: autorización, posible conflicto de interés del que recomienda y coste. No elige por Dani ni sustituye un producto por otro."
  - type: truefalse
    id: n2ens01-q6
    q: "Si recibes una comisión cuando alguien abre cuenta con tu enlace, debes decirlo de forma clara junto a la explicación."
    answer: true
    explain: "Cobrar por un enlace crea un conflicto de interés: puedes ganar más si la otra persona elige una opción concreta. Declararlo junto al enlace permite a quien te escucha valorar tu explicación con esa información."
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-21
reviewed: 2026-10-21
status: revision-pendiente
jurisdiction: España
sources: [boe-lmv, cnmv-mifid-infografia, cnmv-finfluencers-guia, cnmv-finfluencers-infografia, cnmv-entidades, cnmv-inversor]
---

## Educar, informar y asesorar

Cuando alguien te pregunta por inversión, puedes hacer tres cosas muy distintas, aunque desde fuera parezcan iguales.

| Qué haces | En qué consiste | Ejemplo |
|---|---|---|
| **Educar** | Explicar cómo funciona algo para que la otra persona entienda y decida por sí misma. | «Un fondo indexado copia un índice y suele cobrar poco.» |
| **Informar** | Dar datos objetivos de un producto, sin valorar si le conviene a nadie. | «Este fondo tiene un riesgo 4 sobre 7 según su KID.» |
| **Asesorar** | Recomendar a una persona concreta qué hacer con un producto concreto, teniendo en cuenta su situación. | «Con tus ahorros y tu edad, compra este fondo.» |

La diferencia no es de tono, es de responsabilidad. Quien educa da herramientas; quien asesora toma parte en una decisión ajena y responde de ella.

Por eso la ley española trata el asesoramiento como un **servicio de inversión**. La Ley 6/2023 de los Mercados de Valores reserva a las entidades autorizadas e inscritas en la CNMV o en el Banco de España prestar ese servicio de forma profesional o habitual. Y esas entidades, antes de recomendar, tienen que hacer un **test de idoneidad**: preguntar por tus conocimientos, tu situación financiera y tus objetivos.

Tú, como persona que enseña, no haces ese test ni tienes esa autorización. Tu terreno es educar e informar, y en ese terreno puedes ayudar muchísimo.

## Qué convierte una respuesta en una recomendación

Una respuesta pasa a ser una recomendación personalizada cuando se juntan dos ingredientes:

1. **Se basa en la situación de quien pregunta** o se le presenta como adecuada para él: su edad, su dinero, su plazo, su miedo a perder.
2. **Le empuja a hacer algo con un producto concreto**: comprar, vender, mantener o cambiar.

Si falta uno de los dos, normalmente estás educando. Explicar qué es un fondo monetario a un grupo es educación. Decirle a tu cuñado «con tus 20.000 €, mete la mitad en este fondo» es recomendación.

| Frase | ¿Qué es? | Por qué |
|---|---|---|
| «Los fondos indexados suelen ser baratos.» | Educación | Habla de una categoría, sin destinatario ni producto. |
| «Mira el indicador de riesgo del KID antes de firmar.» | Criterio general | Enseña qué mirar, no qué elegir. |
| «Yo tengo un fondo mundial indexado.» | Zona gris | Es tu caso, pero quien escucha puede tomarlo como consejo. Aclara que su situación es otra. |
| «Tú, que eres joven, ponlo todo en bolsa.» | Recomendación | Usa su situación y le dice qué hacer. |

La propia ley aclara que las recomendaciones genéricas y no personalizadas no son asesoramiento. Esa es la línea que te interesa: genérico y para todos, sí; a medida de una persona, no.

## Cómo responder a «¿qué compro?»

La pregunta más frecuente no tiene respuesta buena si contestas con un producto. Tiene respuesta muy buena si contestas con un método. Te proponemos cuatro pasos.

1. **Devuelve las preguntas que importan.** ¿Para qué es ese dinero? ¿Cuándo lo vas a necesitar? ¿Tienes colchón de emergencia y deudas caras resueltas? ¿Qué harías si en un año valiera un 30 % menos?
2. **Explica la relación entre plazo y riesgo.** Dinero a corto plazo y bolsa no suelen llevarse bien. A plazos largos, las caídas pesan menos.
3. **Habla de categorías y criterios, no de nombres.** Compara depósitos, fondos de renta fija, fondos indexados de bolsa; enseña a mirar coste total, riesgo, diversificación y divisa.
4. **Da el siguiente paso útil.** Una lista de preguntas para su banco, cómo comprobar en la CNMV que una entidad está autorizada o dónde encontrar el KID.

Este método tiene una ventaja que no es solo legal: la persona sale de la conversación sabiendo más que antes y pudiendo decidir sola. Si le das un nombre, solo sabe un nombre, y la próxima vez volverá a necesitarte.

Cuando la persona necesita de verdad que alguien estudie su caso entero, la respuesta honesta es decirlo: «Esto ya es para un asesor autorizado».

## Señales de que te estás pasando de la raya

Hay frases que avisan de que has dejado de educar. Si te oyes decir alguna, para y reformula.

| Señal | Reformulación |
|---|---|
| «Tú lo que tienes que hacer es…» | «Lo que suele mirarse en estos casos es…» |
| «Este fondo es el mejor.» | «Para comparar fondos, fíjate en el coste total, el riesgo y qué índice siguen.» |
| «Ahora es buen momento para entrar.» | «Nadie sabe qué hará el mercado mañana; por eso se habla de plazo y no de momento.» |
| «Esto no puede bajar.» | «Todo lo que puede subir puede bajar; mira el indicador de riesgo.» |

Dos situaciones merecen especial cuidado:

- **Si cobras algo.** Un enlace de afiliado, una comisión o un pago por hablar de una marca crean un conflicto de interés. Decláralo siempre junto a la explicación. La CNMV ha publicado una guía para finfluencers que recuerda estas obligaciones.
- **Si hablas en público.** Lo que cuentas en redes llega a personas que no conoces. Mantente aún más en lo general y no prometas rentabilidades.

## Caso práctico

> Ejemplo ficticio con fines educativos.

Laura invierte desde hace años y sus amigos lo saben. En una cena le hacen cinco preguntas. Así las contesta sin recomendar.

**1. Marcos: «¿Qué fondo me compro con 20.000 €?».** Laura no da un nombre. Le pregunta para qué es el dinero y cuándo lo necesitará. Marcos no lo sabe. Laura le dice que ese es el primer paso: sin objetivo y sin plazo, ningún fondo es bueno ni malo para él.

**2. Irene: «Necesito 5.000 € para la entrada de un piso dentro de un año, ¿en qué acciones los meto?».** Laura le explica que un año es muy poco para la bolsa: una caída puede coincidir con el momento de pagar. Le sugiere preguntar por opciones que no bajen de valor y comparar sus condiciones. No le dice cuál.

**3. Dani: «Un influencer me ha pasado un enlace para una plataforma y dice que es la mejor».** Laura le da tres comprobaciones: que la entidad esté inscrita en la CNMV o en el Banco de España, si el influencer cobra por ese enlace y cuánto cuesta frente a otras opciones.

**4. Sara: «Tú, ¿qué tienes?».** Laura le cuenta que tiene una cartera indexada sencilla, pero aclara que la montó para su situación y su plazo, que no son los de Sara. Le ofrece explicarle cómo se construye una, no copiarla.

**5. Pablo: «El banco me ofrece un fondo garantizado, ¿lo firmo?».** Laura no dice sí ni no. Le da cuatro preguntas para el banco: coste total anual, riesgo del 1 al 7, qué pasa si saca el dinero antes y si es un producto complejo. Y le anima a llevarse el KID a casa.

Al final de la cena nadie tiene un producto apuntado, pero todos saben qué preguntar. Esa es la diferencia entre educar y asesorar.

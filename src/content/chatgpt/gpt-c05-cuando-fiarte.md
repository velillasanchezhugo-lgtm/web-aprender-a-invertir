---
title: Cuándo fiarte (y cuándo no)
description: "Por qué ChatGPT puede inventarse datos con seguridad, qué es la fecha de corte, cómo usar la búsqueda con fuentes y cuándo ir a un profesional."
level: cero
track: gpt-cero
order: 5
skills: [gpt-limites, gpt-verificar]
terms: [alucinacion, fecha-de-corte, busqueda-en-chatgpt]
hook: "ChatGPT te da una lista de documentos para un viaje, con un tono seguro y bien ordenada. ¿Cómo sabes si está al día?"
takeaway: "ChatGPT puede inventarse datos, normas y fuentes con total seguridad, y lo que aprendió llega hasta una fecha. Para datos actuales, pide que busque y abre las fuentes; para lo que vas a usar, comprueba en la web oficial; en salud, derecho y dinero, un profesional decide."
scenario:
  kind: noticia
  label: Caso práctico
  title: El viaje de Lorena
  body: "Lorena viajará fuera de la UE con su hijo de 12 años y pregunta a ChatGPT qué documentos necesita. La respuesta llega sin fuentes. Le pide que lo busque y enlace la página oficial: allí ve que un requisito ha cambiado y otro faltaba."
  note: Ejemplo ficticio con fines educativos.
questions:
  - type: choice
    id: gpt-c05-q1
    q: "Lorena tiene la lista de documentos que le dio ChatGPT, sin fuentes, y viaja dentro de dos semanas. ¿Qué hace primero?"
    options: ["Preparar los papeles de la lista: está muy bien ordenada", "Pedirle a ChatGPT que confirme que la lista es correcta", "Comprobar los requisitos en la web oficial del Gobierno o del país de destino"]
    answer: 2
    explain: "Solo la fuente oficial confirma lo que vale hoy. Pedirle que confirme tienta, pero puede contestar «sí» con la misma seguridad. Que esté bien ordenada no dice nada de si es cierta."
  - type: truefalse
    id: gpt-c05-q2
    q: "Si la respuesta de ChatGPT trae enlaces a fuentes, ya no hace falta abrirlos."
    answer: false
    explain: "Un enlace puede no decir lo que ChatGPT resume, ser antiguo o no ser oficial. Tienta fiarse porque una fuente parece seria, pero solo cuenta si la abres y la lees."
  - type: choice
    id: gpt-c05-q3
    q: "A Antonio le llega una carta de Hacienda con un requerimiento y un plazo de diez días. ¿Qué papel tiene ChatGPT?"
    options: ["Decirle qué contestar y enviarlo tal cual", "Ayudarle a entender las palabras de la carta y a preparar preguntas para su asesor o para la Agencia Tributaria", "Ninguno: no debe ni leerla con ChatGPT"]
    answer: 1
    explain: "Entender el lenguaje y ordenar dudas es un buen uso; la respuesta a Hacienda, con plazo y consecuencias, la decide con un profesional o con la propia Agencia. Contestar lo que diga ChatGPT tienta por rapidez, pero un error ahí cuesta dinero."
tips:
  - "Para trámites, ayudas o requisitos, la fuente que vale es la web del organismo: Agencia Tributaria, Seguridad Social o tu comunidad autónoma."
  - "Pide que separe lo seguro de lo dudoso: «Marca lo que no puedas confirmar con una fuente». No sustituye a comprobar, pero orienta."
action:
  title: Caza una fuente
  steps:
    - "Pide a ChatGPT que busque en internet un dato actual que te interese (un plazo, un horario, un requisito) y que te dé el enlace oficial."
    - "Abre el enlace y comprueba si dice exactamente lo mismo."
    - "Apunta en «Mi kit de ChatGPT» la regla: «Lo que voy a usar, lo compruebo en la fuente»."
  check: He comprobado en la fuente original un dato que me dio ChatGPT
practice:
  task: "Quieres saber qué necesita tu hija de 16 años para coger sola un avión dentro de España. Escribe la petición para que ChatGPT lo busque en internet y te dé las fuentes oficiales."
  require: [verificar, formato]
  extra:
    - label: Pedir que busque en internet
      any: [busca, buscar, búsqueda, internet, en la web]
      hint: "Para datos que cambian, pide que lo busque: «Busca en internet…»."
  sample: "Busca en internet qué documentos necesita una menor de 16 años para viajar sola en avión dentro de España. Dame una lista corta con cada requisito y el enlace a la página oficial de donde lo sacas, por ejemplo de la aerolínea o de la Policía Nacional. Si algo depende de la compañía o no estás seguro, dímelo en vez de suponerlo."
deeper: null
tool: null
author: Equipo de umotion Academy (borrador elaborado con asistencia de IA)
reviewer: null
published: 2026-10-22
reviewed: 2026-10-22
status: revision-pendiente
jurisdiction: España
sources: [openai-ayuda, openai-condiciones-ue, openai-model-spec]
---

## La idea

ChatGPT escribe con la misma seguridad cuando acierta que cuando se equivoca. Hay dos motivos principales de error.

**1. Las alucinaciones.** Una **alucinación** es cuando la IA se inventa algo y lo presenta como cierto: una cifra, un requisito, el artículo de una ley o incluso una fuente. Pasa porque genera el texto que **parece** correcto.

**2. La fecha de corte.** El modelo aprendió de textos que llegan hasta una fecha, su **fecha de corte**. Lo que cambió después no lo sabe si no busca: puede darte como actual una norma, un precio o un requisito antiguo.

**Qué hacer:**

- Para datos **actuales**, usa la **búsqueda**: ChatGPT consulta páginas web y enlaza las fuentes. Está en el plan gratuito y en los de pago. A veces busca solo; si no, pídeselo.
- **Abre las fuentes.** Mira que sean oficiales y que digan lo mismo que el resumen.
- **Comprueba en la fuente original** todo lo que vayas a usar: entregar, firmar, pagar o enviar.

**Salud, derecho y dinero: un profesional decide.** ChatGPT te ayuda a **entender** un informe médico, un contrato o una carta de Hacienda y a preparar preguntas. La decisión, con un médico, un abogado o un asesor. Las propias condiciones de uso de OpenAI dicen que sus respuestas no sustituyen el consejo profesional. Ante una urgencia médica, el 112.

## En la práctica

Si la respuesta no muestra fuentes, pide la búsqueda por escrito («busca en internet…») o actívala desde las herramientas del chat. Luego abre los enlaces.

> Prueba: «Busca en internet el plazo para presentar la declaración de la renta este año en España. Dame la respuesta en una frase y el enlace a la página oficial de la Agencia Tributaria de donde lo sacas».

## Error frecuente

Preguntarle «¿estás seguro?» y quedarse tranquilo con su «sí». La comprobación se hace fuera del chat.

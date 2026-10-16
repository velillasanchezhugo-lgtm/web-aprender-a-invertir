# Plan de enseñanza de umotion Academy

**Idea clave**: enseñar de verdad a quien quiere aprender, con cosas útiles para invertir que pueda aplicar ese mismo día, sin quitarle mucho tiempo.

## 1. A quién nos dirigimos primero

Personas que empiezan de cero. Es el público más fácil de fidelizar: cada sesión les resuelve una duda real y les deja una acción concreta, y el hábito diario genera vuelta. Los niveles superiores existen para que no se vayan cuando avanzan.

## 2. El formato: la sesión de 5 minutos

Cada sesión sigue siempre la misma estructura, para que el usuario sepa qué esperar:

| Paso | Duración | Qué hace | Por qué |
|---|---|---|---|
| Pregunta para empezar | 15 s | Plantea una situación real («se te estropea el coche cuando la bolsa ha caído un 30 %…») | Activa la curiosidad y lo que ya sabe |
| La idea | 1–1,5 min | Una sola idea, explicada sin jerga | Una idea por sesión se recuerda; cinco, no |
| Con números | 1 min | Un ejemplo con cifras reales o verificadas | El dinero se entiende con números |
| Test (2–3 preguntas) | 1 min | Opción múltiple, verdadero o falso y **estimación con deslizador** | Recordar activamente fija más que releer; estimar obliga a pensar |
| Acción de hoy | 2 min | Algo práctico con su propio dinero: calcular su colchón, mirar la TAE de sus deudas, encontrar el coste de un fondo, comprobar un bróker | Convierte el aprendizaje en hábito y utilidad inmediata |
| Hecho | 15 s | Frase para recordar, aciertos, racha y siguiente sesión | Cierre claro y motivo para volver mañana |

Todas las sesiones enlazan a una lectura más profunda (nivel Básico) y, cuando procede, a una herramienta.

## 3. El Camino Cero: 14 sesiones, unas 2 semanas

| Bloque | Sesiones | Lo que sabrás | Acción práctica |
|---|---|---|---|
| **Tu base** | 1. Invertir no es apostar · 2. Tu número del mes · 3. El colchón, antes que la bolsa · 4. Las deudas caras, primero | Para qué inviertes, cuánto puedes apartar, cuánto colchón necesitas, qué deudas atacar | Escribir tu «para qué», calcular tu ahorro mensual, calcular tu colchón, ordenar tus deudas por TAE |
| **Cómo se mueve el dinero** | 5. La inflación te cobra · 6. El tiempo trabaja por ti · 7. Las caídas son normales · 8. No pongas todos los huevos en la misma cesta | Rentabilidad real, interés compuesto, asimetría de las caídas, diversificación | Comparar tu cuenta con el IPC, probar el interés compuesto, escribir tu plan ante una caída, mirar dentro de un fondo |
| **Productos y costes** | 9. Acciones, bonos, fondos y ETF · 10. El 1 % que se come un tercio · 11. Impuestos: lo justo | Qué compras, cuánto te cuesta, cuándo tributas, fondos frente a ETF | Encontrar un KID, localizar los costes de un fondo, saber si tu producto permite traspasos |
| **Protegerte** | 12. Comprueba un bróker en 3 minutos · 13. Detecta un fraude · 14. Tu lista antes de invertir | Entidad, supervisor y garantía; señales de estafa; lista final | Comprobar una entidad en la CNMV, guardar el teléfono de la CNMV, completar tu lista |

Cierre: **examen del nivel Cero** (14 preguntas, una por sesión; se aprueba con el 80 %).

## 4. Planificación según el objetivo

El asistente `/es/empezar/` pregunta objetivo, minutos al día (5, 10 o 15), días y hora, y ofrece una prueba de nivel de 6 preguntas.

- **Orden**: se respetan los prerrequisitos de cada sesión y se adelantan 3 puestos las que encajan con el objetivo. Por ejemplo, con «Ahorrar para algo concreto» llegan antes el número del mes, el colchón y los impuestos.
- **Ritmo**: 5 min = 1 sesión; 10 min = 2; 15 min = 3 por día de estudio. Cada día incluye repaso.
- **Prueba de nivel**: lo que la persona ya domina **no se elimina**: pasa al final del plan como repaso.
- **Calendario**: se descarga un `.ics` con un recordatorio por sesión a la hora elegida.

La lógica está en `src/lib/academy.ts` y tiene pruebas automáticas.

## 5. Retención: por qué vuelven

1. **Repaso espaciado (Leitner)**: lo fallado vuelve mañana; lo acertado, a los 3, 7, 14 y 30 días. Un minuto al día en `/es/repaso/`.
2. **Racha de días** y **semana visual** en «Mi plan».
3. **Logros por comprender y ser constante** (primer paso, 3 y 7 días seguidos, 5 acciones, 10 conceptos dominados, Camino Cero, examen). **Nunca** por invertir, operar ni arriesgar.
4. **Término del día** e **idea para recordar**, distintos cada día.
5. **Acciones pendientes**: lo que no hiciste en la sesión te espera en «Mi plan».

## 6. Niveles

| Nivel | Formato | Contenido |
|---|---|---|
| 0 · Cero | 14 sesiones de 5 min | Camino Cero |
| 1 · Básico | 10 lecturas de 6–10 min y un ejercicio con dinero ficticio | Las mismas ideas con más profundidad |
| 2 · Intermedio | 9 lecturas y 2 estrategias | Largo plazo, indexación, asignación, renta fija, divisas, psicología, riesgo, órdenes |
| 3 · Avanzado | 4 lecturas y 2 estrategias | Estados financieros, valoración, análisis técnico, criptoactivos |
| 4 · Experto | 2 lecturas, 2 estrategias y casos | Apalancamiento, derivados, trading de corto plazo, fracasos y fraudes, siempre en simulación |

Cada nivel tiene examen. Subir de nivel significa comprender más, no operar más.

## 7. Cómo medir si enseña

Hoy todo se mide en el dispositivo del usuario y se le muestra a él: sesiones completadas, aciertos, conceptos dominados, acciones hechas y racha. Cuando haya analítica (con consentimiento y sin datos del test), las métricas que importan serían:

- Porcentaje que termina la sesión 1, la 7 y la 14.
- Retención a 1, 7 y 30 días.
- Aciertos en el repaso a los 7 días (aprendizaje real, no memoria inmediata).
- Acciones prácticas marcadas como hechas.

## 8. Próximas mejoras propuestas

1. **Convertir el nivel Básico en sesiones de 5 minutos** con el mismo formato (quedan las lecturas como profundización).
2. **Más tipos de pregunta**: ordenar pasos, emparejar conceptos y «¿qué harías?» con escenarios.
3. **Notificaciones web opcionales** (con permiso expreso) como alternativa al calendario.
4. **Sincronizar el progreso entre dispositivos** con una cuenta opcional, cuando exista un backend seguro.
5. **Contenido revisado por una persona experta**, con su nombre en cada sesión.
6. **Versión inglesa** (ver `VERSION-INGLESA.md`).

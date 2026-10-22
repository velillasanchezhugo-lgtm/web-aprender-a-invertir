# Formación Emprendimiento

Segunda formación de umotion Academy. Sigue el sistema común de `docs/ESTANDAR-FORMACIONES.pdf`: tres niveles, los mismos formatos, exámenes y precios que Inversión.

- Datos: `src/data/emprendimiento.json` (niveles, etapas, módulos, competencias, capacidades y temario de los niveles 2 y 3).
- Sesiones del Nivel 1: `src/content/emprendimiento/` (colección `emprendimiento`, mismo esquema que las de Inversión).
- Glosario: `src/data/glossary-emprendimiento/<módulo>.json`.
- Rutas: `/es/emprendimiento/` y debajo `nivel-1/`, `nivel-2/`, `nivel-3/`, `modulos/<id>/`, `sesion/<id>/`, `examen/` y `glosario/`.
- Progreso: se guarda en la clave `academy-emprendimiento`, aparte del de Inversión. Se sincroniza con la cuenta igual que el de Inversión.

## Los tres niveles

| Nivel | Título | Formato | Contenido |
|---|---|---|---|
| 1 · gratis | Emprender desde cero | Sesiones de 5 min | 69 sesiones en 10 módulos |
| 2 · Plan Avanzado | Saber de sobra para llevar tu negocio | Clases de 15-30 min | 46 clases, unas 17 h (solo temario) |
| 3 · Curso Profesional | Asesorar a empresas con criterio | Lecciones de 30-45 min | 35 lecciones y un proyecto, unas 21 h (solo temario) |

## Nivel 1: orden y jerarquía

Los módulos del núcleo van por orden de importancia: primero lo que más dinero o problemas cuesta si se hace mal.

- **Etapa A. Camino Cero del emprendedor (10 sesiones).** La idea, los clientes, los números, la caja, el colchón y lo que arriesgas. Termina con «Mi proyecto en una página».
- **Etapa B. Núcleo:**
  1. Elegir la forma jurídica (7)
  2. Darte de alta paso a paso (8)
  3. Impuestos del día a día (9)
  4. Seguridad Social y personas (7)
  5. Dinero para arrancar (7)
  6. Clientes, precio y ventas (6)
  7. Obligaciones legales (6)
- **Ampliación:** Crecer con cabeza (5) y Si las cosas van mal (4).

Cierre: examen de 30 preguntas sobre las 12 capacidades (Etapas A y B, aprobado con el 80 %) e insignia «Fundamentos de emprendimiento — umotion».

## Estado y revisión

Todas las sesiones son un **borrador elaborado con asistencia de IA** (`status: revision-pendiente`, `reviewer: null`). Antes de publicar, deben revisarlas una gestoría o un asesor fiscal y laboral, y un abogado mercantil en forma jurídica y cierre.

Cifras **comprobadas en octubre de 2026** al redactar (en fuentes oficiales o secundarias que coinciden; aun así deben verificarse):

- **Declaración censal:** modelo 036 único desde el 3-2-2025; el 037 ya no existe (Orden HAC/1526/2024).
- **Autónomos:**
  - tarifa plana de 80 €/mes durante 12 meses, ampliable 12 más si se gana menos del SMI;
  - requisito de 2 años sin alta (3 si ya se disfrutó);
  - hasta 6 cambios de base al año;
  - deducción por gastos genéricos del 7 % (3 % para societarios);
  - el alta en el RETA puede tramitarse hasta 60 días antes de empezar.
- **SMI 2026:** 1.221 €/mes en 14 pagas (Real Decreto 126/2026).
- **Impuesto sobre Sociedades 2026:**
  - general 25 %;
  - nueva creación 15 %;
  - microempresas 19 % en los primeros 50.000 € y 21 % en el resto;
  - empresas de reducida dimensión 23 %.
- **Factura verificable (VeriFactu):** 1-1-2027 para sociedades y 1-7-2027 para el resto (Real Decreto-ley 15/2025).
- **Factura electrónica entre empresas:** Real Decreto 238/2026; la fecha depende de la orden ministerial que la desarrolle.
- **Franquicia de IVA:** no existe en España con carácter general (Directiva 2020/285 sin transponer).
- **Pago único del paro:**
  - pedirlo antes del alta;
  - al menos 3 meses de prestación pendientes;
  - sin otro pago único en los 4 años anteriores.
- **Compatibilizar el paro con el trabajo por cuenta propia:** hasta 270 días.
- **ENISA:** fondos propios al menos iguales al préstamo, sin garantías.
- **Segunda oportunidad:** límite de deuda pública exonerable matizado por el Tribunal Supremo en 2026.
- **Plataforma europea de litigios en línea (ODR):** cerró el 20-7-2025.
- **Kit Digital:** sin convocatorias abiertas en 2026; se remite a acelerapyme.gob.es.

**Pendiente de confirmar** en fuente oficial (en el texto va sin cifra exacta o con «compruébalo»):

- Base mínima de cotización de los autónomos societarios en 2026.
- Plazo de baja en la Seguridad Social (en 2026 se habla de un posible cambio de 3 a 6 días).
- Tasas de la OEPM en 2026.
- Límites del procedimiento especial para microempresas.
- Plazos de los aplazamientos con Hacienda.
- Tope de la devolución de cuotas por pluriactividad.
- Coste de un empleado para la empresa: alrededor de un 32 % sobre el bruto (×1,35 con otros costes). Es una aproximación y conviene una herramienta con pruebas.
- Datos dados de memoria: incapacidad temporal (desde el día 4 al 60 % y desde el día 21 al 75 %), periodos de prueba y plazos mercantiles de la SL.

## Siguientes pasos propuestos

1. Revisión humana del Nivel 1, empezando por impuestos, Seguridad Social y forma jurídica.
2. Dos herramientas con pruebas: «Punto de equilibrio y margen» y «Coste de un empleado». Varias competencias las mencionan.
3. Muestras gratuitas de los niveles 2 y 3, como en Inversión (`access: sample`).
4. Adaptar «Empezar» (diagnóstico y plan) y «Repaso» para que también cubran Emprendimiento. Hoy solo cubren Inversión.

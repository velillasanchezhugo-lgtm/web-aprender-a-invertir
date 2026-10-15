# Preparar la versión inglesa

Estado actual: `/en/` es una página informativa con `noindex` y no aparece en el sitemap ni en hreflang.

## Principios

- Traducir contenido sobre España no lo hace aplicable a EE. UU. o al Reino Unido. Cada página inglesa debe indicar su jurisdicción en el campo `jurisdiction` (por ejemplo, «Spain (Spanish tax rules)»), o adaptarse con fuentes del país correspondiente.
- La precisión financiera se mantiene: misma revisión editorial, mismas fuentes o equivalentes oficiales.
- No se indexan traducciones incompletas ni páginas vacías.

## Pasos técnicos

1. Crear las colecciones en inglés (por ejemplo, `src/content/lessons-en/`) con el mismo esquema y un campo `translationOf` que apunte al *slug* español.
2. Crear las rutas en `src/pages/en/` (por ejemplo, `/en/lessons/[slug]/`) con formatos locales (`en-GB`: fechas, separadores decimales y moneda).
3. En `Base.astro`, pasar `alternates` con `[{ lang: 'es', href: … }, { lang: 'en', href: … }, { lang: 'x-default', href: … }]` **solo** para pares publicados y revisados. El sitemap incluye automáticamente los hreflang presentes en el HTML.
4. Añadir `'en'` a `LOCALES_PUBLISHED` en `src/config/site.ts` cuando haya contenido suficiente, y quitar el `noindex` de `/en/`.
5. Traducir también `quiz.json`, `glossary.json` y los textos de las herramientas (extraer cadenas a un diccionario por idioma).
6. Revisar la publicidad y el consentimiento para cada mercado (el requisito de CMP de Google se aplica al EEE, Reino Unido y Suiza).

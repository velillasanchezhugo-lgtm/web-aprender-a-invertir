// @ts-check
import { defineConfig } from 'astro/config';

// URL pública definitiva. Cámbiala con la variable de entorno SITE_URL al publicar.
const site = process.env.SITE_URL || 'https://criterio.example';

export default defineConfig({
  site,
  trailingSlash: 'always',
  build: { format: 'directory' },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
  prefetch: false,
  compressHTML: true,
});

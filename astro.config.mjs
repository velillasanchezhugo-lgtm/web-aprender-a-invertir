// @ts-check
import { defineConfig } from 'astro/config';
import rehypeTableWrap from './src/plugins/rehype-table-wrap.mjs';

// URL pública definitiva. Cámbiala con la variable de entorno SITE_URL al publicar.
const site = process.env.SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://umotion-academy.example');

export default defineConfig({
  site,
  trailingSlash: 'always',
  build: { format: 'directory' },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
  markdown: { rehypePlugins: [rehypeTableWrap] },
  prefetch: false,
  compressHTML: true,
});

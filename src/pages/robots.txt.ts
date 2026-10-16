import type { APIRoute } from 'astro';
import { SITE } from '../config/site';
export const GET: APIRoute = ({ site }) => new Response(
  SITE.indexable
    ? `User-agent: *\nAllow: /\nDisallow: /es/buscar/\nDisallow: /es/progreso/\nDisallow: /es/mi-plan/\nDisallow: /es/repaso/\n\nSitemap: ${new URL('/sitemap.xml', site).href}\n`
    : `# Versión prototipo: no rastrear hasta tener dominio definitivo (PUBLIC_INDEXABLE=true).\nUser-agent: *\nDisallow: /\n`,
  { headers: { 'Content-Type': 'text/plain' } });

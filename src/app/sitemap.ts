import { MetadataRoute } from 'next';

const BASE_URL = 'https://mac-consultores-site-clean.vercel.app';
const locales = ['es', 'en'];

type RouteDefinition = string | { es: string; en: string };

const routes: RouteDefinition[] = [
  '',
  '/about',
  '/about/confidencialidad-secreto',
  '/about/independencia-tecnica',
  '/about/legalidad-diligencia',
  '/about/transparencia-buena-fe',
  '/our-ceo',
  '/our-ceo/ejercicio-forense',
  '/our-ceo/nivel-academico-docencia',
  '/our-ceo/casacion-tutela-constitucional',
  '/services',
  '/services/penal',
  { es: '/services/constitucional', en: '/services/constitutional' },
  '/services/delitos-informaticos',
  '/services/consultoria-preventiva',
  '/services/empresas-extranjeras',
  '/services/legal-intelligence',
  '/services/legal-intelligence/monthly-brief',
  '/services/legal-intelligence/flash-alerts',
  '/services/international-cooperation',
  '/services/international-cooperation/local-counsel',
  '/services/international-cooperation/areas-cooperacion',
  '/services/international-cooperation/modelo-b2b',
  '/services/consular',
  { es: '/services/consular/practica-consular', en: '/services/consular/consular-practice' },
  { es: '/services/consular/gestion-documental', en: '/services/consular/document-management' },
  { es: '/services/consular/contratos-internacionales', en: '/services/consular/international-contracts' },
  { es: '/services/consular/materia-energetica', en: '/services/consular/energy-law' },
  { es: '/services/consular/representacion-judicial', en: '/services/consular/judicial-representation' },
  { es: '/services/consular/poderes-y-mandatos', en: '/services/consular/strategic-powers' },
  '/resources/economic-criminal-risk',
  '/resources/international-legal-services',
  '/resources/defense-documentation',
  '/blog',
  '/blog/amparo-garantia-vital',
  '/blog/criminalidad-economica',
  '/blog/detencion-in-fraganti-derecho-defensa',
  '/blog/regimen-poderes-cpc-copp',
  '/news',
  '/contact',
  '/legal',
  '/privacy',
  '/estrategia-teoria-del-caso',
  { es: '/seleccion-de-casos', en: '/case-selection' },
  '/estrategia-escenarios-representativos',
  '/probono-penal',
  '/probono-penal/reglamento',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  routes.forEach((routeDef) => {
    const esPath = typeof routeDef === 'string' ? routeDef : routeDef.es;
    const enPath = typeof routeDef === 'string' ? routeDef : routeDef.en;

    locales.forEach((locale) => {
      const currentPath = locale === 'en' ? enPath : esPath;
      const isHome = currentPath === '';
      const isBlogOrNews = currentPath === '/news' || currentPath === '/blog';
      const isHighPriority = currentPath.startsWith('/services') || currentPath === '/about' || currentPath === '/our-ceo';

      sitemapEntries.push({
        url: `${BASE_URL}/${locale}${currentPath}`,
        lastModified: new Date(),
        changeFrequency: isHome || isBlogOrNews ? 'weekly' : 'monthly',
        priority: isHome ? 1 : isHighPriority ? 0.8 : 0.5,
        alternates: {
          languages: {
            es: `${BASE_URL}/es${esPath}`,
            en: `${BASE_URL}/en${enPath}`,
          },
        },
      });
    });
  });

  return sitemapEntries;
}

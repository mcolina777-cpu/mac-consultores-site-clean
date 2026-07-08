import { MetadataRoute } from 'next';

const BASE_URL = 'https://mac-consultores-site-clean.vercel.app';
const locales = ['es', 'en'];

const routes = [
  '',
  '/about',
  '/our-ceo',
  '/services',
  '/services/consular',
  '/services/international-cooperation',
  '/blog',
  '/news',
  '/contact',
  '/legal',
  '/privacy',
  '/estrategia-teoria-del-caso',
  '/estrategia-escenarios-representativos',
  '/quienes-somos-detalle',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' || route === '/news' || route === '/blog' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : route.startsWith('/services') || route === '/about' || route === '/our-ceo' ? 0.8 : 0.5,
        alternates: {
          languages: {
            es: `${BASE_URL}/es${route}`,
            en: `${BASE_URL}/en${route}`,
          },
        },
      });
    });
  });

  return sitemapEntries;
}

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:locale(es|en)/consular-services',
        destination: '/:locale/services/consular',
        permanent: true,
      },
      {
        source: '/:locale(es|en)/international-cooperation',
        destination: '/:locale/services/international-cooperation',
        permanent: true,
      },
      {
        source: '/:locale(es|en)/services/local-counsel-venezuela',
        destination: '/:locale/services/empresas-extranjeras',
        permanent: true,
      },
      {
        source: '/services/local-counsel-venezuela',
        destination: '/es/services/empresas-extranjeras',
        permanent: true,
      },
      {
        source: '/:locale(es|en)/probono-penal/reglamento-completo',
        destination: '/:locale/probono-penal/reglamento',
        permanent: true,
      },
      {
        source: '/probono-penal/reglamento-completo',
        destination: '/es/probono-penal/reglamento',
        permanent: true,
      },
      // Consular Cross-URL 308 Permanent Redirects (evitar duplicidad y canibalización SEO)
      // 1. Cruces de slugs en inglés bajo /es -> hacia slug oficial en español
      {
        source: '/es/services/consular/consular-practice',
        destination: '/es/services/consular/practica-consular',
        permanent: true,
      },
      {
        source: '/es/services/consular/document-management',
        destination: '/es/services/consular/gestion-documental',
        permanent: true,
      },
      {
        source: '/es/services/consular/international-contracts',
        destination: '/es/services/consular/contratos-internacionales',
        permanent: true,
      },
      {
        source: '/es/services/consular/energy-law',
        destination: '/es/services/consular/materia-energetica',
        permanent: true,
      },
      {
        source: '/es/services/consular/judicial-representation',
        destination: '/es/services/consular/representacion-judicial',
        permanent: true,
      },
      {
        source: '/es/services/consular/strategic-powers',
        destination: '/es/services/consular/poderes-y-mandatos',
        permanent: true,
      },
      // 2. Cruces de slugs en español bajo /en -> hacia slug oficial en inglés
      {
        source: '/en/services/consular/practica-consular',
        destination: '/en/services/consular/consular-practice',
        permanent: true,
      },
      {
        source: '/en/services/consular/gestion-documental',
        destination: '/en/services/consular/document-management',
        permanent: true,
      },
      {
        source: '/en/services/consular/contratos-internacionales',
        destination: '/en/services/consular/international-contracts',
        permanent: true,
      },
      {
        source: '/en/services/consular/materia-energetica',
        destination: '/en/services/consular/energy-law',
        permanent: true,
      },
      {
        source: '/en/services/consular/representacion-judicial',
        destination: '/en/services/consular/judicial-representation',
        permanent: true,
      },
      {
        source: '/en/services/consular/poderes-y-mandatos',
        destination: '/en/services/consular/strategic-powers',
        permanent: true,
      }
    ];
  },
  async rewrites() {
    return [
      {
        source: '/en/case-selection',
        destination: '/en/seleccion-de-casos',
      },
      {
        source: '/en/services/constitutional',
        destination: '/en/services/constitucional',
      },
    ];
  },
};

export default nextConfig;

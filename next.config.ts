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

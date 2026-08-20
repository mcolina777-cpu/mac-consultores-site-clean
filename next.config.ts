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
        source: '/:locale(es|en)/services/constitucional',
        destination: '/:locale/services',
        permanent: false,
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

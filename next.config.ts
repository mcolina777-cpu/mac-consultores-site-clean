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
        source: '/:locale(es|en)/services/penal',
        destination: '/:locale/services',
        permanent: false,
      },
      {
        source: '/:locale(es|en)/services/constitucional',
        destination: '/:locale/services',
        permanent: false,
      }
    ];
  },
};

export default nextConfig;

import React from 'react';
import { getDictionary } from '@/i18n/getDictionary';
import ServiceT02View from '@/components/internacional/ServiceT02View';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const dict = await getDictionary(locale);
  const data = dict?.consular?.contratos_internacionales;

  const title = data?.meta_title || (isEs
    ? 'Estrategia Jurídico-Penal en Operaciones Empresariales | Mac Consultores Jurídicos & Asociados'
    : 'Corporate Criminal Strategy for Business Operations | Mac Consultores Jurídicos & Asociados');

  const description = data?.meta_desc || (isEs
    ? 'Investigación jurídica, elaboración de dictámenes y diseño de estrategias de prevención y respuesta para empresas y órganos de dirección.'
    : 'Legal research, preparation of legal opinions, and development of prevention and response strategies for companies and governing bodies.');

  const canonical = isEs
    ? 'https://mac-consultores-site-clean.vercel.app/es/services/consular/contratos-internacionales'
    : 'https://mac-consultores-site-clean.vercel.app/en/services/consular/international-contracts';
  const esUrl = 'https://mac-consultores-site-clean.vercel.app/es/services/consular/contratos-internacionales';
  const enUrl = 'https://mac-consultores-site-clean.vercel.app/en/services/consular/international-contracts';

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        es: esUrl,
        en: enUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Mac Consultores Jurídicos & Asociados',
      images: [
        {
          url: '/assets/img/logo-mac-og.jpg',
          width: 1200,
          height: 630,
          alt: 'Logo de Mac Consultores Jurídicos & Asociados',
        },
      ],
      locale: isEs ? 'es_VE' : 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/assets/img/logo-mac-og.jpg'],
    },
  };
}

export default async function ContratosInternacionalesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const data = dict?.consular?.contratos_internacionales;

  return <ServiceT02View locale={locale} data={data} />;
}

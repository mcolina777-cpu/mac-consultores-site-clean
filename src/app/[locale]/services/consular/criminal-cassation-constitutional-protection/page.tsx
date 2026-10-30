import React from 'react';
import { getDictionary } from '@/i18n/getDictionary';
import ServiceT04View from '@/components/internacional/ServiceT04View';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const dict = await getDictionary(locale);
  const data = dict?.consular?.casacion_tutela;

  const title = data?.meta_title || (isEs
    ? 'Casación Penal y Tutela Constitucional | Mac Consultores Jurídicos & Asociados'
    : 'Criminal Cassation and Constitutional Protection | Mac Consultores Jurídicos & Asociados');

  const description = data?.meta_desc || (isEs
    ? 'Investigación jurídica, construcción argumentativa y elaboración de recursos de casación penal, amparo constitucional y hábeas data.'
    : 'Legal research and argumentation for criminal cassation, constitutional protection writs, and habeas data in Venezuela.');

  const canonical = isEs
    ? 'https://mac-consultores-site-clean.vercel.app/es/services/consular/casacion-tutela-constitucional'
    : 'https://mac-consultores-site-clean.vercel.app/en/services/consular/criminal-cassation-constitutional-protection';
  const esUrl = 'https://mac-consultores-site-clean.vercel.app/es/services/consular/casacion-tutela-constitucional';
  const enUrl = 'https://mac-consultores-site-clean.vercel.app/en/services/consular/criminal-cassation-constitutional-protection';

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

export default async function CriminalCassationConstitutionalProtectionPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const data = dict?.consular?.casacion_tutela;

  return <ServiceT04View locale={locale} data={data} />;
}

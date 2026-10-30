import React from 'react';
import { getDictionary } from '@/i18n/getDictionary';
import ServiceT01View from '@/components/internacional/ServiceT01View';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const dict = await getDictionary(locale);
  const data = dict?.consular?.representacion_judicial;

  const title = data?.meta_title || (isEs
    ? 'Defensa Penal y Representación de Víctimas | Mac Consultores Jurídicos & Asociados'
    : 'Criminal Defense and Victim Representation | Mac Consultores Jurídicos & Asociados');

  const description = data?.meta_desc || (isEs
    ? 'Estrategia, investigación jurídica y actuación procesal en Venezuela para empresas, directivos y personas situadas en el exterior.'
    : 'Legal strategy, research, and procedural advocacy in Venezuela for corporations, executives, and individuals located abroad.');

  const canonical = isEs
    ? 'https://mac-consultores-site-clean.vercel.app/es/services/consular/representacion-judicial'
    : 'https://mac-consultores-site-clean.vercel.app/en/services/consular/judicial-representation';
  const esUrl = 'https://mac-consultores-site-clean.vercel.app/es/services/consular/representacion-judicial';
  const enUrl = 'https://mac-consultores-site-clean.vercel.app/en/services/consular/judicial-representation';

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

export default async function RepresentacionJudicialPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const data = dict?.consular?.representacion_judicial;

  return <ServiceT01View locale={locale} data={data} />;
}

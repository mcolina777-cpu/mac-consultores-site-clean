import React from 'react';
import { getDictionary } from '@/i18n/getDictionary';
import ServiceT05View from '@/components/internacional/ServiceT05View';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const dict = await getDictionary(locale);
  const data = dict?.consular?.extradicion;

  const title = data?.meta_title || (isEs
    ? 'Extradición y Coordinación Jurídica Internacional | Mac Consultores Jurídicos & Asociados'
    : 'Extradition and Cross-Border Legal Coordination | Mac Consultores Jurídicos & Asociados');

  const description = data?.meta_desc || (isEs
    ? 'Asesoría especializada, investigación normativa y jurisprudencial y elaboración de escritos en procedimientos de extradición.'
    : 'Specialized counsel, statutory research, and legal drafting in extradition proceedings connected to the Venezuelan legal system.');

  const canonical = isEs
    ? 'https://mac-consultores-site-clean.vercel.app/es/services/consular/extradicion-coordinacion-internacional'
    : 'https://mac-consultores-site-clean.vercel.app/en/services/consular/extradition-international-coordination';
  const esUrl = 'https://mac-consultores-site-clean.vercel.app/es/services/consular/extradicion-coordinacion-internacional';
  const enUrl = 'https://mac-consultores-site-clean.vercel.app/en/services/consular/extradition-international-coordination';

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

export default async function ExtradicionCoordinacionInternacionalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const data = dict?.consular?.extradicion;

  return <ServiceT05View locale={locale} data={data} />;
}

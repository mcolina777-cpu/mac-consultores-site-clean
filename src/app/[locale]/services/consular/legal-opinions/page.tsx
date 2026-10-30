import React from 'react';
import { getDictionary } from '@/i18n/getDictionary';
import ServiceT03View from '@/components/internacional/ServiceT03View';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const dict = await getDictionary(locale);
  const data = dict?.consular?.opiniones_juridicas;

  const title = data?.meta_title || (isEs
    ? 'Opiniones Jurídicas de Derecho Venezolano | Mac Consultores Jurídicos & Asociados'
    : 'Legal Opinions on Venezuelan Law | Mac Consultores Jurídicos & Asociados');

  const description = data?.meta_desc || (isEs
    ? 'Investigación normativa y jurisprudencial para decisiones institucionales, estrategias procesales y coordinación jurídica internacional.'
    : 'Statutory and case-law research for institutional decision-making, procedural strategies, and international legal coordination.');

  const canonical = isEs
    ? 'https://mac-consultores-site-clean.vercel.app/es/services/consular/opiniones-juridicas'
    : 'https://mac-consultores-site-clean.vercel.app/en/services/consular/legal-opinions';
  const esUrl = 'https://mac-consultores-site-clean.vercel.app/es/services/consular/opiniones-juridicas';
  const enUrl = 'https://mac-consultores-site-clean.vercel.app/en/services/consular/legal-opinions';

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

export default async function LegalOpinionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const data = dict?.consular?.opiniones_juridicas;

  return <ServiceT03View locale={locale} data={data} />;
}

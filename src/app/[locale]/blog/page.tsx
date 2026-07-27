import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';

type Props = {
  params: Promise<{ locale: string }>
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const isEs = locale === 'es';
  const title = dict?.seo?.blog?.title || (isEs ? 'Blog Jurídico | Mac Consultores' : 'Legal Blog | Mac Consultores');
  const description = dict?.seo?.blog?.description || (isEs 
    ? 'Firma jurídica boutique en Caracas especializada en derecho penal, constitucional y asesoría internacional de alta complejidad.' 
    : 'Boutique law firm in Caracas specializing in highly complex criminal law, constitutional law, and international consulting.');
  
  const url = `https://mac-consultores-site-clean.vercel.app/${locale}/blog`;
  const esUrl = `https://mac-consultores-site-clean.vercel.app/es/blog`;
  const enUrl = `https://mac-consultores-site-clean.vercel.app/en/blog`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        'es': esUrl,
        'en': enUrl,
      },
    },
    openGraph: {
      title: dict?.seo?.blog?.og_title || title,
      description: dict?.seo?.blog?.og_description || description,
      url,
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
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: dict?.seo?.blog?.og_title || title,
      description: dict?.seo?.blog?.og_description || description,
      images: ['/assets/img/logo-mac-og.jpg'],
    },
  };
}

export default async function BlogIndex({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main>
      <header className="page-header">
        <div className="container">
          <span className="breadcrumb">{dict?.blog?.breadcrumb}</span>
          <h1>{dict?.blog?.h1}</h1>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="grid-3">
            <article className="card">
              <span className="section-tag">{dict?.blog?.article1?.tag}</span>
              <h3>{dict?.blog?.article1?.title}</h3>
              <p>{dict?.blog?.article1?.desc}</p>
              <Link href={`/${locale}/blog/criminalidad-economica`} className="card-link">{dict?.blog?.readmore}</Link>
            </article>
            
            <article className="card">
              <span className="section-tag">{dict?.blog?.article2?.tag}</span>
              <h3>{dict?.blog?.article2?.title}</h3>
              <p>{dict?.blog?.article2?.desc}</p>
              <Link href={`/${locale}/blog/amparo-garantia-vital`} className="card-link">{dict?.blog?.readmore}</Link>
            </article>
            {/* Note: In backup, the 3rd card was El Régimen de Poderes en el CPC y el COPP */}
            <article className="card">
              <span className="section-tag">{dict?.blog?.article4?.tag}</span>
              <h3>{dict?.blog?.article4?.title}</h3>
              <p>{dict?.blog?.article4?.desc}</p>
              <Link href={`/${locale}/blog/regimen-poderes-cpc-copp`} className="card-link">{dict?.blog?.readmore}</Link>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

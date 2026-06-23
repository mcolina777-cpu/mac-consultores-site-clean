import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';

type Props = {
  params: Promise<{ locale: string }>
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return {
    title: dict?.seo?.blog?.title || 'Blog Jurídico | Mac Consultores Jurídicos & Asociados',
  };
}

export default async function BlogIndex({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main>
      <header className="page-header">
        <div className="container">
          <span className="breadcrumb">{dict?.blog?.breadcrumb || 'Actualidad / Análisis'}</span>
          <h1>{dict?.blog?.h1 || 'Blog Jurídico Estratégico'}</h1>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="grid-3">
            <article className="card">
              <span className="section-tag">{dict?.blog?.article_1?.tag || 'Análisis Penal'}</span>
              <h3>{dict?.blog?.article_1?.title || 'Evolución de la Criminalidad Económica'}</h3>
              <p>{dict?.blog?.article_1?.desc || 'Un análisis estratégico sobre cómo han evolucionado los delitos económicos...'}</p>
              <Link href={`/${locale}/blog/criminalidad-economica`} className="card-link">{dict?.blog?.read_more || 'LEER MÁS →'}</Link>
            </article>
            
            <article className="card">
              <span className="section-tag">{dict?.blog?.article_2?.tag || 'Constitucional'}</span>
              <h3>{dict?.blog?.article_2?.title || 'El Amparo como Garantía Vital'}</h3>
              <p>{dict?.blog?.article_2?.desc || 'Reflexiones sobre la eficacia de la tutela constitucional...'}</p>
              <Link href={`/${locale}/blog/amparo-garantia-vital`} className="card-link">{dict?.blog?.read_more || 'LEER MÁS →'}</Link>
            </article>
            {/* Note: In backup, the 3rd card was El Régimen de Poderes en el CPC y el COPP */}
            <article className="card">
              <span className="section-tag">{(dict?.blog as any)?.article_4?.tag || 'Procesal Penal'}</span>
              <h3>{(dict?.blog as any)?.article_4?.title || 'El Régimen de Poderes en el CPC y el COPP venezolano'}</h3>
              <p>{(dict?.blog as any)?.article_4?.desc || 'Actos procesales habilitados y acusación privada...'}</p>
              <Link href={`/${locale}/blog/regimen-poderes-cpc-copp`} className="card-link">{dict?.blog?.read_more || 'LEER MÁS →'}</Link>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

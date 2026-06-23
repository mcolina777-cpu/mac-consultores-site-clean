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
    title: dict?.seo?.blog?.title,
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
              <span className="section-tag">{dict?.blog?.article_1?.tag}</span>
              <h3>{dict?.blog?.article_1?.title}</h3>
              <p>{dict?.blog?.article_1?.desc}</p>
              <Link href={`/${locale}/blog/criminalidad-economica`} className="card-link">{dict?.blog?.read_more}</Link>
            </article>
            
            <article className="card">
              <span className="section-tag">{dict?.blog?.article_2?.tag}</span>
              <h3>{dict?.blog?.article_2?.title}</h3>
              <p>{dict?.blog?.article_2?.desc}</p>
              <Link href={`/${locale}/blog/amparo-garantia-vital`} className="card-link">{dict?.blog?.read_more}</Link>
            </article>
            {/* Note: In backup, the 3rd card was El Régimen de Poderes en el CPC y el COPP */}
            <article className="card">
              <span className="section-tag">{(dict?.blog as any)?.article_4?.tag}</span>
              <h3>{(dict?.blog as any)?.article_4?.title}</h3>
              <p>{(dict?.blog as any)?.article_4?.desc}</p>
              <Link href={`/${locale}/blog/regimen-poderes-cpc-copp`} className="card-link">{dict?.blog?.read_more}</Link>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

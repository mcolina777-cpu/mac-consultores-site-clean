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
    title: dict?.seo?.blog_criminalidad_economica?.title,
  };
}

export default async function BlogCriminalidadEconomica({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main>
      <header className="page-header">
        <div className="container">
          <span className="breadcrumb">
            <Link href={`/${locale}/blog`}>Blog</Link> / {dict?.articulo_crimen?.meta?.split(': ')[1]}
          </span>
          <h1>{dict?.articulo_crimen?.h1}</h1>
        </div>
      </header>

      <div className="container article-container">
        <article className="article-content">
          <p className="article-meta">{dict?.articulo_crimen?.meta}</p>

          <p>{dict?.articulo_crimen?.p1}</p>

          <h2>{dict?.articulo_crimen?.h2_1}</h2>

          <p>{dict?.articulo_crimen?.p2_1}</p>
          <p>{dict?.articulo_crimen?.p2_2}</p>
          <p>{dict?.articulo_crimen?.p2_3}</p>

          <h2>{dict?.articulo_crimen?.h2_2}</h2>

          <p>{dict?.articulo_crimen?.intro_2}</p>

          <h3>{dict?.articulo_crimen?.h3_2a}</h3>
          <p>{dict?.articulo_crimen?.p3_2a}</p>

          <h3>{dict?.articulo_crimen?.h3_2b}</h3>
          <p>{dict?.articulo_crimen?.p3_2b}</p>

          <h3>{dict?.articulo_crimen?.h3_2c}</h3>
          <p>{dict?.articulo_crimen?.p3_2c}</p>

          <h3>{dict?.articulo_crimen?.h3_2d}</h3>
          <p>{dict?.articulo_crimen?.p3_2d}</p>
          <p>{dict?.articulo_crimen?.p3_2e}</p>

          <h2>{dict?.articulo_crimen?.h2_3}</h2>

          <p>{dict?.articulo_crimen?.p2_3a}</p>

          <ul>
            <li><strong>{dict?.articulo_crimen?.li_1_strong}</strong> {dict?.articulo_crimen?.li_1_desc}</li>
            <li><strong>{dict?.articulo_crimen?.li_2_strong}</strong> {dict?.articulo_crimen?.li_2_desc}</li>
            <li><strong>{dict?.articulo_crimen?.li_3_strong}</strong> {dict?.articulo_crimen?.li_3_desc}</li>
            <li><strong>{dict?.articulo_crimen?.li_4_strong}</strong> {dict?.articulo_crimen?.li_4_desc}</li>
            <li><strong>{dict?.articulo_crimen?.li_5_strong}</strong> {dict?.articulo_crimen?.li_5_desc}</li>
          </ul>

          <p>{dict?.articulo_crimen?.p2_3b}</p>

          <h2>{dict?.articulo_crimen?.h2_4}</h2>
          <p>{dict?.articulo_crimen?.p2_4}</p>

          <h2>{dict?.articulo_crimen?.h2_5}</h2>
          <p>{dict?.articulo_crimen?.p2_5}</p>

          <h2>{dict?.articulo_crimen?.h2_6}</h2>
          <p>{dict?.articulo_crimen?.p2_6}</p>

          <h2>{dict?.articulo_crimen?.h2_7}</h2>
          <p>{dict?.articulo_crimen?.p2_7a}</p>
          <p>{dict?.articulo_crimen?.p2_7b}</p>
        </article>
      </div>
    </main>
  );
}

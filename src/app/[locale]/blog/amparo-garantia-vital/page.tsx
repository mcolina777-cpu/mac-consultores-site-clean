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
    title: dict?.blog_amparo?.h1 || 'Constitucional: El Amparo como Garantía Vital | Mac Consultores',
  };
}

export default async function BlogAmparo({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main>
      <header className="page-header">
        <div className="container">
          <span className="breadcrumb">
            <Link href={`/${locale}/blog`}>Blog</Link> / {dict?.blog_amparo?.meta?.split(': ')[1] || 'Constitucional'}
          </span>
          <h1>{dict?.blog_amparo?.h1}</h1>
        </div>
      </header>

      <div className="container article-container">
        <article className="article-content">
          <p className="article-meta">{dict?.blog_amparo?.meta}</p>
          <p>{dict?.blog_amparo?.p1}</p>
          
          <h2>{dict?.blog_amparo?.h2_1}</h2>
          <p>{dict?.blog_amparo?.p2_1}</p>
          <p>{dict?.blog_amparo?.p2_2}</p>
          <p>{dict?.blog_amparo?.p2_3}</p>
          
          <h2>{dict?.blog_amparo?.h2_2}</h2>
          <p>{dict?.blog_amparo?.p3_1}</p>
          
          <h3>{dict?.blog_amparo?.h3_1}</h3>
          <p>{dict?.blog_amparo?.p4_1}</p>
          
          <h3>{dict?.blog_amparo?.h3_2}</h3>
          <p>{dict?.blog_amparo?.p4_2}</p>
          
          <h3>{dict?.blog_amparo?.h3_3}</h3>
          <p>{dict?.blog_amparo?.p4_3}</p>
          
          <h3>{dict?.blog_amparo?.h3_4}</h3>
          <p>{dict?.blog_amparo?.p4_4}</p>
          
          <h2>{dict?.blog_amparo?.h2_3}</h2>
          <p>{dict?.blog_amparo?.p5_1}</p>
          
          <ul>
            <li><strong>{dict?.blog_amparo?.li_1_strong}</strong> {dict?.blog_amparo?.li_1_desc}</li>
            <li><strong>{dict?.blog_amparo?.li_2_strong}</strong> {dict?.blog_amparo?.li_2_desc}</li>
            <li><strong>{dict?.blog_amparo?.li_3_strong}</strong> {dict?.blog_amparo?.li_3_desc}</li>
          </ul>
          
          <p>{dict?.blog_amparo?.p5_2}</p>
          
          <h2>{dict?.blog_amparo?.h2_4}</h2>
          <p>{dict?.blog_amparo?.p6_1}</p>
          
          <h2>{dict?.blog_amparo?.h2_5}</h2>
          <p>{dict?.blog_amparo?.p7_1}</p>
          
          <h2>{dict?.blog_amparo?.h2_6}</h2>
          <p>{dict?.blog_amparo?.p8_1}</p>
          
          <h2>{dict?.blog_amparo?.h2_7}</h2>
          <p>{dict?.blog_amparo?.p9_1}</p>
          <p>{dict?.blog_amparo?.p9_2}</p>
        </article>
      </div>
    </main>
  );
}

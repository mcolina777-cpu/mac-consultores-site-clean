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
    title: dict?.blog_poderes?.h1 || 'Procesal Penal: El Régimen de Poderes en el CPC y el COPP | Mac Consultores',
  };
}

export default async function BlogPoderes({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main>
      <header className="page-header">
        <div className="container">
          <span className="breadcrumb">
            <Link href={`/${locale}/blog`}>Blog</Link> / {dict?.blog_poderes?.meta?.split(': ')[1] || 'Procesal Penal'}
          </span>
          <h1>{dict?.blog_poderes?.h1}</h1>
        </div>
      </header>

      <div className="container article-container">
        <article className="article-content">
          <p className="article-meta">{dict?.blog_poderes?.meta}</p>
          
          <p>{dict?.blog_poderes?.p1}</p>
          
          <h2>{dict?.blog_poderes?.h2_1}</h2>
          <p>{dict?.blog_poderes?.p2_1}</p>
          <p>{dict?.blog_poderes?.p2_2}</p>
          <p>{dict?.blog_poderes?.p2_3}</p>
          
          <h2>{dict?.blog_poderes?.h2_2}</h2>
          <p>{dict?.blog_poderes?.p3_1}</p>
          
          <h3>{dict?.blog_poderes?.h3_1}</h3>
          <p>{dict?.blog_poderes?.p4_1}</p>
          
          <h3>{dict?.blog_poderes?.h3_2}</h3>
          <p>{dict?.blog_poderes?.p4_2}</p>
          
          <h3>{dict?.blog_poderes?.h3_3}</h3>
          <p>{dict?.blog_poderes?.p4_3}</p>
          
          <h3>{dict?.blog_poderes?.h3_4}</h3>
          <p>{dict?.blog_poderes?.p4_4}</p>
          
          <h2>{dict?.blog_poderes?.h2_3}</h2>
          <p>{dict?.blog_poderes?.p5_1}</p>
          
          <ul>
            <li><strong>{dict?.blog_poderes?.li_1_strong}</strong> {dict?.blog_poderes?.li_1_desc}</li>
            <li><strong>{dict?.blog_poderes?.li_2_strong}</strong> {dict?.blog_poderes?.li_2_desc}</li>
            <li><strong>{dict?.blog_poderes?.li_3_strong}</strong> {dict?.blog_poderes?.li_3_desc}</li>
          </ul>
          
          <p>{dict?.blog_poderes?.p5_2}</p>
          
          <h2>{dict?.blog_poderes?.h2_4}</h2>
          <p>{dict?.blog_poderes?.p6_1}</p>
          
          <h2>{dict?.blog_poderes?.h2_5}</h2>
          <p>{dict?.blog_poderes?.p7_1}</p>
          
          <h2>{dict?.blog_poderes?.h2_6}</h2>
          <p>{dict?.blog_poderes?.p8_1}</p>
          
          <h2>{dict?.blog_poderes?.h2_7}</h2>
          <p>{dict?.blog_poderes?.p9_1}</p>
          <p>{dict?.blog_poderes?.p9_2}</p>
        </article>
      </div>
    </main>
  );
}

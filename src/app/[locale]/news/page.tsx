import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';

type Props = {
  params: Promise<{ locale: string }>
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const dict: any = await getDictionary(locale);
  const isEs = locale === 'es';
  const title = dict?.seo?.noticias?.title || (isEs ? 'Noticias & Actualidad Jurídica | Mac Consultores' : 'News & Legal Updates | Mac Consultores');
  const description = isEs ? 'Manténgase al día con las últimas noticias jurídicas.' : 'Stay up to date with the latest legal news.';
  const url = `https://mac-consultores-site-clean.vercel.app/${locale}/news`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: 'Mac Consultores Jurídicos & Asociados',
      images: [
        {
          url: 'https://mac-consultores-site-clean.vercel.app/assets/img/logo-mac-og.jpg',
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
      title,
      description,
      images: ['https://mac-consultores-site-clean.vercel.app/assets/img/logo-mac-og.jpg'],
    },
  };
}

export default async function Noticias({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main>
      <header className="page-header">
        <div className="container">
          <span className="breadcrumb">{dict?.noticias?.breadcrumb || 'Actualidad / Información'}</span>
          <h1>{dict?.noticias?.h1 || 'Noticias & Actualidad Jurídica'}</h1>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="grid-3">
            <article className="card">
              <picture>
                <source srcSet="/assets/img-webp/OFICINA_1.webp" type="image/webp" />
                <img src="/assets/img/OFICINA_1.jpg" alt="Reforma Penal" className="news-img" width="2752" height="1536" loading="lazy" />
              </picture>
              <span className="section-tag">{dict?.noticias?.news_1?.tag || 'Legislación'}</span>
              <h3>{dict?.noticias?.news_1?.title || 'Nuevas Reformas en Materia Penal'}</h3>
              <p>{dict?.noticias?.news_1?.desc || 'El Ejecutivo Nacional anunció modificaciones sustanciales...'}</p>
              <a href="https://accesoalajusticia.org/modificaciones-codigo-organico-procesal-penal-copp-venezolano-historia-7-tiempos/" target="_blank" rel="noopener noreferrer" className="news-link">
                {dict?.noticias?.read_more || 'LEER MÁS →'}
              </a>
            </article>

            <article className="card">
              <picture>
                <source srcSet="/assets/img-webp/OFICINA_2.webp" type="image/webp" />
                <img src="/assets/img/OFICINA_2.jpg" alt="Convenio Internacional" className="news-img" width="2752" height="1536" loading="lazy" />
              </picture>
              <span className="section-tag">{dict?.noticias?.news_2?.tag || 'Institucional'}</span>
              <h3>{dict?.noticias?.news_2?.title || 'Nuevo Convenio Internacional'}</h3>
              <p>{dict?.noticias?.news_2?.desc || 'Mac Consultores firma acuerdo de colaboración estratégica...'}</p>
              <a href="https://theimpactlawyers.com/es/articulos/la-colaboracion-de-las-firmas-legales-una-practica-extendida-en-la-abogacia" target="_blank" rel="noopener noreferrer" className="news-link">
                {dict?.noticias?.read_more || 'LEER MÁS →'}
              </a>
            </article>

            <article className="card">
              <picture>
                <source srcSet="/assets/img-webp/OFICINA_3.webp" type="image/webp" />
                <img src="/assets/img/OFICINA_3.jpg" alt="Sentencia TSJ" className="news-img" width="2752" height="1536" loading="lazy" />
              </picture>
              <span className="section-tag">{dict?.noticias?.news_3?.tag || 'Jurisprudencia'}</span>
              <h3>{dict?.noticias?.news_3?.title || 'Sentencia Vinculante TSJ'}</h3>
              <p>{dict?.noticias?.news_3?.desc || 'La Sala Constitucional establece nuevos criterios sobre la aplicación...'}</p>
              <a href="https://vlex.es/vid/derecho-presuncion-inocencia-391378250" target="_blank" rel="noopener noreferrer" className="news-link">
                {dict?.noticias?.read_more || 'LEER MÁS →'}
              </a>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

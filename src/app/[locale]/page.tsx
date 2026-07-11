import React from 'react';
import Hero from '@/components/Hero';
import InsightDelDia from '@/components/InsightDelDia';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';
import { getRoute } from '@/lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  
  const title = isEs ? 'Mac Consultores Jurídicos & Asociados | Excelencia Legal' : 'Mac Consultores Jurídicos & Asociados | Legal Excellence';
  const description = isEs 
    ? 'Firma boutique en Caracas especializada en litigio penal de alta complejidad, derecho constitucional y compliance corporativo preventivo.'
    : 'Boutique law firm in Caracas specializing in highly complex criminal litigation, constitutional law, and preventive corporate compliance.';
  
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://mac-consultores-site-clean.vercel.app';

  return {
    metadataBase: new URL(BASE_URL),
    title,
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'es': '/es',
        'en': '/en',
      },
    },
    openGraph: {
      title,
      description,
      url: `/${locale}`,
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
      title,
      description,
      images: ['/assets/img/logo-mac-og.jpg'],
    },
  };
}
type Props = {
  params: Promise<{ locale: string }>
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main>
      <Hero dict={dict.hero} locale={locale} />

      <InsightDelDia locale={locale} />

      <section className="bg-soft section-firma">
        <div className="container">
          <div className="grid-split">
            <div className="img-reveal-wrapper">
              <div className="img-reveal img-vertical">
                <picture>
                  <img src="/assets/img/OFICINA-4-SIN-ICONO.jpeg" alt="Oficina de Mac Consultores Jurídicos & Asociados en Caracas" width="2752" height="1536" loading="lazy" />
                </picture>
              </div>
              <p className="img-caption">Instalaciones de nuestra sede principal</p>
            </div>
            <div className="about-text">
              <span className="section-tag">{dict?.about?.tag}</span>
              <h2 className="section-title">{dict?.about?.title}</h2>
              <p>{dict?.about?.desc_1}</p>
              <p>{dict?.about?.desc_2}</p>
              <Link href={getRoute(locale, "about")} className="btn btn-outline mt-1rem">
                {dict?.about?.btn}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ESTRATEGIAS REPRESENTATIVAS */}
      <section className="bg-soft section-strategies">
        <div className="container">
          <div className="axial-header axial-centered">
            <span className="section-tag">{dict?.home?.strategies?.tag}</span>
            <h2 className="section-title">{dict?.home?.strategies?.title}</h2>
          </div>

          <div className="grid-3">
            <article className="card">
              <span className="section-tag">{dict?.home?.strategies?.case_selection?.tag}</span>
              <h3>{dict?.home?.strategies?.case_selection?.title}</h3>
              <p>{dict?.home?.strategies?.case_selection?.desc}</p>
            </article>

            <article className="card">
              <span className="section-tag">{dict?.home?.strategies?.case_theory?.tag}</span>
              <h3>{dict?.home?.strategies?.case_theory?.title}</h3>
              <p>{dict?.home?.strategies?.case_theory?.desc}</p>
              <Link href={getRoute(locale, "estrategiaTeoriaDelCaso")} className="news-link"><span>{dict?.news?.read_more}</span></Link>
            </article>

            <article className="card">
              <span className="section-tag">{dict?.home?.strategies?.representative_scenarios?.tag}</span>
              <h3>{dict?.home?.strategies?.representative_scenarios?.title}</h3>
              <p>{dict?.home?.strategies?.representative_scenarios?.desc}</p>
              <Link href={getRoute(locale, "estrategiaEscenariosRepresentativos")} className="news-link"><span>{dict?.news?.read_more}</span></Link>
            </article>
          </div>
        </div>
      </section>
      
      {/* ESPECIALIDADES */}
      <section>
        <div className="container">
          <div className="axial-header axial-centered">
            <span className="section-tag">{dict?.specialties?.tag}</span>
            <h2 className="section-title">{dict?.specialties?.title}</h2>
          </div>
          <div className="grid-3">
            <div className="card">
              <h3>{dict?.specialties?.card_1?.title}</h3>
              <p>{dict?.specialties?.card_1?.desc}</p>
              <Link className="card-action-link" href={getRoute(locale, "services")}>
                <span>{dict?.specialties?.details_link}</span>
              </Link>
            </div>
            <div className="card">
              <h3>{dict?.specialties?.card_2?.title}</h3>
              <p>{dict?.specialties?.card_2?.desc}</p>
              <Link className="card-action-link" href={getRoute(locale, "services")}>
                <span>{dict?.specialties?.details_link}</span>
              </Link>
            </div>
            <div className="card">
              <h3>{dict?.specialties?.card_3?.title}</h3>
              <p>{dict?.specialties?.card_3?.desc}</p>
              <Link className="card-action-link" href={getRoute(locale, "services.consular")}>
                <span>{dict?.specialties?.details_link}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RECURSOS ESTRATÉGICOS PARA EMPRESAS */}
      <section className="bg-soft">
        <div className="container">
          <div className="axial-header axial-centered">
            <span className="section-tag">{dict?.home?.resources?.tag}</span>
            <h2 className="section-title">{dict?.home?.resources?.title}</h2>
          </div>

          <div className="grid-3">
            <article className="card">
              <span className="section-tag">{dict?.home?.resources?.guide?.tag}</span>
              <h3>{dict?.home?.resources?.guide?.title}</h3>
              <p>{dict?.home?.resources?.guide?.desc}</p>
              <Link href={getRoute(locale, "contact")} className="news-link">{dict?.home?.resources?.guide?.cta}</Link>
            </article>

            <article className="card">
              <span className="section-tag">{dict?.home?.resources?.checklist?.tag}</span>
              <h3>{dict?.home?.resources?.checklist?.title}</h3>
              <p>{dict?.home?.resources?.checklist?.desc}</p>
              <Link href={getRoute(locale, "contact")} className="news-link">{dict?.home?.resources?.checklist?.cta}</Link>
            </article>

            <article className="card">
              <span className="section-tag">{dict?.home?.resources?.template?.tag}</span>
              <h3>{dict?.home?.resources?.template?.title}</h3>
              <p>{dict?.home?.resources?.template?.desc}</p>
              <Link href={getRoute(locale, "contact")} className="news-link">{dict?.home?.resources?.template?.cta}</Link>
            </article>
          </div>
        </div>
      </section>

      {/* ACTUALIDAD / NOTICIAS */}
      <section>
        <div className="container">
          <div className="axial-header axial-centered">
            <span className="section-tag">{dict?.news?.tag}</span>
            <h2 className="section-title">{dict?.news?.title}</h2>
          </div>
          <div className="grid-3">
            <div className="card">
              <picture>
                <source srcSet="/assets/img-webp/OFICINA_1.webp" type="image/webp" />
                <img src="/assets/img/OFICINA_1.jpg" alt="Noticia 1" className="news-img" width="2752" height="1536" loading="lazy" />
              </picture>
              <h3>{dict?.news?.card_1?.title}</h3>
              <p>{dict?.news?.card_1?.desc}</p>
              <Link href={getRoute(locale, "news")} className="news-link"><span>{dict?.news?.read_more}</span></Link>
            </div>
            <div className="card">
              <picture>
                <source srcSet="/assets/img-webp/OFICINA_2.webp" type="image/webp" />
                <img src="/assets/img/OFICINA_2.jpg" alt="Noticia 2" className="news-img" width="2752" height="1536" loading="lazy" />
              </picture>
              <h3>{dict?.news?.card_2?.title}</h3>
              <p>{dict?.news?.card_2?.desc}</p>
              <Link href={getRoute(locale, "blog")} className="news-link"><span>{dict?.news?.read_more}</span></Link>
            </div>
            <div className="card">
              <picture>
                <source srcSet="/assets/img-webp/OFICINA_3.webp" type="image/webp" />
                <img src="/assets/img/OFICINA_3.jpg" alt="Noticia 3" className="news-img" width="2752" height="1536" loading="lazy" />
              </picture>
              <h3>{dict?.news?.card_3?.title}</h3>
              <p>{dict?.news?.card_3?.desc}</p>
              <Link href={getRoute(locale, "news")} className="news-link"><span>{dict?.news?.read_more}</span></Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

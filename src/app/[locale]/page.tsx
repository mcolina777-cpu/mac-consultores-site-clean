import React from 'react';
export const revalidate = 3600;
import Image from 'next/image';
import Hero from '@/components/Hero';
import InsightDelDia from '@/components/InsightDelDia';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';
import { getRoute } from '@/lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const dict = await getDictionary(locale);

  const fallbackTitleEs =
    'Mac Consultores Jurídicos & Asociados | Penal corporativo y casos selectos en Venezuela';
  const fallbackTitleEn =
    'Mac Consultores Jurídicos & Asociados | Corporate criminal law and selected matters in Venezuela';

  const fallbackDescEs =
    'Firma boutique selectiva que atiende casos de derecho penal corporativo, fraudes, estafas financieras y asuntos patrimoniales en Venezuela para clientes en el exterior, complementados con trámites consulares y documentales estratégicos.';
  const fallbackDescEn =
    'Selective boutique law firm focused on corporate criminal law, financial fraud, asset protection and strategic procedures in Venezuela for clients abroad, including consular and document services.';

  const title =
    dict?.home?.meta_title || (isEs ? fallbackTitleEs : fallbackTitleEn);

  const description =
    dict?.home?.meta_description || (isEs ? fallbackDescEs : fallbackDescEn);

  const BASE_URL =
    process.env.NEXT_PUBLIC_BASE_URL ||
    'https://mac-consultores-site-clean.vercel.app';

  return {
    metadataBase: new URL(BASE_URL),
    title,
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        es: '/es',
        en: '/en',
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
          <div className="grid-split home-about-split">
            <div className="img-reveal-wrapper">
              <div 
                className="img-reveal img-vertical" 
                style={{ aspectRatio: "9/16", width: "100%", overflow: "hidden", position: "relative" }}
              >
                <Image 
                  src="/assets/img/MAC CONSULTORES JURIDICOS & ASOCIADOS- Mac-Consultores - Lobby 1.jpeg" 
                  alt={dict?.home?.alt_lobby || ""} 
                  width={1080} 
                  height={1920} 
                  className="our-firm-img-vertical"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <p className="img-caption"></p>
            </div>
            <div className="about-text">
              <span className="section-tag">{dict?.about?.tag}</span>
              <h2 className="section-title">{dict?.about?.title}</h2>
              <p>{dict?.about?.desc_1}</p>
              <p>{dict?.about?.desc_2}</p>
              <div className="mt-1-5rem">
                <Link href={getRoute(locale, "about")} className="btn btn-outline">
                  {locale === 'es' ? 'CONOCE LA FIRMA' : 'ABOUT THE FIRM'}
                </Link>
              </div>
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
            <Link href={getRoute(locale, "estrategiaSeleccionDeCasos")} className="card">
              <span className="section-tag">{dict?.home?.strategies?.case_selection?.tag}</span>
              <h3>{dict?.home?.strategies?.case_selection?.title}</h3>
              <p className="card-editorial-text">{dict?.home?.strategies?.case_selection?.desc}</p>
              <span className="news-link"><span>{dict?.news?.read_more}</span></span>
            </Link>

            <Link href={getRoute(locale, "estrategiaTeoriaDelCaso")} className="card">
              <span className="section-tag">{dict?.home?.strategies?.case_theory?.tag}</span>
              <h3>{dict?.home?.strategies?.case_theory?.title}</h3>
              <p className="card-editorial-text">{dict?.home?.strategies?.case_theory?.desc}</p>
              <span className="news-link"><span>{dict?.news?.read_more}</span></span>
            </Link>

            <Link href={getRoute(locale, "estrategiaEscenariosRepresentativos")} className="card">
              <span className="section-tag">{dict?.home?.strategies?.representative_scenarios?.tag}</span>
              <h3>{dict?.home?.strategies?.representative_scenarios?.title}</h3>
              <p className="card-editorial-text">{dict?.home?.strategies?.representative_scenarios?.desc}</p>
              <span className="news-link"><span>{dict?.news?.read_more}</span></span>
            </Link>
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
            <Link className="card" href={getRoute(locale, "services.penal")}>
              <h3>{dict?.specialties?.card_1?.title}</h3>
              <p>{dict?.specialties?.card_1?.desc}</p>
              <span className="card-action-link">
                <span>{dict?.specialties?.details_link}</span>
              </span>
            </Link>
            <Link className="card" href={getRoute(locale, "services.constitucional")}>
              <h3>{dict?.specialties?.card_2?.title}</h3>
              <p>{dict?.specialties?.card_2?.desc}</p>
              <span className="card-action-link">
                <span>{dict?.specialties?.details_link}</span>
              </span>
            </Link>
            <Link className="card" href={getRoute(locale, "services.consular")}>
              <h3>{dict?.specialties?.card_3?.title}</h3>
              <p>{dict?.specialties?.card_3?.desc}</p>
              <span className="card-action-link">
                <span>{dict?.specialties?.details_link}</span>
              </span>
            </Link>
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
            <Link className="card" href={getRoute(locale, "resources.economic_criminal_risk")}>
              <span className="section-tag">{dict?.home?.resources?.guide?.tag}</span>
              <h3>{dict?.home?.resources?.guide?.title}</h3>
              <p>{dict?.home?.resources?.guide?.desc}</p>
              <span className="news-link">{dict?.home?.resources?.guide?.cta}</span>
            </Link>

            <Link className="card" href={getRoute(locale, "resources.defense_documentation")}>
              <span className="section-tag">{dict?.home?.resources?.checklist?.tag}</span>
              <h3>{dict?.home?.resources?.checklist?.title}</h3>
              <p>{dict?.home?.resources?.checklist?.desc}</p>
              <span className="news-link">{dict?.home?.resources?.checklist?.cta}</span>
            </Link>

            <Link className="card" href={getRoute(locale, "resources.international_legal_services")}>
              <span className="section-tag">{dict?.home?.resources?.template?.tag}</span>
              <h3>{dict?.home?.resources?.template?.title}</h3>
              <p>{dict?.home?.resources?.template?.desc}</p>
              <span className="news-link">{dict?.home?.resources?.template?.cta}</span>
            </Link>
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
              <Link href={getRoute(locale, "news")} className="news-link"><span>{dict?.news?.read_more}</span></Link>
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
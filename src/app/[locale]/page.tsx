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

      {/* ESTRATEGIAS REPRESENTATIVAS (BLOQUE 1: TARJETAS 1, 2 Y 3) */}
      <section className="bg-soft section-padding-asym">
        <div className="container">
          <div className="axial-header axial-centered text-center mb-3-5rem">
            <span className="section-tag">{dict?.home?.strategies?.tag || (locale === 'es' ? 'METODOLOGÍA & LITIGACIÓN' : 'METHODOLOGY & LITIGATION')}</span>
            <h2 className="serif section-title mt-1rem">{dict?.home?.strategies?.title || (locale === 'es' ? 'Estrategias Forenses y Criterio Procesal' : 'Forensic Strategies and Litigation Standards')}</h2>
          </div>
          <div className="grid-3 mb-3rem">
            {/* TARJETA 01 */}
            <Link 
              href={getRoute(locale, "estrategiaSeleccionDeCasos")} 
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <span className="section-tag">01</span>
              <h3 className="serif">{locale === 'es' ? 'Selección de Casos y Viabilidad' : 'Case Selection & Feasibility'}</h3>
              <p 
                className="card-editorial-text"
                style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem', width: '100%' }}
              >
                {locale === 'es'
                  ? 'Adoptamos un criterio riguroso y selectivo en la admisión de mandatos judiciales, evaluando previamente la viabilidad dogmática, fáctica y probatoria de cada asunto. Esta metodología permite concentrar la capacidad analítica del despacho en litigios de alta complejidad, garantizando a nuestros patrocinados una dirección forense personalizada, éticamente sólida y con probabilidades reales de éxito procesal.'
                  : 'We apply a strict, highly selective approach to case intake, evaluating the doctrinal and evidentiary merits of every legal matter beforehand. This rigorous methodology focuses our analytical capacity on high-complexity litigation, delivering customized, ethically sound forensic representation designed to safeguard client interests across all judicial proceedings.'}
              </p>
              <span className="card-link mt-auto">
                {locale === 'es' ? 'Leer más →' : 'Read more →'}
              </span>
            </Link>

            {/* TARJETA 02 */}
            <Link 
              href={getRoute(locale, "estrategiaTeoriaDelCaso")} 
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <span className="section-tag">02</span>
              <h3 className="serif">{locale === 'es' ? 'Teoría del Caso y Litigación' : 'Case Theory & Trial Strategy'}</h3>
              <p 
                className="card-editorial-text"
                style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem', width: '100%' }}
              >
                {locale === 'es'
                  ? 'La construcción de la teoría del caso constituye el eje rector de nuestra práctica procesal en estrados penales y constitucionales. Articulamos de manera temprana los hechos controvertidos con el ordenamiento sustantivo aplicable y los medios de convicción conducentes, estructurando defensas técnicas sólidas que anticipan objeciones, neutralizan imputaciones y guían con eficacia la actuación en cada audiencia.'
                  : 'Structuring a comprehensive case theory forms the cornerstone of our advocacy across criminal and constitutional courts. We align factual controversies with substantive law and pertinent evidentiary assets from early stages, establishing robust technical defenses that anticipate prosecutorial theories, dismantle unfounded charges, and maintain procedural dominance throughout trial hearings.'}
              </p>
              <span className="card-link mt-auto">
                {locale === 'es' ? 'Leer más →' : 'Read more →'}
              </span>
            </Link>

            {/* TARJETA 03 */}
            <Link 
              href={getRoute(locale, "estrategiaEscenariosRepresentativos")} 
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <span className="section-tag">03</span>
              <h3 className="serif">{locale === 'es' ? 'Escenarios Representativos' : 'Representative Scenarios'}</h3>
              <p 
                className="card-editorial-text"
                style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem', width: '100%' }}
              >
                {locale === 'es'
                  ? 'Nuestra experiencia forense abarca la conducción estratégica de controversias corporativas complejas, fraudes societarios, delitos económicos, tutelas constitucionales urgentes y recursos de casación. Cada escenario es abordado mediante un análisis de riesgos exhaustivo, privilegiando el control formal de las actuaciones procesales y la preservación de la seguridad jurídica y reputacional de nuestros clientes.'
                  : 'Our forensic practice encompasses strategic representation across complex corporate disputes, white-collar crimes, financial fraud, urgent constitutional remedies, and supreme court appeals. Every scenario undergoes rigorous risk analysis, prioritizing strict procedural oversight and the steadfast protection of our clients’ legal certainty and corporate reputation.'}
              </p>
              <span className="card-link mt-auto">
                {locale === 'es' ? 'Leer más →' : 'Read more →'}
              </span>
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
              <p className="card-editorial-text">{dict?.specialties?.card_1?.desc}</p>
              <span className="card-action-link">
                <span>{dict?.specialties?.details_link}</span>
              </span>
            </Link>
            <Link className="card" href={getRoute(locale, "services.constitucional")}>
              <h3>{dict?.specialties?.card_2?.title}</h3>
              <p className="card-editorial-text">{dict?.specialties?.card_2?.desc}</p>
              <span className="card-action-link">
                <span>{dict?.specialties?.details_link}</span>
              </span>
            </Link>
            <Link className="card" href={getRoute(locale, "services.consular")}>
              <h3>{dict?.specialties?.card_3?.title}</h3>
              <p className="card-editorial-text">{dict?.specialties?.card_3?.desc}</p>
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
              <p className="card-editorial-text">{dict?.home?.resources?.guide?.desc}</p>
              <span className="news-link">{dict?.home?.resources?.guide?.cta}</span>
            </Link>

            <Link className="card" href={getRoute(locale, "resources.defense_documentation")}>
              <span className="section-tag">{dict?.home?.resources?.checklist?.tag}</span>
              <h3>{dict?.home?.resources?.checklist?.title}</h3>
              <p className="card-editorial-text">{dict?.home?.resources?.checklist?.desc}</p>
              <span className="news-link">{dict?.home?.resources?.checklist?.cta}</span>
            </Link>

            <Link className="card" href={getRoute(locale, "resources.international_legal_services")}>
              <span className="section-tag">{dict?.home?.resources?.template?.tag}</span>
              <h3>{dict?.home?.resources?.template?.title}</h3>
              <p className="card-editorial-text">{dict?.home?.resources?.template?.desc}</p>
              <span className="news-link">{dict?.home?.resources?.template?.cta}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ACTUALIDAD / NOTICIAS (Tarjetas 10, 11 y 12 con enlaces directos a fuentes) */}
      <section>
        <div className="container">
          <div className="axial-header axial-centered">
            <span className="section-tag">{dict?.news?.tag}</span>
            <h2 className="section-title">{dict?.news?.title}</h2>
          </div>
          <div className="grid-3">
            {/* T10: Reformas Procesales */}
            <a 
              href="https://accesoalajusticia.org/modificaciones-codigo-organico-procesal-penal-copp-venezolano-historia-7-tiempos/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="card block-link"
            >
              <picture>
                <source srcSet="/assets/img-webp/OFICINA_1.webp" type="image/webp" />
                <img src="/assets/img/OFICINA_1.jpg" alt="Noticia 1" className="news-img" width="1600" height="900" loading="lazy" />
              </picture>
              <h3>{dict?.news?.card_1?.title}</h3>
              <p className="card-editorial-text">{dict?.news?.card_1?.desc}</p>
              <span className="news-link"><span>{dict?.news?.read_more}</span></span>
            </a>

            {/* T11: Criterios Vinculantes / Jurisprudencia */}
            <a 
              href="https://vlex.es/vid/derecho-presuncion-inocencia-391378250" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="card block-link"
            >
              <picture>
                <source srcSet="/assets/img-webp/OFICINA_2.webp" type="image/webp" />
                <img src="/assets/img/OFICINA_2.jpg" alt="Noticia 2" className="news-img" width="1600" height="900" loading="lazy" />
              </picture>
              <h3>{dict?.news?.card_2?.title}</h3>
              <p className="card-editorial-text">{dict?.news?.card_2?.desc}</p>
              <span className="news-link"><span>{dict?.news?.read_more}</span></span>
            </a>

            {/* T12: Colaboración Legal Internacional */}
            <a 
              href="https://theimpactlawyers.com/es/articulos/la-colaboracion-de-las-firmas-legales-una-practica-extendida-en-la-abogacia" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="card block-link"
            >
              <picture>
                <source srcSet="/assets/img-webp/OFICINA_3.webp" type="image/webp" />
                <img src="/assets/img/OFICINA_3.jpg" alt="Noticia 3" className="news-img" width="1600" height="900" loading="lazy" />
              </picture>
              <h3>{dict?.news?.card_3?.title}</h3>
              <p className="card-editorial-text">{dict?.news?.card_3?.desc}</p>
              <span className="news-link"><span>{dict?.news?.read_more}</span></span>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
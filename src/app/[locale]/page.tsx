import React from 'react';
import Hero from '@/components/Hero';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';

type Props = {
  params: Promise<{ locale: string }>
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main>
      <Hero dict={dict.hero} locale={locale} />

      <section className="daily-insight">
        <div className="container">
          <div className="daily-insight-inner">
            <span className="section-tag daily-insight-tag">Insight Jurídico del Día</span>
            <h2 className="daily-insight-concept is-loaded" id="daily-insight-concept">
              Prevención Estratégica
            </h2>
            <p className="daily-insight-definition is-loaded" id="daily-insight-definition">
              La anticipación y el blindaje corporativo previenen el 80% de las contingencias penales económicas.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-soft">
        <div className="container">
          <div className="grid-split">
            <div className="img-reveal">
              <picture>
                <source srcSet="/assets/img-webp/RECEPCION_2_OPT.webp" type="image/webp" />
                <img src="/assets/img/RECEPCION_2_OPT.jpg" alt="Recepción" width="2752" height="1536" loading="lazy" />
              </picture>
            </div>
            <div className="about-text">
              <span className="section-tag">{dict?.about?.tag || 'Nuestra Firma'}</span>
              <h2 className="section-title">{dict?.about?.title || 'Cimientos sólidos para desafíos complejos.'}</h2>
              <p>{dict?.about?.desc_1 || 'En Mac Consultores Jurídicos & Asociados, entendemos el derecho como una disciplina de alta precisión...'}</p>
              <p>{dict?.about?.desc_2 || 'Liderados por el Abg. Marco A. Colina G., combinamos más de dos décadas...'}</p>
              <Link href={`/${locale}/quienes-somos`} className="btn btn-outline" style={{ marginTop: '1rem' }}>
                {dict?.about?.btn || 'Conocer nuestra historia'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ESTRATEGIAS REPRESENTATIVAS */}
      <section className="bg-soft">
        <div className="container">
          <div className="axial-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-tag">{dict?.home?.strategies?.tag || 'Estrategias representativas'}</span>
            <h2 className="section-title">{dict?.home?.strategies?.title || 'Estrategias que reflejan nuestra forma de litigar'}</h2>
          </div>

          <div className="grid-3">
            <article className="card">
              <span className="section-tag">{dict?.home?.strategies?.case_selection?.tag || 'Selección de casos'}</span>
              <h3>{dict?.home?.strategies?.case_selection?.title || 'Priorización de casos con viabilidad real'}</h3>
              <p>{dict?.home?.strategies?.case_selection?.desc || 'Priorizamos casos con viabilidad jurídica real...'}</p>
            </article>

            <article className="card">
              <span className="section-tag">{dict?.home?.strategies?.case_theory?.tag || 'Teoría del caso'}</span>
              <h3>{dict?.home?.strategies?.case_theory?.title || 'Teoría del caso como eje de la defensa'}</h3>
              <p>{dict?.home?.strategies?.case_theory?.desc || 'Cada asunto se estructura desde el inicio con una teoría del caso...'}</p>
              <Link href={`/${locale}/estrategia-teoria-del-caso`} className="news-link"><span>{dict?.news?.read_more || 'LEER MÁS →'}</span></Link>
            </article>

            <article className="card">
              <span className="section-tag">{dict?.home?.strategies?.representative_scenarios?.tag || 'Escenarios representativos'}</span>
              <h3>{dict?.home?.strategies?.representative_scenarios?.title || 'Estrategias aplicadas en contextos sensibles'}</h3>
              <p>{dict?.home?.strategies?.representative_scenarios?.desc || 'En investigaciones penales económicas y acciones de amparo...'}</p>
              <Link href={`/${locale}/estrategia-escenarios-representativos`} className="news-link"><span>{dict?.news?.read_more || 'LEER MÁS →'}</span></Link>
            </article>
          </div>
        </div>
      </section>
      
      {/* ESPECIALIDADES */}
      <section>
        <div className="container">
          <div className="axial-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-tag">{dict?.specialties?.tag || 'Especialidades'}</span>
            <h2 className="section-title">{dict?.specialties?.title || 'Áreas de Práctica Estratégica'}</h2>
          </div>
          <div className="grid-3">
            <div className="card">
              <h3>{dict?.specialties?.card_1?.title || 'Defensa Penal Técnica'}</h3>
              <p>{dict?.specialties?.card_1?.desc || 'Estrategias de defensa integral...'}</p>
              <Link href={`/${locale}/servicios`} style={{ marginTop: 'auto', color: 'var(--accent)', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '1px' }}>
                <span>{dict?.specialties?.details_link || 'VER DETALLES →'}</span>
              </Link>
            </div>
            <div className="card">
              <h3>{dict?.specialties?.card_2?.title || 'Tutela Constitucional'}</h3>
              <p>{dict?.specialties?.card_2?.desc || 'Protección efectiva de derechos fundamentales...'}</p>
              <Link href={`/${locale}/servicios`} style={{ marginTop: 'auto', color: 'var(--accent)', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '1px' }}>
                <span>{dict?.specialties?.details_link || 'VER DETALLES →'}</span>
              </Link>
            </div>
            <div className="card">
              <h3>{dict?.specialties?.card_3?.title || 'Derecho Internacional'}</h3>
              <p>{dict?.specialties?.card_3?.desc || 'Representación estratégica ante misiones consulares...'}</p>
              <Link href={`/${locale}/tramites-consulares`} style={{ marginTop: 'auto', color: 'var(--accent)', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '1px' }}>
                <span>{dict?.specialties?.details_link || 'VER DETALLES →'}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RECURSOS ESTRATÉGICOS PARA EMPRESAS */}
      <section className="bg-soft">
        <div className="container">
          <div className="axial-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-tag">{dict?.home?.resources?.tag || 'Recursos'}</span>
            <h2 className="section-title">{dict?.home?.resources?.title || 'Recursos estratégicos para empresas'}</h2>
          </div>

          <div className="grid-3">
            <article className="card">
              <span className="section-tag">{dict?.home?.resources?.guide?.tag || 'Riesgo penal económico'}</span>
              <h3>{dict?.home?.resources?.guide?.title || 'Guía en 5 pasos para proteger su empresa ante investigaciones penales económicas'}</h3>
              <p>{dict?.home?.resources?.guide?.desc || 'Documento práctico que resume las medidas clave...'}</p>
              <Link href={`/${locale}/contacto`} className="news-link">{dict?.home?.resources?.guide?.cta || 'DESCARGAR GUÍA →'}</Link>
            </article>

            <article className="card">
              <span className="section-tag">{dict?.home?.resources?.checklist?.tag || 'Documentación para la defensa'}</span>
              <h3>{dict?.home?.resources?.checklist?.title || 'Checklist de documentación para la defensa penal de empresas'}</h3>
              <p>{dict?.home?.resources?.checklist?.desc || 'Lista estructurada de documentos esenciales...'}</p>
              <Link href={`/${locale}/contacto`} className="news-link">{dict?.home?.resources?.checklist?.cta || 'DESCARGAR CHECKLIST →'}</Link>
            </article>

            <article className="card">
              <span className="section-tag">{dict?.home?.resources?.template?.tag || 'Servicios internacionales'}</span>
              <h3>{dict?.home?.resources?.template?.title || 'Plantilla de contrato de prestación de servicios legales internacionales'}</h3>
              <p>{dict?.home?.resources?.template?.desc || 'Modelo de contrato orientado a clientes internacionales...'}</p>
              <Link href={`/${locale}/contacto`} className="news-link">{dict?.home?.resources?.template?.cta || 'DESCARGAR PLANTILLA →'}</Link>
            </article>
          </div>
        </div>
      </section>

      {/* ACTUALIDAD / NOTICIAS */}
      <section>
        <div className="container">
          <div className="axial-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-tag">{dict?.news?.tag || 'Actualidad'}</span>
            <h2 className="section-title">{dict?.news?.title || 'Noticias & Publicaciones'}</h2>
          </div>
          <div className="grid-3">
            <div className="card">
              <picture>
                <source srcSet="/assets/img-webp/OFICINA_1.webp" type="image/webp" />
                <img src="/assets/img/OFICINA_1.jpg" alt="Noticia 1" className="news-img" width="2752" height="1536" loading="lazy" />
              </picture>
              <h3>{dict?.news?.card_1?.title || 'Impacto de la Nueva Legislación Penal'}</h3>
              <p>{dict?.news?.card_1?.desc || 'Análisis detallado sobre las recientes reformas procesales...'}</p>
              <Link href={`/${locale}/noticias`} className="news-link"><span>{dict?.news?.read_more || 'LEER MÁS →'}</span></Link>
            </div>
            <div className="card">
              <picture>
                <source srcSet="/assets/img-webp/OFICINA_2.webp" type="image/webp" />
                <img src="/assets/img/OFICINA_2.jpg" alt="Noticia 2" className="news-img" width="2752" height="1536" loading="lazy" />
              </picture>
              <h3>{dict?.news?.card_2?.title || 'Tendencias en Amparo Constitucional'}</h3>
              <p>{dict?.news?.card_2?.desc || 'Revisión de la jurisprudencia reciente y su impacto...'}</p>
              <Link href={`/${locale}/blog`} className="news-link"><span>{dict?.news?.read_more || 'LEER MÁS →'}</span></Link>
            </div>
            <div className="card">
              <picture>
                <source srcSet="/assets/img-webp/OFICINA_3.webp" type="image/webp" />
                <img src="/assets/img/OFICINA_3.jpg" alt="Noticia 3" className="news-img" width="2752" height="1536" loading="lazy" />
              </picture>
              <h3>{dict?.news?.card_3?.title || 'Nuevos Acuerdos Internacionales'}</h3>
              <p>{dict?.news?.card_3?.desc || 'Cómo los nuevos marcos de colaboración...'}</p>
              <Link href={`/${locale}/noticias`} className="news-link"><span>{dict?.news?.read_more || 'LEER MÁS →'}</span></Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

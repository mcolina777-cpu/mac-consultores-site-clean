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
  const isEs = locale === 'es';

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
              <span className="section-tag">{locale === 'es' ? 'Nuestra Firma' : 'Our Firm'}</span>
              <h2 className="section-title">
                {locale === 'es' ? 'Cimientos sólidos para desafíos complejos.' : 'Solid foundations for complex challenges.'}
              </h2>
              <p>
                {locale === 'es'
                  ? 'En Mac Consultores Jurídicos & Asociados, entendemos el derecho como una disciplina de alta precisión. Nuestra práctica combina integridad, rigor técnico y capacidad de anticipación estratégica para atender asuntos penales, constitucionales y corporativos de especial complejidad.'
                  : 'At Mac Consultores Jurídicos & Asociados, we understand law as a discipline requiring precision. Our practice combines integrity, technical rigor, and strategic foresight in handling complex criminal, constitutional, and corporate matters.'}
              </p>
              <p>
                {locale === 'es'
                  ? 'Liderados por el Dr. Marco A. Colina G., integramos más de dos décadas de experiencia en litigio penal y constitucional con una visión académica y estratégica del ejercicio profesional. Asesoramos y representamos a personas, empresas, directivos y clientes internacionales que requieren criterio jurídico sólido, gestión rigurosa y capacidad de respuesta en Venezuela.'
                  : 'Led by Dr. Marco A. Colina G., we combine more than two decades of experience in criminal and constitutional litigation with an academic and strategic approach to legal practice. We advise and represent individuals, companies, executives, and international clients who require sound legal judgment, rigorous management, and reliable capacity in Venezuela.'}
              </p>
              <p>
                {locale === 'es'
                  ? 'Nuestra firma trabaja cada asunto con una metodología selectiva y personalizada, orientada a identificar riesgos, estructurar estrategias viables y proteger los intereses jurídicos y patrimoniales de nuestros clientes con responsabilidad, confidencialidad y absoluta solidez técnica.'
                  : 'Our firm approaches every matter through a selective and personalized methodology designed to identify risks, structure viable strategies, and protect our clients’ legal and proprietary interests with responsibility, confidentiality, and technical strength.'}
              </p>
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
      
      {/* ESPECIALIDADES (BLOQUE 2: TARJETAS 4, 5 Y 6) */}
      <section className="section-padding-asym">
        <div className="container">
          <div className="axial-header axial-centered text-center mb-3-5rem">
            <span className="section-tag">{dict?.specialties?.tag || (locale === 'es' ? 'ÁREAS DE PRÁCTICA' : 'PRACTICE AREAS')}</span>
            <h2 className="serif section-title mt-1rem">{dict?.specialties?.title || (locale === 'es' ? 'Especialidades y Servicios Forenses' : 'Specialties and Forensic Services')}</h2>
          </div>
          <div className="grid-3 mb-3rem">
            {/* TARJETA 04 */}
            <Link 
              href={getRoute(locale, "services.penal")}
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <span className="section-tag">{locale === 'es' ? 'DERECHO PENAL CORPORATIVO' : 'CORPORATE CRIMINAL LAW'}</span>
              <h3 className="serif">{locale === 'es' ? 'Penal Económico & Corporativo' : 'Economic & Corporate Crime'}</h3>
              <p 
                className="card-editorial-text"
                style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem', width: '100%' }}
              >
                {locale === 'es'
                  ? 'Asumimos la defensa técnica y representación penal especializada de empresas, directores y accionistas frente a investigaciones complejas por delitos económicos, patrimoniales y societarios. Nuestro enfoque forense articula el diseño de programas preventivos de cumplimiento con una rigurosa litigación estratégica en estrados, neutralizando imputaciones infundadas y salvaguardando la continuidad operativa y reputacional de la entidad mercantil.'
                  : 'We provide specialized criminal defense and technical representation for corporations, executive boards, and shareholders facing complex white-collar investigations. Our forensic approach combines proactive corporate compliance design with aggressive courtroom advocacy, effectively dismantling unfounded charges while safeguarding the operational continuity and market reputation of the enterprise.'}
              </p>
              <span className="card-link mt-auto">
                {locale === 'es' ? 'Leer más →' : 'Read more →'}
              </span>
            </Link>

            {/* TARJETA 05 */}
            <Link 
              href={getRoute(locale, "services.constitucional")}
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <span className="section-tag">{locale === 'es' ? 'TUTELA CONSTITUCIONAL' : 'CONSTITUTIONAL LAW'}</span>
              <h3 className="serif">{locale === 'es' ? 'Amparo y Tutela Constitucional' : 'Constitutional Injunctions'}</h3>
              <p 
                className="card-editorial-text"
                style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem', width: '100%' }}
              >
                {locale === 'es'
                  ? 'Ejercemos la tutela judicial urgente ante los tribunales de la República y la Sala Constitucional del Tribunal Supremo de Justicia, interponiendo acciones de amparo frente a fallos judiciales lesivos, vías de hecho administrativas y actos arbitrarios. La intervención técnica se orienta a la protección inmediata de libertades fundamentales, garantías del debido proceso y derechos patrimoniales esenciales.'
                  : 'We deliver urgent constitutional litigation before appellate courts and the Constitutional Chamber of the Supreme Tribunal of Justice, filing injunctions against flawed judicial rulings, administrative overreach, and arbitrary actions. Technical advocacy focuses on the prompt protection of fundamental liberties, procedural due process guarantees, and critical corporate property rights.'}
              </p>
              <span className="card-link mt-auto">
                {locale === 'es' ? 'Leer más →' : 'Read more →'}
              </span>
            </Link>

            {/* TARJETA 06 */}
            <Link 
              href={`/${locale}/services/local-counsel-venezuela`}
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <span className="section-tag">{locale === 'es' ? 'DERECHO INTERNACIONAL' : 'INTERNATIONAL LAW'}</span>
              <h3 className="serif">{locale === 'es' ? 'Servicios Jurídicos para Empresas Extranjeras en Venezuela' : 'Legal Services for Foreign Companies in Venezuela'}</h3>
              <p 
                className="card-editorial-text"
                style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem', width: '100%' }}
              >
                {locale === 'es'
                  ? 'Capacidad jurídica local para evaluar riesgos corporativos, validar documentación transfronteriza y atender asuntos jurídicos de empresas extranjeras con intereses en Venezuela.'
                  : 'Local legal capacity to assess corporate risks, validate cross-border documentation, and address legal matters for foreign companies with interests in Venezuela.'}
              </p>
              <span className="card-link mt-auto">
                {locale === 'es' ? 'Leer más →' : 'Read more →'}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* RECURSOS ESTRATÉGICOS PARA EMPRESAS (BLOQUE 3) */}
      <section className="bg-soft section-padding-asym">
        <div className="container">
          <div className="axial-header axial-centered text-center mb-3-5rem">
            <span className="section-tag">{locale === 'es' ? 'RECURSOS ESTRATÉGICOS' : 'STRATEGIC RESOURCES'}</span>
            <h2 className="serif section-title mt-1rem">
              {locale === 'es' ? 'Recursos Estratégicos para Empresas' : 'Strategic Resources for Businesses'}
            </h2>
          </div>
          <div className="grid-3 mb-3rem">
            {/* TARJETA 01 */}
            <Link 
              href={getRoute(locale, "resources.economic_criminal_risk")}
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <span className="section-tag">{locale === 'es' ? 'RIESGO PENAL CORPORATIVO' : 'CORPORATE CRIMINAL RISK'}</span>
              <h3 className="serif">
                {locale === 'es' 
                  ? 'Guía Preventiva ante Investigaciones Penales Económicas' 
                  : 'Preventive Guide for Corporate Criminal Inquiries'}
              </h3>
              <p 
                className="card-editorial-text"
                style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem', width: '100%' }}
              >
                {locale === 'es'
                  ? 'Sistematiza los protocolos forenses indispensables para la identificación, contención y mitigación del riesgo penal corporativo frente a inspecciones estatales o procesos judiciales imprevistos. Brinda a los órganos directivos criterios técnicos rigurosos para auditar la responsabilidad de los administradores, blindar la toma de decisiones mercantiles y articular una respuesta procesal oportuna que preserve la continuidad operativa y reputacional de la empresa.'
                  : 'Systematizes essential forensic protocols for identifying, containing, and mitigating corporate criminal exposure during sudden state regulatory audits or judicial inquiries. It equips corporate boards with rigorous technical criteria to audit officer liabilities, shield executive commercial decision-making, and mount an immediate procedural response that safeguards the operational continuity and market reputation of the enterprise.'}
              </p>
              <span className="card-link mt-auto">
                {locale === 'es' ? 'Leer más →' : 'Read more →'}
              </span>
            </Link>

            {/* TARJETA 02 */}
            <Link 
              href={getRoute(locale, "resources.defense_documentation")}
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <span className="section-tag">{locale === 'es' ? 'AUDITORÍA PROBATORIA' : 'EVIDENTIARY AUDIT'}</span>
              <h3 className="serif">
                {locale === 'es' 
                  ? 'Checklist Documental para la Defensa Penal Corporativa' 
                  : 'Documentary Checklist for Corporate Criminal Defense'}
              </h3>
              <p 
                className="card-editorial-text"
                style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem', width: '100%' }}
              >
                {locale === 'es'
                  ? 'Estructura el protocolo técnico de recopilación, aseguramiento y preservación de fuentes de prueba documentales, contables y digitales indispensables para estructurar la defensa judicial de la empresa. Garantiza la cadena de custodia y trazabilidad probatoria ante inspecciones administrativas o allanamientos, permitiendo a la representación letrada desvirtuar imputaciones fácticas infundadas mediante un soporte probatorio robusto y procesalmente idóneo.'
                  : 'Structures the technical protocol for gathering, securing, and preserving documentary, accounting, and digital evidence essential to mount a rigorous corporate criminal defense. It ensures chain of custody and evidentiary traceability during state inspections or search warrants, enabling legal defense to effectively dismantle unfounded factual charges through robust, procedurally sound documentary backing.'}
              </p>
              <span className="card-link mt-auto">
                {locale === 'es' ? 'Leer más →' : 'Read more →'}
              </span>
            </Link>

            {/* TARJETA 03 */}
            <Link 
              href={getRoute(locale, "resources.international_legal_services")}
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <span className="section-tag">{locale === 'es' ? 'CONTRATACIÓN TRANSFRONTERIZA' : 'CROSS-BORDER CONTRACTS'}</span>
              <h3 className="serif">
                {locale === 'es' 
                  ? 'Estructura Contractual para Servicios Legales Internacionales' 
                  : 'Contractual Framework for International Legal Services'}
              </h3>
              <p 
                className="card-editorial-text"
                style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem', width: '100%' }}
              >
                {locale === 'es'
                  ? 'Establece las bases jurídicas y operativas para la contratación de servicios profesionales y representación técnica en asuntos multijurisdiccionales con nexo en Venezuela. Define con precisión la delimitación del alcance letrado, cláusulas de estricta confidencialidad, honorarios bajo estándares internacionales y mecanismos de resolución de controversias, blindando la relación entre el cliente extranjero y el despacho local con absoluta certeza jurídica.'
                  : 'Establishes the legal and operational foundations for retaining professional counsel and specialized technical representation in multi-jurisdictional matters connected to Venezuela. It clearly defines professional scope limits, strict confidentiality covenants, internationally accepted fee structures, and dispute resolution mechanisms, securing the attorney-client engagement between foreign entities and domestic counsel with complete legal certainty.'}
              </p>
              <span className="card-link mt-auto">
                {locale === 'es' ? 'Leer más →' : 'Read more →'}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ACTUALIDAD / NOTICIAS (BLOQUE 4) */}
      <section className="section-padding-asym">
        <div className="container">
          <div className="axial-header axial-centered text-center mb-3-5rem">
            <span className="section-tag">{locale === 'es' ? 'ACTUALIDAD' : 'CURRENT AFFAIRS'}</span>
            <h2 className="serif section-title mt-1rem">
              {locale === 'es' ? 'Noticias & Publicaciones' : 'News & Publications'}
            </h2>
          </div>
          <div className="grid-3 mb-3rem">
            {/* TARJETA 10: Reformas Procesales */}
            <a 
              href="https://accesoalajusticia.org/modificaciones-codigo-organico-procesal-penal-copp-venezolano-historia-7-tiempos/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <picture className="mb-1-5rem">
                <source srcSet="/assets/img-webp/OFICINA_1.webp" type="image/webp" />
                <img src="/assets/img/OFICINA_1.jpg" alt="Noticia 1" className="news-img" width="1600" height="900" loading="lazy" style={{ borderRadius: '4px', width: '100%', height: 'auto', objectFit: 'cover' }} />
              </picture>
              <h3 className="serif">
                {locale === 'es' 
                  ? 'Impacto de la Nueva Legislación Penal' 
                  : 'Impact of New Criminal Legislation'}
              </h3>
              <p 
                className="card-editorial-text"
                style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem', width: '100%' }}
              >
                {locale === 'es'
                  ? 'Análisis dogmático y procesal sobre las reformas al Código Orgánico Procesal Penal y su incidencia en el ejercicio de la defensa técnica. Examinamos los nuevos estándares de control de garantías, plazos de investigación y exigencias de admisibilidad recursiva que rigen los litigios penales y constitucionales de alta complejidad dentro de la jurisdicción ordinaria y especializada.'
                  : 'Doctrinal and procedural analysis regarding recent amendments to the Organic Code of Criminal Procedure and their impact on technical defense. We evaluate emerging standards in constitutional guarantee oversight, investigative statutory deadlines, and appellate admissibility criteria governing high-complexity criminal and constitutional litigation across Venezuelan trial and appellate courts.'}
              </p>
              <span className="card-link mt-auto">
                {locale === 'es' ? 'Leer más →' : 'Read more →'}
              </span>
            </a>

            {/* TARJETA 11: Criterios Vinculantes */}
            <a 
              href="https://vlex.es/vid/derecho-presuncion-inocencia-391378250" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <picture className="mb-1-5rem">
                <source srcSet="/assets/img-webp/OFICINA_2.webp" type="image/webp" />
                <img src="/assets/img/OFICINA_2.jpg" alt="Noticia 2" className="news-img" width="1600" height="900" loading="lazy" style={{ borderRadius: '4px', width: '100%', height: 'auto', objectFit: 'cover' }} />
              </picture>
              <h3 className="serif">
                {locale === 'es' 
                  ? 'Criterios Vinculantes y Garantías Procesales' 
                  : 'Binding Precedents & Procedural Safeguards'}
              </h3>
              <p 
                className="card-editorial-text"
                style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem', width: '100%' }}
              >
                {locale === 'es'
                  ? 'Revisión crítica de las líneas jurisprudenciales vinculantes dictadas por el Tribunal Supremo de Justicia en torno a la tutela judicial efectiva y presunción de inocencia. Evaluamos la doctrina obligatoria en materia de estándar probatorio, nulidades procesales y motivación de fallos judiciales para consolidar una argumentación forense rigurosa en estrados y audiencias orales.'
                  : 'Critical review of binding case law established by the Supreme Tribunal of Justice concerning effective judicial protection and the presumption of innocence. We assess mandatory doctrine regarding evidentiary thresholds, procedural nullities, and judicial reasoning standards to reinforce rigorous forensic advocacy before domestic trial benches and appellate chambers.'}
              </p>
              <span className="card-link mt-auto">
                {locale === 'es' ? 'Leer más →' : 'Read more →'}
              </span>
            </a>

            {/* TARJETA 12: Colaboración Legal Internacional */}
            <a 
              href="https://theimpactlawyers.com/es/articulos/la-colaboracion-de-las-firmas-legales-una-practica-extendida-en-la-abogacia" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <picture className="mb-1-5rem">
                <source srcSet="/assets/img-webp/OFICINA_3.webp" type="image/webp" />
                <img src="/assets/img/OFICINA_3.jpg" alt="Noticia 3" className="news-img" width="1600" height="900" loading="lazy" style={{ borderRadius: '4px', width: '100%', height: 'auto', objectFit: 'cover' }} />
              </picture>
              <h3 className="serif">
                {locale === 'es' 
                  ? 'Marcos de Cooperación Legal Internacional' 
                  : 'International Legal Cooperation Frameworks'}
              </h3>
              <p 
                className="card-editorial-text"
                style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem', width: '100%' }}
              >
                {locale === 'es'
                  ? 'Estudio sobre las tendencias de cooperación interjurisdiccional entre despachos globales y firmas locales en asuntos corporativos transfronterizos. Analizamos los mecanismos de asistencia mutua, coordinación de litigios multijurisdiccionales y el rol determinante del asesor local para mitigar riesgos regulatorios y preservar la seguridad jurídica de corporaciones e inversionistas internacionales en Venezuela.'
                  : 'Study on modern trends in cross-border cooperation between global law firms and domestic counsel in multi-jurisdictional corporate matters. We analyze mutual legal assistance frameworks, cross-border dispute coordination, and the pivotal role of strategic local counsel in mitigating regulatory exposure and securing legal certainty for international corporations in Venezuela.'}
              </p>
              <span className="card-link mt-auto">
                {locale === 'es' ? 'Leer más →' : 'Read more →'}
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* CIERRE INSTITUCIONAL */}
      <section className="bg-soft section-padding-asym">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div
            className="card bg-soft p-3rem text-center"
            style={{
              border: '1px solid var(--border-color, #e5e7eb)',
              borderRadius: '8px',
            }}
          >
            <span className="section-tag">
              {isEs
                ? 'MAC CONSULTORES JURÍDICOS & ASOCIADOS'
                : 'MAC CONSULTORES JURÍDICOS & ASOCIADOS'}
            </span>

            <h3 className="serif mt-1rem mb-1rem" style={{ fontSize: '1.4rem' }}>
              {isEs
                ? '“Una firma construida sobre rigor técnico, lealtad profesional y estrategia jurídica para asuntos de alta complejidad.”'
                : '“A firm built on technical rigor, professional loyalty, and legal strategy for high-complexity matters.”'}
            </h3>

            <p
              className="max-w-800 mx-auto mb-2rem text-muted"
              style={{ lineHeight: 1.6, fontSize: '0.95rem' }}
            >
              {isEs
                ? 'Conozca nuestro enfoque institucional y contacte a la firma para evaluar asuntos que requieran criterio jurídico especializado en Venezuela.'
                : 'Learn about our institutional approach and contact the firm to assess matters requiring specialized legal judgment in Venezuela.'}
            </p>

            <div
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Link href={getRoute(locale, 'contact')} className="btn btn-primary">
                {isEs ? 'CONTACTAR A LA FIRMA' : 'CONTACT THE FIRM'}
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
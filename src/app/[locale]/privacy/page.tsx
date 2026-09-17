import React from "react";
import { getDictionary } from "@/i18n/getDictionary";
import { getRoute } from "@/lib/routes";
import InstitutionalClosingCard from "@/components/InstitutionalClosingCard";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const isEs = locale === 'es';
  const title = dict?.seo?.privacidad?.title || (isEs ? 'Política de Privacidad | Mac Consultores Jurídicos & Asociados' : 'Privacy Policy | Mac Consultores Jurídicos & Asociados');
  const description = dict?.seo?.privacidad?.description || (isEs 
    ? 'Política de privacidad y protección de datos personales de Mac Consultores Jurídicos & Asociados.' 
    : 'Privacy policy and personal data protection of Mac Consultores Jurídicos & Asociados.');
  
  const url = `https://mac-consultores-site-clean.vercel.app/${locale}/privacy`;
  const esUrl = `https://mac-consultores-site-clean.vercel.app/es/privacy`;
  const enUrl = `https://mac-consultores-site-clean.vercel.app/en/privacy`;
  
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        'es': esUrl,
        'en': enUrl,
      },
    },
    openGraph: {
      title: dict?.seo?.privacidad?.og_title || title,
      description: dict?.seo?.privacidad?.og_description || description,
      url,
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
      title: dict?.seo?.privacidad?.og_title || title,
      description: dict?.seo?.privacidad?.og_description || description,
      images: ['/assets/img/logo-mac-og.jpg'],
    },
  };
}

export default async function Privacidad({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const breadcrumbBase =
    dict?.legal_pages?.privacy_breadcrumb || (locale === "en" ? "Corporate Information" : "Información Corporativa");

  const pageTitle =
    dict?.legal_pages?.privacy_h1 || (locale === "en" ? "Privacy Policy" : "Política de Privacidad");

  const privacy = dict?.legal_pages?.privacy;
  const closingCard = privacy?.closing_card;

  return (
    <main className="page-legal">
      <header className="page-header">
        <div className="container">
          <span className="breadcrumb">
            {breadcrumbBase} / {pageTitle}
          </span>
          <h1>{pageTitle}</h1>
        </div>
      </header>

      <section className="legal-content py-60px">
        <div className="container">
          <div className="layout-narrow">
            <h2>{privacy?.subtitle}</h2>

            <h3 className="mt-2rem">{privacy?.sec1_title}</h3>
            <p>{privacy?.sec1_desc}</p>

            <h3 className="mt-2rem">{privacy?.sec2_title}</h3>
            <p>{privacy?.sec2_desc}</p>

            <h3 className="mt-2rem">{privacy?.sec3_title}</h3>
            <p>{privacy?.sec3_desc}</p>

            <h3 className="mt-2rem">{privacy?.sec4_title}</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: privacy?.sec4_desc || "",
              }}
            />
          </div>
        </div>
      </section>

      {closingCard && (
        <InstitutionalClosingCard
          tag={closingCard.tag}
          title={closingCard.title}
          description={closingCard.description}
          primaryActionLabel={closingCard.primary_action}
          primaryActionHref="mailto:infomacconsul@gmail.com?subject=Privacy%20and%20Data%20Protection%20Inquiry"
          secondaryActionLabel={closingCard.secondary_action}
          secondaryActionHref={getRoute(locale, "legalNotice")}
          variant="legal"
          locale={locale}
          titleId="privacy-closing-title"
        />
      )}
    </main>
  );
}


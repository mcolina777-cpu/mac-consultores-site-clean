import React from "react";
import { getDictionary } from "@/i18n/getDictionary";
import { getRoute } from "@/lib/routes";
import InstitutionalClosingCard from "@/components/InstitutionalClosingCard";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const isEs = locale === 'es';
  const title = dict?.seo?.aviso_legal?.title || (isEs ? 'Aviso Legal | Mac Consultores Jurídicos & Asociados' : 'Legal Notice | Mac Consultores Jurídicos & Asociados');
  const description = dict?.seo?.aviso_legal?.description || (isEs 
    ? 'Condiciones de uso y aviso legal del sitio web de Mac Consultores Jurídicos & Asociados.' 
    : 'Terms of use and legal notice of the Mac Consultores Jurídicos & Asociados website.');
  
  const url = `https://mac-consultores-site-clean.vercel.app/${locale}/legal`;
  const esUrl = `https://mac-consultores-site-clean.vercel.app/es/legal`;
  const enUrl = `https://mac-consultores-site-clean.vercel.app/en/legal`;
  
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
      title: dict?.seo?.aviso_legal?.og_title || title,
      description: dict?.seo?.aviso_legal?.og_description || description,
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
      title: dict?.seo?.aviso_legal?.og_title || title,
      description: dict?.seo?.aviso_legal?.og_description || description,
      images: ['/assets/img/logo-mac-og.jpg'],
    },
  };
}

export default async function AvisoLegal({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const breadcrumbBase =
    dict?.legal_pages?.notice_breadcrumb || (locale === "en" ? "Corporate Information" : "Información Corporativa");

  const pageTitle =
    dict?.legal_pages?.notice_h1 || (locale === "en" ? "Legal Notice" : "Aviso Legal");

  const notice = dict?.legal_pages?.notice;
  const closingCard = notice?.closing_card;

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
            <h2>{notice?.subtitle}</h2>

            <h3 className="mt-2rem">{notice?.sec1_title}</h3>
            <p>{notice?.sec1_desc}</p>

            <h3 className="mt-2rem">{notice?.sec2_title}</h3>
            <p>{notice?.sec2_desc}</p>

            <h3 className="mt-2rem">{notice?.sec3_title}</h3>
            <p>{notice?.sec3_desc}</p>

            <h3 className="mt-2rem">{notice?.sec4_title}</h3>
            <p>{notice?.sec4_desc}</p>
          </div>
        </div>
      </section>

      {closingCard && (
        <InstitutionalClosingCard
          tag={closingCard.tag}
          title={closingCard.title}
          description={closingCard.description}
          primaryActionLabel={closingCard.primary_action}
          primaryActionHref={getRoute(locale, "contact")}
          secondaryActionLabel={closingCard.secondary_action}
          secondaryActionHref={getRoute(locale, "home")}
          variant="legal"
          locale={locale}
          titleId="legal-notice-closing-title"
        />
      )}
    </main>
  );
}


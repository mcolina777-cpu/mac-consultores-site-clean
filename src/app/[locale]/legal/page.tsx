import React from "react";
import { getDictionary } from "@/i18n/getDictionary";

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
    dict?.legal_pages?.notice_breadcrumb ;

  const pageTitle =
    locale === "en"
      ? dict?.legal_pages?.notice_h1
      : "Aviso Legal";

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
            {locale === "en" ? (
              <>
                <h2>{dict?.legal_pages?.notice?.subtitle}</h2>
                <h3 className="mt-2rem">
                  {dict?.legal_pages?.notice?.sec1_title}
                </h3>
                <p>{dict?.legal_pages?.notice?.sec1_desc}</p>

                <h3 className="mt-2rem">
                  {dict?.legal_pages?.notice?.sec2_title}
                </h3>
                <p>{dict?.legal_pages?.notice?.sec2_desc}</p>

                <h3 className="mt-2rem">
                  {dict?.legal_pages?.notice?.sec3_title}
                </h3>
                <p>{dict?.legal_pages?.notice?.sec3_desc}</p>

                <h3 className="mt-2rem">
                  {dict?.legal_pages?.notice?.sec4_title}
                </h3>
                <p>{dict?.legal_pages?.notice?.sec4_desc}</p>
              </>
            ) : (
              <>
                <h2>1. Condiciones de Uso del Sitio</h2>
                <p>
                  El acceso y uso de este sitio web atribuye la condición de usuario, aceptando, desde
                  dicho acceso y/o uso, las presentes condiciones de uso. El contenido de este sitio web
                  tiene carácter general e informativo.
                </p>

                <h2 className="mt-2rem">2. Ausencia de Asesoría Individual</h2>
                <p>
                  La información contenida en este sitio web no constituye asesoramiento legal,
                  profesional o de cualquier otra índole. La recepción de información a través de este
                  sitio web no crea una relación abogado-cliente. Recomendamos que busque el consejo
                  legal adecuado antes de tomar decisiones sobre cualquier asunto legal.
                </p>

                <h2 className="mt-2rem">3. Responsabilidad Limitada</h2>
                <p>
                  Mac Consultores Jurídicos &amp; Asociados no se hace responsable de las decisiones
                  tomadas a partir de la información suministrada en el sitio web, ni de los daños y
                  perjuicios producidos en el usuario o terceros con motivo de actuaciones que tengan
                  como único fundamento la información obtenida en el sitio web.
                </p>

                <h2 className="mt-2rem">4. Aceptación de Términos</h2>
                <p>
                  Al utilizar nuestros servicios y nuestro sitio web, usted acepta los términos descritos
                  en este Aviso Legal. Para cualquier duda, por favor, póngase en contacto a través de
                  nuestros canales oficiales.
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

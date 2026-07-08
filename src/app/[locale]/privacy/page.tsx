import React from "react";
import { getDictionary } from "@/i18n/getDictionary";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict: any = await getDictionary(locale);
  
  return {
    title: dict?.seo?.privacidad?.title || 'Política de Privacidad | Mac Consultores Jurídicos & Asociados',
    description: dict?.seo?.privacidad?.description || 'Política de privacidad y protección de datos personales.',
  };
}

export default async function Privacidad({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict: any = await getDictionary(locale);

  const breadcrumbBase =
    dict?.legal_pages?.privacy_breadcrumb ||
    dict?.footer?.links_nav ||
    (locale === "en" ? "Corporate Information" : "Inicio");

  const pageTitle =
    locale === "en"
      ? dict?.legal_pages?.privacy_h1 || "Privacy Policy"
      : "Política de Privacidad";

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

      <section className="legal-content" style={{ padding: "60px 0" }}>
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.8" }}>
            {locale === "en" ? (
              <>
                <h2>{dict?.legal_pages?.privacy?.subtitle || "Data Protection and Confidentiality"}</h2>
                <h3 style={{ marginTop: "2rem" }}>
                  {dict?.legal_pages?.privacy?.sec1_title || "1. Data Collection"}
                </h3>
                <p>{dict?.legal_pages?.privacy?.sec1_desc}</p>

                <h3 style={{ marginTop: "2rem" }}>
                  {dict?.legal_pages?.privacy?.sec2_title || "2. Purpose of Processing"}
                </h3>
                <p>{dict?.legal_pages?.privacy?.sec2_desc}</p>

                <h3 style={{ marginTop: "2rem" }}>
                  {dict?.legal_pages?.privacy?.sec3_title || "3. Confidentiality"}
                </h3>
                <p>{dict?.legal_pages?.privacy?.sec3_desc}</p>

                <h3 style={{ marginTop: "2rem" }}>
                  {dict?.legal_pages?.privacy?.sec4_title || "4. User Rights"}
                </h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: dict?.legal_pages?.privacy?.sec4_desc || "",
                  }}
                />
              </>
            ) : (
              <>
                <h2>1. Tratamiento de Datos Personales</h2>
                <p>
                  Mac Consultores Jurídicos &amp; Asociados está comprometido con la protección de la
                  privacidad y los datos personales de nuestros clientes y usuarios. Toda la información
                  personal recabada a través de formularios o correos electrónicos es tratada con
                  estricta confidencialidad.
                </p>

                <h2 style={{ marginTop: "2rem" }}>2. Finalidad</h2>
                <p>
                  Los datos suministrados serán utilizados exclusivamente para gestionar sus consultas,
                  agendar reuniones, proveer los servicios jurídicos solicitados y remitir información de
                  interés relacionada con nuestras áreas de práctica.
                </p>

                <h2 style={{ marginTop: "2rem" }}>3. Bases Legales y Seguridad</h2>
                <p>
                  El tratamiento de datos se fundamenta en el consentimiento expreso del usuario y en la
                  ejecución de la relación precontractual o contractual. Hemos implementado medidas de
                  seguridad técnicas y organizativas para evitar la pérdida, mal uso, alteración, acceso
                  no autorizado y robo de los datos personales facilitados.
                </p>

                <h2 style={{ marginTop: "2rem" }}>4. Derechos del Usuario y Contacto</h2>
                <p>
                  Usted puede ejercer sus derechos de acceso, rectificación, cancelación u oposición
                  dirigiéndose a nosotros a través del correo electrónico{" "}
                  <a href="mailto:infomacconsul@gmail.com" style={{ color: "var(--accent)" }}>
                    infomacconsul@gmail.com
                  </a>
                  , indicando el derecho que desea ejercer.
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

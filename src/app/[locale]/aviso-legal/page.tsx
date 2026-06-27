import React from 'react';
import { getDictionary } from "@/i18n/getDictionary";

export const metadata = {
  title: 'Aviso Legal | Mac Consultores Jurídicos & Asociados',
  description: 'Condiciones de uso y aviso legal del sitio web de Mac Consultores Jurídicos & Asociados.',
};

export default async function AvisoLegal({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict: any = await getDictionary(locale);

  return (
    <main className="page-legal">
      <header className="page-header">
        <div className="container">
          <span className="breadcrumb">{dict?.footer?.links_nav || "Inicio"} / Aviso Legal</span>
          <h1>Aviso Legal</h1>
        </div>
      </header>

      <section className="legal-content" style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
            <h2>1. Condiciones de Uso del Sitio</h2>
            <p>El acceso y uso de este sitio web atribuye la condición de usuario, aceptando, desde dicho acceso y/o uso, las presentes condiciones de uso. El contenido de este sitio web tiene carácter general e informativo.</p>
            
            <h2 style={{ marginTop: '2rem' }}>2. Ausencia de Asesoría Individual</h2>
            <p>La información contenida en este sitio web no constituye asesoramiento legal, profesional o de cualquier otra índole. La recepción de información a través de este sitio web no crea una relación abogado-cliente. Recomendamos que busque el consejo legal adecuado antes de tomar decisiones sobre cualquier asunto legal.</p>
            
            <h2 style={{ marginTop: '2rem' }}>3. Responsabilidad Limitada</h2>
            <p>Mac Consultores Jurídicos & Asociados no se hace responsable de las decisiones tomadas a partir de la información suministrada en el sitio web, ni de los daños y perjuicios producidos en el usuario o terceros con motivo de actuaciones que tengan como único fundamento la información obtenida en el sitio web.</p>
            
            <h2 style={{ marginTop: '2rem' }}>4. Aceptación de Términos</h2>
            <p>Al utilizar nuestros servicios y nuestro sitio web, usted acepta los términos descritos en este Aviso Legal. Para cualquier duda, por favor, póngase en contacto a través de nuestros canales oficiales.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

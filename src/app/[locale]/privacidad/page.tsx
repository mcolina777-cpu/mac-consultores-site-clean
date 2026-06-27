import React from 'react';
import { getDictionary } from "@/i18n/getDictionary";

export const metadata = {
  title: 'Política de Privacidad | Mac Consultores Jurídicos & Asociados',
  description: 'Política de privacidad y protección de datos personales.',
};

export default async function Privacidad({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict: any = await getDictionary(locale);

  return (
    <main className="page-legal">
      <header className="page-header">
        <div className="container">
          <span className="breadcrumb">{dict?.footer?.links_nav || "Inicio"} / Privacidad</span>
          <h1>Política de Privacidad</h1>
        </div>
      </header>

      <section className="legal-content" style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
            <h2>1. Tratamiento de Datos Personales</h2>
            <p>Mac Consultores Jurídicos & Asociados está comprometido con la protección de la privacidad y los datos personales de nuestros clientes y usuarios. Toda la información personal recabada a través de formularios o correos electrónicos es tratada con estricta confidencialidad.</p>
            
            <h2 style={{ marginTop: '2rem' }}>2. Finalidad</h2>
            <p>Los datos suministrados serán utilizados exclusivamente para gestionar sus consultas, agendar reuniones, proveer los servicios jurídicos solicitados y remitir información de interés relacionada con nuestras áreas de práctica.</p>
            
            <h2 style={{ marginTop: '2rem' }}>3. Bases Legales y Seguridad</h2>
            <p>El tratamiento de datos se fundamenta en el consentimiento expreso del usuario y en la ejecución de la relación precontractual o contractual. Hemos implementado medidas de seguridad técnicas y organizativas para evitar la pérdida, mal uso, alteración, acceso no autorizado y robo de los datos personales facilitados.</p>
            
            <h2 style={{ marginTop: '2rem' }}>4. Derechos del Usuario y Contacto</h2>
            <p>Usted puede ejercer sus derechos de acceso, rectificación, cancelación u oposición dirigiéndose a nosotros a través del correo electrónico <a href="mailto:infomacconsul@gmail.com" style={{ color: 'var(--accent)' }}>infomacconsul@gmail.com</a>, indicando el derecho que desea ejercer.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

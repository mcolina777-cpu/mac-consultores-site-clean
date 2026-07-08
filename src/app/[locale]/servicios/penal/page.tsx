import React from "react";

export const metadata = {
  title: "Derecho Penal | Mac Consultores Jurídicos & Asociados",
  description:
    "Defensa penal estratégica para personas naturales y jurídicas en Venezuela.",
};

export default function PenalServicePage() {
  return (
    <main className="page-servicios">
      <header className="page-header">
        <div className="container">
          <span className="breadcrumb">Servicios</span>
          <h1>Derecho Penal</h1>
        </div>
      </header>
      <section>
        <div className="container">
          <p>
            Ofrecemos defensa penal estratégica para personas naturales y jurídicas,
            con enfoque en la prevención de riesgos, la protección de garantías
            constitucionales y la gestión integral de casos complejos.
          </p>
        </div>
      </section>
    </main>
  );
}

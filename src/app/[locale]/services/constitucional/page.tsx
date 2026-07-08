import React from "react";

export const metadata = {
  title: "Defensa Constitucional | Mac Consultores Jurídicos & Asociados",
  description:
    "Protección y defensa de derechos fundamentales ante jurisdicción constitucional.",
};

export default function ConstitucionalServicePage() {
  return (
    <main className="page-servicios">
      <header className="page-header">
        <div className="container">
          <span className="breadcrumb">Servicios</span>
          <h1>Defensa Constitucional</h1>
        </div>
      </header>
      <section>
        <div className="container">
          <p>
            Brindamos asesoría y representación en materia de justicia constitucional,
            garantizando la defensa de los derechos fundamentales y el respeto al debido
            proceso ante las máximas instancias del país.
          </p>
        </div>
      </section>
    </main>
  );
}

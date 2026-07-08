import React from "react";

export const metadata = {
  title: "Consular Services | Mac Consultores Jurídicos & Asociados",
  description:
    "Comprehensive management of consular procedures and document handling.",
};

export default function ConsularServicesPage() {
  return (
    <main className="page-servicios">
      <header className="page-header">
        <div className="container">
          <span className="breadcrumb">Services</span>
          <h1>Consular Services</h1>
        </div>
      </header>
      <section>
        <div className="container">
          <p>
            We facilitate the comprehensive management of consular procedures,
            legalizations, apostilles, and other document handling with diplomatic
            representations, ensuring compliance with international regulations.
          </p>
        </div>
      </section>
    </main>
  );
}

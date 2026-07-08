import React from "react";

export const metadata = {
  title: "International Cooperation | Mac Consultores Jurídicos & Asociados",
  description:
    "Cross-border legal cooperation and international case coordination.",
};

export default function InternationalCooperationPage() {
  return (
    <main className="page-servicios">
      <header className="page-header">
        <div className="container">
          <span className="breadcrumb">Services</span>
          <h1>International Cooperation</h1>
        </div>
      </header>
      <section>
        <div className="container">
          <p>
            We coordinate cross-border legal defense and cooperation strategies,
            working together with foreign law firms and authorities to protect
            our clients' interests globally.
          </p>
        </div>
      </section>
    </main>
  );
}

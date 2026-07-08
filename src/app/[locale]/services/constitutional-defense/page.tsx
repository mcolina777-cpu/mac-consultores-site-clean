import React from "react";

export const metadata = {
  title: "Constitutional Defense | Mac Consultores Jurídicos & Asociados",
  description:
    "Protection and defense of fundamental rights in constitutional jurisdiction.",
};

export default function ConstitutionalDefenseServicePage() {
  return (
    <main className="page-servicios">
      <header className="page-header">
        <div className="container">
          <span className="breadcrumb">Services</span>
          <h1>Constitutional Defense</h1>
        </div>
      </header>
      <section>
        <div className="container">
          <p>
            We offer legal counsel and representation in constitutional justice matters,
            guaranteeing the defense of fundamental rights and due process
            before the highest courts of the country.
          </p>
        </div>
      </section>
    </main>
  );
}

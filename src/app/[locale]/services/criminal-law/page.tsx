import React from "react";

export const metadata = {
  title: "Criminal Law | Mac Consultores Jurídicos & Asociados",
  description:
    "Strategic criminal defense for individuals and corporations in Venezuela.",
};

export default function CriminalLawServicePage() {
  return (
    <main className="page-servicios">
      <header className="page-header">
        <div className="container">
          <span className="breadcrumb">Services</span>
          <h1>Criminal Law</h1>
        </div>
      </header>
      <section>
        <div className="container">
          <p>
            We provide strategic criminal defense for individuals and corporations,
            with a strong focus on risk prevention, constitutional guarantees,
            and comprehensive management of complex cases.
          </p>
        </div>
      </section>
    </main>
  );
}

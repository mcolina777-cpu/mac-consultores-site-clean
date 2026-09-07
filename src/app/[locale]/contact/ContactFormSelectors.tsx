"use client";

import React, { useState } from "react";

// CORRECCIÓN UX:
// El campo de naturaleza penal se muestra únicamente
// para motivos de consulta penal y se restablece a “No aplica”
// cuando el usuario selecciona un motivo no penal.

interface ContactFormSelectorsProps {
  dict?: {
    contacto?: {
      form?: {
        label_reason?: string;
        reason_default?: string;
        reason_opt1?: string;
        reason_opt2?: string;
        reason_opt3?: string;
        reason_opt4?: string;
        reason_opt5?: string;
        reason_probono?: string;
        reason_opt6?: string;
        hint_practice?: string;
        label_penal?: string;
        penal_default?: string;
        penal_opt1?: string;
        penal_opt2?: string;
      };
    };
  };
  locale: string;
}

const PENAL_MOTIVOS = new Set([
  "Consultoría Penal Corporativa",
  "Corporate Criminal Consulting",
  "Denuncia o Querella (Sin Proceso Previo)",
  "Complaint or Accusation (Without Prior Proceedings)",
  "Segunda Opinión Penal (Proceso en Curso)",
  "Second Criminal Opinion (Ongoing Proceeding)",
]);

export default function ContactFormSelectors({
  dict,
  locale,
}: ContactFormSelectorsProps) {
  const defaultPenalValue = locale === "es" ? "No aplica" : "Not applicable";
  const [selectedMotivo, setSelectedMotivo] = useState("");
  const [naturalezaPenal, setNaturalezaPenal] = useState(defaultPenalValue);

  const isPenal = PENAL_MOTIVOS.has(selectedMotivo);

  const handleMotivoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedMotivo(value);
    if (!PENAL_MOTIVOS.has(value)) {
      setNaturalezaPenal(defaultPenalValue);
    }
  };

  return (
    <>
      {/* CORRECCIÓN BILINGÜE:
          Los valores enviados por los selectores de Contacto corresponden
          al locale activo y no permanecen fijados en español. */}
      <div className="form-group mb-1-5rem">
        <label className="form-label">
          {dict?.contacto?.form?.label_reason}
        </label>
        <select
          className="form-input font-inherit"
          name="motivo"
          required
          value={selectedMotivo}
          onChange={handleMotivoChange}
        >
          <option value="" disabled>
            {dict?.contacto?.form?.reason_default}
          </option>
          <option
            value={
              locale === "es"
                ? "Consultoría Penal Corporativa"
                : "Corporate Criminal Consulting"
            }
          >
            {dict?.contacto?.form?.reason_opt1}
          </option>
          <option
            value={
              locale === "es"
                ? "Denuncia o Querella (Sin Proceso Previo)"
                : "Complaint or Accusation (Without Prior Proceedings)"
            }
          >
            {dict?.contacto?.form?.reason_opt2}
          </option>
          <option
            value={
              locale === "es"
                ? "Segunda Opinión Penal (Proceso en Curso)"
                : "Second Criminal Opinion (Ongoing Proceeding)"
            }
          >
            {dict?.contacto?.form?.reason_opt3}
          </option>
          <option
            value={
              locale === "es"
                ? "Trámites Consulares y Gestión Documental"
                : "Consular Procedures and Document Management"
            }
          >
            {dict?.contacto?.form?.reason_opt4}
          </option>
          <option
            value={
              locale === "es"
                ? "Operaciones Patrimoniales y Corporativas"
                : "Asset and Corporate Transactions"
            }
          >
            {dict?.contacto?.form?.reason_opt5}
          </option>
          <option
            value={
              locale === "es"
                ? "Solicitud de Evaluación Pro Bono"
                : "Pro Bono Evaluation Request"
            }
          >
            {dict?.contacto?.form?.reason_probono}
          </option>
          <option value={locale === "es" ? "Otros" : "Other"}>
            {dict?.contacto?.form?.reason_opt6}
          </option>
        </select>
        {dict?.contacto?.form?.hint_practice && (
          <small className="form-hint form-hint-text">
            {dict.contacto.form.hint_practice}
          </small>
        )}
      </div>

      {isPenal ? (
        <div className="form-group mb-1-5rem">
          <label className="form-label">
            {dict?.contacto?.form?.label_penal}
          </label>
          <select
            className="form-input font-inherit"
            name="naturaleza-penal"
            value={naturalezaPenal}
            onChange={(e) => setNaturalezaPenal(e.target.value)}
          >
            <option value={defaultPenalValue}>
              {dict?.contacto?.form?.penal_default}
            </option>
            <option
              value={
                locale === "es"
                  ? "Delitos Económicos / Financieros"
                  : "Economic / Financial Crimes"
              }
            >
              {dict?.contacto?.form?.penal_opt1}
            </option>
            <option
              value={
                locale === "es"
                  ? "Legitimación de Capitales / Delitos Financieros"
                  : "Money Laundering / Financial Crimes"
              }
            >
              {dict?.contacto?.form?.penal_opt2}
            </option>
          </select>
        </div>
      ) : (
        <input type="hidden" name="naturaleza-penal" value={defaultPenalValue} />
      )}
    </>
  );
}

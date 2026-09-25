'use client';

import React, { useState, useEffect, useRef } from 'react';

interface AssessmentModalProps {
  dict: any;
  locale: string;
}

interface FormData {
  // Step 1
  fullName: string;
  email: string;
  phone: string;
  country: string;
  actingAs: 'individual' | 'organization';
  organization: string;
  role: string;
  sector: string;
  isAuthorized: boolean;

  // Step 2
  exposureNature: string;
  factualContext: string;
  venezuelaRelationship: string;
  relevantParties: string;
  relevantContracts: string;
  proceedings: string;

  // Step 3
  decisionIssue: string;
  practicalPurpose: string;
  availableDocs: string[];
  pendingInfo: string;
  mainJurisdiction: string;
  additionalJurisdictions: string;
  timeline: string;
  hasDeadline: string;
  deadlineDate: string;
  unknownExactDate: boolean;
  deadlineDesc: string;
  deadlineUnsureExplanation: string;
  urgencyLevel: string;

  // Step 4
  decl1: boolean;
  decl2: boolean;
  decl3: boolean;
  decl4: boolean;
  decl5: boolean;
}

const initialFormData: FormData = {
  fullName: '',
  email: '',
  phone: '',
  country: '',
  actingAs: 'organization',
  organization: '',
  role: '',
  sector: '',
  isAuthorized: false,

  exposureNature: '',
  factualContext: '',
  venezuelaRelationship: '',
  relevantParties: '',
  relevantContracts: '',
  proceedings: '',

  decisionIssue: '',
  practicalPurpose: '',
  availableDocs: [],
  pendingInfo: '',
  mainJurisdiction: 'venezuela',
  additionalJurisdictions: '',
  timeline: '',
  hasDeadline: 'no',
  deadlineDate: '',
  unknownExactDate: false,
  deadlineDesc: '',
  deadlineUnsureExplanation: '',
  urgencyLevel: 'normal',

  decl1: false,
  decl2: false,
  decl3: false,
  decl4: false,
  decl5: false,
};

export default function PreliminaryAssessmentModal({ dict, locale }: AssessmentModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionReference, setSubmissionReference] = useState('');
  const [serviceError, setServiceError] = useState<{
    type: string;
    message?: string;
  } | null>(null);
  const [honeypot, setHoneypot] = useState('');

  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const modalContainerRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const formOpenedAtRef = useRef<number>(Date.now());

  const t = dict || {};
  const isEs = locale === 'es';

  // Body scroll lock & focus management
  useEffect(() => {
    if (isOpen) {
      formOpenedAtRef.current = Date.now();
      const prevActive = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';

      const timer = setTimeout(() => {
        closeBtnRef.current?.focus();
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          handleCloseModal();
          return;
        }

        if (e.key === 'Tab' && modalContainerRef.current) {
          const focusableElements = modalContainerRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusableElements.length === 0) return;

          const firstElem = focusableElements[0];
          const lastElem = focusableElements[focusableElements.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === firstElem) {
              e.preventDefault();
              lastElem.focus();
            }
          } else {
            if (document.activeElement === lastElem) {
              e.preventDefault();
              firstElem.focus();
            }
          }
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
        prevActive?.focus?.();
      };
    }
  }, [isOpen]);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) {
      handleCloseModal();
    }
  };

  // Text inputs handler
  const handleInputChange = (
    field: keyof FormData,
    value: string | boolean | string[]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  // Checkbox toggle for multi-select availableDocs
  const handleDocToggle = (doc: string) => {
    setFormData((prev) => {
      const current = prev.availableDocs;
      const exists = current.includes(doc);
      let updated: string[];
      if (exists) {
        updated = current.filter((d) => d !== doc);
      } else {
        updated = [...current, doc];
      }
      return { ...prev, availableDocs: updated };
    });
  };

  // Validation
  const validateStep = (currentStep: number): boolean => {
    const errs: Record<string, string> = {};
    const valMsg = t.validation || {};

    if (currentStep === 1) {
      if (!formData.fullName.trim()) {
        errs.fullName = valMsg.required || 'Campo obligatorio';
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.trim()) {
        errs.email = valMsg.required || 'Campo obligatorio';
      } else if (!emailRegex.test(formData.email.trim())) {
        errs.email = valMsg.invalid_email || 'Correo inválido';
      }
      if (!formData.country.trim()) {
        errs.country = valMsg.country_required || valMsg.required || 'Campo obligatorio';
      }
      if (formData.actingAs === 'organization') {
        if (!formData.organization.trim()) {
          errs.organization = valMsg.organization_required || 'Campo obligatorio';
        }
        if (!formData.role.trim()) {
          errs.role = valMsg.role_required || 'Campo obligatorio';
        }
        if (!formData.isAuthorized) {
          errs.isAuthorized = valMsg.authorization_required || 'Debe confirmar autorización';
        }
      }
    }

    if (currentStep === 2) {
      if (!formData.exposureNature) {
        errs.exposureNature = valMsg.required || 'Campo obligatorio';
      }
      if (!formData.factualContext.trim()) {
        errs.factualContext = valMsg.required || 'Campo obligatorio';
      }
      if (!formData.venezuelaRelationship.trim()) {
        errs.venezuelaRelationship = valMsg.required || 'Campo obligatorio';
      }
    }

    if (currentStep === 3) {
      if (!formData.decisionIssue.trim()) {
        errs.decisionIssue = valMsg.required || 'Campo obligatorio';
      }
      if (!formData.practicalPurpose) {
        errs.practicalPurpose = valMsg.required || 'Campo obligatorio';
      }
      if (!formData.mainJurisdiction) {
        errs.mainJurisdiction = valMsg.required || 'Campo obligatorio';
      }
      if (
        (formData.mainJurisdiction === 'other' || formData.mainJurisdiction === 'both') &&
        !formData.additionalJurisdictions.trim()
      ) {
        errs.additionalJurisdictions = valMsg.additional_jurisdiction_required || 'Campo obligatorio';
      }
      if (!formData.hasDeadline) {
        errs.hasDeadline = valMsg.required || 'Campo obligatorio';
      }
      if (formData.hasDeadline === 'yes') {
        if (!formData.unknownExactDate && !formData.deadlineDate.trim()) {
          errs.deadlineDate = valMsg.deadline_date_required || 'Indique fecha o marque que no la conoce';
        }
        if (!formData.deadlineDesc.trim()) {
          errs.deadlineDesc = valMsg.deadline_desc_required || 'Campo obligatorio';
        }
      }
      if (!formData.urgencyLevel) {
        errs.urgencyLevel = valMsg.required || 'Campo obligatorio';
      }
    }

    if (currentStep === 4) {
      if (!formData.decl1 || !formData.decl2 || !formData.decl3 || !formData.decl4 || !formData.decl5) {
        errs.declarations = valMsg.declarations_required || 'Debe aceptar todas las declaraciones';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      if (step < 4) {
        setStep((prev) => (prev + 1) as 1 | 2 | 3 | 4);
        if (modalContainerRef.current) {
          const bodyEl = modalContainerRef.current.querySelector('.mli-modal-body');
          if (bodyEl) bodyEl.scrollTop = 0;
        }
      }
    }
  };

  const handleBack = () => {
    setErrors({});
    if (step > 1) {
      setStep((prev) => (prev - 1) as 1 | 2 | 3 | 4);
      if (modalContainerRef.current) {
        const bodyEl = modalContainerRef.current.querySelector('.mli-modal-body');
        if (bodyEl) bodyEl.scrollTop = 0;
      }
    }
  };

  const handleJumpToStep = (targetStep: 1 | 2 | 3) => {
    setErrors({});
    setStep(targetStep);
    if (modalContainerRef.current) {
      const bodyEl = modalContainerRef.current.querySelector('.mli-modal-body');
      if (bodyEl) bodyEl.scrollTop = 0;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    setIsProcessing(true);
    setServiceError(null);

    try {
      const response = await fetch('/api/preliminary-assessment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          locale,
          _hp: honeypot,
          formLoadedAt: formOpenedAtRef.current,
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        setSubmissionReference(data.reference || '');
        setIsSubmitted(true);
        setServiceError(null);
      } else if (response.status === 503 || data?.error === 'service_not_configured') {
        setServiceError({
          type: 'service_not_configured',
          message: data?.message,
        });
      } else {
        setServiceError({
          type: 'generic',
          message:
            data?.message ||
            (isEs
              ? 'No fue posible procesar su solicitud en este momento. Por favor intente más tarde.'
              : 'Unable to process your request at this time. Please try again later.'),
        });
      }
    } catch {
      setServiceError({
        type: 'connection_error',
        message:
          t.service_unavailable?.connection_error ||
          (isEs
            ? 'No fue posible establecer comunicación con el servidor. Por favor, verifique su conexión e intente nuevamente.'
            : 'Unable to establish communication with the server. Please check your connection and try again.'),
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleRetry = (e: React.FormEvent) => {
    handleSubmit(e);
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setStep(1);
    setIsSubmitted(false);
    setSubmissionReference('');
    setServiceError(null);
    setHoneypot('');
  };

  return (
    <>
      {/* TRIGGER CTA EXCLUSIVO EN BLOQUE 7 */}
      <div
        className="card mb-2rem"
        style={{
          backgroundColor: '#ffffff',
          border: '1px solid var(--border-color, #e5e7eb)',
          borderLeft: '4px solid var(--accent, #D4AF37)',
          borderRadius: '6px',
          padding: '1.75rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.25rem',
          }}
        >
          <div style={{ flex: '1 1 320px' }}>
            <span
              className="section-tag"
              style={{
                color: 'var(--accent, #990000)',
                fontWeight: 600,
                fontSize: '0.8rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '0.35rem',
              }}
            >
              {t.trigger_tag || 'MAC LEGAL INTELLIGENCE'}
            </span>
            <h3
              className="serif"
              style={{
                fontSize: '1.25rem',
                color: 'var(--primary, #002845)',
                margin: '0 0 0.5rem 0',
              }}
            >
              {t.trigger_title ||
                (isEs
                  ? 'Solicitud de Evaluación Preliminar de Alcance Corporativo'
                  : 'Preliminary Corporate Scope Assessment Request')}
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: '0.92rem',
                lineHeight: 1.55,
                color: 'var(--text-muted, #4b5563)',
              }}
            >
              {t.trigger_desc ||
                (isEs
                  ? 'Vía formal y estructurada para organizaciones con asuntos corporativos, regulatorios, contractuales o transfronterizos relacionados con Venezuela.'
                  : 'Structured and formal intake process for organizations with corporate, regulatory, contractual or cross-border matters involving Venezuela.')}
            </p>
          </div>
          <div>
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setIsOpen(true)}
              className="btn btn-primary"
              style={{ whiteSpace: 'nowrap' }}
              aria-haspopup="dialog"
            >
              {t.trigger_button ||
                (isEs
                  ? 'Iniciar Solicitud de Evaluación Preliminar'
                  : 'Begin Preliminary Assessment Request')}
            </button>
          </div>
        </div>
      </div>

      {/* DIÁLOGO MODAL ACCESIBLE */}
      {isOpen && (
        <div
          ref={overlayRef}
          className="mli-modal-overlay"
          onClick={handleOverlayClick}
          role="presentation"
        >
          <div
            ref={modalContainerRef}
            className="mli-modal-container"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mli-modal-title"
            aria-describedby="mli-modal-desc"
          >
            {/* CABECERA */}
            <div className="mli-modal-header">
              <div>
                <span
                  className="section-tag"
                  style={{
                    color: 'var(--accent, #990000)',
                    fontSize: '0.75rem',
                    marginBottom: '0.25rem',
                    display: 'block',
                  }}
                >
                  {t.header_tag || 'MAC LEGAL INTELLIGENCE'}
                </span>
                <h2
                  id="mli-modal-title"
                  className="serif"
                  style={{
                    fontSize: '1.35rem',
                    color: 'var(--primary, #002845)',
                    margin: '0 0 0.25rem 0',
                    lineHeight: 1.25,
                  }}
                >
                  {t.modal_title}
                </h2>
                <p
                  id="mli-modal-desc"
                  style={{
                    margin: 0,
                    fontSize: '0.86rem',
                    color: 'var(--text-muted, #4b5563)',
                    fontFamily: 'var(--font-inter, sans-serif)',
                  }}
                >
                  {t.modal_subtitle}
                </p>
              </div>
              <button
                ref={closeBtnRef}
                type="button"
                className="mli-modal-close-btn"
                onClick={handleCloseModal}
                aria-label={t.navigation?.close || (isEs ? 'Cerrar' : 'Close')}
              >
                ✕
              </button>
            </div>

            {/* BARRA DE PROGRESO (SI NO HA SIDO ENVIADO NI EN PANTALLA DE ERROR) */}
            {!isSubmitted && !serviceError && (
              <div className="mli-progress-tracker">
                <div className="mli-progress-steps">
                  <div
                    className={`mli-progress-step-pill ${
                      step >= 1 ? (step === 1 ? 'active' : 'completed') : ''
                    }`}
                  />
                  <div
                    className={`mli-progress-step-pill ${
                      step >= 2 ? (step === 2 ? 'active' : 'completed') : ''
                    }`}
                  />
                  <div
                    className={`mli-progress-step-pill ${
                      step >= 3 ? (step === 3 ? 'active' : 'completed') : ''
                    }`}
                  />
                  <div
                    className={`mli-progress-step-pill ${
                      step === 4 ? 'active' : ''
                    }`}
                  />
                </div>
                <div className="mli-progress-label">
                  {step === 1 && (t.progress?.step_1 || 'Paso 1 de 4 — Solicitante y organización')}
                  {step === 2 && (t.progress?.step_2 || 'Paso 2 de 4 — Contexto y exposición')}
                  {step === 3 && (t.progress?.step_3 || 'Paso 3 de 4 — Alcance, información y urgencia')}
                  {step === 4 && (t.progress?.step_4 || 'Paso 4 de 4 — Declaraciones y envío')}
                </div>
              </div>
            )}

            {/* CUERPO DEL MODAL */}
            <div className="mli-modal-body">
              {/* PANTALLA FINAL DE CONFIRMACIÓN */}
              {isSubmitted ? (
                <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(0, 56, 101, 0.08)',
                      color: 'var(--primary, #003865)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.75rem',
                      margin: '0 auto 1.25rem',
                    }}
                  >
                    ✓
                  </div>

                  <h3
                    className="serif"
                    style={{
                      fontSize: '1.45rem',
                      color: 'var(--primary, #002845)',
                      marginBottom: '1rem',
                    }}
                  >
                    {t.confirmation?.title}
                  </h3>

                  <div
                    style={{
                      display: 'inline-block',
                      backgroundColor: 'var(--bg-soft, #F8FAFC)',
                      border: '1px solid #e2e8f0',
                      borderRadius: '6px',
                      padding: '0.6rem 1.25rem',
                      marginBottom: '1.5rem',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.8rem',
                        textTransform: 'uppercase',
                        color: 'var(--text-muted, #4b5563)',
                        display: 'block',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {t.confirmation?.reference_label || (isEs ? 'Referencia de recepción:' : 'Receipt reference:')}
                    </span>
                    <strong
                      style={{
                        fontFamily: 'monospace',
                        fontSize: '1.1rem',
                        color: 'var(--primary, #003865)',
                      }}
                    >
                      {submissionReference}
                    </strong>
                  </div>

                  <div
                    style={{
                      maxWidth: '640px',
                      margin: '0 auto 1.75rem',
                      textAlign: 'left',
                      fontSize: '0.92rem',
                      lineHeight: 1.65,
                      color: 'var(--text-main, #1f2937)',
                    }}
                  >
                    <p style={{ marginBottom: '1rem' }}>{t.confirmation?.text_1}</p>
                    <p style={{ marginBottom: '1rem' }}>{t.confirmation?.text_2}</p>
                    <p
                      style={{
                        margin: 0,
                        fontSize: '0.85rem',
                        fontStyle: 'italic',
                        color: 'var(--text-muted, #4b5563)',
                        borderLeft: '2px solid var(--accent, #D4AF37)',
                        paddingLeft: '0.75rem',
                      }}
                    >
                      {t.confirmation?.text_3}
                    </p>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      justifyContent: 'center',
                      flexWrap: 'wrap',
                    }}
                  >
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="btn btn-primary"
                    >
                      {t.confirmation?.close_btn || 'Cerrar'}
                    </button>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="btn btn-outline"
                    >
                      {t.confirmation?.reset_btn || 'Iniciar una nueva solicitud'}
                    </button>
                  </div>
                </div>
              ) : serviceError ? (
                /* PANTALLA DE INDISPONIBILIDAD TEMPORAL CONTROLADA */
                <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(212, 175, 55, 0.12)',
                      color: 'var(--primary, #003865)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.6rem',
                      margin: '0 auto 1.25rem',
                      border: '1px solid rgba(212, 175, 55, 0.35)',
                    }}
                    aria-hidden="true"
                  >
                    ℹ
                  </div>

                  <h3
                    className="serif"
                    style={{
                      fontSize: '1.4rem',
                      color: 'var(--primary, #002845)',
                      marginBottom: '1rem',
                    }}
                  >
                    {t.service_unavailable?.title ||
                      (isEs
                        ? 'Servicio temporalmente en configuración'
                        : 'Service temporarily under configuration')}
                  </h3>

                  <div
                    style={{
                      maxWidth: '620px',
                      margin: '0 auto 1.75rem',
                      textAlign: 'left',
                      fontSize: '0.92rem',
                      lineHeight: 1.65,
                      color: 'var(--text-main, #1f2937)',
                    }}
                  >
                    <p style={{ marginBottom: '1rem' }}>
                      {serviceError.message ||
                        t.service_unavailable?.description ||
                        (isEs
                          ? 'El canal automatizado para el envío de solicitudes de evaluación preliminar se encuentra en fase de configuración técnica y verificación de seguridad.'
                          : 'The automated channel for preliminary assessment requests is currently undergoing technical setup and security verification.')}
                    </p>
                    <p
                      style={{
                        margin: 0,
                        fontSize: '0.86rem',
                        color: 'var(--text-muted, #4b5563)',
                        borderLeft: '3px solid var(--accent, #D4AF37)',
                        paddingLeft: '0.85rem',
                        backgroundColor: 'var(--bg-soft, #F8FAFC)',
                        padding: '0.75rem 1rem',
                        borderRadius: '4px',
                      }}
                    >
                      {t.service_unavailable?.notice ||
                        (isEs
                          ? 'Sus datos se han conservado íntegramente en este formulario. Puede intentar el envío nuevamente o cerrar esta ventana para continuar más adelante.'
                          : 'Your responses have been fully preserved in this form. You may try submitting again or close this window to continue later.')}
                    </p>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      justifyContent: 'center',
                      flexWrap: 'wrap',
                    }}
                  >
                    <button
                      type="button"
                      onClick={handleRetry}
                      className="btn btn-primary"
                      disabled={isProcessing}
                    >
                      {isProcessing
                        ? (isEs ? 'Verificando…' : 'Checking…')
                        : t.service_unavailable?.retry_btn || (isEs ? 'Intentar nuevamente' : 'Try again')}
                    </button>
                    <button
                      type="button"
                      onClick={() => setServiceError(null)}
                      className="btn btn-outline"
                      disabled={isProcessing}
                    >
                      {t.service_unavailable?.edit_btn || (isEs ? 'Revisar respuestas' : 'Review responses')}
                    </button>
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="btn btn-outline"
                      disabled={isProcessing}
                    >
                      {t.service_unavailable?.close_btn || (isEs ? 'Cerrar' : 'Close')}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  {/* HONEYPOT INVISIBLE */}
                  <div
                    style={{ display: 'none', position: 'absolute', left: '-9999px' }}
                    aria-hidden="true"
                  >
                    <label htmlFor="mli_hp_field">Do not fill this field</label>
                    <input
                      id="mli_hp_field"
                      type="text"
                      name="_hp"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>
                  {/* INTRODUCCIÓN GENERAL (SOLO VISIBLE EN PASO 1) */}
                  {step === 1 && (
                    <div className="mli-notice-box" style={{ marginBottom: '1.5rem' }}>
                      <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.88rem' }}>
                        {t.intro_p1}
                      </p>
                      <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.88rem' }}>
                        {t.intro_p2}
                      </p>
                      <p
                        style={{
                          margin: 0,
                          fontSize: '0.82rem',
                          fontStyle: 'italic',
                          color: 'var(--text-muted, #4b5563)',
                        }}
                      >
                        {t.intro_p3}
                      </p>
                    </div>
                  )}

                  {/* =========================================================
                      PASO 1: SOLICITANTE Y ORGANIZACIÓN
                      ========================================================= */}
                  {step === 1 && (
                    <div>
                      <p
                        style={{
                          fontSize: '0.92rem',
                          lineHeight: 1.55,
                          color: 'var(--text-muted, #4b5563)',
                          marginBottom: '1.5rem',
                        }}
                      >
                        {t.step_1?.intro}
                      </p>

                      <div className="mli-field-group">
                        <label htmlFor="mli_fullName" className="mli-label">
                          {t.step_1?.full_name_label} *
                        </label>
                        <input
                          id="mli_fullName"
                          type="text"
                          className={`mli-input ${errors.fullName ? 'mli-input--error' : ''}`}
                          value={formData.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                          aria-invalid={!!errors.fullName}
                          aria-describedby={errors.fullName ? 'err_fullName' : undefined}
                          autoComplete="name"
                          required
                        />
                        {errors.fullName && (
                          <span id="err_fullName" className="mli-error" role="alert">
                            {errors.fullName}
                          </span>
                        )}
                      </div>

                      <div className="mli-field-group">
                        <label htmlFor="mli_email" className="mli-label">
                          {t.step_1?.email_label} *
                        </label>
                        <input
                          id="mli_email"
                          type="email"
                          className={`mli-input ${errors.email ? 'mli-input--error' : ''}`}
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'err_email' : undefined}
                          autoComplete="email"
                          required
                        />
                        {errors.email && (
                          <span id="err_email" className="mli-error" role="alert">
                            {errors.email}
                          </span>
                        )}
                      </div>

                      <div className="mli-field-group">
                        <label htmlFor="mli_phone" className="mli-label">
                          {t.step_1?.phone_label}
                        </label>
                        <input
                          id="mli_phone"
                          type="tel"
                          className="mli-input"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          autoComplete="tel"
                        />
                        <span className="mli-help">{t.step_1?.phone_help}</span>
                      </div>

                      <div className="mli-field-group">
                        <label htmlFor="mli_country" className="mli-label">
                          {t.step_1?.country_label} *
                        </label>
                        <input
                          id="mli_country"
                          type="text"
                          className={`mli-input ${errors.country ? 'mli-input--error' : ''}`}
                          value={formData.country}
                          onChange={(e) => handleInputChange('country', e.target.value)}
                          aria-invalid={!!errors.country}
                          aria-describedby={errors.country ? 'err_country' : undefined}
                          autoComplete="country-name"
                          required
                        />
                        {errors.country && (
                          <span id="err_country" className="mli-error" role="alert">
                            {errors.country}
                          </span>
                        )}
                      </div>

                      <div className="mli-field-group">
                        <span className="mli-label">
                          {t.step_1?.acting_as_label} *
                        </span>
                        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem' }}>
                          <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontSize: '0.95rem' }}>
                            <input
                              type="radio"
                              name="actingAs"
                              value="organization"
                              checked={formData.actingAs === 'organization'}
                              onChange={() => handleInputChange('actingAs', 'organization')}
                            />
                            {t.step_1?.acting_as_organization}
                          </label>
                          <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontSize: '0.95rem' }}>
                            <input
                              type="radio"
                              name="actingAs"
                              value="individual"
                              checked={formData.actingAs === 'individual'}
                              onChange={() => handleInputChange('actingAs', 'individual')}
                            />
                            {t.step_1?.acting_as_individual}
                          </label>
                        </div>
                      </div>

                      {/* CAMPOS CONDICIONALES SI ACTÚA POR ORGANIZACIÓN */}
                      {formData.actingAs === 'organization' && (
                        <div
                          style={{
                            padding: '1.25rem',
                            border: '1px solid #e2e8f0',
                            borderRadius: '6px',
                            backgroundColor: '#fafbfc',
                            marginBottom: '1.25rem',
                          }}
                        >
                          <div className="mli-field-group">
                            <label htmlFor="mli_organization" className="mli-label">
                              {t.step_1?.organization_label} *
                            </label>
                            <input
                              id="mli_organization"
                              type="text"
                              className={`mli-input ${errors.organization ? 'mli-input--error' : ''}`}
                              value={formData.organization}
                              onChange={(e) => handleInputChange('organization', e.target.value)}
                              aria-invalid={!!errors.organization}
                              aria-describedby={errors.organization ? 'err_organization' : undefined}
                              autoComplete="organization"
                              required
                            />
                            {errors.organization && (
                              <span id="err_organization" className="mli-error" role="alert">
                                {errors.organization}
                              </span>
                            )}
                          </div>

                          <div className="mli-field-group">
                            <label htmlFor="mli_role" className="mli-label">
                              {t.step_1?.role_label} *
                            </label>
                            <input
                              id="mli_role"
                              type="text"
                              className={`mli-input ${errors.role ? 'mli-input--error' : ''}`}
                              value={formData.role}
                              onChange={(e) => handleInputChange('role', e.target.value)}
                              aria-invalid={!!errors.role}
                              aria-describedby={errors.role ? 'err_role' : undefined}
                              required
                            />
                            <span className="mli-help">{t.step_1?.role_help}</span>
                            {errors.role && (
                              <span id="err_role" className="mli-error" role="alert">
                                {errors.role}
                              </span>
                            )}
                          </div>

                          <div className="mli-field-group">
                            <label htmlFor="mli_sector" className="mli-label">
                              {t.step_1?.sector_label}
                            </label>
                            <input
                              id="mli_sector"
                              type="text"
                              className="mli-input"
                              value={formData.sector}
                              onChange={(e) => handleInputChange('sector', e.target.value)}
                            />
                            <span className="mli-help">{t.step_1?.sector_help}</span>
                          </div>

                          <div className="mli-field-group" style={{ marginBottom: 0 }}>
                            <label className="mli-checkbox-card">
                              <input
                                type="checkbox"
                                checked={formData.isAuthorized}
                                onChange={(e) => handleInputChange('isAuthorized', e.target.checked)}
                                aria-invalid={!!errors.isAuthorized}
                              />
                              <span style={{ fontSize: '0.9rem', lineHeight: 1.45 }}>
                                {t.step_1?.authorized_declaration} *
                              </span>
                            </label>
                            {errors.isAuthorized && (
                              <span className="mli-error" role="alert">
                                {errors.isAuthorized}
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* =========================================================
                      PASO 2: CONTEXTO Y EXPOSICIÓN
                      ========================================================= */}
                  {step === 2 && (
                    <div>
                      <p
                        style={{
                          fontSize: '0.92rem',
                          lineHeight: 1.55,
                          color: 'var(--text-muted, #4b5563)',
                          marginBottom: '1.5rem',
                        }}
                      >
                        {t.step_2?.intro}
                      </p>

                      <div className="mli-field-group">
                        <label htmlFor="mli_exposureNature" className="mli-label">
                          {t.step_2?.exposure_nature_label} *
                        </label>
                        <select
                          id="mli_exposureNature"
                          className={`mli-select ${errors.exposureNature ? 'mli-select--error' : ''}`}
                          value={formData.exposureNature}
                          onChange={(e) => handleInputChange('exposureNature', e.target.value)}
                          aria-invalid={!!errors.exposureNature}
                          aria-describedby={errors.exposureNature ? 'err_exposureNature' : undefined}
                          required
                        >
                          <option value="" disabled>
                            {t.step_2?.exposure_nature_placeholder || 'Seleccione una opción'}
                          </option>
                          {t.step_2?.exposure_options?.map((opt: string, idx: number) => (
                            <option key={idx} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        {errors.exposureNature && (
                          <span id="err_exposureNature" className="mli-error" role="alert">
                            {errors.exposureNature}
                          </span>
                        )}
                      </div>

                      <div className="mli-field-group">
                        <label htmlFor="mli_factualContext" className="mli-label">
                          {t.step_2?.factual_context_label} *
                        </label>
                        <textarea
                          id="mli_factualContext"
                          className={`mli-textarea ${errors.factualContext ? 'mli-textarea--error' : ''}`}
                          rows={4}
                          value={formData.factualContext}
                          onChange={(e) => handleInputChange('factualContext', e.target.value)}
                          aria-invalid={!!errors.factualContext}
                          aria-describedby={errors.factualContext ? 'err_factualContext' : undefined}
                          required
                        />
                        <span className="mli-help">{t.step_2?.factual_context_help}</span>
                        {errors.factualContext && (
                          <span id="err_factualContext" className="mli-error" role="alert">
                            {errors.factualContext}
                          </span>
                        )}
                      </div>

                      <div className="mli-field-group">
                        <label htmlFor="mli_venezuelaRelationship" className="mli-label">
                          {t.step_2?.venezuela_relationship_label} *
                        </label>
                        <textarea
                          id="mli_venezuelaRelationship"
                          className={`mli-textarea ${errors.venezuelaRelationship ? 'mli-textarea--error' : ''}`}
                          rows={3}
                          value={formData.venezuelaRelationship}
                          onChange={(e) => handleInputChange('venezuelaRelationship', e.target.value)}
                          aria-invalid={!!errors.venezuelaRelationship}
                          aria-describedby={errors.venezuelaRelationship ? 'err_venezuelaRelationship' : undefined}
                          required
                        />
                        <span className="mli-help">{t.step_2?.venezuela_relationship_help}</span>
                        {errors.venezuelaRelationship && (
                          <span id="err_venezuelaRelationship" className="mli-error" role="alert">
                            {errors.venezuelaRelationship}
                          </span>
                        )}
                      </div>

                      <div className="mli-field-group">
                        <label htmlFor="mli_relevantParties" className="mli-label">
                          {t.step_2?.relevant_parties_label}
                        </label>
                        <textarea
                          id="mli_relevantParties"
                          className="mli-textarea"
                          rows={2}
                          value={formData.relevantParties}
                          onChange={(e) => handleInputChange('relevantParties', e.target.value)}
                        />
                        <span className="mli-help">{t.step_2?.relevant_parties_help}</span>
                      </div>

                      <div className="mli-field-group">
                        <label htmlFor="mli_relevantContracts" className="mli-label">
                          {t.step_2?.relevant_contracts_label}
                        </label>
                        <textarea
                          id="mli_relevantContracts"
                          className="mli-textarea"
                          rows={2}
                          value={formData.relevantContracts}
                          onChange={(e) => handleInputChange('relevantContracts', e.target.value)}
                        />
                        <span className="mli-help">{t.step_2?.relevant_contracts_help}</span>
                      </div>

                      <div className="mli-field-group">
                        <label htmlFor="mli_proceedings" className="mli-label">
                          {t.step_2?.proceedings_label}
                        </label>
                        <textarea
                          id="mli_proceedings"
                          className="mli-textarea"
                          rows={2}
                          value={formData.proceedings}
                          onChange={(e) => handleInputChange('proceedings', e.target.value)}
                        />
                        <span className="mli-help">{t.step_2?.proceedings_help}</span>
                      </div>
                    </div>
                  )}

                  {/* =========================================================
                      PASO 3: ALCANCE, INFORMACIÓN Y URGENCIA
                      ========================================================= */}
                  {step === 3 && (
                    <div>
                      <p
                        style={{
                          fontSize: '0.92rem',
                          lineHeight: 1.55,
                          color: 'var(--text-muted, #4b5563)',
                          marginBottom: '1.5rem',
                        }}
                      >
                        {t.step_3?.intro}
                      </p>

                      <div className="mli-field-group">
                        <label htmlFor="mli_decisionIssue" className="mli-label">
                          {t.step_3?.decision_issue_label} *
                        </label>
                        <textarea
                          id="mli_decisionIssue"
                          className={`mli-textarea ${errors.decisionIssue ? 'mli-textarea--error' : ''}`}
                          rows={3}
                          value={formData.decisionIssue}
                          onChange={(e) => handleInputChange('decisionIssue', e.target.value)}
                          aria-invalid={!!errors.decisionIssue}
                          aria-describedby={errors.decisionIssue ? 'err_decisionIssue' : undefined}
                          required
                        />
                        <span className="mli-help">{t.step_3?.decision_issue_help}</span>
                        {errors.decisionIssue && (
                          <span id="err_decisionIssue" className="mli-error" role="alert">
                            {errors.decisionIssue}
                          </span>
                        )}
                      </div>

                      <div className="mli-field-group">
                        <label htmlFor="mli_practicalPurpose" className="mli-label">
                          {t.step_3?.practical_purpose_label} *
                        </label>
                        <select
                          id="mli_practicalPurpose"
                          className={`mli-select ${errors.practicalPurpose ? 'mli-select--error' : ''}`}
                          value={formData.practicalPurpose}
                          onChange={(e) => handleInputChange('practicalPurpose', e.target.value)}
                          aria-invalid={!!errors.practicalPurpose}
                          aria-describedby={errors.practicalPurpose ? 'err_practicalPurpose' : undefined}
                          required
                        >
                          <option value="" disabled>
                            {t.step_3?.practical_purpose_placeholder || 'Seleccione una opción'}
                          </option>
                          {t.step_3?.purpose_options?.map((opt: string, idx: number) => (
                            <option key={idx} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        {errors.practicalPurpose && (
                          <span id="err_practicalPurpose" className="mli-error" role="alert">
                            {errors.practicalPurpose}
                          </span>
                        )}
                      </div>

                      {/* DOCUMENTACIÓN DISPONIBLE (SELECCIÓN MÚLTIPLE OPCIONAL) */}
                      <div className="mli-field-group">
                        <span className="mli-label">{t.step_3?.available_docs_label}</span>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.5rem', marginTop: '0.5rem' }}>
                          {t.step_3?.doc_options?.map((doc: string, idx: number) => {
                            const isChecked = formData.availableDocs.includes(doc);
                            return (
                              <label
                                key={idx}
                                className="mli-checkbox-card"
                                style={{ margin: 0, padding: '0.65rem 0.85rem' }}
                              >
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  onChange={() => handleDocToggle(doc)}
                                />
                                <span style={{ fontSize: '0.86rem', lineHeight: 1.35 }}>
                                  {doc}
                                </span>
                              </label>
                            );
                          })}
                        </div>
                      </div>

                      {/* AVISO DE RESERVA Y DOCUMENTACIÓN */}
                      <div className="mli-notice-box accent-border">
                        <strong style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--primary, #002845)' }}>
                          {isEs ? 'Nota de reserva y confidencialidad:' : 'Confidentiality note:'}
                        </strong>
                        <p style={{ margin: 0, fontSize: '0.84rem' }}>
                          {t.step_3?.reservation_notice}
                        </p>
                      </div>

                      <div className="mli-field-group">
                        <label htmlFor="mli_pendingInfo" className="mli-label">
                          {t.step_3?.pending_info_label}
                        </label>
                        <textarea
                          id="mli_pendingInfo"
                          className="mli-textarea"
                          rows={2}
                          value={formData.pendingInfo}
                          onChange={(e) => handleInputChange('pendingInfo', e.target.value)}
                        />
                        <span className="mli-help">{t.step_3?.pending_info_help}</span>
                      </div>

                      {/* JURISDICCIONES */}
                      <div className="mli-field-group">
                        <label htmlFor="mli_mainJurisdiction" className="mli-label">
                          {t.step_3?.main_jurisdiction_label} *
                        </label>
                        <select
                          id="mli_mainJurisdiction"
                          className="mli-select"
                          value={formData.mainJurisdiction}
                          onChange={(e) => handleInputChange('mainJurisdiction', e.target.value)}
                          required
                        >
                          <option value="venezuela">{t.step_3?.jurisdiction_options?.venezuela}</option>
                          <option value="other">{t.step_3?.jurisdiction_options?.other}</option>
                          <option value="both">{t.step_3?.jurisdiction_options?.both}</option>
                        </select>
                      </div>

                      {(formData.mainJurisdiction === 'other' || formData.mainJurisdiction === 'both') && (
                        <div className="mli-field-group">
                          <label htmlFor="mli_additionalJurisdictions" className="mli-label">
                            {t.step_3?.additional_jurisdictions_label} *
                          </label>
                          <input
                            id="mli_additionalJurisdictions"
                            type="text"
                            className={`mli-input ${errors.additionalJurisdictions ? 'mli-input--error' : ''}`}
                            value={formData.additionalJurisdictions}
                            onChange={(e) => handleInputChange('additionalJurisdictions', e.target.value)}
                            aria-invalid={!!errors.additionalJurisdictions}
                            required
                          />
                          {errors.additionalJurisdictions && (
                            <span className="mli-error" role="alert">
                              {errors.additionalJurisdictions}
                            </span>
                          )}
                        </div>
                      )}

                      <div className="mli-field-group">
                        <label htmlFor="mli_timeline" className="mli-label">
                          {t.step_3?.timeline_label}
                        </label>
                        <textarea
                          id="mli_timeline"
                          className="mli-textarea"
                          rows={2}
                          value={formData.timeline}
                          onChange={(e) => handleInputChange('timeline', e.target.value)}
                        />
                        <span className="mli-help">{t.step_3?.timeline_help}</span>
                      </div>

                      {/* PLAZOS Y EVENTOS */}
                      <div className="mli-field-group">
                        <span className="mli-label">{t.step_3?.has_deadline_label} *</span>
                        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.4rem', flexWrap: 'wrap' }}>
                          <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontSize: '0.92rem' }}>
                            <input
                              type="radio"
                              name="hasDeadline"
                              value="no"
                              checked={formData.hasDeadline === 'no'}
                              onChange={() => handleInputChange('hasDeadline', 'no')}
                            />
                            {t.step_3?.deadline_options?.no}
                          </label>
                          <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontSize: '0.92rem' }}>
                            <input
                              type="radio"
                              name="hasDeadline"
                              value="yes"
                              checked={formData.hasDeadline === 'yes'}
                              onChange={() => handleInputChange('hasDeadline', 'yes')}
                            />
                            {t.step_3?.deadline_options?.yes}
                          </label>
                          <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontSize: '0.92rem' }}>
                            <input
                              type="radio"
                              name="hasDeadline"
                              value="unsure"
                              checked={formData.hasDeadline === 'unsure'}
                              onChange={() => handleInputChange('hasDeadline', 'unsure')}
                            />
                            {t.step_3?.deadline_options?.unsure}
                          </label>
                        </div>
                      </div>

                      {formData.hasDeadline === 'yes' && (
                        <div
                          style={{
                            padding: '1.25rem',
                            border: '1px solid #e2e8f0',
                            borderRadius: '6px',
                            backgroundColor: '#fafbfc',
                            marginBottom: '1.25rem',
                          }}
                        >
                          <div className="mli-field-group">
                            <label htmlFor="mli_deadlineDate" className="mli-label">
                              {t.step_3?.deadline_date_label} {!formData.unknownExactDate && '*'}
                            </label>
                            <input
                              id="mli_deadlineDate"
                              type="date"
                              className={`mli-input ${errors.deadlineDate ? 'mli-input--error' : ''}`}
                              disabled={formData.unknownExactDate}
                              value={formData.deadlineDate}
                              onChange={(e) => handleInputChange('deadlineDate', e.target.value)}
                            />
                            <div style={{ marginTop: '0.4rem' }}>
                              <label style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', cursor: 'pointer' }}>
                                <input
                                  type="checkbox"
                                  checked={formData.unknownExactDate}
                                  onChange={(e) => {
                                    handleInputChange('unknownExactDate', e.target.checked);
                                    if (e.target.checked && errors.deadlineDate) {
                                      setErrors((prev) => {
                                        const next = { ...prev };
                                        delete next.deadlineDate;
                                        return next;
                                      });
                                    }
                                  }}
                                />
                                {t.step_3?.unknown_exact_date_label}
                              </label>
                            </div>
                            {errors.deadlineDate && (
                              <span className="mli-error" role="alert">
                                {errors.deadlineDate}
                              </span>
                            )}
                          </div>

                          <div className="mli-field-group" style={{ marginBottom: 0 }}>
                            <label htmlFor="mli_deadlineDesc" className="mli-label">
                              {t.step_3?.deadline_desc_label} *
                            </label>
                            <textarea
                              id="mli_deadlineDesc"
                              className={`mli-textarea ${errors.deadlineDesc ? 'mli-textarea--error' : ''}`}
                              rows={2}
                              value={formData.deadlineDesc}
                              onChange={(e) => handleInputChange('deadlineDesc', e.target.value)}
                              aria-invalid={!!errors.deadlineDesc}
                              required
                            />
                            {errors.deadlineDesc && (
                              <span className="mli-error" role="alert">
                                {errors.deadlineDesc}
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {formData.hasDeadline === 'unsure' && (
                        <div className="mli-field-group">
                          <label htmlFor="mli_deadlineUnsure" className="mli-label">
                            {t.step_3?.deadline_unsure_label}
                          </label>
                          <textarea
                            id="mli_deadlineUnsure"
                            className="mli-textarea"
                            rows={2}
                            value={formData.deadlineUnsureExplanation}
                            onChange={(e) => handleInputChange('deadlineUnsureExplanation', e.target.value)}
                          />
                        </div>
                      )}

                      {/* NIVEL DE URGENCIA */}
                      <div className="mli-field-group">
                        <label htmlFor="mli_urgencyLevel" className="mli-label">
                          {t.step_3?.urgency_level_label} *
                        </label>
                        <select
                          id="mli_urgencyLevel"
                          className="mli-select"
                          value={formData.urgencyLevel}
                          onChange={(e) => handleInputChange('urgencyLevel', e.target.value)}
                          required
                        >
                          <option value="normal">{t.step_3?.urgency_options?.normal}</option>
                          <option value="priority">{t.step_3?.urgency_options?.priority}</option>
                          <option value="urgent">{t.step_3?.urgency_options?.urgent}</option>
                          <option value="critical">{t.step_3?.urgency_options?.critical}</option>
                        </select>
                      </div>

                      {/* ADVERTENCIA DE URGENCIA */}
                      <p
                        style={{
                          fontSize: '0.82rem',
                          fontStyle: 'italic',
                          color: 'var(--text-muted, #4b5563)',
                          margin: '0.5rem 0 0 0',
                          lineHeight: 1.45,
                        }}
                      >
                        {t.step_3?.urgency_disclaimer}
                      </p>
                    </div>
                  )}

                  {/* =========================================================
                      PASO 4: DECLARACIONES Y ENVÍO
                      ========================================================= */}
                  {step === 4 && (
                    <div>
                      <p
                        style={{
                          fontSize: '0.92rem',
                          lineHeight: 1.55,
                          color: 'var(--text-muted, #4b5563)',
                          marginBottom: '1.5rem',
                        }}
                      >
                        {t.step_4?.intro}
                      </p>

                      {/* RESUMEN ORDENADO CON ACCIÓN EDITAR */}
                      <h4
                        className="serif"
                        style={{
                          fontSize: '1.15rem',
                          color: 'var(--primary, #002845)',
                          marginBottom: '0.75rem',
                        }}
                      >
                        {t.step_4?.summary_title || 'Resumen de su solicitud'}
                      </h4>

                      {/* RESUMEN PASO 1 */}
                      <div className="mli-review-section">
                        <div className="mli-review-header">
                          <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--primary, #003865)' }}>
                            1. {t.step_1?.title || 'Solicitante y organización'}
                          </span>
                          <button
                            type="button"
                            className="mli-review-edit-btn"
                            onClick={() => handleJumpToStep(1)}
                          >
                            {t.step_4?.edit_button || 'Editar'}
                          </button>
                        </div>
                        <div className="mli-review-row">
                          <span className="mli-review-label">{t.step_1?.full_name_label}:</span>
                          <span className="mli-review-val">{formData.fullName || '—'}</span>
                        </div>
                        <div className="mli-review-row">
                          <span className="mli-review-label">{t.step_1?.email_label}:</span>
                          <span className="mli-review-val">{formData.email || '—'}</span>
                        </div>
                        <div className="mli-review-row">
                          <span className="mli-review-label">{t.step_1?.country_label}:</span>
                          <span className="mli-review-val">{formData.country || '—'}</span>
                        </div>
                        <div className="mli-review-row">
                          <span className="mli-review-label">{t.step_1?.acting_as_label}:</span>
                          <span className="mli-review-val">
                            {formData.actingAs === 'organization'
                              ? t.step_1?.acting_as_organization
                              : t.step_1?.acting_as_individual}
                          </span>
                        </div>
                        {formData.actingAs === 'organization' && (
                          <>
                            <div className="mli-review-row">
                              <span className="mli-review-label">{t.step_1?.organization_label}:</span>
                              <span className="mli-review-val">{formData.organization || '—'}</span>
                            </div>
                            <div className="mli-review-row">
                              <span className="mli-review-label">{t.step_1?.role_label}:</span>
                              <span className="mli-review-val">{formData.role || '—'}</span>
                            </div>
                          </>
                        )}
                      </div>

                      {/* RESUMEN PASO 2 */}
                      <div className="mli-review-section">
                        <div className="mli-review-header">
                          <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--primary, #003865)' }}>
                            2. {t.step_2?.title || 'Contexto y exposición'}
                          </span>
                          <button
                            type="button"
                            className="mli-review-edit-btn"
                            onClick={() => handleJumpToStep(2)}
                          >
                            {t.step_4?.edit_button || 'Editar'}
                          </button>
                        </div>
                        <div className="mli-review-row">
                          <span className="mli-review-label">{t.step_2?.exposure_nature_label}:</span>
                          <span className="mli-review-val">{formData.exposureNature || '—'}</span>
                        </div>
                        <div className="mli-review-row">
                          <span className="mli-review-label">{t.step_2?.factual_context_label}:</span>
                          <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.88rem', color: 'var(--text-muted, #4b5563)' }}>
                            {formData.factualContext || '—'}
                          </p>
                        </div>
                        <div className="mli-review-row">
                          <span className="mli-review-label">{t.step_2?.venezuela_relationship_label}:</span>
                          <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.88rem', color: 'var(--text-muted, #4b5563)' }}>
                            {formData.venezuelaRelationship || '—'}
                          </p>
                        </div>
                      </div>

                      {/* RESUMEN PASO 3 */}
                      <div className="mli-review-section">
                        <div className="mli-review-header">
                          <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--primary, #003865)' }}>
                            3. {t.step_3?.title || 'Alcance, información y urgencia'}
                          </span>
                          <button
                            type="button"
                            className="mli-review-edit-btn"
                            onClick={() => handleJumpToStep(3)}
                          >
                            {t.step_4?.edit_button || 'Editar'}
                          </button>
                        </div>
                        <div className="mli-review-row">
                          <span className="mli-review-label">{t.step_3?.decision_issue_label}:</span>
                          <span className="mli-review-val">{formData.decisionIssue || '—'}</span>
                        </div>
                        <div className="mli-review-row">
                          <span className="mli-review-label">{t.step_3?.practical_purpose_label}:</span>
                          <span className="mli-review-val">{formData.practicalPurpose || '—'}</span>
                        </div>
                        <div className="mli-review-row">
                          <span className="mli-review-label">{t.step_3?.main_jurisdiction_label}:</span>
                          <span className="mli-review-val">{formData.mainJurisdiction || '—'}</span>
                        </div>
                        <div className="mli-review-row">
                          <span className="mli-review-label">{t.step_3?.urgency_level_label}:</span>
                          <span className="mli-review-val" style={{ textTransform: 'capitalize' }}>
                            {formData.urgencyLevel || '—'}
                          </span>
                        </div>
                        {formData.availableDocs.length > 0 && (
                          <div className="mli-review-row">
                            <span className="mli-review-label">{t.step_3?.available_docs_label}:</span>
                            <span className="mli-review-val">
                              {formData.availableDocs.join('; ')}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* DECLARACIONES OBLIGATORIAS */}
                      <h4
                        className="serif"
                        style={{
                          fontSize: '1.15rem',
                          color: 'var(--primary, #002845)',
                          marginTop: '1.5rem',
                          marginBottom: '0.75rem',
                        }}
                      >
                        {t.step_4?.declarations_title || 'Declaraciones obligatorias'} *
                      </h4>

                      <div style={{ marginBottom: '1.5rem' }}>
                        <label className="mli-checkbox-card">
                          <input
                            type="checkbox"
                            checked={formData.decl1}
                            onChange={(e) => handleInputChange('decl1', e.target.checked)}
                          />
                          <span style={{ fontSize: '0.88rem', lineHeight: 1.45 }}>
                            {t.step_4?.declaration_1}
                          </span>
                        </label>

                        <label className="mli-checkbox-card">
                          <input
                            type="checkbox"
                            checked={formData.decl2}
                            onChange={(e) => handleInputChange('decl2', e.target.checked)}
                          />
                          <span style={{ fontSize: '0.88rem', lineHeight: 1.45 }}>
                            {t.step_4?.declaration_2}
                          </span>
                        </label>

                        <label className="mli-checkbox-card">
                          <input
                            type="checkbox"
                            checked={formData.decl3}
                            onChange={(e) => handleInputChange('decl3', e.target.checked)}
                          />
                          <span style={{ fontSize: '0.88rem', lineHeight: 1.45 }}>
                            {t.step_4?.declaration_3}
                          </span>
                        </label>

                        <label className="mli-checkbox-card">
                          <input
                            type="checkbox"
                            checked={formData.decl4}
                            onChange={(e) => handleInputChange('decl4', e.target.checked)}
                          />
                          <span style={{ fontSize: '0.88rem', lineHeight: 1.45 }}>
                            {t.step_4?.declaration_4}
                          </span>
                        </label>

                        <label className="mli-checkbox-card">
                          <input
                            type="checkbox"
                            checked={formData.decl5}
                            onChange={(e) => handleInputChange('decl5', e.target.checked)}
                          />
                          <span style={{ fontSize: '0.88rem', lineHeight: 1.45 }}>
                            {t.step_4?.declaration_5}
                          </span>
                        </label>

                        {errors.declarations && (
                          <span className="mli-error" role="alert" style={{ marginTop: '0.5rem' }}>
                            {errors.declarations}
                          </span>
                        )}
                      </div>

                      {/* CLÁUSULA ECONÓMICA OBLIGATORIA */}
                      <div
                        className="mli-notice-box"
                        style={{
                          backgroundColor: 'rgba(0, 56, 101, 0.04)',
                          borderLeft: '4px solid var(--primary, #003865)',
                          marginBottom: '1.5rem',
                        }}
                      >
                        <p
                          style={{
                            margin: 0,
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            lineHeight: 1.55,
                            color: 'var(--primary, #002845)',
                          }}
                        >
                          {t.step_4?.economic_clause}
                        </p>
                      </div>
                    </div>
                  )}
                </form>
              )}
            </div>

            {/* PIE DE PÁGINA CON NAVEGACIÓN (SI NO ESTÁ CONFIRMADO NI EN PANTALLA DE ERROR) */}
            {!isSubmitted && !serviceError && (
              <div className="mli-modal-footer">
                <div>
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="btn btn-outline"
                      disabled={isProcessing}
                    >
                      ← {t.navigation?.back || 'Anterior'}
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="btn btn-outline"
                      disabled={isProcessing}
                    >
                      {t.navigation?.close || 'Cerrar'}
                    </button>
                  )}
                </div>

                <div>
                  {step < 4 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="btn btn-primary"
                    >
                      {t.navigation?.next || 'Continuar'} →
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="btn btn-primary"
                      disabled={isProcessing}
                    >
                      {isProcessing
                        ? t.step_4?.processing_button || (isEs ? 'Procesando solicitud…' : 'Processing request…')
                        : t.step_4?.submit_button || (isEs ? 'Enviar solicitud para revisión preliminar' : 'Submit request for preliminary review')}
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

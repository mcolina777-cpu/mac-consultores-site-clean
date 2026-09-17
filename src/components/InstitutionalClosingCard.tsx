import React from "react";
import Link from "next/link";

export interface InstitutionalClosingCardProps {
  tag: string;
  title: string;
  description: string;
  primaryActionLabel: string;
  primaryActionHref: string;
  secondaryActionLabel?: string;
  secondaryActionHref?: string;
  variant?: "legal" | "standard";
  locale?: string;
  titleId?: string;
}

export default function InstitutionalClosingCard({
  tag,
  title,
  description,
  primaryActionLabel,
  primaryActionHref,
  secondaryActionLabel,
  secondaryActionHref,
  variant = "legal",
  titleId = "institutional-closing-title",
}: InstitutionalClosingCardProps) {
  const isMailtoPrimary = primaryActionHref.startsWith("mailto:");
  const isMailtoSecondary = secondaryActionHref?.startsWith("mailto:") ?? false;

  return (
    <section
      className="bg-soft section-padding-asym"
      aria-labelledby={titleId}
    >
      <div className="container" style={{ maxWidth: "840px", margin: "0 auto" }}>
        <div
          className={`card bg-soft p-3rem text-center institutional-closing-card--${variant}`}
          style={{
            border: "1px solid var(--border-color, #e5e7eb)",
            borderRadius: "8px",
          }}
        >
          <span className="section-tag">{tag}</span>

          <h2
            id={titleId}
            className="serif mt-1rem mb-1rem"
            style={{ fontSize: "1.4rem" }}
          >
            {title}
          </h2>

          <p
            className="max-w-800 mx-auto mb-2rem text-muted"
            style={{ lineHeight: 1.6, fontSize: "0.95rem" }}
          >
            {description}
          </p>

          <div
            className="closing-card-actions"
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {isMailtoPrimary ? (
              <a
                href={primaryActionHref}
                className="btn btn-primary"
              >
                {primaryActionLabel}
              </a>
            ) : (
              <Link
                href={primaryActionHref}
                className="btn btn-primary"
              >
                {primaryActionLabel}
              </Link>
            )}

            {secondaryActionLabel && secondaryActionHref && (
              isMailtoSecondary ? (
                <a
                  href={secondaryActionHref}
                  className="btn btn-secondary"
                >
                  {secondaryActionLabel}
                </a>
              ) : (
                <Link
                  href={secondaryActionHref}
                  className="btn btn-secondary"
                >
                  {secondaryActionLabel}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

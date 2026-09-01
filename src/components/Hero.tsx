import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getRoute } from "@/lib/routes";

export default function Hero({ dict, locale }: { dict: any, locale: string }) {
  return (
    <header 
      className="hero"
      style={{
        backgroundColor: '#002845',
        backgroundImage: 'linear-gradient(135deg, rgba(0, 40, 69, 0.96) 0%, rgba(0, 20, 36, 0.92) 100%)',
        position: 'relative',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}
    >
      <div className="hero-background" style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        <Image
          src="/assets/img/Hero 1.webp"
          alt="Sede principal de Mac Consultores Jurídicos & Asociados"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="hero-image"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div 
          className="hero-overlay" 
          style={{ 
            position: 'absolute', 
            inset: 0, 
            backgroundColor: 'rgba(0, 28, 50, 0.65)',
            zIndex: 2 
          }} 
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 3, width: '100%' }}>
        <div className="hero-content">
          <span className="section-tag" style={{ color: '#d4af37' }}>{dict?.tag}</span>
          <h1 className="mb-1-5rem serif">{dict?.h1}</h1>
          <p className="hero-subtitle" style={{ fontSize: '1.15rem', lineHeight: 1.6, maxWidth: '750px', opacity: 0.95 }}>
            {dict?.desc}
          </p>
          <div className="hero-btns" style={{ marginTop: '2rem' }}>
            <Link href={getRoute(locale, "contact")} className="btn btn-primary">
              {dict?.btn}
            </Link>
            {dict?.btn_hint && (
              <p
                className="hero-btn-hint mt-1rem text-sm"
                style={{ opacity: 0.8, fontSize: '0.85rem' }}
              >
                {dict.btn_hint}
              </p>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

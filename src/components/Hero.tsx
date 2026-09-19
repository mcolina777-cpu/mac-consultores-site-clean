'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { Source_Serif_4 } from 'next/font/google';
import { getRoute } from '@/lib/routes';

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

interface HeroProps {
  dict?: {
    tag?: string;
    h1?: string;
    desc?: string;
    btn?: string;
    btn_sec?: string;
    btn_hint?: string;
  };
  locale?: string;
}

export default function Hero({ dict, locale = 'es' }: HeroProps) {
  const contactHref = getRoute(locale, 'contact');
  const servicesHref = getRoute(locale, 'services');
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    if (videoRef.current) {
      const nextMutedState = !videoRef.current.muted;
      videoRef.current.muted = nextMutedState;
      setIsMuted(nextMutedState);
    }
  };

  return (
    <header
      className="hero"
      style={{
        position: 'relative',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#001424',
      }}
    >
      {/* Capa 1: Video Cinematográfico Limpio */}
      <div
        className="hero-background"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          overflow: 'hidden',
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/img/hero-poster.webp"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        >
          <source src="/assets/video/hero-background-audio.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Capa 2: Overlay Luminoso Cristalino */}
      <div
        className="hero-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(0, 20, 36, 0.25) 0%, rgba(0, 20, 36, 0.45) 100%)',
          zIndex: 2,
        }}
      />

      {/* Capa 3: Contenido Institucional y Botones */}
      <div className="container" style={{ position: 'relative', zIndex: 3, width: '100%' }}>
        <div className="hero-content">
          {dict?.tag && (
            <span
              className={`section-tag ${sourceSerif.className}`}
              style={{
                color: '#d4af37',
                display: 'inline-block',
                marginBottom: '1rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontSize: '0.85rem',
                fontWeight: 600,
                textShadow: '0 2px 4px rgba(0,0,0,0.5)',
              }}
            >
              {dict.tag}
            </span>
          )}

          {dict?.h1 && (
            <h1
              className={`mb-1-5rem serif ${sourceSerif.className}`}
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
            >
              {dict.h1}
            </h1>
          )}

          {dict?.desc && (
            <p
              className={`hero-subtitle ${sourceSerif.className}`}
              style={{
                maxWidth: '750px',
                opacity: 0.95,
                lineHeight: 1.7,
                marginBottom: '2rem',
                textShadow: '0 1px 4px rgba(0,0,0,0.5)',
              }}
            >
              {dict.desc}
            </p>
          )}

          <div className="hero-btns" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            {dict?.btn && (
              <Link href={contactHref} className="btn btn-primary">
                {dict.btn}
              </Link>
            )}

            {dict?.btn_sec && (
              <Link
                href={servicesHref}
                className="btn btn-outline"
                style={{ color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.6)' }}
              >
                {dict.btn_sec}
              </Link>
            )}
          </div>

          {dict?.btn_hint && (
            <p
              className="hero-btn-hint text-sm"
              style={{
                marginTop: '1rem',
                opacity: 0.85,
                fontSize: '0.85rem',
                textShadow: '0 1px 3px rgba(0,0,0,0.5)',
              }}
            >
              {dict.btn_hint}
            </p>
          )}
        </div>
      </div>

      {/* Control de Sonido Apple */}
      <button
        onClick={toggleSound}
        type="button"
        aria-label={isMuted ? 'Activar experiencia sonora' : 'Silenciar video'}
        style={{
          position: 'absolute',
          bottom: '24px',
          right: '24px',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 14px',
          borderRadius: '30px',
          backgroundColor: 'rgba(0, 20, 36, 0.65)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          color: '#f5f5f7',
          fontSize: '0.8rem',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
      >
        {isMuted ? (
          <>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <line x1="23" y1="9" x2="17" y2="15"></line>
              <line x1="17" y1="9" x2="23" y2="15"></line>
            </svg>
            <span style={{ opacity: 0.85, fontWeight: 500 }}>Activar audio</span>
          </>
        ) : (
          <>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
            <span style={{ color: '#d4af37', fontWeight: 600 }}>Sonido activo</span>
          </>
        )}
      </button>
    </header>
  );
}

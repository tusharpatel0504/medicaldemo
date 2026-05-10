import React from 'react'

// ─── Inline SVG Hospital / Medical Partner Logos ─────────────────────────────
// Replace any of these with <img src="your-logo.png" /> if you have real assets.
// Each returns a self-contained SVG so there are zero network dependencies.

const logos = [
  {
    id: 1,
    name: 'Bangkok Hospital',
    svg: (
      <svg viewBox="0 0 200 56" xmlns="http://www.w3.org/2000/svg" width="200" height="56">
        <rect x="8" y="18" width="20" height="20" rx="3" fill="#0070C0" />
        <rect x="16" y="12" width="4" height="8" rx="1" fill="#0070C0" />
        <rect x="12" y="16" width="12" height="4" rx="1" fill="#fff" />
        <rect x="16" y="20" width="4" height="8" rx="1" fill="#fff" />
        <text x="36" y="27" fontFamily="Georgia, serif" fontSize="13" fontWeight="700" fill="#0070C0">Bangkok</text>
        <text x="36" y="42" fontFamily="Georgia, serif" fontSize="11" fill="#555">Hospital Group</text>
      </svg>
    ),
  },
  {
    id: 2,
    name: 'Samitivej Hospital',
    svg: (
      <svg viewBox="0 0 200 56" xmlns="http://www.w3.org/2000/svg" width="200" height="56">
        <circle cx="24" cy="28" r="16" fill="#00A651" />
        <rect x="20" y="20" width="8" height="16" rx="2" fill="#fff" />
        <rect x="16" y="24" width="16" height="8" rx="2" fill="#fff" />
        <text x="48" y="27" fontFamily="Georgia, serif" fontSize="13" fontWeight="700" fill="#00A651">Samitivej</text>
        <text x="48" y="42" fontFamily="Georgia, serif" fontSize="10" fill="#555">International Hospital</text>
      </svg>
    ),
  },
  {
    id: 3,
    name: 'Siriraj Hospital',
    svg: (
      <svg viewBox="0 0 200 56" xmlns="http://www.w3.org/2000/svg" width="200" height="56">
        <polygon points="24,10 34,24 20,38 8,24" fill="none" stroke="#8B0000" strokeWidth="2.5" />
        <polygon points="24,14 31,24 20,34 13,24" fill="#8B0000" />
        <text x="42" y="27" fontFamily="Georgia, serif" fontSize="13" fontWeight="700" fill="#8B0000">Siriraj</text>
        <text x="42" y="42" fontFamily="Georgia, serif" fontSize="10" fill="#555">Medical Center</text>
      </svg>
    ),
  },
  {
    id: 4,
    name: 'Medpark Hospital',
    svg: (
      <svg viewBox="0 0 200 56" xmlns="http://www.w3.org/2000/svg" width="200" height="56">
        <rect x="6" y="10" width="36" height="36" rx="6" fill="#003087" />
        <text x="14" y="34" fontFamily="Arial Black, sans-serif" fontSize="22" fontWeight="900" fill="#fff">M</text>
        <text x="50" y="27" fontFamily="Georgia, serif" fontSize="13" fontWeight="700" fill="#003087">MedPark</text>
        <text x="50" y="42" fontFamily="Georgia, serif" fontSize="10" fill="#555">Hospital Bangkok</text>
      </svg>
    ),
  },
  {
    id: 5,
    name: 'BNH Hospital',
    svg: (
      <svg viewBox="0 0 200 56" xmlns="http://www.w3.org/2000/svg" width="200" height="56">
        <ellipse cx="24" cy="28" rx="18" ry="18" fill="none" stroke="#C8A951" strokeWidth="2" />
        <ellipse cx="24" cy="28" rx="13" ry="13" fill="#C8A951" />
        <text x="18" y="33" fontFamily="serif" fontSize="14" fontWeight="bold" fill="#fff">B</text>
        <text x="48" y="27" fontFamily="Georgia, serif" fontSize="14" fontWeight="700" fill="#C8A951">BNH</text>
        <text x="48" y="42" fontFamily="Georgia, serif" fontSize="10" fill="#555">Hospital</text>
      </svg>
    ),
  },
  {
    id: 6,
    name: 'Vejthani Hospital',
    svg: (
      <svg viewBox="0 0 200 56" xmlns="http://www.w3.org/2000/svg" width="200" height="56">
        <path d="M24 10 L40 28 L24 46 L8 28 Z" fill="#E63946" />
        <path d="M24 16 L34 28 L24 40 L14 28 Z" fill="#fff" />
        <text x="48" y="27" fontFamily="Georgia, serif" fontSize="12" fontWeight="700" fill="#E63946">Vejthani</text>
        <text x="48" y="42" fontFamily="Georgia, serif" fontSize="10" fill="#555">International</text>
      </svg>
    ),
  },
  {
    id: 7,
    name: 'Ramathibodi Hospital',
    svg: (
      <svg viewBox="0 0 200 56" xmlns="http://www.w3.org/2000/svg" width="200" height="56">
        <rect x="6" y="14" width="36" height="28" rx="4" fill="none" stroke="#4A90D9" strokeWidth="2" />
        <text x="10" y="33" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="900" fill="#4A90D9">Rx</text>
        <text x="50" y="27" fontFamily="Georgia, serif" fontSize="11" fontWeight="700" fill="#4A90D9">Ramathibodi</text>
        <text x="50" y="42" fontFamily="Georgia, serif" fontSize="9" fill="#555">Medical School</text>
      </svg>
    ),
  },
  {
    id: 8,
    name: 'Bumrungrad Hospital',
    svg: (
      <svg viewBox="0 0 200 56" xmlns="http://www.w3.org/2000/svg" width="200" height="56">
        <circle cx="22" cy="28" r="16" fill="#1B4F72" />
        <circle cx="22" cy="28" r="10" fill="none" stroke="#fff" strokeWidth="1.5" />
        <line x1="22" y1="16" x2="22" y2="40" stroke="#fff" strokeWidth="2" />
        <line x1="10" y1="28" x2="34" y2="28" stroke="#fff" strokeWidth="2" />
        <text x="46" y="26" fontFamily="Georgia, serif" fontSize="11" fontWeight="700" fill="#1B4F72">Bumrungrad</text>
        <text x="46" y="40" fontFamily="Georgia, serif" fontSize="9.5" fill="#555">International Hospital</text>
      </svg>
    ),
  },
]

// ─── Component ────────────────────────────────────────────────────────────────

const PartnersSection = () => {
  // Duplicate for seamless loop
  const track = [...logos, ...logos]

  return (
    <section className="partners-section">
      <div className="partners-inner">
        <p className="partners-eyebrow">Trusted Worldwide</p>
        <h3 className="partners-heading">
          Top Hospital Partners <span className="accent">Globally</span>
        </h3>
        <p className="partners-sub">
          We collaborate with leading medical institutions across Asia and beyond.
        </p>
      </div>

      {/* Fade edges */}
      <div className="marquee-wrapper">
        <div className="fade-left" />
        <div className="fade-right" />

        <div className="marquee-track">
          {track.map((logo, idx) => (
            <div className="logo-card" key={`${logo.id}-${idx}`} aria-label={logo.name}>
              {logo.svg}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .partners-section {
          padding: 72px 0 80px;
          background: #f8f9fc;
          overflow: hidden;
          font-family: 'Georgia', serif;
        }

        .partners-inner {
          max-width: 860px;
          margin: 0 auto 48px;
          padding: 0 24px;
          text-align: center;
        }

        .partners-eyebrow {
          font-family: 'Arial', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #0d9488;
          margin: 0 0 12px;
        }

        .partners-heading {
          font-size: clamp(24px, 4vw, 34px);
          font-weight: 700;
          color: #111827;
          margin: 0 0 14px;
          line-height: 1.2;
        }

        .partners-heading .accent {
          color: #0d9488;
        }

        .partners-sub {
          font-size: 15px;
          color: #6b7280;
          margin: 0;
          line-height: 1.6;
        }

        /* ── Marquee ── */
        .marquee-wrapper {
          position: relative;
          width: 100%;
        }

        .fade-left,
        .fade-right {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 120px;
          z-index: 2;
          pointer-events: none;
        }

        .fade-left {
          left: 0;
          background: linear-gradient(to right, #f8f9fc, transparent);
        }

        .fade-right {
          right: 0;
          background: linear-gradient(to left, #f8f9fc, transparent);
        }

        .marquee-track {
          display: flex;
          gap: 12px;
          width: max-content;
          animation: scroll-logos 28s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes scroll-logos {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .logo-card {
          flex: none;
          width: 210px;
          height: 72px;
          background: #fff;
          border-radius: 10px;
          border: 1px solid #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px 16px;
          box-shadow: 0 1px 4px rgba(0,0,0,0.05);
          transition: box-shadow 0.2s, border-color 0.2s;
          cursor: default;
          filter: grayscale(0.4) opacity(0.75);
          transition: filter 0.3s, box-shadow 0.3s, border-color 0.3s;
        }

        .logo-card:hover {
          filter: grayscale(0) opacity(1);
          box-shadow: 0 4px 14px rgba(0,0,0,0.1);
          border-color: #d1fae5;
        }

        .logo-card svg {
          max-width: 100%;
          max-height: 52px;
        }
      `}</style>
    </section>
  )
}

export default PartnersSection

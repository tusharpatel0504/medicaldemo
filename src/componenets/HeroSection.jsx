import React from 'react';

const HeroSection = ({
  title,
  subtitle,
  smallIntro,
  features,
  backgroundImage,
  videoSrc,
  poster,
  primaryCta = { text: 'Get Started', href: '#' },
  secondaryCta = { text: 'Book Consultation', href: '#' }
}) => {
  return (
    <header className="relative overflow-hidden text-center" id="home-hero">
      {videoSrc ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={videoSrc}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage || 'https://images.unsplash.com/photo-1576091160550-112173f7f869?w=1200'})` }}
        />
      )}

      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      <div className="relative z-10 mx-auto px-6 py-28 md:py-36 lg:py-44 max-w-7xl">
        {smallIntro && <p className="text-white/80 text-lg mb-6">{smallIntro}</p>}

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white max-w-4xl mx-auto mb-8">
          {title}
        </h1>

        {subtitle && <p className="text-white/80 text-lg mb-8">{subtitle}</p>}

        {features && (
          <div className="flex flex-wrap items-center justify-center gap-6 max-w-4xl mx-auto mb-10 text-white/90">
            {features.map((f, i) => (
              <React.Fragment key={i}>
                <div className="px-6 py-2 text-sm">{f}</div>
                {i !== features.length - 1 && <div className="h-6 w-px bg-white/30" />}
              </React.Fragment>
            ))}
          </div>
        )}

        <div className="flex items-center justify-center gap-6">
          <a href={primaryCta.href} className="inline-flex items-center gap-3 bg-teal-400 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:opacity-95 transition">
            <span>{primaryCta.text}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          <a href={secondaryCta.href} className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-semibold shadow hover:opacity-95 transition">
            <span>{secondaryCta.text}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;

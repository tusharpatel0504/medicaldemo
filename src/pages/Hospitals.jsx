import React from 'react';
import docpagecover from '../assets/docpagecover.png';
import contactus from '../assets/contactus.png';

const fallbackImage = docpagecover;

const topHospitalImages = [
  {
    image: docpagecover,
    label: 'Medical Park',
    caption: 'Modern treatment center',
  },
  {
    image: 'https://images.unsplash.com/photo-1586773860418-d3b97978c65c?auto=format&fit=crop&q=80&w=1200',
    label: 'Memorial Hospital',
    caption: 'Trusted surgical care',
  },
]

const hospitalRows = {
  plastic: [
    {
      name: 'JK Plastic Surgery',
      location: 'South Korea',
      rating: '4.5',
      image: 'https://images.unsplash.com/photo-1580281657527-47c8d4b0a1f6?auto=format&fit=crop&q=80&w=900',
    },
    {
      name: 'VG Plastic Surgery',
      location: 'South Korea',
      rating: '4.5',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=900',
    },
    {
      name: 'Memorial Şişli Hastan...',
      location: 'Turkey',
      rating: '4.5',
      image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=900',
    },
    {
      name: 'Medical Park Hospital',
      location: 'Turkey',
      rating: '4.5',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=900',
    },
  ],
  hair: [
    {
      name: 'Medical Park Hospital',
      location: 'Turkey',
      rating: '4.5',
      image: 'https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&q=80&w=900',
    },
    {
      name: 'Memorial Hospital',
      location: 'Turkey',
      rating: '4.5',
      image: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&q=80&w=900',
    },
    {
      name: 'Carezone Aesthetics',
      location: 'Turkey',
      rating: '4.5',
      image: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&q=80&w=900',
    },
    {
      name: 'Clinicana',
      location: 'Turkey',
      rating: '4.5',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=900',
    },
  ],
  dental: [
    {
      name: 'Yeah Smile Hospital',
      location: 'Mexico',
      rating: '4.5',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37d7a?auto=format&fit=crop&q=80&w=900',
    },
    {
      name: 'Medical Park Hospital',
      location: 'Turkey',
      rating: '4.5',
      image: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&q=80&w=900',
    },
    {
      name: 'Memorial Hospital',
      location: 'Turkey',
      rating: '4.5',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=900',
    },
    {
      name: 'Medicana Ataköy Has...',
      location: 'Turkey',
      rating: '4.6',
      image: 'https://images.unsplash.com/photo-1586773860418-d3b97978c65c?auto=format&fit=crop&q=80&w=900',
    },
  ],
}

const HospitalImage = ({ src, alt, className, ...props }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(event) => {
        const imageElement = event.currentTarget;
        if (imageElement.dataset.fallbackApplied === 'true') return;
        imageElement.dataset.fallbackApplied = 'true';
        imageElement.src = fallbackImage;
      }}
      {...props}
    />
  );
};

// Reusable Hospital Card Component
const HospitalCard = ({ name, location, rating, image, showBadge = true }) => (
  <div className="group cursor-pointer">
    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3 border border-slate-100">
      <HospitalImage src={image} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      {showBadge && (
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
          <svg className="w-3 h-3 text-cyan-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          <span className="text-[10px] font-bold text-slate-700">{rating}</span>
        </div>
      )}
      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="bg-slate-900 text-white p-2 rounded-full">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </div>
      </div>
    </div>
    <h4 className="font-bold text-slate-800 text-sm leading-tight">{name}</h4>
    <p className="text-slate-400 text-xs mt-1 uppercase tracking-wider">{location}</p>
  </div>
);

const SectionHeader = ({ title, highlight, link = true }) => (
  <div className="flex justify-between items-end mb-8">
    <h2 className="text-2xl font-bold text-slate-900">
      Top Hospitals For <span className="text-cyan-500">{highlight}</span>
    </h2>
    {link && (
      <button className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 hover:text-cyan-600 transition-colors">
        View all Hospitals
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
      </button>
    )}
  </div>
);

const HospitalExplorer = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans pb-20 pt-24 md:pt-28">
      {/* Cover Hero */}
      <section className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="relative overflow-hidden rounded-[32px] min-h-[420px] md:min-h-[520px] shadow-[0_24px_70px_rgba(15,23,42,0.14)]">
          <HospitalImage
            src={docpagecover}
            alt="Hospital cover"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/30" />
          <div className="relative z-10 flex h-full min-h-[420px] md:min-h-[520px] items-start px-6 py-8 md:px-10 md:py-12">
            <div className="max-w-2xl text-white">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80">
                Global Hospital Network
              </p>
              <h1 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
                Your path to the right hospital starts here.
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-6 text-white/90 md:text-base">
                Accredited care worldwide with options for every budget and international location.
              </p>
              <div className="mt-6 max-w-md rounded-full bg-white px-4 py-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Hospital name"
                    className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 1. Top Hospital Groups Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-16 md:pt-20">
        <div className="text-center mb-12">
          <span className="inline-flex items-center rounded-full border border-cyan-100 bg-white px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-600 shadow-sm">
            Global Network
          </span>
          <h2 className="mt-4 text-2xl font-bold text-slate-900 md:text-3xl">Top Hospital Groups</h2>
          <p className="text-slate-500 text-sm mt-2">Across the globe</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
            <h3 className="font-bold text-slate-800 uppercase tracking-widest text-xs">About us</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Luxora is a trusted platform connecting patients with to hospitals across the globe.
            </p>
            <button className="bg-slate-900 text-white px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-3 hover:bg-slate-800 transition-colors self-start">
              Book Consultation
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
          </div>
          
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
             {topHospitalImages.map((item) => (
               <div key={item.label} className="relative rounded-2xl overflow-hidden aspect-video">
                 <HospitalImage src={item.image} className="w-full h-full object-cover" alt={item.label} />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                 <div className="absolute top-4 left-4 bg-cyan-500/85 backdrop-blur-sm px-3 py-1 rounded-md text-white text-[10px] font-bold uppercase tracking-widest">
                   {item.label}
                 </div>
                 <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold text-sm">{item.caption}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 2. Horizontal Specialty Sections */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mt-20 md:mt-24 space-y-20 md:space-y-24">
        
        {/* Plastic Surgery Row */}
        <div>
          <SectionHeader title="Top Hospitals For" highlight="Plastic Surgery" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {hospitalRows.plastic.map((item) => (
              <HospitalCard key={item.name} {...item} />
            ))}
          </div>
        </div>

        {/* Hair Transplant Row */}
        <div>
          <SectionHeader title="Top Hospitals For" highlight="Hair Transplant" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {hospitalRows.hair.map((item) => (
              <HospitalCard key={item.name} {...item} />
            ))}
          </div>
        </div>

        {/* Dental Treatment Row */}
        <div>
          <SectionHeader title="Top Hospitals For" highlight="Dental Treatment" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {hospitalRows.dental.map((item) => (
              <HospitalCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Savings Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mt-24 md:mt-32">
        <div className="bg-cyan-50/70 rounded-[36px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 border border-cyan-100 shadow-[0_18px_50px_rgba(34,211,238,0.12)]">
          <div className="md:w-1/2 space-y-6">
            <h4 className="text-slate-900 font-bold uppercase tracking-widest text-xs">Save Upto</h4>
            <h2 className="text-7xl font-black text-cyan-500">70%</h2>
            <h3 className="text-3xl font-bold text-slate-900">ON TREATMENT ABROAD</h3>
            <p className="text-slate-500 text-sm max-w-md leading-relaxed">
              Your health deserves world-class care without the high cost. 
              Get top-quality treatment abroad affordable, trusted, and hassle-free.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="bg-cyan-500 text-white px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-cyan-600 transition-colors flex items-center gap-2">
                Get Started
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
              <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-colors flex items-center gap-2">
                Book Consultation
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center relative">
             <div className="w-80 h-80 bg-white rounded-full absolute -z-10 blur-3xl opacity-50"></div>
             <HospitalImage src={contactus} className="w-full max-w-sm" alt="Doctor" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default HospitalExplorer;
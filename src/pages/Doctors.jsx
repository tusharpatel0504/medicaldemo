import React from 'react';
import docpagecover from '../assets/docpagecover.png';

const DoctorsPage = () => {
  const specialities = [
    'Orthopedic/Knee Surgery',
    'Infertility/IVF',
    'Heart Care/Surgery',
    'Obesity/Bariatric Surgery',
    'Cosmetic/Plastic Surgery',
    'Dentistry',
    'Hair Transplantation',
    'Spine Surgery',
    'Liver Transplant',
    'Neurology',
    'Cancer Care / Oncology',
    'ENT (Ear, Nose & Throat)',
    'Ophthalmology',
    'Urology',
    'Gastroenterology',
  ]

  const doctorsData = [
    {
      id: 1,
      name: 'Dr. Maria Gomez',
      image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=800&q=80',
      degrees: 'MBBS, MS - Orthopedics',
      speciality: 'Orthopedic/Knee Surgery',
      experience: '12 years',
    },
    {
      id: 2,
      name: 'Dr. Luis Martinez',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
      degrees: 'MD - Cardiology',
      speciality: 'Heart Care/Surgery',
      experience: '15 years',
    },
    {
      id: 3,
      name: 'Dr. Sarah Khan',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
      degrees: 'MD, DGO - Infertility Specialist',
      speciality: 'Infertility/IVF',
      experience: '9 years',
    },
    {
      id: 4,
      name: 'Dr. Anil Shah',
      image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=800&q=80',
      degrees: 'MBBS, DNB - General Surgery',
      speciality: 'Obesity/Bariatric Surgery',
      experience: '11 years',
    },
    {
      id: 5,
      name: 'Dr. Emily Rivera',
      image: 'https://images.unsplash.com/photo-1545996124-1b1b3b0a6d1a?auto=format&fit=crop&w=800&q=80',
      degrees: 'MD - Plastic Surgery',
      speciality: 'Cosmetic/Plastic Surgery',
      experience: '8 years',
    },
    {
      id: 6,
      name: 'Dr. Olivia Park',
      image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80',
      degrees: 'BDS, MDS - Dentistry',
      speciality: 'Dentistry',
      experience: '7 years',
    },
    {
      id: 7,
      name: 'Dr. Ahmed Farooq',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
      degrees: 'MBBS, MS - ENT',
      speciality: 'ENT (Ear, Nose & Throat)',
      experience: '14 years',
    },
    {
      id: 8,
      name: 'Dr. Priya Nair',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
      degrees: 'MD - Neurology',
      speciality: 'Neurology',
      experience: '10 years',
    },
    {
      id: 9,
      name: 'Dr. Mark Thompson',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
      degrees: 'MD - Oncology',
      speciality: 'Cancer Care / Oncology',
      experience: '18 years',
    },
    {
      id: 10,
      name: 'Dr. Lina Alvarez',
      image: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=800&q=80',
      degrees: 'MBBS, MS - Urology',
      speciality: 'Urology',
      experience: '9 years',
    },
    {
      id: 11,
      name: 'Dr. Kenji Watanabe',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=80',
      degrees: 'MD - Ophthalmology',
      speciality: 'Ophthalmology',
      experience: '12 years',
    },
    {
      id: 12,
      name: 'Dr. Fatima Zahra',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
      degrees: 'MD - Gastroenterology',
      speciality: 'Gastroenterology',
      experience: '13 years',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 font-sans pt-24 md:pt-28">
      {/* Hero Header */}
      <section className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="relative overflow-hidden rounded-[32px] min-h-[360px] md:min-h-[440px] shadow-[0_24px_70px_rgba(15,23,42,0.14)]">
          <img 
            src={docpagecover} 
            className="absolute inset-0 w-full h-full object-cover" 
            alt="Medical background"
          />
          <div className="absolute inset-0 bg-slate-950/35" />

          <div className="relative z-10 flex min-h-[360px] md:min-h-[440px] items-start px-6 py-8 md:px-10 md:py-12">
            <div className="max-w-2xl text-white">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80">
                Global Doctors Network
              </p>
              <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
                Trusted hands behind your care.
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-6 text-white/90 md:text-base">
                Highly qualified specialists committed to your well-being.
              </p>

              <div className="mt-6 max-w-md rounded-full bg-white px-4 py-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Doctor name"
                    className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 flex flex-col md:flex-row gap-8">
        
        {/* Left Sidebar - Filters */}
        <aside className="md:w-1/4">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 sticky top-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-slate-800 text-lg">Filters</h3>
              <button className="text-cyan-600 text-sm font-semibold hover:underline">Clear all</button>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Specialities</label>
              <div className="relative mb-4">
                <input 
                  type="text" 
                  placeholder="Search Speciality" 
                  className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all"
                />
                <svg className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              </div>

              <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {specialities.map((spec) => (
                  <label key={spec} className="flex items-center group cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-cyan-500 focus:ring-cyan-500 cursor-pointer" />
                    <span className="ml-3 text-sm text-slate-600 group-hover:text-cyan-600 transition-colors">{spec}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Right Content - Doctor Profiles */}
        <main className="md:w-3/4 flex flex-col gap-6">
          {doctorsData.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col sm:flex-row gap-6 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300">
              
              {/* Image */}
              <div className="w-full sm:w-48 h-48 flex-shrink-0 rounded-xl overflow-hidden bg-slate-100 border border-slate-50">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Info */}
              <div className="flex-grow flex flex-col justify-between py-1">
                <div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-1">{doctor.name}</h2>
                  <p className="text-slate-500 text-sm mb-4 leading-relaxed max-w-md">{doctor.degrees}</p>
                  
                  <div className="space-y-2">
                    <p className="text-sm">
                      <span className="font-semibold text-slate-700">Speciality: </span>
                      <span className="text-cyan-600 font-medium">{doctor.speciality}</span>
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold text-slate-700">Experience: </span>
                      <span className="text-slate-600">{doctor.experience}</span>
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2.5 px-8 rounded-lg transition-all shadow-md shadow-cyan-100 active:scale-95">
                    Book Appointment
                  </button>
                </div>
              </div>

            </div>
          ))}
        </main>

      </div>
    </div>
  );
};

export default DoctorsPage;
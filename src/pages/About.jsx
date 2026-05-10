import React from 'react';

const TeamCard = ({ name, role, img }) => (
  <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-300">
    <div className="h-72 overflow-hidden">
      <img
        src={img}
        alt={name}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
      />
    </div>

    <div className="p-6 text-center">
      <h3 className="text-lg font-bold text-slate-900 mb-1">{name}</h3>
      <p className="text-sm text-slate-500">{role}</p>
    </div>
  </div>
);

const ValueCard = ({ title, description, icon }) => (
  <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
    <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center text-[#0EA5A4] mb-6">
      {icon}
    </div>

    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>

    <p className="text-slate-600 leading-7 text-sm">
      {description}
    </p>
  </div>
);

const AboutPage = () => {
  const team = [
    {
      name: 'Vaibhav',
      role: 'Operations Director',
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Aditya',
      role: 'Co-Founder & CEO',
      img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Mikhail',
      role: 'Co-Founder & Marketing Director',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Yuki',
      role: 'Chief of Staff',
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const services = [
    'Medical Consultations',
    'Hospital Selection',
    'Travel Coordination',
    'Visa Assistance',
    'Accommodation Planning',
    'Airport Transfers',
    'Language Interpretation',
    '24/7 Patient Support',
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen font-sans overflow-x-hidden text-slate-900">
      {/* HERO */}
      <section className="relative h-[520px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1800&q=80"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Medical Tourism"
        />

        <div className="absolute inset-0 bg-slate-900/70" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="uppercase tracking-[0.25em] text-sm text-teal-300 mb-5">
            Global Medical Tourism
          </p>

          <h1 className="text-white text-5xl md:text-6xl font-bold tracking-[-0.03em] max-w-5xl leading-tight mb-6">
            World-Class Healthcare With Seamless Travel Support
          </h1>

          <p className="text-slate-200 max-w-2xl text-lg leading-8">
            We connect patients with internationally accredited hospitals,
            trusted specialists, and complete end-to-end medical travel
            coordination.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-[1200px] mx-auto px-6 -mt-16 relative z-20">
        <div className="bg-white rounded-[28px] shadow-[0_10px_50px_rgba(0,0,0,0.08)] border border-slate-100 p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
              ['12K+', 'Patients Assisted'],
              ['30+', 'Countries Served'],
              ['120+', 'Hospital Partners'],
              ['98%', 'Patient Satisfaction'],
            ].map((item, i) => (
              <div key={i}>
                <h3 className="text-4xl font-black text-slate-900 mb-2">
                  {item[0]}
                </h3>

                <p className="text-slate-500 text-sm uppercase tracking-wider">
                  {item[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="max-w-[1200px] mx-auto px-6 py-28">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-[#0EA5A4] uppercase tracking-[0.2em] text-sm font-semibold mb-4">
              Our Mission
            </p>

            <h2 className="text-4xl font-bold tracking-[-0.03em] leading-tight mb-6">
              Redefining Medical Travel With Trust & Transparency
            </h2>

            <p className="text-slate-600 leading-8 text-[15px] mb-6">
              Luxora connects patients with globally accredited hospitals,
              experienced specialists, and seamless medical travel
              coordination — delivering high-quality care with comfort,
              privacy, and confidence.
            </p>

            <p className="text-slate-600 leading-8 text-[15px]">
              From treatment planning to accommodation and recovery support,
              we ensure every stage of the healthcare journey is carefully
              managed.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-[32px] overflow-hidden shadow-[0_15px_60px_rgba(0,0,0,0.15)]">
              <img
                src="https://images.unsplash.com/photo-1580281657527-47f249e8f4df?auto=format&fit=crop&w=1200&q=80"
                alt="Hospital"
                className="w-full h-[600px] object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl border border-slate-100">
              <p className="text-4xl font-black text-slate-900 mb-1">
                15+
              </p>

              <p className="text-slate-500 text-sm leading-relaxed">
                Years of Combined
                <br />
                Healthcare Experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-[#0EA5A4] uppercase tracking-[0.2em] text-sm font-semibold mb-4">
              Our Values
            </p>

            <h2 className="text-4xl font-bold tracking-[-0.03em] mb-6">
              Built Around Patient Confidence
            </h2>

            <p className="text-slate-500 max-w-2xl mx-auto leading-8">
              Our approach combines healthcare excellence with hospitality,
              transparency, and personalized support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              title="Patient-Centered Care"
              description="Every patient journey is personalized with dedicated guidance, transparent communication, and continuous support."
              icon={
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              }
            />

            <ValueCard
              title="International Quality Standards"
              description="We partner only with internationally accredited hospitals and highly experienced medical specialists."
              icon={
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                    d="M9 12l2 2 4-4"
                  />
                </svg>
              }
            />

            <ValueCard
              title="Seamless Coordination"
              description="From consultations to recovery planning, we simplify the entire medical travel experience."
              icon={
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-[#0EA5A4] uppercase tracking-[0.2em] text-sm font-semibold mb-4">
              What We Offer
            </p>

            <h2 className="text-4xl font-bold tracking-[-0.03em] mb-6">
              Complete Medical Travel Services
            </h2>

            <p className="text-slate-500 max-w-2xl mx-auto leading-8">
              We manage every aspect of your healthcare journey with precision,
              professionalism, and care.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-3 h-3 rounded-full bg-[#0EA5A4] mb-5"></div>

                <h3 className="font-bold text-slate-900 leading-7">
                  {service}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-white py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-[#0EA5A4] uppercase tracking-[0.2em] text-sm font-semibold mb-4">
              Leadership Team
            </p>

            <h2 className="text-4xl font-bold tracking-[-0.03em] mb-6">
              Experienced Professionals Dedicated To Your Care
            </h2>

            <p className="text-slate-500 max-w-2xl mx-auto leading-8">
              Our multidisciplinary team combines expertise in healthcare,
              operations, hospitality, and international patient coordination.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <TeamCard key={i} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1200px] mx-auto px-6 pb-24">
        <div className="rounded-[36px] overflow-hidden bg-gradient-to-r from-[#0F172A] to-[#1E293B] p-14 md:p-20 text-center text-white">
          <p className="uppercase tracking-[0.2em] text-teal-300 text-sm mb-5">
            Start Your Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] leading-tight mb-6">
            Begin Your Healthcare Experience With Confidence
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto leading-8 mb-10">
            Speak with our medical travel coordinators to explore treatment
            options, hospitals, and personalized care plans.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <button className="bg-[#0EA5A4] hover:bg-[#0B8E8D] text-white px-8 py-4 rounded-xl font-semibold transition-colors">
              Request Consultation
            </button>

            <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-colors">
              Explore Treatments
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
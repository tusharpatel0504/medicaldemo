import React from 'react';
import {
  Search,
  ArrowUpRight,
  Heart,
  Eye,
  Bone,
  Baby,
  Smile,
  Scissors,
  Ribbon,
  User,
} from 'lucide-react';

const TreatmentCard = ({ title, description, icon, dark = false }) => {
  return (
    <div
      className={`
        rounded-2xl border p-6 h-[175px]
        flex flex-col justify-between
        transition-all duration-300 cursor-pointer
        ${
          dark
            ? 'bg-[#07122B] border-[#07122B] text-white shadow-xl'
            : 'bg-white border-[#E8E8E8] text-[#111827] hover:shadow-lg'
        }
      `}
    >
      <div>
        <div
          className={`mb-5 ${
            dark ? 'text-white' : 'text-[#222]'
          }`}
        >
          {icon}
        </div>

        <h3 className="font-semibold text-[15px] mb-2 leading-none">
          {title}
        </h3>

        <p
          className={`text-[12px] leading-[18px] ${
            dark ? 'text-gray-300' : 'text-[#6B7280]'
          }`}
        >
          {description}
        </p>
      </div>

      <div className="flex justify-end">
        <ArrowUpRight
          size={18}
          className={dark ? 'text-white' : 'text-[#9CA3AF]'}
        />
      </div>
    </div>
  );
};

const MedicalTreatments = () => {
  const treatments = [
    {
      title: 'Plastic Surgery',
      description:
        'Trusted by patients from 30+ countries for safe, aesthetic outcomes.',
      icon: <Scissors size={28} strokeWidth={1.6} />,
    },
    {
      title: 'Oncology',
      description:
        '90% of patients receive stage-matched treatment within 7 days of diagnosis.',
      icon: <Ribbon size={28} strokeWidth={1.6} />,
    },
    {
      title: 'Orthopedic Surgery',
      description:
        'Avg. recovery 28% faster with minimally invasive techniques.',
      icon: <Bone size={28} strokeWidth={1.6} />,
    },
    {
      title: 'Infertility & IVF',
      description:
        '87%+ success rate among cross-border couples seeking IVF solutions.',
      icon: <Baby size={28} strokeWidth={1.6} />,
    },
    {
      title: 'Eye & LASIK Care',
      description:
        '99.2% achieve 20/20 vision or better with bladeless LASIK.',
      icon: <Eye size={28} strokeWidth={1.6} />,
    },
    {
      title: 'Hair Transplantation',
      description:
        'Up to 95% graft survival rate with DHI/FUE techniques.',
      icon: <User size={28} strokeWidth={1.6} />,
    },
    {
      title: 'Dental',
      description:
        'Same-day crowns, veneers, and implants with CAD/CAM precision.',
      icon: <Smile size={28} strokeWidth={1.6} />,
    },
    {
      title: 'Cardiology',
      description:
        '97%+ survival rate in elective cardiac procedures across partner hospitals.',
      icon: <Heart size={28} strokeWidth={1.6} />,
    },
  ];

  return (
    <div className="bg-[#F8F8F8] min-h-screen font-sans pt-24 md:pt-28">
      {/* HERO SECTION */}
      <section className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="relative overflow-hidden rounded-[32px] min-h-[360px] md:min-h-[440px] shadow-[0_24px_70px_rgba(15,23,42,0.14)]">
          <img
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1800"
            alt="Medical"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-slate-950/35" />

          <div className="relative z-10 flex min-h-[360px] md:min-h-[440px] items-start px-6 py-8 md:px-10 md:py-12">
            <div className="max-w-2xl text-white">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80">
                Global Specialty Care
              </p>
              <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight tracking-[-0.03em]">
                Advanced Treatments for Every Need
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-6 text-white/90 md:text-base">
                Expert care across a wide range of specialties and services.
              </p>

              <div className="relative mt-6 max-w-md rounded-full bg-white px-4 py-3 shadow-lg">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Search treatment"
                  className="w-full bg-transparent pl-8 pr-2 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-[34px] font-bold text-[#111827] mb-3">
            Medical Treatments
          </h2>

          <p className="text-[#6B7280] text-[15px] max-w-[620px] mx-auto leading-7">
            Discover our comprehensive range of medical specialties with expert care and
            advanced treatments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((item, index) => (
            <TreatmentCard key={index} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MedicalTreatments;

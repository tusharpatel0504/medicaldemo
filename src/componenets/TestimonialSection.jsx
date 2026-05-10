import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialSection = () => {
  const data = [
    { name: 'Maria G.', title: 'IVF Treatment', country: 'Spain', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80', tag: 'Fertility' },
    { name: 'Luis M.', title: 'Medical Management', country: 'Mexico', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80', tag: 'General Care' },
    { name: 'Sarah K.', title: 'Liposuction', country: 'UAE', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80', tag: 'Cosmetic' },
    { name: 'David L.', title: 'Consultation', country: 'UK', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80', tag: 'Consultation' },
    { name: 'Anita R.', title: 'Oncology', country: 'India', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80', tag: 'Oncology' },
    { name: 'Mark T.', title: 'Orthopedics', country: 'USA', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80', tag: 'Orthopedics' },
    { name: 'Rina P.', title: 'Dermatology', country: 'UAE', image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=800&q=80', tag: 'Cosmetic' },
    { name: 'Omar S.', title: 'ENT', country: 'Egypt', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80', tag: 'Consultation' }
  ];

  return (
    <section className="bg-slate-50/50 py-32 px-8 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Patient <span className="text-cyan-500">Testimonials</span>
          </h2>
          <p className="text-slate-500 max-w-xl text-lg">
            Hear directly from our patients about their transformative medical journeys and the care they received.
          </p>
        </div>

        {/* Changed to grid-cols-1/2/4 for better responsiveness */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
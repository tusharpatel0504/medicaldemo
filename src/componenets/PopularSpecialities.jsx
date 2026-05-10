import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const specialities = [
  {
    id: 1,
    title: 'Dentistry',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    title: 'Hair Transplantation',
    image: 'https://images.unsplash.com/photo-1620331311520-246422ff82f9?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    title: 'Cosmetic/Plastic Surgery',
    image: 'https://images.unsplash.com/photo-1512677859289-868722942457?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    title: 'Orthopedic/Knee Surgery',
    image: 'https://images.unsplash.com/photo-1579154234428-4c82802611a1?auto=format&fit=crop&q=80&w=800',
  },
];

const PopularSpecialities = () => {
  return (
    <section className="py-16 px-4 md:px-12 bg-white font-sans relative overflow-hidden">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-2">
            Explore Most Popular <span className="text-[#38b2ac]">Specialities</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Discover the top medical treatments across the globe.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative group">
          {/* Navigation Arrows */}
          <button className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-100 hover:bg-gray-50 transition-all text-gray-400">
            <ChevronLeft size={24} />
          </button>
          
          <button className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-100 hover:bg-gray-50 transition-all text-gray-400">
            <ChevronRight size={24} />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialities.map((item) => (
              <div 
                key={item.id} 
                className="relative h-[320px] rounded-2xl overflow-hidden cursor-pointer group/card"
              >
                {/* Image */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Text */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white font-bold text-lg leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-10">
          <div className="w-2.5 h-2.5 rounded-full bg-[#38b2ac]" />
          <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
          <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
        </div>
      </div>
    </section>
  );
};

export default PopularSpecialities;
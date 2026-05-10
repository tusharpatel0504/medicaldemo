import React from 'react';

const TestimonialCard = ({ name, title, country, image, tag }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-5 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-100/50 group">
      {/* Image with Tag */}
      <div className="relative mb-5">
        <div className="aspect-square overflow-hidden rounded-xl">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-cyan-600 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-sm">
          {tag}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-slate-800 text-lg">{name}</h4>
          <span className="text-[10px] font-medium text-slate-400 bg-slate-50 px-2 py-0.5 rounded uppercase">
            {country}
          </span>
        </div>
        <p className="text-cyan-500 text-sm font-medium">{title}</p>
        
        {/* Decorative Quote mark to add "Testimonial" feel */}
        <div className="pt-4 border-t border-slate-50 mt-4">
          <p className="text-slate-500 text-xs italic leading-relaxed">
            "The care and attention I received during my treatment was truly world-class."
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
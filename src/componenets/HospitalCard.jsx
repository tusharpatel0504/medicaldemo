import React from 'react';

const HospitalCard = ({ name, location, rating, image, specialties }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img src={image || 'https://images.unsplash.com/photo-1587280591945-fe6c5e64e3c4?w=400'} alt={name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-3 flex items-center gap-2">
          📍 {location}
        </p>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < Math.floor(rating) ? '★' : '☆'}>★</span>
            ))}
          </div>
          <span className="text-gray-600">{rating}/5</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {specialties?.map((spec, idx) => (
            <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
              {spec}
            </span>
          ))}
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default HospitalCard;

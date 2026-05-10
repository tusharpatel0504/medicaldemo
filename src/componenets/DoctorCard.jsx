import React from 'react';

const DoctorCard = ({ name, specialty, rating, experience, image, available }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img src={image || 'https://images.unsplash.com/photo-1612349317150-e539c59dc506?w=400'} alt={name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-blue-600 text-sm mb-3">{specialty}</p>
        <p className="text-gray-600 text-sm mb-3">Experience: {experience} years</p>
        
        <div className="flex items-center gap-2 mb-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < Math.floor(rating) ? '★' : '☆'}>★</span>
            ))}
          </div>
          <span className="text-gray-600 text-sm">{rating}/5</span>
        </div>
        
        <div className="mb-4">
          <span className={`text-xs px-3 py-1 rounded-full ${available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {available ? '✓ Available' : 'Not Available'}
          </span>
        </div>
        
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;

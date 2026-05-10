import React from 'react';

const FeatureSection = ({ icon, title, description }) => {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureSection;

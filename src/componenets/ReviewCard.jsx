import React from 'react';

const ReviewCard = ({ author, rating, text, date }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="font-bold text-gray-900">{author}</h4>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
      </div>
      
      <div className="flex text-yellow-400 mb-3">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < rating ? '★' : '☆'}>★</span>
        ))}
      </div>
      
      <p className="text-gray-700 leading-relaxed">{text}</p>
    </div>
  );
};

export default ReviewCard;

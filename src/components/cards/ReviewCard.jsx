// components/cards/ReviewCard.jsx

import React from "react";

const ReviewCard = ({ reviewData }) => {
  const { user, photo, rating, review, likes, date } = reviewData;

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 space-y-5 hover:shadow-xl transition duration-300">
      {/* User Info */}
      <div className="flex items-center gap-4">
        <img
          src={photo}
          alt={user}
          className="w-14 h-14 rounded-full object-cover border"
        />

        <div>
          <h2 className="text-lg font-bold text-gray-800">{user}</h2>

          <p className="text-sm text-gray-500">
            {new Date(date).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1">
        {Array.from({ length: rating }).map((_, index) => (
          <span key={index} className="text-yellow-400 text-xl">
            ★
          </span>
        ))}

        {Array.from({ length: 5 - rating }).map((_, index) => (
          <span key={index} className="text-gray-300 text-xl">
            ★
          </span>
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-600 leading-relaxed text-[15px]">{review}</p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <span className="text-sm text-gray-500">❤️ {likes.length} Likes</span>

        <button className="text-orange-500 hover:text-orange-600 font-medium transition">
          Like Review
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;

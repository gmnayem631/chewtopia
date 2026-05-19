import React from "react";

const ReviewCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 space-y-5 animate-pulse">
      {/* User */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-gray-200"></div>

        <div className="space-y-2">
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
          <div className="h-3 w-24 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Stars */}
      <div className="flex gap-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="w-5 h-5 rounded bg-gray-200"></div>
        ))}
      </div>

      {/* Review */}
      <div className="space-y-3">
        <div className="h-4 w-full bg-gray-200 rounded"></div>
        <div className="h-4 w-11/12 bg-gray-200 rounded"></div>
        <div className="h-4 w-10/12 bg-gray-200 rounded"></div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <div className="h-4 w-24 bg-gray-200 rounded"></div>

        <div className="h-4 w-28 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};

export default ReviewCardSkeleton;

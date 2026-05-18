const FoodCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 animate-pulse">
      {/* Image Skeleton */}
      <div className="h-56 bg-gray-200"></div>

      {/* Content Skeleton */}
      <div className="p-5 space-y-4">
        <div className="space-y-2">
          <div className="h-4 w-24 bg-gray-200 rounded"></div>

          <div className="h-6 w-3/4 bg-gray-200 rounded"></div>

          <div className="h-6 w-1/2 bg-gray-200 rounded"></div>
        </div>

        <div className="h-8 w-28 bg-gray-200 rounded"></div>

        {/* Buttons Skeleton */}
        <div className="flex gap-3 pt-2">
          <div className="flex-1 h-10 bg-gray-200 rounded-xl"></div>

          <div className="flex-1 h-10 bg-gray-200 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;

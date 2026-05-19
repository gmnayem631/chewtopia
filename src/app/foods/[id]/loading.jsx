const Loading = () => {
  return (
    <div className="max-w-3xl mx-auto px-5 py-10 animate-pulse">
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
        {/* Image Skeleton */}
        <div className="w-full h-[400px] bg-gray-200"></div>

        {/* Content Skeleton */}
        <div className="p-8 space-y-5">
          {/* Title */}
          <div className="h-10 w-3/4 bg-gray-200 rounded"></div>

          {/* Category */}
          <div className="h-8 w-32 bg-gray-200 rounded-full"></div>

          {/* Price */}
          <div className="h-10 w-40 bg-gray-200 rounded"></div>

          {/* Video Link */}
          <div className="h-5 w-48 bg-gray-200 rounded"></div>

          {/* Button */}
          <div className="h-12 w-full bg-gray-200 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;

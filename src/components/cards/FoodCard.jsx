// FoodCard.jsx

const FoodCard = ({ food }) => {
  const { title, foodImg, price, category } = food;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition duration-300">
      {/* Image */}
      <div className="h-56 overflow-hidden">
        <img
          src={foodImg}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div>
          <p className="text-sm text-orange-500 font-medium">{category}</p>

          <h2 className="text-xl font-bold text-gray-800 line-clamp-2">
            {title}
          </h2>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">৳ {price}</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-xl font-medium transition">
            Add to Cart
          </button>

          <button className="flex-1 border border-orange-500 text-orange-500 hover:bg-orange-50 py-2 rounded-xl font-medium transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

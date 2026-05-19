import Link from "next/link";
import React from "react";
const getSingleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
  );
  const data = await res.json();
  return data.details;
};
const page = async ({ params }) => {
  const { id } = await params;
  const food = await getSingleFood(id);

  if (!food) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h2 className="text-5xl font-bold text-red-500">Food not found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-5 py-10">
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
        {/* Image */}
        <div className="w-full h-[400px] overflow-hidden">
          <img
            src={food.foodImg}
            alt={food.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-8 space-y-5">
          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-800">{food.title}</h1>

          {/* Category */}
          <div>
            <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
              {food.category}
            </span>
          </div>

          {/* Price */}
          <h2 className="text-3xl font-bold text-green-600">৳ {food.price}</h2>

          <div className="flex gap-3">
            {/* Video Link */}
            <Link
              href={`${food.video}`}
              target="_blank"
              className="flex-1 text-center w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition"
            >
              Watch Recipe Video
            </Link>

            {/* Add to Cart */}
            <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-xl font-semibold transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

// import Link from "next/link";
// import React from "react";

// const getSingleFood = async (id) => {
//   try {
//     const res = await fetch(
//       `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
//       {
//         cache: "no-store",
//       },
//     );

//     if (!res.ok) {
//       throw new Error("Failed to fetch food");
//     }

//     const data = await res.json();

//     return data.details;
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// };

// const Page = async ({ params }) => {
//   const { id } = params;

//   const food = await getSingleFood(id);

//   if (!food) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <h2 className="text-5xl font-bold text-red-500">Food not found</h2>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-3xl mx-auto px-5 py-10">
//       <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
//         {/* Image */}
//         <div className="w-full h-[400px] overflow-hidden">
//           <img
//             src={food.foodImg}
//             alt={food.title}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Content */}
//         <div className="p-8 space-y-5">
//           {/* Title */}
//           <h1 className="text-4xl font-bold text-gray-800">{food.title}</h1>

//           {/* Category */}
//           <div>
//             <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
//               {food.category}
//             </span>
//           </div>

//           {/* Price */}
//           <h2 className="text-3xl font-bold text-green-600">৳ {food.price}</h2>

//           {/* Video Link */}
//           <Link
//             href={`${food.video}`}
//             target="_blank"
//             className="block text-blue-500 underline font-medium"
//           >
//             Watch Recipe Video
//           </Link>

//           {/* Add to Cart */}
//           <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;

import FoodCard from "@/components/cards/FoodCard";
import React from "react";

const getFoods = async () => {
  const res = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/foods/random",
  );
  const data = await res.json();
  return data.foods || [];
};

const FoodsPage = async () => {
  const foods = await getFoods();
  return (
    <div className="">
      <h2 className="font-bold text-4xl">Total {foods.length} foods found</h2>

      <div className="grid grid-cols-3 gap-5 my-5">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default FoodsPage;

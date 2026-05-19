import FoodCard from "@/components/cards/FoodCard";
import InputSearch from "@/components/InputSearch/InputSearch";
import CartItems from "@/components/skeletons/CartItems";
import React from "react";

const getFoods = async (search) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`,
  );
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return data.foods || [];
};

const FoodsPage = async ({ searchParams }) => {
  const { search = "" } = await searchParams;

  const foods = await getFoods(search);
  return (
    <div className="">
      <h2 className="font-bold text-4xl">Total {foods.length} foods found</h2>
      <InputSearch></InputSearch>
      <div className="flex gap-5">
        <div className="grid grid-cols-3 gap-5 my-5">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food}></FoodCard>
          ))}
        </div>
        <div className="w-64 border-2 rounded-xl p-4">
          <h2 className="text-2xl font-bold">Cart Items</h2>
          <hr />
          <CartItems></CartItems>
        </div>
      </div>
    </div>
  );
};

export default FoodsPage;

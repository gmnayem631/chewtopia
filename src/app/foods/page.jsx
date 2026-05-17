import React from "react";

const getFoods = async () => {
  const res = await fetch(
    " https://taxi-kitchen-api.vercel.app/api/v1/foods/random",
  );
  const data = await res.json();
  return data.foods || [];
};

const FoodsPage = async () => {
  const foods = await getFoods();
  return (
    <div className="">
      <h2 className="font-bold text-4xl">Total {foods.length} foods found</h2>
    </div>
  );
};

export default FoodsPage;

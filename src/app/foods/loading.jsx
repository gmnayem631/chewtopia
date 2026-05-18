import FoodCardSkeleton from "@/components/skeletons/FoodCardSkeleton";
import React from "react";

const loading = () => {
  return (
    <div className="grid grid-cols-3 gap-5 my-5">
      {[...Array(12)].map((_, index) => {
        return <FoodCardSkeleton key={index}></FoodCardSkeleton>;
      })}
    </div>
  );
};

export default loading;

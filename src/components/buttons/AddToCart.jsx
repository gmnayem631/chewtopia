"use client";
import { CartContext } from "@/context/CartProvider";
import React, { use, useState } from "react";

const AddToCart = ({ food }) => {
  const [inCart, setInCart] = useState(false);
  const { addToCart } = use(CartContext);

  const handleAddToCart = () => {
    addToCart(food);
    setInCart(!inCart);
  };
  return (
    <button
      onClick={handleAddToCart}
      disabled={inCart}
      className="flex-1 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-500 text-white py-2 rounded-xl font-medium transition"
    >
      {inCart ? "Added" : "Add to Cart"}
    </button>
  );
};

export default AddToCart;

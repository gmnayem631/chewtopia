"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const InputSearch = () => {
  const router = useRouter();
  const params = useSearchParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const search = form.search.value;

    const newParams = new URLSearchParams(params.toString());
    newParams.set("search", search);
    router.push(`?${newParams.toString()}`);
  };
  return (
    <div className="mt-3">
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          className="px-1 py-3 border-2 rounded-lg w-2xl"
          type="text"
          placeholder="Enter Food Name"
        />
        <button className="ml-3 px-4 py-2 rounded-lg bg-yellow-400 text-black cursor-pointer">
          Search
        </button>
      </form>
    </div>
  );
};

export default InputSearch;

"use client";
import React from "react";

const ProductButton = (props: {
  handleClick: () => void;
  context: string;
  className?: string;
}) => {
  const { handleClick, context, className } = props;
  return (
    <button
      className={`px-4 py-2 capitalize bg-gray-800 text-white rounded  transition-all duration-300 ease-in-out
  hover:scale-90 hover:shadow-md hover:shadow-slate-400 ${className || ""}`}
      onClick={handleClick}
    >
      {context}
    </button>
  );
};
export default ProductButton;

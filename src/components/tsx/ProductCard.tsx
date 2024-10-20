"use client";
// all import statements
import { BaseProduct } from "@/lib/interfaces/Product";
import React from "react";
import Image from "next/image";

// component - ProductCard
const ProductCard = (props: BaseProduct) => {
  // get data
  const { colorImages, discount, actualPrice, name, id, currentPrice } = props;
  // limit name length to 30 characters
  const shortendName = name.length > 30 ? name.slice(0, 30) + "..." : name;
  // convert values in currency
  const currentPriceInr = new Intl.NumberFormat("en-IN").format(currentPrice);
  const actualPriceInr = new Intl.NumberFormat("en-IN").format(actualPrice);

  return (
    <div
      className="bg-white min-w-64 rounded snap-center border border-solid border-gray-300"
      id={id}
    >
      {/* main image of the product */}
      <div className="p-4 bg-teal-50">
        <Image
          src={colorImages[0].url[0]}
          alt="product main Image"
          height={300}
          width={300}
          className="w-auto h-auto max-h-64  mix-blend-multiply m-auto"
        />
      </div>
      {/* basic information of the product */}
      <div className="py-4 px-6 flex flex-col gap-3">
        {/* discount box */}
        <div className="flex justify-start items-center gap-2">
          <span className="bg-rose-600 rounded text-white py-1 px-2 text-xs font-semibold">
            {discount}% off
          </span>
          <p className="text-rose-600 font-semibold">sale offer</p>
        </div>
        {/* price box */}
        <div className="flex  justify-start items-center">
          <span className="text-sm self-start leading-tight">&#8377;</span>
          <p className="text-xl mr-2 leading-none font-medium">
            {currentPriceInr}
          </p>
          <p className="text-sm text-slate-600">
            M.R.P: <span className="line-through">&#8377;{actualPriceInr}</span>
          </p>
        </div>
        {/* name and add to cart button */}
        <p className="text-slate-800">{shortendName}</p>
        <button
          className="px-4 py-2 capitalize bg-gray-800 text-white rounded  transition-all duration-300 ease-in-out
         hover:scale-90 hover:shadow-md hover:shadow-slate-400"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

import React, { useState } from "react";
import BasicLayout from "./BasicLayout";
import PayU from "./PayU";
import { Product } from "@/lib/interfaces/Product";

const Model = (props: {
  className: string;
  setModel: React.Dispatch<React.SetStateAction<boolean>>;
  detailsOfCartProducts: Product[];
  totalCurrentPrice: number;
}) => {
  const { className, setModel, totalCurrentPrice, detailsOfCartProducts } =
    props;
  return (
    <div
      className={`flex flex-col gap-8 px-4 py-4 sm:px-8 sm:py-8 shadow-card-shadow rounded max-w-screen-md mx-auto bg-white ${
        className || ""
      }`}
    >
      <div className="flex justify-between items-center gap-8">
        <h3 className="text-3xl text-slate-800 font-semibold">
          Please Fill Your Details
        </h3>
        <button
          className="px-4 py-2 bg-red-700 text-white rounded"
          onClick={() => setModel(false)}
        >
          X
        </button>
      </div>

      <PayU
        detailsOfCartProducts={detailsOfCartProducts}
        totalCurrentPrice={totalCurrentPrice}
      />
    </div>
  );
};

export default Model;

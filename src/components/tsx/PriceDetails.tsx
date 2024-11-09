import React from "react";

const PriceDetails = (props: {
  currentPrice: number;
  actualPrice: number;
  className?: string;
}) => {
  const { actualPrice, currentPrice, className } = props;
  const currentPriceInr = new Intl.NumberFormat("en-IN").format(currentPrice);
  const actualPriceInr = new Intl.NumberFormat("en-IN").format(actualPrice);
  return (
    <div className={`flex  justify-start items-center ${className || ""}`}>
      <span className="text-sm self-start leading-tight">&#8377;</span>
      <p className="text-xl mr-2 leading-none font-medium">{currentPriceInr}</p>
      <p className="text-sm text-slate-600">
        M.R.P: <span className="line-through">&#8377;{actualPriceInr}</span>
      </p>
    </div>
  );
};

export default PriceDetails;

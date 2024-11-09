import React from "react";

const DiscountBadge = (props: { discount: number }) => {
  const { discount } = props;
  return (
    <span className="bg-rose-600 rounded text-white py-1 px-2 text-xs font-semibold">
      {discount}% off
    </span>
  );
};

export default DiscountBadge;

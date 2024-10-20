import React from "react";
// a basic three grid cols layout
const CardsHolder = (props: { children: React.ReactNode }) => {
  // got children's from props
  const { children } = props;
  return (
    <div className="grid gap-2 grid-cols-autofit-2 sm:grid-cols-2 sm:gap-4 md:gap-8 md:grid-cols-autofit-3  xl:grid-cols-4">
      {children}
    </div>
  );
};

export default CardsHolder;

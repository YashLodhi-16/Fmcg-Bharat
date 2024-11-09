// all import statements
import React from "react";
import OthersMain from "@/components/tsx/OthersMain";
import ProductsPageContentWrapper from "@/components/tsx/ProductsPageContentWrapper";

// page - Products
const Products = () => {
  // put others main component inside of productsPageContentWrapper component
  return (
    <div>
      <ProductsPageContentWrapper>
        {/* this will add a typing effect */}
        <OthersMain heading="products" />
      </ProductsPageContentWrapper>
    </div>
  );
};

export default Products;

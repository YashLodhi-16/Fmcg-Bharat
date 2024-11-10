// all import statements
import React from "react";
import { useSearchParams } from "next/navigation";
import OthersMain from "@/components/tsx/OthersMain";
import ProductsPageContentWrapper from "@/components/tsx/ProductsPageContentWrapper";
import Navbar from "@/components/tsx/Navbar";

// page - Products
const Products = ({ searchParams }: { searchParams: { search?: string } }) => {
  // put others main component inside of productsPageContentWrapper component
  return (
    <div>
      <Navbar defaultSearch={searchParams.search} />

      <ProductsPageContentWrapper>
        {/* this will add a typing effect */}
        <OthersMain heading="products" />
      </ProductsPageContentWrapper>
    </div>
  );
};

export default Products;

"use client";
// all import statements
import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import BasicLayout from "./BasicLayout";
import Summary from "./Summary";
import ProductsWrapper from "./ProductsWrapper";
import fetchData from "@/lib/utilities/fetchData";
import {
  CategoryDetails,
  CategoryDetailsFromServer,
} from "@/lib/interfaces/Product";

// component - ProductsPageContentWrapper
const ProductsPageContentWrapper = (props: { children: React.ReactNode }) => {
  // get children from props
  const { children } = props;

  return (
    <div className="">
      {/* pass categories as a prop */}
      <Filter key={0} />
      {/* the main element or other children will be rendered here. */}
      {children}

      {/* summarize the products section and wrap it in a section */}
      <BasicLayout paddingTop={false}>
        <Summary
          heading="Explore Our Exclusive Deals"
          paragraph="Discover top-quality products at unbeatable prices."
        />

        {/* this component have all the product that will appear on the page you can manipulate the product of this component by passing a prop. */}
        <ProductsWrapper sales={-1} />
      </BasicLayout>
    </div>
  );
};

export default ProductsPageContentWrapper;

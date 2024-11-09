"use client";
// all import statements
import { BaseProduct } from "@/lib/interfaces/Product";
import React, { useRef } from "react";
import ProductCard from "./ProductCard";

// component - Product Slider
const ProductSlider = (props: { products: BaseProduct[] }) => {
  // get products
  const { products } = props;

  // reference of the div element
  const ref = useRef<HTMLDivElement>(null);

  // function to move slider
  const handleScroll = (direction: boolean) => {
    // get current from ref
    const { current } = ref;

    // if current is available
    if (current) {
      // get the current width of the product container
      const offsetWidth: number = current?.offsetWidth;

      // get the current width of the single product
      const childWidth: number =
        current.children[0]?.getBoundingClientRect()?.width;

      // calculate the number of the visible products
      const visibleItems: number = Math.floor(offsetWidth / childWidth);

      // calculate how much can scroll
      const howMuchScroll = childWidth * visibleItems + visibleItems * 16;

      // get how much product container is scrolled.
      const scrollLeft: number = current?.scrollLeft;
      let directionDistance: number = 0;

      // calculate actual scrolling distance by adding how much is scrolled with how much can scroll
      if (direction) {
        directionDistance = scrollLeft + howMuchScroll;
      } else {
        // calculate for distance to scroll backward by subtract scolled distance and how much can scroll
        directionDistance = scrollLeft - howMuchScroll;
        directionDistance = directionDistance < 0 ? 0 : directionDistance;
      }

      // creating scroll options object
      const scroll: ScrollToOptions = {
        top: 0,
        left: directionDistance,
        behavior: "smooth",
      };

      // finally perform a scroll
      current.scroll(scroll);
    }
  };

  const className: string =
    "absolute top-1/2 -translate-y-1/2 bg-white bg-opacity-5 outline outline-2 outline-blue-400 backdrop-blur-sm  px-3  rounded-full shadow-xl aspect-square";
  return (
    // main container
    <div className="overflow-hidden ">
      {/* container of the products and buttons */}
      <div className="relative">
        {/* container of the products */}
        <div
          className="flex gap-4 overflow-scroll scroll-bar-hidden snap-x snap-mandatory"
          ref={ref}
        >
          {/* generate all products using proudcts prop */}
          {products.map((value: BaseProduct, index: number) => {
            const {
              actualPrice,
              colorImages,
              currentPrice,
              discount,
              _id,
              name,
            } = value;
            return (
              <ProductCard
                actualPrice={actualPrice}
                colorImages={colorImages}
                currentPrice={currentPrice}
                discount={discount}
                _id={_id}
                name={name}
                key={index}
              />
            );
          })}
        </div>

        {/* buttons to move forward/backward */}
        <button
          className={`${className} left-3`}
          onClick={() => handleScroll(false)}
        >
          {"<"}
        </button>
        <button
          className={`${className} right-3`}
          onClick={() => handleScroll(true)}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;

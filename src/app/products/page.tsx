import BasicLayout from "@/components/tsx/BasicLayout";
import CardsHolder from "@/components/tsx/CardsHolder";
import React from "react";
import Main from "@/components/tsx/Main";
import { BaseProduct } from "@/lib/interfaces/Product";
import ProductCard from "@/components/tsx/ProductCard";

const Page = async () => {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_DEV_API}/api/products`);
  // const { products } = await res.json();

  return (
    <div className="">
      <Main
        href="/contact"
        link="any query?"
        src="https://res.cloudinary.com/dblq992uw/image/upload/v1729161510/Public/hero-images/product-main_gtxywm.png"
        paragraph="Discover a wide range of high-quality FMCG products that cater to your daily needs. From trusted household brands to innovative new finds, FMCG Bharat offers everything you need to keep your home stocked and running smoothly."
        key={1}
      >
        <span className="text-yellow-500">fmcg bharat</span>
        <span>products on</span>
      </Main>

      <BasicLayout paddingTop={false}>
        <CardsHolder>
          <>
            {/* {products.map((value: BaseProduct, index: number) => {
              const {
                actualPrice,
                colorImages,
                currentPrice,
                discount,
                id,
                name,
              } = value;
              return (
                <ProductCard
                  actualPrice={actualPrice}
                  colorImages={colorImages}
                  currentPrice={currentPrice}
                  discount={discount}
                  id={id}
                  name={name}
                  key={index}
                />
              );
            })} */}
          </>
        </CardsHolder>
      </BasicLayout>
    </div>
  );
};

export default Page;

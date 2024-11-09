"use client";
import {
  BaseProduct,
  CategoryDetailsFromServer,
  Product,
  SearchProducts,
} from "@/lib/interfaces/Product";
import fetchData from "@/lib/utilities/fetchData";
import React, { useEffect, useState } from "react";
import CardsHolder from "./CardsHolder";
import ProductCard from "./ProductCard";
import { category } from "@/lib/utilities/routes";
import { environment } from "@/lib/utilities/variables";

interface SearchParams extends SearchProducts {
  mainCategory?: string | null;
  subCategory?: string | null;
  underCategory?: string | null;
}
const ProductsWrapper = (props: SearchParams) => {
  const { sales, mainCategory, subCategory, underCategory } = props;
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setProducts([]);

      if (mainCategory) {
        const uri = `mainCategory=${mainCategory}${
          subCategory ? "&subCategory=" + subCategory : ""
        }${underCategory ? "&underCategory=" + underCategory : ""}`;
        const { products } = await fetchData(
          `${environment}/api/products${category}?${uri}`
        );
        setProducts(products);
      } else {
        const salesParams = sales ? `sales=${sales}` : "sales=1";
        const { products } = await fetchData(
          `${environment}/api/products?${salesParams}`
        );
        setProducts(products);
      }
    };
    fetchProducts();
  }, [sales, mainCategory, subCategory, underCategory]);
  return products.length === 0 ? (
    <h1 className="text-2xl font-semibold text-slate-800 text-center">
      This Category Doesn&#39;t Exist.
    </h1>
  ) : (
    <CardsHolder>
      <>
        {products?.map((value: BaseProduct, index: number) => {
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
      </>
    </CardsHolder>
  );
};

export default ProductsWrapper;

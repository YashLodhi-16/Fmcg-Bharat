"use client";
import { CurrentUrl, Product } from "@/lib/interfaces/Product";
import fetchData from "@/lib/utilities/fetchData";
import { products } from "@/lib/utilities/routes";
import React, { useEffect, useState } from "react";
import ProductImageSlider from "./ProductImageSlider";
import PriceDetails from "./PriceDetails";
import DiscountBadge from "./DiscountBadge";
import "@/components/css/item.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";
import {
  addProductInCart,
  removeProductFromCart,
} from "@/lib/store/features/cartProducts/cartProductSlice";
import { CartProducts } from "@/lib/interfaces/CartProducts";
import { environment } from "@/lib/utilities/variables";
const Item = (props: { id: string }) => {
  const { id } = props;
  const [productData, setProductData] = useState<Product | null>(null);
  const [shoeSize, setShoeSize] = useState<string | null>(null);
  const [currUrl, setCurrUrl] = useState<CurrentUrl>({
    color: "",
    url: "",
    index: 0,
  });

  const [urls, setUrls] = useState<string[]>([""]);

  const cartProducts: CartProducts[] = useSelector(
    (state: RootState) => state.cartProducts
  );
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      const data: { documents: Product[] } = await fetchData(
        environment + "/api" + products,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([id]),
        }
      );
      const [item] = data.documents;
      setProductData(item);
      setCurrUrl({
        color: item.colorImages[0].color,
        url: item.colorImages[0].url[0],
        index: 0,
      });
      setUrls(item.colorImages[0].url);
      if (item.size) {
        setShoeSize(item.size[0]);
      }
    };
    getData();
  }, [id]);

  if (!productData) {
    return null;
  }

  return (
    <div className="flex gap-8 justify-center items-start bg-white shadow-xl px-8 py-8 rounded-xl mx-auto w-auto flex-wrap">
      <ProductImageSlider
        colorImages={productData.colorImages}
        currUrl={currUrl}
        setCurrUrl={setCurrUrl}
        urls={urls}
        setUrls={setUrls}
      />
      <div className="flex flex-col gap-4 ">
        <div>
          <p className="text-gray-400 text-sm mb-3">
            {productData.mainCategory} {">"} {productData.subCategory} {"> "}
            {productData.underCategory
              ? `${productData.underCategory} >`
              : ""}{" "}
            {productData.brand}
          </p>
          <span className="text-gray-600 font-semibold">
            {productData.brand}
          </span>
          <h1 className="text-2xl text-slate-800 font-normal mb-2">
            {productData.name}
          </h1>
          <p className="text-gray-500">{productData.description}</p>
        </div>
        <h2 className="flex gap-4 items-end justify-start">
          <div>
            <PriceDetails
              actualPrice={productData.actualPrice}
              currentPrice={productData.currentPrice}
              key={0}
              className="product-page"
            />
          </div>
          <DiscountBadge discount={productData.discount} key={1} />
        </h2>
        {productData.size && (
          <div className="flex flex-wrap justify-start items-center gap-4 mt-2">
            <span className="text-lg text-gray-600 font-semibold">size:</span>
            {productData.size.map((value: string, index: number) => {
              return (
                <button
                  className={`border-2  rounded border-solid  px-4 py-2 w-max ${
                    shoeSize === value ? "border-blue-600" : "border-gray-200"
                  } cursor-pointer transition duration-300 ease-in-out font-semibold`}
                  onClick={() => setShoeSize(value)}
                  key={index}
                >
                  {value}
                </button>
              );
            })}
          </div>
        )}

        {productData.other && (
          <div>
            {productData.other.map((value, index: number) => {
              return (
                <div key={index}>
                  <h3 className="text-yellow-500 text-xl font-semibold my-2">
                    {value.heading}
                  </h3>
                  <ul className="list-disc">
                    {value.data.map((item, idx) => {
                      if (typeof item === "string") {
                        // If item is a string, render it as a list item
                        return <li key={idx}>{item}</li>;
                      } else {
                        // If item is an object, render its properties
                        return (
                          <li key={idx}>
                            <span className="font-semibold">
                              {item.heading}:
                            </span>{" "}
                            {item.data}
                          </li>
                        );
                      }
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        )}

        <div className="">
          {cartProducts.some(
            (value: CartProducts) => value._id === productData._id
          ) ? (
            <button
              className="px-4 py-2 capitalize bg-gray-700 text-white rounded transition-all duration-300 ease-in-out
      hover:scale-90 hover:shadow-md hover:shadow-slate-400"
              onClick={() => dispatch(removeProductFromCart(productData._id))}
            >
              Remove
            </button>
          ) : (
            <button
              className="px-4 py-2 capitalize bg-gray-700 text-white rounded transition-all duration-300 ease-in-out
      hover:scale-90 hover:shadow-md hover:shadow-slate-400"
              onClick={() => {
                dispatch(
                  addProductInCart({
                    totalQuantity: 1,
                    _id: productData._id,
                    color: currUrl?.color || "",
                  })
                );
              }}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;

"use client";
// all import statements
import { ColorImages, Product } from "@/lib/interfaces/Product";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DiscountBadge from "./DiscountBadge";
import PriceDetails from "./PriceDetails";
import Link from "next/link";
import { useDispatch } from "react-redux";
import {
  updateTotalQuantity,
  removeProductFromCart,
} from "@/lib/store/features/cartProducts/cartProductSlice";

// new interface that includes whole product
interface ProductWithCartDetails {
  product: Product;
  totalQuantity: number;
  color: string;
}

// component = CartProduct
const CartProduct = (props: ProductWithCartDetails) => {
  // get data
  const { totalQuantity, color, product } = props;
  // make desc and name short
  const shortendDesc: string =
    product.description.length > 100
      ? product.description.slice(0, 100)
      : product.description;
  const shortendName: string =
    product.name.length > 30 ? product.name.slice(0, 30) : product.name;
  // product image
  const productImage: string | undefined = product.colorImages.find(
    (value: ColorImages) => value.color === color
  )?.url[0];
  // use Dispatch hook to use redux slice function
  const dispatch = useDispatch();
  // state management quantity of the products
  const [quantity, setQuantity] = useState<number | string>(totalQuantity);
  // function for onBlur
  const checkEmptyValue = () => {
    if (!quantity) {
      setQuantity(totalQuantity);
    }
  };

  useEffect(() => {
    // Update Redux when quantity changes, outside of render phase
    if (typeof quantity === "number") {
      dispatch(
        updateTotalQuantity({ id: product._id, totalQuantity: quantity })
      );
    }
  }, [quantity, color, product, dispatch]);

  const changeQuantity = (
    element?: React.ChangeEvent<HTMLInputElement> | null,
    addition?: boolean
  ) => {
    if (element) {
      const value: string = element?.target?.value;
      if (value.length === 0) {
        setQuantity("");
      }
      const isANumber: number = parseInt(value);
      if (!isNaN(isANumber)) {
        if (isANumber === 0) {
          setQuantity(1);
        } else {
          setQuantity(isANumber);
        }
      }
    } else {
      setQuantity((value) => {
        const current =
          typeof value === "string" ? 1 : addition ? value + 1 : value - 1;
        return current <= 0 ? 1 : current;
      });
    }
  };

  // function to remove product from cart
  const removeProduct = () => {
    dispatch(removeProductFromCart(product._id));
  };

  return (
    <div className="flex gap-6 shadow-xl border border-solid border-gray-300 rounded px-4 py-4 sm:px-8 sm:py-8 flex-col bg-white">
      <div className="flex gap-16 w-full flex-col sm:flex-row items-center sm:items-start">
        <div className="">
          <Image
            src={productImage || product.colorImages[0].url[0]}
            alt={product.name}
            width={200}
            height={200}
            className="w-40"
          />
        </div>
        <div className="flex flex-col gap-4 w-full justify-center items-start">
          <Link
            href={"/products/" + product._id}
            className="text-slate-900 font-semibold text-lg"
          >
            {shortendName}
          </Link>
          <p className="text-slate-700">{shortendDesc}</p>
          <div className="flex gap-4 flex-wrap">
            <PriceDetails
              actualPrice={
                typeof quantity === "string"
                  ? product.actualPrice
                  : product.actualPrice * quantity
              }
              currentPrice={
                typeof quantity === "string"
                  ? product.currentPrice
                  : product.currentPrice * quantity
              }
            />
            <DiscountBadge discount={product.discount} />
          </div>
        </div>
      </div>
      <hr className="" />
      <div className="flex gap-4 justify-start items-center ">
        <button
          className="capitalize font-semibold px-3 py-2 leading-none border border-gray-400 border-solid  text-slate-800 rounded-full hover:scale-90 transition duration-300 ease-in-out hover:shadow-xl"
          onClick={() => changeQuantity(null, false)}
        >
          -
        </button>

        <input
          type="text"
          name={product._id}
          id={product._id}
          className="rounded border border-solid border-gray-300 max-w-12 py-1 text-center"
          value={quantity}
          onChange={changeQuantity}
          onBlur={checkEmptyValue}
        />

        <button
          className="capitalize font-semibold px-2.5 py-2 leading-none border border-gray-400 border-solid   text-slate-800 rounded-full hover:scale-90 transition duration-300 ease-in-out hover:shadow-xl"
          onClick={() => changeQuantity(null, true)}
        >
          +
        </button>
        <button
          className="uppercase px-4 py-2 rounded bg-red-700 text-white font-semibold ml-auto hover:scale-90 transition duration-300 ease-in-out hover:shadow-xl"
          onClick={removeProduct}
        >
          remove
        </button>
      </div>
    </div>
  );
};

export default CartProduct;

"use client";
// all import statements
import { BaseProduct, ColorImages } from "@/lib/interfaces/Product";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store/store";
import {
  addProductInCart,
  removeProductFromCart,
} from "@/lib/store/features/cartProducts/cartProductSlice";
import { CartProducts } from "@/lib/interfaces/CartProducts";
import ProductButton from "./ProductButton";
import DiscountBadge from "./DiscountBadge";
import PriceDetails from "./PriceDetails";

// component - ProductCard
const ProductCard = (props: BaseProduct) => {
  const cartProducts: CartProducts[] = useSelector(
    (state: RootState): CartProducts[] => state.cartProducts
  );
  const dispatch = useDispatch();
  const [isInCart, setIsInCart] = useState<boolean>(false);
  // get data
  const { colorImages, discount, actualPrice, name, _id, currentPrice } = props;
  const [productImage, setProductImage] = useState<{
    url: string;
    index: number;
    color: string;
  }>({ url: colorImages[0].url[0], index: 0, color: colorImages[0].color });

  useEffect(() => {
    let existingCartProduct = null;
    let colorExist = null;
    for (let index = 0; index < cartProducts.length; index++) {
      const element = cartProducts[index];
      existingCartProduct = element._id === _id ? true : null;
      colorExist = element.color === productImage.color;
    }

    if (existingCartProduct || colorExist) {
      setIsInCart(true);
    }
  }, [_id, productImage, cartProducts]);

  // limit name length to 30 characters
  const shortendName = name.length > 30 ? name.slice(0, 30) + "..." : name;
  // convert values in currency

  const addInCart = () => {
    dispatch(
      addProductInCart({
        color: productImage.color,
        _id,
        totalQuantity: 1,
      })
    );
    setIsInCart(true);
  };

  const removeFromCart = (id: string) => {
    dispatch(removeProductFromCart(id));
    setIsInCart(false);
  };

  return (
    <div
      className="min-w-64 rounded snap-center border border-solid border-gray-300 overflow-hidden relative hover:shadow-xl group"
      id={_id}
    >
      {/* main image of the product */}
      <div className="p-4 bg-teal-50 h-64  w-full flex justify-center items-center overflow-hidden mb-44">
        <Image
          src={productImage.url}
          alt="product main Image"
          height={300}
          width={300}
          className="object-contain w-auto h-auto max-w-full max-h-full mix-blend-multiply"
        />
      </div>
      {/* basic information of the product */}

      <div className="py-4 px-6 flex flex-col gap-3 absolute left-0 -bottom-10 w-full h-auto bg-white group-hover:bottom-0 transition-all duration-300 ease-in-out">
        {/* discount box */}
        <div className="flex justify-start items-center gap-2">
          <DiscountBadge discount={discount} />
          <p className="text-rose-600 font-semibold">sale offer</p>
        </div>

        <PriceDetails actualPrice={actualPrice} currentPrice={currentPrice} />

        {/* name and add to cart button */}
        <div className="flex flex-col gap-3 justify-center items-start">
          <Link
            href={`/products/${_id}`}
            className="hover-link text-blue-600 w-auto"
          >
            <p>{shortendName}</p>
          </Link>
          {isInCart ? (
            <ProductButton
              context="remove from cart"
              handleClick={() => removeFromCart(_id)}
            />
          ) : (
            <ProductButton context="add to cart" handleClick={addInCart} />
          )}
        </div>

        <div className="mt-1 flex justify-start items-center gap-2">
          {colorImages.map((value: ColorImages, index: number) => {
            if (index > 5) {
              return;
            }
            const { colorCode, color } = value;
            const [firstImage] = value.url;

            return (
              <button
                key={index}
                className={`p-px rounded-full aspect-square w-6 flex justify-center items-center
                  ${
                    index === productImage.index
                      ? "border-2 border-solid border-slate-800"
                      : ""
                  }
                  `}
                onClick={() =>
                  setProductImage((value) => ({
                    // ...value,
                    url: firstImage,
                    index,
                    color,
                  }))
                }
              >
                <span
                  className={`rounded-full w-4 aspect-square block ${
                    index !== productImage.index
                      ? "shadow-sm  shadow-black"
                      : ""
                  }`}
                  style={{ background: colorCode }}
                >
                  {" "}
                </span>
              </button>
            );
          })}
          {colorImages.length > 5 && (
            <span className="text-blue-600 font-semibold">
              +{colorImages.length - 5}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

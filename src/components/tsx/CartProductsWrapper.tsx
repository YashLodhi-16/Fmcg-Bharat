"use client";
// all import statements
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";
import { CartProducts } from "@/lib/interfaces/CartProducts";
import CartProduct from "./CartProduct";
import fetchData from "@/lib/utilities/fetchData";
import { Product } from "@/lib/interfaces/Product";
import Model from "@/components/tsx/Model";
import BasicLayout from "./BasicLayout";
import { clearCart } from "@/lib/store/features/cartProducts/cartProductSlice";

const CartProductsWrapper = () => {
  // state in redux
  const cartProducts: CartProducts[] = useSelector(
    (state: RootState) => state.cartProducts
  );

  const dispatch = useDispatch();
  // state to check that the code will run in client side only.
  const [isLoading, setIsLoading] = useState(true); // Add a loading state

  // contain detail of the products that are in cart.
  const [detailsOfCartProducts, setDetailsOfCartProducts] = useState<Product[]>(
    []
  );

  // state to show model.
  const [model, setModel] = useState<boolean>(false);

  // component did mount function when ever cart products change.
  useEffect(() => {
    // ids of every product in cart
    const ids: string[] = cartProducts.map((value: CartProducts) => value._id);
    // function to fetch products
    const getData = async () => {
      try {
        // post request
        const data: { documents: Product[] } = await fetchData(
          "/api/products",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(ids),
          }
        );
        // update details of cart products with the products data.
        setDetailsOfCartProducts(data.documents);
      } catch (error) {
        console.error("Error fetching product details", error);
      } finally {
        setIsLoading(false); // Set loading state to false after fetching
      }
    };

    // run the function
    getData();

    // re run when change in cart Products
  }, [cartProducts]);

  // Display a loading state until data is fetched
  if (isLoading) {
    return (
      <BasicLayout paddingTop={true}>
        <h1 className="text-center text-2xl font-bold">Loading...</h1>
      </BasicLayout>
    );
  }

  // amount array - total cost | total discount cost subtracted | total amount left
  const totalAmount: number[] = [0, 0];

  for (let index = 0; index < detailsOfCartProducts.length; index++) {
    const element: Product = detailsOfCartProducts[index];
    // get the product to multiple its acutal price with its total quantity
    const currentProduct = cartProducts.find(
      (product: CartProducts, index: number) => product._id === element._id
    );

    // if the product didn't found then return previous value
    if (!currentProduct) {
      return;
    } else {
      totalAmount[0] =
        totalAmount[0] + element.actualPrice * currentProduct.totalQuantity;
      totalAmount[1] =
        totalAmount[1] + element.currentPrice * currentProduct.totalQuantity;
    }
  }

  // amounts in currency format
  const totalActualPriceINR = new Intl.NumberFormat("en-IN").format(
    totalAmount[0]
  );
  const totalCurrentPriceINR = new Intl.NumberFormat("en-IN").format(
    totalAmount[1]
  );
  const totalAmountAfterDiscount: number = totalAmount[0] - totalAmount[1];
  const totalAmountINR = new Intl.NumberFormat("en-IN").format(
    totalAmountAfterDiscount
  );
  return (
    <BasicLayout paddingTop={true} className="!gap-16  md:!gap-24">
      {cartProducts.length === 0 && (
        <main>
          <h1 className="text-5xl text-slate-800 text-center font-bold">
            &quot;zero product in cart&quot;
          </h1>
        </main>
      )}

      <div
        className={`flex flex-col gap-8 items-center ${
          cartProducts.length === 0 ? "hidden" : "block"
        }`}
      >
        <div className="w-full lg:w-3/4">
          <div
            className="py-2 text-white flex px-4 rounded mb-8"
            style={{ backgroundColor: "#0071dc" }}
          >
            <button
              onClick={() => setModel(false)}
              className={`capitalize ${model ? "" : "font-bold"}`}
            >
              products
            </button>
            <span className="mx-2">{">"}</span>
            <button
              onClick={() => setModel(true)}
              className={`capitalize ${model ? "font-bold" : ""}`}
            >
              fill details
            </button>
          </div>

          <div
            className={`flex flex-col w-full md:w-auto md:flex-row gap-16 md:gap-4 items-center justify-center ${
              model ? "hidden" : "block"
            } `}
          >
            <div className="flex flex-col gap-8 max-w-[40rem] w-full">
              {/* <div className="flex flex-col gap-8 max-w-[45rem]"> */}
              {cartProducts?.map((value: CartProducts) => {
                const { _id, color, totalQuantity } = value;
                const product = detailsOfCartProducts?.find(
                  (prod) => prod._id === _id
                );
                if (!product) return;
                return (
                  <CartProduct
                    product={product}
                    color={color}
                    totalQuantity={totalQuantity}
                    key={_id}
                  />
                );
              })}
            </div>

            <div
              className={`flex flex-col gap-4 border border-solid border-gray-300 h-max rounded px-4 py-4 sm:px-8 sm:py-8 shadow-xl bg-white w-full md:max-w-[20rem] ${
                cartProducts.length === 0 ? "hidden" : "block"
              }`}
            >
              <div className="pb-4 border-b border-dashed border-gray-400">
                <h3 className="uppercase text-neutral-500 font-semibold">
                  price details
                </h3>
              </div>
              <div className="grid grid-rows-3  gap-y-2">
                <div className="flex justify-between items-center gap-4">
                  <p>price ({cartProducts.length} items)</p>
                  <p>
                    <span>&#8377;</span>
                    {totalActualPriceINR}
                  </p>
                </div>

                <div className="flex justify-between items-center gap-4">
                  <p>discount</p>

                  <p className="text-green-700">
                    -<span>&#8377;</span>
                    {totalAmountINR}
                  </p>
                </div>

                <div className="flex justify-between items-center gap-4">
                  <p>delivery charges</p>
                  <div>
                    <span className="text-green-700">free</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between font-semibold text-lg border-dashed border-y border-gray-400 py-4">
                <p className="">total amount</p>
                <p>
                  <span>&#8377;</span>
                  {totalCurrentPriceINR}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  className="bg-teal-700 text-white px-4 py-2 capitalize font-semibold rounded   hover:scale-90 transition duration-300 ease-in-out hover:shadow-xl"
                  onClick={() => dispatch(clearCart())}
                >
                  clear cart
                </button>

                <button
                  className="bg-orange-600 text-white px-4 py-2 capitalize font-semibold rounded   hover:scale-90 transition duration-300 ease-in-out hover:shadow-xl"
                  onClick={() => setModel(true)}
                >
                  place order
                </button>
              </div>

              <div>
                <p className="text-green-700">
                  You will save <span>&#8377;</span> {totalAmountINR} on this
                  order
                </p>
              </div>
            </div>
          </div>

          <Model
            className={`${model ? "block" : "hidden"}`}
            detailsOfCartProducts={detailsOfCartProducts}
            setModel={setModel}
            totalCurrentPrice={totalAmount[1]}
          />
        </div>
      </div>
    </BasicLayout>
  );
};

export default CartProductsWrapper;

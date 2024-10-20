// "use client";
// import BasicLayout from "@/components/tsx/BasicLayout";
// import CardsHolder from "@/components/tsx/CardsHolder";
// import Footer from "@/components/tsx/Footer";
// import Main from "@/components/tsx/Main";
// import Navbar from "@/components/tsx/Navbar";
// import React, { useState, useEffect } from "react";
// import { Product, CartProduct } from "@/utilities/interface";
// import ProductCard from "@/components/tsx/ProductCard";
// import TempApi from "@/app/api/products/products.json";
// import { poppins, roboto } from "@/utilities/fonts";
// import Link from "next/link";
// import { products } from "@/utilities/routes";

// const Cart = () => {
//   const heading = "Products",
//     description =
//       "Discover a wide range of high-quality FMCG products that cater to your daily needs. From trusted household brands to innovative new finds, FMCG Bharat offers everything you need to keep your home stocked and running smoothly.",
//     imageUrl = "/about-images/main.webp";
//   const [cartProducts, setCartProducts] = useState<CartProduct[] | null>(null);
//   const localStorageName: string = "cartProducts";

//   useEffect(() => {
//     const productList: string | null = localStorage.getItem(localStorageName);
//     if (productList) {
//       const productListArr: CartProduct[] = JSON.parse(productList);
//       setCartProducts(productListArr);
//     }
//   }, []);

//   return (
//     <div>
//       <Main heading={heading} description={description} imageUrl={imageUrl} />
//       <BasicLayout
//         heading="purchase your needs"
//         paragraph="keep shopping"
//         children={
//           <>
//             <CardsHolder
//               children={
//                 cartProducts ? (
//                   <>
//                     {cartProducts?.map((item, index: number) => {
//                       const { id, totalQuantity } = item;
//                       const product = TempApi.products[id - 1];
//                       const { name, actualMrp, discount, images } = product;
//                       return (
//                         <ProductCard
//                           name={name}
//                           actualMrp={actualMrp}
//                           discount={discount}
//                           id={id}
//                           images={images}
//                           key={index}
//                           cartItem={true}
//                           cartProducts={cartProducts}
//                           setCartProductsFun={setCartProducts}
//                         />
//                       );
//                     })}
//                   </>
//                 ) : (
//                   <div className="flex flex-col gap-4 bg-white px-6 py-4 rounded shadow-xl hover:scale-90 transition-all duration-300 ease-in-out">
//                     <h3
//                       className={`${poppins.className} font-semibold text-xl`}
//                     >
//                       currently no product in cart
//                     </h3>
//                     <Link href={products}>
//                       <button
//                         className={`${roboto.className} card-btn px-3 py-1.5  text-white bg-gray-600`}
//                       >
//                         go to products
//                       </button>
//                     </Link>
//                   </div>
//                 )
//               }
//             />
//           </>
//         }
//         className=""
//       />
//     </div>
//   );
// };

// export default Cart;
import React from "react";

const page = () => {
  return <div></div>;
};

export default page;

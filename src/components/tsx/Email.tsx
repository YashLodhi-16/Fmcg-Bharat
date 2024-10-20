"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import purchaseEmail from "@/lib/emails/purchasEmail";
import { Bill } from "@/lib/interfaces/Bill";

const Email = (props: Bill) => {
  const {
    itemName,
    username,
    orderId,
    useremail,
    orderDate,
    actualPrice,
    discount,
    currentPrice,
    invoiceID,
    totalPrice,
  } = props;
  const currentValues = currentPrice.map(
    (value: number) => "&#8377;" + value.toString() + ".00"
  );
  // return (
  //   <div className="bg-white px-6 py-4 md:px-16 md:py-12 flex flex-col gap-8">
  //     {/* the shorthand details of the purchase. */}
  //     <div className="bg-green-100 rounded-lg px-6 py-8">
  //       <div className="flex justify-start items-center mb-4">
  //         <div>
  //           <span className="font-semibold text-lg">{itemName.join(", ")}</span>
  //           <p
  //             className="text-slate-600"
  //             dangerouslySetInnerHTML={{
  //               __html: currentValues.join(", ") + " INR",
  //             }}
  //           />
  //         </div>
  //       </div>
  //       <div className="flex flex-col gap-4" id="order-data">
  //         <div className="flex gap-6 justify-start items-center">
  //           <div>
  //             <Image
  //               src="https://cdn-icons-png.flaticon.com/512/726/726569.png"
  //               alt="shop icon"
  //               width={25}
  //               height={25}
  //               className="invert-[0.6]"
  //             />
  //           </div>
  //           <div className="flex  flex-col">
  //             <span className="text-slate-600">ordered from</span>
  //             <p className="text-slate-900">fmcg bharat</p>
  //           </div>
  //         </div>
  //         <div className="flex gap-6 justify-start items-center">
  //           <div>
  //             <Image
  //               src="https://cdn-icons-png.flaticon.com/512/25/25473.png"
  //               alt="shop icon"
  //               width={25}
  //               height={25}
  //               className="invert-[0.6]"
  //             />
  //           </div>
  //           <div className="flex  flex-col">
  //             <span className="text-slate-600">total cost</span>
  //             <p className="text-slate-900">&#8377;{totalPrice}.00 INR</p>
  //           </div>
  //         </div>
  //         <div className="flex gap-6 justify-start items-center">
  //           <div>
  //             <Image
  //               src="https://cdn-icons-png.flaticon.com/512/3514/3514491.png"
  //               alt="shop icon"
  //               width={25}
  //               height={25}
  //               className="invert-[0.6]"
  //             />
  //           </div>
  //           <div className="flex  flex-col">
  //             <span className="text-slate-600">Items</span>
  //             <ul className="text-slate-900">
  //               {itemName.map((value: string, index: number) => {
  //                 return <li key={index}>{value}</li>;
  //               })}
  //             </ul>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     <div>
  //       {/* image of the fmcg bharat */}
  //       <div className="bg-rose-50 py-8 px-8 flex justify-center items-center flex-col gap-4">
  //         <Image
  //           src="https://res.cloudinary.com/dblq992uw/image/upload/v1727695741/Products-Images/jordan%20shoes/white/flr4nq5hx0cdeekbouku.png"
  //           alt="main logo"
  //           width={100}
  //           height={100}
  //         />
  //         <h1 className="text-4xl font-bold text-slate-800">Thank You.</h1>
  //       </div>

  //       {/* thank you for the purchase */}
  //       <div className="flex flex-col py-8 px-8 justify-center items-center">
  //         <span className="text-lg font-semibold">hi {username}!</span>
  //         <p>Thank you for your purchase!</p>
  //       </div>

  //       <div className="flex flex-col gap-4">
  //         {/* invoice */}
  //         <div className="uppercase text-center">
  //           <h2 className="text-3xl font-semibold text-slate-800">
  //             invoice id: {invoiceID}
  //           </h2>
  //           <h3 className="text-slate-400 font-semibold text-start">
  //             your order information:
  //           </h3>
  //           <hr />
  //         </div>

  //         {/* simple bill details */}
  //         <div className="grid grid-cols-2 gap-4">
  //           <div>
  //             <span className="font-semibold">order id:</span>
  //             <p className="text-slate-600">{orderId}</p>
  //           </div>

  //           <div>
  //             <span className="font-semibold">bill to:</span>
  //             <p className="text-blue-600 normal-case break-all">{useremail}</p>
  //           </div>

  //           <div>
  //             <span className="font-semibold">order date:</span>
  //             <p className="text-slate-600">{orderDate}</p>
  //           </div>

  //           <div>
  //             <span className="font-semibold">source:</span>
  //             <p className="text-slate-600">fmcg Bharat</p>
  //           </div>
  //         </div>

  //         <div className="mt-2">
  //           <h3 className="uppercase text-slate-400 font-semibold">
  //             here's what you ordered:
  //           </h3>

  //           <div className="grid grid-cols-2 ">
  //             <div>
  //               <div className="bg-rose-50 py-2 px-4 text-start">
  //                 <h4 className="font-semibold">description:</h4>
  //               </div>
  //               <ul className=" flex flex-col justify-center items-start py-4 px-4 text-slate-600">
  //                 {itemName.map((value: string, index: number) => {
  //                   return <li key={index}>{value}</li>;
  //                 })}
  //               </ul>
  //             </div>
  //             <div>
  //               <div className="py-2 px-4 bg-rose-50 text-end">
  //                 <h4 className="font-semibold ">price:</h4>
  //               </div>
  //               <ul className=" flex flex-col justify-center items-end py-4 px-4 text-slate-600">
  //                 {actualPrice.map((value: string, index: number) => {
  //                   return (
  //                     <li
  //                       key={index}
  //                       dangerouslySetInnerHTML={{
  //                         __html: "&#8377;" + value + " INR",
  //                       }}
  //                     />
  //                   );
  //                 })}
  //               </ul>
  //             </div>
  //           </div>

  //           <div>
  //             <h4 className="px-4 py-2 bg-rose-50 font-semibold">discounts:</h4>
  //             <div className="justify-between flex items-center px-4 py-4">
  //               <p>sale discounts:</p>
  //               <ul className="text-slate-600">
  //                 {discount.map((value: string, index: number) => {
  //                   return (
  //                     <li
  //                       key={index}
  //                       dangerouslySetInnerHTML={{
  //                         __html: `(${value}%) -&#8377;${Math.floor(
  //                           (actualPrice[index] * discount[index]) / 100
  //                         )} INR`,
  //                       }}
  //                     />
  //                   );
  //                 })}
  //               </ul>
  //             </div>
  //             <hr />
  //           </div>

  //           <div>
  //             <div className="p-4 flex justify-end items-center gap-4">
  //               <span className="text-slate-400 uppercase font-semibold">
  //                 total:
  //               </span>
  //               <span className="text-slate-900 font-semibold">
  //                 &#8377;{totalPrice} INR
  //               </span>
  //             </div>
  //             <hr />
  //           </div>
  //         </div>
  //         <div className="text-center">
  //           <h5 className="text-slate-700">
  //             please keep a copy of this receipt for your records.
  //           </h5>
  //         </div>

  //         <div className="text-center p-4 pt-0">
  //           <div>
  //             <h6 className="font-semibold">Fmcg bharat</h6>
  //             <p className="text-slate-600">D4 platz 6039 Root, Switzerland</p>
  //             <p className="text-slate-600">
  //               Goods and services tax (GST) Registration number:
  //               9922CHE290020SP
  //             </p>
  //           </div>
  //         </div>

  //         <div className="bg-red-50 p-4 text-center flex flex-col gap-4">
  //           <div className="">
  //             <p className="font-semibold">
  //               {" "}
  //               need help?{" "}
  //               <Link
  //                 href="https://www.fmcgbharat.com"
  //                 className="normal-case text-blue-600"
  //               >
  //                 fmcgbharat.com
  //               </Link>
  //             </p>
  //           </div>
  //           <p className="text-slate-600">
  //             &copy; 2024, Fmcg Bharat, Fmcgbharat, are all other tradermarks
  //             are the property of their respective owners.
  //           </p>
  //           <div className="flex gap-2 justify-center items-center text-blue-600 flex-wrap">
  //             <Link href="terms-and-conditions">terms & conditions</Link>
  //             <span className="w-px h-5 bg-slate-400 inline-block"></span>
  //             <Link href="privacy-and-policy">privacy & security</Link>
  //             <span className="w-px h-5  bg-slate-400 inline-block"></span>
  //             <Link href="return-and-refund">return & refund</Link>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return purchaseEmail(
    itemName,
    username,
    orderId,
    useremail,
    orderDate,
    actualPrice,
    discount,
    currentPrice,
    invoiceID,
    totalPrice
  );
};

export default Email;

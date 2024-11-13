"use client";
import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { useSearchParams } from "next/navigation";
import BasicLayout from "@/components/tsx/BasicLayout";
import { RootState } from "@/lib/store/store";
import { useSelector, useDispatch } from "react-redux";
import fetchData from "@/lib/utilities/fetchData";
import { clearCart } from "@/lib/store/features/cartProducts/cartProductSlice";
import Navbar from "@/components/tsx/common/Navbar";

export const dynamic = "force-dynamic";

const PurchaseResponse = () => {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");
  const amount = searchParams.get("amount");
  const firstName = searchParams.get("firstName");
  const lastName = searchParams.get("lastName");
  const errorMessage = searchParams.get("error_Message");
  const useremail = searchParams.get("email");
  const orderDate = searchParams.get("orderDate");
  const orderId = searchParams.get("orderId");
  const invoiceID = searchParams.get("invoiceID");
  const timerSeconds = 120;
  const [timeoutCounter, setTimeoutCounter] = useState<number>(timerSeconds);
  const cartProducts = useSelector((state: RootState) => state.cartProducts);
  const dispatch = useDispatch();
  const [emailSent, setEmailSent] = useState<boolean>(false);

  useEffect(() => {
    const bothPresent = Boolean(amount && errorMessage);
    const bothAbsent = Boolean(!amount && !errorMessage);

    if (
      bothPresent ||
      bothAbsent ||
      !status ||
      !firstName ||
      !lastName ||
      !useremail ||
      !orderDate ||
      !orderId ||
      !invoiceID ||
      (errorMessage && status !== "failure") ||
      (amount && status !== "success")
    ) {
      redirect("/");
    }
  }, [
    amount,
    errorMessage,
    status,
    firstName,
    lastName,
    useremail,
    orderDate,
    orderId,
    invoiceID,
  ]);

  useEffect(() => {
    if (timeoutCounter === 0) {
      redirect("/");
    }
    const intervalId = setInterval(() => {
      setTimeoutCounter((value) => value - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeoutCounter]);

  useEffect(() => {
    const body = {
      useremail,
      totalPrice: amount,
      orderDate,
      firstName,
      lastName,
      orderId,
      invoiceID,
      products: cartProducts,
    };
    const sendEmail = async () => {
      const res = await fetchData("/api/products/success/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (res.success) {
        dispatch(clearCart());
        alert("success");
      } else {
        alert(
          "There was an Error while Sending invoice to your Email, please Contact Us."
        );
      }
      setEmailSent(true);
    };
    if (!emailSent) {
      sendEmail();
    }
  }, [
    dispatch,
    amount,
    cartProducts,
    firstName,
    invoiceID,
    lastName,
    orderDate,
    orderId,
    emailSent,
    useremail,
  ]);

  return (
    <>
      <Navbar />

      <BasicLayout paddingTop={true}>
        <main
          className={`${
            status === "success"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }
        px-8 py-8 rounded shadow-xl flex flex-col justify-center items-start gap-8 max-w-full sm:max-w-screen-sm mx-auto
        `}
        >
          <div>
            <h1 className="text-3xl">
              Dear,{" "}
              <span className="text-slate-800 font-semibold">
                {firstName + " " + lastName}
              </span>
            </h1>
            {amount ? (
              <p className="text-xl">
                the total amount you paid is{" "}
                <span className="text-slate-800 font-semibold">
                  &#8377;{amount}
                </span>
              </p>
            ) : (
              <p className="text-xl">
                transaction failed due to{" "}
                <span className="text-slate-800 font-semibold">
                  {errorMessage}
                </span>
              </p>
            )}
          </div>
          <div>
            <p className="text-sm">the bill is sent to your email.</p>
            <p className="text-sm">
              thank you for purchasing products from our site.
            </p>
            <p className="text-sm text-yellow-500">
              you will be redirected to the homepage in {timeoutCounter}{" "}
              seconds.
            </p>
          </div>
        </main>
      </BasicLayout>
    </>
  );
};

export default PurchaseResponse;

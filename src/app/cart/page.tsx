import BasicLayout from "@/components/tsx/BasicLayout";
import React from "react";
import CartProductsWrapper from "@/components/tsx/CartProductsWrapper";
import { GetServerSideProps } from "next";
import createTxnid from "@/lib/utilities/createTxnid";

const page = () => {
  return (
    <div>
      <CartProductsWrapper />
    </div>
  );
};

export default page;

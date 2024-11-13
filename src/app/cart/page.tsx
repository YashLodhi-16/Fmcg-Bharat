import BasicLayout from "@/components/tsx/BasicLayout";
import React from "react";
import CartProductsWrapper from "@/components/tsx/CartProductsWrapper";
import { GetServerSideProps } from "next";
import createTxnid from "@/lib/utilities/createTxnid";
import Navbar from "@/components/tsx/common/Navbar";

const page = () => {
  return (
    <div>
      <Navbar />

      <CartProductsWrapper />
    </div>
  );
};

export default page;

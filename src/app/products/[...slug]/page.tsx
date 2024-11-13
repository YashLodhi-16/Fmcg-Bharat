import React from "react";
import BasicLayout from "@/components/tsx/BasicLayout";
import Item from "@/components/tsx/Item";
import mongoose from "mongoose";
import { redirect } from "next/navigation";
import { products } from "@/lib/utilities/routes";
import ProductsWrapper from "@/components/tsx/ProductsWrapper";
import Filter from "@/components/tsx/Filter";
import Navbar from "@/components/tsx/common/Navbar";
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const slug: string[] = (await params).slug;
  const [idOrMainCategory] = slug;
  if (!idOrMainCategory) {
    return redirect(products);
  }
  let idOrNot = false;
  try {
    mongoose.Types.ObjectId.createFromHexString(idOrMainCategory);
    idOrNot = true;
  } catch (error) {
  } finally {
    if (idOrNot) {
      return (
        <>
          <Navbar />

          <Filter />
          <BasicLayout paddingTop={true}>
            <Item id={idOrMainCategory} />
          </BasicLayout>
        </>
      );
    } else {
      const [, subCategory, underCategory] = slug;
      return (
        <>
          <Navbar />

          <Filter />
          <BasicLayout paddingTop={true}>
            <ProductsWrapper
              key={0}
              mainCategory={idOrMainCategory}
              subCategory={subCategory}
              underCategory={underCategory}
            />
          </BasicLayout>
        </>
      );
    }
  }
}

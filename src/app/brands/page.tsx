// all import statements
import BasicLayout from "@/components/tsx/BasicLayout";
import Main from "@/components/tsx/Main";
import Summary from "@/components/tsx/Summary";
import { brands, products } from "@/lib/utilities/routes";
import { Metadata } from "next";
import {
  environment,
  title,
  titleConcatinate,
} from "@/lib/utilities/variables";
import titleName from "@/lib/utilities/titleName";
import Navbar from "@/components/tsx/Navbar";

// page - Brands
export default function Brands() {
  const key: number = 0;
  return (
    // a div with main section and no Brands available section.
    <div className="">
      <Navbar />

      <Main
        href={products}
        link="products"
        src={process.env.NEXT_PUBLIC_MAIN_ICON || ""}
        paragraph="Explore the trusted brands powering."
        maxWidth="max-w-56 mb-8 shadow-xl sm:max-w-48"
        key={key}
      >
        {/* heading in two parts as a children prop */}
        <span className="">
          <span className="text-orange-500">fmcg</span> bharat
        </span>
        <span className="block text-lg uppercase font-semibold mt-1">
          official brands
        </span>
      </Main>

      <BasicLayout
        className="text-center text-slate-800  bg-red-50"
        key={key}
        paddingTop={true}
      >
        <Summary
          heading="we will add brands soon..."
          paragraph="currently no brands available!!!"
          key={key}
        />
      </BasicLayout>
    </div>
  );
}

const name = titleName(brands);
export const metadata: Metadata = {
  title: title + titleConcatinate + name,
  description:
    "Explore the top FMCG brands available at FMCG Bharat. Quality products from trusted brands, all in one place.",
  keywords: ["fmcg brands", "top brands", "trusted products"],
  openGraph: {
    title: title + titleConcatinate + name,
    description:
      "Find the best FMCG brands at FMCG Bharat. Discover quality products from leading brands.",
    url: environment + brands,
    type: "website",
    images: [
      {
        url: process.env.NEXT_PUBLIC_MAIN_ICON || "",
        width: 800,
        height: 800,
        alt: "FMCG Bharat Brands",
      },
    ],
  },
  alternates: { canonical: environment + brands },
};

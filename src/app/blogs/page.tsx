// all import statements
import BasicLayout from "@/components/tsx/BasicLayout";
import Main from "@/components/tsx/Main";
import Summary from "@/components/tsx/Summary";
import { home } from "@/lib/utilities/routes";
import {
  environment,
  title,
  titleConcatinate,
} from "@/lib/utilities/variables";
import { Metadata } from "next";
import { blogs } from "@/lib/utilities/routes";
import titleName from "@/lib/utilities/titleName";
import Navbar from "@/components/tsx/common/Navbar";

// page - Blogs
export default function Blogs() {
  const key: number = 0;
  return (
    // a div with main section and no Blogs available section.
    <div className="">
      <Navbar />

      <Main
        href={home}
        link="products"
        src={process.env.NEXT_PUBLIC_MAIN_ICON || ""}
        paragraph="the latest news, tips and information of fmcg bharat"
        maxWidth="max-w-56 mb-8 shadow-xl sm:max-w-48"
        key={key}
      >
        {/* heading in two parts as a children prop */}
        <span className="">
          <span className="text-orange-500">fmcg</span> bharat
        </span>
        <span className="block text-lg uppercase font-semibold mt-1">
          official blogs
        </span>
      </Main>

      <BasicLayout
        className="text-center text-slate-800 bg-red-50"
        key={key}
        paddingTop={true}
      >
        <Summary
          heading="we will add blogs soon..."
          paragraph="currently no blogs available!!!"
          key={key}
        />
      </BasicLayout>
    </div>
  );
}

const name = titleName(blogs);
export const metadata: Metadata = {
  title: title + titleConcatinate + name,
  description:
    "Stay updated with the latest news, tips, and trends in the FMCG sector. Explore FMCG Bharat’s official blog posts and articles.",
  keywords: ["fmcg blog", "news", "tips", "fmcg industry"],
  openGraph: {
    title: title + titleConcatinate + name,
    description:
      "Discover insights and updates from the FMCG world through our blog at FMCG Bharat.",
    url: environment + blogs,
    type: "website",
    images: [
      {
        url: process.env.NEXT_PUBLIC_MAIN_ICON || "",
        width: 800,
        height: 800,
        alt: "FMCG Bharat Blogs",
      },
    ],
  },
  alternates: { canonical: environment + blogs },
};

// all imports
import ReturnAndRefund from "@/components/tsx/ReturnAndRefund";
import LegalContainer from "@/components/tsx/LegalContainer";
import Main from "@/components/tsx/Main";
import {
  environment,
  legalId,
  title,
  titleConcatinate,
} from "@/lib/utilities/variables";
import titleName from "@/lib/utilities/titleName";
import { returnAndRefund } from "@/lib/utilities/routes";
import { Metadata } from "next";
import Navbar from "@/components/tsx/Navbar";

// page - return and refund
export default function ReturnAndRefundPage() {
  const key: number = 0;
  return (
    <div className="">
      <Navbar />
      {/* a main and legalContainer section */}
      <Main
        href={"#" + legalId}
        link="read it carefully"
        src={process.env.NEXT_PUBLIC_LEGAL_HERO_IMAGE || ""}
        paragraph="We want you to be satisfied with your purchase. Our return and refund policy provides details on how you can return products and get your refund hassle-free."
        key={key}
      >
        {/* heading in two parts as a children prop */}
        <span className="uppercase">return &</span>
        <span className="uppercase leading-none">refund</span>
      </Main>
      <LegalContainer key={key}>
        <ReturnAndRefund key={key} />
      </LegalContainer>
    </div>
  );
}

const name: string = titleName(returnAndRefund);
export const metadata: Metadata = {
  title: title + titleConcatinate + name,
  description:
    "Learn about FMCG Bharat’s return and refund policies for a smooth shopping experience.",
  keywords: ["return policy", "refund policy", "fmcg bharat returns"],
  openGraph: {
    title: title + titleConcatinate + name,
    description:
      "Read about FMCG Bharat’s return and refund policies for hassle-free transactions.",
    url: environment + returnAndRefund,
    type: "website",
    images: [
      {
        url: process.env.NEXT_PUBLIC_MAIN_ICON || "",
        width: 800,
        height: 800,
        alt: "FMCG Bharat Return Policy",
      },
    ],
  },
  alternates: { canonical: environment + returnAndRefund },
};

// all imports
import LegalContainer from "@/components/tsx/LegalContainer";
import Main from "@/components/tsx/Main";
import Navbar from "@/components/tsx/Navbar";
import TermsAndConditions from "@/components/tsx/TermsAndConditions";
import { termsAndConditions } from "@/lib/utilities/routes";
import titleName from "@/lib/utilities/titleName";
import {
  environment,
  legalId,
  title,
  titleConcatinate,
} from "@/lib/utilities/variables";
import { Metadata } from "next";

// page - terms and conditions
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
        paragraph="By using our services, you agree to abide by our terms and conditions. Please review these terms carefully, as they outline your rights and obligations when interacting with our website."
        key={key}
      >
        {/* heading in two parts as a children prop */}
        <span className="uppercase">terms &</span>
        <span className="uppercase leading-none">conditions</span>
      </Main>
      <LegalContainer key={key}>
        <TermsAndConditions key={key} />
      </LegalContainer>
    </div>
  );
}

const name = titleName(termsAndConditions);
export const metadata: Metadata = {
  title: title + titleConcatinate + name,
  description:
    "Review the terms and conditions governing the use of FMCG Bharat’s website and services.",
  keywords: ["terms and conditions", "fmcg bharat terms"],
  openGraph: {
    title: title + titleConcatinate + name,
    description:
      "Read the terms and conditions of FMCG Bharat before using our services.",
    url: environment + termsAndConditions,
    type: "website",
    images: [
      {
        url: process.env.NEXT_PUBLIC_MAIN_ICON || "",
        width: 800,
        height: 800,
        alt: "FMCG Bharat Terms and Conditions",
      },
    ],
  },
  alternates: {
    canonical: environment + termsAndConditions,
  },
};

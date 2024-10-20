// all import statements
import PrivacyAndPolicy from "@/components/tsx/PrivacyAndPolicy";
import LegalContainer from "@/components/tsx/LegalContainer";
import Main from "@/components/tsx/Main";
import { legalId, title, titleConcatinate } from "@/lib/utilities/variables";
import { Metadata } from "next";
import { privacyAndPolicy } from "@/lib/utilities/routes";
import titleName from "@/lib/utilities/titleName";

// page - privacy and policy
export default function PrivacyAndPolicyPage() {
  const key: number = 0;
  return (
    <div className="">
      {/* a main and legalContainer section */}
      <Main
        href={"#" + legalId}
        link="read it carefully"
        src={process.env.NEXT_PUBLIC_LEGAL_HERO_IMAGE || ""}
        paragraph="Your privacy is important to us. This policy outlines how we collect, use, and safeguard your personal information. Please review our privacy policy to understand how we handle your information."
        key={key}
      >
        {/* heading in two parts as a children prop */}
        <span className="uppercase">policy</span>
        <span className="uppercase">privacy &</span>
      </Main>
      <LegalContainer key={key}>
        <PrivacyAndPolicy key={key} />
      </LegalContainer>
    </div>
  );
}

const name: string = titleName(privacyAndPolicy);
export const metadata: Metadata = {
  title: title + titleConcatinate + name,
  description:
    "Understand how FMCG Bharat collects, uses, and protects your data. Read our privacy policy here.",
  keywords: ["privacy policy", "data protection", "fmcg bharat privacy"],
  openGraph: {
    title: title + titleConcatinate + name,
    description:
      "Learn about FMCG Bharat's privacy policy and how we handle your information.",
    url: process.env.NEXT_PUBLIC_PRO_API + privacyAndPolicy,
    type: "website",
    images: [
      {
        url: process.env.NEXT_PUBLIC_MAIN_ICON || "",
        width: 800,
        height: 800,
        alt: "FMCG Bharat Privacy Policy",
      },
    ],
  },
  alternates: { canonical: process.env.NEXT_PUBLIC_PRO_API + privacyAndPolicy },
};

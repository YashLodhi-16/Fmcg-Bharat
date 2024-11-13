import Navbar from "@/components/tsx/common/Navbar";
import LegalContainer from "@/components/tsx/LegalContainer";
import Main from "@/components/tsx/Main";
import { legalId } from "@/lib/utilities/variables";
import React from "react";
import Shipping from "@/components/tsx/Shipping";

const Page = () => {
  const key = 0;
  return (
    <div>
      <Navbar />
      {/* a main and legalContainer section */}
      <Main
        href={"#" + legalId}
        link="read it carefully"
        src={process.env.NEXT_PUBLIC_LEGAL_HERO_IMAGE || ""}
        paragraph="Details about shipping and delivery policies."
        key={key}
      >
        {/* heading in two parts as a children prop */}
        <span className="uppercase">shipping &</span>
        <span className="uppercase leading-none">delivery</span>
      </Main>
      <LegalContainer>
        <Shipping />
      </LegalContainer>
    </div>
  );
};

export default Page;

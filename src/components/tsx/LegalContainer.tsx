// all import statements
import React from "react";
import BasicLayout from "./BasicLayout";
import { legalId } from "@/lib/utilities/variables";

// component - LegalContainer
const LegalContainer = (props: { children: React.ReactNode }) => {
  const { children } = props;
  return (
    // wrap inside a section element
    <BasicLayout paddingTop={false} id={legalId}>
      <div className="flex flex-col gap-4 w-full px-6 py-6 sm:px-8 sm:py-8 bg-white rounded-lg shadow-xl text-slate-800 mx-auto legal-container">
        {children}
      </div>
    </BasicLayout>
  );
};

export default LegalContainer;

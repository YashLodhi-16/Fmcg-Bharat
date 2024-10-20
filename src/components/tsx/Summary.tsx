// all import statements
import React from "react";
import { notoSans } from "@/lib/fonts/notoSans";
import { poppins } from "@/lib/fonts/poppins";
import { MainBasic } from "@/lib/interfaces/MainBasic";

// with className add in Main Basic
interface SummaryPropsType extends MainBasic {
  className?: string;
}

// component - Summary
const Summary = (props: SummaryPropsType) => {
  // get data
  const { heading, paragraph, className } = props;
  return (
    // return a simple div with some basic data
    <div className={className || ""}>
      <h2 className={`${poppins.className} text-4xl mb-2`}>{heading}</h2>
      <p className={`${notoSans.className}  tracking-widest`}>{paragraph}</p>
    </div>
  );
};

export default Summary;

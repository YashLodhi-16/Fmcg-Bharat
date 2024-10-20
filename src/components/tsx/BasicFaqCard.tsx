"use client";
// all import statements
import { BasicFaqCardDetails } from "@/lib/interfaces/Card";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

// component - BasicFaqCard
const BasicFaqCard = (props: BasicFaqCardDetails) => {
  // get data
  const { answer, question, heading } = props;
  // state for open/close button
  const [status, setStatus] = useState<boolean>(true);
  return (
    <div className="flex flex-col items-start justify-center gap-2 w-full  rounded-md px-2 sm:px-8">
      <div className="w-full">
        {/* faq category heading */}
        {heading && <h3 className="text-2xl font-semibold mb-8">{heading}</h3>}
        {/* main faq container */}
        <div className=" flex justify-center items-start  flex-col">
          {/* question */}
          {/* open/close container as a button for the answer */}
          <div
            className={`flex justify-between items-center cursor-pointer w-full gap-4 ${
              status
                ? "border-b border-b-gray-400 brightness-100"
                : "border-b-2 border-b-blue-800 brightness-[60%]"
            }  border-solid  pb-8 hover:border-b-2 hover:border-b-blue-800 hover:brightness-[60%]`}
            onClick={() => setStatus((value) => !value)}
          >
            <h4 className="text-blue-600 ">{question}</h4>

            {/* open/close symbol */}
            <div>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`text-blue-600 ${
                  status ? "rotate-0" : "rotate-180"
                }`}
                width={25}
                height={25}
              />
            </div>
          </div>

          {/* answer */}
          <div
            className={`overflow-hidden w-full transition-all duration-300 ease-in-out ${
              status ? "max-h-0" : "max-h-96"
            }`}
          >
            <div className={`border-b border-gray-400 border-solid py-6 `}>
              <p className="text-slate-700">{answer}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicFaqCard;

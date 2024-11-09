"use client";
// all import statements
import React from "react";
import Link from "next/link";
import InputFields from "@/components/tsx/InputFields";
import BasicLayout from "./BasicLayout";
import { roboto } from "@/lib/fonts/roboto";
import { poppins } from "@/lib/fonts/poppins";
import {
  ContactForm,
  FeedbackForm,
  InputFieldsDetails,
  Page,
} from "@/lib/interfaces/Form";
import { environment } from "@/lib/utilities/variables";

// extends page interface so i can pass state and input fields data to component.
interface FormPage extends Page {
  inputFields: InputFieldsDetails[];
  formData: ContactForm | FeedbackForm;
}

// component - Form
const Form = (props: FormPage) => {
  // get data
  const {
    inputFields,
    firstSection,
    secondSection,
    api,
    bottomPosition,
    formData,
  } = props;

  // this function will submit the form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // prevent page reload
    e.preventDefault();
    // post request
    const res = await fetch(`${environment}/api/${api}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // todo:-
    // add a success alert and reset form data
    const data = await res.json();
    if (!data.info) {
      alert("unable to send the email");
    } else {
      alert("email sended successfully.");
    }
  };

  return (
    // set bottom position and padding top of the section element
    <BasicLayout
      className={`static md:absolute md:-bottom-full ${bottomPosition} md:left-0`}
      paddingTop={true}
    >
      {/* divided div in two sections */}
      <div className="justify-between items-center grid md:grid-cols-2 bg-white rounded-lg shadow-xl relative py-8 sm:py-10 sm:px-10 px-8 md:w-full lg:w-4/5">
        {/* the metadata div */}
        <div className="pb-8 sm:pb-10 md:pb-0 md:pr-10 h-full border-b border-b-gray-400 md:border-b-0 md:border-r border-solid md:border-r-gray-400">
          {/* first data section */}
          <div className="mb-8">
            <h2 className="text-teal-500 text-3xl font-bold mb-4">
              {firstSection.heading}
            </h2>

            <p>{firstSection.paragraph}</p>
          </div>

          {/* second data section */}
          <div className="">
            <h3 className="text-2xl font-semibold">{secondSection.heading}</h3>
            <Link
              href={secondSection.heading}
              className="font-semibold text-teal-500"
            >
              {secondSection.link}
            </Link>
            <p>{secondSection.paragraph}</p>
          </div>
        </div>

        {/* the form div */}
        <div className=" pt-8 sm:pt-10 md:pt-0 md:pl-10 w-full rounded  max-w-xl h-full mx-auto">
          <form className="flex flex-col gap-6 rounded" onSubmit={handleSubmit}>
            <h3
              className={`${poppins.className} ml-12 text-3xl font-black z-10`}
            >
              {/* todo:- */}
              {/* add a custom heading */}
              send request
            </h3>

            {/* generating input fields */}
            {inputFields.map((value, index) => {
              const { src, input } = value;
              return <InputFields src={src} input={input} key={index} />;
            })}

            <button
              className={`${roboto.className} card-btn bg-gray-600 text-white !font-bold py-2.5 px-4 w-min ml-12`}
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </BasicLayout>
  );
};

export default Form;

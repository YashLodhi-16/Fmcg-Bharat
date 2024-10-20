// all import statements
"use client";
import React, { useState } from "react";
import Summary from "./Summary";
import Link from "next/link";
import { products } from "@/lib/utilities/routes";

// component - Search
const Search = () => {
  // state for search product name
  const [searchHref, setSearchHref] = useState<string>("");

  // update state function
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchHref(value);
  };
  // simple search button
  return (
    <div className="py-8 sm:py-16 px-6 sm:px-16 bg-teal-100 text-center shadow-xl">
      <Summary
        className="mb-6 sm:mb-10 "
        heading="fast essentials, delivered to your door!"
        paragraph="make every shopping moment count-start your journey today!"
      />
      <div className="flex justify-center items-center">
        <input
          type="text"
          name="search"
          id="search"
          className="px-4 py-4 border border-solid w-full sm:w-4/5 border-black focus-visible:outline-none focus:outline-none rounded-l max-w-screen-sm"
          placeholder="Find your perfect need!"
          value={searchHref}
          onChange={handleChange}
        />
        {/* a link that will search the product that user enters in the input field */}
        <Link href={products + "/" + searchHref} className="outline-none">
          <button className="px-4 py-4 border border-solid border-black bg-black text-white font-semibold capitalize focus:outline-none focus-visible:outline-none rounded-r ">
            search
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Search;

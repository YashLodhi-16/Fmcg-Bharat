// import all necessary modules
import Image from "next/image";
import Link from "next/link";
import React from "react";
// data structure for div element
import { NormalCard } from "@/lib/interfaces/NormalCard";
// some fonts
import { notoSans } from "@/lib/fonts/notoSans";
import { roboto } from "@/lib/fonts/roboto";
import { poppins } from "@/lib/fonts/poppins";

const Card = (props: NormalCard) => {
  // getting all data from props
  const { image, description, src, brand } = props;
  // if the brand length is more than 50characters then cut it to 50 characters and add (...)
  const betterBrandName =
    brand.length > 50 ? brand.slice(0, 50) + "..." : brand;
  const betterDescriptionName =
    description.length > 100
      ? description.substring(0, 100) + "..."
      : description;
  return (
    <div className="shadow-xl bg-white  rounded hover:scale-90  hover:shadow-gray-500 transition-all duration-300 ease-in-out py-10 sm:py-12">
      {/* basic images for a card */}
      <div className="group mb-10 sm:mb-12">
        <Image
          className="mx-auto shadow-lg shadow-red-50 border border-solid border-red-400 rounded group-hover:rotateY-180 transition-transform duration-1000 ease-in-out"
          width={200}
          height={200}
          alt={brand}
          src={image}
        />
      </div>
      {/* create card details like heading, desc. and a link to browse them */}
      <div className="px-8 sm:px-12">
        <div className="mb-5 sm:mb-6 break-words">
          <h3 className={`text-xl font-semibold ${poppins.className} mb-1 `}>
            {betterBrandName}
          </h3>
          <p className={notoSans.className}>{betterDescriptionName}</p>
        </div>
        <div>
          {/* a button for a more detailed page of the card*/}
          <button className="text-white default-btn">
            <Link className={`${roboto.className}`} href={src}>
              Get
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

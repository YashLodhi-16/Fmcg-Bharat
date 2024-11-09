// import all necessary modules
import Image from "next/image";
import React from "react";
// some fonts
import { notoSans } from "@/lib/fonts/notoSans";
import { poppins } from "@/lib/fonts/poppins";
// data structure for article element
import { Article } from "@/lib/interfaces/Article";

const InfoArticle = (props: Article) => {
  // getting data from props with a proper structure using Article interface
  const { heading, imageSrc, paragraph, imageAlt } = props;
  // getting headingClass if i want to change/add any class and settng a default value
  const headingClass = props?.headingClass || "";
  // checking whether a image and alt is provided or not using boolean conversion
  const isImageGiven: boolean = !!(imageSrc && imageAlt);
  return (
    <article
      className={`flex flex-col ${
        isImageGiven ? "md:grid md:grid-cols-3 gap-12" : ""
      }`}
    >
      <div
        className={`flex flex-col gap-3 items-start justify-center ${
          isImageGiven ? "col-span-2" : ""
        }`}
      >
        <h3
          className={`font-semibold text-4xl ${poppins.className} text-slate-800 ${headingClass}`}
        >
          {heading}
        </h3>
        {/* create paragraphs dynamically using data form props */}
        {paragraph.map((item: string, index: number) => {
          return (
            <p
              className={`${notoSans.className} max-w-screen-md`}
              // adding a unique key for each paragraph
              key={index + item.slice(0, 5)}
            >
              {item}
            </p>
          );
        })}
      </div>
      {/* if image and alt is provided then show them else not */}
      {isImageGiven && (
        <div className="flex justify-center items-center col-span-1 group">
          {/* using typscript non null assertion to tell him that imageSrc and imageAlt are not define is this block */}
          <Image
            className="w-36 shadow-xl"
            src={imageSrc!}
            width={250}
            height={250}
            alt={imageAlt!}
          />
        </div>
      )}
    </article>
  );
};

export default InfoArticle;

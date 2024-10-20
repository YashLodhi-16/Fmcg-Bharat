// all imports
import { BasiCardDetails } from "@/lib/interfaces/Card";
import Image from "next/image";
import Link from "next/link";

// component - BasiCard
const BasiCard = (props: BasiCardDetails) => {
  // get data
  const { heading, paragraph, link, href, src, alt, className } = props;
  // check if its a normal card or a big side card
  const imageComp: boolean = !!(link && href);
  return (
    <div
      className={` flex justify-between items-center gap-4 sm:gap-8
         ${imageComp ? "flex-col" : ""} ${className || ""}`}
    >
      {/* side image */}
      <div className="block">
        <Image
          className={imageComp ? "w-60 sm:w-auto" : "w-24 sm:w-12"}
          src={src}
          alt={alt}
          width={300}
          height={300}
        />
      </div>

      {/* card details */}
      <div
        className={`flex flex-col items-start justify-center ${
          imageComp ? "px-2" : ""
        }`}
      >
        <h3 className="mb-2 text-2xl sm:text-3xl font-medium">{heading}</h3>
        <p
          className={`max-w-screen-sm sm:text-lg text-slate-700 ${
            imageComp ? "mb-6" : ""
          }`}
        >
          {paragraph}
        </p>
        {imageComp && (
          <Link href={href!}>
            <button className="rounded-full bg-blue-600 text-white px-4 py-3 capitalize font-semibold">
              {link}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};
export default BasiCard;

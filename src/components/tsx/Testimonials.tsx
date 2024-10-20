// import statements
import React from "react";
import Image from "next/image";
import { Review } from "@/lib/interfaces/Review";
import CardsHolder from "./CardsHolder";

// testimonial - singal
const Testimonial = (props: Review) => {
  // extract main data
  const { review, user, length } = props;
  // extra user data
  const { logo, username } = user;

  // number of stars according length
  const stars: string[] = Array.from({ length }, () => "&#9733;");
  return (
    // review container
    <div className="shadow-xl py-6 sm:py-8 px-6 sm:px-8  flex flex-col gap-4 sm:gap-6 md:gap-4   border border-solid border-zinc-300 rounded items-start justify-start bg-white hover:scale-95 transition-all duration-300 ease-in-out">
      {/* stars */}
      <p
        className="text-yellow-500 text-xl drop-shadow-md"
        dangerouslySetInnerHTML={{ __html: stars.join("") }}
      />
      {/* user review */}
      <p className="text-slate-900">{review}</p>
      {/* user info - photo and name */}
      <div className="flex gap-4 items-center mt-auto">
        <Image
          src={logo}
          alt="logo a user"
          width={100}
          height={100}
          className="rounded-full w-8 shadow-md shadow-gray-400"
        />

        <h5 className="font-semibold text-slate-900">{username}</h5>
      </div>
    </div>
  );
};

// testimonials - group
const Testimonials = (props: { reviews: Review[] }) => {
  // get data
  const { reviews } = props;
  return (
    <CardsHolder>
      {/* add all reviews using loop */}
      {reviews?.map((value: Review, index: number) => {
        const { review, user, length } = value;
        return (
          <Testimonial
            key={index}
            review={review}
            user={user}
            length={length}
          />
        );
      })}
    </CardsHolder>
  );
};

export default Testimonials;

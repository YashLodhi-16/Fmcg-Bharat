// all import statements
import { FeatureDetails } from "@/lib/interfaces/Feature";
import Image from "next/image";
import React from "react";
import CardsHolder from "./CardsHolder";

// component - feature
const Feature = (props: FeatureDetails) => {
  // get data
  const { logo, heading, paragraph } = props;
  return (
    // basic component
    <div className="flex gap-4 justify-start items-center">
      <div>
        <Image
          src={logo}
          alt="features section logo"
          width={100}
          height={100}
          className="w-16"
        />
      </div>
      <div>
        <h4 className="font-semibold">{heading}</h4>
        {/* setting paragraph inner html for the html entity */}
        <p className="" dangerouslySetInnerHTML={{ __html: paragraph }} />
      </div>
    </div>
  );
};

// component - Features
const Features = (props: { featuresData: FeatureDetails[] }) => {
  // get data
  const { featuresData } = props;
  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      {/* generate features and wrap them inside of CardsHolder component */}
      <CardsHolder>
        {featuresData.map((value: FeatureDetails, index: number) => {
          const { logo, heading, paragraph } = value;
          return (
            <Feature
              key={index}
              logo={logo}
              heading={heading}
              paragraph={paragraph}
            />
          );
        })}
      </CardsHolder>
      {/* basic information for working schedule */}
      <div className="flex justify-between flex-wrap gap-4">
        <p className="capitalize">
          <span className="font-bold capitalize">working hours: </span>
          10:00 am - 6:00 pm, monday to saturday.
        </p>
        <p>
          <span className="font-bold capitalize">your online store: </span>
          explore our wide range of products and enjoy seamless checkout
          options.
        </p>
      </div>
    </div>
  );
};

export default Features;

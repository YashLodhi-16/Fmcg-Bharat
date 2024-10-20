// all import statements
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BasicLayout from "@/components/tsx/BasicLayout";

// main component
const Main = (props: {
  paragraph: string;
  link: string;
  href: string;
  children: React.ReactNode;
  src: string;
  maxWidth?: string;
}) => {
  // get props
  const { href, link, paragraph, src, maxWidth, children } = props;
  // convert children to children array
  const childrenArray = React.Children.toArray(children);
  return (
    <BasicLayout paddingTop={true}>
      <main className="flex flex-col-reverse md:flex-row gap-8 sm:gap-16 justify-between items-center">
        {/* divided in two parts (intro | image) */}
        <div className="">
          <div className="flex flex-col gap-4 sm:gap-8 max-w-screen-sm">
            {/* heading has two parts super heading and main heading */}
            <h1 className="text-slate-950 text-5xl font-bold leading-normal main-heading">
              {childrenArray[0]}
              {childrenArray[1]}
            </h1>
            {/* description of the page */}
            <p className="text-lg text-slate-950 max-w-screen-sm">
              {paragraph}
            </p>
            <div className="flex flex-wrap gap-4 justify-start items-center ">
              {/* link to the other sections */}
              <Link
                href={href}
                className="bg-blue-600 text-white rounded-full text-lg px-5 py-3 inline-block font-semibold tracking-wide"
              >
                {link}
              </Link>
              {/* any possible needed children */}
              {childrenArray[2]}
            </div>
          </div>
        </div>
        {/* simple hero section image */}
        <div className={maxWidth}>
          <Image src={src} alt="hero section image" width={500} height={500} />
        </div>
      </main>
    </BasicLayout>
  );
};

export default Main;

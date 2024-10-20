"use client";
// all import statements
import Image from "next/image";
import React, { useState, useRef, useEffect, useCallback } from "react";

// component - ImageSlider
const ImageSlider = (props: { images: string[]; autoScroll: boolean }) => {
  // get image links
  const { images, autoScroll } = props;

  // react hooks
  const ref = useRef<HTMLDivElement>(null);
  const [scrollIndex, setScrollIndex] = useState<number>(1);

  // function to change image or automatic move effect
  // useCallback ensures that moveImage does not get recreated on every render, preventing unnecessary re-renders and re-runs of useEffect and if scrollIndex or Images.length changes then rerender the moveImage function
  const moveImage = useCallback(
    (obj: { moveSide: boolean | null; index: number | null }) => {
      // get current from reference
      const { current } = ref;
      // if its not available then simply return
      if (!current) return;

      // get offsetWidth from current, other props values and local state reference
      const { offsetWidth } = current;
      const { moveSide, index } = obj;
      let currentIndex: number = scrollIndex;

      if (moveSide) {
        // move forward
        currentIndex =
          currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      } else if (moveSide === false) {
        // move backward
        currentIndex =
          currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      } else if (typeof index === "number") {
        // move to a specific index
        currentIndex = index;
      }

      // scroll options
      const scroll: ScrollToOptions = {
        top: 0,
        left: offsetWidth * currentIndex,
        behavior: "smooth",
      };
      // scroll images
      current.scroll(scroll);
      // set new state
      setScrollIndex(currentIndex);
    },
    [images.length, scrollIndex]
  );

  useEffect(() => {
    // did component mount function to run a set interval if the autoScroll is true
    if (autoScroll) {
      // move images forward after every 3 seconds
      const intervalId = setInterval(() => {
        moveImage({ moveSide: true, index: null });
      }, 3000);

      // when the state changes and componenet render destroy previous set interval to avoid glitches
      return () => clearInterval(intervalId);
    }
  }, [scrollIndex, autoScroll, moveImage]);

  const className: string =
    "py-3 px-2 bg-white text-gray-700 absolute top-1/2 -translate-y-1/2 z-10 text-xl shadow-xl border-solid border-gray-300 border";
  return (
    <div className="relative">
      {/* the div that will hold all the images */}
      <div
        className="flex overflow-auto snap-x snap-mandatory scroll-bar-hidden touch-none rounded "
        ref={ref}
      >
        {/* generate images */}
        {images.map((link: string, index: number) => {
          return (
            <Image
              src={link}
              key={index}
              alt="banner images"
              width={1440}
              height={1440}
              className="w-screen h-auto snap-center flex-none aspect-auto mix-blend-multiply"
            />
          );
        })}
      </div>

      {/* small dots that represent current index */}
      <ul className="list-none flex gap-4 absolute bottom-2 left-1/2 -translate-x-1/2">
        {images.map((val, index) => {
          return (
            <li
              className={`w-3 aspect-square bg-black border-2 border-white border-solid rounded-full cursor-pointer transition duration-500 ease-in-out
                 ${scrollIndex === index ? "bg-white" : "bg-black"}`}
              key={index}
              onClick={() => moveImage({ moveSide: null, index })}
            ></li>
          );
        })}
      </ul>

      {/* buttons to move images forward/backward */}
      <button
        className={`${className} left-0 rounded-r-md border-l-0`}
        onClick={() => moveImage({ moveSide: false, index: null })}
      >
        {"<"}
      </button>
      <button
        className={`${className} right-0 rounded-l-md border-r-0 border `}
        onClick={() => moveImage({ moveSide: true, index: null })}
      >
        {">"}
      </button>
    </div>
  );
};

export default ImageSlider;

"use client";
import { ColorImages } from "@/lib/interfaces/Product";
import Image from "next/image";
import React, { useState } from "react";

interface CurrentUrl {
  url: string;
  index: number;
  color: string;
}

const ColorDot = (props: {
  colorCode: string;
  color: string;
  setUrls: React.Dispatch<React.SetStateAction<string[]>>;
  colorImages: ColorImages[];
  setCurrUrl: React.Dispatch<React.SetStateAction<CurrentUrl>>;
}) => {
  const { colorCode, color, setUrls, colorImages, setCurrUrl } = props;
  const shortendColorName =
    color.length >= 7 ? color.slice(0, 7).trim() + "..." : color;
  const changeColorOfProduct = () => {
    const currentColor = colorImages.find(
      (value: ColorImages) => value.color === color
    );
    if (currentColor) {
      setUrls(currentColor.url);
      setCurrUrl((currentState: CurrentUrl) => ({
        ...currentState,
        url: currentColor.url[currentState.index],
        color,
      }));
    } else {
      alert("Error: Cannot change color Of the Product.");
    }
  };
  return (
    <div
      className="flex flex-col gap-2 justify-center items-center border border-solid border-gray-200 rounded px-2 py-2 w-24   hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer hover:scale-105"
      onClick={changeColorOfProduct}
    >
      <button
        className={`aspect-square w-6 rounded-full shadow-md shadow-neutral-400`}
        // border border-solid border-gray-300
        style={{ backgroundColor: colorCode }}
        title={color}
      ></button>
      <span className="leading-none uppercase font-semibold">
        {shortendColorName}
      </span>
    </div>
  );
};

const ProductImageSlider = (props: {
  colorImages: ColorImages[];
  currUrl: CurrentUrl;
  setCurrUrl: React.Dispatch<React.SetStateAction<CurrentUrl>>;
  setUrls: React.Dispatch<React.SetStateAction<string[]>>;
  urls: string[];
}) => {
  const { colorImages, currUrl, setCurrUrl, urls, setUrls } = props;
  const colorCode = [];
  for (let index = 0; index < colorImages.length; index++) {
    const element = colorImages[index];
    colorCode.push({ colorCode: element.colorCode, color: element.color });
  }

  if (!currUrl || !urls) return null;

  return (
    <div className="">
      <div className="flex">
        <div className="flex flex-col border border-solid border-gray-200 border-b-0 border-r-0 w-max h-max min-w-16">
          {urls.map((value: string, index: number) => {
            return (
              <div
                key={index}
                className={` p-2 justify-center items-center flex border-solid cursor-pointer h-16 w-full ${
                  currUrl?.url === value
                    ? "border-blue-600 border-2"
                    : "border-gray-200 border-b"
                }`}
                onClick={() =>
                  setCurrUrl((prev) => ({
                    ...prev,
                    url: value,
                  }))
                }
              >
                <Image
                  src={value}
                  key={index}
                  alt="item image"
                  className="object-contain max-h-full max-w-full w-auto h-auto"
                  width={50}
                  height={50}
                />
              </div>
            );
          })}
        </div>
        <div className="px-4 py-4 flex justify-center items-center border border-solid border-gray-200 h-96 w-full min-w-72">
          <Image
            src={currUrl?.url || ""}
            alt="selected Image"
            className="object-contain max-h-full max-w-full w-auto h-auto"
            width={300}
            height={300}
          />
        </div>
      </div>

      <div className="flex gap-4 mt-4 justify-end">
        {colorCode.map((value, index: number) => {
          return (
            <ColorDot
              colorCode={value.colorCode}
              key={value.colorCode}
              color={value.color}
              setUrls={setUrls}
              colorImages={colorImages}
              setCurrUrl={setCurrUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductImageSlider;

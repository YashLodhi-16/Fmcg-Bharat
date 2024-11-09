"use client";
import React, { useEffect, useState } from "react";
import BasicLayout from "./BasicLayout";

const OthersMain = (props: { heading: string }) => {
  const { heading } = props;
  const [text, setText] = useState<string>("");
  const [direction, setDirection] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setText((value) => {
        if (direction) {
          if (value.length === heading.length) {
            setDirection(false); // Switch to backward
            return value.slice(0, -1);
          }
          return value + heading[value.length];
        } else {
          if (value.length === 1) {
            setDirection(true); // Switch to forward
            return value;
            // return value + heading[0];
          }
          return value.slice(0, -1); // Remove last character
        }
      });
    }, 200);
    return () => clearInterval(interval);
  }, [direction, heading]);
  return (
    <BasicLayout paddingTop={true}>
      <main className="text-center">
        <h1 className="text-5xl sm:text-7xl font-bold uppercase bg-gradient-to-tr from-[#02AABD] to-[#00CDAC] bg-clip-text text-transparent break-keep">
          {text}
        </h1>
      </main>
    </BasicLayout>
  );
};

export default OthersMain;

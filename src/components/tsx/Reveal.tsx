"use client";
import React, { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";

const Reveal = (props: { children: React.ReactNode }) => {
  const { children } = props;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  // const slideControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      // slideControls.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: {
          opacity: 0,
          scale: 0.5,
        },
        visible: {
          opacity: 1,
          scale: 1,
        },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;

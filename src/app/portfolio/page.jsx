"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Page = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll(ref);

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh]" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl">
          My Work
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center"></div>
      </div>
    </motion.div>
  );
};

export default Page;

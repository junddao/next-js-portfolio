"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain"></Image>
        </div>
        {/* TEXT Container */}
        <div className="h-1/2 flex flex-col items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to my portfolio
          </h1>
          <div className="h-5"></div>
          {/* DESCRIPTION */}
          <p className="md:text-xl">
            I am a flutter developer with a passion for building beautiful
            websites and applications.
          </p>
          <div className="h-5"></div>

          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="bg-black text-white rounded-lg ring-black ring-1 p-4">
              Contact
            </button>
            <button className=" text-black rounded-lg ring-black ring-1  p-4">
              Portfolio
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;

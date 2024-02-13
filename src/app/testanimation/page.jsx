"use client";

import { motion } from "framer-motion";

const TestPage = () => {
  const variant = {
    variant1: {
      x: 400,
      y: 300,
      opacity: 0.5,
      transition: {
        duration: 2,
        delay: 1,
      },
    },
    variant2: {
      x: 100,
      y: -300,
      rotation: 90,
    },
  };
  return (
    <div className="h-full flex items-center justify-center">
      <motion.div
        className="w-96 h-96 bg-red-400 rounded"
        initial={{ x: -100 }}
        variants={variant}
        animate="variant1"
        transition={{ duration: 2, delay: 1 }}
      ></motion.div>
    </div>
  );
};

export default TestPage;

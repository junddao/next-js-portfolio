"use client";

import { motion } from "framer-motion";

const Page = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div>contact</div>
    </motion.div>
  );
};

export default Page;

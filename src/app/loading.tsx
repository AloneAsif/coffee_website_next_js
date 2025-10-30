"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 text-white">
      <motion.h1
        className="text-3xl font-bold"
        animate={{
          opacity: [0, 1, 0],
          y: [10, 0, -10],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        Brewing your coffee...
      </motion.h1>
    </div>
  );
}

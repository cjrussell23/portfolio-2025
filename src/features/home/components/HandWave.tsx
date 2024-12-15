"use client";
import { motion } from "framer-motion";

export default function HandWave() {
  return (
    <motion.span
      style={{ transformOrigin: "bottom right" }}
      animate={{ rotate: [0, 10, -10, 10, -10, 0] }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
      }}
      whileHover={{ rotate: [0, 10, -10, 10, -10, 0] }}
    >
      👋
    </motion.span>
  );
}

"use client";

import { useUIStore } from "@/store/useDrawerStore";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const OverlayProvider = ({ children }: Props) => {
  const { isBackdropVisible } = useUIStore();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={isBackdropVisible ? "blurred" : "clear"} // Important for AnimatePresence
        initial={{ filter: "blur(0px)" }}
        animate={{ filter: isBackdropVisible ? "blur(20px)" : "blur(0px)" }}
        exit={{ filter: "blur(0px)" }} // Animate blur back to 0 when unmounting
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: isBackdropVisible ? 0.2 : 0, // Optional: delay exit
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavListSectionProps {
  title: string;
  items: any[];
  isVisible: boolean;
  bottomAlignment?: boolean;
}

// Variants for animation
const containerVariants = {
  hidden: { 
    opacity: 0, 
    visibility: "hidden" as const,
    transition: { 
      when: "afterChildren", 
      duration: 0.4,
      ease: "easeInOut" 
    },
  },
  visible: {
    opacity: 1,
    visibility: "visible" as const,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      delayChildren: 0.2,
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  exit: { 
    opacity: 0, 
    visibility: "hidden" as const,
    transition: { 
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    x: -10, 
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  exit: { 
    opacity: 0, 
    x: -10,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};


const NavListSection: React.FC<NavListSectionProps> = ({
  title,
  items,
  isVisible,
  bottomAlignment = false,
}) => {
  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
          className={`absolute z-20 left-0 top-0 bottom-0 h-full w-full px-6 pt-28 pb-24 ${
            bottomAlignment ? "flex items-end justify-start pb-20" : ""
          }`}
        >
          <motion.ul className="header-nav-list" variants={containerVariants}>
            <motion.li
              className="md:hidden z-10 mb-6 font-bold pointer-events-none"
              variants={itemVariants}
            >
              <h3>{title}</h3>
            </motion.li>

            {items.map(({ label, href }, index) => (
              <motion.li
                key={index}
                className="font-bold z-20 text-2xl leading-tight pointer-events-none"
                variants={itemVariants}
              >
                <a href={href} aria-disabled="false">
                  {label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavListSection;

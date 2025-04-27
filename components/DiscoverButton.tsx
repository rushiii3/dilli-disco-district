"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';

interface DiscoverButtonProps {
  href: string;
  label: string;
  position: {
    left: string;
    top: string;
  };
}

const DiscoverButton = ({ href, label, position }: DiscoverButtonProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.a
      className="block z-20 w-[11px] h-[11px]"
      href={href}
      data-discover="true"
      style={{
        position: "absolute",
        left: position.left,
        top: position.top,
      }}
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* Main Dot */}
      {!isHovering && (
        <>
          <motion.div
            className="absolute w-[11px] h-[11px] bg-white rounded-full shadow-[0_0_10px_5px_#00000040]"
            animate={{
              scale: [1, 1.1, 1], // Tiny breathing
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Outer Pulse */}
          <motion.div
            className="absolute bg-white/20 rounded-full border border-white pointer-events-none"
            style={{
              top: "-20px",
              left: "-20px",
              right: "-20px",
              bottom: "-20px",
            }}
            animate={{
              scale: [1, 2],
              opacity: [0.1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeOut",
            }}
          />
        </>
      )}

      {/* Popover */}
      <motion.div
        className="absolute top-full bg-white font-bold text-base py-2 px-4 rounded-full left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          whiteSpace: "nowrap",
          lineHeight: "1",
          boxShadow: "rgba(0, 0, 0, 0.25) 0px 0px 10px",
          transform: "translateX(-50%) translateY(12px)",
        }}
        variants={{
          rest: { opacity: 0, y: 12 },
          hover: { opacity: 1, y: 0 },
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <span className="absolute -top-1 left-1/2 -translate-x-1/2 z-10 rotate-45 w-2 h-2 bg-white rounded-[2px_0_0] shadow-[0_0_10px_#0000001a]" />
        {label}
      </motion.div>
    </motion.a>
  );
};

export default DiscoverButton;

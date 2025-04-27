"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const LoungeEnterButton = () => {
  return (
    <>
      <Link
        className="absolute z-20 before:block before:h-14 before:w-14 before:absolute before:-top-4 md:before:hidden before:-left-4"
        href="/rooms/lounge"
        aria-disabled="false"
        data-discover="true"
        style={{
          left: "14.9161%",
          top: "17.2387%",
        }}
      >
        <motion.span
          className="border h-6 w-6 overflow-hidden transition-all duration-500 flex items-center justify-between ease-in-out font-bold"
          style={{
            borderRadius: "12.5px",
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 10px 0px",
            textShadow: "rgba(0, 0, 0, 0.3) 0px 0px 10px",
            width: "24px",
            position: "absolute",
            borderColor: "white",
            color: "white",
          }}
          whileHover={{ width: "8.5rem", transition: { duration: 0.3 } }} // Expand size on hover
        >
          <span
            className="block absolute"
            style={{
              top: "6px",
              left: "5px",
              right: "auto",
            }}
          >
            <svg
              width="13"
              height="11"
              viewBox="0 0 13 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="white"
              className="-scale-x-100"
            >
              <line
                x1="11.7052"
                y1="4.77742"
                x2="6.8748"
                y2="9.60777"
                strokeWidth="2"
              ></line>
              <path d="M10.2912 4.77745L6.89487 1.38135" strokeWidth="2"></path>
              <line
                x1="10.5151"
                y1="5.45581"
                x2="0.998047"
                y2="5.45581"
                strokeWidth="2"
              ></line>
            </svg>
          </span>
          <motion.span
            className="opacity-0 transition-opacity duration-500 ease-in-out block antialiased"
            style={{
              whiteSpace: "nowrap",
              position: "absolute",
              top: "0px",
              lineHeight: "1",
              opacity: "0",
              padding: "3px 15px 3px 22px",
            }}
            whileHover={{ opacity: 1, transition: { duration: 0.3 } }} // Fade in text on hover
          >
            Enter Lounge
          </motion.span>
        </motion.span>
      </Link>
      <Link
        className="absolute before:block before:h-14 before:w-14 before:absolute before:-top-4 md:before:hidden z-20 before:-right-4"
        href="/rooms/closet"
        aria-disabled="false"
        data-discover="true"
        style={{
          left: "53.7979%",
          top: "15.1988%",
        }}
      >
        <motion.span
          className="border h-6 w-6 overflow-hidden transition-all duration-500 flex items-center justify-between ease-in-out font-bold"
          style={{
            borderRadius: "12.5px",
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 10px 0px",
            textShadow: "rgba(0, 0, 0, 0.3) 0px 0px 10px",
            width: "24px",
            position: "absolute",
            right: "0px",
            left: "auto",
            borderColor: "white",
            color: "white",
          }}
          whileHover={{ width: "8.2rem", transition: { duration: 0.3 } }} // Expand size on hover

        >
          <span
            className="block absolute"
            style={{
              top: "6px",
              left: "auto",
              right: "5px",
            }}
          >
            <svg
              width="13"
              height="11"
              viewBox="0 0 13 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="white"
              className="rotate-0"
            >
              <line
                x1="11.7052"
                y1="4.77742"
                x2="6.8748"
                y2="9.60777"
                strokeWidth="2"
              ></line>
              <path d="M10.2912 4.77745L6.89487 1.38135" strokeWidth="2"></path>
              <line
                x1="10.5151"
                y1="5.45581"
                x2="0.998047"
                y2="5.45581"
                strokeWidth="2"
              ></line>
            </svg>
          </span>
          <motion.span
            className="opacity-0 transition-opacity duration-500 ease-in-out block antialiased"
            style={{
              whiteSpace: "nowrap",
              position: "absolute",
              top: "0px",
              lineHeight: "1",
              opacity: "0",
              padding: "3px 22px 3px 15px",
              right: "0px",
              left: "auto",
            }}
            whileHover={{ opacity: 1, transition: { duration: 0.3 } }} // Fade in text on hover

          >
            Enter Closet
          </motion.span>
        </motion.span>
      </Link>
    </>
  );
};

export default LoungeEnterButton;

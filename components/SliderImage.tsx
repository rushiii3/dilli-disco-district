/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
const SliderImage = ({ images }: any) => {
    console.log(images);
    
  return (
    <Splide
      options={{
        rewind: true,
        gap: "1rem",
        arrows: false,
        width: "100%",
        height: "100%",
        padding: "0rem",
      }}
      style={{ padding: "0rem" }}
      aria-label="My Favorite Images"
    >
      {images.map((image: { src: string | StaticImport; }, index: any) => (
        <SplideSlide key={index} style={{ height: "100%", width: "100%" }}>
            <Image
                  src={image.src}
                  alt="Character Animation"
                  width={800}
                  height={1000}
                  className="w-full h-auto object-cover"
                  priority
                />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default SliderImage;

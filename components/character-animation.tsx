"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const CharacterAnimation = () => {
  const [index, setIndex] = useState(8);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setIndex(prev => (prev === 1 ? 8 : prev - 1)); // Change image
      }, 200); // Slight delay before changing image
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`transition-opacity duration-300 ease-in-out`}>
      <Image
        src={`/d1/${index}.png`}
        alt="Character Animation"
        width={800}
        height={1000}
        className="w-full h-auto object-cover"
        priority
      />
    </div>
  );
};

export default CharacterAnimation;

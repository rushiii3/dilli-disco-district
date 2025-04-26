"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

interface ImageType {
  src: string;
}

interface CharacterAnimationProps {
  images: ImageType[];
}

const CharacterAnimation = ({ images }: CharacterAnimationProps) => {
  const [index, setIndex] = useState(images.length - 1); // Start with the last image

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev === 0 ? images.length - 1 : prev - 1)); // Change image in reverse
    }, 1000); // Update every 1 second

    return () => clearInterval(interval);
  }, [images.length]);


  return (
    <div className={`transition-opacity duration-300 ease-in-out`}>
     <Image
      src={`${images[index].src}`}
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

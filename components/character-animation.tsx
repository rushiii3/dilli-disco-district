"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// ✅ Better naming and typing
interface CharacterImage {
  url: string;
  alt?: string;
}

interface CharacterAnimationProps {
  images: CharacterImage[];
  interval?: number; // ⏱ allow custom interval (optional)
}

const CharacterAnimation = ({
  images,
  interval = 1000, // Default: 1s
}: CharacterAnimationProps) => {
  const [index, setIndex] = useState(images.length - 1);

  useEffect(() => {
    if (!images.length) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  if (!images.length) return null; // ✅ Avoid rendering when empty

  const { url, alt } = images[index];

  return (
    <div className="transition-opacity duration-300 ease-in-out w-full h-auto">
      {url && (
        <Image
          src={url}
          alt={alt || "Character Frame"}
          width={800}
          height={1000}
          className="w-full h-auto object-cover"
          priority
        />
      )}
    </div>
  );
};

export default CharacterAnimation;

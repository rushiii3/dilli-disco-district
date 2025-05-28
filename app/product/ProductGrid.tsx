/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import TRexGame from "@/components/dino";
import { motion } from "framer-motion";
import SnakeGame from "@/components/snake-game";
const FirstComponent = () => {
  return (
    <>
      <div className="absolute -left-10 top-0 -rotate-90">
        <Image
          priority
          src={"/gifs/gif1.gif"}
          alt="Loading animation"
          width={300}
          height={300}
        />
      </div>
      <div className="absolute -left-10 bottom-0 -rotate-180">
        <Image
          priority
          src={"/gifs/gif1.gif"}
          alt="Loading animation"
          width={400}
          height={400}
        />
      </div>
      <div className="absolute -right-10 top-0 rotate-0">
        <Image
          priority
          src={"/gifs/gif1.gif"}
          alt="Loading animation"
          width={300}
          height={300}
        />
      </div>
      <div className="absolute -right-10 bottom-0 -rotate-270">
        <Image
          priority
          src={"/gifs/gif1.gif"}
          alt="Loading animation"
          width={400}
          height={400}
        />
      </div>
    </>
  );
};

const SecondComponent = () => {
  // Create a random vertical keyframe pattern for the bobbing effect
  const getRandomYKeyframes = () => {
    const frames = [];
    for (let i = 0; i < 10; i++) {
      frames.push(Math.random() * 100 - 10); // Random value between -10 and +10
    }
    return frames;
  };

  const yKeyframes = getRandomYKeyframes();

  return (
    <>
      <motion.div
        initial={{ x: "100vw" }}
        animate={{
          x: "-100vw",
          y: yKeyframes,
        }}
        transition={{
          x: {
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          },
          y: {
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          },
        }}
        className="absolute top-1/2 -translate-y-1/2"
      >
        <Image
          src="/pngss/7.png"
          alt="Swimming fish"
          width={300}
          height={300}
        />
      </motion.div>
      <motion.div
        initial={{ x: "100vw" }}
        animate={{
          x: "-100vw",
          y: yKeyframes,
        }}
        transition={{
          x: {
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          },
          y: {
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          },
        }}
        className="absolute top-48 -translate-y-3/5"
      >
        <Image
          src="/pngss/7.png"
          alt="Swimming fish"
          width={300}
          height={300}
        />
      </motion.div>
    </>
  );
};
interface Product {
  slug: string;
  images: { src: string }[];
  // Add other product fields if needed
}

interface ProductGridProps {
  data: {
    data: Product[];
    // Add other data fields if needed
  };
}

export default function ProductGrid({ data }: ProductGridProps) {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [activeComponent, setActiveComponent] = useState<
    "first" | "trexgame" | "second" | "snakegame" | null
  >(null);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const router = useRouter();

  const handleProductClick = (slug: string) => {
    setSelectedSlug(slug);
    setIsOverlayVisible(true);
    // Pick one randomly: first, game, or second
    const components = ["first", "trexgame", "second", "snakegame"] as const;
    const randomIndex = Math.floor(Math.random() * components.length);
    const choice = components[randomIndex];

    setActiveComponent(choice);

    if (choice === "first") {
      setTimeout(() => {
        router.push(`/product/${slug}`);
        setActiveComponent(null);
      }, 3000);
    } else if (choice === "second") {
      setTimeout(() => {
        router.push(`/product/${slug}`);
        setActiveComponent(null);
      }, 3000);
    }
    // If game, redirect happens when onGameEnd is called
  };

  const handleGameEnd = (score: number) => {
    if (activeComponent === "trexgame") {
      if (score >= 2000 && selectedSlug) {
        router.push(`/product/${selectedSlug}`);
        setActiveComponent(null);
      }
    }
    if (activeComponent === "snakegame") {
      if (score >= 200 && selectedSlug) {
        router.push(`/product/${selectedSlug}`);
        setActiveComponent(null);
      }
    }
  };

  return (
    <div className="relative">
      {/* Product Grid */}
      <div className="relative grid grid-cols-2 gap-5 p-4 md:grid-cols-4 md:gap-2 md:p-8 py-16 mx-auto w-full">
        {data.data.map((product: any) => (
          <div
            key={product.slug}
            className="group cursor-pointer"
            onClick={() => handleProductClick(product.slug)}
          >
            <div className="relative aspect-[1/2] md:aspect-[2/3] xl:aspect-[1/2] w-full overflow-hidden">
              <Image
                src={product.images[0].src}
                alt={`Product ${product.slug}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        ))}
      </div>

      {/* GIF Overlay */}
      {/* Overlay with either FirstComponent or Game */}
      {isOverlayVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {activeComponent === "first" && <FirstComponent />}
          {activeComponent === "trexgame" && (
            <TRexGame onGameEnd={handleGameEnd} />
          )}
          {activeComponent === "second" && <SecondComponent />}
          {activeComponent === "snakegame" && (
            <SnakeGame onGameEnd={handleGameEnd} />
          )}
        </div>
      )}
    </div>
  );
}

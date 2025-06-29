/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useRouter } from 'nextjs-toploader/app';
import { Key, useState } from "react";
import Image from "next/image";
import TRexGame from "@/components/dino";
// import SnakeGame from "@/components/snake-game";
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

interface ProductGridPropsTyped {
  products: {
    handle: Key | null | undefined;
    featuredImage: {
      url: string;
      altText?: string;
      width: number;
      height: number;
    };
  }[];
}

export default function ProductGrid({ products }: ProductGridPropsTyped) {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [activeComponent, setActiveComponent] = useState<
    "first" | "trexgame"  | null
  >(null);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const router = useRouter();

  const handleProductClick = (slug: string) => {
    setSelectedSlug(slug);
    setIsOverlayVisible(true);
    // Pick one randomly: first, game, or second
    const components = ["first", "trexgame"] as const;
    const randomIndex = Math.floor(Math.random() * components.length);
    const choice = components[randomIndex];

    setActiveComponent(choice);

    if (choice === "first") {
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
    // if (activeComponent === "snakegame") {
    //   if (score >= 200 && selectedSlug) {
    //     router.push(`/product/${selectedSlug}`);
    //     setActiveComponent(null);
    //   }
    // }
  };

  return (
    <div className="relative">
      {/* Product Grid */}
      <div className="relative grid grid-cols-2 gap-5 p-4 md:grid-cols-4 md:gap-2 md:p-8 py-16 mx-auto w-full">
        {products.map((product) => {
          const productImage = product.featuredImage;
          return (
            <div
              key={product?.handle}
              onClick={() => handleProductClick(`${product?.handle}`)}
              className="group"
            >
              <div className="relative  w-full overflow-hidden">
                {productImage?.url && (
                  <Image
                    src={productImage.url}
                    alt={productImage.altText || `Product ${product.handle}`}
                    width={productImage.width}
                    height={productImage.height}
                    sizes="(max-width: 768px) 200vw, (min-width: 769px) 50vw"
                    className="object-cover aspect-[1/2] md:aspect-[2/3] xl:aspect-[1/2]"
                    // fill
                  />
                )}
              </div>
            </div>
          );
        })}
        {/* {data.data.map((product: any) => (
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
                // placeholder="blur"
              />
            </div>
          </div>
        ))} */}
      </div>

      {/* GIF Overlay */}
      {/* Overlay with either FirstComponent or Game */}
      {isOverlayVisible && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center  ${
            activeComponent !== "first" && "backdrop-blur-md"
          }`}
        >
          {activeComponent === "first" && <FirstComponent />}
          {activeComponent === "trexgame" && (
            <TRexGame onGameEnd={handleGameEnd} />
          )}
          {/* {activeComponent === "snakegame" && (
            <SnakeGame onGameEnd={handleGameEnd} />
          )} */}
        </div>
      )}
    </div>
  );
}

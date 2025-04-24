import CharacterAnimation from "@/components/character-animation";
import ProductDetails from "@/components/product-details";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className=" px-6 gap-12 max-w-7xl mx-auto py-16">
      <div className="flex flex-col lg:flex-row gap-12 min-h-screen p-8">
        {/* Left side with tall content */}
        <div className="lg:w-3/5 flex flex-col gap-4">
          <div className="overflow-hidden rounded-sm hover-scale">
            <CharacterAnimation />
          </div>
          <div className=" grid-cols-2 gap-4 hidden md:grid">
            <div className="overflow-hidden rounded-sm hover-scale">
              <Image
                src="/d1/1.png"
                alt="Raglan Bomber Rutile Detail"
                width={400}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-sm hover-scale">
              <Image
                src="/d1/2.png"
                alt="Raglan Bomber Rutile Back View"
                width={400}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div className="lg:w-2/5 sticky top-16 h-fit  p-4">
        <div className="flex flex-col gap-4">
        <div className="space-y-3">
            <h1 className="text-sm uppercase tracking-widest font-medium">
              RAG
            </h1>
            <div className="space-y-1">
              <p className="text-sm line-through text-[#33333380]">
                800.00 USD
              </p>
              <p className="text-base font-medium">480.00 USD</p>
            </div>
          </div>

          {/* Color options */}
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-wider text-[#33333399]">
              Color
            </p>
            <div className="flex gap-4">
              <button className="group" aria-label="Select Black Color">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center color-dot`}
                >
                  <div className="w-14 h-14 bg-black rounded-full shadow-sm group-hover:shadow-md transition-shadow"></div>
                </div>
              </button>
              <button className="group" aria-label="Select Beige Color">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center color-dot `}
                >
                  <div className="w-14 h-14 bg-[#e8e3d9] rounded-full shadow-sm group-hover:shadow-md transition-shadow"></div>
                </div>
              </button>
            </div>
          </div>

          {/* Size selection */}
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-wider text-[#33333399]">
              Size
            </p>
            <div className="flex flex-wrap gap-2">
              {["XXS", "XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  className={`w-12 h-12 rounded-full border border-[#33333330] flex items-center justify-center text-xs size-btn `}
                  aria-label={`Select Size ${size}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to cart button */}
          <button
            className={`w-full py-3.5 px-5 border border-[#33333330] rounded-full text-sm flex items-center justify-between add-to-bag`}
          >
            {/* <span>{selectedSize ? `add to bag - size ${selectedSize}` : "select your size"}</span>
        <span>{selectedSize ? "+" : ""}</span> */}
          </button>

          {/* Product details expandable sections */}
          <ProductDetails />
        </div>
          

        </div>
      </div>
      <div className="pt-6">
        <button className="text-sm font-medium flex items-center gap-1 hover:opacity-70 transition-opacity">
          <span>you might also like</span>
          <span>+</span>
        </button>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="space-y-3 group cursor-pointer">
            <div className="aspect-[3/4] rounded-sm overflow-hidden hover-scale">
              <Image
                src="/9.png"
                alt="Related Product"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium group-hover:underline">
                Oversized Tee
              </p>
              <p className="text-sm text-[#33333399]">220.00 USD</p>
            </div>
          </div>
          <div className="space-y-3 group cursor-pointer">
            <div className="aspect-[3/4]  rounded-sm overflow-hidden hover-scale">
              <Image
                src="/1.png"
                alt="Related Product"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium group-hover:underline">
                Cargo Pants
              </p>
              <p className="text-sm text-[#33333399]">340.00 USD</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;

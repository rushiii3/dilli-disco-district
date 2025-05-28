import Image from "next/image";
import Link from "next/link";
import React from "react";
import data from "../../products.json";
import ProductGrid from "./ProductGrid";
const page = () => {
  return (
    <>
      {/* <div className="grid grid-cols-2 gap-5 p-4 md:grid-cols-4 md:gap-2 md:p-8 py-16 mx-auto w-full">
        {data.data.map((product) => (
          <Link
            key={product.slug}
            href={`/product/${product.slug}`}
            className="group"
          >
            <div className="relative aspect-[1/2] md:aspect-[2/3] xl:aspect-[1/2] w-full overflow-hidden">
              <Image
                src={`${product.images[0].src}`}
                alt={`Product ${product.slug}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </Link>
        ))}
      </div> */}
      <ProductGrid data={data} />
      <div className="flex-1 flex items-center justify-center w-full overflow-hidden">
        {/* relative w-full aspect-[3/4] */}
        <Link href={"/"} className="h-[62vw] w-full relative">
          <video
            height="452"
            width="768"
            controls={false}
            autoPlay={true}
            loop={true}
            className="w-full h-full object-cover"
            muted
          >
            <source src="/DDD.mp4" />
            Your browser does not support the video tag...
          </video>
        </Link>
      </div>

      <div className=" w-full overflow-hidden relative">
        <div className="w-full flex items-center relative bg-white">
          <div className="w-[50%] h-[50vw]  relative">
            <Link href="/" className="relative w-full h-full block">
              <Image
                src="/DDD3.jpeg"
                alt="Model wearing black outfit from Drop 10 collection"
                fill
                sizes="100vw"
                className="object-cover object-center"
                priority
              />
            </Link>
          </div>

          <div className="w-[50%]">
            <Link href={"/"} className="h-[50vw] w-full relative">
              <video
                height="452"
                width="768"
                controls={false}
                autoPlay={true}
                loop={true}
                className="w-full h-full object-cover"
                muted
              >
                <source src="/DDD1.mp4" />
                Your browser does not support the video tag...
              </video>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 p-4 md:grid-cols-4 md:gap-2 md:p-8 py-16 mx-auto w-full">
        {data.data.map((product) => (
          <Link
            key={product.slug}
            href={`/product/${product.slug}`}
            className="group"
          >
            <div className="relative aspect-[1/2] md:aspect-[2/3] xl:aspect-[1/2] w-full overflow-hidden">
              <Image
                src={`${product.images[0].src}`}
                alt={`Product ${product.slug}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default page;

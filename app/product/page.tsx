import Image from "next/image";
import Link from "next/link";
import React from "react";
import data from "../../products.json";
const page = () => {
  return (
    <div className="grid grid-cols-2 gap-5 p-4 md:grid-cols-3 md:gap-2 md:p-8 py-16 mx-auto max-w-7xl">
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
  );
};

export default page;

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface SearchProductProps {
  title: string;
  amount: number | string;
  currencyCode: string;
  image: string;
  handle: string;
  sizes: string;
}

const SearchProduct: React.FC<SearchProductProps> = ({ title, amount, currencyCode, image, handle, sizes }) => {
  return (
    <Link href={`/product/${handle}`} className="flex flex-row lg:items-center items-start space-x-5">
      <div className="w-24 h-32  md:w-32 md:h-40  relative  rounded flex-shrink-0">
        <Image
          src={image}
          alt={`Product image of ${title}`}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div className="flex-1 flex items-start justify-between">
        <div className="mb-4 md:mb-0">
          <h3 className="text-gray-900 uppercase text-base md:text-lg mb-2">
            {title}
          </h3>
          <p className="text-gray-600 text-sm">{sizes}</p>
        </div>

        <div className="text-gray-900 text-base md:text-lg">
          {amount} {currencyCode}
        </div>
      </div>
    </Link>
  );
};

export default SearchProduct;

"use client";
import ProductDetails from "@/components/product-details";
import React, { useState, useEffect } from "react";

const ProductInfo = ({ product }) => {
  console.log("ProductInfo component rendered with product:", product);

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedVariant, setSelectedVariant] = useState(null);

  useEffect(() => {
    if (!selectedSize) {
      setSelectedVariant(null);
      return;
    }

    const match = product.variants.find((variant) =>
      variant.selectedOptions.some(
        (opt) => opt.name === "Size" && opt.value === selectedSize
      )
    );
    setSelectedVariant(match || null);
  }, [selectedSize, product.variants]);

  const handleAddToCart = () => {
    if (selectedVariant && selectedVariant.availableForSale) {
    }
  };
  const lowestPricedVariant = product.variants.reduce((min, current) =>
    parseFloat(current.price.amount) < parseFloat(min.price.amount)
      ? current
      : min
  );
  console.log("Lowest priced variant:", lowestPricedVariant);

  return (
    <div className="flex flex-col gap-4 mt-10">
      <div className="space-y-3">
        <h1 className="text-xl uppercase tracking-widest font-medium">
          {product.title}
        </h1>
        <div className="space-y-1">
          <p className="text-lg">
            {selectedVariant?.compareAtPrice ||
            lowestPricedVariant.compareAtPrice ? (
              <span className="line-through text-gray-500">
                {selectedVariant?.compareAtPrice?.amount ||
                  lowestPricedVariant.compareAtPrice.amount}{" "}
                {lowestPricedVariant.price.currencyCode}
              </span>
            ) : null}
          </p>
          <p className="text-xl font-medium">
            {selectedVariant?.price.amount || lowestPricedVariant.price.amount}{" "}
            {lowestPricedVariant.price.currencyCode}
          </p>
          <p
            className={`text-sm ${
              selectedVariant
                ? selectedVariant.availableForSale
                  ? "text-green-600"
                  : "text-red-500"
                : lowestPricedVariant.availableForSale
                ? "text-green-600"
                : "text-red-500"
            }`}
          >
            {selectedVariant
              ? selectedVariant.availableForSale
                ? "In Stock"
                : "Out of Stock"
              : lowestPricedVariant.availableForSale
              ? "In Stock"
              : "Out of Stock"}
          </p>
        </div>
        <div className="mb-4">
          <p className=" mb-2">Select Size:</p>
          <div className="flex gap-2 flex-wrap">
            {product.options[0].values.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`size-10 text-xl flex items-center justify-center border rounded-full transition ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : " text-black hover:bg-gray-100 border-black"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        disabled={!selectedVariant || !selectedVariant.availableForSale}
        className={`w-full py-2 px-4 text-white font-semibold rounded-lg ${
          selectedVariant?.availableForSale
            ? "bg-black hover:bg-gray-800"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        {!selectedSize
          ? "Select your size"
          : !selectedVariant?.availableForSale
          ? "Out of Stock"
          : "Add to Cart"}
      </button>

      <ProductDetails details={product.description} />
    </div>
  );
};

export default ProductInfo;

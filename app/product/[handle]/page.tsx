/* eslint-disable @typescript-eslint/no-explicit-any */
import CharacterAnimation from "@/components/character-animation";
// import ProductDetails from "@/components/product-details";
import Image from "next/image";
import React from "react";
import SliderImage from "@/components/SliderImage";
import { notFound } from "next/navigation";
import client from "@/lib/shopify-client";
import { GET_PRODUCT_BY_HANDLE_QUERY } from "@/lib/queries";
import { Metadata } from "next";
export const revalidate = 60; // ⏱ ISR enabled
function transformProductData(raw: any) {
  const product = raw.product;

  return {
    id: product.id,
    title: product.title,
    description: product.description,
    productType: product.productType,
    tags: product.tags,
    seo: {
      title: product.seo?.title ?? null,
      description: product.seo?.description ?? null,
    },
    images: product.images.edges.map(({ node }: any) => node),
    variants: product.variants.edges.map(({ node }: any) => ({
      id: node.id,
      title: node.title,
      sku: node.sku,
      availableForSale: node.availableForSale,
      price: node.price,
      compareAtPrice: node.compareAtPrice,
      selectedOptions: node.selectedOptions,
    })),
    rotatingImages: product.metafield?.references?.edges.map(({ node }: any) => node.image) ?? [],
  };
}

type Props = {
  params: Promise<{ handle: string }>;
  // searchParams: Promise<{ [key: string]: string | string[] | undefined }>
};

export async function generateMetadata(
  { params }: Props,
  // parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { handle } = await params;

  // fetch data
  const { data } = await client.request(GET_PRODUCT_BY_HANDLE_QUERY, {
    variables: { handle },
  });

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: data.title,
  };
}
const ProductPage = async ({ params }: Props) => {
  const { handle } = await params;
  const { data } = await client.request(GET_PRODUCT_BY_HANDLE_QUERY, {
    variables: { handle },
  });

  console.log(data);
  
  const product = transformProductData(data);

  // console.log(product);
  
  if (!product) return notFound(); // 404 page

  return (
    <main className=" px-6 gap-12 max-w-7xl mx-auto py-16">
<div className="flex flex-col lg:flex-row gap-12 min-h-screen ">
        {/* Left side with tall content */}
        <div className="lg:w-3/5  flex-col gap-4 md:flex hidden">
          <div className="overflow-hidden rounded-sm hover-scale">
            <CharacterAnimation images={product.rotatingImages} />
          </div>
          <div className=" grid-cols-2 gap-4 hidden md:grid">
            {
              product.images.slice(0, 2).map((image: any, index: number) => (
                <div key={index} className="overflow-hidden rounded-sm">
                  <Image
                    src={image.url}
                    alt={image.altText || `Product Image ${index + 1}`}
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))
            }
          </div>
        </div>
        <div className="w-full h-full md:hidden block">
          <SliderImage images={product.rotatingImages} />
        </div>
        <div className="lg:w-2/5 sticky top-16 h-fit  lg:p-4">
          <div className="flex flex-col gap-4 mt-10">
            <div className="space-y-3">
              <h1 className="text-sm uppercase tracking-widest font-medium">
                {product.title}
              </h1>
              <div className="space-y-1">
                <p className="text-sm line-through text-[#33333380]">
                  09 USD
                </p>
                <p className="text-base font-medium">
                  899 USD
                </p>
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
              className={`w-full  py-1 border border-[#33333330] rounded-full text-center text-xl add-to-bag`}
            >
              Add to Cart
              {/* <span>{selectedSize ? `add to bag - size ${selectedSize}` : "select your size"}</span>
        <span>{selectedSize ? "+" : ""}</span> */}
            </button>
            <button
              className={`w-full  py-1 border border-[#33333330] rounded-full text-center text-xl add-to-bag`}
            >
              Buy Now
              {/* <span>{selectedSize ? `add to bag - size ${selectedSize}` : "select your size"}</span>
        <span>{selectedSize ? "+" : ""}</span> */}
            </button>

            {/* Product details expandable sections */}
            {/* <ProductDetails
              details={product.details}
              sizeChart={product.sizeChart.map((size) => ({
                ...size,
                chest: Number(size.chest),
                length: Number(size.length),
              }))}
            /> */}
          </div>
        </div>
      </div>

      
      <div className="pt-6">
        <button className="text-sm font-medium flex items-center gap-1 hover:opacity-70 transition-opacity">
          <span>you might also like</span>
          <span>+</span>
        </button>

        <div className="overflow-x-auto mt-6 w-full scrollbar-hide">
          <div className="flex gap-4 max-w-7xl ">
            {/* {youMayAlsoLike.map((item) => (
                <Link
                href={`/product/${item.slug}`}
                key={item.slug}
                className="space-y-3 group cursor-pointer flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
              >
                <div className="aspect-[1/2] rounded-sm overflow-hidden hover-scale">
                  <Image
                    src={item.images?.[0]?.src || "/placeholder-image.jpg"} // Fallback to placeholder if images are undefined
                    alt="Related Product"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div>
                  <p className="text-sm font-medium group-hover:underline">
                     {item.title}
                  </p>
                  <p className="text-sm text-[#33333399]">{item.offer_price} USD</p>
                </div>
              </Link>

            ))} */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;

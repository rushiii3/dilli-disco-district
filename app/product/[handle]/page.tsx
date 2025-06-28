/* eslint-disable @typescript-eslint/no-explicit-any */
import CharacterAnimation from "@/components/character-animation";
// import ProductDetails from "@/components/product-details";
import Image from "next/image";
import React from "react";
import SliderImage from "@/components/SliderImage";
import { notFound } from "next/navigation";
import client from "@/lib/shopify-client";
import {
  GET_PRODUCT_BY_HANDLE_QUERY,
  GET_RECOMMENDED_PRODUCTS,
} from "@/lib/queries";
import { Metadata } from "next";
import ProductInfo from "./ProductInfo";
import Link from "next/link";
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
    options: product.options,
    rotatingImages:
      product.metafield?.references?.edges.map(({ node }: any) => node.image) ??
      [],
  };
}

type Props = {
  params: Promise<{ handle: string }>;
};

export async function generateMetadata({
  params,
}: Props): // parent: ResolvingMetadata
Promise<Metadata> {
  // read route params
  const { handle } = await params;

  // fetch data
  const { data } = await client.request(GET_PRODUCT_BY_HANDLE_QUERY, {
    variables: { handle },
  });

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: data.product.title,
  };
}
const ProductPage = async ({ params }: Props) => {
  const { handle } = await params;
  const { data } = await client.request(GET_PRODUCT_BY_HANDLE_QUERY, {
    variables: { handle },
  });

  const { data: recommended } = await client.request(GET_RECOMMENDED_PRODUCTS, {
    variables: { handle: handle },
  });

  if (!data.product) {
    return notFound();
  }

  const product = transformProductData(data);

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
            {product.images.slice(0, 2).map((image: any, index: number) => (
              <div key={index} className="overflow-hidden rounded-sm">
                <Image
                  src={image.url}
                  alt={image.altText || `Product Image ${index + 1}`}
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-full md:hidden block">
          <SliderImage images={product.rotatingImages} />
        </div>
        <div className="lg:w-2/5 sticky top-16 h-fit  lg:p-4">
          <ProductInfo product={product} />
          <button className="text-sm font-medium flex items-center mt-10 gap-1 hover:opacity-70 transition-opacity">
            <span>you might also like</span>
            <span>↓</span>
          </button>
          {/* Color options */}

          {/* Add to cart button */}

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

      {/* Recommended products section */}
      {recommended.productRecommendations.length > 0 && (
        <div className="pt-6">
          <div className="overflow-x-auto mt-6 w-full scrollbar-hide">
            <div className="flex gap-4 max-w-7xl ">
              {/* <ProductGrid
              products={recommended.productRecommendations.map((item: any) => ({
                handle: item.handle,
                featuredImage: {
                  url: item.featuredImage?.url,
                  altText: item.featuredImage?.title || "",
                  width: item.featuredImage?.width || 1000,
                  height: item.featuredImage?.height || 1000,
                },
              }))}
            /> */}

              {recommended.productRecommendations.map(
                (item: {
                  handle: any;
                  title: React.Key | null | undefined;
                  images: {
                    edges: {
                      node: { height: number; width: number; url: string };
                    }[];
                  };
                }) => (
                  <Link
                    href={`/product/${item.handle}`}
                    key={item.title}
                    className="space-y-3 group cursor-pointer flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
                  >
                    <div className="aspect-[1/2] rounded-sm overflow-hidden hover-scale">
                      <Image
                        src={item.images?.edges[0].node.url} // Fallback to placeholder if images are undefined
                        alt="Related Product"
                        width={item.images?.edges[0].node.width}
                        height={item.images?.edges[0].node.height}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ProductPage;

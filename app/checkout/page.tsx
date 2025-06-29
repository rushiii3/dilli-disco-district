/* eslint-disable @typescript-eslint/no-explicit-any */
import client from "@/lib/shopify-client";
import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";
import CheckoutButton from "./checkout-button";
import Image from "next/image";
import CartQuantityUpdater from "./CartQuantityUpdater";
import { RemoveFromCart } from "./RemoveCart";

const GET_CART_QUERY = `
  query GetCart($cartId: ID!) {
    cart(id: $cartId) {
      id
      checkoutUrl
      totalQuantity
          cost {
      totalAmount {
        amount
        currencyCode
      }
      subtotalAmount {
        amount
        currencyCode
      }
      totalTaxAmount {
        amount
        currencyCode
      }
      totalDutyAmount {
        amount
        currencyCode
      }
    }
      lines(first: 50) {
        edges {
          node {
            id
            quantity
            merchandise {
              ... on ProductVariant {
                id
                title
                image {
                  url
                  altText
                }
                price {
                  amount
                  currencyCode
                }
                product {
                  title
                  handle
                }
              }
            }
          }
        }
      }
    }
  }
`;
const Page = async () => {
  const cookieStore = await cookies();
  const cartId = cookieStore.get("shopify_cart_id")?.value;
  const { data } = await client.request(GET_CART_QUERY, {
    variables: { cartId },
  });
  const cartData = data?.cart || null;
  return (
    <div className="min-h-screen text-xl pb-32 md:pb-0">
      {/* Mobile Header */}
      {/* <div className="md:hidden">
        <div className="flex items-center justify-between px-4 py-4">
          <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-4 h-4" />
            <span>back</span>
          </button>
          <span className="text-gray-600">bag</span>
        </div>
        <div className="text-center pb-8">
          <h1 className="text-lg font-normal">entire studios</h1>
        </div>
      </div> */}

      {/* Desktop Header */}
      {/* <div className="hidden md:flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <div className="flex items-center space-x-8">
          <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-4 h-4" />
            <span>back</span>
          </button>
          <span className="text-gray-600">no holds in bag</span>
        </div>
        <h1 className="text-lg font-normal">entire studios</h1>
        <span className="text-gray-600">bag</span>
      </div> */}

      {/* Main Content */}
      {cartData ? (
        <div className="max-w-6xl pt-16 lg:pt-16 mx-auto px-4 md:px-6 py-6 md:py-12">
          {/* Desktop Table Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 pb-8 text-gray-600 border-b border-gray-200">
            <div className="col-span-5">product</div>
            <div className="col-span-2">price</div>
            <div className="col-span-2">quantity</div>
            <div className="col-span-2">total</div>
            <div className="col-span-1"></div>
          </div>

          {/* Mobile Product Card */}
          {cartData.lines.edges.map((edge: any) => {
            const line = edge.node;
            const variant = line.merchandise;
            return (
              <div
                key={line.id}
                className="md:hidden bg-white rounded-lg p-4 mb-8 relative"
              >
                <RemoveFromCart lineId={line.id} isMobile={true} />
                <div className="flex space-x-4">
                  <div className="w-24 h-32 relative bg-gray-50 rounded flex-shrink-0">
                    <Image
                      src={variant.image?.url}
                      alt={variant.image?.altText || "Product Image"}
                      fill
                      className="object-cover rounded"
                    />
                  </div>

                  <div className="flex-1 space-y-3">
                    <div className="text-gray-900 uppercase leading-tight pr-6">
                      {variant.product.title} {variant.title}
                    </div>

                    <div className="space-y-2">
                      <div>
                        price: {variant.price.amount}{" "}
                        {variant.price.currencyCode}
                      </div>

                      <CartQuantityUpdater
                        lineId={line.id}
                        initialQuantity={line.quantity}
                      />

                      <div>
                        total:{" "}
                        {line.quantity * parseFloat(variant.price.amount)}{" "}
                        {variant.price.currencyCode}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {/* Desktop Product Row */}
          {cartData.lines.edges.map((edge: any) => {
            const line = edge.node;
            const variant = line.merchandise;
            return (
              <div
                key={line.id}
                className="hidden md:grid grid-cols-12 gap-4 py-8 items-center border-b border-gray-200"
              >
                <div className="col-span-5 flex items-center space-x-4">
                  <div className="w-20 h-20 relative bg-white rounded border border-gray-200 flex items-center justify-center">
                    <Image
                      src={variant.image?.url}
                      alt={variant.image?.altText || "Product Image"}
                      fill
                      className="object-cover rounded p-1"
                    />
                  </div>
                  <div>
                    <div className="text-gray-900 uppercase">
                      {variant.product.title} {variant.title}
                    </div>
                  </div>
                </div>

                <div className="col-span-2">
                  <span>
                    price: {variant.price.amount} {variant.price.currencyCode}
                  </span>
                </div>

                <div className="col-span-2">
                  <CartQuantityUpdater
                    lineId={line.id}
                    initialQuantity={line.quantity}
                  />
                </div>

                <div className="col-span-2">
                  <span>
                    total: {line.quantity * parseFloat(variant.price.amount)}{" "}
                    {variant.price.currencyCode}
                  </span>
                </div>

                <div className="col-span-1">
                  <RemoveFromCart lineId={line.id} isMobile={false} />
                </div>
              </div>
            );
          })}
          {/* Subtotal and Info */}
          <div className="py-8 space-y-4">
            <div className="text-gray-900 font-mono">
              SUBTOTAL {cartData.cost.subtotalAmount.amount}{" "}
              {cartData.cost.subtotalAmount.currencyCode}
            </div>

            <div className="text-gray-600 space-y-2 text-sm">
              <p>
                free shipping. applicable taxes & duties calculated at checkout.
              </p>
              <p>no returns or exchanges on discounted / sale items.</p>
              {/* <p className="md:hidden">no holds in bag.</p> */}
            </div>
          </div>

          {/* Checkout Button */}
          <div className="pt-4">
            <CheckoutButton checkoutURL={cartData.checkoutUrl} />
          </div>
        </div>
      ) : (
        <div className="max-w-6xl pt-16 lg:pt-16 mx-auto px-4 md:px-6 py-6 md:py-12">
          <p className="text-center pt-10">
            There is nothing in your bag.{" "}
            <Link href={"/product"} className="underline">
              return to shop
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Page;

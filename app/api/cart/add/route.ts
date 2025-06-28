// app/api/cart/add/route.ts
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import client from "@/lib/shopify-client";

const CART_MUTATION = `mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
        cartLinesAdd(cartId: $cartId, lines: $lines) {
          cart {
            id
            checkoutUrl
            lines(first: 5) {
              edges {
                node {
                  id
                  quantity
                }
              }
            }
          }
          userErrors {
            field
            message
          }
        }
      }
    `;

export async function POST(req: NextRequest) {
  const { variantId, quantity } = await req.json();
  const cookieStore = await cookies();
  const cartId = cookieStore.get("shopify_cart_id")?.value;

  console.log(cartId, variantId, quantity, "cartId from cookies");

  if (!cartId) {
    return NextResponse.json({ error: "Missing cart ID" }, { status: 400 });
  }

  try {
    const {data} = await client.request(CART_MUTATION, {
      variables: {
        cartId,
        lines: [{ merchandiseId: variantId, quantity }],
      },
    });
    if (data.cartLinesAdd.userErrors.length > 0) {
      return NextResponse.json(
        { error: "Failed to add item to cart", details: data.cartLinesAdd.userErrors },
        { status: 400 }
      );
    }

    console.log("Response from cartLinesAdd:", data.cartLinesAdd.cart);
    return NextResponse.json({ success:true }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Add to cart failed", details: err },
      { status: 500 }
    );
  }
}

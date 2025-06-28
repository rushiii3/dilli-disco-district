// app/api/cart/update/route.ts
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import client from "@/lib/shopify-client";

const UPDATE_CART_LINE_MUTATION = `
  mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        id
        totalQuantity
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export async function PATCH(req: NextRequest) {
  const { lineId, quantity } = await req.json();
  const cartId = (await cookies()).get("shopify_cart_id")?.value;

  if (!cartId || !lineId) {
    return NextResponse.json({ error: "Missing data" }, { status: 400 });
  }

  try {
    const { data } = await client.request(UPDATE_CART_LINE_MUTATION, {
      variables: {
        cartId,
        lines: [
          {
            id: lineId,
            quantity,
          },
        ],
      },
    });

    return NextResponse.json({ success: true, data });
  } catch (err) {
    return NextResponse.json(
      { error: "Update failed", details: err },
      { status: 500 }
    );
  }
}

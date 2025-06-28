// app/api/cart/remove/route.ts
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import client from "@/lib/shopify-client";

const REMOVE_LINE_MUTATION = `
  mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
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

export async function DELETE(req: NextRequest) {
  const { lineId } = await req.json();
  const cartId = (await cookies()).get("shopify_cart_id")?.value;

  if (!cartId || !lineId) {
    return NextResponse.json({ error: "Missing data" }, { status: 400 });
  }

  try {
    const { data } = await client.request(REMOVE_LINE_MUTATION, {
      variables: {
        cartId,
        lineIds: [lineId],
      },
    });

    return NextResponse.json({ success: true, data });
  } catch (err) {
    return NextResponse.json(
      { error: "Remove failed", details: err },
      { status: 500 }
    );
  }
}

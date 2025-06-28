import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import client from "@/lib/shopify-client";

const VERIFY_CART_QUERY = `
  query getCart($cartId: ID!) {
    cart(id: $cartId) {
      id
      checkoutUrl
      totalQuantity
    }
  }
`;

export async function GET(req: NextRequest) {
  const cookieStore = await cookies(); // No need to await

  // Get cartId from query param or cookie
  const { searchParams } = new URL(req.url);
  const queryCartId = searchParams.get("cartId");
  const cookieCartId = cookieStore.get("shopify_cart_id")?.value;

  const rawCartId = queryCartId || cookieCartId;
  const cartId = rawCartId?.split("?")[0];

  console.log(cartId);

  if (!cartId) {
    return NextResponse.json(
      { valid: false, reason: "No cart ID provided" },
      { status: 400 }
    );
  }

  try {
    const { data } = await client.request(VERIFY_CART_QUERY, { variables: {
      cartId:cartId
    } });

    if (!data?.cart) {
      // Clean up cookies only if cookieCartId was used
      if (!queryCartId) {
        cookieStore.delete("shopify_cart_id");
      }

      return NextResponse.json(
        { valid: false, reason: "Cart not found or expired" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      valid: true,
      cartId: data.cart.id,
      checkoutUrl: data.cart.checkoutUrl,
      totalQuantity: data.cart.totalQuantity,
    });
  } catch (error) {
    console.error("Cart verification error:", error);
    return NextResponse.json(
      { valid: false, reason: "Error verifying cart" },
      { status: 500 }
    );
  }
}

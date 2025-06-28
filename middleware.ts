import { NextRequest, NextResponse } from "next/server";
import client from "./lib/shopify-client";
import { CART_CREATE_QUERY, VERIFY_CART_QUERY } from "./lib/queries";

// Utility: create a new Shopify cart
const createCart = async () => {
  const { data } = await client.request(CART_CREATE_QUERY);
  const cart = data?.cartCreate?.cart;
  if (!cart) throw new Error("Cart creation failed");
  return cart;
};

// Utility: verify an existing cart ID
const verifyCart = async (cartId: string) => {
  try {
    const { data } = await client.request(VERIFY_CART_QUERY, {
      variables: { cartId },
    });
    return data?.cart?.id ?? null;
  } catch (err) {
    console.warn("Cart verification failed:", err);
    return null;
  }
};

export async function middleware(request: NextRequest) {
  const cookieCartId = request.cookies.get("shopify_cart_id")?.value;

  let finalCartId: string | null = null;

  if (!cookieCartId) {
    // No cookie → create new cart
    const cart = await createCart();
    finalCartId = cart.id;

    const response = NextResponse.next();
    if (finalCartId) {
      response.cookies.set("shopify_cart_id", finalCartId, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
        sameSite: "lax",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      });
    }

    return response;
  } else {
    // Cookie exists → verify cart
    const strippedCartId = cookieCartId.split("?")[0]; // remove `?key=...` if exists
    const verifiedCartId = await verifyCart(strippedCartId);

    if (!verifiedCartId) {
      // Invalid cart → create new cart and overwrite cookie
      const newCart = await createCart();
      const response = NextResponse.next();
      response.cookies.set("shopify_cart_id", newCart.id, {
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
        sameSite: "lax",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      });
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|static|favicon.ico).*)"],
};

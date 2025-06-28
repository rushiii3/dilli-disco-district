import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import client from "@/lib/shopify-client";
import { CART_CREATE_QUERY } from "@/lib/queries";



export async function GET(req: NextRequest) {
    try {
        const { data } = await client.request(CART_CREATE_QUERY);
        const cart = data?.cartCreate?.cart;
        console.log(cart);
        if (!cart) {
            return NextResponse.json(
                { error: "Cart creation failed" },
                { status: 500 }
            );
        }

        // Set cookies
        const cookieStore = cookies();
        (await cookieStore).set("shopify_cart_id", cart.id, {

            maxAge: 60 * 60 * 24 * 30, // 30 days
            sameSite: "strict",
            secure: process.env.NODE_ENV === "production",
            httpOnly: true,
            path: '/',
        });
        return NextResponse.json({
            cartId: cart.id,
            checkoutUrl: cart.checkoutUrl,
        });
    } catch (error) {
        console.error("Shopify API error:", error);
        return NextResponse.json(
            { error: "Failed to create cart" },
            { status: 500 }
        );
    }
}

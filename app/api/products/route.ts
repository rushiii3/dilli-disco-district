// app/api/products/route.ts
import { NextRequest, NextResponse } from "next/server";
import client from "@/lib/shopify-client";

const PRODUCTS_QUERY = `
  query AllProducts($first: Int, $after: String) {
    products(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          handle
          title
          featuredImage {
            url
            altText
            width
            height
          }
        }
      }
    }
  }
`;


export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const first = parseInt(searchParams.get("first") || "10");
  const after = searchParams.get("after") || null;

  console.log(first);
  
  try {
    const {data} = await client.request(PRODUCTS_QUERY, {
      variables : {
        first,
        after,
      }
    });
        
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const products = data.products.edges.map(({ node, cursor }: any) => ({
      ...node,
      cursor,
    }));

    return NextResponse.json({
      products,
      pageInfo: data.products.pageInfo,
    });
  } catch (error) {
    console.error("Shopify API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

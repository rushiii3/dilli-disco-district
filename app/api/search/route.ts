/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import client from "@/lib/shopify-client";
import { SEARCH_PRODUCTS_QUERY } from "@/lib/queries";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const searchQuery = searchParams.get("query");
  const first = parseInt(searchParams.get("first") || "10", 10);
  const after = searchParams.get("after");
  
  if (!searchQuery) {
    return NextResponse.json(
      { error: "Missing search query" },
      { status: 400 }
    );
  }

  try {
    const { data } = await client.request(SEARCH_PRODUCTS_QUERY, {
      variables: {
        query: searchQuery,
        first: first,
        after: after || undefined, // Use undefined if after is null
      },
    });

    const products = data.search.edges.map((edge: any) => ({
      ...edge.node,
      cursor: edge.cursor,
    }));

    return NextResponse.json({
      products,
      pageInfo: data.search.pageInfo,
    });
  } catch (error: any) {
    console.error("Search API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch search results" },
      { status: 500 }
    );
  }
}

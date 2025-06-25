import { NextRequest, NextResponse } from "next/server";
import client from "@/lib/shopify-client";
import { GET_COLLECTION_PRODUCTS } from "@/lib/queries";

export const dynamic = "force-dynamic";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ handle: string }> }
) {
  const handle = (await params).handle;
  const { searchParams } = new URL(req.url);
  const first = Number(searchParams.get("first") || 20);
  const after = searchParams.get("after");

  if (!handle) {
    return NextResponse.json(
      { error: "Missing collection handle" },
      { status: 400 }
    );
  }

  try {
    const { data } = await client.request(GET_COLLECTION_PRODUCTS, {
      variables: {
        handle: handle,
        first: first,
        after: after || null,
      },
    });

    const collection = data.collection;
    if (!collection) {
      return NextResponse.json(
        { error: "Collection not found" },
        { status: 404 }
      );
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const products = collection.products.edges.map(({ node }: any) => ({
      title: node.title,
      handle: node.handle,
      featuredImage: node.images.edges[0]?.node || null,
    }));

    const pageInfo = collection.products.pageInfo;
    const endCursor = collection.products.edges.slice(-1)[0]?.cursor || null;

    return NextResponse.json({
      collectionTitle: collection.title,
      products,
      pageInfo: {
        hasNextPage: pageInfo.hasNextPage,
        endCursor,
      },
    });
  } catch (err) {
    console.error("Shopify API Error:", err);
    return NextResponse.json(
      { error: "Failed to fetch collection products" },
      { status: 500 }
    );
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import InfiniteProductGrid from "@/components/InfiniteProductGrid";
import { fetchProductsFn } from "@/lib/fetchProductsFn";
const page = async () => {
  const queryClient = new QueryClient();

  // ✅ Server-side prefetch for initial products
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["products"],
    queryFn: fetchProductsFn,
    getNextPageParam: (lastPage: {
      pageInfo: { hasNextPage: any; endCursor: any };
    }) =>
      lastPage.pageInfo.hasNextPage ? lastPage.pageInfo.endCursor : undefined,
    initialPageParam: null,
  });

  return (
    <>
      {/* <ProductGrid products={products} /> */}

      <HydrationBoundary state={dehydrate(queryClient)}>
        <InfiniteProductGrid />
      </HydrationBoundary>
    </>
  );
};

export default page;

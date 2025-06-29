/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";
import InfiniteCollectionProduct from "./InfiniteCollectionProduct";
import { fetchCollectionProductsWithHandle } from "@/hooks/useCollectionProduct";
type Props = {
  params: Promise<{ handle: string }>;
};
const Page = async ({ params }: Props) => {
  const { handle } = await params;
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["collections", handle, "products"] as [string, string, string],
    queryFn: fetchCollectionProductsWithHandle,
    getNextPageParam: (lastPage: {
      pageInfo: { hasNextPage: any; endCursor: any };
    }) =>
      lastPage.pageInfo?.hasNextPage ? lastPage.pageInfo.endCursor : undefined,
    initialPageParam: null,
  });
  return (
    <main className=" px-6 gap-12 max-w-7xl mx-auto py-16">
      <div className="gap-12 min-h-screen ">
        <h1 className="text-4xl font-bold mb-4 capitalize text-center lg:text-left">{handle}</h1>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <InfiniteCollectionProduct handle={handle} />
        </HydrationBoundary>
      </div>
    </main>
  );
};

export default Page;

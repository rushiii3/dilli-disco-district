/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchSearchProductsFn } from "@/lib/fetchSearchProductsFn";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import React from "react";
import SearchInfinite from "./SearchInfinite";
interface Props {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

const Page = async ({ searchParams }: Props) => {
  const resolvedParams = await searchParams;
  const query =
    typeof resolvedParams?.query === "string" ? resolvedParams.query : "";
  const queryClient = new QueryClient();

  if (query.trim()) {
    await queryClient.prefetchInfiniteQuery({
      queryKey: ["search", query],
      queryFn: fetchSearchProductsFn(query),
      getNextPageParam: (lastPage: { pageInfo: { hasNextPage: any; endCursor: any; }; }) =>
        lastPage.pageInfo?.hasNextPage ? lastPage.pageInfo.endCursor : undefined,
      initialPageParam: null,
    });
  }

  return (
    <div className="pt-16 md:pt-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Search Results Header */}
        <div className="mb-12">
          <h2 className="text-gray-900">2 results for &quot;{query}&quot;</h2>
        </div>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <SearchInfinite query={query} />
        </HydrationBoundary>
      </div>
    </div>
  );
};

export default Page;

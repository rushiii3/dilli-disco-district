// hooks/useProducts.ts
import { fetchProductsFn } from "@/lib/fetchProductsFn";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useProducts = () =>
  useInfiniteQuery({
    queryKey: ["products"],
    queryFn: fetchProductsFn,
    getNextPageParam: (lastPage) =>
      lastPage.pageInfo.hasNextPage ? lastPage.pageInfo.endCursor : undefined,
    staleTime: 60 * 1000,
    initialPageParam: null,
  });

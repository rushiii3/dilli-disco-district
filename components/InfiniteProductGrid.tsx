"use client";

import { useEffect, useRef } from "react";
import ProductGrid from "@/app/product/ProductGrid";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchProductsFn } from "@/lib/fetchProductsFn";

const InfiniteProductGrid = () => {
  const {
    isLoading,
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error,
    status,
  } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: fetchProductsFn,
    getNextPageParam: (lastPage) =>
      lastPage.pageInfo.hasNextPage ? lastPage.pageInfo.endCursor : undefined,
    staleTime: 60 * 1000,
    initialPageParam: null,
  });

  const loaderRef = useRef<HTMLDivElement | null>(null);
  const products = data?.pages.flatMap((page) => page.products) || [];
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef?.current);
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) return <p className="text-center py-10">Loading...</p>;
  if (status === "error")
    return <p className="text-center py-10">Error: {error.message}</p>;

  console.log(products);
  
  return (
    <div className="px-4 md:px-8">
      <ProductGrid products={products} />
      {isFetchingNextPage && (
        <p className="text-center py-4">Loading more...</p>
      )}
      {!hasNextPage && <p className="text-center py-4">No more products.</p>}
      <div ref={loaderRef} className="h-12" />
    </div>
  );
};

export default InfiniteProductGrid;

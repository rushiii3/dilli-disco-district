"use client";
import React from "react";
import { useEffect, useRef } from "react";
import ProductGrid from "@/app/product/ProductGrid";
import { useInfiniteQuery } from "@tanstack/react-query";
import {  fetchCollectionProductsWithHandle } from "@/hooks/useCollectionProduct";
const InfiniteCollectionProduct = ({ handle }: { handle: string }) => {
  const {
    isLoading,
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error,
    status,
  } = useInfiniteQuery({
    queryKey: ["collections", handle, "products"] as [string, string, string],
    queryFn: fetchCollectionProductsWithHandle,
    getNextPageParam: (lastPage) =>
      lastPage.pageInfo?.hasNextPage ? lastPage.pageInfo.endCursor : undefined,
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
  return (
    <>
      <ProductGrid products={products} />
      {isFetchingNextPage && (
        <p className="text-center py-4">Loading more...</p>
      )}
      {!hasNextPage && <p className="text-center py-4">No more products.</p>}
      <div ref={loaderRef} className="h-12" />
    </>
  );
};

export default InfiniteCollectionProduct;

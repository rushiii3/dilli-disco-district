"use client";
import { fetchSearchProductsFn } from "@/lib/fetchSearchProductsFn";
import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useEffect, useRef } from "react";
import SearchProduct from "./SearchProduct";

const SearchInfinite = ({ query }: { query: string }) => {
  const {
    isLoading,
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error,
    status,
  } = useInfiniteQuery({
    queryKey: ["search", query],
    queryFn: fetchSearchProductsFn(query),
    getNextPageParam: (lastPage) =>
      lastPage.pageInfo?.hasNextPage ? lastPage.pageInfo.endCursor : undefined,
    initialPageParam: null,
    staleTime: 60 * 1000,
    enabled: !!query.trim(), // Only run if query is not empty
  });

  const loaderRef = useRef<HTMLDivElement | null>(null);
  const products = data?.pages.flatMap((page) => page.products) || [];
  console.log(products);

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
    <div className="space-y-2 md:space-y-10">
      {/* Product 1 - Black Vest */}

      {products.length > 0 &&
        products.map((product) => (
          <SearchProduct
            title={product.title}
            amount={product.priceRange.minVariantPrice.amount}
            currencyCode={product.priceRange.minVariantPrice.currencyCode}
            image={product.featuredImage?.url}
            handle={product.handle}
            sizes={product.options
              .find((option: { name: string }) => option.name === "Size")
              ?.values.join("-")}
            key={`${product.id}` + Math.random()}
          />
        ))}

      {isFetchingNextPage && (
        <p className="text-center py-4">Loading more...</p>
      )}
      {products.length === 0 && (
        <p className="text-center py-4">Please give query</p>
      )}
      {!hasNextPage && products.length !== 0 && (
        <p className="text-center py-4">No more products.</p>
      )}
      <div ref={loaderRef} className="h-12" />
    </div>
  );
};

export default SearchInfinite;

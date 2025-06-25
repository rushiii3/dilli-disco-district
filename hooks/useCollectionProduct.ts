import { QueryFunctionContext } from "@tanstack/react-query";

export const fetchCollectionProductsWithHandle = async (
  ctx: QueryFunctionContext<[string, string, string]>
) => {
  const { queryKey, pageParam = null } = ctx;
  const [, handle] = queryKey;

  const url =
    typeof window === "undefined"
      ? `${process.env.NEXT_PUBLIC_SITE_URL}/api/collection/${handle}?first=20${
          pageParam ? `&after=${pageParam}` : ""
        }`
      : `/api/collection/${handle}?first=20${
          pageParam ? `&after=${pageParam}` : ""
        }`;
  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch collection products");
  }

  return res.json();
};

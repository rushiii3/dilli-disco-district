// lib/fetchProductsFn.ts
export const fetchProductsFn = async ({ pageParam = null }) => {
  const res = await fetch(
    `/api/products?first=20${pageParam ? `&after=${pageParam}` : ""}`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

export const fetchProductsFn = async ({ pageParam = null }) => {
  const url =
    typeof window === "undefined"
      ? `${process.env.NEXT_PUBLIC_SITE_URL}/api/products?first=2${pageParam ? `&after=${pageParam}` : ""}`
      : `/api/products?first=2${pageParam ? `&after=${pageParam}` : ""}`;

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    const error = await res.text();
    console.error("Fetch failed:", error);
    throw new Error("Failed to fetch products");
  }

  return res.json();
};

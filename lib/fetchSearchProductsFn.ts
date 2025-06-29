// lib/fetchSearchProductsFn.ts
export const fetchSearchProductsFn = (query: string) => async ({ pageParam = null }) => {
  const baseUrl =
    typeof window === "undefined"
      ? process.env.NEXT_PUBLIC_SITE_URL
      : "";

  const url = `${baseUrl}/api/search?query=${encodeURIComponent(query)}&first=10${
    pageParam ? `&after=${pageParam}` : ""
  }`;

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch search results");
  return res.json(); // Should be { products, pageInfo }
};

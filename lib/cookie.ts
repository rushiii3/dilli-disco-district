// "use server";
// import { cookies } from "next/headers";
// export async function create(data) {
  // const cookieStore = await cookies();

  // cookieStore.set("name", "lee");
//   // or
//   cookieStore.set("name", "lee", { secure: true });
//   // or
//   cookieStore.set({
//     name: "name",
//     value: "lee",
//     httpOnly: true,
//     path: "/",
//   });
// }
export const GenerateCartToken = async () => {
  try {
    //  const cookieStore = await cookies();
    console.log("🚀 Sending request to create cart...");
    const url =
      typeof window === "undefined"
        ? `${process.env.NEXT_PUBLIC_SITE_URL}/api/cart/create`
        : `/api/cart/create`;
    const res = await fetch(url, {
      method: "GET",
      credentials: "include", // <-- CRUCIAL for cookies
      cache: "no-store",
    });
    console.log("🚀 Response received from cart creation:", url);
  // cookieStore.set("name", "lee");

    if (!res.ok) {
      throw new Error("Failed to fetch collection products");
    }
    const cartData = await res.json();
    console.log(cartData);
  } catch (error) {
    console.error("❗ Error generating cart token:", error);
    return null;
  }
};

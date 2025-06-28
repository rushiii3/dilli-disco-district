export const GenerateCartToken = async () => {
  try {
    console.log("🚀 Sending request to create cart...");
    const url = "https://turbo-guide-9gvp9jq7jwqhxv6p-3000.app.github.dev/api/cart/create";
    const res = await fetch(url, { cache: "no-store" });
    console.log("response",res);
    console.log("res json", res.json())
  } catch (error) {
    console.error("❗ Error generating cart token:", error);
    return null;
  }
};


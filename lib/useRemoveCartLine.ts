// hooks/useRemoveCartLine.ts
"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";

export const useRemoveCartLine = () => {
  const router = useRouter();

  const removeLine = useCallback(async (lineId: string) => {
    console.log("Removing line:", lineId);
    try {
      await fetch("/api/cart/remove", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ lineId }),
      });

      router.refresh(); // Refresh the cart page
    } catch (error) {
      console.error("Failed to remove line:", error);
    }
  }, [router]);

  return removeLine;
};

"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "nextjs-toploader/app";
import React from "react";

const CheckoutButton = ({ checkoutURL }: { checkoutURL: string }) => {
  const router = useRouter();
  return (
    <Button
      className="w-full md:w-auto bg-gray-200 hover:bg-gray-300 text-gray-900 font-mono text-sm px-8 py-4 md:py-3 rounded-full border-0"
      variant="link"
      onClick={() => {
        if (checkoutURL) {
          router.push(checkoutURL);
        } else {
          console.error("No checkout URL available");
        }
      }}
    >
      <span className="flex items-center justify-center">
        <span>checkout</span>
        <ArrowRight className="w-4 h-4 ml-2" />
      </span>
    </Button>
  );
};

export default CheckoutButton;

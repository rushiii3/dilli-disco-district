// components/CartQuantityUpdater.tsx
"use client";

import { useDebouncedUpdate } from "@/lib/useDebouncedUpdate";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CartQuantityUpdater = ({
  lineId,
  initialQuantity,
}: {
  lineId: string;
  initialQuantity: number;
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const updateQuantity = useDebouncedUpdate();

  const router = useRouter();

  const handleChange = (newQty: number) => {
    setQuantity(newQty);
    updateQuantity(lineId, newQty, () => {
      router.refresh(); // ✅ Refresh page after debounce update
    });
  };

  return (
    <div className="flex items-center space-x-3">
      <button
        onClick={() => handleChange(quantity - 1)}
        disabled={quantity <= 1}
      >
        -
      </button>
      <span>{quantity}</span>
      <button onClick={() => handleChange(quantity + 1)}>+</button>
    </div>
  );
};

export default CartQuantityUpdater;

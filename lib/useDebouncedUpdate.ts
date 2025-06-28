// hooks/useDebouncedUpdate.ts
import { debounce } from "lodash";
import { useRef } from "react";

export const useDebouncedUpdate = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const debounceRef = useRef<{ [key: string]: (...args: any[]) => void }>({});

  const updateQuantity = (lineId: string, quantity: number, onDone?: () => void) => {
    if (!debounceRef.current[lineId]) {
      debounceRef.current[lineId] = debounce(
        async (lineId: string, quantity: number) => {
          await fetch("/api/cart/update", {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ lineId, quantity }),
          });

          onDone?.(); // <-- Refresh or reload
        },
        500
      );
    }

    debounceRef.current[lineId](lineId, quantity);
  };

  return updateQuantity;
};


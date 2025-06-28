"use client";
import { useRemoveCartLine } from "@/lib/useRemoveCartLine";
import { X } from "lucide-react";

export const RemoveFromCart = ({
  lineId,
  isMobile,
}: {
  lineId: string;
  isMobile: boolean;
}) => {
  const removeLine = useRemoveCartLine();

  return (
    <>
      {isMobile ? (
        <button className="absolute top-4 right-4 w-6 h-6 flex items-center justify-center text-gray-600 hover:text-gray-900">
          <X className="w-4 h-4" />
        </button>
      ) : (
        <button
          className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-gray-900"
          onClick={() => removeLine(lineId)}
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </>
  );
};

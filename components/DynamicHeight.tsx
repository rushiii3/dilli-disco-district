"use client";
import useResponsiveDimensions from "@/hooks/useResponsiveDimensions";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const DynamicHeight = ({ children }: Props) => {
  const { width, height } = useResponsiveDimensions();

  console.log("DynamicHeight", width, height);
  
  return (
    <div
      className="relative min-w-full h-full overflow-hidden"
      id="room"
      style={{ width: width, height: height }}
    >
      {children}
    </div>
  );
};

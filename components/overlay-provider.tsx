"use client";
import { useUIStore } from "@/store/useDrawerStore";
import React from "react";
type Props = {
  children: React.ReactNode;
};

export const OverlayProvider = ({ children }: Props) => {
  const { isBackdropVisible } = useUIStore();
  return (
    <div style={{ filter: isBackdropVisible ? "blur(20px)" : "blur(0px)" }}>
      {children}
    </div>
  );
};

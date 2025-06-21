// app/layout.tsx or app/page.tsx
"use client";
import { useEffect, useState } from "react";
import VideoPreloader from "@/components/VideoPreloader";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [isPreloading, setIsPreloading] = useState(true);

  useEffect(() => {
    setIsPreloading(true);
    // const hasSeen = sessionStorage.getItem("hasSeenPreloader");

    // // Show preloader only once per session
    // if (!hasSeen) {
    //   setIsPreloading(true);
    // } else {
    //   setIsPreloading(false);
    // }
  }, []);

  const handlePreloaderEnd = () => {
    // sessionStorage.setItem("hasSeenPreloader", "true");
    setIsPreloading(false);
  };

  return (
    <>
      {isPreloading ? <VideoPreloader onEnd={handlePreloaderEnd} /> : children}
    </>
  );
}

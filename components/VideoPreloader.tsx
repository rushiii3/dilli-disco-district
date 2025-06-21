// components/VideoPreloader.tsx
"use client";
import { useEffect, useRef } from "react";

const VideoPreloader = ({ onEnd }: { onEnd: () => void }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      onEnd();
    };

    video.addEventListener("ended", handleEnded);
    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, [onEnd]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center ">
      <video
        ref={videoRef}
        src="/videos/preloader.webm"
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default VideoPreloader;

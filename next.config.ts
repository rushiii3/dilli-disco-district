import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sjc.microlink.io',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.meideinthe.cloud',
      },
      {
        protocol: 'https',
        hostname: 'videos.pexels.com',
      },
    ]
  }
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  // Disable the Next.js 15 dev overlay that causes SegmentViewNode RSC manifest corruption
  devIndicators: false,
};

export default nextConfig;

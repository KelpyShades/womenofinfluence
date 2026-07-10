import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Resolve the multiple lockfiles workspace root warning

  turbopack: {
    root: "/home/kelpyshades/Documents/GitHub/womenofinfluence",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "*.convex.cloud",
      },
      {
        protocol: "https",
        hostname: "*.convex.site",
      },
    ],
  },
};

export default nextConfig;

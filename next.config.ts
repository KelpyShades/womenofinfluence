import type { NextConfig } from "next";
import { cwd } from "process";

const nextConfig: NextConfig = {
  // Resolve the multiple lockfiles workspace root warning

  turbopack: {
    root: cwd(),
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

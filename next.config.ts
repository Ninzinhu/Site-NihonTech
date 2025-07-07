import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "r.mobirisesite.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
    ],
  },
};

export default nextConfig;

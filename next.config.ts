import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sgwagency.com',
        pathname: '/demo/10-2025-hts/**',
      },
    ],
  },
};

export default nextConfig;

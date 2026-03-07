import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/intel-telemetry",
  assetPrefix: "/intel-telemetry/",
  images: {
    unoptimized: true
  }
};

export default nextConfig;

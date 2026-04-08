import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  basePath: "/RubberDuckBench",
  assetPrefix: "/RubberDuckBench",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/RubberDuckBench",
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: ["*"],
  turbopack: {
    rules: {
      "*.svg": { loaders: ["@svgr/webpack"], as: "*.tsx" },
    },
  },
  output: "export",
  basePath: "/franco-bonilla-portfolio",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/franco-bonilla-portfolio',
  },
};

export default nextConfig;

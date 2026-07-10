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
};

export default nextConfig;

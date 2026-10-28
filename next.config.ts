import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for GitHub Pages
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;

import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Y.construtora",
  images: {
    unoptimized: true,
  },
  devIndicators: false,
  turbopack: {
    root: path.resolve(process.cwd()),
  },
};

export default nextConfig;

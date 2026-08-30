import path from "node:path";
import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : undefined,
  basePath: isGithubPages ? "/Y.construtora" : undefined,
  images: {
    unoptimized: true,
  },
  devIndicators: false,
  turbopack: {
    root: path.resolve(process.cwd()),
  },
};

export default nextConfig;

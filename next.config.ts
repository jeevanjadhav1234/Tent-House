import type { NextConfig } from "next";

const normalizeBasePath = (value?: string) => {
  if (!value) return "";

  const trimmed = value.trim();
  if (!trimmed || trimmed === "/") return "";

  return `/${trimmed.replace(/^\/+|\/+$/g, "")}`;
};

const githubPagesBasePath =
  process.env.GITHUB_ACTIONS && !process.env.VERCEL && process.env.GITHUB_REPOSITORY
    ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}`
    : "";

const basePath = normalizeBasePath(
  process.env.NEXT_PUBLIC_BASE_PATH ?? process.env.BASE_PATH ?? githubPagesBasePath
);
const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX?.trim().replace(/\/+$/g, "");
const distDir = process.env.NEXT_DIST_DIR?.trim();

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  ...(assetPrefix ? { assetPrefix } : {}),
  ...(distDir ? { distDir } : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

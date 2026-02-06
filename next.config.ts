import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repo = process.env.GITHUB_REPOSITORY?.replace(/.*\//, "") ?? "";
const isUserOrOrgPage = repo.toLowerCase().endsWith(".github.io");
const basePath = isGithubActions && !isUserOrOrgPage ? `/${repo}` : "";
const isGithubPagesBuild = isGithubActions && repo.length > 0;

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  ...(isGithubPagesBuild
    ? {
        output: "export",
        trailingSlash: true,
        basePath,
        assetPrefix: basePath,
      }
    : {}),
};

export default nextConfig;

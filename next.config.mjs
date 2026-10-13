const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repoName = "usercare-properties";

/**
 * Dual-mode config:
 * - Vercel / local dev: full Next.js (image optimization, clean URLs).
 * - GitHub Pages (GITHUB_PAGES=true in the Actions workflow): static export
 *   under the /<repo>/ base path with the custom image loader.
 */
const nextConfig = {
  ...(isGitHubPages
    ? { output: "export", trailingSlash: true, basePath: `/${repoName}` }
    : {}),
  images: isGitHubPages
    ? { loader: "custom", loaderFile: "./src/imageLoader.js" }
    : { formats: ["image/avif", "image/webp"] },
};

export default nextConfig;

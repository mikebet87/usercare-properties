const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repoName = "usercare-properties";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export so the site can be hosted on GitHub Pages.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // Project pages are served under /<repo>/ — only apply when deploying.
  basePath: isGitHubPages ? `/${repoName}` : "",
};

export default nextConfig;

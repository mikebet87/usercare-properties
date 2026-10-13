const basePath = process.env.GITHUB_PAGES === "true" ? "/usercare-properties" : "";

/**
 * Custom image loader — applies the GitHub Pages basePath consistently to
 * every image URL (next/image's unoptimized mode drops basePath on <img> tags).
 */
export default function imageLoader({ src }) {
  return `${basePath}${src}`;
}

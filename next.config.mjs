// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enable static export
  trailingSlash: true,
  images: {
    unoptimized: true, // Disable image optimization for static exports
  },
};

export default nextConfig;

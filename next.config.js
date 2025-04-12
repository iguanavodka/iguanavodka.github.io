/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static exports
  distDir: 'out', // Output directory for build
  images: {
    unoptimized: true, // Needed for static export
  },
  // Ensure your site works when deployed to a subdomain if needed
  basePath: '',
  trailingSlash: true, // Add trailing slashes to all URLs
};

module.exports = nextConfig;
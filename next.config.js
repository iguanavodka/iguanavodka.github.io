/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  // If this is a user/organization page (username.github.io),
  // no basePath is needed. If it's a project page, uncomment and set appropriately:
  // basePath: '/your-repo-name',

  // Add trailing slashes for consistent routing
  trailingSlash: true,

  // Disable image optimization for GitHub Pages compatibility
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
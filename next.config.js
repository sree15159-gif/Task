/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Temporarily disable strict mode to reduce hydration warnings
  images: {
    unoptimized: true,
  },
  
  // Suppress hydration warnings in development
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Enable static exports if needed
  // output: 'export',
  // trailingSlash: true,
  
  // Asset prefix for CDN (optional)
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/your-cdn-url' : '',
  
  // Environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  
  // Redirects (if needed)
  async redirects() {
    return [
      // Add any redirects here
    ];
  },
  
  // Headers (if needed)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
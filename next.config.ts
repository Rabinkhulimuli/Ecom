
import { NextConfig } from "next";
const nextConfig: NextConfig = {
  /* config options here */
  async headers(){
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
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/sw.js',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/javascript; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self'",
          },
        ],
      },
    ]
  },
  images: {
    domains: ["lh3.googleusercontent.com","cdn.dummyjson.com","res.cloudinary.com"], // Add any other domains if necessary
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 300,
  },
}
export default nextConfig;

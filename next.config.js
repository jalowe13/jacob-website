/*
https://replicate.com/docs/get-started/nextjs
*/

/** @type {import('next').NextConfig} */



const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "replicate.com"
      },
      {
        protocol: "https",
        hostname: "replicate.delivery",
      }
    ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig

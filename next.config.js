/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverActions: true
  },
  images: {
    domains: ['llvycgsxqpebqcbggyba.supabase.co'],
  },
};

module.exports = nextConfig;

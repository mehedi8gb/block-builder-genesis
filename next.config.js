/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['lucide-react'],
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
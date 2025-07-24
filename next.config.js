/** @type {import('next').NextConfig} */
const { generateBlockRegistry } = require("./src/core/scripts/generate-block-registry");

generateBlockRegistry();

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['lucide-react'],
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
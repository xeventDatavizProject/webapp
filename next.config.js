/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
module.exports = nextConfig;

const removeImports = require("next-remove-imports")();
module.exports = removeImports({
  experimental: { esmExternals: true },
});

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: process.env.NEXT_PUBLIC_API_URL,
      },
    ];
  },
};

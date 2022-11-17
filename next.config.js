/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/credentials/prettyvc',
        destination: '/credentials/prettyvc.json',
      },
      {
        source: '/security/bbs/v1',
        destination: '/security/bbs/v1.json',
      },
    ]
  },
}

module.exports = nextConfig

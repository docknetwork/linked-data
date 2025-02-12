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
        source: '/credentials/extensions-v1',
        destination: '/credentials/extensions-v1.json',
      },
      {
        source: '/security/bbs/v1',
        destination: '/security/bbs/v1.json',
      },
      {
        source: '/security/bbs23/v1',
        destination: '/security/bbs23/v1.json',
      },
      {
        source: '/security/ps/v1',
        destination: '/security/ps/v1.json',
      },
      {
        source: '/security/bbdt16/v1',
        destination: '/security/bbdt16/v1.json',
      },
    ]
  },
}

module.exports = nextConfig

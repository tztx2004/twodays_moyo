/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  experimental: {
    scrollRestoration: true,
  },
  pageExtensions: ['test.ts', 'test.tsx', 'tsx', 'ts', 'd.ts'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'phoneb.s3.ap-northeast-2.amazonaws.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost'
      }
    ],
  },
};

module.exports = nextConfig;

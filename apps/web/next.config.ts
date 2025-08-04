import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: require('node:path').join(__dirname, '../../'),
  },
};

export default nextConfig;

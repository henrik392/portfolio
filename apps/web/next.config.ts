import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  outputFileTracingRoot: require('node:path').join(__dirname, '../../'),
};

export default nextConfig;

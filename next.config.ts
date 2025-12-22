import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eda.yandex',
        port: '',
        pathname: '/**', // любой путь
      },
    ],
  },
}

export default nextConfig

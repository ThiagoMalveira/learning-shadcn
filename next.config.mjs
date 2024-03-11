/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.sbt.com.br',
        port: '',
        pathname: '/**'
      },
    ]
  }
};

export default nextConfig;

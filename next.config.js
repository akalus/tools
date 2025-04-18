/** @type {import('next').NextConfig} */

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 不使用 standalone 配置
};

module.exports = nextConfig;

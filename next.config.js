/** @type {import('next').NextConfig} */
module.exports = {
  output: 'standalone',  // 确保启用了 standalone 模式
  eslint: {
    ignoreDuringBuilds: true,  // 如果你不想让 ESLint 阻止构建
  },
};

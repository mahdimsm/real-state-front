/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = {
    basePath: '/https://mahdimsm.github.io/real-state-front/', // Replace 'repository-name' with your actual repository name
    images: {
      unoptimized: true, // Required for Next.js on GitHub Pages (to disable Image Optimization)
    },
  };
export default nextConfig;

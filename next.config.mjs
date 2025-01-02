/** @type {import('next').NextConfig} */
const nextConfig = {
    //     basePath: '/https://mahdimsm.github.io/real-state-front/', // Replace 'repository-name' with your actual repository name
//     images: {
//       unoptimized: true, // Required for Next.js on GitHub Pages (to disable Image Optimization)
//     },
};
// module.exports = {

//   };
export default nextConfig;
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/repository-name' : '', // Use basePath only in production
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
};

// Check if the app is running in production
const isProd = process.env.NODE_ENV === 'production';

// Export the Next.js configuration
const nextConfig = {
  // Dynamically set the basePath for GitHub Pages in production
  basePath: isProd ? '/https://mahdimsm.github.io/real-state-front' : '',

  // Disable Next.js Image Optimization for GitHub Pages
  images: {
    unoptimized: true,
  },

  // Optional: Add other Next.js configurations here
};

export default nextConfig;

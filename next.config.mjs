/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['cdnjs.cloudflare.com'],
    },
    webpack: (config) => {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
      return config;
    },
  };
  
  export default nextConfig;
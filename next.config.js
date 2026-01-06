/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
    images: {
        unoptimized: true,
    },
    // Ensure strict React mode
    reactStrictMode: true,
    webpack: (config) => {
        config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300,
        }
        return config
    },
};

module.exports = nextConfig;

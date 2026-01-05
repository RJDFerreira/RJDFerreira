/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    // Ensure strict React mode
    reactStrictMode: true,
};

module.exports = nextConfig;

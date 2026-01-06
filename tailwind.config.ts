import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./content/**/*.{mdx,md}",
    ],
    theme: {
        extend: {
            colors: {
                // Monochrome Dark Mode palette
                background: "#111111", // Dark Grey
                foreground: "#ffffff", // Pure white
                muted: "#a1a1a1", // Lighter gray for secondary text
                border: "#333333", // Dark gray for subtle borders
                accent: "#ffffff", // White for accents
            },
            fontFamily: {
                sans: [
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "Segoe UI",
                    "Roboto",
                    "Helvetica",
                    "Arial",
                    "sans-serif",
                    "Apple Color Emoji",
                    "Segoe UI Emoji",
                    "Segoe UI Symbol",
                ],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
export default config;

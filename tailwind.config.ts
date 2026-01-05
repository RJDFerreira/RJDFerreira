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
                // Monochrome palette per user request
                background: "#ffffff", // Pure white
                foreground: "#000000", // Pure black
                muted: "#666666", // Gray for secondary text
                border: "#eaeaea", // Light gray for subtle borders
                accent: "#000000", // Black for accents
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

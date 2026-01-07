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
                muted: "#d4d4d4", // neutral-300
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
            typography: (theme: any) => ({
                DEFAULT: {
                    css: {
                        '--tw-prose-body': theme('colors.muted'),
                        '--tw-prose-headings': theme('colors.foreground'),
                        '--tw-prose-lead': theme('colors.muted'),
                        '--tw-prose-links': theme('colors.foreground'),
                        '--tw-prose-bold': theme('colors.foreground'),
                        '--tw-prose-counters': theme('colors.muted'),
                        '--tw-prose-bullets': theme('colors.muted'),
                        '--tw-prose-hr': theme('colors.border'),
                        '--tw-prose-quotes': theme('colors.foreground'),
                        '--tw-prose-quote-borders': theme('colors.border'),
                        '--tw-prose-captions': theme('colors.muted'),
                        '--tw-prose-code': theme('colors.foreground'),
                        '--tw-prose-pre-code': theme('colors.foreground'),
                        '--tw-prose-pre-bg': theme('colors.background'),
                        '--tw-prose-th-borders': theme('colors.border'),
                        '--tw-prose-td-borders': theme('colors.border'),
                        // Invert (for dark mode) - mapping to same variables to ensure consistency
                        '--tw-prose-invert-body': theme('colors.muted'),
                        '--tw-prose-invert-headings': theme('colors.foreground'),
                        '--tw-prose-invert-lead': theme('colors.muted'),
                        '--tw-prose-invert-links': theme('colors.foreground'),
                        '--tw-prose-invert-bold': theme('colors.foreground'),
                        '--tw-prose-invert-counters': theme('colors.muted'),
                        '--tw-prose-invert-bullets': theme('colors.muted'),
                        '--tw-prose-invert-hr': theme('colors.border'),
                        '--tw-prose-invert-quotes': theme('colors.foreground'),
                        '--tw-prose-invert-quote-borders': theme('colors.border'),
                        '--tw-prose-invert-captions': theme('colors.muted'),
                        '--tw-prose-invert-code': theme('colors.foreground'),
                        '--tw-prose-invert-pre-code': theme('colors.foreground'),
                        '--tw-prose-invert-pre-bg': theme('colors.background'),
                        '--tw-prose-invert-th-borders': theme('colors.border'),
                        '--tw-prose-invert-td-borders': theme('colors.border'),
                    },
                },
            }),
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
export default config;

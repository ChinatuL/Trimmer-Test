import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "auth-bg": "url('/images/bg-auth.png')",
                "home-bg": "url('/images/big-link.png')",
                "pricing-bg": "url('/images/bg-pricing.png')",
                "list-marker-white": "('/icons/list-marker-white.svg')",
                "list-marker-purple": "('/icons/list-marker-purple.svg')",
            },
            colors: {
                purple: "#9D37ED",
                darkBlue: "#0B0A1E",
                darkPurple: "#1d0138",
            },
        },
    },
    plugins: [],
};
export default config;

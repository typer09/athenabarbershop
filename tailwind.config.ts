import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            // Barber shop aesthetic: Classic, masculine, premium
            colors: {
                // Primary: Deep black & warm gold
                primary: {
                    50: "#fefce8",
                    100: "#fef9c3",
                    200: "#fef08a",
                    300: "#fde047",
                    400: "#facc15",
                    500: "#d4a853", // Main gold accent
                    600: "#b8942e",
                    700: "#92720c",
                    800: "#713f12",
                    900: "#422006",
                    950: "#1c0a02",
                },
                // Neutral: Warm grays for a classic feel
                neutral: {
                    50: "#fafafa",
                    100: "#f5f5f4",
                    200: "#e7e5e4",
                    300: "#d6d3d1",
                    400: "#a8a29e",
                    500: "#78716c",
                    600: "#57534e",
                    700: "#44403c",
                    800: "#292524",
                    900: "#1c1917",
                    950: "#0c0a09",
                },
            },
            fontFamily: {
                // Classic serif for headings, clean sans for body
                heading: ["var(--font-oswald)", "sans-serif"],
                body: ["var(--font-montserrat)", "sans-serif"],
            },
            animation: {
                "fade-in": "fadeIn 0.5s ease-out forwards",
                "slide-up": "slideUp 0.5s ease-out forwards",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
            },
        },
    },
    plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            // Barber shop aesthetic: Dark luxury, masculine, premium copper
            colors: {
                // Primary: Copper bronze accent
                primary: {
                    50: "#fdf4ec",
                    100: "#fae5cc",
                    200: "#f5c899",
                    300: "#eda96a",
                    400: "#E0A36C", // Accent light
                    500: "#C46A2B", // Main copper accent
                    600: "#B45A1F", // Hover accent
                    700: "#8f4317",
                    800: "#6b3011",
                    900: "#4a200b",
                    950: "#2A1A12", // Soft accent background
                },
                // Neutral: True dark spectrum for luxury dark theme
                neutral: {
                    50: "#FFFFFF",  // Primary text
                    100: "#B3B3B3", // Secondary text
                    200: "#7A7A7A", // Muted text
                    300: "#4a4a4a",
                    400: "#333333",
                    500: "#262626", // Border subtle
                    600: "#1A1A1A", // Card background
                    700: "#121212", // Secondary background
                    800: "#0D0D0D",
                    900: "#0A0A0A", // Primary background
                    950: "#050505",
                },
            },
            fontFamily: {
                // Classic serif for headings, clean sans for body
                heading: ["var(--font-oswald)", "sans-serif"],
                body: ["var(--font-montserrat)", "sans-serif"],
                cinzel: ["var(--font-cinzel)", "serif"],
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

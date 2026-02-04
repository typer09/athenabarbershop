import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // Enable static exports for maximum performance on landing pages
    // Uncomment below if deploying to static hosts (Vercel handles this automatically)
    // output: "export",

    images: {
        // Optimize images with sharp
        formats: ["image/avif", "image/webp"],
        // Add remote patterns if using external image sources
        remotePatterns: [
            // Example: { protocol: "https", hostname: "images.unsplash.com" }
        ],
    },

    // Experimental features for performance
    experimental: {
        // Enable optimized package imports
        optimizePackageImports: ["lucide-react", "framer-motion"],
    },

    // Ignore lint errors during build (temporarily for production speed)
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;

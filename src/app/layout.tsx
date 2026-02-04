import type { Metadata, Viewport } from "next";
import { Oswald, Montserrat } from "next/font/google"; // Strong, Old School Modern
import "./globals.css";

// ============================================
// FONTS - Optimized font loading
// ============================================
const oswald = Oswald({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-oswald",
});

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-montserrat",
});

// ============================================
// METADATA - SEO Configuration
// ============================================
export const metadata: Metadata = {
    metadataBase: new URL(
        process.env.NEXT_PUBLIC_SITE_URL || "https://theblackbarber.com"
    ),
    title: {
        default: "The Black Barber | Premium Barbershop Experience",
        template: "%s | The Black Barber",
    },
    description:
        "Experience the art of classic barbering. Premium cuts, hot towel shaves, and grooming services in a refined atmosphere. Book your appointment today.",
    keywords: [
        "barbershop",
        "haircut",
        "shave",
        "grooming",
        "men's haircut",
        "fade",
        "beard trim",
        "hot towel shave",
    ],
    authors: [{ name: "The Black Barber" }],
    creator: "The Black Barber",
    openGraph: {
        type: "website",
        locale: "en_US",
        siteName: "The Black Barber",
        title: "The Black Barber | Premium Barbershop Experience",
        description:
            "Experience the art of classic barbering. Premium cuts, hot towel shaves, and grooming services in a refined atmosphere.",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "The Black Barber - Premium Barbershop",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "The Black Barber | Premium Barbershop",
        description:
            "Experience the art of classic barbering. Premium cuts, hot towel shaves, and grooming services.",
        images: ["/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
    themeColor: "#0c0a09",
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
};

// ============================================
// ROOT LAYOUT
// ============================================
// ============================================
// ROOT LAYOUT
// ============================================
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BackgroundGrain } from "@/components/ui/background-animation";

import { ScrollToTop } from "@/components/ui/scroll-to-top";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${oswald.variable} ${montserrat.variable}`}>
            <body className="min-h-screen bg-neutral-950 font-body text-neutral-50 selection:bg-primary-500/30 selection:text-neutral-50">
                <SmoothScroll>
                    <ScrollToTop />
                    {/* Background Animation */}
                    <BackgroundGrain />



                    {/* Main content wrapper */}
                    <div className="flex min-h-screen flex-col relative z-10">
                        <Header />
                        <main id="main-content" className="flex-1">
                            {children}
                        </main>
                        <Footer />
                    </div>
                </SmoothScroll>
            </body>
        </html>
    );
}

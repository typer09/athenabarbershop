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
// METADATA - SEO Configuration for Local Search
// ============================================
export const metadata: Metadata = {
    metadataBase: new URL(
        process.env.NEXT_PUBLIC_SITE_URL || "https://theblackbarbershop.site"
    ),
    title: {
        default: "The Black Barbershop Da Nang | Professional Barber Shop in Da Nang",
        template: "%s | The Black Barbershop Da Nang",
    },
    description:
        "The Black Barbershop Da Nang - Premium barber shop in An Thuong, Da Nang, Vietnam. Professional men's haircut, hot towel shaving, and grooming services. Book your appointment today.",
    keywords: [
        "the black barbershop da nang",
        "black barber shop da nang",
        "barber shop da nang",
        "barbershop da nang",
        "men haircut da nang",
        "barber da nang vietnam",
        "shaving da nang",
        "men grooming da nang",
        "an thuong barber",
        "haircut vietnam",
    ],
    authors: [{ name: "The Black Barbershop Da Nang" }],
    creator: "The Black Barbershop Da Nang",
    openGraph: {
        type: "website",
        locale: "vi_VN",
        siteName: "The Black Barbershop Da Nang",
        title: "The Black Barbershop Da Nang | Professional Barber Shop in Da Nang",
        description:
            "Premium barber shop in An Thuong, Da Nang. Professional men's haircut, hot towel shaving, and grooming services.",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "The Black Barbershop Da Nang - Premium Barber Shop",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "The Black Barbershop Da Nang | Barber Shop in Da Nang",
        description:
            "Premium barber shop in Da Nang, Vietnam. Men's haircut, shaving, and grooming services.",
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
    // icons: { ... } removed to use Next.js file-based icon generation (src/app/icon.jpg)
    manifest: "/site.webmanifest",
    alternates: {
        canonical: "https://theblackbarbershop.site",
    },
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
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="vi" className={`${oswald.variable} ${montserrat.variable}`}>
            <head>
                <LocalBusinessJsonLd />
            </head>
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

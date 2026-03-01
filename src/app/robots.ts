import type { MetadataRoute } from "next";

/**
 * ROBOTS
 * Generates robots.txt for search engine crawling
 * Athena Barber Shop Da Nang
 */
export default function robots(): MetadataRoute.Robots {
    const baseUrl =
        process.env.NEXT_PUBLIC_SITE_URL || "https://theathenabarbershopshop.site";

    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/admin/", "/_next/"],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}


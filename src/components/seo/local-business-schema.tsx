/**
 * LOCAL BUSINESS SCHEMA
 * JSON-LD structured data for local business SEO
 *
 * @see https://developers.google.com/search/docs/appearance/structured-data/local-business
 */

import { siteConfig } from "@/lib/config";

export function LocalBusinessSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BarberShop",
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        address: {
            "@type": "PostalAddress",
            streetAddress: siteConfig.address.street,
            addressLocality: siteConfig.address.city,
            addressRegion: siteConfig.address.state,
            postalCode: siteConfig.address.zip,
            addressCountry: siteConfig.address.country,
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: siteConfig.geo.lat,
            longitude: siteConfig.geo.lng,
        },
        openingHoursSpecification: siteConfig.hours.map((h) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: h.day,
            opens: h.opens,
            closes: h.closes,
        })),
        image: [`${siteConfig.url}/og-image.jpg`],
        priceRange: "$$",
        // Add more fields as needed: reviews, offers, etc.
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

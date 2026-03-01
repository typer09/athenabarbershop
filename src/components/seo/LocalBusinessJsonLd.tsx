"use client";

import { siteConfig } from "@/lib/config";

/**
 * LocalBusiness JSON-LD Structured Data
 * Helps Google understand this is a local barber business in Da Nang
 * @see https://schema.org/BarberShop
 */
export function LocalBusinessJsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BarberShop",
        "@id": "https://theathenabarbershopshop.site/#barbershop",
        name: "Athena Barber Shop Da Nang",
        alternateName: ["Athena Barber Shop", "Athena Barber Shop Da Nang"],
        description:
            "Premium barber shop in Hai Chau, Da Nang, Vietnam. Professional men's haircut, hot towel shaving, and grooming services.",
        url: "https://theathenabarbershopshop.site",
        telephone: siteConfig.contact.phoneIntl,
        email: siteConfig.contact.email,
        image: "https://theathenabarbershopshop.site/og-image.jpg",
        logo: "https://theathenabarbershopshop.site/images/logo.png",
        priceRange: "$$",
        currenciesAccepted: "VND",
        paymentAccepted: "Cash, Credit Card",
        address: {
            "@type": "PostalAddress",
            streetAddress: siteConfig.address.street,
            addressLocality: siteConfig.address.city,
            addressRegion: siteConfig.address.state,
            postalCode: siteConfig.address.zip,
            addressCountry: "VN",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: siteConfig.geo.lat,
            longitude: siteConfig.geo.lng,
        },
        areaServed: [
            {
                "@type": "City",
                name: "Da Nang",
                "@id": "https://www.wikidata.org/wiki/Q31737",
            },
            {
                "@type": "Neighborhood",
                name: "Hai Chau",
                containedInPlace: {
                    "@type": "City",
                    name: "Da Nang",
                },
            },
        ],
        openingHoursSpecification: siteConfig.hours.map((h) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
            ],
            opens: h.opens.replace(/^T/, ""),
            closes: h.closes.replace(/^T/, ""),
        })),
        sameAs: [siteConfig.social.facebook],
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Barber Services",
            itemListElement: siteConfig.services
                .filter((s) => s.price > 0)
                .map((service) => ({
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: service.name,
                        description: service.description,
                    },
                    price: service.price,
                    priceCurrency: "VND",
                })),
        },
        founder: {
            "@type": "Person",
            name: siteConfig.contact.founder,
            sameAs: siteConfig.contact.founderProfile,
        },
        // Note: aggregateRating removed - requires real review data from Google Business Profile
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}

/**
 * SITE CONFIGURATION
 * Central configuration for SEO, contact info, and business details
 *
 * Update these values with actual business information
 */

export const siteConfig = {
    name: "The Black Barbershop Da Nang",
    short_name: "The Black Barber",
    description:
        "Premium barbering in An Thuong, Da Nang. Precision fades, cold towel shaves, and the distinct Innoir atmosphere.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://theblackbarber.com",

    // Contact Information
    contact: {
        phone: "036 969 2729", // Display format
        phoneIntl: "+84 36 969 2729", // Href format
        phoneE164: "84369692729", // WhatsApp format
        email: "theblackbabershop@gmail.com",
        facebook: "https://www.facebook.com/profile.php?id=61583002566642",
        founder: "Mai Duc",
        founderProfile: "https://www.facebook.com/mai.uc.770348"
    },

    // Physical Address
    address: {
        street: "32 b5 Khu K38, An Thượng 39, Bắc Mỹ Phú",
        city: "Ngũ Hành Sơn",
        state: "Da Nang",
        zip: "556920",
        country: "Vietnam",
        full: "32 b5 Khu K38, An Thượng 39, Bắc Mỹ Phú, Ngũ Hành Sơn, Đà Nẵng, Việt Nam",
        // Using valid iframe embed URL for the address
        googleMap: "https://maps.google.com/maps?q=32%20b5%20Khu%20K38%2C%20An%20Th%C6%B0%E1%BB%A3ng%2039%2C%20Ng%C5%A9%20H%C3%A0nh%20S%C6%A1n%2C%20%C4%90%C3%A0%20N%E1%BA%B5ng&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },

    // Geolocation (for maps and local SEO)
    geo: {
        lat: 16.0544,
        lng: 108.2022,
    },

    // Business Hours
    hours: [
        { day: "Everyday", opens: "09:00", closes: "20:00" },
    ],

    // Social Media Links
    social: {
        facebook: "https://www.facebook.com/profile.php?id=61583002566642",
        instagram: "#",
        whatsapp: "https://wa.me/84369692729",
    },

    // Navigation Links
    navLinks: [
        { href: "/", label: "Home" },
        { href: "/about-us", label: "About Us" },
        { href: "/services", label: "Services & Price" },
        { href: "/gallery", label: "Gallery" },
        { href: "/contact", label: "Contact" },
    ],

    // Services List - OFFICIAL PRICING
    services: [
        {
            id: "haircut",
            name: "Haircut",
            description: "Haircut + Shampoo + Styling",
            price: 150000,
            category: "Core"
        },
        {
            id: "shaving",
            name: "Shaving",
            description: "Professional calmness",
            price: 80000,
            category: "Core"
        },
        {
            id: "combo",
            name: "Combo",
            description: "Haircut + Shaving + Shampoo + Styling",
            price: 200000,
            category: "Combo"
        },
        {
            id: "vip",
            name: "VIP Combo",
            description: "Haircut + Cold Towel Shave + Shampoo + Styling",
            price: 250000,
            category: "Combo"
        },
        {
            id: "on-location",
            name: "Private Grooming",
            description: "On-location haircut service at resorts/hotels (Upon Request)",
            price: 0, // Contact for price
            category: "Private"
        }
    ]
} as const;

export type SiteConfig = typeof siteConfig;

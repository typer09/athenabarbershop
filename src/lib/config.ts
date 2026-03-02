/**
 * SITE CONFIGURATION
 * Central configuration for SEO, contact info, and business details
 *
 * Update these values with actual business information
 */

export const siteConfig = {
    name: "Athena Barber Shop Da Nang",
    short_name: "Athena Barber Shop",
    description:
        "Premium barbering in Hai Chau, Da Nang. Precision fades, cold towel shaves, and the distinct Innoir atmosphere.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://theathenabarbershopshop.site",

    // Contact Information
    contact: {
        phone: "0 78 502 8805", // Display format
        phoneIntl: "+84 78 502 8805", // Href format
        phoneE164: "84785028805", // WhatsApp format
        email: "athenabarbershop89hungvuong@gmail.com",
        facebook: "https://www.facebook.com/profile.php?id=100083368424144",
        founder: "Duy Phong (Spinn)",
        founderProfile: "https://www.facebook.com/phongxoay97"
    },

    // Physical Address
    address: {
        street: "89 Hùng Vương",
        city: "Hải Châu",
        state: "Da Nang",
        zip: "550000",
        country: "Vietnam",
        full: "89 Hùng Vương, Hải Châu, Đà Nẵng 550000, Vietnam",
        googleMapLink: "https://maps.app.goo.gl/EK2ahKCfz7FfHtKY9",
        googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1917.6!2d108.2191642!3d16.0682212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142190d421a7a63%3A0xed79659dc82c9ae!2sATHENA%20BARBER%20SHOP!5e0!3m2!1sen!2s!4v1709000000000!5m2!1sen!2s",
    },

    // Geolocation (for maps and local SEO)
    geo: {
        lat: 16.0682212,
        lng: 108.2191642,
    },

    // Business Hours
    hours: [
        { day: "Everyday", opens: "09:00", closes: "19:30" },
    ],

    // Social Media Links
    social: {
        facebook: "https://www.facebook.com/profile.php?id=100083368424144",
        instagram: "#",
        whatsapp: "https://wa.me/84785028805",
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
            description: "Haircut + Hot Towel Shave + Shampoo + Styling",
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

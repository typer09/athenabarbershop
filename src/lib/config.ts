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
        // ── CRAFT ──
        {
            id: "craft",
            name: "CRAFT",
            price: 150000,
            category: "Craft",
            includes: [
                "Welcome drink",
                "Consultation",
                "Haircut",
                "Hair wash",
                "Using wax/pomade",
                "Styling",
            ],
        },
        // ── BEARD GROOM ──
        {
            id: "beard-groom",
            name: "BEARD GROOM",
            price: 200000,
            category: "Beard Groom",
            includes: [
                "Personal groom advice",
                "Apply hot towel",
                "Shaving – foam",
                "Face/Hairline shave",
                "Beard trim",
                "Apply cold towel",
                "Using alum block",
                "Shaving cream",
            ],
        },
        // ── HEAD SHAVE ──
        {
            id: "head-shave",
            name: "HEAD SHAVE",
            price: 200000,
            category: "Head Shave",
            includes: [
                "Apply hot towel",
                "Head shave",
                "Apply cold towel",
            ],
        },
        // ── ELITE ──
        {
            id: "elite",
            name: "ELITE",
            price: 200000,
            category: "Elite",
            includes: [
                "Welcome drink",
                "Consultation",
                "Haircut",
                "Face wash – massage",
                "Face mask",
                "Hair washing",
                "Head massage",
                "Neck & shoulder massage",
                "Using wax/pomade",
                "Styling",
            ],
        },
        // ── LUXE ──
        {
            id: "luxe",
            name: "LUXE",
            price: 300000,
            category: "Luxe",
            includes: [
                "Welcome drink",
                "Consultation",
                "Haircut",
                "Face wash – massage",
                "Skin exfoliation",
                "Nose acne clean",
                "Face mask",
                "Hair washing",
                "Head massage",
                "Neck & shoulder massage",
                "Using wax/pomade",
                "Styling",
            ],
        },
        // ── THERAPY HERBAL WASH ──
        {
            id: "therapy-herbal-wash",
            name: "THERAPY HERBAL WASH",
            price: 200000,
            category: "Therapy",
            subtitle: "Elevate your senses",
            includes: [
                "Welcome Herbal Tea: A warm cup of herbal tea to calm the senses and detoxify.",
                "Warm Herbal Eye Compress: Gently soothes tired eyes, reduces tension, and promotes a sense of deep calm.",
                "Makeup Removal & Facial Cleansing: A gentle cleanse to prepare the skin for nourishing care.",
                "Facial Massage & Exfoliation: Revives dull skin and releases facial tension for a radiant glow.",
                "Nourishing Facial Mask: Restores moisture and revitalizes the skin using natural herbal blends.",
                "First Hair Wash & Scalp Exfoliation: Detoxifies the scalp, stimulates follicles, and refreshes the roots.",
                "Second Hair Wash & Deep Conditioning: Thorough cleansing followed by a nutrient-rich mask to restore hair health and shine.",
                "Head Meridian Massage: Focuses on pressure points to relieve mental fatigue and improve circulation.",
                "Deep Neck – Shoulder – Back Massage: Relieves muscle tension, boosts blood flow, and restores energy balance.",
            ],
        },
        // ── EXTRA: Styling ──
        {
            id: "extra-styling",
            name: "Styling",
            price: 50000,
            category: "Extra Service",
            includes: [],
        },
        {
            id: "extra-nose-wax",
            name: "Nose wax",
            price: 70000,
            category: "Extra Service",
            includes: [],
        },
        // ── EXTRA: Cleaning ──
        {
            id: "extra-ear-cleaning",
            name: "Ear cleaning",
            price: 70000,
            category: "Cleaning",
            includes: [],
        },
        {
            id: "extra-face-mask",
            name: "Face mask",
            price: 50000,
            category: "Cleaning",
            includes: [],
        },
        {
            id: "extra-nose-acne",
            name: "Nose acne clean",
            price: 50000,
            category: "Cleaning",
            includes: [],
        },
        // ── EXTRA: Hair Wash ──
        {
            id: "extra-hairwash-man",
            name: "Hair Wash – Man",
            price: 50000,
            category: "Hair Wash",
            includes: [],
        },
        {
            id: "extra-hairwash-women",
            name: "Hair Wash – Women",
            price: 80000,
            category: "Hair Wash",
            includes: [],
        },
        // ── EXTRA: Massage ──
        {
            id: "extra-massage-face",
            name: "Face massage",
            price: 50000,
            category: "Massage",
            includes: [],
        },
        {
            id: "extra-massage-head",
            name: "Head massage",
            price: 50000,
            category: "Massage",
            includes: [],
        },
        {
            id: "extra-massage-neck",
            name: "Neck & shoulder massage",
            price: 80000,
            category: "Massage",
            includes: [],
        },
    ]
} as const;

export type SiteConfig = typeof siteConfig;

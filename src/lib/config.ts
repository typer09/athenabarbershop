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
        { href: "/products", label: "Products" },
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
                "Welcome Herbal Tea",
                "Warm Herbal Eye Compress",
                "Makeup Removal & Facial Cleansing",
                "Facial Massage & Exfoliation",
                "Nourishing Facial Mask",
                "First Hair Wash & Scalp Exfoliation",
                "Second Hair Wash & Deep Conditioning",
                "Head Meridian Massage",
                "Deep Neck – Shoulder – Back Massage",
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
        // ── PERM ──
        {
            id: "perm-basic",
            name: "Basic Perm",
            price: 400000,
            displayPrice: "400.000 - 450.000",
            category: "Perm",
            subtitle: "Sidepart, Layer, Undercut...",
            includes: [],
        },
        {
            id: "perm-premlock",
            name: "Premlock",
            price: 650000,
            category: "Perm",
            includes: [],
        },
        {
            id: "perm-advanced",
            name: "Advanced Perm",
            price: 400000,
            displayPrice: "400.000 - 450.000",
            category: "Perm",
            subtitle: "Curly, Ruffled, Crimped...",
            includes: [],
        },
        {
            id: "perm-straighten",
            name: "Straighten Hair",
            price: 400000,
            category: "Perm",
            includes: [],
        },
        // ── DYED ──
        {
            id: "dyed-base-color",
            name: "Base Color",
            price: 400000,
            displayPrice: "400.000 - 450.000",
            category: "Dyed",
            includes: [],
        },
        {
            id: "dyed-black",
            name: "Black Dye",
            price: 300000,
            category: "Dyed",
            includes: [],
        },
        {
            id: "dyed-bleach",
            name: "Bleach",
            price: 250000,
            displayPrice: "250.000 - 350.000",
            category: "Dyed",
            subtitle: "Each",
            includes: [],
        },
        {
            id: "dyed-platinum-bleach",
            name: "Platinum Bleach",
            price: 700000,
            category: "Dyed",
            includes: [],
        },
        // ── HAIRDRESS ──
        {
            id: "hairdress-collagen-steam",
            name: "Collagen Steam",
            price: 300000,
            category: "Hairdress",
            includes: [],
        },
        {
            id: "hairdress-down-perm",
            name: "Down Perm",
            price: 200000,
            category: "Hairdress",
            includes: [],
        },
        {
            id: "hairdress-line-dye",
            name: "Line Dye",
            price: 350000,
            category: "Hairdress",
            includes: [],
        },
    ]
} as const;

export type SiteConfig = typeof siteConfig;

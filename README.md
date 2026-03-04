# The Black Barber - Landing Page

A premium barbershop landing pa ge built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

## 🏗️ Project Structure

```
theblackbarber/
├── public/                    # Static assets
│   ├── site.webmanifest      # PWA manifest
│   ├── favicon.ico           # Favicon (add your own)
│   ├── og-image.jpg          # OpenGraph image (add 1200x630)
│   └── images/               # Image assets
│       ├── gallery/          # Gallery photos
│       ├── team/             # Barber portraits
│       └── hero/             # Hero section images
│
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── layout.tsx        # Root layout with fonts & metadata
│   │   ├── page.tsx          # Homepage (landing page)
│   │   ├── globals.css       # Global styles & Tailwind layers
│   │   ├── sitemap.ts        # Dynamic sitemap.xml
│   │   ├── robots.ts         # Dynamic robots.txt
│   │   ├── not-found.tsx     # 404 page
│   │   ├── error.tsx         # Error boundary
│   │   ├── loading.tsx       # Loading state
│   │   └── (marketing)/      # Route group for pages
│   │       ├── about/        # About page
│   │       ├── services/     # Services page
│   │       ├── gallery/      # Gallery page
│   │       └── contact/      # Contact page
│   │
│   ├── components/            # React components
│   │   ├── index.ts          # Barrel export
│   │   ├── layout/           # Layout primitives
│   │   │   ├── header.tsx    # Navigation header
│   │   │   ├── footer.tsx    # Site footer
│   │   │   └── mobile-nav.tsx # Mobile menu
│   │   ├── ui/               # Base UI components
│   │   │   └── button.tsx    # Button with variants
│   │   ├── sections/         # Page sections
│   │   │   ├── hero.tsx      # Hero section
│   │   │   ├── services.tsx  # Services grid
│   │   │   └── ...           # More sections
│   │   └── seo/              # SEO components
│   │       └── local-business-schema.tsx
│   │
│   ├── lib/                   # Utilities & helpers    
│   │   ├── utils.ts          # cn(), formatCurrency()
│   │   └── config.ts         # Site configuration
│   │
│   └── types/                 # TypeScript definitions
│       └── index.ts          # Service, Barber, etc.
│
├── package.json               # Dependencies
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json              # TypeScript config
├── next.config.ts             # Next.js config
└── .env.example               # Environment template
```

## 🎨 Design System

### Colors
- **Primary (Gold):** `#d4a853` - Accent color for CTAs and highlights
- **Neutral:** Warm grays from `#fafafa` to `#0c0a09`
- **Background:** Dark theme (`neutral-950`)

### Typography
- **Headings:** Playfair Display (serif)
- **Body:** Inter (sans-serif)

### Animations
Ready for Framer Motion / GSAP integration.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📋 SEO Features

- ✅ Dynamic metadata (title, description, OpenGraph)
- ✅ Twitter cards
- ✅ Sitemap generation (`/sitemap.xml`)
- ✅ Robots.txt generation (`/robots.txt`)
- ✅ JSON-LD LocalBusiness schema
- ✅ Semantic HTML structure
- ✅ Accessibility (skip links, focus states)

## 🔧 Configuration

Edit `src/lib/config.ts` to update:
- Business name and description
- Contact information
- Address and coordinates
- Business hours
- Social media links

## 📦 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion (optional)
- **Icons:** Lucide React

## 🛠️ Future Extensions

- [ ] Booking system (Supabase integration)
- [ ] Contact form (with validation)
- [ ] Gallery with lightbox
- [ ] Testimonials carousel
- [ ] Google Maps integration

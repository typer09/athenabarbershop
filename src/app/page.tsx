import { Hero } from "@/components/sections/hero";
import { Bio } from "@/components/sections/bio";
import { GallerySlider } from "@/components/sections/gallery-slider";
import { Contact } from "@/components/sections/contact";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { ToolLoop } from "@/components/sections/tool-loop";
import { BookingCta } from "@/components/sections/booking-cta";
import { getGalleryImages } from "@/lib/gallery-server";

export default async function HomePage() {
    const galleryImages = await getGalleryImages();

    return (
        <>
            {/* 1. HERO — full screen */}
            <Hero />

            {/* 2. BIO / ABOUT — Classic Barber Craft */}
            <div id="about">
                <Bio />
            </div>

            {/* 3. TOOLS LOOP — brand ambient strip */}
            <ToolLoop />

            {/* 4. SERVICES & PRICE */}
            <Services />

            {/* 5. TESTIMONIALS */}
            <Testimonials />

            {/* 6. GALLERY SLIDER */}
            <GallerySlider images={galleryImages} />

            {/* 6. BOOKING CTA */}
            <BookingCta />

            {/* 7. CONTACT / MAP */}
            <div id="contact">
                <Contact />
            </div>
        </>
    );
}

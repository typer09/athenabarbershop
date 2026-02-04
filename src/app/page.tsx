import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { Bio } from "@/components/sections/bio";
import { GallerySlider } from "@/components/sections/gallery-slider";
import { Contact } from "@/components/sections/contact";
import { Services } from "@/components/sections/services";
import { ToolLoop } from "@/components/sections/tool-loop";
import { getGalleryImages } from "@/lib/gallery-server";
import { siteConfig } from "@/lib/config";

export default async function HomePage() {
    const galleryImages = await getGalleryImages();

    return (
        <>
            <Hero />

            {/* MAI DUC BIO SECTION */}
            <div id="about">
                <Bio />
            </div>

            {/* TOOLS / PARTNERS LOOP */}
            <ToolLoop />

            {/* SERVICES LIST SECTION */}
            <Services />

            <GallerySlider images={galleryImages} />

            {/* CONTACT SECTION ON HOME */}
            <div id="contact">
                <Contact />
            </div>
        </>
    );
}

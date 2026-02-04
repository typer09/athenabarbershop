/**
 * GALLERY UTILITY
 * Reads files from public/images/gallery and returns a list for the gallery component
 */

import fs from "fs";
import path from "path";
import { type GalleryImage, type GalleryCategory } from "@/components/sections/gallery";

export async function getGalleryImages(): Promise<GalleryImage[]> {
    const galleryDir = path.join(process.cwd(), "public/images/gallery");
    const categories: GalleryCategory[] = ["fade", "classic", "crop", "beard", "combo"];
    const images: GalleryImage[] = [];

    for (const cat of categories) {
        const catDir = path.join(galleryDir, cat);
        // Check if directory exists
        if (fs.existsSync(catDir)) {
            const files = fs.readdirSync(catDir);

            files.forEach(file => {
                if (file.match(/\.(jpg|jpeg|png|webp)$/i)) {
                    images.push({
                        src: `/images/gallery/${cat}/${file}`,
                        category: cat,
                        alt: `${cat} style haircut - The Black Barber Da Nang`,
                    });
                }
            });
        }
    }

    // Shuffle array for better mix
    return images.sort(() => Math.random() - 0.5);
}

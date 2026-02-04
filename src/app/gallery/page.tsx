import { Gallery } from "@/components/sections/gallery";
import { getGalleryImages } from "@/lib/gallery-server";

export default async function GalleryPage() {
    const images = await getGalleryImages();

    return (
        <main className="min-h-screen pt-20 bg-neutral-950">
            <Gallery images={images} />
        </main>
    );
}

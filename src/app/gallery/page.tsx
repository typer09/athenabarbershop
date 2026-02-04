import { Gallery } from "@/components/sections/gallery";
import { getGalleryImages } from "@/lib/gallery-server";
import { PageBackButton } from "@/components/ui/page-back-button";

export default async function GalleryPage() {
    const images = await getGalleryImages();

    return (
        <main className="min-h-screen pt-20 bg-neutral-950">
            <PageBackButton />
            <Gallery images={images} />
        </main>
    );
}

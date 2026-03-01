import type { Metadata } from "next";
import { Gallery } from "@/components/sections/gallery";
import { getGalleryImages } from "@/lib/gallery-server";
import { PageBackButton } from "@/components/ui/page-back-button";

export const metadata: Metadata = {
    title: "Gallery | Athena Barber Shop Da Nang",
    description:
        "View our work at Athena Barber Shop Da Nang. Precision haircuts, fades, and men's grooming in An Thuong, Da Nang, Vietnam.",
    openGraph: {
        title: "Our Work | Athena Barber Shop Da Nang",
        description: "Haircut gallery showcasing our precision cuts and styling work.",
    },
};

export default async function GalleryPage() {
    const images = await getGalleryImages();

    return (
        <main className="min-h-screen pt-20 bg-neutral-950">
            <PageBackButton />
            <Gallery images={images} />
        </main>
    );
}


"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Types
export type GalleryCategory = "all" | "fade" | "classic" | "crop" | "beard" | "combo";

export interface GalleryImage {
    src: string;
    category: GalleryCategory;
    alt: string;
}

interface GalleryProps {
    images: GalleryImage[];
}

const categories: { id: GalleryCategory; label: string }[] = [
    { id: "all", label: "All Work" },
    { id: "fade", label: "Fades" },
    { id: "classic", label: "Classic" },
    { id: "crop", label: "Crops" },
    { id: "beard", label: "Beards" },
    { id: "combo", label: "Combos" },
];

export function Gallery({ images }: GalleryProps) {
    const [filter, setFilter] = useState<GalleryCategory>("all");
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const filteredImages = images.filter(
        (img) => filter === "all" || img.category === filter
    );

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImage === null) return;
        const nextIndex =
            selectedImage + 1 >= filteredImages.length ? 0 : selectedImage + 1;
        setSelectedImage(nextIndex);
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImage === null) return;
        const prevIndex =
            selectedImage - 1 < 0 ? filteredImages.length - 1 : selectedImage - 1;
        setSelectedImage(prevIndex);
    };

    return (
        <section id="gallery" className="section-padding bg-neutral-950">
            <div className="section-container">
                <div className="mb-12 text-center">
                    <h2 className="heading-lg mb-4 text-neutral-50">Our Masterpieces</h2>
                    <p className="text-neutral-400">Precision in every detail</p>
                </div>

                {/* Filter Tabs */}
                <div className="mb-12 flex flex-wrap justify-center gap-4">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setFilter(cat.id)}
                            className={cn(
                                "relative rounded-full px-6 py-2 text-sm font-medium transition-colors",
                                filter === cat.id
                                    ? "text-neutral-950"
                                    : "text-neutral-400 hover:text-neutral-200"
                            )}
                        >
                            {filter === cat.id && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 rounded-full bg-primary-500"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{cat.label}</span>
                        </button>
                    ))}
                </div>

                {/* MASONRY GRID */}
                <motion.div
                    layout
                    className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
                >
                    <AnimatePresence>
                        {filteredImages.map((img, index) => (
                            <motion.div
                                layout
                                key={img.src}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-lg bg-neutral-900"
                                onClick={() => setSelectedImage(index)}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0 md:grayscale"
                                    sizes="(max-width: 768px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* LIGHTBOX */}
            <AnimatePresence>
                {selectedImage !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
                        onClick={() => setSelectedImage(null)}
                    >
                        {/* Controls */}
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute right-4 top-4 z-50 p-2 text-neutral-400 hover:text-white"
                        >
                            <X size={32} />
                        </button>

                        <button
                            onClick={handlePrev}
                            className="absolute left-4 z-50 rounded-full bg-neutral-800/50 p-3 text-white backdrop-blur-sm transition-colors hover:bg-primary-500 hover:text-neutral-950 md:left-8"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <button
                            onClick={handleNext}
                            className="absolute right-4 z-50 rounded-full bg-neutral-800/50 p-3 text-white backdrop-blur-sm transition-colors hover:bg-primary-500 hover:text-neutral-950 md:right-8"
                        >
                            <ChevronRight size={24} />
                        </button>

                        {/* Image */}
                        <motion.div
                            key={selectedImage}
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -50, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="relative h-full w-full max-w-5xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative h-full w-full">
                                <Image
                                    src={filteredImages[selectedImage].src}
                                    alt={filteredImages[selectedImage].alt}
                                    fill
                                    className="rounded-lg object-contain"
                                    priority
                                    quality={90}
                                />
                                {/* Caption */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-sm text-white backdrop-blur-md">
                                    {filteredImages[selectedImage].category.toUpperCase()} Style
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

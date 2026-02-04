"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { StrongButton } from "@/components/ui/strong-button";

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
            selectedImage + 1 >= images.length ? 0 : selectedImage + 1;
        setSelectedImage(nextIndex);
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImage === null) return;
        const prevIndex =
            selectedImage - 1 < 0 ? images.length - 1 : selectedImage - 1;
        setSelectedImage(prevIndex);
    };

    return (
        <section id="gallery" className="section-padding bg-neutral-950 min-h-screen flex flex-col">
            <div className="section-container flex-1">
                <div className="mb-16 text-center">
                    <p className="text-primary-500 font-bold tracking-widest uppercase mb-4 text-sm">Portfolio</p>
                    <h2 className="heading-xl text-neutral-50 mb-6">Masterpieces <br /><span className="text-neutral-500">In The Dark</span></h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto font-body text-lg">
                        Precision in every detail. Explore our collection of refined cuts and styles.
                    </p>
                </div>

                {/* MASONRY GRID */}
                <motion.div
                    layout
                    className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 mb-24"
                >
                    <AnimatePresence>
                        {images.map((img, index) => (
                            <motion.div
                                layout
                                key={index}
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

                {/* NEXT GUEST CTA */}
                {/* NEXT GUEST CTA - Strong & Clean Design */}
                <div className="relative overflow-hidden bg-neutral-900 border-y border-neutral-800 py-24 text-center mb-12 group">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/20 via-neutral-900/0 to-neutral-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                    <div className="relative z-10 flex flex-col items-center gap-8">
                        <h3 className="flex flex-wrap justify-center items-baseline gap-x-3 text-6xl md:text-8xl font-heading font-black text-white uppercase tracking-tighter leading-none">
                            <span>Next</span>
                            <span className="text-transparent text-stroke-1 text-stroke-white transition-all duration-500 group-hover:text-white group-hover:text-stroke-0">Guest?</span>
                        </h3>
                        <p className="text-neutral-400 max-w-lg text-xl font-light leading-relaxed">
                            Your transformation awaits. <br />
                            <span className="text-primary-500 font-bold">Claim your legacy.</span>
                        </p>
                        <Link href="/contact">
                            <StrongButton className="h-16 px-12 text-lg tracking-widest">
                                BOOK APPOINTMENT
                            </StrongButton>
                        </Link>
                    </div>
                </div>
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
                                    src={images[selectedImage].src}
                                    alt={images[selectedImage].alt}
                                    fill
                                    className="rounded-lg object-contain"
                                    priority
                                    quality={90}
                                />
                                {/* Caption */}
                                {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-sm text-white backdrop-blur-md">
                                    {images[selectedImage].category.toUpperCase()} Style
                                </div> */}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

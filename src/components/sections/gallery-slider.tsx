"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
import { StrongButton } from "@/components/ui/strong-button";

interface GalleryImage {
    src: string;
    alt: string;
    category: string;
}

interface GallerySliderProps {
    images: GalleryImage[];
}

export function GallerySlider({ images }: GallerySliderProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);

    // Limit to 10 images for the slider to keep it performant
    const sliderImages = images.slice(0, 8);

    const [dragConstraint, setDragConstraint] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const cardWidth = window.innerWidth >= 768 ? 350 : 280;
            const gap = 24;
            const totalContentWidth = sliderImages.length * (cardWidth + gap);
            // We want to drag left until the last item is visible on the right. 
            // Logic: Total Width - Viewport. 
            // Adding a buffer for safety and "overscroll" feel.
            const maxDrag = -((totalContentWidth) - window.innerWidth + 100);
            setDragConstraint(Math.min(0, maxDrag));
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [sliderImages.length]);

    return (
        <section className="relative bg-neutral-950 py-24 overflow-hidden border-t border-neutral-900">
            {/* Header */}
            <div className="section-container mb-12 flex items-end justify-between">
                <div>
                    <h2 className="heading-lg text-neutral-50 mb-2">Our Latest Work</h2>
                    <p className="text-neutral-400">Precision cuts in every detail</p>
                </div>
                <Link
                    href="/gallery"
                    className="group hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary-500 hover:text-white transition-colors"
                >
                    View All Grid
                    <ArrowRight className="transition-transform group-hover:translate-x-1" size={16} />
                </Link>
            </div>

            {/* DRAG SLIDER */}
            <div className="relative w-full cursor-grab active:cursor-grabbing pl-[5vw] md:pl-[max(0px,calc((100vw-1200px)/2+2rem))]">
                <motion.div
                    ref={sliderRef}
                    className="flex gap-6"
                    drag="x"
                    dragConstraints={{ right: 0, left: dragConstraint }}
                    whileTap={{ cursor: "grabbing" }}
                >
                    {sliderImages.map((img, index) => (
                        <motion.div
                            key={index}
                            className="relative aspect-[3/4] w-[280px] md:w-[350px] shrink-0 overflow-hidden rounded-lg bg-neutral-900"
                            whileHover={{ scale: 0.98 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-110 pointer-events-none" // pointer-events-none prevents dragging image ghost
                                sizes="(max-width: 768px) 280px, 350px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                            <div className="absolute bottom-4 left-4">
                                <span className="text-xs font-bold uppercase tracking-widest text-white/80 filter backdrop-blur-sm bg-black/20 px-2 py-1 rounded">
                                    {img.category}
                                </span>
                            </div>
                        </motion.div>
                    ))}

                    {/* "See More" Card at end of slider */}
                    <div className="relative aspect-[3/4] w-[280px] md:w-[350px] shrink-0 flex items-center justify-center">
                        <Link href="/gallery" className="w-full">
                            <StrongButton variant="outline" className="w-full h-full aspect-[3/4] flex-col gap-4 text-xl">
                                <span>VIEW FULL GALLERY</span>
                                <ArrowRight size={24} />
                            </StrongButton>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Mobile Bottom Link */}
            <div className="section-container mt-8 md:hidden">
                <Link href="/gallery">
                    <StrongButton variant="outline" className="w-full h-14 justify-between px-6">
                        VIEW FULL GALLERY
                        <ChevronRight size={18} />
                    </StrongButton>
                </Link>
            </div>
        </section>
    );
}

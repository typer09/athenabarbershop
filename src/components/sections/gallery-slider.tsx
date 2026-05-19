"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    motion,
    useAnimationFrame,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
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
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // 1. DUPLICATE IMAGES FOR INFINITE LOOP
    // We need enough copies to cover the screen width + buffer.
    // 4 copies should be plenty for standard screens.
    const loopImages = [...images, ...images, ...images, ...images];

    // 2. MOTION VALUES
    const baseX = useMotionValue(0);
    const scrollX = useSpring(baseX, {
        stiffness: 400,
        damping: 90,
    });

    const autoScrollSpeed = 0.5; // Pixels per frame (approx)
    const isDragging = useRef(false);
    const directionFactor = useRef<number>(1); // 1 = moving left (standard)

    // 3. ANIMATION FRAME LOOP
    useAnimationFrame((t, delta) => {
        if (!isDragging.current) {
            // Move purely by time
            let moveBy = directionFactor.current * autoScrollSpeed * (delta / 16);

            // Move LEFT by default (so subtract)
            // But we actually want to move the container left, which means x goes negative.
            // So moveBy should be negative.

            baseX.set(baseX.get() - moveBy);
        }
    });

    // 4. WRAPPING LOGIC & RESIZE
    // We need to know the width of one "set" of images to wrap correctly.
    // This is a bit tricky with responsive widths. 
    // Simplified approach: Render a long strip, and when we hit a threshold, jump back.

    // Instead of complex measuring, let's use the 'percent' approach or simple CSS marquee?
    // User wants "interactive".
    // Best way: useMotionValue driving a transform.

    // Helper to wrap the value.
    const x = useTransform(baseX, (v) => {
        // Assume one set width. 
        // We'll calculate this dynamically or just assume a large enough wrap point?
        // Let's rely on a large negative number and modulo? 
        // Framer Motion's `wrap` utility is good but we need the width.

        // Let's try to measure width on mount/resize.
        if (!scrollContainerRef.current) return `${v}px`;

        const totalWidth = scrollContainerRef.current.scrollWidth / 4; // Since we quadrupled
        const wrapped = ((v % totalWidth) - totalWidth) % totalWidth;
        return `${wrapped}px`;
    });

    return (
        <section className="relative bg-neutral-950 py-16 sm:py-24 overflow-hidden border-t border-neutral-900">
            {/* Header */}
            <div className="section-container mb-8 sm:mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                    <h2 className="heading-lg text-neutral-50 mb-2">Our Latest Work</h2>
                    <p className="text-neutral-400 text-sm sm:text-base">Precision cuts in every detail</p>
                </div>
                <Link
                    href="/gallery"
                    className="group hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary-500 hover:text-white transition-colors"
                >
                    View All Grid
                    <ArrowRight className="transition-transform group-hover:translate-x-1" size={16} />
                </Link>
            </div>

            {/* INTERACTIVE MARQUEE */}
            <div
                ref={containerRef}
                className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing"
            >
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />

                <motion.div
                    ref={scrollContainerRef}
                    className="flex gap-6 w-max pl-4" // w-max to force horizontal
                    style={{ x }}
                    drag="x"
                    dragConstraints={{ left: -10000, right: 10000 }} // Effectively infinite drag
                    onDragStart={() => {
                        isDragging.current = true;
                    }}
                    onDragEnd={(e, info) => {
                        isDragging.current = false;
                        // Optional: Add momentum to baseX based on drag velocity?
                        // For now simple resume is safer to avoid glitches.
                    }}
                    onDrag={(e, info) => {
                        // We manually update baseX to follow the drag
                        // Actually `drag` prop handles the visual movement on top of `x`?
                        // No, if we bind `style={{ x }}`, drag might fight it.
                        // BETTER: Don't use `drag` prop if we control X manually?
                        // OR: use drag to update baseX.
                        baseX.set(baseX.get() + info.delta.x);
                    }}
                >
                    {loopImages.map((img, index) => (
                        <div
                            key={index}
                            className="relative aspect-[3/4] w-[220px] sm:w-[280px] md:w-[350px] shrink-0 overflow-hidden rounded-lg bg-[#1A1A1A] group ring-1 ring-transparent hover:ring-primary-500 transition-all duration-[250ms]"
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                                sizes="(max-width: 768px) 280px, 350px"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300" />
                        </div>
                    ))}
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

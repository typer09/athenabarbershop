"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // INTRO ANIMATION
            const tl = gsap.timeline();

            // Background image reveal
            tl.from(imageRef.current, {
                scale: 1.1,
                opacity: 0,
                duration: 1.5,
                ease: "power2.out",
            });

            // Title Reveal: opacity 0 -> 1, translateY 20px -> 0, duration 0.8s, delay 0.2s, easing ease-out
            tl.fromTo(
                ".hero-title-reveal",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: "power2.out", stagger: 0.1 },
                0
            );

            // Divider Animation: scaleX 0 -> 1, duration 0.6s, delay 0.4s
            tl.fromTo(
                ".hero-divider-line",
                { scaleX: 0 },
                { scaleX: 1, duration: 0.6, delay: 0.4, ease: "power2.out", transformOrigin: "center" },
                0
            );

            // Other Texts
            tl.fromTo(
                ".hero-other-reveal",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, delay: 0.5, ease: "power2.out", stagger: 0.1 },
                0
            );

            // SCROLL PARALLAX (ratio approx 0.5)
            gsap.to(imageRef.current, {
                yPercent: 50,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });

            gsap.to(textRef.current, {
                yPercent: -20,
                opacity: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden"
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div ref={imageRef} className="relative h-full w-full">
                    {/* Hero overlay gradient */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
                    <Image
                        src="/images/hero/hero-bg.jpg"
                        alt="Athena Barber Shop Interior"
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                    />
                </div>
            </div>

            {/* Subtle copper ambient glow */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary-500/8 blur-[160px]" />
            </div>

            {/* Content */}
            <div ref={textRef} className="section-container relative z-20 w-full pt-20">
                <div className="flex flex-col items-center text-center">

                    {/* Small label */}
                    <p className="hero-other-reveal font-body text-xs font-bold tracking-[0.3em] text-primary-500 uppercase mb-6">
                        Est. 2022 Hoi An / 2025 Da Nang
                    </p>

                    {/* Main heading */}
                    <h1 className="hero-title-reveal font-cinzel font-bold leading-none uppercase tracking-[0.15em] text-white">
                        <span className="block text-[44px] sm:text-[64px] lg:text-[88px] xl:text-[96px]">
                            ATHENA
                        </span>
                        <span className="block text-[24px] sm:text-[40px] lg:text-[56px] xl:text-[64px] opacity-70 mt-2">
                            BARBER SHOP
                        </span>
                    </h1>

                    {/* Divider */}
                    <div className="flex items-center gap-4 my-8 w-full max-w-xs opacity-80">
                        <span className="hero-divider-line h-px flex-1 bg-primary-500/50" />
                        <span className="hero-other-reveal text-primary-500 text-lg">♦</span>
                        <span className="hero-divider-line h-px flex-1 bg-primary-500/50" />
                    </div>

                    {/* Subtitle */}
                    <p className="hero-other-reveal max-w-[600px] font-body text-[18px] text-white/85 leading-[1.6] text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] mb-10">
                        Premium grooming services in Hai Chau, Da Nang.<br />
                        Where classic technique meets modern dark aesthetic.
                    </p>

                    {/* CTA Buttons */}
                    <div className="hero-other-reveal flex flex-col sm:flex-row items-center gap-4">
                        {/* Primary: BOOK NOW */}
                        <Link href="/contact">
                            <motion.button
                                className="group relative overflow-hidden font-heading font-black tracking-widest uppercase bg-primary-500 text-white px-9 py-[14px] rounded-lg text-sm transition-all duration-[200ms] hover:bg-primary-600 hover:shadow-[0_0_20px_rgba(255,140,0,0.5)]"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                BOOK NOW
                            </motion.button>
                        </Link>

                        {/* Secondary: Our Services */}
                        <Link
                            href="/services"
                            className="font-body text-sm font-semibold tracking-widest text-neutral-300 hover:text-primary-500 transition-colors duration-200 border-b border-neutral-700 hover:border-primary-500 pb-1 uppercase"
                        >
                            View Services
                        </Link>
                    </div>

                    {/* Scroll hint */}
                    <motion.div
                        className="hero-other-reveal mt-16"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                        <div className="flex flex-col items-center gap-2 text-neutral-500 hover:text-primary-500 transition-colors cursor-default">
                            <span className="font-heading text-xs tracking-[0.2em] uppercase">Scroll</span>
                            <ArrowDown size={16} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

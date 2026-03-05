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
                    <h1 className="hero-title-reveal font-cinzel leading-none uppercase text-center">
                        {/* ATHENA — main brand title with optical spacing */}
                        <span
                            className="block text-white font-bold text-[72px] sm:text-[96px] lg:text-[120px] xl:text-[140px]"
                            style={{
                                textShadow: "0 8px 30px rgba(0,0,0,0.45)",
                                letterSpacing: "0",
                            }}
                            aria-label="ATHENA"
                        >
                            {/* Optical kerning: A–T tighter, H–E wider, N–A tighter */}
                            <span style={{ marginRight: "0.06em" }}>A</span>
                            <span style={{ marginRight: "0.09em" }}>T</span>
                            <span style={{ marginRight: "0.12em" }}>H</span>
                            <span style={{ marginRight: "0.08em" }}>E</span>
                            <span style={{ marginRight: "0.05em" }}>N</span>
                            <span>A</span>
                        </span>

                        {/* BARBER SHOP — brand descriptor ~57% of ATHENA */}
                        <span
                            className="block text-[#c27a36] font-semibold text-[41px] sm:text-[55px] lg:text-[68px] xl:text-[80px] tracking-[0.22em]"
                            style={{ marginTop: "12px" }}
                        >
                            BARBER SHOP
                        </span>
                    </h1>

                    {/* Spacing after heading */}
                    <div style={{ marginTop: "28px" }} />

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

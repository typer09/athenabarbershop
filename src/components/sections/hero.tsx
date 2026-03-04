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

            // Background image reveal (scale down + fade in)
            tl.from(imageRef.current, {
                scale: 1.2,
                opacity: 0,
                duration: 1.5,
                ease: "power3.out",
            });

            // Text stagger reveal (blur + slide up)
            tl.from(
                ".hero-text-element",
                {
                    y: 50,
                    opacity: 0,
                    filter: "blur(10px)",
                    duration: 1,
                    stagger: 0.15,
                    ease: "power3.out",
                },
                "-=1"
            );

            // SCROLL PARALLAX
            gsap.to(imageRef.current, {
                yPercent: 30,
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
                    {/* Hero overlay: rgba(0,0,0,0.65) per spec */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/65 via-black/55 to-black/85" />
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
                    <p className="hero-text-element font-body text-xs font-bold tracking-[0.3em] text-primary-500 uppercase mb-6">
                        Est. 2022 Hoi An / 2025 Da Nang
                    </p>

                    {/* Main heading */}
                    <h1 className="hero-text-element font-heading font-black leading-none text-white uppercase tracking-tight">
                        <span className="block text-6xl sm:text-8xl md:text-9xl lg:text-[11rem]">
                            ATHENA
                        </span>
                        <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-400">
                            BARBER SHOP
                        </span>
                    </h1>

                    {/* Divider */}
                    <div className="hero-text-element flex items-center gap-4 my-8 w-full max-w-xs">
                        <span className="h-px flex-1 bg-primary-500/40" />
                        <span className="text-primary-500 text-xs tracking-widest">✦</span>
                        <span className="h-px flex-1 bg-primary-500/40" />
                    </div>

                    {/* Subtitle */}
                    <p className="hero-text-element max-w-lg font-body text-base md:text-lg text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] mb-10 leading-relaxed">
                        Premium grooming services in Hai Chau, Da Nang.<br />
                        Where classic technique meets modern dark aesthetic.
                    </p>

                    {/* CTA Buttons */}
                    <div className="hero-text-element flex flex-col sm:flex-row items-center gap-4">
                        {/* Primary: BOOK NOW */}
                        <Link href="/contact">
                            <motion.button
                                className="group relative overflow-hidden font-heading font-black tracking-widest uppercase bg-primary-500 text-white px-9 py-4 rounded-lg text-sm transition-all duration-[250ms] hover:bg-primary-600 hover:shadow-[0_8px_30px_rgba(196,106,43,0.35)] hover:-translate-y-0.5"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
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
                        className="hero-text-element mt-16"
                        animate={{ y: [0, 6, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                        <ArrowDown size={20} className="text-neutral-600" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

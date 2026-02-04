"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, MapPin, Facebook } from "lucide-react";

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
                    stagger: 0.2,
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
            className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden pt-20"
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div ref={imageRef} className="relative h-full w-full">
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-b from-neutral-950/60 via-neutral-950/40 to-neutral-950" />
                    <Image
                        src="/images/hero/hero-bg.jpg" // Ensure this exists or fallback
                        alt="The Black Barbershop Interior"
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                    />
                </div>
            </div>

            {/* Content */}
            <div ref={textRef} className="section-container relative z-20 w-full">
                <div className="flex flex-col items-center text-center">
                    <p className="hero-text-element font-body text-sm font-medium tracking-[0.2em] text-primary-500 uppercase">
                        Est. 2024 Da Nang
                    </p>
                    <h1 className="hero-text-element mt-6 font-heading text-5xl font-bold leading-tight text-neutral-50 sm:text-7xl md:text-8xl lg:text-9xl">
                        The Black <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500">
                            Barber
                        </span>
                    </h1>
                    <p className="hero-text-element mt-8 max-w-xl font-body text-lg text-neutral-300 sm:text-xl">
                        Premium grooming services in An Thuong, Da Nang.
                        Where classic technique meets modern dark aesthetic.
                    </p>

                    {/* STRONG CTA BUTTONS - Razor Brothers Style */}
                    <div className="hero-text-element mt-12 flex flex-col sm:flex-row items-center gap-4">
                        {/* PRIMARY: Book Now */}
                        <Link href="/contact" className="w-full sm:w-auto">
                            <button className="group relative w-full sm:w-auto overflow-hidden font-heading font-black tracking-widest uppercase bg-primary-500 text-neutral-950 border border-primary-500 h-14 px-10 text-sm transition-all duration-300 hover:text-white">
                                {/* Background Fill Animation */}
                                <span className="absolute inset-0 bg-neutral-950 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
                                <span className="relative z-10">BOOK NOW</span>
                            </button>
                        </Link>

                        {/* SECONDARY: Visit Us */}
                        <a
                            href={siteConfig.address.googleMap}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto"
                        >
                            <button className="w-full sm:w-auto overflow-hidden font-heading font-black tracking-widest uppercase bg-transparent text-white border border-neutral-700 h-14 px-10 text-sm transition-all duration-300 hover:border-primary-500 hover:text-primary-500 flex items-center justify-center gap-3">
                                <MapPin size={18} />
                                VISIT US
                            </button>
                        </a>

                        {/* TERTIARY: Facebook */}
                        <a
                            href={siteConfig.social.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto"
                        >
                            <button className="w-full sm:w-auto overflow-hidden font-heading font-black tracking-widest uppercase bg-transparent text-white border border-neutral-700 h-14 px-10 text-sm transition-all duration-300 hover:border-primary-500 hover:text-primary-500 flex items-center justify-center gap-3">
                                <Facebook size={18} />
                                FACEBOOK
                            </button>
                        </a>
                    </div>

                    <div className="hero-text-element mt-10">
                        <Link
                            href="#about"
                            className="font-body text-sm font-medium tracking-widest text-neutral-400 hover:text-primary-500 transition-colors border-b border-transparent hover:border-primary-500 pb-1"
                        >
                            SCROLL TO EXPLORE
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

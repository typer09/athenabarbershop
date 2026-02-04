"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { StrongButton } from "@/components/ui/strong-button";
import BlurText from "@/components/ui/blur-text";

export function Bio() {
    return (
        <section className="relative bg-neutral-950 py-24 border-b border-neutral-900 overflow-hidden">
            <div className="section-container">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* LEFT: CONTENT (The "Razor Brothers" Molding Style) */}
                    <div className="relative z-10 order-2 lg:order-1">
                        {/* Headers */}
                        <div className="mb-8 pl-6 border-l-4 border-primary-500">
                            <BlurText
                                text="MOLDING STYLE."
                                delay={50}
                                animateBy="words"
                                direction="bottom"
                                className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-[0.9] tracking-tighter block mb-2"
                            />
                            <BlurText
                                text="SHAPING CHARACTER."
                                delay={50}
                                animateBy="words"
                                direction="bottom"
                                className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-neutral-600 leading-[0.9] tracking-tighter"
                            />
                        </div>

                        {/* Founder Intro */}
                        <div className="space-y-6 max-w-lg mb-10">
                            {/* Founder Name */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex items-center gap-3"
                            >
                                <div className="w-10 h-px bg-primary-500" />
                                <span className="text-primary-500 font-heading font-bold tracking-widest uppercase text-sm">
                                    Est. by Mai Đức
                                </span>
                            </motion.div>

                            {/* Short Bio */}
                            <BlurText
                                text="Master barber with 5+ years of experience specializing in modern fades, classic cuts, and beard sculpting. Trained in traditional techniques with a vision to bring premium grooming to Da Nang."
                                delay={20}
                                animateBy="words"
                                direction="bottom"
                                className="text-neutral-400 text-lg leading-relaxed font-light"
                            />

                            {/* Shop Bio */}
                            <BlurText
                                text="Since 2023, The Black Barber has set the standard for masculine grooming in An Thượng where every cut is a craft."
                                delay={20}
                                animateBy="words"
                                direction="bottom"
                                className="text-neutral-500 text-base leading-relaxed"
                            />
                        </div>

                        {/* Strong Action Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <Link href="/about-us">
                                <StrongButton variant="outline" className="h-14 px-10 text-base">
                                    OUR STORY &gt;
                                </StrongButton>
                            </Link>
                        </motion.div>
                    </div>

                    {/* RIGHT: IMAGE (Fixed Aspect Ratio / Unbroken) */}
                    <div className="order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-neutral-900"
                        >
                            {/* Dark Overlay for "Framer" vibe */}
                            <div className="absolute inset-0 bg-neutral-950/20 z-10 hover:bg-transparent transition-colors duration-500" />

                            <Image
                                src="/images/gallery/crop/owner.png"
                                alt="Mai Duc - Master Barber"
                                fill
                                className="object-cover object-[50%_20%] grayscale hover:grayscale-0 transition-all duration-700"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />

                            {/* Corner Cut Effect (CSS clip-path could be used, but keeping simple for now) */}
                            <div className="absolute bottom-0 right-0 w-12 h-12 bg-neutral-950 z-20" style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }} />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}

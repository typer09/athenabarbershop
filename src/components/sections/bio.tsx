"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";
import { ArrowRight } from "lucide-react";

export function Bio() {
    return (
        <section className="relative bg-[#121212] py-24 border-b border-[#262626] overflow-hidden">

            {/* Subtle copper glow top-right */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary-500/5 blur-[150px] pointer-events-none" />

            <div className="section-container">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* LEFT: IMAGE */}
                    <div className="order-1 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-[#1A1A1A]"
                        >
                            {/* Decorative copper corner */}
                            <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-primary-500 z-20" />
                            <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-primary-500 z-20" />

                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-[#0A0A0A]/20 z-10 hover:bg-transparent transition-colors duration-500" />

                            <Image
                                src="/images/gallery/fade/founder.jpg"
                                alt="Duy Phong (Spinn) - Master Barber"
                                fill
                                className="object-cover object-[50%_20%] grayscale hover:grayscale-0 transition-all duration-700"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </motion.div>

                        {/* Floating stat badge */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="absolute -bottom-5 -right-3 md:right-4 bg-[#1A1A1A] border border-[#262626] rounded-lg p-4 flex items-center gap-3"
                        >
                            <div className="text-center">
                                <p className="font-heading font-black text-3xl text-primary-500">15+</p>
                                <p className="text-xs text-neutral-100 font-medium tracking-wider uppercase">Years of<br />Experience</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT: CONTENT */}
                    <div className="order-2 relative z-10">
                        {/* Label */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-xs font-bold tracking-[0.25em] text-primary-500 uppercase mb-5"
                        >
                            Our Identity
                        </motion.p>

                        {/* Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.05 }}
                            className="font-heading text-4xl md:text-5xl font-black text-white leading-tight tracking-tight uppercase mb-6"
                        >
                            Classic Barber<br />
                            <span className="text-neutral-300">Craft.</span>
                        </motion.h2>

                        {/* Copper border quote */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="pl-5 border-l-4 border-primary-500 mb-8"
                        >
                            <p className="font-heading text-base italic text-neutral-300">
                                EST. BY <span className="text-primary-500">DUY PHONG (SPINN)</span>
                            </p>
                        </motion.div>

                        {/* Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 }}
                            className="space-y-4 text-base text-neutral-100 leading-relaxed mb-10"
                        >
                            <p>
                                Athena Barber Shop blends traditional barber techniques with modern style. Our experienced barbers focus on <span className="text-white font-semibold">precision, comfort, and premium grooming</span> experiences.
                            </p>
                            <p>
                                Since 2022, we have set the standard for masculine grooming in Hải Châu — where every cut is a craft.
                            </p>
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <Link
                                href="/about-us"
                                className="group inline-flex items-center gap-3 border border-[#262626] hover:border-primary-500 text-white font-heading font-bold tracking-widest uppercase px-8 py-4 rounded-lg text-sm transition-all duration-[250ms] hover:bg-primary-950"
                            >
                                Learn More
                                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                            </Link>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}

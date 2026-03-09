"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function BookingCta() {
    return (
        <section className="relative overflow-hidden bg-[#121212] py-24 border-y border-neutral-800">
            {/* Subtle copper radial glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-primary-500/5 blur-[100px]" />
            </div>

            <div className="section-container relative z-10 text-center">
                {/* Icon */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-950 border border-primary-500/30 mb-8"
                >
                    <CalendarDays size={28} className="text-primary-500" />
                </motion.div>

                {/* Label */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.05 }}
                    className="text-xs font-bold tracking-[0.25em] text-primary-500 uppercase mb-4"
                >
                    Reserve Your Seat
                </motion.p>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-4"
                >
                    Book Your{" "}
                    <span className="text-primary-500">Appointment</span>
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="text-neutral-100 text-lg mb-10 max-w-md mx-auto"
                >
                    Walk in or reserve your seat. Premium grooming, no waiting.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    {/* Primary: Book Now */}
                    <a
                        href={siteConfig.social.facebook}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-3 bg-primary-500 text-white font-heading font-black tracking-widest uppercase px-10 py-4 rounded-lg text-sm transition-all duration-[250ms] hover:bg-primary-600 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(196,106,43,0.35)]"
                    >
                        BOOK NOW
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </a>

                    {/* Secondary: Call */}
                    <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="inline-flex items-center gap-3 border border-neutral-600 text-neutral-100 font-heading font-black tracking-widest uppercase px-10 py-4 rounded-lg text-sm transition-all duration-[250ms] hover:border-primary-500 hover:text-white"
                    >
                        CALL US
                    </a>
                </motion.div>

                {/* Address hint */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-8 text-sm text-neutral-200"
                >
                    {siteConfig.address.street}, {siteConfig.address.city} · {siteConfig.contact.phone}
                </motion.p>
            </div>
        </section>
    );
}

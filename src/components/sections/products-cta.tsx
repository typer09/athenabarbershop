"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function ProductsCta() {
    return (
        <section className="relative overflow-hidden bg-[#121212] py-24 border-t border-neutral-800">
            {/* Copper glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] rounded-full bg-primary-500/5 blur-[100px]" />
            </div>

            <div className="section-container relative z-10 text-center">
                {/* Label */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-xs font-bold tracking-[0.25em] text-primary-500 uppercase mb-4"
                >
                    Experience It In-Person
                </motion.p>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.08 }}
                    className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-4"
                >
                    Visit{" "}
                    <span className="text-primary-500">Athena Barber Shop</span>
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.13 }}
                    className="text-neutral-200 text-base font-semibold mb-10 max-w-sm mx-auto"
                >
                    to experience premium grooming products.
                </motion.p>

                {/* Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.18 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href={siteConfig.social.facebook}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-3 bg-primary-500 text-white font-heading font-black tracking-widest uppercase px-10 py-4 rounded-lg text-sm transition-all duration-[250ms] hover:bg-primary-600 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(196,106,43,0.35)]"
                    >
                        BOOK NOW
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </a>

                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 border border-neutral-700 text-neutral-200 font-heading font-bold tracking-widest uppercase px-10 py-4 rounded-lg text-sm transition-all duration-[250ms] hover:border-primary-500 hover:text-white"
                    >
                        View Services
                    </Link>
                </motion.div>

                {/* Address */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.28 }}
                    className="mt-8 text-sm text-neutral-300 font-bold"
                >
                    {siteConfig.address.street}, {siteConfig.address.city} · {siteConfig.contact.phone}
                </motion.p>
            </div>
        </section>
    );
}

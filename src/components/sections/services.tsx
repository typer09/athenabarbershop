"use client";

import { useRef } from "react";
import { siteConfig } from "@/lib/config";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    // Group services by category for layout
    const coreItems = siteConfig.services.filter(s => s.category === "Core");
    const comboItems = siteConfig.services.filter(s => s.category === "Combo");
    const privateItems = siteConfig.services.filter(s => s.category === "Private");

    return (
        <section id="services" className="section-padding bg-neutral-950 relative overflow-hidden">
            {/* Subtle Background Elements - Minimal Lines */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-neutral-800 to-transparent" />
            </div>

            <div className="section-container relative z-10">
                <div className="mb-20 text-center">
                    <span className="text-xs font-bold tracking-[0.2em] text-primary-500 uppercase block mb-4">
                        Menu
                    </span>
                    <h2 className="heading-lg text-neutral-50">Services & Pricing</h2>
                </div>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="mx-auto max-w-4xl"
                >
                    {/* CORE CATEGORY */}
                    <div className="mb-20">
                        <h3 className="flex items-center gap-4 text-xl font-heading font-black text-neutral-500 mb-10 uppercase tracking-widest">
                            <span className="h-px flex-1 bg-neutral-800"></span>
                            Essentials
                            <span className="h-px flex-1 bg-neutral-800"></span>
                        </h3>
                        <div className="grid gap-6">
                            {coreItems.map((service) => (
                                <motion.div
                                    key={service.id}
                                    variants={itemVariants}
                                    className="group relative flex items-center justify-between p-6 bg-neutral-900/30 border border-neutral-800/50 hover:bg-neutral-900 hover:border-primary-500/50 transition-all duration-300 rounded-sm"
                                >
                                    {/* Left: Name & Desc */}
                                    <div className="relative z-10">
                                        <h4 className="font-heading text-2xl md:text-3xl font-bold text-neutral-200 group-hover:text-white transition-colors">
                                            {service.name}
                                        </h4>
                                        {service.description && (
                                            <p className="mt-2 text-sm text-neutral-500 font-medium group-hover:text-neutral-400">
                                                {service.description}
                                            </p>
                                        )}
                                    </div>

                                    {/* Right: Price */}
                                    <div className="relative z-10 flex-shrink-0 pl-8">
                                        <span className="font-heading font-black text-3xl md:text-4xl text-primary-500 block group-hover:scale-110 transition-transform origin-right">
                                            {service.price.toLocaleString('vi-VN').replace(/\./g, ',')}
                                            <span className="text-lg ml-1 text-neutral-600 align-top tracking-normal font-bold">đ</span>
                                        </span>
                                    </div>

                                    {/* Shine Effect on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out z-0 pointer-events-none" />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* COMBOS CATEGORY */}
                    <div className="mb-20">
                        <h3 className="flex items-center gap-4 text-xl font-heading font-black text-neutral-500 mb-10 uppercase tracking-widest">
                            <span className="h-px flex-1 bg-neutral-800"></span>
                            Signature Combos
                            <span className="h-px flex-1 bg-neutral-800"></span>
                        </h3>
                        <div className="grid gap-6">
                            {comboItems.map((service) => (
                                <motion.div
                                    key={service.id}
                                    variants={itemVariants}
                                    className="group relative flex items-center justify-between p-6 bg-neutral-900/30 border border-neutral-800/50 hover:bg-neutral-900 hover:border-primary-500/50 transition-all duration-300 rounded-sm"
                                >
                                    <div>
                                        <h4 className="font-heading text-2xl md:text-3xl font-bold text-neutral-200 group-hover:text-white transition-colors">
                                            {service.name}
                                        </h4>
                                        {service.description && (
                                            <p className="mt-2 text-sm text-neutral-500 font-medium max-w-sm group-hover:text-neutral-400">
                                                {service.description}
                                            </p>
                                        )}
                                    </div>

                                    <div className="flex-shrink-0 pl-8 text-right">
                                        <span className="font-heading font-black text-3xl md:text-4xl text-primary-500 block group-hover:scale-110 transition-transform origin-right">
                                            {service.price.toLocaleString('vi-VN').replace(/\./g, ',')}
                                            <span className="text-lg ml-1 text-neutral-600 align-top tracking-normal font-bold">đ</span>
                                        </span>
                                    </div>

                                    {/* Shine Effect on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out z-0 pointer-events-none" />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* PRIVATE CATEGORY */}
                    <div>
                        <h3 className="flex items-center gap-4 text-xl font-heading font-black text-neutral-500 mb-10 uppercase tracking-widest">
                            <span className="h-px flex-1 bg-neutral-800"></span>
                            Private Custom
                            <span className="h-px flex-1 bg-neutral-800"></span>
                        </h3>
                        <div className="grid gap-6">
                            {privateItems.map((service) => (
                                <motion.div
                                    key={service.id}
                                    variants={itemVariants}
                                    className="group relative flex flex-col md:flex-row items-center justify-between p-6 bg-gradient-to-r from-neutral-900 to-neutral-950 border border-neutral-800 hover:border-primary-500 transition-all duration-300 rounded-sm gap-6 md:gap-0"
                                >
                                    <div className="text-center md:text-left">
                                        <h4 className="font-heading text-2xl md:text-3xl font-bold text-neutral-200 group-hover:text-white transition-colors">
                                            {service.name}
                                        </h4>
                                        <p className="mt-2 text-sm text-neutral-500 font-medium max-w-md">
                                            Tailored experience. <span className="text-primary-500 font-bold">Mutual agreement required</span> for style & price.
                                        </p>
                                    </div>

                                    <div className="flex-shrink-0">
                                        <Link href="/private-service">
                                            <button className="bg-primary-500/10 border border-primary-500/50 text-white font-bold text-xs uppercase tracking-widest px-6 py-3 hover:bg-primary-500 hover:text-black transition-all">
                                                View Details &gt;
                                            </button>
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <div className="mt-20 text-center border-t border-neutral-900 pt-8 max-w-md mx-auto">
                    <p className="text-xs text-neutral-600 uppercase tracking-widest font-semibold">
                        Athena Barber Shop Da Nang
                    </p>
                </div>
            </div>
        </section>
    );
}

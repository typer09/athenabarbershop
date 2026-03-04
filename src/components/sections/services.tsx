"use client";

import { useRef } from "react";
import { siteConfig } from "@/lib/config";
import { motion, useInView, type Variants } from "framer-motion";

// ── Types ──────────────────────────────────────────────────────────
type Service = (typeof siteConfig.services)[number];

// Main package categories (full cards with includes list)
const MAIN_PACKAGES = ["Craft", "Beard Groom", "Head Shave", "Elite", "Luxe"] as const;

// Extra service sub-categories (compact rows, grouped)
const EXTRA_CATEGORIES = [
    { key: "Extra Service", label: "Styling & Add-ons" },
    { key: "Cleaning", label: "Cleaning" },
    { key: "Hair Wash", label: "Hair Wash" },
    { key: "Massage", label: "Massage" },
] as const;

// ── Helper ─────────────────────────────────────────────────────────
function formatPrice(price: number) {
    return price.toLocaleString("vi-VN").replace(/\./g, ",");
}

// ── Sub-components ─────────────────────────────────────────────────

/** Full card for a main service package */
function PackageCard({ service, variants }: { service: Service; variants: Variants }) {
    return (
        <motion.div
            variants={variants}
            className="group relative flex flex-col p-6 md:p-8 bg-[#1A1A1A] border border-[#262626] rounded-[10px] hover:border-primary-500 transition-all duration-[250ms] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
        >
            {/* Header row */}
            <div className="flex items-start justify-between gap-4 mb-5">
                <h4 className="font-heading text-xl md:text-2xl font-bold text-neutral-50 group-hover:text-white transition-colors tracking-wider">
                    {service.name}
                </h4>
                <div className="text-right flex-shrink-0">
                    <span className="font-heading font-black text-2xl md:text-3xl text-primary-500">
                        {formatPrice(service.price)}
                    </span>
                    <span className="text-sm ml-1 text-neutral-200 font-bold">₫</span>
                </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-[#262626] group-hover:bg-primary-500/30 mb-4 transition-colors duration-300" />

            {/* Includes list */}
            {"includes" in service && Array.isArray(service.includes) && service.includes.length > 0 && (
                <ul className="space-y-2 flex-1">
                    {(service.includes as readonly string[]).map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-sm text-neutral-100 group-hover:text-neutral-200 transition-colors">
                            <span className="w-1 h-1 rounded-full bg-primary-500 flex-shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
            )}

            {/* Copper shine on hover */}
            <div className="absolute inset-0 rounded-[10px] bg-gradient-to-tr from-transparent via-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </motion.div>
    );
}

/** Compact row for an extra service item */
function ExtraRow({ service, variants }: { service: Service; variants: Variants }) {
    return (
        <motion.div
            variants={variants}
            className="group flex items-center justify-between py-3 border-b border-[#262626] last:border-0 hover:border-primary-500/40 transition-colors duration-200"
        >
            <span className="text-sm font-medium text-neutral-100 group-hover:text-white transition-colors">
                {service.name}
            </span>
            <span className="font-heading font-bold text-base text-primary-500 flex-shrink-0 ml-4">
                {formatPrice(service.price)}
                <span className="text-xs ml-0.5 text-neutral-300 font-bold">₫</span>
            </span>
        </motion.div>
    );
}

// ── Main Component ─────────────────────────────────────────────────
export function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
    };
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    // Group services
    const mainPackages = MAIN_PACKAGES.map(
        (cat) => siteConfig.services.find((s) => s.category === cat)!
    ).filter(Boolean);

    const extraGroups = EXTRA_CATEGORIES.map(({ key, label }) => ({
        label,
        items: siteConfig.services.filter((s) => s.category === key),
    })).filter((g) => g.items.length > 0);

    return (
        <section id="services" className="section-padding bg-[#0A0A0A] relative overflow-hidden">
            {/* Background accent line */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary-500 to-transparent" />
            </div>

            <div className="section-container relative z-10">
                {/* Header */}
                <div className="mb-20 text-center">
                    <span className="text-xs font-bold tracking-[0.25em] text-primary-500 uppercase block mb-4">
                        Our Menu
                    </span>
                    <h2 className="heading-lg text-white">Services <span className="text-primary-500">&</span> Price</h2>
                </div>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="mx-auto max-w-5xl"
                >
                    {/* ── Main Packages ── */}
                    <div className="mb-20">
                        <SectionDivider label="Packages" />
                        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {mainPackages.map((service) => (
                                <PackageCard key={service.id} service={service} variants={itemVariants} />
                            ))}
                        </div>
                    </div>

                    {/* ── Extra Services ── */}
                    <div>
                        <SectionDivider label="Extra Services" />
                        <div className="grid md:grid-cols-2 gap-6">
                            {extraGroups.map(({ label, items }) => (
                                <motion.div
                                    key={label}
                                    variants={itemVariants}
                                    className="bg-[#1A1A1A] border border-[#262626] rounded-[10px] p-6 hover:border-primary-500/40 transition-colors duration-[250ms]"
                                >
                                    <h4 className="text-xs font-bold tracking-[0.2em] text-primary-500 uppercase mb-4 pb-3 border-b border-[#262626]">
                                        {label}
                                    </h4>
                                    {items.map((s) => (
                                        <ExtraRow key={s.id} service={s} variants={itemVariants} />
                                    ))}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Footer note */}
                <div className="mt-20 text-center border-t border-[#262626] pt-8 max-w-md mx-auto">
                    <p className="text-xs text-neutral-300 uppercase tracking-widest font-semibold">
                        Athena Barber Shop · Hải Châu, Đà Nẵng
                    </p>
                </div>
            </div>
        </section>
    );
}

// ── Divider ────────────────────────────────────────────────────────
function SectionDivider({ label }: { label: string }) {
    return (
        <h3 className="flex items-center gap-4 text-xs font-heading font-black text-neutral-300 mb-8 uppercase tracking-[0.25em]">
            <span className="h-px flex-1 bg-[#262626]" />
            {label}
            <span className="h-px flex-1 bg-[#262626]" />
        </h3>
    );
}

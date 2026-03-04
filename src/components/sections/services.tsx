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
    { key: "Extra Service", label: "Extra Service" },
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
            className="group relative p-6 md:p-8 bg-neutral-900/30 border border-neutral-800/50 hover:bg-neutral-900 hover:border-primary-500/50 transition-all duration-300 rounded-sm"
        >
            {/* Header row */}
            <div className="flex items-start justify-between gap-4 mb-5">
                <h4 className="font-heading text-2xl md:text-3xl font-bold text-neutral-200 group-hover:text-white transition-colors tracking-wide">
                    {service.name}
                </h4>
                <span className="font-heading font-black text-2xl md:text-3xl text-primary-500 flex-shrink-0 group-hover:scale-110 transition-transform origin-right">
                    {formatPrice(service.price)}
                    <span className="text-base ml-1 text-neutral-600 align-top tracking-normal font-bold">đ</span>
                </span>
            </div>

            {/* Includes list */}
            {"includes" in service && Array.isArray(service.includes) && service.includes.length > 0 && (
                <ul className="space-y-1.5">
                    {(service.includes as readonly string[]).map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-neutral-500 group-hover:text-neutral-400 font-medium">
                            <span className="w-1 h-1 rounded-full bg-primary-500/60 flex-shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
            )}

            {/* Shine Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out z-0 pointer-events-none rounded-sm" />
        </motion.div>
    );
}

/** Compact row for an extra service item */
function ExtraRow({ service, variants }: { service: Service; variants: Variants }) {
    return (
        <motion.div
            variants={variants}
            className="group flex items-center justify-between py-3 border-b border-neutral-800/40 last:border-0 hover:border-primary-500/30 transition-colors"
        >
            <span className="text-sm font-medium text-neutral-400 group-hover:text-neutral-200 transition-colors">
                {service.name}
            </span>
            <span className="font-heading font-bold text-base text-primary-500 flex-shrink-0 ml-4">
                {formatPrice(service.price)}
                <span className="text-xs ml-0.5 text-neutral-600 font-bold">đ</span>
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
    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
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
        <section id="services" className="section-padding bg-neutral-950 relative overflow-hidden">
            {/* Subtle Background */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-neutral-800 to-transparent" />
            </div>

            <div className="section-container relative z-10">
                {/* Header */}
                <div className="mb-20 text-center">
                    <span className="text-xs font-bold tracking-[0.2em] text-primary-500 uppercase block mb-4">
                        Menu
                    </span>
                    <h2 className="heading-lg text-neutral-50">Services &amp; Pricing</h2>
                </div>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="mx-auto max-w-4xl"
                >
                    {/* ── Main Packages ── */}
                    <div className="mb-20">
                        <SectionDivider label="Packages" />
                        <div className="grid gap-6">
                            {mainPackages.map((service) => (
                                <PackageCard key={service.id} service={service} variants={itemVariants} />
                            ))}
                        </div>
                    </div>

                    {/* ── Extra Services ── */}
                    <div>
                        <SectionDivider label="Extra Services" />
                        <div className="grid md:grid-cols-2 gap-8">
                            {extraGroups.map(({ label, items }) => (
                                <motion.div
                                    key={label}
                                    variants={itemVariants}
                                    className="bg-neutral-900/20 border border-neutral-800/40 rounded-sm p-5"
                                >
                                    <h4 className="text-xs font-bold tracking-[0.15em] text-primary-500/80 uppercase mb-3">
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

                {/* Footer */}
                <div className="mt-20 text-center border-t border-neutral-900 pt-8 max-w-md mx-auto">
                    <p className="text-xs text-neutral-600 uppercase tracking-widest font-semibold">
                        Athena Barber Shop Da Nang
                    </p>
                </div>
            </div>
        </section>
    );
}

// ── Divider ────────────────────────────────────────────────────────
function SectionDivider({ label }: { label: string }) {
    return (
        <h3 className="flex items-center gap-4 text-xl font-heading font-black text-neutral-500 mb-10 uppercase tracking-widest">
            <span className="h-px flex-1 bg-neutral-800" />
            {label}
            <span className="h-px flex-1 bg-neutral-800" />
        </h3>
    );
}

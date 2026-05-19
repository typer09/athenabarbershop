"use client";

import { useRef } from "react";
import { siteConfig } from "@/lib/config";
import { motion, useInView, type Variants } from "framer-motion";

// ── Types ──────────────────────────────────────────────────────────
type Service = (typeof siteConfig.services)[number];

// Main package categories (full cards with includes list)
const MAIN_PACKAGES = ["Craft", "Beard Groom", "Elite", "Luxe", "Therapy", "Gentlemen Groom & Sip"] as const;

// Chemical services (Perm, Dyed, Hairdress)
const CHEMICAL_CATEGORIES = [
    { key: "Perm", label: "Perm" },
    { key: "Dyed", label: "Dyed" },
    { key: "Hairdress", label: "Hairdress" },
] as const;

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
function PackageCard({ service, variants, className = "" }: { service: Service; variants: Variants; className?: string }) {
    return (
        <motion.div
            variants={variants}
            className={`group relative flex flex-col p-4 md:p-5 bg-[#1A1A1A] border border-[#262626] rounded-[10px] hover:border-primary-500 transition-all duration-[250ms] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] ${className}`}
        >
            {/* Header col */}
            <div className="flex flex-col gap-1.5 mb-4">
                <h4 className="font-heading text-lg md:text-xl font-bold text-neutral-50 group-hover:text-white transition-colors tracking-wider leading-tight uppercase">
                    {service.name}
                </h4>
                {"subtitle" in service && !!service.subtitle && (
                    <p className="text-xs italic text-neutral-300 group-hover:text-neutral-200 transition-colors">
                        {service.subtitle as string}
                    </p>
                )}
                <div className="mt-0 grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:mt-1 transition-all duration-300 ease-out">
                    <div className="overflow-hidden flex items-baseline">
                        <span className="font-heading font-black text-xl md:text-2xl text-primary-500">
                            {formatPrice(service.price)}
                        </span>
                        <span className="text-xs ml-1 text-neutral-200 font-bold mb-1">₫</span>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-[#262626] group-hover:bg-primary-500/30 mb-3 transition-colors duration-300" />

            {/* Includes list */}
            {"includes" in service && Array.isArray(service.includes) && service.includes.length > 0 && (
                <ul className="space-y-2 flex-1">
                    {(service.includes as readonly string[]).map((item) => {
                        const splitIdx = item.indexOf(":");
                        const hasDesc = splitIdx !== -1;
                        const title = hasDesc ? item.substring(0, splitIdx).trim() : item;
                        const desc = hasDesc ? item.substring(splitIdx + 1).trim() : "";
                        return (
                            <li key={item} className={`flex ${hasDesc ? 'items-start' : 'items-center'} gap-2 text-xs text-neutral-100 group-hover:text-neutral-200 transition-colors`}>
                                <span className={`w-1 h-1 rounded-full bg-primary-500 flex-shrink-0 ${hasDesc ? 'mt-1' : ''}`} />
                                <div className="flex flex-col">
                                    <span className={hasDesc ? "font-semibold text-white" : ""}>{title}</span>
                                    {hasDesc && <span className="text-xs text-neutral-300 mt-0.5 leading-relaxed">{desc}</span>}
                                </div>
                            </li>
                        );
                    })}
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
            <div className="flex flex-col">
                <span className="text-sm font-medium text-neutral-100 group-hover:text-white transition-colors">
                    {service.name}
                </span>
                {"subtitle" in service && !!service.subtitle && (
                    <span className="text-[10px] uppercase text-neutral-400 mt-0.5 max-w-[200px] sm:max-w-none">
                        {service.subtitle as string}
                    </span>
                )}
            </div>
            <span className="font-heading font-bold text-base text-primary-500 flex-shrink-0 ml-4 whitespace-nowrap">
                {"displayPrice" in service && !!service.displayPrice ?
                    (service.displayPrice as string).replace(/\./g, ",") :
                    formatPrice(service.price)}
                <span className="text-xs ml-1 text-neutral-300 font-bold">₫</span>
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

    const chemicalGroups = CHEMICAL_CATEGORIES.map(({ key, label }) => ({
        label,
        items: siteConfig.services.filter((s) => s.category === key),
    })).filter((g) => g.items.length > 0);

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
                <div className="mb-12 sm:mb-20 text-center">
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
                    <div className="mb-12 sm:mb-20">
                        <SectionDivider label="Packages" />
                        <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                            {mainPackages.map((service) => (
                                <PackageCard
                                    key={service.id}
                                    service={service}
                                    variants={itemVariants}
                                />
                            ))}
                        </div>
                    </div>

                    {/* ── Chemical Services (DV Hoá Chất) ── */}
                    <div className="mb-12 sm:mb-20">
                        <SectionDivider label="Chemical Services" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            {chemicalGroups.map(({ label, items }) => (
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

                    {/* ── Extra Services ── */}
                    <div>
                        <SectionDivider label="Extra Services" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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

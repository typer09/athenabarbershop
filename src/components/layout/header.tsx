"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled || isMobileMenuOpen
                    ? "bg-[rgba(10,10,10,0.85)] backdrop-blur-[10px] border-b border-neutral-800 py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="section-container flex items-center justify-between">
                {/* LEFT: LOGO */}
                <Link href="/" className="relative z-50 flex items-center group">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full border border-neutral-800 transition-transform group-hover:scale-105">
                        <Image
                            src="/images/logo.jpg"
                            alt="Athena Barber Shop Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className="ml-[12px] font-cinzel font-semibold tracking-[0.08em] uppercase hidden sm:block text-xl">
                        <span className="text-white">ATHENA</span>{" "}
                        <span className="text-[#c27a36]">BARBER SHOP</span>
                    </span>
                </Link>

                {/* CENTER: NAVIGATION */}
                <nav className="hidden md:flex items-center gap-8">
                    {siteConfig.navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium tracking-wide transition-colors duration-200 relative",
                                    isActive
                                        ? "text-primary-500"
                                        : "text-neutral-300 hover:text-primary-400"
                                )}
                            >
                                {link.label}
                                {isActive && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute -bottom-1 left-0 right-0 h-px bg-primary-500"
                                    />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* RIGHT: PHONE PILL & TOGGLE */}
                <div className="flex items-center gap-4">
                    {/* Phone Pill CTA — copper border, hover fill */}
                    <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="hidden md:flex items-center gap-2 rounded-full border border-primary-500 bg-transparent px-5 py-2 text-sm font-semibold text-white transition-all duration-[250ms] hover:bg-primary-500"
                    >
                        <Phone size={14} />
                        <span>{siteConfig.contact.phone}</span>
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden z-50 p-2 text-neutral-100"
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU OVERLAY */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute inset-x-0 top-full h-[calc(100vh-80px)] bg-[#0A0A0A] border-t border-neutral-800 md:hidden flex flex-col p-8"
                    >
                        <nav className="flex flex-col gap-6 text-2xl font-heading font-bold text-center">
                            {siteConfig.navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-neutral-300 hover:text-primary-500 transition-colors duration-200"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="h-px bg-neutral-800 w-full my-4" />
                            <a
                                href={`tel:${siteConfig.contact.phone}`}
                                className="inline-flex items-center justify-center gap-3 rounded-full border border-primary-500 bg-transparent px-6 py-3 text-base font-semibold text-white hover:bg-primary-500 transition-all duration-[250ms] mx-auto"
                            >
                                <Phone size={20} />
                                {siteConfig.contact.phone}
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

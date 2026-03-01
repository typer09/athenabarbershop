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
                    ? "bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800 py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="section-container flex items-center justify-between">
                {/* LEFT: LOGO */}
                <Link href="/" className="relative z-50 flex items-center gap-3 group">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full border border-neutral-800 transition-transform group-hover:scale-105">
                        <Image
                            src="/images/logo.jpg"
                            alt="Athena Barber Shop Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className="font-heading text-xl font-bold tracking-tight hidden sm:block text-neutral-100">
                        ATHENA <span className="text-primary-500">BARBER SHOP</span>
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
                                    "text-sm font-medium tracking-wide transition-colors relative",
                                    isActive
                                        ? "text-white"
                                        : "text-neutral-400 hover:text-white"
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
                    {/* Phone Pill CTA */}
                    <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="hidden md:flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900/50 px-4 py-2 text-sm font-medium text-neutral-300 transition-all hover:bg-neutral-800 hover:text-white hover:border-primary-500/50"
                    >
                        <Phone size={14} className="text-primary-500" />
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
                        className="absolute inset-x-0 top-full h-[calc(100vh-80px)] bg-neutral-950 border-t border-neutral-800 md:hidden flex flex-col p-8"
                    >
                        <nav className="flex flex-col gap-6 text-2xl font-heading font-bold text-center">
                            {siteConfig.navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-neutral-300 hover:text-primary-500 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="h-px bg-neutral-800 w-full my-4" />
                            <a
                                href={`tel:${siteConfig.contact.phone}`}
                                className="flex items-center justify-center gap-3 text-primary-500"
                            >
                                <Phone size={24} />
                                {siteConfig.contact.phone}
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

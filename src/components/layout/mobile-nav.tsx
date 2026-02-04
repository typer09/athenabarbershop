"use client";

/**
 * MOBILE NAVIGATION
 * Slide-out mobile menu with animation
 *
 * TODO: Implement with Framer Motion for smooth animations
 */

import { useState } from "react";
import Link from "next/link";

const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
];

export function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Slide-out Menu */}
            <div
                className={`fixed right-0 top-0 z-50 h-full w-64 transform bg-neutral-900 transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex h-16 items-center justify-end px-4">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="flex h-10 w-10 items-center justify-center"
                        aria-label="Close menu"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                <nav className="px-4">
                    <ul className="space-y-4">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block py-2 text-lg text-neutral-200 transition-colors hover:text-primary-500"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li className="pt-4">
                            <Link
                                href="#book"
                                onClick={() => setIsOpen(false)}
                                className="block rounded-lg bg-primary-500 py-3 text-center font-medium text-neutral-950"
                            >
                                Book Now
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

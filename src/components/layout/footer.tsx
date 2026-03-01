"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { Facebook, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative bg-neutral-950 pt-20 pb-10 overflow-hidden border-t border-neutral-900">
            <div className="section-container relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-20">

                    {/* Column 1: Brand (Full width on mobile) */}
                    <div className="col-span-2 md:col-span-1 space-y-6">
                        <h3 className="font-heading text-xl font-bold tracking-tight text-white">
                            ATHENA <span className="text-primary-500">BARBER SHOP</span>
                        </h3>
                        <p className="text-sm text-neutral-400 leading-relaxed max-w-xs">
                            {siteConfig.description}
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-200">Quick Links</h4>
                        <ul className="space-y-3">
                            {siteConfig.navLinks.map(link => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm text-neutral-400 hover:text-primary-500 transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-200">Services</h4>
                        <ul className="space-y-3">
                            <li className="text-sm text-neutral-400">Signature Haircut</li>
                            <li className="text-sm text-neutral-400">Hot Towel Shave</li>
                            <li className="text-sm text-neutral-400">Beard Styling</li>
                            <li className="text-sm text-neutral-400">VIP Treatments</li>
                        </ul>
                    </div>

                    {/* Column 4: Contact (Full width on mobile) */}
                    <div className="col-span-2 md:col-span-1 space-y-6">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-200">Contact</h4>
                        <address className="not-italic space-y-3">
                            <p className="text-sm text-neutral-400 flex gap-2">
                                <MapPin size={16} className="text-primary-500 shrink-0" />
                                {siteConfig.address.street}, {siteConfig.address.city}
                            </p>
                            <a href={`tel:${siteConfig.contact.phone}`} className="text-sm text-neutral-400 hover:text-white flex gap-2 transition-colors">
                                <Phone size={16} className="text-primary-500 shrink-0" />
                                {siteConfig.contact.phone}
                            </a>
                            <a href={`mailto:${siteConfig.contact.email}`} className="text-sm text-neutral-400 hover:text-white flex gap-2 transition-colors">
                                <Mail size={16} className="text-primary-500 shrink-0" />
                                {siteConfig.contact.email}
                            </a>
                            <a
                                href={siteConfig.social.facebook}
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm text-neutral-400 hover:text-white flex gap-2 transition-colors"
                            >
                                <Facebook size={16} className="text-primary-500 shrink-0" />
                                Facebook: Athena Barber Shop
                            </a>
                        </address>
                    </div>
                </div>

                {/* Bottom Area */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-900 text-xs text-neutral-600">
                    <p>© {new Date().getFullYear()} Athena Barber Shop. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-neutral-400">Privacy Policy</Link>
                        <Link href="#" className="hover:text-neutral-400">Terms of Service</Link>
                    </div>
                </div>
            </div>

            {/* BIG BACKGROUND TEXT */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.03]">
                <span className="text-[12vw] md:text-[14vw] font-heading font-black whitespace-nowrap text-white leading-none">
                    ATHENA BARBER SHOP
                </span>
            </div>
        </footer>
    );
}

import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { Facebook, Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-[#050505] pt-20 pb-10 overflow-hidden border-t border-[#262626]">
            {/* Subtle watermark */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.025]">
                <span className="text-[10vw] md:text-[12vw] font-heading font-black whitespace-nowrap text-white leading-none">
                    ATHENA BARBER SHOP
                </span>
            </div>

            <div className="section-container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">

                    {/* Column 1: Brand */}
                    <div className="space-y-5">
                        <h3 className="font-heading text-xl font-bold tracking-tight text-white">
                            ATHENA <span className="text-primary-500">BARBER SHOP</span>
                        </h3>
                        <p className="text-sm text-neutral-100 leading-relaxed max-w-xs">
                            Premium barbering in Hải Châu, Đà Nẵng. Precision cuts, classic techniques, modern luxury aesthetic.
                        </p>
                        {/* Social pill */}
                        <div className="flex flex-wrap gap-3">
                            <a
                                href={siteConfig.social.facebook}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 border border-neutral-600 hover:border-primary-500 text-neutral-200 font-medium hover:text-white px-4 py-2 rounded-full text-sm transition-all duration-[250ms]"
                            >
                                <Facebook size={14} />
                                Facebook
                            </a>
                            <a
                                href={siteConfig.social.whatsapp}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 border border-neutral-600 hover:border-[#25D366] text-neutral-200 font-medium hover:text-white px-4 py-2 rounded-full text-sm transition-all duration-[250ms]"
                            >
                                <MessageCircle size={14} />
                                WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-5">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white border-b border-[#262626] pb-3">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {siteConfig.navLinks.map(link => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-neutral-100 hover:text-primary-500 transition-colors duration-200 flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-primary-500/50 group-hover:bg-primary-500 transition-colors" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div className="space-y-5">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white border-b border-[#262626] pb-3">
                            Contact Info
                        </h4>
                        <address className="not-italic space-y-4">
                            <div className="flex gap-3 items-start">
                                <MapPin size={15} className="text-primary-500 shrink-0 mt-0.5" />
                                <p className="text-sm text-neutral-100 leading-snug">
                                    {siteConfig.address.street}, {siteConfig.address.city}, Đà Nẵng
                                </p>
                            </div>
                            <a href={`tel:${siteConfig.contact.phone}`} className="flex gap-3 items-center text-sm text-neutral-100 hover:text-white transition-colors">
                                <Phone size={15} className="text-primary-500 shrink-0" />
                                {siteConfig.contact.phone}
                            </a>
                            <a href={`mailto:${siteConfig.contact.email}`} className="flex gap-3 items-start text-sm text-neutral-100 hover:text-white transition-colors break-all">
                                <Mail size={15} className="text-primary-500 shrink-0 mt-0.5" />
                                {siteConfig.contact.email}
                            </a>
                            <div className="flex gap-3 items-center">
                                <Clock size={15} className="text-primary-500 shrink-0" />
                                <p className="text-sm text-neutral-100">
                                    Everyday: 9:00 AM – 7:30 PM
                                </p>
                            </div>
                        </address>
                    </div>
                </div>

                {/* Bottom area */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#262626] text-xs text-neutral-300">
                    <p>© {currentYear} Athena Barber Shop. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-primary-500 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary-500 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

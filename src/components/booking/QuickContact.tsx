"use client";

import { siteConfig } from "@/lib/config";
import { Phone, MessageCircle, Facebook, ArrowUpRight } from "lucide-react";

export function QuickContact() {
    return (
        <div className="flex flex-col gap-6">
            {/* WhatsApp - DOMINANT */}
            <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-[#25D366] p-6 transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
            >
                <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-5">
                        <div className="flex h-14 w-14 items-center justify-center bg-white/20 text-white">
                            <MessageCircle size={28} fill="currentColor" />
                        </div>
                        <div>
                            <h4 className="font-heading text-xl font-black tracking-wider text-neutral-950 uppercase">Chat on WhatsApp</h4>
                            <p className="font-body text-base text-neutral-900 font-medium opacity-80">Instant Booking & Support</p>
                        </div>
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center bg-white/20 text-neutral-950 opacity-0 transform translate-x-4 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                        <ArrowUpRight size={20} />
                    </div>
                </div>
            </a>

            {/* Secondary Actions - Strong Button Style */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Call Now */}
                <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="group flex items-center gap-4 bg-neutral-900 border border-neutral-800 p-5 transition-all hover:border-primary-500 active:scale-[0.98]"
                >
                    <div className="flex h-12 w-12 items-center justify-center bg-neutral-800 text-neutral-400 group-hover:bg-primary-500/10 group-hover:text-primary-500 transition-colors">
                        <Phone size={22} />
                    </div>
                    <div>
                        <h4 className="font-heading font-black tracking-widest text-neutral-200 group-hover:text-primary-500 uppercase text-sm">Call Shop</h4>
                        <p className="text-xs text-neutral-500 mt-1">{siteConfig.contact.phone}</p>
                    </div>
                </a>

                {/* Facebook */}
                <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 bg-neutral-900 border border-neutral-800 p-5 transition-all hover:border-primary-500 active:scale-[0.98]"
                >
                    <div className="flex h-12 w-12 items-center justify-center bg-neutral-800 text-neutral-400 group-hover:bg-blue-500/10 group-hover:text-blue-500 transition-colors">
                        <Facebook size={22} />
                    </div>
                    <div>
                        <h4 className="font-heading font-black tracking-widest text-neutral-200 group-hover:text-primary-500 uppercase text-sm">Messenger</h4>
                        <p className="text-xs text-neutral-500 mt-1">The Black Barbershop</p>
                    </div>
                </a>
            </div>
        </div>
    );
}

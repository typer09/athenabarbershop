"use client";

import { siteConfig } from "@/lib/config";
import { Phone, MessageCircle, Facebook, ArrowUpRight } from "lucide-react";

export function QuickContact() {
    return (
        <div className="flex flex-col gap-4">
            {/* WhatsApp - DOMINANT */}
            <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-sm bg-[#25D366] px-5 py-4 transition-all duration-300 hover:brightness-110 active:scale-[0.98] shadow-lg shadow-[#25D366]/20"
            >
                <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <MessageCircle size={24} fill="currentColor" className="text-white" />
                        <div className="flex flex-col">
                            <h4 className="font-bold text-neutral-950 uppercase tracking-wider text-sm leading-tight">Chat on WhatsApp</h4>
                            <p className="text-xs text-neutral-900/80 font-medium">Instant Booking</p>
                        </div>
                    </div>
                    <ArrowUpRight size={18} className="text-neutral-950 opacity-70 group-hover:translate-x-1 transition-transform" />
                </div>
            </a>

            {/* Secondary Actions */}
            <div className="grid grid-cols-2 gap-4">
                {/* Call Now */}
                <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="group flex items-center gap-3 rounded-sm bg-neutral-900 border border-neutral-800 px-4 py-4 transition-all hover:border-primary-500/50 hover:bg-neutral-800/50 active:scale-[0.98]"
                >
                    <div className="shrink-0 text-neutral-200 group-hover:text-primary-500 transition-colors">
                        <Phone size={20} />
                    </div>
                    <div className="overflow-hidden">
                        <h4 className="font-bold text-neutral-200 group-hover:text-primary-500 uppercase text-xs tracking-wider truncate">Call Shop</h4>
                        <p className="text-[10px] text-neutral-200 truncate">{siteConfig.contact.phone}</p>
                    </div>
                </a>

                {/* Facebook */}
                <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-sm bg-neutral-900 border border-neutral-800 px-4 py-4 transition-all hover:border-blue-500/50 hover:bg-neutral-800/50 active:scale-[0.98]"
                >
                    <div className="shrink-0 text-neutral-200 group-hover:text-blue-500 transition-colors">
                        <Facebook size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-neutral-200 group-hover:text-blue-500 uppercase text-xs tracking-wider">Messenger</h4>
                        <p className="text-[10px] text-neutral-200">Athena Barber Shop</p>
                    </div>
                </a>
            </div>
        </div>
    );
}

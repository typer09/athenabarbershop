"use client";

import { siteConfig } from "@/lib/config";
import { Phone, Mail, MapPin, Clock, Facebook, MessageCircle } from "lucide-react";
import { StrongButton } from "@/components/ui/strong-button";

export function Contact() {
    return (
        <section id="contact" className="section-padding bg-neutral-900">
            <div className="section-container">
                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Info Side */}
                    <div className="flex flex-col justify-center">
                        <h2 className="heading-lg mb-6 text-neutral-50">Visit Us</h2>
                        <p className="mb-8 text-neutral-100">
                            Walk-ins welcome, appointments recommended. Come experience the best cut in Da Nang.
                        </p>

                        <div className="space-y-6">
                            {/* Address */}
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-neutral-800 text-primary-500">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-neutral-200">Address</h3>
                                    <p className="text-neutral-100">{siteConfig.address.full}</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-neutral-800 text-primary-500">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-neutral-200">Phone</h3>
                                    <p className="text-neutral-100">{siteConfig.contact.phone}</p>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-neutral-800 text-primary-500">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-neutral-200">Opening Hours</h3>
                                    <p className="text-neutral-100">Everyday: 9:00 AM - 8:00 PM</p>
                                </div>
                            </div>
                        </div>

                        {/* CTAs */}
                        <div className="mt-10 grid grid-cols-2 gap-4 w-full md:w-auto">
                            <StrongButton
                                variant="primary"
                                onClick={() => window.open(siteConfig.social.facebook, "_blank")}
                                className="h-14 w-full px-4 md:px-8 text-xs md:text-sm"
                            >
                                <Facebook size={18} className="shrink-0" />
                                <span className="truncate">FACEBOOK</span>
                            </StrongButton>
                            <StrongButton
                                variant="outline"
                                onClick={() => window.open(`tel:${siteConfig.contact.phone}`, "_self")}
                                className="h-14 w-full px-4 md:px-8 text-xs md:text-sm"
                            >
                                <Phone size={18} className="shrink-0" />
                                <span className="truncate">CALL NOW</span>
                            </StrongButton>
                        </div>
                    </div>

                    {/* Map Side */}
                    <div className="h-[400px] overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 lg:h-auto relative">
                        <iframe
                            title="Location Map"
                            src={siteConfig.address.googleMapEmbed}
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "grayscale(1) invert(1) contrast(1.2)" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="opacity-80 transition-opacity hover:opacity-100"
                        />
                        {/* View on Map Button */}
                        <a
                            href={siteConfig.address.googleMapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute bottom-4 right-4 flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-sm font-bold text-xs uppercase tracking-wider transition-all duration-[250ms] shadow-lg hover:shadow-xl active:scale-95"
                        >
                            <MapPin size={16} />
                            <span>Get Directions</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

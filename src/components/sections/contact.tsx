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
                        <p className="mb-8 text-neutral-400">
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
                                    <p className="text-neutral-400">{siteConfig.address.full}</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-neutral-800 text-primary-500">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-neutral-200">Phone</h3>
                                    <p className="text-neutral-400">{siteConfig.contact.phone}</p>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-neutral-800 text-primary-500">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-neutral-200">Opening Hours</h3>
                                    <p className="text-neutral-400">Everyday: 9:00 AM - 8:00 PM</p>
                                </div>
                            </div>
                        </div>

                        {/* CTAs */}
                        <div className="mt-10 flex flex-wrap gap-4">
                            <StrongButton
                                variant="primary"
                                onClick={() => window.open(siteConfig.social.facebook, "_blank")}
                                className="h-14 px-8"
                            >
                                <Facebook size={20} />
                                MESSAGE ON FACEBOOK
                            </StrongButton>
                            <StrongButton
                                variant="outline"
                                onClick={() => window.open(`tel:${siteConfig.contact.phone}`, "_self")}
                                className="h-14 px-8"
                            >
                                <Phone size={20} />
                                CALL NOW
                            </StrongButton>
                        </div>
                    </div>

                    {/* Map Side */}
                    <div className="h-[400px] overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 lg:h-auto">
                        <iframe
                            title="Location Map"
                            src={siteConfig.address.googleMap}
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "grayscale(1) invert(1) contrast(1.2)" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="opacity-80 transition-opacity hover:opacity-100"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

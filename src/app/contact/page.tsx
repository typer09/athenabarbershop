import type { Metadata } from "next";
import { BookingForm } from "@/components/booking/BookingForm";
import { QuickContact } from "@/components/booking/QuickContact";
import { siteConfig } from "@/lib/config";
import { MapPin, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Contact & Book | Athena Barber Shop Da Nang",
    description:
        "Book your appointment at Athena Barber Shop Da Nang. Call +84 78 502 8805 or WhatsApp. Located in Hai Chau, Da Nang, Vietnam. Open daily 9:00 AM - 9:30 PM.",
    openGraph: {
        title: "Book Your Appointment | Athena Barber Shop Da Nang",
        description:
            "Contact Athena Barber Shop in Hai Chau, Da Nang. Call, WhatsApp, or book online.",
    },
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-neutral-950 pt-16 pb-20">
            {/* Header / Intro */}
            <div className="section-container pt-8 pb-12">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-primary-500 transition-colors mb-8"
                >
                    <ArrowLeft size={14} />
                    <span>Back to Home</span>
                </Link>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h1 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl mb-4">
                            Contact Athena Barber Shop Da Nang
                        </h1>
                        <p className="text-neutral-400 max-w-lg text-lg">
                            The quickest way to book is via WhatsApp or a direct call.
                        </p>
                    </div>
                </div>
            </div>

            <div className="section-container">
                <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">

                    {/* LEFT COLUMN: PRIMARY CONTACT (Dominant) */}
                    <div className="lg:col-span-6 space-y-12">
                        {/* 1. CONTACT ACTIONS (Hero Element) */}
                        <section>
                            <div className="mb-6 flex items-center gap-3">
                                <span className="h-px w-8 bg-primary-500"></span>
                                <h2 className="text-sm font-bold uppercase tracking-widest text-primary-500">Fast Connect</h2>
                            </div>
                            <QuickContact />
                        </section>

                        {/* 2. LOCATION & HOURS (Merged Compact Card) */}
                        <section className="rounded-sm bg-neutral-900/30 border border-white/5 p-6 md:p-8 backdrop-blur-sm">
                            <div className="flex flex-col gap-8 md:flex-row md:gap-12">
                                {/* Location */}
                                <div className="flex-1 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <MapPin size={18} className="text-neutral-400" />
                                        <h3 className="font-heading text-lg font-bold text-white">Visit Us in Da Nang</h3>
                                    </div>
                                    <p className="text-sm text-neutral-400 leading-relaxed">
                                        {siteConfig.address.full}
                                    </p>
                                    <a
                                        href={siteConfig.address.googleMapLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block text-xs font-bold uppercase tracking-wider text-primary-500 hover:text-white transition-colors border-b border-primary-500/30 hover:border-white pb-0.5"
                                    >
                                        Open in Google Maps
                                    </a>
                                </div>

                                {/* Divider */}
                                <div className="hidden md:block w-px bg-neutral-800" />

                                {/* Hours */}
                                <div className="flex-1 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <Clock size={18} className="text-neutral-400" />
                                        <h3 className="font-heading text-lg font-bold text-white">Hours</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {siteConfig.hours.map((h, i) => (
                                            <li key={i} className="flex justify-between text-sm">
                                                <span className="text-neutral-500">{h.day}</span>
                                                <span className="text-neutral-300 font-medium">{h.opens} - {h.closes}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* 3. GOOGLE MAPS EMBED */}
                        <section className="rounded-sm overflow-hidden border border-white/5">
                            <div className="mb-4 flex items-center gap-3 px-1">
                                <span className="h-px w-8 bg-primary-500"></span>
                                <h2 className="text-sm font-bold uppercase tracking-widest text-primary-500">Find Us in Hai Chau, Da Nang</h2>
                            </div>
                            <div className="aspect-video w-full">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1917.6!2d108.2191642!3d16.0682212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142190d421a7a63%3A0xed79659dc82c9ae!2sATHENA%20BARBER%20SHOP!5e0!3m2!1sen!2s!4v1709000000000!5m2!1sen!2s"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Athena Barber Shop Da Nang Location"
                                    className="grayscale hover:grayscale-0 transition-all duration-500"
                                ></iframe>
                            </div>
                        </section>
                    </div>

                    {/* RIGHT COLUMN: BOOKING FORM (Secondary) */}
                    <div className="lg:col-span-6">
                        <div className="rounded-sm bg-neutral-900 border border-neutral-800 p-8 shadow-2xl relative overflow-hidden">
                            {/* Subtle top visual */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neutral-700 to-transparent opacity-20" />

                            <div className="mb-8">
                                <h2 className="font-heading text-2xl font-bold text-white mb-2">Book Your Haircut in Da Nang</h2>
                                <p className="text-sm text-neutral-500">
                                    Fill out this form to prepare your booking request.
                                </p>
                            </div>

                            <BookingForm />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

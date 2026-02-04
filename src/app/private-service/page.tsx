"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Play, Star, ShieldCheck, Clock } from "lucide-react";
import { StrongButton } from "@/components/ui/strong-button";
import BlurText from "@/components/ui/blur-text";
import { PageBackButton } from "@/components/ui/page-back-button";

export default function PrivateServicePage() {
    return (
        <main className="min-h-screen bg-neutral-950 pt-20 pb-20">
            <PageBackButton />
            {/* Header / Intro */}
            <div className="section-container pt-8 pb-16">

                <div className="flex flex-col md:flex-row items-end justify-between gap-8 border-b border-neutral-900 pb-12">
                    <div className="max-w-2xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="font-heading text-4xl font-black text-white md:text-6xl lg:text-7xl mb-6 uppercase tracking-tight"
                        >
                            Private <span className="text-primary-500">Custom</span>
                        </motion.h1>
                        <p className="text-neutral-400 text-lg md:text-xl font-light leading-relaxed">
                            An exclusive, agreement-based service for those who demand perfection.
                            Beyond a haircut—this is a curated grooming strategy tailored to your lifestyle and bone structure.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 text-right">
                        <div className="text-neutral-500 font-heading font-bold text-sm uppercase tracking-widest">Starting Price</div>
                        <div className="text-3xl font-black text-white">
                            Agreement <span className="text-primary-500 text-lg">Base</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* VIDEO SHOWCASE GRID */}
            <section className="section-container mb-24">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Video Card 1 */}
                    <div className="group relative aspect-video bg-neutral-900 rounded-sm overflow-hidden border border-neutral-800 hover:border-primary-500/50 transition-all cursor-pointer">
                        <video
                            src="/videos/4b793a34-471d-40f1-8811-532e9c922402.mp4"
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-neutral-950 to-transparent z-10">
                            <h3 className="font-heading text-white text-xl font-bold uppercase">The Executive Cut</h3>
                        </div>
                    </div>

                    {/* Video Card 2 */}
                    <div className="group relative aspect-video bg-neutral-900 rounded-sm overflow-hidden border border-neutral-800 hover:border-primary-500/50 transition-all cursor-pointer">
                        <video
                            src="/videos/7b938a35-733d-456a-8028-f43e4748d150.mp4"
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-neutral-950 to-transparent z-10">
                            <h3 className="font-heading text-white text-xl font-bold uppercase">Beard Architecture</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* DETAILS / "THE AGREEMENT" */}
            <section className="bg-neutral-900/30 border-y border-neutral-900 py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')] opacity-5 mix-blend-overlay pointer-events-none" />

                <div className="section-container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <BlurText
                                text="THE PROCESS."
                                delay={50}
                                animateBy="words"
                                direction="bottom"
                                className="text-4xl md:text-5xl font-heading font-black text-white leading-[0.9] tracking-tighter block mb-6"
                            />
                            <div className="space-y-6 text-neutral-400 text-lg font-light leading-relaxed">
                                <p>
                                    This isn't just a booking; it's a consultation. We analyze your hair texture,
                                    face shape, and lifestyle to engineer a look that commands respect.
                                </p>
                                <p>
                                    <strong className="text-primary-500 font-bold">Mutual Agreement:</strong> Price and duration are determined
                                    after a robust discussion about your goals. This ensures no rush, no compromises,
                                    and a result that stands the test of time.
                                </p>
                            </div>

                            <ul className="mt-10 space-y-4">
                                <li className="flex items-center gap-4 text-neutral-300">
                                    <ShieldCheck className="text-primary-500" size={24} />
                                    <span className="font-bold tracking-wide uppercase text-sm">Private Environment</span>
                                </li>
                                <li className="flex items-center gap-4 text-neutral-300">
                                    <Clock className="text-primary-500" size={24} />
                                    <span className="font-bold tracking-wide uppercase text-sm">Extended Duration (1.5 - 2 Hours)</span>
                                </li>
                                <li className="flex items-center gap-4 text-neutral-300">
                                    <Star className="text-primary-500" size={24} />
                                    <span className="font-bold tracking-wide uppercase text-sm">Premium Products Only</span>
                                </li>
                            </ul>
                        </div>

                        {/* Booking Card */}
                        <div className="bg-neutral-950 border border-neutral-800 p-8 md:p-10 rounded-sm shadow-2xl">
                            <h3 className="font-heading text-2xl font-bold text-white mb-2">Request Consultation</h3>
                            <p className="text-neutral-500 text-sm mb-8">Direct line to Master Barber Mai Duc.</p>

                            <StrongButton
                                onClick={() => window.open(`https://wa.me/84905123456?text=I'm interested in the Private Custom Service.`, '_blank')}
                                className="w-full"
                            >
                                DISCUSS ON WHATSAPP
                            </StrongButton>
                            <p className="text-center text-xs text-neutral-600 mt-4">
                                By appointment only. Deposit may be required.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

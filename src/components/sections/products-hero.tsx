"use client";

import { motion } from "framer-motion";

export function ProductsHero() {
    return (
        <section className="relative flex items-center justify-center overflow-hidden bg-[#0A0A0A] pt-32 pb-20">
            {/* Subtle copper glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[120px]"
                    style={{ background: "rgba(194, 122, 54, 0.08)" }}
                />
            </div>

            {/* Top border line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c27a36]/40 to-transparent" />

            <div className="section-container relative z-10 text-center">
                {/* Label */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-xs font-bold tracking-[0.3em] text-primary-500 uppercase mb-6"
                >
                    Athena Barber Shop
                </motion.p>

                {/* Main title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="font-cinzel font-bold uppercase text-white leading-none"
                    style={{
                        fontSize: "clamp(56px, 10vw, 120px)",
                        letterSpacing: "0.04em",
                        textShadow: "0 8px 30px rgba(0,0,0,0.45)",
                    }}
                >
                    PRODUCTS
                </motion.h1>

                {/* Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mx-auto my-6 h-px w-32 bg-gradient-to-r from-transparent via-[#c27a36] to-transparent origin-center"
                />

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="max-w-md mx-auto font-body text-lg text-white/60 leading-relaxed"
                >
                    Premium grooming products used in our barbershop.
                </motion.p>
            </div>

            {/* Bottom border line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
        </section>
    );
}

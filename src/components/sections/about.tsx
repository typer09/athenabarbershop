"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function About() {
    return (
        <section id="about" className="section-padding overflow-hidden bg-neutral-950">
            <div className="section-container">
                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col justify-center"
                    >
                        <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-primary-500">
                            Our Identity
                        </span>
                        <h2 className="heading-lg mb-8 text-neutral-50">
                            Dark Aesthetic. <br />
                            <span className="text-neutral-500">Uncompromising Quality.</span>
                        </h2>

                        <div className="space-y-6 text-lg text-neutral-400 leading-relaxed">
                            <p>
                                Located in the localized An Thuong area (K38), The Black Barbershop brings a distinct
                                <span className="text-neutral-200 font-medium"> &quot;Innoir&quot;</span> atmosphere to Da Nang&apos;s grooming scene.
                                We move away from the noise to focus purely on the craft.
                            </p>
                            <p>
                                No rush, no shortcuts. Just precision cuts, sharp fades, and the relaxation of a traditional
                                cold towel shave. We specialize in giving you a look that fits your head shape and lifestyle.
                            </p>
                        </div>

                        <div className="mt-10 border-l-2 border-primary-500 pl-6">
                            <p className="font-heading text-xl italic text-neutral-300">
                                &quot;It&rsquo;s not just about the haircut, it&rsquo;s about how you feel when you leave the chair.&quot;
                            </p>
                        </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none"
                    >
                        {/* Decorative box */}
                        <div className="absolute -bottom-6 -right-6 h-full w-full border border-neutral-800 bg-transparent rounded-lg" />

                        <div className="relative h-full w-full overflow-hidden rounded-lg bg-neutral-900 shadow-2xl">
                            <Image
                                src="/images/about/about-bg.jpg" // Ensure this maps to a real file or fallback
                                alt="The Black Barbershop Interior"
                                fill
                                className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

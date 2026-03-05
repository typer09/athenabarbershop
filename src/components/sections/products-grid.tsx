"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

// ── Placeholder product data by category ─────────────────────────────────────
const CATEGORIES = [
    {
        id: "reuzel",
        label: "REUZEL",
        products: [
            { id: "r1", name: "Reuzel Pink Pomade", price: "350,000₫" },
            { id: "r2", name: "Reuzel Blue Pomade", price: "350,000₫" },
            { id: "r3", name: "Reuzel Fiber", price: "380,000₫" },
            { id: "r4", name: "Reuzel Clay", price: "380,000₫" },
        ],
    },
    {
        id: "shape",
        label: "SHAPE POMADE",
        products: [
            { id: "s1", name: "Shape Original Hold", price: "280,000₫" },
            { id: "s2", name: "Shape Strong Hold", price: "280,000₫" },
        ],
    },
];

function ProductCard({ name, price, index }: { name: string; price: string; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            className="group flex flex-col bg-[#141414] border border-neutral-800 rounded-xl overflow-hidden hover:border-[#c27a36]/40 transition-colors duration-300"
        >
            {/* Image placeholder */}
            <div className="relative aspect-square bg-neutral-900 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900" />
                {/* Placeholder icon */}
                <div className="relative z-10 flex flex-col items-center gap-2 text-neutral-700 group-hover:text-neutral-500 transition-colors duration-300">
                    <ShoppingBag size={40} strokeWidth={1} />
                    <span className="text-xs tracking-widest uppercase font-medium">Product Image</span>
                </div>
                {/* Subtle copper overlay on hover */}
                <div className="absolute inset-0 bg-[#c27a36]/0 group-hover:bg-[#c27a36]/4 transition-all duration-300" />
            </div>

            {/* Card body */}
            <div className="flex flex-col gap-1 p-5">
                <h3 className="font-heading font-bold text-white text-sm tracking-wide uppercase leading-snug">
                    {name}
                </h3>
                <p className="font-body text-[#c27a36] text-sm font-semibold">{price}</p>
            </div>
        </motion.div>
    );
}

export function ProductsGrid() {
    const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);

    const currentCategory = CATEGORIES.find((c) => c.id === activeCategory)!;

    return (
        <section className="bg-[#0D0D0D] py-24">
            <div className="section-container">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-14"
                >
                    <p className="text-xs font-bold tracking-[0.25em] text-primary-500 uppercase mb-3">
                        Available In-Shop
                    </p>
                    <h2 className="font-heading text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
                        Our{" "}
                        <span className="text-primary-500">Products</span>
                    </h2>
                    <div className="mx-auto mt-4 h-px w-20 bg-gradient-to-r from-transparent via-[#c27a36]/50 to-transparent" />
                </motion.div>

                {/* Category tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex justify-center gap-3 mb-12 flex-wrap"
                >
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase border transition-all duration-250 ${activeCategory === cat.id
                                    ? "bg-[#c27a36] border-[#c27a36] text-white"
                                    : "bg-transparent border-neutral-700 text-neutral-400 hover:border-[#c27a36]/50 hover:text-neutral-200"
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </motion.div>

                {/* Product grid */}
                {currentCategory.products.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                        {currentCategory.products.map((product, i) => (
                            <ProductCard
                                key={product.id}
                                name={product.name}
                                price={product.price}
                                index={i}
                            />
                        ))}
                    </div>
                ) : (
                    /* Empty state */
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="text-center py-20"
                    >
                        <ShoppingBag size={48} className="mx-auto mb-4 text-neutral-700" strokeWidth={1} />
                        <p className="text-neutral-500 text-sm tracking-wide uppercase">
                            Premium grooming products available at our shop.
                        </p>
                        <p className="text-neutral-600 text-xs mt-1 tracking-wide">
                            Products will be updated soon.
                        </p>
                    </motion.div>
                )}

                {/* Coming soon note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center text-neutral-600 text-xs tracking-widest uppercase mt-12"
                >
                    More products coming soon · Hair Tonic · Clay / Wax · Athena Products
                </motion.p>
            </div>
        </section>
    );
}

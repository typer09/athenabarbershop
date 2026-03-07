"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const REVIEWS = [
    {
        id: 1,
        name: "Food Bohemians",
        title: "Local Guide",
        avatar: "/images/logo.jpg",
        content: "Great cut. Very professional group. They also make great cocktails in house.",
        services: "Razor cut, Scissor cut, Straight razor shave, Beard trim, Hot towel shave",
        image: "/images/2025.jpg"
    },
    {
        id: 2,
        name: "Johnnie T",
        title: "8 reviews",
        avatar: "/images/logo.jpg", // Kept generic for now
        content: "I love the hair cut, great barber. I highly recommend this place for anyone who's looking for a good haircut.",
        services: null, 
        image: "/images/hoian.jpg"
    }
];

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    const nextReview = () => {
        setCurrentIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
        setIsAutoPlay(false);
    };

    const prevReview = () => {
        setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
        setIsAutoPlay(false);
    };

    // Autoplay slider
    useEffect(() => {
        if (!isAutoPlay) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [isAutoPlay]);

    return (
        <section className="relative bg-neutral-950 py-24 overflow-hidden border-t border-neutral-900">
            <div className="section-container relative">
                {/* Heading & Navigation */}
                <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6 relative z-30">
                    <div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase">
                            What Clients Say
                        </h2>
                    </div>
                    
                    {/* Navigation Buttons */}
                    <div className="flex gap-4">
                        <button 
                            onClick={prevReview}
                            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                            aria-label="Previous review"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button 
                            onClick={nextReview}
                            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                            aria-label="Next review"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={currentIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="flex flex-col lg:flex-row relative items-center lg:items-stretch"
                        >
                            {/* Left Image */}
                            <div className="w-full lg:w-1/2 relative z-10 lg:min-h-[600px] flex items-center">
                                <div className="relative aspect-[4/5] w-full max-w-[500px] lg:max-w-none mx-auto overflow-hidden shadow-2xl ring-1 ring-white/10">
                                    <Image
                                        src={REVIEWS[currentIndex].image}
                                        alt={REVIEWS[currentIndex].name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Right Content Box */}
                            <div className="w-full lg:w-[60%] bg-white mt-[-20px] lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 p-8 md:p-14 lg:p-20 z-20 shadow-2xl">
                                {/* Quote graphic */}
                                <div className="absolute right-4 md:right-10 bottom-0 text-[120px] md:text-[250px] leading-none text-neutral-100 font-serif opacity-80 select-none pointer-events-none">
                                    "
                                </div>

                                <div className="relative z-10">
                                    {/* Profile Info */}
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8 md:mb-12">
                                        <div className="flex gap-4">
                                            <div className="w-16 h-16 relative overflow-hidden rounded-full border-2 border-[#D4AF37]">
                                                <Image src={REVIEWS[currentIndex].avatar} alt={REVIEWS[currentIndex].name} fill className="object-cover" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-lg md:text-xl font-bold text-neutral-900 tracking-wide uppercase">
                                                {REVIEWS[currentIndex].name}
                                            </h4>
                                            <p className="text-sm md:text-base text-[#D4AF37] font-semibold uppercase tracking-wider mt-1">
                                                {REVIEWS[currentIndex].title}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Stars */}
                                    <div className="flex gap-1.5 mb-8 text-[#D4AF37]">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={24} fill="currentColor" strokeWidth={0} />
                                        ))}
                                    </div>

                                    {/* Text */}
                                    <p className="text-lg md:text-2xl text-neutral-800 leading-relaxed font-medium mb-6">
                                        "{REVIEWS[currentIndex].content}"
                                    </p>
                                    
                                    {/* Services block based on the Google Review */}
                                    {REVIEWS[currentIndex].services && (
                                        <div className="mt-8 pt-8 border-t border-neutral-200">
                                            <p className="text-sm md:text-base text-neutral-500">
                                                <strong className="text-neutral-900 inline-block mb-2">Services:</strong>
                                                <br />
                                                {REVIEWS[currentIndex].services}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Dots indicator */}
                 <div className="flex justify-center gap-2 mt-12 md:mt-16 relative z-30">
                    {REVIEWS.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setCurrentIndex(idx);
                                setIsAutoPlay(false);
                            }}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                currentIndex === idx ? "w-8 bg-[#D4AF37]" : "w-2 bg-neutral-600"
                            }`}
                            aria-label={`Go to review ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

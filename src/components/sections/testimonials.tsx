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
        image: "/images/reviews/2025.jpg"
    },
    {
        id: 2,
        name: "Johnnie T",
        title: "8 reviews",
        avatar: "/images/logo.jpg", // Kept generic for now
        content: "I love the hair cut, great barber. I highly recommend this place for anyone who's looking for a good haircut.",
        services: null, 
        image: "/images/reviews/johnnie-t.jpg"
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
                            <div className="w-full lg:w-[60%] bg-[#1A1A1A] mt-[-20px] lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 p-10 md:p-14 lg:p-20 z-20 shadow-[-20px_0_40px_rgba(0,0,0,0.5)] border-l-4 border-[#D4AF37]">
                                <div className="relative z-10 flex flex-col justify-between h-full min-h-[300px]">
                                    {/* Profile Info & Stars */}
                                    <div className="mb-8">
                                        <div className="flex items-center gap-6 mb-6">
                                            <div className="w-16 h-16 relative overflow-hidden rounded-full border-2 border-[#D4AF37]">
                                                <Image src={REVIEWS[currentIndex].avatar} alt={REVIEWS[currentIndex].name} fill className="object-cover" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl md:text-2xl font-black text-white tracking-wider uppercase mb-1">
                                                    {REVIEWS[currentIndex].name}
                                                </h4>
                                                <p className="text-sm md:text-md text-[#D4AF37] font-bold uppercase tracking-widest">
                                                    {REVIEWS[currentIndex].title}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-1.5 text-[#D4AF37]">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={22} fill="currentColor" strokeWidth={0} />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Text and large quotes wrapper */}
                                    <div className="relative mt-auto">
                                        <p className="text-lg md:text-2xl text-neutral-200 leading-relaxed font-medium md:pr-16 relative z-10">
                                            "{REVIEWS[currentIndex].content}"
                                        </p>
                                        
                                        {/* Quote graphic - moved to the right side of the text */}
                                        <div className="absolute top-[-20px] md:top-auto bottom-[-60px] md:bottom-[-20px] right-0 md:-right-4 text-[120px] md:text-[180px] leading-none text-neutral-800 font-serif opacity-50 select-none pointer-events-none z-0">
                                            "
                                        </div>
                                    </div>
                                    
                                    {/* Services block based on the Google Review */}
                                    {REVIEWS[currentIndex].services && (
                                        <div className="mt-8 pt-6 border-t border-neutral-800 relative z-10">
                                            <p className="text-sm md:text-base text-neutral-400">
                                                <strong className="text-white inline-block mb-1 uppercase tracking-wider text-xs">Services</strong>
                                                <br />
                                                <span className="font-medium text-neutral-500">{REVIEWS[currentIndex].services}</span>
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

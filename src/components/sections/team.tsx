"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Twitter } from "lucide-react";

interface Barber {
    id: number;
    name: string;
    role: string;
    experience: string;
    specialty: string;
    imageSrc: string;
    socials: {
        facebook?: string;
        twitter?: string;
    };
}

const barbers: Barber[] = [
    {
        id: 1,
        name: "Minh Khoa",
        role: "Master Barber",
        experience: "8 Years",
        specialty: "Classic Fades & Pompadour",
        imageSrc: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&fit=crop&crop=faces",
        socials: {
            facebook: "#",
            twitter: "#",
        },
    },
    {
        id: 2,
        name: "Trung Hiếu",
        role: "Barber & Colorist",
        experience: "6 Years",
        specialty: "Hair Color & Chemical Treatments",
        imageSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop&crop=faces",
        socials: {
            facebook: "#",
            twitter: "#",
        },
    },
    {
        id: 3,
        name: "Quang Dũng",
        role: "Senior Barber",
        experience: "5 Years",
        specialty: "Skin Fade & Beard Sculpting",
        imageSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=faces",
        socials: {
            facebook: "#",
            twitter: "#",
        },
    },
    {
        id: 4,
        name: "Gia Bảo",
        role: "Barber",
        experience: "3 Years",
        specialty: "Textured Cuts & Modern Styles",
        imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=faces",
        socials: {
            facebook: "#",
            twitter: "#",
        },
    },
    {
        id: 5,
        name: "Hải Nam",
        role: "Grooming Specialist",
        experience: "4 Years",
        specialty: "Hot Towel Shave & Relaxation",
        imageSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop&crop=faces",
        socials: {
            facebook: "#",
            twitter: "#",
        },
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.12,
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

export function Team() {
    return (
        <section className="relative bg-neutral-950 py-24 overflow-hidden border-t border-neutral-900">
            {/* Subtle texture overlay */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px)",
                }}
            />

            <div className="section-container relative z-10">
                {/* ---- HEADER ---- */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-14 gap-6">
                    <div>
                        {/* Badge */}
                        <div className="flex items-center gap-2 mb-4">
                            <span className="inline-block w-2 h-2 rounded-full bg-primary-500" />
                            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary-600">
                                Meet With Team
                            </span>
                        </div>

                        <h2 className="heading-lg text-neutral-50 leading-tight max-w-xs">
                            Expert Grooming
                            <br />
                            Consultations
                        </h2>
                    </div>

                    {/* Join Us CTA */}
                    <div className="flex-shrink-0 mt-1">
                        <Link
                            href="#contact"
                            className="inline-block border-2 border-neutral-50 text-neutral-50 text-xs font-bold uppercase tracking-[0.2em] px-8 py-3 hover:bg-neutral-50 hover:text-neutral-950 transition-all duration-300"
                        >
                            Join With Us
                        </Link>
                    </div>
                </div>

                {/* ---- BARBER GRID ---- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {barbers.map((barber, i) => (
                        <motion.div
                            key={barber.id}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            variants={cardVariants}
                            className="group relative flex flex-col"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[3/4] overflow-hidden bg-neutral-800 rounded-sm">
                                <Image
                                    src={barber.imageSrc}
                                    alt={`${barber.name} - ${barber.role}`}
                                    fill
                                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                                    unoptimized
                                />
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />

                                {/* Experience badge — top-right */}
                                <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-sm">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary-400">
                                        {barber.experience}
                                    </p>
                                </div>
                            </div>

                            {/* Info Card — overlaps the image bottom */}
                            <div className="relative -mt-6 mx-3 bg-neutral-950 shadow-xl px-4 py-4 z-10 rounded-sm border border-primary-500">
                                {/* Role */}
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-400 mb-1">
                                    {barber.role}
                                </p>

                                {/* Name */}
                                <h3 className="text-base font-black uppercase text-white leading-tight mb-1">
                                    {barber.name}
                                </h3>

                                {/* Specialty */}
                                <p className="text-[11px] text-neutral-300 font-medium mb-3 leading-tight">
                                    {barber.specialty}
                                </p>

                                {/* Divider */}
                                <div className="h-px bg-neutral-700 mb-3" />

                                {/* Social Icons */}
                                <div className="flex items-center gap-3">
                                    {barber.socials.facebook && (
                                        <Link
                                            href={barber.socials.facebook}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                                            aria-label={`${barber.name} Facebook`}
                                        >
                                            <Facebook size={14} />
                                        </Link>
                                    )}
                                    {barber.socials.twitter && (
                                        <Link
                                            href={barber.socials.twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                                            aria-label={`${barber.name} Twitter`}
                                        >
                                            <Twitter size={14} />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

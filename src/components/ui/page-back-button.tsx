"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export function PageBackButton() {
    return (
        <div className="section-container pt-8 md:pt-12">
            <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-neutral-400 hover:text-white transition-colors group"
            >
                <ChevronLeft
                    size={16}
                    className="transition-transform group-hover:-translate-x-1"
                />
                Back to Home
            </Link>
        </div>
    );
}

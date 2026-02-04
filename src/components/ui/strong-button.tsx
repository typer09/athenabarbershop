"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StrongButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "ghost";
    children: React.ReactNode;
}

export const StrongButton = React.forwardRef<HTMLButtonElement, StrongButtonProps>(
    ({ className, variant = "primary", children, ...props }, ref) => {
        const [isHovered, setIsHovered] = useState(false);

        const baseStyles = "relative overflow-hidden font-heading font-black tracking-widest uppercase transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none";

        // Variants
        const variants = {
            primary: "bg-primary-500 text-neutral-950 border border-primary-500 hover:text-white",
            outline: "bg-transparent text-white border border-neutral-700 hover:border-primary-500 hover:text-primary-500",
            ghost: "bg-transparent text-neutral-400 hover:text-white",
        };

        return (
            <button
                ref={ref}
                className={cn(baseStyles, variants[variant], "h-12 px-8 text-sm", className)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                {...props}
            >
                {/* Background Fill Animation for Primary */}
                {variant === "primary" && (
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: isHovered ? "0%" : "100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute inset-0 bg-neutral-950 z-0"
                    />
                )}

                {/* Content */}
                <span className="relative z-10 flex items-center gap-2">
                    {children}
                </span>
            </button>
        );
    }
);

StrongButton.displayName = "StrongButton";

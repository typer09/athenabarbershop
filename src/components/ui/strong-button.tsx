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

        const baseStyles = "relative overflow-hidden font-heading font-black tracking-widest uppercase transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none border-2";

        // Variants
        const variants = {
            primary: "bg-primary-500 text-white border-primary-500 hover:text-white",
            outline: "bg-transparent text-white border-white hover:text-neutral-950 hover:border-primary-500",
            ghost: "bg-transparent text-neutral-400 border-transparent hover:text-white",
        };

        return (
            <button
                ref={ref}
                className={cn(baseStyles, variants[variant], "h-14 px-10 text-base", className)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                {...props}
            >
                {/* Background Fill Animation for Primary (and others if needed) */}
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: isHovered ? "0%" : "-100%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={cn(
                        "absolute inset-0 z-0",
                        variant === "primary" ? "bg-primary-600" : "bg-primary-500"
                    )}
                />

                {/* Content */}
                <span className="relative z-10 flex items-center justify-center gap-3">
                    {children}
                </span>
            </button>
        );
    }
);

StrongButton.displayName = "StrongButton";

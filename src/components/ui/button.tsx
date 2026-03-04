/**
 * BUTTON COMPONENT
 * Reusable button with variants (shadcn/ui inspired)
 */

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

export const buttonVariants = {
    base: "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variant: {
        primary: "bg-primary-500 text-white hover:bg-primary-600",
        secondary: "bg-neutral-800 text-neutral-50 hover:bg-neutral-700",
        outline:
            "border border-neutral-700 bg-transparent text-neutral-50 hover:bg-neutral-800",
        ghost: "bg-transparent text-neutral-50 hover:bg-neutral-800",
    },
    size: {
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-5 text-base",
        lg: "h-14 px-8 text-lg",
    },
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                className={cn(
                    buttonVariants.base,
                    buttonVariants.variant[variant],
                    buttonVariants.size[size],
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";

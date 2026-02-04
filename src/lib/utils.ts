/**
 * UTILITY FUNCTIONS
 * Common utilities used across the application
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge class names with Tailwind CSS conflict resolution
 * @param inputs - Class names to merge
 * @returns Merged class string
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Format currency for display
 * @param amount - Amount in cents or dollars
 * @param options - Intl.NumberFormat options
 */
export function formatCurrency(
    amount: number,
    options?: Intl.NumberFormatOptions
): string {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        ...options,
    }).format(amount);
}

/**
 * Debounce function execution
 * @param fn - Function to debounce
 * @param ms - Delay in milliseconds
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
    fn: T,
    ms: number
): (...args: Parameters<T>) => void {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), ms);
    };
}

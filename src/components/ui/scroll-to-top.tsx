"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";

export function ScrollToTop() {
    const pathname = usePathname();
    const lenis = useLenis();

    useEffect(() => {
        // Native scroll first (for non-lenis browsers or fallback)
        window.scrollTo(0, 0);

        // Force Lenis to scroll to top immediately
        if (lenis) {
            lenis.scrollTo(0, { immediate: true });
        }
    }, [pathname, lenis]);

    return null;
}

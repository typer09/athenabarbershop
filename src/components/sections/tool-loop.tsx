"use client";

import { LogoLoop } from "@/components/ui/logo-loop";
import { FaScissors, FaCrown } from "react-icons/fa6"; // FaCut was invalid in Fa6, removed
import { GiRazor, GiBeard, GiComb, GiSpray, GiMustache, GiHairStrands } from "react-icons/gi";

const tools = [
    { node: <FaScissors className="w-12 h-12 text-neutral-500 hover:text-primary-500 transition-colors" />, title: "Precision Shears" },
    { node: <GiRazor className="w-12 h-12 text-neutral-500 hover:text-primary-500 transition-colors" />, title: "Straight Razor" },
    { node: <GiHairStrands className="w-12 h-12 text-neutral-500 hover:text-primary-500 transition-colors" />, title: "Detailed Styling" }, // Replaced Clippers with Styling
    { node: <GiComb className="w-12 h-12 text-neutral-500 hover:text-primary-500 transition-colors" />, title: "Styling Comb" },
    { node: <GiBeard className="w-12 h-12 text-neutral-500 hover:text-primary-500 transition-colors" />, title: "Beard Care" },
    { node: <FaCrown className="w-12 h-12 text-neutral-500 hover:text-primary-500 transition-colors" />, title: "Premium Pomade" },
    { node: <GiSpray className="w-12 h-12 text-neutral-500 hover:text-primary-500 transition-colors" />, title: "Fibers & Spray" },
    { node: <GiMustache className="w-12 h-12 text-neutral-500 hover:text-primary-500 transition-colors" />, title: "Classic Shave" },
];

export function ToolLoop() {
    return (
        <section className="bg-neutral-950 py-16 border-b border-neutral-900 overflow-hidden">
            <div className="section-container relative z-10">
                <div className="mb-10 text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
                        Professional Tools & Standards
                    </p>
                </div>

                <LogoLoop
                    logos={tools}
                    speed={80} // Corrected speed (was 0.8)
                    direction="left"
                    logoHeight={48}
                    gap={80}
                    pauseOnHover={true}
                    hoverSpeed={0}
                    scaleOnHover={true}
                    fadeOut={true}
                    fadeOutColor="#0a0a0a" // Matches neutral-950
                />
            </div>
        </section>
    );
}

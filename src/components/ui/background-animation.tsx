"use client";

import { useEffect, useRef } from "react";

export function BackgroundGrain() {
    return (
        <div className="pointer-events-none fixed inset-0 z-[1] opacity-5 mix-blend-overlay">
            <div className="absolute inset-0 bg-repeat [background-image:url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')] animate-grain" />
            <style jsx global>{`
                @keyframes grain {
                    0%, 100% { transform: translate(0, 0); }
                    10% { transform: translate(-5%, -10%); }
                    20% { transform: translate(-15%, 5%); }
                    30% { transform: translate(7%, -25%); }
                    40% { transform: translate(-5%, 25%); }
                    50% { transform: translate(-15%, 10%); }
                    60% { transform: translate(15%, 0%); }
                    70% { transform: translate(0%, 15%); }
                    80% { transform: translate(3%, 35%); }
                    90% { transform: translate(-10%, 10%); }
                }
                .animate-grain {
                    animation: grain 8s steps(10) infinite;
                    height: 300%;
                    left: -50%;
                    position: absolute;
                    top: -110%;
                    width: 300%;
                }
            `}</style>
        </div>
    );
}

export function BackgroundGradient() {
    return (
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary-900/5 blur-[120px] animate-pulse-slow" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-neutral-800/10 blur-[120px] animate-pulse-slow delay-1000" />
            <style jsx global>{`
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.3; transform: scale(1); }
                    50% { opacity: 0.6; transform: scale(1.1); }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 8s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}

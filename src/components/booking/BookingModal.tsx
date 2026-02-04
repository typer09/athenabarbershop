"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog"; // Assuming standard Shadcn/Radix structure, will fallback to generic if absent
import { AnimatePresence, motion } from "framer-motion";
import { X, Calendar, Phone } from "lucide-react";
import { BookingForm } from "./BookingForm";
import { QuickContact } from "./QuickContact";
import { cn } from "@/lib/utils";

interface BookingModalProps {
    children: React.ReactNode;
}

export function BookingModal({ children }: BookingModalProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<"book" | "contact">("book");

    // Close on ESC helper (if not using Radix)
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    return (
        <>
            {/* Trigger Wrapper */}
            <div onClick={() => setIsOpen(true)} className="cursor-pointer">
                {children}
            </div>

            {/* Modal Portal */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-0">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="relative w-full max-w-md overflow-hidden rounded-2xl bg-neutral-950 border border-neutral-800 shadow-2xl"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between border-b border-neutral-800 p-4">
                                <h3 className="font-heading text-lg font-bold text-neutral-100">
                                    {activeTab === "book" ? "Request Booking" : "Quick Contact"}
                                </h3>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-neutral-400 hover:bg-neutral-800 hover:text-white transition-colors"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            {/* Tabs */}
                            <div className="flex p-1 bg-neutral-900/50">
                                <button
                                    onClick={() => setActiveTab("book")}
                                    className={cn(
                                        "flex-1 flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium transition-all",
                                        activeTab === "book"
                                            ? "bg-neutral-800 text-white shadow-sm"
                                            : "text-neutral-500 hover:text-neutral-300"
                                    )}
                                >
                                    <Calendar size={16} />
                                    <span>Book Form</span>
                                </button>
                                <button
                                    onClick={() => setActiveTab("contact")}
                                    className={cn(
                                        "flex-1 flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium transition-all",
                                        activeTab === "contact"
                                            ? "bg-neutral-800 text-white shadow-sm"
                                            : "text-neutral-500 hover:text-neutral-300"
                                    )}
                                >
                                    <Phone size={16} />
                                    <span>Quick Contact</span>
                                </button>
                            </div>

                            {/* Body */}
                            <div className="p-5 max-h-[70vh] overflow-y-auto">
                                <AnimatePresence mode="wait">
                                    {activeTab === "book" ? (
                                        <motion.div
                                            key="book"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 10 }}
                                            transition={{ duration: 0.15 }}
                                        >
                                            <BookingForm />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="contact"
                                            initial={{ opacity: 0, x: 10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -10 }}
                                            transition={{ duration: 0.15 }}
                                        >
                                            <QuickContact />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}

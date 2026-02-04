"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/config";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function BookingForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        service: "Haircut (150k)",
        time: "Today",
        notes: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            const message = `Hi The Black Barber 👋\nI just submitted a booking request via website.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nPreferred Time: ${formData.time}\nNotes: ${formData.notes}\n\nPlease confirm if this slot is available. Thank you!`;
            const whatsappUrl = `https://wa.me/${siteConfig.contact.phoneE164}?text=${encodeURIComponent(message)}`;
            window.location.href = whatsappUrl;
            setIsLoading(false);
        }, 800);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const inputClasses = (name: string) => cn(
        "w-full rounded-sm bg-neutral-950 border p-4 text-sm text-neutral-100 placeholder:text-neutral-600 transition-all duration-300 outline-none appearance-none",
        focusedField === name
            ? "border-primary-500/50 ring-1 ring-primary-500/50" // Sharper ring style
            : "border-neutral-800 hover:border-neutral-700"
    );

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Name Input */}
            <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 ml-1">Full Name</label>
                <input
                    required
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    className={inputClasses("name")}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    onChange={handleChange}
                />
            </div>

            {/* Phone Input */}
            <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 ml-1">Phone Number (Optional)</label>
                <input
                    name="phone"
                    type="tel"
                    placeholder="e.g. 090 123 4567"
                    className={inputClasses("phone")}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    onChange={handleChange}
                />
            </div>

            {/* Service & Time Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 ml-1">Service</label>
                    <div className="relative">
                        <select
                            name="service"
                            className={inputClasses("service")}
                            onFocus={() => setFocusedField("service")}
                            onBlur={() => setFocusedField(null)}
                            onChange={handleChange}
                            value={formData.service}
                        >
                            <option value="Haircut (150k)">Haircut (150k)</option>
                            <option value="Shaving (80k)">Shaving (80k)</option>
                            <option value="Combo (200k)">Combo (200k)</option>
                            <option value="VIP Combo (250k)">VIP Combo (250k)</option>
                            <option value="Private Service">Private Service</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 ml-1">Preferred Time</label>
                    <div className="relative">
                        <select
                            name="time"
                            className={inputClasses("time")}
                            onFocus={() => setFocusedField("time")}
                            onBlur={() => setFocusedField(null)}
                            onChange={handleChange}
                            value={formData.time}
                        >
                            <option value="Today">Today</option>
                            <option value="Tomorrow">Tomorrow</option>
                            <option value="This Weekend">This Weekend</option>
                            <option value="Custom Date">Custom Date</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Notes Input */}
            <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 ml-1">Notes (Optional)</label>
                <textarea
                    name="notes"
                    rows={3}
                    placeholder="Any special requests?"
                    className={inputClasses("notes")}
                    onFocus={() => setFocusedField("notes")}
                    onBlur={() => setFocusedField(null)}
                    onChange={handleChange}
                />
            </div>

            {/* Helper Text */}
            <div className="rounded-sm bg-neutral-950/50 p-3 border border-neutral-800/50 flex items-start gap-3">
                <CheckCircle2 size={16} className="text-primary-500 mt-0.5 shrink-0" />
                <p className="text-xs text-neutral-400 leading-relaxed">
                    Submitting will open <strong>WhatsApp</strong> with your details pre-filled. You can edit the message before sending.
                </p>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full overflow-hidden rounded-sm bg-primary-500 py-4 text-sm font-bold uppercase tracking-widest text-neutral-950 transition-all hover:bg-primary-400 hover:shadow-[0_0_40px_rgba(212,168,83,0.3)] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
            >
                <div className="relative z-10 flex items-center justify-center gap-2">
                    {isLoading ? (
                        <>
                            <Loader2 size={18} className="animate-spin" />
                            <span>Redirecting...</span>
                        </>
                    ) : (
                        <>
                            <span>Request via WhatsApp</span>
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </>
                    )}
                </div>
                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
            </button>
        </form>
    );
}

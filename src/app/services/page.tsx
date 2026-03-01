import type { Metadata } from "next";
import { Services } from "@/components/sections/services";

export const metadata: Metadata = {
    title: "Barber Services in Da Nang | Haircut, Shaving & Grooming",
    description:
        "Professional barber services in Da Nang - haircut (150,000đ), hot towel shaving (80,000đ), and combo packages. Athena Barber Shop Da Nang, An Thuong.",
    openGraph: {
        title: "Barber Services & Pricing | Athena Barber Shop Da Nang",
        description:
            "Men's haircut, shaving, and grooming services in Da Nang. View our pricing and book your appointment.",
    },
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen pt-20 bg-neutral-950">
            <Services />
        </main>
    );
}


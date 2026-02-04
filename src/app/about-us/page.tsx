import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function AboutUsPage() {
    return (
        <main className="min-h-screen bg-neutral-950 selection:bg-primary-500/30">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 border-b border-neutral-900">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white leading-[0.9] tracking-tighter mb-8">
                        THE <span className="text-primary-500">LEGACY.</span>
                    </h1>
                    <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
                        The Black Barbershop was founded on a simple principle: Quality without compromise.
                        We are dedicated to preserving the traditional art of barbering while embracing modern style.
                    </p>
                </div>
            </section>

            {/* Content Placeholder */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-heading font-bold text-white">Our Story</h2>
                        <p className="text-neutral-400 text-lg leading-relaxed">
                            [Detailed founder story and philosophy will go here. This page is under construction.]
                        </p>
                    </div>
                    <div className="relative aspect-video bg-neutral-900 rounded-lg border border-neutral-800 flex items-center justify-center">
                        <span className="text-neutral-600 font-heading font-bold uppercase tracking-widest">Team Photo</span>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { PageBackButton } from "@/components/ui/page-back-button";
import Image from "next/image";
import { StrongButton } from "@/components/ui/strong-button";
import Link from "next/link";
import BlurText from "@/components/ui/blur-text";
import { Separator } from "@/components/ui/separator";
import TextType from "@/components/ui/text-type";

export const metadata: Metadata = {
    title: "About Athena Barber Shop Da Nang | Our Story",
    description:
        "Learn about Athena Barber Shop Da Nang - from Hoi An origins to Da Nang's premier barber shop. Professional men's grooming in Hai Chau, Da Nang, Vietnam.",
    openGraph: {
        title: "About Athena Barber Shop Da Nang",
        description:
            "From Hoi An to Da Nang - the story of Athena Barber Shop. Premium barber services in Hai Chau.",
    },
};

export default function AboutUsPage() {
    return (
        <main className="min-h-screen bg-neutral-950 pt-20 selection:bg-primary-500/30">
            {/* Nav Back Button - High Z-index to avoid header overlap */}
            <div className="relative z-[60]">
                <PageBackButton />
            </div>

            {/* HERO SECTION */}
            <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 px-6 border-b border-neutral-900 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neutral-900/20 to-transparent pointer-events-none" />

                <div className="section-container relative z-10">
                    <BlurText
                        text="OUR STORY."
                        delay={50}
                        animateBy="words"
                        direction="bottom"
                        className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white leading-[0.9] tracking-tighter mb-8"
                    />
                    <div className="min-h-[6em]">
                        <TextType
                            text={[
                                "From the historic streets of Hoi An to the vibrant heart of Da Nang.",
                                "A legacy of dedication, mastery, and the uncompromising pursuit of barbering excellence.",
                                "Quality without compromise."
                            ]}
                            typingSpeed={40}
                            deletingSpeed={30}
                            pauseDuration={2000}
                            cursorCharacter="_"
                            className="text-xl text-neutral-100 max-w-2xl leading-relaxed font-light block"
                        />
                    </div>
                </div>
            </section>

            {/* STORY SECTION 1: ORIGINS (HOI AN) */}
            <section className="section-padding">
                <div className="section-container">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1 relative">
                            {/* Artistic Image Placeholder */}
                            <div className="aspect-[4/5] bg-neutral-900 rounded-sm overflow-hidden relative group">
                                <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <Image
                                    src="/images/hoian.jpg"
                                    alt="Mai Duc in Hoi An"
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                                />
                                <div className="absolute bottom-6 left-6 z-20">
                                    <span className="text-white font-heading font-bold text-lg tracking-widest uppercase">Hoi An, 2022</span>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 space-y-8">
                            <div className="heading-lg text-white flex flex-wrap gap-x-4 items-baseline">
                                <BlurText text="2022." className="text-primary-500" delay={50} />
                                <BlurText text="The Beginning" className="text-white" delay={150} />
                            </div>
                            <div className="space-y-6 text-neutral-100 text-lg leading-relaxed font-medium">
                                <p>
                                    Mai Duc began his career in the heritage city of Hoi An. Surrounded by timeless architecture and a slow-paced lifestyle, he developed a deep appreciation for craftsmanship.
                                </p>
                                <p>
                                    Working with a diverse range of international clients, he honed his skills in classic barbering while understanding the unique needs of different hair textures and face shapes. It was here that the foundation of <strong>Athena Barber Shop</strong> philosophy was built: <em className="text-white font-semibold">Precision above all else.</em>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="section-container">
                <Separator className="bg-neutral-900" />
            </div>

            {/* STORY SECTION 2: DA NANG (2025) */}
            <section className="section-padding">
                <div className="section-container">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="heading-lg text-white flex flex-wrap gap-x-4 items-baseline">
                                <BlurText text="2025." className="text-primary-500" delay={50} />
                                <BlurText text="The Evolution" className="text-white" delay={150} />
                            </div>
                            <div className="space-y-6 text-neutral-100 text-lg leading-relaxed font-medium">
                                <p>
                                    Returning to Da Nang, Mai Duc established <strong>Athena Barber Shop</strong> with a singular vision: to create a space that blends the raw, masculine energy of a traditional shop with the refined service of a modern studio.
                                </p>
                                <p>
                                    Located in Hai Chau, the shop is designed for the modern man. Minimalist, dark, and focused. We don't just cut hair; we mold style and shape character.
                                </p>

                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/5] bg-neutral-900 rounded-sm overflow-hidden relative group">
                                <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <Image
                                    src="/images/2025.jpg"
                                    alt="Athena Barber Shop 2025"
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                                />
                                <div className="absolute bottom-6 left-6 z-20">
                                    <span className="text-white font-heading font-bold text-lg tracking-widest uppercase">Da Nang, 2025</span>
                                </div>
                            </div>
                            <div className="pt-4">
                                <Link href="/contact">
                                    <StrongButton>
                                        EXPERIENCE THE LEGACY
                                    </StrongButton>
                                </Link>
                            </div>
                            {/* Decorative Element */}
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-500/10 rounded-full blur-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* QUOTE / PHILOSOPHY */}
            <section className="py-32 bg-neutral-900/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/hero/hero-bg.jpg')] bg-cover bg-center opacity-5 mix-blend-overlay" />
                <div className="section-container text-center max-w-4xl relative z-10">
                    <h3 className="text-2xl md:text-4xl font-heading font-bold text-white leading-tight mb-8">
                        "A great haircut should feel natural, comfortable, and easy to maintain, not just look good at the moment."
                    </h3>
                    <p className="text-primary-500 font-bold tracking-widest uppercase">— Mai Duc, Founder</p>
                </div>
            </section>

        </main>
    );
}

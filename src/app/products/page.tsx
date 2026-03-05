import type { Metadata } from "next";
import { ProductsHero } from "@/components/sections/products-hero";
import { ToolLoop } from "@/components/sections/tool-loop";
import { ProductsGrid } from "@/components/sections/products-grid";
import { ProductsCta } from "@/components/sections/products-cta";

export const metadata: Metadata = {
    title: "Products | Athena Barber Shop Da Nang",
    description:
        "Premium grooming products used in our barbershop — Reuzel, Shape Pomade, and more. Available at Athena Barber Shop in Hai Chau, Da Nang.",
    openGraph: {
        title: "Products | Athena Barber Shop Da Nang",
        description:
            "Premium grooming products used in our barbershop — Reuzel, Shape Pomade, and more.",
        url: "https://theathenabarbershopshop.site/products",
    },
};

export default function ProductsPage() {
    return (
        <main>
            <ProductsHero />
            <ToolLoop />
            <ProductsGrid />
            <ProductsCta />
        </main>
    );
}

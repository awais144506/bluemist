// app/page.tsx
import Hero from "@/components/sections/Hero";
import ProductSection from "@/components/sections/ProductSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProductSection />
    </main>
  );
}
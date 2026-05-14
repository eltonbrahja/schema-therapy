// src/pages/Home.tsx
import { Toaster } from "@/components/ui/sonner";
import { Hero } from "../sections/Hero";
import { Product } from "../sections/Product";
import { Gallery } from "../sections/Gallery";
import { Pricing } from "../sections/Pricing";
import { Contact } from "../sections/Contact";
import { Footer } from "../sections/Footer";
import { FloatingNav } from "../sections/FloatingNav";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-[#f8f5f0]">
      <Hero />
      <Gallery />
      <Product />
      <Pricing />
      <Contact />
      <Footer />

      <FloatingNav />
      <Toaster position="top-center" />
    </div>
  );
}

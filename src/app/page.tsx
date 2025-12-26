import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Schedule } from "@/components/sections/Schedule";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Location } from "@/components/sections/Location";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <Schedule />
      <Gallery />
      <Testimonials />
      <Location />
      <Footer />
    </main>
  );
}

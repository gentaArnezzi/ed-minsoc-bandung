"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <section ref={ref} className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-zinc-900">
            {/* Parallax Background */}
            <motion.div style={{ y }} className="absolute inset-0 z-0 h-full w-full">
                <Image
                    src="/images/field-hero.png"
                    alt="ED Mini Soccer Field"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                />
                <div className="absolute inset-0 bg-black/50" />
            </motion.div>

            <Container className="relative z-10">
                <div className="max-w-3xl pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight text-white mb-6 drop-shadow-sm">
                            Mini Soccer Terbaik <br />
                            <span className="text-primary-accent text-primary">
                                di Bandung Selatan
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-zinc-100 mb-8 max-w-xl drop-shadow-sm font-medium">
                            Lapangan berkualitas standar FIFA, harga bersahabat, booking mudah tanpa ribet. Main nyaman siang dan malam.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button size="lg" className="bg-primary hover:bg-primary-dark text-white border-0" asChild>
                                <Link href="https://wa.me/6281234567890">
                                    Book Sekarang <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20" asChild>
                                <Link href="#jadwal">
                                    Lihat Jadwal <Calendar className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}

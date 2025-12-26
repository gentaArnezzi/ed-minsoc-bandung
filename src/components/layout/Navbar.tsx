"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "bg-white/80 backdrop-blur-md border-b border-zinc-200 py-2" : "bg-transparent py-4"
            )}
        >
            <Container>
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="relative h-12 w-48">
                        <Image
                            src="/images/logo-v2.png"
                            alt="ED Mini Soccer"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        {["Jadwal", "Galeri", "Lokasi", "Kontak"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    scrolled ? "text-zinc-600" : "text-zinc-200"
                                )}
                            >
                                {item}
                            </Link>
                        ))}
                        <Button asChild className={scrolled ? "" : "bg-primary text-white border-transparent"}>
                            <Link href="https://wa.me/6281234567890">
                                Book Sekarang
                            </Link>
                        </Button>
                    </div>

                    <button className={cn("md:hidden", scrolled ? "text-zinc-900" : "text-white")}>
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
            </Container>
        </nav>
    );
}

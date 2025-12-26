"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu when clicking a link
    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-[999] transition-all duration-300",
                scrolled || isOpen ? "bg-white/90 backdrop-blur-md border-b border-zinc-200 py-2" : "bg-transparent py-4"
            )}
        >
            <Container>
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="relative h-12 w-40 md:w-48" onClick={handleLinkClick}>
                        <Image
                            src="/images/logo-v2.png"
                            alt="ED Mini Soccer"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {["Jadwal", "Galeri", "Lokasi", "Kontak"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    scrolled ? "text-zinc-600" : "text-white"
                                )}
                            >
                                {item}
                            </Link>
                        ))}
                        <Button asChild className={scrolled ? "" : "bg-white text-primary hover:bg-white/90"}>
                            <Link href="https://wa.me/6281234567890">
                                Book Sekarang
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={cn(
                            "md:hidden p-2 rounded-md transition-colors relative z-50 cursor-pointer",
                            scrolled || isOpen ? "text-zinc-900 hover:bg-zinc-100" : "text-white hover:bg-white/10"
                        )}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </Container>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-zinc-200 overflow-hidden"
                    >
                        <Container className="py-6 space-y-4">
                            {["Jadwal", "Galeri", "Lokasi", "Kontak"].map((item) => (
                                <Link
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={handleLinkClick}
                                    className="block text-lg font-medium text-zinc-900 hover:text-primary transition-colors py-2"
                                >
                                    {item}
                                </Link>
                            ))}
                            <div className="pt-4">
                                <Button asChild className="w-full justify-center" size="lg">
                                    <Link href="https://wa.me/6281234567890" onClick={handleLinkClick}>
                                        Book Sekarang
                                    </Link>
                                </Button>
                            </div>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

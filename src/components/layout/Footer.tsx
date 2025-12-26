import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer id="kontak" className="bg-zinc-50 py-12 border-t border-zinc-200">
            <Container>
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-bold font-display tracking-tighter text-zinc-900 mb-4 block">
                            ED <span className="text-primary">MINI SOCCER</span>
                        </Link>
                        <p className="text-zinc-500 text-sm max-w-sm">
                            Venue mini soccer premium di Bandung Selatan. Kami berkomitmen menyediakan fasilitas olah raga terbaik untuk semua kalangan.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-zinc-900 mb-4">Navigasi</h4>
                        <ul className="space-y-2 text-sm text-zinc-500">
                            <li><Link href="#jadwal" className="hover:text-primary transition-colors">Jadwal</Link></li>
                            <li><Link href="#galeri" className="hover:text-primary transition-colors">Galeri</Link></li>
                            <li><Link href="#lokasi" className="hover:text-primary transition-colors">Lokasi</Link></li>
                            <li><Link href="#kontak" className="hover:text-primary transition-colors">Kontak</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-zinc-900 mb-4">Sosial Media</h4>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 rounded-full bg-zinc-200 text-zinc-600 hover:bg-primary hover:text-white transition-colors">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-zinc-200 text-zinc-600 hover:bg-primary hover:text-white transition-colors">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-zinc-200 text-zinc-600 hover:bg-primary hover:text-white transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
                    <p>&copy; {new Date().getFullYear()} ED Mini Soccer Bandung. All rights reserved.</p>
                    <p>Designed with ❤️ by Antigravity</p>
                </div>
            </Container>
        </footer>
    );
}

import { Container } from "@/components/ui/Container";
import { MapPin, Clock, Phone } from "lucide-react";

export function Location() {
    return (
        <section id="lokasi" className="py-16 md:py-24 bg-white">
            <Container>
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold font-display text-zinc-900 mb-6">
                            Lokasi <span className="text-primary">Kami</span>
                        </h2>
                        <p className="text-zinc-500 mb-8">
                            Kunjungi kami di lokasi strategis Bojongsoang. Akses mudah, parkir luas, dan suasana asri.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-zinc-900 mb-1">Alamat</h4>
                                    <p className="text-zinc-500 text-sm">
                                        Jl. Bojongsoang Raya No. 123<br />
                                        Bandung, Jawa Barat
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                    <Clock className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-zinc-900 mb-1">Jam Operasional</h4>
                                    <p className="text-zinc-500 text-sm">
                                        Setiap Hari: 08:00 - 23:00 WIB
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-zinc-900 mb-1">Kontak</h4>
                                    <p className="text-zinc-500 text-sm">
                                        WhatsApp: +62 812-3456-7890
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 h-[400px] bg-zinc-100 rounded-2xl overflow-hidden border border-zinc-200">
                        <iframe
                            src="https://maps.google.com/maps?q=-6.969344923962993,107.6732134&z=15&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </Container>
        </section>
    );
}

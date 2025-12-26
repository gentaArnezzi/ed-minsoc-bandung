import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { CalendarCheck2, Clock } from "lucide-react";

// Mock schedule data for display purposes
const timeSlots = [
    { time: "08:00 - 10:00", status: "booked" },
    { time: "10:00 - 12:00", status: "booked" },
    { time: "13:00 - 15:00", status: "available" },
    { time: "16:00 - 18:00", status: "booked" },
    { time: "19:00 - 21:00", status: "available" },
    { time: "21:00 - 23:00", status: "booked" },
];

export function Schedule() {
    return (
        <section id="jadwal" className="py-24 bg-zinc-50 relative overflow-hidden">
            {/* Decorative Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[100px] -z-10" />

            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold font-display text-zinc-900 mb-6">
                            Cek Jadwal & <br />
                            <span className="text-primary">Booking Lapangan</span>
                        </h2>
                        <p className="text-zinc-600 mb-8 max-w-md mx-auto lg:mx-0">
                            Lihat ketersediaan lapangan secara real-time dan langsung booking slot pilihanmu melalui WhatsApp admin kami.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button size="lg" asChild>
                                <Link href="https://wa.me/6281234567890">
                                    <CalendarCheck2 className="mr-2 h-4 w-4" />
                                    Booking Sekarang
                                </Link>
                            </Button>
                            <div className="flex items-center gap-2 text-sm text-zinc-500">
                                <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                                Respon Cepat (Online)
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-md">
                        <div className="bg-white rounded-2xl border border-zinc-200 shadow-xl shadow-zinc-200/50 p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-bold text-zinc-900">Jadwal Hari Ini</h3>
                                <span className="text-xs font-medium px-2 py-1 rounded bg-zinc-100 text-zinc-600">
                                    {new Date().toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long' })}
                                </span>
                            </div>

                            <div className="space-y-3">
                                {timeSlots.map((slot, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-3 rounded-lg bg-zinc-50 border border-zinc-100"
                                    >
                                        <div className="flex items-center gap-3 text-zinc-700">
                                            <Clock className="h-4 w-4 text-zinc-400" />
                                            <span className="font-mono text-sm">{slot.time}</span>
                                        </div>
                                        {slot.status === 'available' ? (
                                            <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                                                Available
                                            </span>
                                        ) : (
                                            <span className="text-xs font-bold text-zinc-500 bg-zinc-200 px-3 py-1 rounded-full">
                                                Booked
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 pt-4 border-t border-zinc-100 text-center">
                                <p className="text-xs text-zinc-500">
                                    *Jadwal dapat berubah sewaktu-waktu. Konfirmasi via WhatsApp.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

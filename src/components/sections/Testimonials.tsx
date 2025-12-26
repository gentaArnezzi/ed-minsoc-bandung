import { Container } from "@/components/ui/Container";
import { Star } from "lucide-react";

const reviews = [
    {
        name: "Rizky Ramadhan",
        role: "Mahasiswa",
        content: "Lapangannya bagus banget, rumputnya empuk. Enak buat main santai sama temen kuliah. Harganya juga masuk akal.",
        rating: 5,
    },
    {
        name: "Komunitas Futsal BDG",
        role: "Member Rutin",
        content: "Udah langganan disini tiap minggu. Adminnya responsif, booking gampang. Parkiran luas jadi aman buat yang bawa mobil.",
        rating: 5,
    },
    {
        name: "Ahmad Fauzi",
        role: "Pekerja Swasta",
        content: "Drainase mantap! Sempet main pas gerimis tapi lapangan gak becek sama sekali. Best mini soccer di Bandung Selatan.",
        rating: 5,
    },
];

export function Testimonials() {
    return (
        <section className="py-24 bg-zinc-50 border-y border-zinc-200">
            <Container>
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-600 text-sm font-medium mb-4">
                        <Star className="fill-current w-4 h-4" />
                        4.8 Rating di Google Maps
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold font-display text-zinc-900 mb-4">
                        Apa Kata <span className="text-primary">Mereka?</span>
                    </h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto">
                        Testimoni jujur dari teman-teman yang sudah merasakan serunya bermain di ED Mini Soccer.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl bg-white border border-zinc-100 shadow-sm relative"
                        >
                            <div className="flex gap-1 mb-6 text-yellow-500">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="fill-current w-4 h-4" />
                                ))}
                            </div>
                            <p className="text-zinc-600 mb-6 italic leading-relaxed">
                                "{review.content}"
                            </p>
                            <div>
                                <h4 className="font-bold text-zinc-900">{review.name}</h4>
                                <p className="text-zinc-500 text-sm">{review.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

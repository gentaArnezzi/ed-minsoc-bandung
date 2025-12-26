import { Container } from "@/components/ui/Container";
import { TreePine, Droplets, Banknote, MapPin } from "lucide-react";

const features = [
    {
        icon: TreePine,
        title: "Rumput Berkualitas",
        description: "Menggunakan rumput sintetis standar FIFA yang empuk dan nyaman untuk meminimalisir cedera.",
    },
    {
        icon: Droplets,
        title: "Drainase Anti Banjir",
        description: "Sistem drainase canggih menjamin lapangan tetap kering dan aman dimainkan meski hujan deras.",
    },
    {
        icon: Banknote,
        title: "Harga Kompetitif",
        description: "Tarif sewa lapangan yang bersahabat untuk pelajar, mahasiswa, hingga komunitas pekerja.",
    },
    {
        icon: MapPin,
        title: "Lokasi Strategis",
        description: "Mudah diakses dari Buahbatu dan Bojongsoang, dengan area parkir yang luas dan aman.",
    },
];

export function Features() {
    return (
        <section className="py-24 bg-white border-b border-zinc-100">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-display text-zinc-900 mb-4">
                        Kenapa Main di <span className="text-primary">ED Mini Soccer?</span>
                    </h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto">
                        Kami menghadirkan pengalaman bermain mini soccer terbaik dengan fasilitas lengkap dan pelayanan prima.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-6 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-primary/50 transition-colors shadow-sm hover:shadow-md"
                        >
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                <feature.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-zinc-900 mb-2">{feature.title}</h3>
                            <p className="text-zinc-500 leading-relaxed text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

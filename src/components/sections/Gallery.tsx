import { Container } from "@/components/ui/Container";
import Image from "next/image";

const galleryImages = [
    { src: "/images/gallery-1.png", alt: "Fasilitas Lapangan" },
    { src: "/images/gallery-2.png", alt: "Rumput Sintetis Premium" },
    { src: "/images/gallery-3.png", alt: "Suasana Malam" },
    { src: "/images/gallery-4.png", alt: "Bench Pemain" },
    { src: "/images/gallery-5.png", alt: "View Lapangan Luas" },
    { src: "/images/gallery-detail.png", alt: "Detail Rumput" },
];

export function Gallery() {
    return (
        <section id="galeri" className="py-16 md:py-24 bg-white">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-display text-zinc-900 mb-4">
                        Suasana & <span className="text-primary">Lapangan</span>
                    </h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto">
                        Intip fasilitas dan keseruan bermain di ED Mini Soccer Bandung.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className={`relative overflow-hidden rounded-xl bg-zinc-100 group aspect-video ${index === 0 || index === 3 ? 'md:col-span-2' : ''}`}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 768px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                <p className="text-white font-medium">{image.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

import Link from "next/link";
import Image from "next/image";

const featured = [
  {
    src: "/images/weddings/w5.png",
    category: "White Wedding",
    title: "Aerial Aisle",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/weddings/w1.png",
    category: "White Wedding",
    title: "Golden Embrace",
    span: "",
  },
  {
    src: "/images/weddings/w16.png",
    category: "White Wedding",
    title: "Pink Bridal Party",
    span: "",
  },
  {
    src: "/images/weddings/w12.png",
    category: "White Wedding",
    title: "First Dance",
    span: "",
  },
  {
    src: "/images/weddings/w7.png",
    category: "White Wedding",
    title: "Villa Dreams",
    span: "",
  },
];

export default function FeaturedWork() {
  return (
    <section id="featured" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-subtitle mb-4">Portfolio</p>
          <h2 className="section-title">Featured Work</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[280px]">
          {featured.map((item, idx) => (
            <div
              key={idx}
              className={`relative group overflow-hidden ${item.span}`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-2">{item.category}</span>
                <span className="text-white text-xl font-light tracking-wide">{item.title}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/gallery" className="btn-outline">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}

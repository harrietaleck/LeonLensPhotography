import Image from "next/image";
import Link from "next/link";
import { Award, Camera, Heart } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <div className="relative h-[500px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80"
                alt="Leon - Photographer"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 hidden lg:block">
              <div className="relative w-48 h-48 border-4 border-black">
                <Image
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80"
                  alt="Camera equipment"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
            </div>
            <div className="absolute -top-6 -left-6 bg-gold-400 p-6 hidden lg:flex flex-col items-center justify-center">
              <span className="text-black text-3xl font-bold">12</span>
              <span className="text-black text-xs tracking-wider uppercase">Years of<br/>Excellence</span>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="section-subtitle mb-4">About the Artist</p>
            <h2 className="section-title mb-8">The Eye Behind<br />the Lens</h2>

            <p className="text-zinc-400 leading-relaxed mb-6">
              I&apos;m Leon — a Johannesburg-based photographer with over a decade of experience turning fleeting moments into lasting memories. My journey began with a single film camera and a relentless curiosity for light.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-10">
              Today, I bring that same passion to every session — whether it&apos;s a sunrise wedding in the Drakensberg or a product shoot in the studio. My philosophy is simple: authentic stories, beautifully told.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-10">
              {[
                { icon: Camera, label: "Photography" },
                { icon: Heart, label: "Passion" },
                { icon: Award, label: "Award-winning" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="text-center">
                  <div className="w-12 h-12 border border-zinc-700 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-gold-400" />
                  </div>
                  <span className="text-xs tracking-widest uppercase text-zinc-400">{label}</span>
                </div>
              ))}
            </div>

            <Link href="/booking" className="btn-gold">
              Work With Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

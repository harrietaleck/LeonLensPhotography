"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80",
    title: "Wedding",
    subtitle: "Photography",
    caption: "Timeless moments, forever treasured.",
  },
  {
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1920&q=80",
    title: "Portrait",
    subtitle: "Sessions",
    caption: "Your story, beautifully told.",
  },
  {
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1920&q=80",
    title: "Commercial",
    subtitle: "Photography",
    caption: "Elevating your brand visually.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="section-subtitle mb-6 animate-fade-in">@leonlensphotos</p>

        <h1 className="text-6xl md:text-8xl font-thin tracking-[0.1em] uppercase mb-2 animate-slide-up">
          {slides[current].title}
        </h1>
        <h2 className="text-3xl md:text-5xl font-light tracking-[0.3em] uppercase text-gold-400 mb-6 animate-slide-up">
          {slides[current].subtitle}
        </h2>

        <p className="text-zinc-300 text-lg md:text-xl font-light tracking-wide mb-12 max-w-xl animate-fade-in">
          {slides[current].caption}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
          <Link href="/booking" className="btn-gold">
            Book a Session
          </Link>
          <Link href="/gallery" className="btn-outline">
            View Portfolio
          </Link>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`transition-all duration-300 ${
              idx === current ? "w-8 h-1 bg-gold-400" : "w-4 h-1 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <a
        href="#featured"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-gold-400 transition-colors z-10 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}

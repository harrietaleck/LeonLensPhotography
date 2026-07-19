"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah & James Khumalo",
    role: "Wedding Clients",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    text: "Leon captured our wedding so beautifully — beyond what we even imagined. Every photo tells a story. Our guests are still raving about the album. Absolutely world-class.",
    rating: 5,
  },
  {
    name: "Thabo Mokoena",
    role: "Corporate Client",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    text: "Professional, creative, and incredibly easy to work with. The commercial shots he delivered elevated our brand significantly. We use Leon exclusively now.",
    rating: 5,
  },
  {
    name: "Priya Pillay",
    role: "Portrait Client",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    text: "I was nervous in front of the camera but Leon made me feel completely at ease. The results were stunning — best photos I have ever had taken in my life.",
    rating: 5,
  },
  {
    name: "André van Wyk",
    role: "Event Client",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    text: "Our company gala was perfectly documented. Leon was everywhere but never intrusive, and the turnaround was incredibly fast. Highly recommend.",
    rating: 5,
  },
  {
    name: "Nomsa & David Dlamini",
    role: "Wedding Clients",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80",
    text: "We are absolutely in love with our wedding photos. Leon has a gift for capturing raw emotion. Every time we look at our album we relive that perfect day.",
    rating: 5,
  },
  {
    name: "Lerato Nkosi",
    role: "Newborn Session",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
    text: "Our newborn shoot was magical. Leon was so patient and gentle with our baby. The photos are breathtaking — we have them printed on canvas all over our home.",
    rating: 5,
  },
  {
    name: "Michael & Tanya Pretorius",
    role: "Family Portrait",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    text: "He made our whole family feel relaxed and natural. The family portraits came out absolutely stunning. We will definitely be returning every year.",
    rating: 5,
  },
  {
    name: "Zanele Sithole",
    role: "Portrait Client",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80",
    text: "Leon knows exactly how to work with natural light. My portrait session felt like a proper editorial shoot. I have never felt more confident in photos before.",
    rating: 5,
  },
  {
    name: "Rajan Naidoo",
    role: "Commercial Client",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
    text: "Our product launch visuals were incredible. He understood our brand immediately and delivered images that far exceeded our brief. Truly exceptional talent.",
    rating: 5,
  },
  {
    name: "Bianca & Pieter Joubert",
    role: "Wedding Clients",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=200&q=80",
    text: "From the pre-wedding consultation to final gallery delivery, Leon was flawless. He anticipated moments before they happened. Our photos are simply perfect.",
    rating: 5,
  },
  {
    name: "Kabelo Mahlangu",
    role: "Event Client",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&q=80",
    text: "Leon shot our annual awards night and the results blew everyone away. He managed a large crowd brilliantly and still got incredible candid shots all evening.",
    rating: 5,
  },
  {
    name: "Ayasha Patel",
    role: "Maternity Session",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&q=80",
    text: "My maternity shoot was a dream. Leon made me feel absolutely beautiful during a time when I was feeling quite self-conscious. The photos are treasures forever.",
    rating: 5,
  },
  {
    name: "Francois du Plessis",
    role: "Corporate Headshots",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80",
    text: "We needed headshots for our entire executive team. Leon handled 15 people in a single day professionally and every single result was top quality. Outstanding.",
    rating: 5,
  },
  {
    name: "Lungile & Sipho Ndlovu",
    role: "Wedding Clients",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&q=80",
    text: "Our traditional wedding and white wedding were both photographed beautifully. Leon honoured our culture while creating timeless, modern imagery. A true artist.",
    rating: 5,
  },
  {
    name: "Celeste Marais",
    role: "Mini Session Client",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&q=80",
    text: "I booked a mini session just for fun and I was blown away. In just 30 minutes Leon got the most stunning shots of me. My social media has never looked better!",
    rating: 5,
  },
  {
    name: "Desmond Chauke",
    role: "Event Client",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&q=80",
    text: "He photographed our charity gala and the photos were used in a national magazine spread. The quality is just extraordinary. We cannot thank Leon enough.",
    rating: 5,
  },
  {
    name: "Yolanda & Franco Ferreira",
    role: "Wedding Clients",
    image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=200&q=80",
    text: "Leon is more than a photographer — he is a storyteller. Our wedding film and photos together paint such a vivid picture of our day. Forever grateful.",
    rating: 5,
  },
  {
    name: "Ntombi Zwane",
    role: "Portrait Client",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80",
    text: "I needed professional photos for my modelling portfolio and Leon delivered beyond my expectations. Every shot was magazine-worthy. Booked again immediately.",
    rating: 5,
  },
  {
    name: "Craig & Melissa Botha",
    role: "Family Portrait",
    image: "https://images.unsplash.com/photo-1500396578761-e3ba2bf1e3c5?w=200&q=80",
    text: "Our kids are a handful but Leon handled them like a pro. He made the whole session fun and the photos are genuinely the best we have ever had as a family.",
    rating: 5,
  },
  {
    name: "Ipeleng Motsepe",
    role: "Commercial Client",
    image: "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?w=200&q=80",
    text: "Leon photographed our restaurant for our rebranding campaign. The food and interior shots were so atmospheric and professional. Bookings increased immediately after.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const prev = () => {
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };
  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  const t = testimonials[current];

  return (
    <section className="py-24 bg-zinc-950 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="section-subtitle mb-4">Client Stories</p>
        <h2 className="section-title mb-4">What Clients Say</h2>
        <p className="text-zinc-600 text-sm mb-16">
          {testimonials.length} verified reviews — all 5 stars
        </p>

        <div className="relative">
          {/* Large quote icon */}
          <Quote className="w-12 h-12 text-gold-400/20 mx-auto mb-6" />

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(t.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-gold-400 fill-gold-400" />
            ))}
          </div>

          {/* Review text */}
          <blockquote className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed mb-10 italic min-h-[100px]">
            &ldquo;{t.text}&rdquo;
          </blockquote>

          {/* Reviewer */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div
              className="w-14 h-14 rounded-full bg-cover bg-center border-2 border-gold-400 shrink-0"
              style={{ backgroundImage: `url(${t.image})` }}
            />
            <div className="text-left">
              <div className="text-white font-medium">{t.name}</div>
              <div className="text-zinc-500 text-sm">{t.role}</div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={prev}
              className="w-10 h-10 border border-zinc-700 hover:border-gold-400 flex items-center justify-center transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Counter */}
            <div className="flex items-center gap-3">
              <span className="text-gold-400 font-mono text-sm font-semibold">
                {String(current + 1).padStart(2, "0")}
              </span>
              <div className="w-24 h-px bg-zinc-700 relative">
                <div
                  className="absolute top-0 left-0 h-px bg-gold-400 transition-all duration-500"
                  style={{ width: `${((current + 1) / testimonials.length) * 100}%` }}
                />
              </div>
              <span className="text-zinc-600 font-mono text-sm">
                {String(testimonials.length).padStart(2, "0")}
              </span>
            </div>

            <button
              onClick={() => { next(); setIsAutoPlaying(false); }}
              className="w-10 h-10 border border-zinc-700 hover:border-gold-400 flex items-center justify-center transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Auto-play toggle */}
          <button
            onClick={() => setIsAutoPlaying((p) => !p)}
            className="mt-5 text-xs tracking-widest uppercase text-zinc-600 hover:text-zinc-400 transition-colors"
          >
            {isAutoPlaying ? "⏸ Auto-playing" : "▶ Auto-play"}
          </button>
        </div>
      </div>
    </section>
  );
}

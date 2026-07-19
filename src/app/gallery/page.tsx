"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Heart, Sparkles, GraduationCap, PartyPopper } from "lucide-react";

// ─── Real wedding photos (local) ───────────────────────────────────────────
const weddingPhotos = [
  { src: "/images/weddings/w1.png",  title: "Golden Embrace",         landscape: false },
  { src: "/images/weddings/w2.png",  title: "Bridal Preparations",    landscape: true  },
  { src: "/images/weddings/w3.png",  title: "Garden Ceremony",        landscape: true  },
  { src: "/images/weddings/w4.png",  title: "Twilight Romance",       landscape: false },
  { src: "/images/weddings/w5.png",  title: "Aerial Aisle",           landscape: true  },
  { src: "/images/weddings/w6.png",  title: "Perfect Pair",           landscape: false },
  { src: "/images/weddings/w7.png",  title: "Villa Dreams",           landscape: true  },
  { src: "/images/weddings/w8.png",  title: "Garden of Love",         landscape: true  },
  { src: "/images/weddings/w9.png",  title: "Wedding Party Walk",     landscape: true  },
  { src: "/images/weddings/w10.png", title: "The Long Veil",          landscape: false },
  { src: "/images/weddings/w11.png", title: "Tender Moment",          landscape: false },
  { src: "/images/weddings/w12.png", title: "First Dance",            landscape: true  },
  { src: "/images/weddings/w13.png", title: "Sunlit Forest",          landscape: true  },
  { src: "/images/weddings/w14.png", title: "Stone Garden",           landscape: true  },
  { src: "/images/weddings/w15.png", title: "The Kiss",               landscape: false },
  { src: "/images/weddings/w16.png", title: "Pink Bridal Party",      landscape: true  },
];

// ─── Traditional wedding photos (local) ────────────────────────────────────
const traditionalPhotos = [
  { src: "/images/traditional/t1.png",  title: "Royal Attire",          landscape: false },
  { src: "/images/traditional/t2.png",  title: "Coral Crown Smile",     landscape: false },
  { src: "/images/traditional/t3.png",  title: "Queen in Profile",      landscape: false },
  { src: "/images/traditional/t4.png",  title: "Regal Pair",            landscape: false },
  { src: "/images/traditional/t5.png",  title: "The Groom",             landscape: false },
  { src: "/images/traditional/t6.png",  title: "Joyful Ceremony",       landscape: false },
  { src: "/images/traditional/t7.png",  title: "Igbo White",            landscape: false },
  { src: "/images/traditional/t8.png",  title: "Garden Royals",         landscape: false },
  { src: "/images/traditional/t9.png",  title: "Golden Gaze",           landscape: false },
  { src: "/images/traditional/t10.png", title: "Coral & Pride",         landscape: false },
];

// ─── Graduation photos (local) ─────────────────────────────────────────────
const graduationPhotos = Array.from({ length: 40 }, (_, i) => ({
  src: `/images/graduation/g${i + 1}.png`,
  title: [
    "Diploma in Hand", "The Graduate", "Steps to Success", "Cap & Gown",
    "Proud Moment", "Degree Day", "Stepping Up", "Achievement Unlocked",
    "Red Dress Grad", "Teal Sash", "Sefako Pride", "Roses & Robes",
    "Graduation Vibes", "Class of Champions", "Blazer & Blooms",
    "Smiling Scholar", "Night of Glory", "Cap Toss Ready", "Blue & Gold",
    "Hard Work Pays", "Bouquet & Board", "Campus Dreams", "Tassel Day",
    "Dressed to Impress", "Walking Tall", "Flower Power", "Distinguished",
    "Victory Walk", "Diploma Raised", "Red Roses", "Midnight Grad",
    "Sun-lit Scholar", "Garden Graduate", "Cap & Heels", "Suit & Scroll",
    "Joyful Graduate", "Future Leader", "Class Dismissed", "Golden Tassel",
    "Final Chapter",
  ][i],
}));

// ─── Birthday shoot photos (local) ─────────────────────────────────────────
const birthdayPhotos = [
  { src: "/images/birthday/b1.png",  title: "Grandpa & Birthday Boy" },
  { src: "/images/birthday/b2.png",  title: "Sister of the Birthday Boy" },
  { src: "/images/birthday/b3.png",  title: "Mama's Kiss" },
  { src: "/images/birthday/b4.png",  title: "Berry First" },
  { src: "/images/birthday/b5.png",  title: "Balloon Boy" },
  { src: "/images/birthday/b6.png",  title: "Little King" },
  { src: "/images/birthday/b7.png",  title: "Pink Champagne" },
  { src: "/images/birthday/b8.png",  title: "Birthday Sisters" },
  { src: "/images/birthday/b9.png",  title: "Confetti Celebration" },
  { src: "/images/birthday/b10.png", title: "Red Roses & Ribbons" },
];

// ─── Commercial photos (local) ─────────────────────────────────────────────
const commercialPhotos = [
  { src: "/images/commercial/c1.png", title: "Living Room Showcase" },
  { src: "/images/commercial/c2.png", title: "Modern Kitchen" },
  { src: "/images/commercial/c3.png", title: "Luxury Estate Exterior" },
];

// ─── Portrait photos ────────────────────────────────────────────────────────
const portraitPhotos = [
  { src: "/images/portraits/p1.png",  title: "Event Conversation" },
  { src: "/images/portraits/p2.png",  title: "Office Portrait" },
  { src: "/images/portraits/p3.png",  title: "Corporate Gathering" },
  { src: "/images/portraits/p4.png",  title: "Family in White" },
  { src: "/images/portraits/p5.png",  title: "Maternity Couple" },
  { src: "/images/portraits/p6.png",  title: "Professional Confidence" },
  { src: "/images/portraits/p7.png",  title: "Warm Welcome" },
  { src: "/images/portraits/p8.png",  title: "Evening Family" },
  { src: "/images/portraits/p9.png",  title: "Networking Moment" },
  { src: "/images/portraits/p10.png", title: "Handshake & Smiles" },
  { src: "/images/portraits/p11.png", title: "Conference Table" },
  { src: "/images/portraits/p12.png", title: "Maternity Family" },
  { src: "/images/portraits/p13.png", title: "Garden Portrait" },
  { src: "/images/portraits/p14.png", title: "Family Glow" },
];

// ─── Events photos ──────────────────────────────────────────────────────────
const eventsPhotos = [
  { src: "/images/events/e1.png", title: "Bride to Be Toast" },
  { src: "/images/events/e2.png", title: "Bridal Shower Cheers" },
  { src: "/images/events/e3.png", title: "Confetti Celebration" },
  { src: "/images/events/e4.png", title: "Sparkling Moment" },
  { src: "/images/events/e5.png", title: "Bride & Her Circle" },
];

// ─── Architecture photos ─────────────────────────────────────────────────────
const architecturePhotos = [
  { src: "/images/commercial/c1.png", title: "Living Room Showcase" },
  { src: "/images/commercial/c2.png", title: "Modern Kitchen" },
  { src: "/images/commercial/c3.png", title: "Luxury Estate Exterior" },
];

type LightboxItem = { src: string; title: string };

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<LightboxItem | null>(null);

  return (
    <div className="min-h-screen bg-black pt-24">

      {/* ── Page Header ─────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <p className="section-subtitle mb-4">Our Work</p>
        <h1 className="section-title mb-6">Portfolio Gallery</h1>
        <p className="text-zinc-400 max-w-xl mx-auto leading-relaxed">
          A curated selection of our finest work — real moments, real emotions, real stories.
        </p>
      </div>

      {/* ── WHITE WEDDINGS SECTION ───────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex items-center gap-4 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <Heart className="w-4 h-4 text-gold-400 fill-gold-400" />
              <span className="section-subtitle">Leon Lens Weddings</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-widest uppercase text-white">
              White Weddings
            </h2>
          </div>
          <div className="flex-1 h-px bg-zinc-800 hidden md:block" />
          <span className="text-zinc-600 text-sm hidden md:block">{weddingPhotos.length} photos</span>
        </div>

        {/* Masonry grid — real wedding shots */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {weddingPhotos.map((photo, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden cursor-pointer break-inside-avoid"
              onClick={() => setLightbox(photo)}
            >
              <Image
                src={photo.src}
                alt={photo.title}
                width={800}
                height={photo.landscape ? 534 : 1000}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-500 flex items-end p-4">
                <div className="translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-gold-400 text-xs tracking-widest uppercase">White Wedding</p>
                  <p className="text-white text-sm font-light">{photo.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRADITIONAL WEDDINGS SECTION ────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex items-center gap-4 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <Sparkles className="w-4 h-4 text-gold-400 fill-gold-400" />
              <span className="section-subtitle">Leon Lens Weddings</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-widest uppercase text-white">
              Traditional Weddings
            </h2>
          </div>
          <div className="flex-1 h-px bg-zinc-800 hidden md:block" />
          <span className="text-zinc-600 text-sm hidden md:block">{traditionalPhotos.length} photos</span>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {traditionalPhotos.map((photo, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden cursor-pointer break-inside-avoid"
              onClick={() => setLightbox(photo)}
            >
              <Image
                src={photo.src}
                alt={photo.title}
                width={800}
                height={1100}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-500 flex items-end p-4">
                <div className="translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-gold-400 text-xs tracking-widest uppercase">Traditional Wedding</p>
                  <p className="text-white text-sm font-light">{photo.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── GRADUATION SECTION ───────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex items-center gap-4 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <GraduationCap className="w-4 h-4 text-gold-400" />
              <span className="section-subtitle">Leon Lens Sessions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-widest uppercase text-white">
              Graduation
            </h2>
          </div>
          <div className="flex-1 h-px bg-zinc-800 hidden md:block" />
          <span className="text-zinc-600 text-sm hidden md:block">{graduationPhotos.length} photos</span>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {graduationPhotos.map((photo, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden cursor-pointer break-inside-avoid"
              onClick={() => setLightbox(photo)}
            >
              <Image
                src={photo.src}
                alt={photo.title}
                width={800}
                height={1000}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-500 flex items-end p-4">
                <div className="translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-gold-400 text-xs tracking-widest uppercase">Graduation</p>
                  <p className="text-white text-sm font-light">{photo.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── DIVIDER ─────────────────────────────────────────────────────── */}
      <div className="border-t border-zinc-800 mx-6 mb-20" />

      {/* ── BIRTHDAY SHOOT SECTION ───────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex items-center gap-4 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <PartyPopper className="w-4 h-4 text-gold-400" />
              <span className="section-subtitle">Leon Lens Sessions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-widest uppercase text-white">
              Birthday Shoot
            </h2>
          </div>
          <div className="flex-1 h-px bg-zinc-800 hidden md:block" />
          <span className="text-zinc-600 text-sm hidden md:block">{birthdayPhotos.length} photos</span>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {birthdayPhotos.map((photo, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden cursor-pointer break-inside-avoid"
              onClick={() => setLightbox(photo)}
            >
              <Image
                src={photo.src}
                alt={photo.title}
                width={800}
                height={1000}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-500 flex items-end p-4">
                <div className="translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-gold-400 text-xs tracking-widest uppercase">Birthday Shoot</p>
                  <p className="text-white text-sm font-light">{photo.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── DIVIDER ─────────────────────────────────────────────────────── */}
      <div className="border-t border-zinc-800 mx-6 mb-20" />

      {/* ── COMMERCIAL SECTION ───────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex items-center gap-4 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span className="section-subtitle">Leon Lens Sessions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-widest uppercase text-white">
              Commercial
            </h2>
          </div>
          <div className="flex-1 h-px bg-zinc-800 hidden md:block" />
          <span className="text-zinc-600 text-sm hidden md:block">{commercialPhotos.length} photos</span>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-3 gap-3 space-y-3">
          {commercialPhotos.map((photo, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden cursor-pointer break-inside-avoid"
              onClick={() => setLightbox(photo)}
            >
              <Image
                src={photo.src}
                alt={photo.title}
                width={800}
                height={600}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-500 flex items-end p-4">
                <div className="translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-gold-400 text-xs tracking-widest uppercase">Commercial</p>
                  <p className="text-white text-sm font-light">{photo.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── DIVIDER ─────────────────────────────────────────────────────── */}
      <div className="border-t border-zinc-800 mx-6 mb-20" />

      {/* ── PORTRAIT SECTION ─────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex items-center gap-4 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span className="section-subtitle">Leon Lens Sessions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-widest uppercase text-white">Portrait</h2>
          </div>
          <div className="flex-1 h-px bg-zinc-800 hidden md:block" />
          <span className="text-zinc-600 text-sm hidden md:block">{portraitPhotos.length} photos</span>
        </div>
        <div className="columns-2 md:columns-3 lg:columns-3 gap-3 space-y-3">
          {portraitPhotos.map((photo, idx) => (
            <div key={idx} className="relative group overflow-hidden cursor-pointer break-inside-avoid" onClick={() => setLightbox(photo)}>
              <Image src={photo.src} alt={photo.title} width={600} height={800} className="w-full object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 33vw" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-500 flex items-end p-4">
                <div className="translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-gold-400 text-xs tracking-widest uppercase">Portrait</p>
                  <p className="text-white text-sm font-light">{photo.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── DIVIDER ─────────────────────────────────────────────────────── */}
      <div className="border-t border-zinc-800 mx-6 mb-20" />

      {/* ── EVENTS SECTION ───────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex items-center gap-4 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span className="section-subtitle">Leon Lens Sessions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-widest uppercase text-white">Events</h2>
          </div>
          <div className="flex-1 h-px bg-zinc-800 hidden md:block" />
          <span className="text-zinc-600 text-sm hidden md:block">{eventsPhotos.length} photos</span>
        </div>
        <div className="columns-2 md:columns-3 lg:columns-3 gap-3 space-y-3">
          {eventsPhotos.map((photo, idx) => (
            <div key={idx} className="relative group overflow-hidden cursor-pointer break-inside-avoid" onClick={() => setLightbox(photo)}>
              <Image src={photo.src} alt={photo.title} width={800} height={600} className="w-full object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 33vw" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-500 flex items-end p-4">
                <div className="translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-gold-400 text-xs tracking-widest uppercase">Events</p>
                  <p className="text-white text-sm font-light">{photo.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── DIVIDER ─────────────────────────────────────────────────────── */}
      <div className="border-t border-zinc-800 mx-6 mb-20" />

      {/* ── ARCHITECTURE SECTION ─────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex items-center gap-4 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span className="section-subtitle">Leon Lens Sessions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-widest uppercase text-white">Architecture</h2>
          </div>
          <div className="flex-1 h-px bg-zinc-800 hidden md:block" />
          <span className="text-zinc-600 text-sm hidden md:block">{architecturePhotos.length} photos</span>
        </div>
        <div className="columns-2 md:columns-3 lg:columns-2 gap-3 space-y-3">
          {architecturePhotos.map((photo, idx) => (
            <div key={idx} className="relative group overflow-hidden cursor-pointer break-inside-avoid" onClick={() => setLightbox(photo)}>
              <Image src={photo.src} alt={photo.title} width={800} height={600} className="w-full object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 33vw" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-500 flex items-end p-4">
                <div className="translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-gold-400 text-xs tracking-widest uppercase">Architecture</p>
                  <p className="text-white text-sm font-light">{photo.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── LIGHTBOX ─────────────────────────────────────────────────────── */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 w-10 h-10 border border-zinc-600 flex items-center justify-center hover:border-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div
            className="relative max-w-5xl max-h-[88vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.src}
              alt={lightbox.title}
              width={1400}
              height={900}
              className="object-contain max-h-[80vh] w-auto mx-auto"
              priority
            />
            <p className="text-zinc-400 text-sm mt-4 tracking-widest uppercase">{lightbox.title}</p>
          </div>
        </div>
      )}

      {/* ── Bottom CTA ───────────────────────────────────────────────────── */}
      <div className="bg-zinc-950 border-t border-zinc-800 py-16 text-center">
        <p className="text-zinc-400 mb-2 text-lg">Love what you see?</p>
        <p className="text-zinc-600 text-sm mb-8">Let&apos;s create your own story together.</p>
        <Link href="/booking" className="btn-gold">
          Book Your Session
        </Link>
      </div>
    </div>
  );
}

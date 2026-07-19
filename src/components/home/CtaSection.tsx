import Link from "next/link";

export default function CtaSection() {
  return (
    <section
      className="relative py-32 bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80)",
      }}
    >
      <div className="absolute inset-0 bg-black/75" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <p className="section-subtitle mb-6">Ready to Begin?</p>
        <h2 className="text-5xl md:text-6xl font-thin tracking-widest uppercase text-white mb-6">
          Let&apos;s Create <span className="text-gold-400">Magic</span> Together
        </h2>
        <p className="text-zinc-300 text-lg font-light mb-12 max-w-xl mx-auto leading-relaxed">
          Every great photograph starts with a conversation. Tell us your vision and we&apos;ll bring it to life.
        </p>
        <Link href="/booking" className="btn-gold text-base px-10 py-4">
          Book Your Session Today
        </Link>
      </div>
    </section>
  );
}

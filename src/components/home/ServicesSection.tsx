import Link from "next/link";
import { Heart, User, Building2, Camera, Star, Zap } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Wedding Photography",
    description:
      "Your wedding day deserves flawless documentation. From intimate ceremonies to grand celebrations, we craft timeless imagery.",
    price: "From R8,500",
    features: ["Full day coverage", "2 photographers", "Online gallery", "400+ edited images"],
  },
  {
    icon: User,
    title: "Portrait Sessions",
    description:
      "Professional portraits that reveal your authentic self — ideal for headshots, family portraits, and personal branding.",
    price: "From R1,200",
    features: ["1-2 hour session", "2 outfit changes", "50+ edited images", "Print-ready files"],
  },
  {
    icon: Building2,
    title: "Commercial Photography",
    description:
      "Elevate your brand with stunning commercial imagery. Product photography, corporate events, and marketing content.",
    price: "From R3,500",
    features: ["Studio or on-location", "Post-production", "Commercial license", "Quick turnaround"],
  },
  {
    icon: Camera,
    title: "Event Photography",
    description:
      "Corporate events, galas, launches, birthdays — we capture every highlight so nothing is missed.",
    price: "From R2,500",
    features: ["Up to 5 hours", "Same-day previews", "Online gallery", "Social media ready"],
  },
  {
    icon: Star,
    title: "Newborn & Family",
    description:
      "Precious early moments deserve to be preserved beautifully. Safe, gentle, and heartwarming sessions.",
    price: "From R1,800",
    features: ["2-3 hour session", "Studio setup included", "60+ edited images", "Canvas prints available"],
  },
  {
    icon: Zap,
    title: "Mini Sessions",
    description:
      "Quick, affordable sessions for seasonal photos, social media content, or when you need stunning images fast.",
    price: "From R650",
    features: ["30-minute session", "15 edited images", "Digital delivery", "Booking in 24hrs"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-subtitle mb-4">What We Offer</p>
          <h2 className="section-title">Our Services</h2>
          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto leading-relaxed">
            Every session is tailored to your unique vision. We work closely with each client to deliver extraordinary results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-black border border-zinc-800 p-8 group hover:border-gold-400 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 border border-zinc-700 group-hover:border-gold-400 flex items-center justify-center mb-6 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-gold-400" />
                </div>
                <h3 className="text-lg font-light tracking-wide text-white mb-3">{service.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-zinc-400 text-xs">
                      <span className="w-1 h-1 bg-gold-400 rounded-full shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-6 border-t border-zinc-800">
                  <span className="text-gold-400 font-semibold">{service.price}</span>
                  <Link
                    href="/booking"
                    className="text-xs tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-200"
                  >
                    Book →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

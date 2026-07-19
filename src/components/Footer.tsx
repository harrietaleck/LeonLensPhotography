import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/logo.png"
                alt="Leon Lens Photography"
                width={72}
                height={72}
                className="rounded-full"
              />
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Capturing life&apos;s most precious moments with artistry and passion. Every frame tells a story.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/leonlensphotos?igsh=ODVianl6a2pzb2Y0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-gold-400 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1EfNRSyq97/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-gold-400 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:bessingmaramba1@gmail.com"
                className="text-zinc-400 hover:text-gold-400 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs tracking-[0.3em] uppercase text-gold-400 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/gallery", label: "Gallery" },
                { href: "/#services", label: "Services" },
                { href: "/#about", label: "About" },
                { href: "/booking", label: "Book a Session" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white text-sm tracking-wide transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs tracking-[0.3em] uppercase text-gold-400 mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-400 text-sm">
                <Phone className="w-4 h-4 mt-0.5 text-gold-400 shrink-0" />
                <a href="tel:0656419848" className="hover:text-white transition-colors">065 641 9848</a>
              </li>
              <li className="flex items-start gap-3 text-zinc-400 text-sm">
                <Mail className="w-4 h-4 mt-0.5 text-gold-400 shrink-0" />
                <a href="mailto:bessingmaramba1@gmail.com" className="hover:text-white transition-colors break-all">bessingmaramba1@gmail.com</a>
              </li>
              <li className="flex items-start gap-3 text-zinc-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-gold-400 shrink-0" />
                <span>South Africa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-xs tracking-wide">
          <p>&copy; {new Date().getFullYear()} Leon Lens Photography. All rights reserved.</p>
          <p>Designed with passion for storytelling.</p>
        </div>
      </div>
    </footer>
  );
}

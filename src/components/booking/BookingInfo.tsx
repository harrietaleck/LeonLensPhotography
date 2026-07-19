import { Clock, CreditCard, Camera, MessageCircle, CheckCircle, Phone, Mail } from "lucide-react";

const process = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Submit Request",
    desc: "Fill out the booking form with your session details and vision.",
  },
  {
    icon: Clock,
    step: "02",
    title: "24hr Response",
    desc: "We'll confirm availability and send a detailed quote within 24 hours.",
  },
  {
    icon: CreditCard,
    step: "03",
    title: "Deposit & Contract",
    desc: "A 30% deposit secures your date. Contract is signed digitally.",
  },
  {
    icon: Camera,
    step: "04",
    title: "Session Day",
    desc: "We capture your story with passion and artistry.",
  },
  {
    icon: CheckCircle,
    step: "05",
    title: "Gallery Delivery",
    desc: "Edited images delivered to your private online gallery within 2–3 weeks.",
  },
];

const faqs = [
  {
    q: "How far in advance should I book?",
    a: "Weekends and wedding dates book up fast — we recommend 3–6 months ahead. For weekday sessions, 2–4 weeks is usually fine.",
  },
  {
    q: "Do you travel?",
    a: "Yes! We're based in Johannesburg but available nationally and internationally. Travel fees apply for destinations beyond 50km.",
  },
  {
    q: "What if the weather is bad?",
    a: "We monitor forecasts closely and will reach out to reschedule if conditions are unsuitable, at no extra charge.",
  },
  {
    q: "How do I receive my photos?",
    a: "Your edited gallery is delivered via a private online link. Downloads are available in full resolution for 3 months.",
  },
];

export default function BookingInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Quick Links */}
      <div className="bg-zinc-900 border border-zinc-800 p-6">
        <h3 className="text-xs tracking-[0.3em] uppercase text-gold-400 mb-5">Quick Contact</h3>
        <div className="space-y-4">
          <a href="tel:0656419848" className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors text-sm">
            <Phone className="w-4 h-4 text-gold-400" />
            065 641 9848
          </a>
          <a href="mailto:bessingmaramba1@gmail.com" className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors text-sm break-all">
            <Mail className="w-4 h-4 text-gold-400 shrink-0" />
            bessingmaramba1@gmail.com
          </a>
          <a href="https://www.instagram.com/leonlensphotos?igsh=ODVianl6a2pzb2Y0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors text-sm">
            <svg className="w-4 h-4 text-gold-400 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            @leonlensphotos
          </a>
          <a href="https://www.facebook.com/share/1EfNRSyq97/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors text-sm">
            <svg className="w-4 h-4 text-gold-400 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            Leon Lens Photography
          </a>
        </div>
      </div>

      {/* Booking Process */}
      <div className="bg-zinc-900 border border-zinc-800 p-6">
        <h3 className="text-xs tracking-[0.3em] uppercase text-gold-400 mb-6">How It Works</h3>
        <div className="space-y-5">
          {process.map(({ icon: Icon, step, title, desc }) => (
            <div key={step} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 border border-zinc-700 flex items-center justify-center shrink-0">
                  <Icon className="w-3.5 h-3.5 text-gold-400" />
                </div>
                {step !== "05" && <div className="w-px flex-1 bg-zinc-800 my-1" />}
              </div>
              <div className="pb-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-gold-400 text-xs font-mono">{step}</span>
                  <span className="text-white text-sm font-medium">{title}</span>
                </div>
                <p className="text-zinc-500 text-xs leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-zinc-900 border border-zinc-800 p-6">
        <h3 className="text-xs tracking-[0.3em] uppercase text-gold-400 mb-6">FAQ</h3>
        <div className="space-y-5">
          {faqs.map((faq) => (
            <div key={faq.q} className="border-b border-zinc-800 pb-5 last:border-0 last:pb-0">
              <p className="text-white text-sm font-medium mb-2">{faq.q}</p>
              <p className="text-zinc-500 text-xs leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

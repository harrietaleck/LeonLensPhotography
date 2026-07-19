"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Sessions Completed" },
  { value: 12, suffix: "", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 50, suffix: "+", label: "Awards Won" },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(value, 2000, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-light text-gold-400 mb-2">
        {count}{suffix}
      </div>
      <div className="text-xs tracking-[0.3em] uppercase text-zinc-400">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-zinc-950 border-y border-zinc-800 py-16">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}

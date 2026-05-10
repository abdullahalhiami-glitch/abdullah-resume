import { FadeIn, SectionHeading } from "../lib/utils";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    text: "Abdullah possesses a rare blend of technical precision and artistic vision. He transformed our vague ideas into a stunning digital experience that exceeded every expectation.",
    author: "Sarah J.",
    role: "CEO, TechFlow Solutions",
  },
  {
    text: "Working with Abdullah was a game-changer. His ability to fuse motion, design, and code is incredible. The fast turnaround and flawless communication made the process effortless.",
    author: "Marcus T.",
    role: "Creative Director, Vibe Agency",
  },
  {
    text: "He doesn't just build websites; he crafts experiences. The attention to detail in the micro-interactions and typography proved that he truly cares about his craft.",
    author: "Elena R.",
    role: "Founder, Minimalist Studio",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-[#050505] relative overflow-hidden">
      <div className="max-w-[1024px] mx-auto px-10">
        <SectionHeading title="Words of Impact" subtitle="Testimonials" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="bg-white/[0.03] border border-white/5 p-8 rounded-xl relative h-full flex flex-col justify-between overflow-hidden group">
                <Quote className="w-8 h-8 text-white/5 absolute top-6 right-6 group-hover:text-white/10 transition-colors" />
                <div className="flex-grow mb-8">
                  <p className="text-[14px] text-white/40 leading-[1.6] font-serif italic relative z-10">"{t.text}"</p>
                </div>
                <div>
                  <p className="text-[16px] font-[600] leading-[1.1] tracking-[-0.5px] text-white mb-2">{t.author}</p>
                  <p className="text-[10px] uppercase tracking-[2px] text-[#00FF66]">{t.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

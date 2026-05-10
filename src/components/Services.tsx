import { FadeIn, SectionHeading } from "../lib/utils";
import { PenTool, Monitor, Layout, Video } from "lucide-react";

const SERVICES = [
  {
    icon: PenTool,
    title: "Brand Identity Design",
    short: "Crafting visual legacies.",
    desc: "A brand is more than a logo. It's a cohesive visual language. I build robust identities that combine strategy, typography, and emotion to stand out in crowded markets.",
  },
  {
    icon: Layout,
    title: "UI/UX & Web Design",
    short: "Interfaces that convert.",
    desc: "Designing intuitive, conversion-focused digital experiences. I ensure every pixel serves a purpose, balancing luxury aesthetics with seamless user journeys.",
  },
  {
    icon: Monitor,
    title: "Frontend Development",
    short: "Bringing designs to life.",
    desc: "Writing clean, scalable code. I bridge the gap between design and development by turning static prototypes into performant, responsive, and animated web applications.",
  },
  {
    icon: Video,
    title: "Motion & Editing",
    short: "Cinematic storytelling.",
    desc: "Attention is currency. I create dynamic motion graphics and edit compelling video content that grabs attention, explains complex ideas, and drives engagement.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 -mr-64 -mt-64 w-[800px] h-[800px] bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1024px] mx-auto px-10 relative z-10">
        <SectionHeading title="How I Add Value" subtitle="Services" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((s, idx) => (
            <FadeIn key={s.title} delay={idx * 0.1}>
                <div className="bg-white/[0.03] border border-white/5 p-6 rounded-xl relative group hover:border-[#00FF66]/20 transition-all duration-500 h-full flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#00FF66]/10 group-hover:text-[#00FF66] text-white transition-colors">
                  <s.icon className="w-5 h-5" />
                </div>
                <h3 className="text-[20px] font-[600] leading-[1.1] tracking-[-0.5px] text-white mb-2">{s.title}</h3>
                <p className="text-[10px] uppercase tracking-[2px] text-[#00FF66] mb-4">{s.short}</p>
                <p className="text-[14px] text-white/40 leading-[1.5] font-serif italic flex-grow">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

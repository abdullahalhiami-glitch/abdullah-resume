import { FadeIn, SectionHeading } from "../lib/utils";

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative bg-[#050505]">
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-emerald-900/50 to-transparent" />
      
      <div className="max-w-[1024px] mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Portrait Column */}
          <div className="lg:col-span-5">
            <FadeIn>
              <div className="relative group">
                {/* Decorative border/glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-emerald-500 to-zinc-800 rounded-[2rem] blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-zinc-900 border border-white/10">
                  <div className="absolute inset-0 bg-noise" />
                  <img
                    src="https://images.unsplash.com/photo-1555952494-efd681c7e3f5?auto=format&fit=crop&q=80&w=1200"
                    alt="Abstract representation of creativity"
                    className="object-cover w-full h-full opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                  />
                  {/* Subtle overlay overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-8 left-8">
                    <p className="font-display text-white font-bold text-2xl">Vision over Visibility.</p>
                    <p className="text-emerald-400 font-mono text-sm mt-2">Never stop evolving.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-7">
            <SectionHeading 
              title="I design experiences that make people feel something." 
              subtitle="The Journey" 
            />
            
            <div className="space-y-8 text-white/40 text-base leading-[1.5] font-serif italic">
              <FadeIn delay={0.2}>
                <p>
                  I am a self-taught multidisciplinary creative. My journey didn't start in a traditional agency—it started with an insatiable curiosity and a belief that creativity is the ultimate problem-solving tool. I have transformed myself through relentless learning, mastering design, code, and storytelling.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p>
                  I bridge the gap between aesthetics and functionality. Whether I'm crafting a brand identity, developing a frontend interface, executing motion graphics, or leveraging AI to unlock new creative paradigms, my goal is always the same: <strong className="text-white font-[600]">To deliver world-class quality that commands attention and emotional resonance.</strong>
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="grid grid-cols-2 gap-8 pt-8 mt-8">
                  <div className="bg-white/[0.03] border border-white/5 p-6 rounded-xl flex flex-col justify-between overflow-hidden relative">
                    <div className="text-[10px] uppercase tracking-[2px] text-[#00FF66] mb-3">Disciplinary</div>
                    <div className="text-[28px] font-[600] leading-[1.1] tracking-[-0.5px] text-white">Multi-</div>
                  </div>
                  <div className="bg-white/[0.03] border border-white/5 p-6 rounded-xl flex flex-col justify-between overflow-hidden relative">
                    <div className="text-[10px] uppercase tracking-[2px] text-[#00FF66] mb-3">Self-Taught</div>
                    <div className="text-[28px] font-[600] leading-[1.1] tracking-[-0.5px] text-white">100%</div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

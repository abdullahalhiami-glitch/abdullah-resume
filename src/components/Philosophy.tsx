import { FadeIn, SectionHeading } from "../lib/utils";

export function Philosophy() {
  return (
    <section className="py-24 md:py-40 bg-[#050505] relative overflow-hidden flex items-center min-h-[80vh]">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="max-w-[1024px] mx-auto px-10 relative z-10 text-center">
        <FadeIn direction="up">
          <div className="bg-white/[0.03] border border-white/5 p-10 md:p-16 rounded-xl flex flex-col justify-center overflow-hidden relative group p-8 max-w-3xl mx-auto">
            <div className="absolute top-0 right-0 p-8 flex justify-between items-center w-full">
               <div className="text-[10px] uppercase tracking-[2px] text-white/50">Abdullah's Design Mindset</div>
               <div className="text-[12px] text-[#D4AF37] font-serif italic">Signature Edition</div>
            </div>
            
            <h2 className="text-[28px] md:text-[36px] font-[600] leading-[1.1] tracking-[-0.5px] text-white mt-8 mb-6">
              "Complexity made elegant. Intelligence made visible. Art made functional."
            </h2>
            <p className="text-[14px] text-white/40 leading-[1.5] font-serif italic max-w-xl mx-auto mt-4">
              I believe that through struggle comes transformation. Technology is merely the canvas; meaning is the masterpiece. Every line of code, every motion curve, every brand identity must tell a human story.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

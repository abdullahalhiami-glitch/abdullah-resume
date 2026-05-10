import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Download, ChevronDown } from "lucide-react";

const TITLES = [
  "Creative Designer",
  "Frontend Developer",
  "Visual Storyteller",
  "3D Artist",
  "Motion Graphics Designer",
  "AI-Powered Creative"
];

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1024px] mx-auto px-10 flex flex-col justify-center items-start text-left">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <div className="w-[2px] h-[40px] bg-[#00FF66] mr-4 hidden md:block"></div>
          <span className="text-[11px] font-bold uppercase tracking-[3px] text-[#00FF66]">Multidisciplinary Creative Professional</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-[110px] font-black leading-[0.85] tracking-[-4px] uppercase mb-6 flex flex-col items-center md:items-start"
        >
          <span className="text-white">Abdullah</span>
          <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Al-Hiami</span>
        </motion.h1>

        <div className="h-6 overflow-hidden mb-8 md:mb-10 flex justify-center md:justify-start w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={titleIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-[14px] uppercase tracking-[2px] text-white/50 font-medium"
            >
              {TITLES[titleIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[480px] mx-auto md:mx-0 text-base text-white/40 leading-[1.5] mb-12 font-serif italic text-center md:text-left"
        >
          A fusion of logic and art. Self-taught, boundary-pushing designer and creative technologist specializing in high-fidelity visual identities and intelligent digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#portfolio"
            className="w-full sm:w-auto px-7 py-[14px] rounded-[4px] bg-[#00FF66] text-black font-bold uppercase tracking-[1px] text-[12px] transition-all flex items-center justify-center gap-2 group hover:scale-[1.02] active:scale-[0.98]"
          >
            Hire Me Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-7 py-[14px] rounded-[4px] border border-white/20 text-white font-bold uppercase tracking-[1px] text-[12px] hover:bg-white/5 transition-all flex items-center justify-center gap-2 group hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download className="w-5 h-5" />
            View My Archives
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 animate-bounce"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
}

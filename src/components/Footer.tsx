export function Footer() {
  return (
    <footer className="bg-[#050505] py-10 border-t border-white/5 px-10">
      <div className="max-w-[1024px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-left flex items-center gap-3 text-white">
          <div className="w-2 h-2 bg-[#00FF66] rounded-full shadow-[0_0_10px_#00FF66]"></div>
          <span className="text-[12px] text-white/40">Available for international freelance / Elite creative direction</span>
        </div>
        
        <p className="font-serif text-[14px] text-white/60">
          Designing the future of storytelling. {new Date().getFullYear()} ©
        </p>

        <a href="#" className="text-[11px] uppercase tracking-[1px] text-white/40 hover:text-[#00FF66] transition-colors cursor-pointer">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

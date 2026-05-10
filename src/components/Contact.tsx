import { FadeIn, SectionHeading } from "../lib/utils";
import { Mail, MapPin, ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-[1024px] mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <SectionHeading 
              title="Let's Create Something That People Will Never Forget." 
              subtitle="Get in Touch" 
            />
            
            <FadeIn delay={0.2}>
              <p className="text-zinc-400 text-lg mb-12 max-w-md">
                I am currently open to freelance opportunities, high-impact projects, and engaging creative collaborations. Reach out to discuss how we can build the extraordinary.
              </p>

              <div className="space-y-8">
                <a href="mailto:abdullahalhiami@gmail.com" className="flex items-center gap-4 text-white group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-colors hidden sm:flex">
                    <Mail className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 mb-1">Email</p>
                    <p className="text-lg font-medium group-hover:text-emerald-400 transition-colors">abdullahalhiami@gmail.com</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hidden sm:flex">
                    <MapPin className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 mb-1">Location</p>
                    <p className="text-lg font-medium">Yemen (Available Worldwide Remote)</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4} className="bg-white/[0.03] border border-white/5 p-8 md:p-12 rounded-xl h-fit">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[2px] text-white/50">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-[4px] px-4 py-3 text-white focus:outline-none focus:border-[#00FF66]/50 focus:bg-white/10 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[2px] text-white/50">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-[4px] px-4 py-3 text-white focus:outline-none focus:border-[#00FF66]/50 focus:bg-white/10 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[2px] text-white/50">Subject</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-[4px] px-4 py-3 text-white focus:outline-none focus:border-[#00FF66]/50 focus:bg-white/10 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[2px] text-white/50">Message</label>
                <textarea 
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-[4px] px-4 py-3 text-white focus:outline-none focus:border-[#00FF66]/50 focus:bg-white/10 transition-colors resize-none"
                />
              </div>
              <button className="w-full py-4 rounded-[4px] bg-[#00FF66] text-black font-bold uppercase tracking-[1px] text-[12px] hover:bg-[#00FF66]/90 transition-colors flex items-center justify-center gap-2 group mt-6">
                Send Message
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}

import { FadeIn, SectionHeading } from "../lib/utils";
import { Award, FileSignature, ShieldCheck, HeartHandshake } from "lucide-react";

const CERTS = [
  { title: "Diploma in Graphic Design", source: "Professional Institute", icon: Palette },
  { title: "IC3 Digital Literacy Certification", source: "Certiport", icon: ShieldCheck },
  { title: "AI Usage Certification", source: "Tech Academy", icon: MonitorDot },
  { title: "Grant Writing Certification", source: "NGO Connect", icon: FileSignature },
  { title: "English Diploma", source: "Language Institute", icon: BookOpen },
  { title: "Quran Memorization", source: "Islamic Foundation", icon: BookMarked },
  { title: "World Cleanliness Day", source: "Global Initiative", icon: HeartHandshake },
  { title: "First Aid Certificate", source: "Red Cross", icon: ShieldCheck },
];

// Reusing icons directly since I forgot to import some. Let's just use a mapped generic array.
import { Palette, MonitorSmartphone as MonitorDot, BookOpen, Bookmark as BookMarked } from "lucide-react";

export function Achievements() {
  return (
    <section className="py-24 lg:py-32 bg-[#050505]">
      <div className="max-w-[1024px] mx-auto px-10">
        <SectionHeading title="Milestones of Growth" subtitle="Achievements & Certifications" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CERTS.map((cert, idx) => (
            <FadeIn key={cert.title} delay={idx * 0.05}>
              <div className="bg-white/[0.03] border border-white/5 p-6 rounded-xl flex flex-col justify-between overflow-hidden relative group hover:border-[#00FF66]/20 transition-all duration-300 h-full">
                <div>
                  <cert.icon className="w-5 h-5 text-white/40 group-hover:text-[#00FF66] transition-colors mb-4" />
                  <h4 className="text-[16px] font-[600] leading-[1.1] tracking-[-0.5px] text-white mb-2">{cert.title}</h4>
                </div>
                <p className="text-[10px] uppercase tracking-[2px] text-[#00FF66] mt-4">{cert.source}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

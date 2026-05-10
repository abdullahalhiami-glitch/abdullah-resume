import { FadeIn, SectionHeading } from "../lib/utils";
import { Briefcase, Code, Palette, Laptop } from "lucide-react";

const EXPERIENCES = [
  {
    id: 1,
    role: "Freelance Creative Director & Designer",
    company: "Self-Employed",
    period: "Ongoing",
    description:
      "Partnering with international clients to deliver comprehensive brand identities, UI/UX designs, and engaging motion graphics. Guiding projects from structural concept to final polished digital delivery.",
    icon: Palette,
  },
  {
    id: 2,
    role: "Frontend Developer & UI Engineer",
    company: "Independent Projects",
    period: "Continuous",
    description:
      "Developing high-performance, responsive web applications using React, Tailwind CSS, and modern web technologies. Bridging the rigorous logic of programming with high-end aesthetic design.",
    icon: Code,
  },
  {
    id: 3,
    role: "Visual Storyteller & Video Editor",
    company: "Digital Content Creation",
    period: "Past - Present",
    description:
      "Crafting cinematic narratives through advanced video editing and motion graphics using After Effects and DaVinci Resolve. Turning raw media into compelling emotional journeys.",
    icon: Laptop,
  },
  {
    id: 4,
    role: "English Communicator & Teacher",
    company: "Language & Tutoring",
    period: "Past",
    description:
      "Leveraging high-level English proficiency to communicate effectively with global clients, while also teaching and mentoring others to break down complex communication barriers.",
    icon: Briefcase,
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 relative bg-[#050505]">
      <div className="max-w-[1024px] mx-auto px-10">
        <SectionHeading title="The Path of Mastery" subtitle="Experience" />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <FadeIn
                key={exp.id}
                delay={index * 0.1}
                className={`relative flex flex-col lg:flex-row items-start lg:items-center ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Center Node */}
                <div className="absolute left-8 lg:left-1/2 w-12 h-12 rounded-full bg-[#050505] border border-white/10 flex items-center justify-center -translate-x-1/2 z-10 text-[#00FF66] shadow-[0_0_15px_rgba(0,255,102,0.1)]">
                  <exp.icon className="w-5 h-5" />
                </div>

                {/* Content Card */}
                <div
                  className={`w-full lg:w-1/2 pl-24 lg:pl-0 ${
                    index % 2 === 0 ? "lg:pl-16" : "lg:pr-16 lg:text-right"
                  }`}
                >
                  <div className="bg-white/[0.03] border border-white/5 p-6 rounded-xl relative group hover:border-[#00FF66]/30 transition-colors duration-500">
                    <span className="text-[10px] uppercase tracking-[2px] text-[#00FF66] mb-3 block">
                      {exp.period}
                    </span>
                    <h4 className="text-[20px] font-[600] leading-[1.1] tracking-[-0.5px] text-white mb-2">
                      {exp.role}
                    </h4>
                    <p className="text-[14px] text-white/60 mb-4">{exp.company}</p>
                    <p className="text-[14px] text-white/40 leading-[1.5] font-serif italic">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

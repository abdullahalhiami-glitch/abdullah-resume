import { FadeIn, SectionHeading } from "../lib/utils";

const SKILL_CATEGORIES = [
  {
    title: "Design & UX",
    description: "Creating visually striking, user-centered experiences.",
    skills: ["Photoshop", "Illustrator", "InDesign", "Figma / UI", "Branding & Identity", "Typography"],
  },
  {
    title: "Development",
    description: "Translating design into seamless interactive code.",
    skills: ["HTML5 & CSS3", "JavaScript", "React", "Tailwind CSS", "C++ / Python", "Frontend Architecture"],
  },
  {
    title: "Motion & 3D",
    description: "Bringing static concepts to life with cinematic motion.",
    skills: ["After Effects", "Premiere Pro", "DaVinci Resolve", "CapCut", "Blender 3D", "Motion Graphics"],
  },
  {
    title: "Professional",
    description: "The human element behind successful project delivery.",
    skills: ["AI-Assisted Creativity", "English Communication", "Creative Direction", "Problem Solving", "Storytelling", "Mentorship"],
  },
];

export function Skills() {
  return (
    <section className="py-24 lg:py-32 relative bg-[#050505]">
      <div className="max-w-[1024px] mx-auto px-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/3">
            <SectionHeading title="A Multidisciplinary Arsenal" subtitle="Capabilities" className="mb-8" />
            <FadeIn>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                I do not limit myself to one tool or one medium. The best solutions often lie at the intersection of different disciplines. By mastering design, code, and motion, I can oversee a project's entire lifecycle without compromising the initial vision.
              </p>
            </FadeIn>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-5">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <FadeIn key={cat.title} delay={idx * 0.1}>
                <div className="bg-white/[0.03] border border-white/5 p-6 rounded-xl flex flex-col justify-between overflow-hidden relative h-full">
                  <div className="text-[10px] uppercase tracking-[2px] text-[#00FF66] mb-3">
                    {cat.title}
                  </div>
                  <p className="text-[12px] text-white/40 mb-6 font-serif italic">{cat.description}</p>
                  
                  <div className="flex flex-wrap gap-2 text-[10px] text-white/40">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 border border-white/10 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
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

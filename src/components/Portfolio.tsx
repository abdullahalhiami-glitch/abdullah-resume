import { useState } from "react";
import { FadeIn, SectionHeading } from "../lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "Lumina Intelligence",
    category: "Branding & UI/UX",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    description: "Complete brand identity and futuristic web application interface for an AI startup.",
  },
  {
    id: 2,
    title: "Aether Motion",
    category: "Motion Graphics",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    description: "High-impact cinematic promo video combining 3D elements and dynamic typography.",
  },
  {
    id: 3,
    title: "FinTech Dashboard",
    category: "Frontend Development",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    description: "A data-dense, fully responsive financial dashboard built with React and Tailwind CSS.",
  },
  {
    id: 4,
    title: "Noir Architecture",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    description: "Minimalist, luxury portfolio website designed for a high-end architectural firm.",
  },
  {
    id: 5,
    title: "Cybernetic Forms",
    category: "3D Art",
    image: "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=1200&auto=format&fit=crop",
    description: "A series of abstract 3D visual explorations created using Blender.",
  },
  {
    id: 6,
    title: "Urban Culture Festival",
    category: "Social Media Design",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
    description: "Vibrant, attention-grabbing poster and social media campaign for a music festival.",
  },
];

const FILTERS = ["All", "Branding & UI/UX", "Frontend Development", "Motion Graphics", "3D Art", "Social Media Design"];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = PROJECTS.filter(
    (p) => activeFilter === "All" || p.category === activeFilter
  );

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-[#050505] min-h-screen">
      <div className="max-w-[1024px] mx-auto px-10">
        <SectionHeading title="Selected Works" subtitle="Portfolio" />

        {/* Filters */}
        <FadeIn delay={0.2} className="mb-12 overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex items-center gap-2 w-max">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-[4px] text-[11px] uppercase tracking-[1px] font-bold transition-all duration-300 border ${
                  activeFilter === filter
                    ? "border-[#00FF66] text-[#00FF66] bg-[#00FF66]/10"
                    : "border-white/10 text-white/40 hover:text-white hover:bg-white/5"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Masonry or Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group relative bg-white/[0.03] border border-white/5 p-4 rounded-xl overflow-hidden cursor-pointer flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-md relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.8] group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                </div>
                
                {/* Content Overlay */}
                <div className="pt-4 flex flex-col justify-end flex-grow">
                  <p className="text-[#00FF66] text-[10px] uppercase tracking-[2px] mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-[20px] font-[600] leading-[1.1] tracking-[-0.5px] text-white flex items-center justify-between gap-2 mb-2">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-[12px] text-white/40 font-serif italic line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

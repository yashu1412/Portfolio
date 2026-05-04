import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Code, Database, Server, Terminal, Cpu, Globe, GitBranch, Layers, Layout } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  category: string;
}

export default function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const skills: Skill[] = [
    // Programming & Core Concepts
    { name: "JavaScript", level: 90, icon: <Code size={20} />, category: "Programming & Core Concepts" },
    { name: "TypeScript", level: 85, icon: <Code size={20} />, category: "Programming & Core Concepts" },
    { name: "C++", level: 80, icon: <Cpu size={20} />, category: "Programming & Core Concepts" },
    { name: "Python", level: 85, icon: <Code size={20} />, category: "Programming & Core Concepts" },
    { name: "SQL", level: 85, icon: <Database size={20} />, category: "Programming & Core Concepts" },
    { name: "System Design (Basics)", level: 80, icon: <Layout size={20} />, category: "Programming & Core Concepts" },

    // Frontend & UI Engineering
    { name: "React.js", level: 95, icon: <Globe size={20} />, category: "Frontend & UI Engineering" },
    { name: "Next.js", level: 80, icon: <Globe size={20} />, category: "Frontend & UI Engineering" },
    { name: "Three.js", level: 75, icon: <Globe size={20} />, category: "Frontend & UI Engineering" },
    { name: "TailwindCSS", level: 90, icon: <Layers size={20} />, category: "Frontend & UI Engineering" },
    { name: "Framer Motion", level: 85, icon: <Layers size={20} />, category: "Frontend & UI Engineering" },
    { name: "Zustand", level: 80, icon: <Database size={20} />, category: "Frontend & UI Engineering" },
    { name: "HTML5", level: 95, icon: <Layout size={20} />, category: "Frontend & UI Engineering" },

    // Backend & API Development
    { name: "Node.js", level: 85, icon: <Server size={20} />, category: "Backend & API Development" },
    { name: "FastAPI", level: 85, icon: <Server size={20} />, category: "Backend & API Development" },
    { name: "Express.js", level: 80, icon: <Server size={20} />, category: "Backend & API Development" },
    { name: "RESTful APIs", level: 90, icon: <Server size={20} />, category: "Backend & API Development" },
    { name: "JWT Authentication", level: 85, icon: <Server size={20} />, category: "Backend & API Development" },
    { name: "Redis", level: 80, icon: <Database size={20} />, category: "Backend & API Development" },

    // Databases, AI & Infrastructure
    { name: "PostgreSQL", level: 80, icon: <Database size={20} />, category: "Databases, AI & Infrastructure" },
    { name: "RAG", level: 85, icon: <Cpu size={20} />, category: "Databases, AI & Infrastructure" },
    { name: "Prisma ORM", level: 85, icon: <Database size={20} />, category: "Databases, AI & Infrastructure" },
    { name: "MongoDB", level: 90, icon: <Database size={20} />, category: "Databases, AI & Infrastructure" },
    { name: "Docker", level: 75, icon: <Terminal size={20} />, category: "Databases, AI & Infrastructure" },
    { name: "Git/GitHub", level: 88, icon: <GitBranch size={20} />, category: "Databases, AI & Infrastructure" },
    { name: "Linux", level: 80, icon: <Terminal size={20} />, category: "Databases, AI & Infrastructure" },
    { name: "Postman", level: 85, icon: <Terminal size={20} />, category: "Databases, AI & Infrastructure" },
  ];

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-black text-white" ref={containerRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-black to-black opacity-50"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none animate-pulse delay-700"></div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-20 text-center"
        >
          <span className="text-primary text-sm font-mono tracking-wider uppercase mb-2">My Arsenal</span>
          <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-white/40">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {categories.map((category, idx) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl -z-10 blur-sm group-hover:blur-md transition-all duration-500"></div>
              <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 h-full relative overflow-hidden">
                 {/* Hover Glow */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-[50px] group-hover:bg-primary/20 transition-all duration-500"></div>
                
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-white">
                  <span className="p-2 rounded-lg bg-primary/10 text-primary border border-primary/20">
                    {category === "Programming & Core Concepts" && <Cpu size={18} />}
                    {category === "Frontend & UI Engineering" && <Layers size={18} />}
                    {category === "Backend & API Development" && <Globe size={18} />}
                    {category === "Databases, AI & Infrastructure" && <Database size={18} />}
                  </span>
                  {category}
                </h3>

                <div className="space-y-4">
                  {skills.filter(s => s.category === category).map((skill) => (
                    <div key={skill.name} className="group/skill">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-gray-400 group-hover/skill:text-primary transition-colors duration-300">{skill.icon}</span>
                        <span className="font-medium text-gray-200">{skill.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

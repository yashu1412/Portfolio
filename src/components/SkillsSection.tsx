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
    // Programming & CS Fundamentals
    { name: "JavaScript", level: 90, icon: <Code size={20} />, category: "Programming & CS Fundamentals" },
    { name: "TypeScript", level: 85, icon: <Code size={20} />, category: "Programming & CS Fundamentals" },
    { name: "C++", level: 80, icon: <Cpu size={20} />, category: "Programming & CS Fundamentals" },
    { name: "Python", level: 85, icon: <Code size={20} />, category: "Programming & CS Fundamentals" },
    { name: "System Design", level: 80, icon: <Layout size={20} />, category: "Programming & CS Fundamentals" },

    // Frameworks
    { name: "Node.js", level: 85, icon: <Server size={20} />, category: "Frameworks" },
    { name: "Express.js", level: 80, icon: <Server size={20} />, category: "Frameworks" },
    { name: "React.js", level: 95, icon: <Globe size={20} />, category: "Frameworks" },
    { name: "Next.js", level: 80, icon: <Globe size={20} />, category: "Frameworks" },
    { name: "Vue.js", level: 75, icon: <Globe size={20} />, category: "Frameworks" },
    { name: "Agile", level: 85, icon: <GitBranch size={20} />, category: "Frameworks" },

    // Web Technologies
    { name: "HTML5", level: 95, icon: <Layout size={20} />, category: "Web Technologies" },
    { name: "CSS3", level: 95, icon: <Layout size={20} />, category: "Web Technologies" },
    { name: "RESTful APIs", level: 90, icon: <Server size={20} />, category: "Web Technologies" },
    { name: "JWT Auth", level: 85, icon: <Server size={20} />, category: "Web Technologies" },
    { name: "TailwindCSS", level: 90, icon: <Layers size={20} />, category: "Web Technologies" },
    { name: "Bootstrap", level: 85, icon: <Layout size={20} />, category: "Web Technologies" },
    { name: "Vite", level: 85, icon: <Terminal size={20} />, category: "Web Technologies" },
    
    // Database & DevOps
    { name: "PostgreSQL", level: 80, icon: <Database size={20} />, category: "Database & DevOps" },
    { name: "MongoDB", level: 90, icon: <Database size={20} />, category: "Database & DevOps" },
    { name: "SQL", level: 85, icon: <Database size={20} />, category: "Database & DevOps" },
    { name: "Git/GitHub", level: 88, icon: <GitBranch size={20} />, category: "Database & DevOps" },
    { name: "Docker", level: 75, icon: <Terminal size={20} />, category: "Database & DevOps" },
    { name: "Flask", level: 75, icon: <Server size={20} />, category: "Database & DevOps" },
    { name: "Postman", level: 85, icon: <Terminal size={20} />, category: "Database & DevOps" },
    { name: "Linux", level: 80, icon: <Terminal size={20} />, category: "Database & DevOps" },
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    {category === "Programming & CS Fundamentals" && <Cpu size={18} />}
                    {category === "Frameworks" && <Layers size={18} />}
                    {category === "Web Technologies" && <Globe size={18} />}
                    {category === "Database & DevOps" && <Database size={18} />}
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

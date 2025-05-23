
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';
import { Code, Database, Terminal, Layers, Cpu, GitBranch } from 'lucide-react';

// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

interface Skill {
  name: string;
  level: number;
  color: string;
  icon?: React.ReactNode;
  category?: string;
}

export default function SkillsSection() {
  const skillsRef = useRef<HTMLDivElement>(null);
  
  // Skills data organized by categories
  const skills: Skill[] = [
    // Programming Languages
    { name: "JavaScript", level: 90, color: "#f7df1e", icon: <Code size={18} />, category: "Programming Languages" },
    { name: "TypeScript", level: 85, color: "#3178c6", icon: <Code size={18} />, category: "Programming Languages" },
    { name: "C++", level: 80, color: "#00599c", icon: <Code size={18} />, category: "Programming Languages" },
    { name: "Python", level: 82, color: "#3776ab", icon: <Code size={18} />, category: "Programming Languages" },
    { name: "HTML/CSS", level: 92, color: "#e34c26", icon: <Code size={18} />, category: "Programming Languages" },
    
    // Frameworks
    { name: "React", level: 95, color: "#61dafb", icon: <Layers size={18} />, category: "Frameworks" },
    { name: "Node.js", level: 85, color: "#339933", icon: <Layers size={18} />, category: "Frameworks" },
    { name: "Express.js", level: 83, color: "#000000", icon: <Layers size={18} />, category: "Frameworks" },
    { name: "TailwindCSS", level: 90, color: "#06b6d4", icon: <Layers size={18} />, category: "Frameworks" },
    { name: "Bootstrap", level: 85, color: "#7952b3", icon: <Layers size={18} />, category: "Frameworks" },
    { name: "Vite", level: 82, color: "#646cff", icon: <Layers size={18} />, category: "Frameworks" },
    
    // Databases
    { name: "MongoDB", level: 90, color: "#47a248", icon: <Database size={18} />, category: "Databases" },
    { name: "PostgreSQL", level: 80, color: "#336791", icon: <Database size={18} />, category: "Databases" },
    
    // Tools
    { name: "Git/GitHub", level: 88, color: "#f05032", icon: <GitBranch size={18} />, category: "Tools" },
    { name: "VSCode", level: 92, color: "#007acc", icon: <Terminal size={18} />, category: "Tools" },
    { name: "Kali Linux", level: 75, color: "#557c94", icon: <Terminal size={18} />, category: "Tools" },
    { name: "Postman", level: 85, color: "#ff6c37", icon: <Terminal size={18} />, category: "Tools" },
    { name: "MongoDB Compass", level: 80, color: "#13aa52", icon: <Terminal size={18} />, category: "Tools" },
    { name: "Webpack", level: 78, color: "#8dd6f9", icon: <Cpu size={18} />, category: "Tools" }
  ];

  // Get unique categories
  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  // GSAP animation for progress bars
  useEffect(() => {
    if (!skillsRef.current) return;
    
    const bars = skillsRef.current.querySelectorAll('.skill-progress-bar');
    
    bars.forEach((bar) => {
      const level = parseInt(bar.getAttribute('data-level') || '0');
      
      gsap.fromTo(bar, 
        { width: '0%' },
        { 
          width: `${level}%`,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-card/30">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(20,184,166,0.15),rgba(255,255,255,0))] z-0"></div>
      
      <motion.div
        className="container mx-auto px-4"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        ref={skillsRef}
      >
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 font-display"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Technical <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.p 
            className="text-foreground/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Motivated Full Stack Developer with expertise in various programming languages, frameworks, databases, and tools.
          </motion.p>
        </div>
        
        {/* Skills by category */}
        <div className="space-y-12 max-w-4xl mx-auto">
          {categories.map((category, categoryIndex) => (
            <motion.div 
              key={category} 
              variants={categoryVariants}
              className="mb-10"
            >
              <h3 className="text-xl font-semibold mb-6 border-l-4 border-primary pl-3">{category}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      className="space-y-2"
                    >
                      <div className="flex justify-between mb-1 items-center">
                        <span className="font-medium flex items-center gap-2">
                          {skill.icon && <span className="text-foreground/70">{skill.icon}</span>}
                          {skill.name}
                        </span>
                        <span className="text-sm text-foreground/70">{skill.level}%</span>
                      </div>
                      
                      <div className="h-2 bg-muted rounded-full overflow-hidden relative">
                        <motion.div
                          className={cn("skill-progress-bar h-full rounded-full relative")}
                          style={{ backgroundColor: skill.color }}
                          data-level={skill.level}
                        ></motion.div>
                        
                        {/* Moving glow effect */}
                        <motion.div 
                          className="absolute top-0 bottom-0 w-5 bg-white opacity-30"
                          animate={{
                            left: ["0%", "100%"],
                            opacity: [0, 0.3, 0],
                          }}
                          transition={{
                            duration: 2,
                            delay: (categoryIndex * 0.2) + (index * 0.1),
                            repeat: Infinity,
                            repeatDelay: 3
                          }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

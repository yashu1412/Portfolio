import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ArrowDown, Code, Layers, Braces } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // GSAP animations for floating elements
  useEffect(() => {
    if (!containerRef.current) return;
    
    const floatingElements = containerRef.current.querySelectorAll('.floating-icon');
    
    floatingElements.forEach((el) => {
      const randomDuration = 5 + Math.random() * 3;
      const randomDelay = Math.random() * 2;
      
      gsap.to(el, {
        y: '20px',
        duration: randomDuration,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: randomDelay
      });
    });
    
    return () => {
      gsap.killTweensOf(floatingElements);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden pt-16"
      ref={containerRef}
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(138,92,246,0.3),rgba(255,255,255,0))]">
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-glow-conic opacity-30 blur-[100px] rounded-full"></div>
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="floating-icon absolute top-1/4 left-1/4 text-primary/30">
          <Code size={32} />
        </div>
        <div className="floating-icon absolute bottom-1/4 right-1/4 text-accent/30">
          <Layers size={40} />
        </div>
        <div className="floating-icon absolute top-1/3 right-1/5 text-secondary/30">
          <Braces size={36} />
        </div>
      </div>

      {/* Hero content */}
      <div className="container relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text content */}
          <motion.div className="w-full lg:w-1/2 text-center lg:text-left px-4">
            <motion.div variants={itemVariants}>
              <h2 className="text-sm inline-block py-1 px-3 rounded-full mb-6 bg-muted text-foreground/80 border border-border">
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="inline-block w-2 h-2 mr-2 rounded-full bg-primary"
                />
                Full Stack Developer
              </h2>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display">
              Hi, I'm
              <span className="gradient-text"> Yashpal Singh </span>
              Pawara
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg text-foreground/80 mb-8 max-w-lg mx-auto lg:mx-0">
              Motivated Full Stack Developer with expertise in JavaScript, ReactJS, NodeJS, ExpressJS and API integration. 
              Building high-quality, scalable web applications with focus on user experience and performance.
            </motion.p>

            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Tech Stack:</h3>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {[
                  "JavaScript", "TypeScript", "React", "Node.js", "Express", "MongoDB",
                  "PostgreSQL", "Tailwind", "Next.js", "Vite", "C++", "Python"
                ].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-muted rounded-full text-sm border border-border">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#projects" className="btn-glow h-12 px-6 py-2">
                View Projects
              </a>
              <a href="#skills" className="border border-border bg-muted hover:bg-muted/80 transition-colors rounded-md h-12 px-6 py-2 flex items-center justify-center">
                Explore Skills
              </a>
            </motion.div>
          </motion.div>
          
          {/* Visual element (replacing ThreeScene) */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center items-center"
            variants={itemVariants}
          >
            <div className="relative w-64 h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl shadow-lg flex items-center justify-center overflow-hidden border border-border/30">
              <div className="text-6xl animate-float">👨‍💻</div>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-4 text-center w-full text-lg font-semibold text-foreground/80"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                Yashpal Singh
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 1.5, 
          duration: 0.5,
          y: {
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }
        }}
      >
        <a href="#projects" className="flex flex-col items-center text-foreground/60 hover:text-primary transition-colors">
          <span className="text-xs mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </motion.div>
    </section>
  );
}

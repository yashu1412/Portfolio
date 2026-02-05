import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function AboutSection() {
  const { toast } = useToast();
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  const handleResumeDownload = async () => {
    try {
      const res = await fetch("/resume.pdf", { method: "HEAD" });
      if (res.ok) {
        const link = document.createElement("a");
        link.href = "/resume.pdf";
        link.download = "Yashpalsingh_Pawara_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        link.remove();
        toast({ title: "Resume download started" });
      } else {
        toast({
          title: "Resume not found",
          description: "Add resume.pdf to the public folder to enable download",
        });
      }
    } catch {
      toast({
        title: "Download failed",
        description: "Network changed or server reload. Please try again.",
      });
    }
  };

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight">About <span className="text-primary">Me</span></h2>
            <div className="h-[2px] bg-primary/50 flex-grow max-w-xs relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1/2 h-full bg-primary animate-slide-right"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Personal Info Card */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-full p-1 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 shadow-xl">
                <div className="h-full bg-black/40 rounded-xl p-6 flex flex-col justify-between">
                  <div>
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-purple-600 p-1">
                      <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-3xl overflow-hidden">
                         👨‍🎓
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-center mb-2">Yashpalsingh Pawara</h3>
                    <p className="text-primary text-center font-medium mb-6 text-sm">Full Stack Developer</p>
                    
                    <div className="space-y-4 text-sm">
                      <a href="tel:+919359028987" className="flex items-center gap-3 text-muted-foreground hover:text-white transition-colors group">
                        <div className="p-2 rounded-md bg-white/5 group-hover:bg-primary/20 transition-colors">
                          <Phone size={16} className="text-primary" />
                        </div>
                        <span>+91-9359028987</span>
                      </a>
                      <a href="mailto:yashpalsinghpawara@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-white transition-colors group">
                        <div className="p-2 rounded-md bg-white/5 group-hover:bg-primary/20 transition-colors">
                          <Mail size={16} className="text-primary" />
                        </div>
                        <span className="truncate">yashpalsinghpawara@gmail.com</span>
                      </a>
                      <a href="https://github.com/yashu1412" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-white transition-colors group">
                        <div className="p-2 rounded-md bg-white/5 group-hover:bg-primary/20 transition-colors">
                          <Github size={16} className="text-primary" />
                        </div>
                        <span>Yashu1412</span>
                      </a>
                      <a href="https://www.linkedin.com/in/yashpalsingh-pawara-46240b2b3/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-white transition-colors group">
                        <div className="p-2 rounded-md bg-white/5 group-hover:bg-primary/20 transition-colors">
                          <Linkedin size={16} className="text-primary" />
                        </div>
                        <span>Yashpalsingh-Pawara</span>
                      </a>
                      {/* <div className="flex items-center gap-3 text-muted-foreground group">
                        <div className="p-2 rounded-md bg-white/5 group-hover:bg-primary/20 transition-colors">
                          <MapPin size={16} className="text-primary" />
                        </div>
                        <span>Jabalpur, MP, India</span>
                      </div> */}
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <button onClick={handleResumeDownload} className="w-full py-2 rounded-lg bg-primary/20 hover:bg-primary/40 border border-primary/50 text-primary transition-all duration-300 text-sm font-medium">
                      Download Resume
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Experience & Education */}
            <div className="lg:col-span-2 space-y-8">
              {/* Experience */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={container}
              >
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-primary"></span>
                  Experience
                </h3>
                
                <div className="space-y-6">
                  <motion.div variants={item} className="relative pl-8 border-l border-white/10 hover:border-primary/50 transition-colors duration-300">
                    <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-primary shadow-[0_0_10px_rgba(255,0,0,0.5)]"></div>
                    <div className="bg-white/5 hover:bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/5 transition-all duration-300 group">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-2">
                        <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">React.js & Next.js Developer Intern</h4>
                        <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium border border-primary/20 whitespace-nowrap">Jun 2025 - Jul 2025</span>
                      </div>
                      <p className="text-lg text-muted-foreground mb-4">Testbuddy Education Pvt Ltd</p>
                      <ul className="space-y-2 text-sm text-gray-400 list-disc list-inside">
                        <li>Engineered college prediction tools, interactive tests, and blogs using React.js v18 & Next.js v14.</li>
                        <li>Served 15K+ active users with optimized cross-device compatibility.</li>
                        <li>Enhanced UI/UX and rendering, boosting engagement by 18% and session duration by 25%.</li>
                        <li>Integrated REST APIs and containerized apps with Docker, improving load speed by 25%.</li>
                      </ul>
                    </div>
                  </motion.div>

                  <motion.div variants={item} className="relative pl-8 border-l border-white/10 hover:border-primary/50 transition-colors duration-300">
                    <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></div>
                    <div className="bg-white/5 hover:bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/5 transition-all duration-300 group">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-2">
                        <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">ReactJs Developer Intern</h4>
                        <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium border border-primary/20 whitespace-nowrap">Dec 2024 - Mar 2025</span>
                      </div>
                      <p className="text-lg text-muted-foreground mb-4">TheGoodGameTheory</p>
                      <ul className="space-y-2 text-sm text-gray-400 list-disc list-inside">
                        <li>Developed scalable web applications using React.js and Next.js with TypeScript.</li>
                        <li>Implemented responsive UI components and integrated RESTful APIs.</li>
                        <li>Optimized application performance and ensured cross-browser compatibility.</li>
                      </ul>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={item} className="relative pl-8 border-l border-white/10 hover:border-primary/50 transition-colors duration-300">
                    <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></div>
                    <div className="bg-white/5 hover:bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/5 transition-all duration-300 group">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-2">
                        <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">Website Design and Development Intern</h4>
                        <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium border border-primary/20 whitespace-nowrap">Sep 2024 - Oct 2024</span>
                      </div>
                      <p className="text-lg text-muted-foreground mb-4">Internship Studio</p>
                      <ul className="space-y-2 text-sm text-gray-400 list-disc list-inside">
                        <li>Designed and developed responsive websites with modern UI/UX principles.</li>
                        <li>Implemented front-end features using React.js and integrated with backend APIs.</li>
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Education */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={container}
              >
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-primary"></span>
                  Education
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={item} className="group p-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary/30 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                      </div>
                      <span className="text-xs text-muted-foreground bg-black/30 px-2 py-1 rounded">2022 - 2026</span>
                    </div>
                    <h4 className="text-lg font-bold mb-1">IIITDM Jabalpur</h4>
                    <p className="text-sm text-primary mb-2">B.Tech - Electronics & Communication</p>
                    <p className="text-xs text-muted-foreground">Jabalpur, India</p>
                  </motion.div>
                  
                  <motion.div variants={item} className="group p-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary/30 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                      </div>
                      <span className="text-xs text-muted-foreground bg-black/30 px-2 py-1 rounded">2020 - 2022</span>
                    </div>
                    <h4 className="text-lg font-bold mb-1">Kendriya Vidyalaya</h4>
                    <p className="text-sm text-primary mb-2">Higher Secondary (CBSE) PCMB</p>
                    <p className="text-xs text-muted-foreground">Dhule, India</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <style>{`
        @keyframes slide-right {
          0% { left: -50%; }
          100% { left: 100%; }
        }
        .animate-slide-right {
          animation: slide-right 2s infinite linear;
        }
      `}</style>
    </section>
  );
}

import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";

interface Certification {
  name: string;
  issuer: string;
  date: string;
  url?: string;
  skills?: string[];
  type?: "fullstack" | "other";
}

export default function CertificationsSection() {
  const certifications: Certification[] = [
    {
      name: "Web Development",
      issuer: "CodeHelp",
      date: "July 2024",
      url: "https://learn.codehelp.in/share-certificate?serialno=WE7C9DOS", 
      skills: ["HTML", "CSS" , "TailwindCSS", "JavaScript", "React", "Node.js" , "ExpressJs" , "MongoDB"],
      type: "fullstack"
    },
    {
      name: "Certified Cybersecurity Technician",
      issuer: "EC-Council",
      date: "July 2024",
      url: "https://ibb.co/RDgRfQb",
      skills: ["Cybersecurity", "Network Security", "Threat Analysis"],
      type: "other"
    },
    {
      name: "Ethical Hacking Essentials",
      issuer: "EC-Council",
      date: "July 2024",
      url: "https://ibb.co/Qvbnqxx",
      skills: ["Ethical Hacking", "Penetration Testing", "Security Assessment", "Vulnerability Analysis"],
      type: "other"
    },
    {
      name: "Introduction to Generative AI",
      issuer: "Google Cloud",
      date: "January 2024",
      url: "https://drive.google.com/file/d/19zYOVsETP7G7uSuxcefYdabpwCwFQ0nL/view?usp=drive_link", 
      skills: ["Generative AI", "Machine Learning", "AI Ethics"],
      type: "other"
    }
  ];
  
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-black text-white">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black opacity-40 pointer-events-none"></div>
      <div className="absolute -left-20 top-1/3 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col items-center mb-20 text-center">
            <span className="text-primary text-sm font-mono tracking-wider uppercase mb-2">Achievements</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-4">
              <span className="text-white">Certifications</span> <span className="text-primary">&</span> Awards
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
          
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block"></div>

            <div className="space-y-12 md:space-y-0">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center justify-between gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Empty space for the other side */}
                  <div className="hidden md:block w-1/2" />

                  {/* Center Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-black border-2 border-primary z-10 hidden md:flex">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                    <div className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 overflow-hidden">
                         {/* Decoration */}
                         <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-bl-[80px] -mr-8 -mt-8 transition-all duration-500 group-hover:bg-primary/20"></div>
                        
                        <div className="flex justify-between items-start mb-4">
                          <div className="p-2.5 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl text-primary border border-primary/10 group-hover:scale-110 transition-transform duration-300">
                            <Award size={24} />
                          </div>
                          {cert.url && (
                            <a 
                              href={cert.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                            >
                              <ExternalLink size={18} />
                            </a>
                          )}
                        </div>
                        
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{cert.name}</h3>
                        <div className="flex flex-wrap justify-between items-center text-sm text-gray-400 mb-4 gap-2">
                          <span className="font-medium text-white/80 flex items-center gap-2">
                             <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                             {cert.issuer}
                          </span>
                          <span className="flex items-center gap-1.5 bg-white/5 px-2 py-1 rounded text-xs whitespace-nowrap">
                            <Calendar size={12} /> {cert.date}
                          </span>
                        </div>
                        
                        {cert.skills && (
                          <div className="flex flex-wrap gap-2 mt-auto">
                            {cert.skills.slice(0, 4).map((skill) => (
                              <span key={skill} className="text-[10px] px-2 py-0.5 rounded-md bg-black/40 border border-white/5 text-gray-400 group-hover:border-primary/30 group-hover:text-primary/90 transition-colors">
                                {skill}
                              </span>
                            ))}
                            {cert.skills.length > 4 && (
                              <span className="text-[10px] px-2 py-0.5 rounded-md bg-black/40 border border-white/5 text-gray-400">
                                +{cert.skills.length - 4}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

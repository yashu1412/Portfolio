import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Award, Calendar, ExternalLink } from "lucide-react";

interface Certification {
  name: string;
  issuer: string;
  date: string;
  url?: string;
  skills?: string[];
}

export default function CertificationsSection() {
  const certifications: Certification[] = [
    {
      name: "Introduction to Generative AI",
      issuer: "Google Cloud",
      date: "January 2024",
      url: "https://drive.google.com/file/d/19zYOVsETP7G7uSuxcefYdabpwCwFQ0nL/view?usp=drive_link", 
      skills: ["Generative AI", "Machine Learning", "AI Ethics"]
    },
    {
      name: "Website Design and Development Internship",
      issuer: "Internship Studio",
      date: "August 2024",
      url: "https://ibb.co/YTYRcJB", 
      skills: ["Web Development", "UI/UX Design", "HTML/CSS", "JavaScript"]
    },
    {
      name: "Certified Cybersecurity Technician",
      issuer: "EC-Council",
      date: "July 2024",
      url: "https://ibb.co/RDgRfQb",
      skills: ["Cybersecurity", "Network Security", "Threat Analysis"]
    },
    {
      name: "Ethical Hacking Essentials",
      issuer: "EC-Council",
      date: "July 2024",
      url: "https://ibb.co/Qvbnqxx",
      skills: ["Ethical Hacking", "Penetration Testing", "Security Assessment", "Vulnerability Analysis"]
    },
    {
      name: "Web Development",
      issuer: "CodeHelp",
      date: "July 2024",
      url: "https://learn.codehelp.in/share-certificate?serialno=WE7C9DOS", 
      skills: ["HTML", "CSS" , "TailwindCSS", "JavaScript", "React", "Node.js" , "ExpressJs" , "MongoDB"]
    }

  ];
  
  return (
    <section id="certifications" className="py-16 md:py-24 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Certifications</h2>
          
          <div className="grid gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-full text-primary">
                        <Award size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                          <h3 className="text-xl font-semibold">{cert.name}</h3>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar size={14} className="mr-1" />
                            <span>{cert.date}</span>
                          </div>
                        </div>
                        
                        <p className="text-primary font-medium mb-3">{cert.issuer}</p>
                        
                        {cert.skills && (
                          <div className="flex flex-wrap gap-2 mb-3">
                            {cert.skills.map((skill) => (
                              <Badge key={skill} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        )}
                        
                        {cert.url && (
                          <a 
                            href={cert.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm text-primary hover:underline"
                          >
                            View Certificate <ExternalLink size={14} className="ml-1" />
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
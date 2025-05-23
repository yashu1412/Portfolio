
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background/60">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
          
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Yashpal Singh Pawara</h3>
                  <p className="text-lg font-medium text-primary mb-4">Full Stack Developer</p>
                  
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Phone size={16} />
                      <span>+91-9359028987</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail size={16} />
                      <span>yashpalsinghpawara@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Github size={16} />
                      <span>Yashpalsingh-Pawara</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Linkedin size={16} />
                      <span>yashu1412</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>Jabalpur, Madhya Pradesh - 482005, India</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Introduction</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Passionate Full Stack Developer with specialized expertise in JavaScript ecosystems (React, Node.js, Express) and seamless API integration. Adept at architecting high-performance, responsive web applications that prioritize user experience. Seeking challenging opportunities to leverage my technical proficiency in developing scalable solutions that drive business growth while maintaining code quality and optimization standards.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Core Values</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Innovation", "Clean Code", "User Experience", "Performance", "Accessibility"].map((value) => (
                      <Badge key={value} variant="secondary" className="text-sm">
                        {value}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Experience</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium">Internship Studio</h4>
                        <span className="text-sm text-muted-foreground">September 2024 - October 2024</span>
                      </div>
                      <p className="text-primary font-medium">Website Design and Development</p>
                      <p className="text-sm text-muted-foreground">Work from Home</p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-2">
                        <li>Developed a responsive e-commerce website for clients achieving a 40% improvement in user engagement</li>
                        <li>Implemented ReactJS and NodeJS for seamless front-end and back-end integration, enhancing load speed by 25%</li>
                        <li>Conducted usability analysis on site navigation, identifying key areas for UI/UX improvement, resulting in a more intuitive user experience</li>
                        <li>Presented project outcomes and insights at the internship conclusion event, receiving recognition for innovation in design and development</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

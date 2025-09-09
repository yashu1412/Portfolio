
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";

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
                  <h3 className="text-2xl font-bold mb-2">YASHPALSINGH PAWARA</h3>
                  <p className="text-lg font-medium text-primary mb-4">B.Tech - Electronics and Communication Engineering</p>
                  
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
                  <h3 className="text-xl font-semibold mb-3">Education</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium">IIITDM Jabalpur</h4>
                        <span className="text-sm text-muted-foreground">Nov 2022 - Aug 2026 (Expected)</span>
                      </div>
                      <p className="text-primary font-medium">B.Tech - Electronics and Communication Engineering</p>
                      <p className="text-sm text-muted-foreground">Jabalpur, India</p>
                    </div>
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium">Kendriya Vidyalaya Sangathan</h4>
                        <span className="text-sm text-muted-foreground">Aug 2020 - Jul 2022</span>
                      </div>
                      <p className="text-primary font-medium">Higher Secondary Education (CBSE) PCMB</p>
                      <p className="text-sm text-muted-foreground">Dhule, India</p>
                    </div>
                  </div>
                </div>
                

                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Experience</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium">Testbuddy Education Pvt Ltd</h4>
                        <span className="text-sm text-muted-foreground">Jun 2025 - Jul 2025</span>
                      </div>
                      <p className="text-primary font-medium">React.js & Next.js Developer Intern</p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-2">
                        <li>Engineered college prediction tools, interactive tests, blogs, and responsive web pages in React.js v18 & Next.js v14, serving 15K+ active users with optimized cross-device compatibility.</li>
                        <li>Enhanced UI/UX and Enhanced frontend rendering, boosting engagement by 18% and session duration by 25%.</li>
                        <li>Integrated REST APIs and containerized apps with Docker, improving load speed by 25%.</li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium">Internship Studio</h4>
                        <span className="text-sm text-muted-foreground">Sep 2024 - Oct 2024</span>
                      </div>
                      <p className="text-primary font-medium">Website Design and Development Intern</p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-2">
                        <li>Designed and developed responsive websites with modern UI/UX principles</li>
                        <li>Implemented front-end features using React.js and integrated with backend APIs</li>
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

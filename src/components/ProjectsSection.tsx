
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import gsap from 'gsap';

// Project images
import studyNotionImg from "../assets/StudyNotion.png";
import teslaBotImg from "../assets/Tesla.png";
import ecomzyImg from "../assets/Ecomzy.png";
import codeEditorImg from "../assets/CodeEditor.png";
import ShieldVision from "../assets/ShieldVision.png";
import movieStackImg from "../assets/Movistack.png";
import devToolsImg from "../assets/flightBooking.png";


// Animation variants
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

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6 }
  },
  hover: { 
    y: -10,
    transition: { duration: 0.3 }
  }
};

/**
 * Project interface defining the structure of project data
 */
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
  color: string;
  featured?: boolean;
}

/**
 * ProjectsSection component that displays a grid of project cards with animations
 */
export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  
// Projects data
const projects: Project[] = [
  {
    id: 1,
    title: "StudyNotion",
    description:
      "Built a full-stack e-learning platform using the MERN stack, featuring course purchases, progress tracking, reviews, and secure Razorpay payments. Includes instructor and admin tools for course management, with Cloudinary integration for media handling.",
    image: studyNotionImg,
    tech: ["ReactJS", "ExpressJS", "NodeJS", "MongoDB", "Cloudinary", "Razorpay"],
    github: "https://github.com/yashu1412/StudyNotion",
    demo: "https://study-notion-git-main-yashpawaras-projects.vercel.app/",
    color: "#14b8a6",
    featured: true,
  },
  {
    id: 2,
    title: "Tesla Chat Bot",
    description:
      "Engineered a Tesla-inspired web application with React 18, TypeScript, and Node.js featuring role-based access control, secure authentication, and an AI-powered customer service chatbot. Integrated Stripe payments, AWS S3 for storage, and comprehensive monitoring.",
    image: teslaBotImg,
    tech: ["React 18", "TypeScript", "Node.js", "PostgreSQL", "OpenAI GPT", "AWS S3"],
    github: "https://github.com/yashu1412/Tesla-clone-with-AIChat-Assistant",
    demo: "https://tesla-clone-with-ai-chat-assistant-nu.vercel.app/",
    color: "#8a5cf6",
  },
  {
    id: 3,
    title: "ShieldVision",
    description:
      "Developed an AI-powered real-time surveillance dashboard for monitoring RTSP camera streams with object detection using YOLOv8 and OpenCV. Implemented Flask microservices for frame processing, Node.js APIs for secure data handling, and a React.js frontend for live analytics.",
    image: ShieldVision,
    tech: ["React.js", "Node.js", "Flask", "MongoDB", "OpenCV", "YOLOv8", "Docker"],
    github: "https://github.com/yashu1412/ShieldVision",
    demo: "https://shield-vision.vercel.app/",
    color: "#0ea5e9",
    featured: true,
  },
  {
    id: 4,
    title: "Flight Booking System",
    description:
      "Built a full-stack flight booking system with real-time search, filtering, and booking workflows. Implemented JWT-based authentication, wallet-based payments, dynamic surge pricing, and auto-generated PDF e-tickets with unique PNR codes.",
    image: flightBookingImg, 
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "JWT", "PDFKit"],
    github: "https://github.com/yashu1412/Flight-Booking",
    demo: "https://flight-booking-5naa.vercel.app/",
    color: "#22c55e",
  },
  {
    id: 5,
    title: "Ecomzy",
    description:
      "Developed a secure e-commerce platform with a shopping cart system, dynamic search and filtering, and automated email notifications. Features responsive design and seamless cross-device experience using ReactJS and TailwindCSS.",
    image: ecomzyImg,
    tech: ["ReactJS", "TailwindCSS"],
    github: "https://github.com/yashu1412/Ecomzy",
    demo: "https://ecomzy-ten.vercel.app/",
    color: "#64748b",
  },
  {
    id: 6,
    title: "CodeEditor",
    description:
      "Developed an interactive web-based code editor with real-time coding, syntax highlighting, and auto-completion features. Built with ReactJS and Vite, featuring responsive design and immediate error feedback.",
    image: codeEditorImg,
    tech: ["ReactJS", "Vite", "TailwindCSS", "Chakra UI"],
    github: "https://github.com/yashu1412/CodeEditor",
    demo: "https://yashpcodeditor.netlify.app/",
    color: "#eab308",
  },
];

  /**
   * GSAP animations for stagger effect on project cards
   */
  useEffect(() => {
    if (!projectsRef.current) return;
    
    const cards = projectsRef.current.querySelectorAll('.project-card');
    
    gsap.fromTo(cards, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 70%",
        }
      }
    );
  }, []);

  /**
   * Renders technology tags for a project
   * @param project - The project to render tags for
   * @returns JSX elements for the tech tags
   */
  const renderTechTags = (project: Project) => {
    return (
      <>
        {project.tech.slice(0, 3).map((tech, i) => (
          <span 
            key={i} 
            className="text-xs py-1 px-2 rounded-full bg-muted text-foreground/80"
            style={{ 
              backgroundColor: `${project.color}20`,
              color: project.color 
            }}
          >
            {tech}
          </span>
        ))}
        {project.tech.length > 3 && (
          <span className="text-xs py-1 px-2 rounded-full bg-muted/50 text-foreground/60">
            +{project.tech.length - 3}
          </span>
        )}
      </>
    );
  };

  return (
    <section id="projects" className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(138,92,246,0.15),rgba(255,255,255,0))] z-0"></div>
      
      <motion.div
        className="container mx-auto px-4"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
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
            <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-foreground/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Explore a collection of interactive web experiences built with modern technologies and creative animations.
          </motion.p>
        </div>
        
        {/* Project cards */}
        <div 
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card group"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.1 }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <Card className="h-full overflow-hidden border border-border bg-card/50 backdrop-blur-sm card-hover transition-all">
                {/* Project image with overlay */}
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-70 z-10"
                  />
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-40 z-10"
                  />
                  <div 
                    className={`absolute inset-0 opacity-30 z-0 transition-opacity duration-300 group-hover:opacity-50`}
                    style={{ backgroundColor: project.color }}
                  />
                  
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  
                  {project.featured && (
                    <div className="absolute top-2 right-2 py-1 px-3 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full z-20">
                      Featured
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-5 space-y-4">
                  <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
                  
                  <p className="text-sm text-foreground/70 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {renderTechTags(project)}
                  </div>
                  
                  {/* Links */}
                  <div className="flex justify-between pt-2">
                    <div className="flex space-x-3">
                      {project.github && (
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/70 hover:text-foreground transition-colors"
                          aria-label="GitHub repository"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.demo && (
                        <a 
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/70 hover:text-foreground transition-colors"
                          aria-label="Live demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                    
                    <motion.div 
                      className="absolute bottom-5 right-5 w-2 h-2 rounded-full bg-primary"
                      animate={{
                        scale: activeIndex === index ? [1, 1.5, 1] : 1,
                        opacity: activeIndex === index ? [0.5, 1, 0.5] : 0.5
                      }}
                      transition={{
                        duration: 2,
                        repeat: activeIndex === index ? Infinity : 0,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View all projects button */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a 
            href="https://github.com/yashu1412?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className="btn-glow h-12 px-6 py-2">
              View All Projects
            </button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}




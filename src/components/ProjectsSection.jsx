import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Categorizer",
description: "A full-stack MERN application that categorizes YouTube and Instagram content using AI, allowing users to organize, search, and filter saved posts efficiently.",
tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
features: [
  "User Authentication & Authorization",
  "AI-Based Content Categorization",
  "Save & Manage Social Media Links",
  "Search & Filter by Categories",
  "Responsive UI for All Devices"
           ],
    github: "https://github.com/SandeepSinghChouhan587/categorizer.git",
    live: "https://categorizerx.netlify.app/",
  },
  {
    title: "Shree Status Quotes ",
    description: "A responsive MERN stack web application for discovering and sharing motivational and social media status quotes.",
    tech: ["Reactjs","Node.js", "Express", "MongoDB","Tailwind CSS","AWS"],
    features: ["Admin Authentication", "Image Upload & Boards", "Responsive Grid Layout"],
    github: "https://github.com/SandeepSinghChouhan587/shreestatusquotesfrontend.git",
    live: "https://shreestatusquotes.vercel.app/",
  },
  {
    title: "Online Grocery Application",
    description: "Full-stack e-commerce web application for ordering grocery items online",
    tech: ["React.js", "Tailwind CSS", "REST API", "React Router","Expressjs","Node.js","AWS"],
    features: ["Live API Integration", "Cart Management", "Search & Filters"],
    github: "https://github.com/SandeepSinghChouhan587/Online-Grocery-Application.git",
    
  },
  {
    title: "Chandani AI Chatbot",
    description: "An AI-powered chatbot web application that responds to user queries using the Groq AI API.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "AI API"],
    features: ["AI-Powered Chatbot", "Groq AI API Integration", "Real-time Chat Interface","Responsive UI"],
    github: "https://github.com/SandeepSinghChouhan587/chandniaifrontend.git",
    live: "https://chandani-ai-frontend.vercel.app/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">What I've Built</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-xl overflow-hidden hover-lift group"
            >
              <div className="h-1 w-full" style={{ background: "var(--gradient-primary)" }} />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.map((f) => (
                      <li key={f} className="text-muted-foreground text-xs flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-[10px] font-mono rounded-md bg-primary/10 text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={project.github} className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                    <Github size={14} /> GitHub
                  </a>
                  {
                    project.live ?(<a href={project.live} className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={14} /> Live Demo
                  </a>) : ""
                  }
                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

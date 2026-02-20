import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profileImg from "@/assets/profile-placeholder.jpg";

const roles = ["Full Stack Developer", "MERN Stack Developer", "React Enthusiast", "Problem Solver"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentRole.substring(0, text.length + 1));
          if (text.length + 1 === currentRole.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setText(currentRole.substring(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center section-padding pt-24"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Decorative blurs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-mono text-sm mb-3">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
            Sandeep Singh
            <br />
            <span className="gradient-text">Chouhan</span>
          </h1>
          <div className="h-8 mb-6">
            <span className="text-lg md:text-xl text-muted-foreground font-mono">
              {text}
              <span className="animate-pulse text-primary">|</span>
            </span>
          </div>
          <p className="text-muted-foreground max-w-md mb-8 leading-relaxed">
            Aspiring Full Stack Developer passionate about building high-performance,
            scalable web applications with modern technologies.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition-colors"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:sandeep@example.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden gradient-border animate-pulse-glow">
              <img
                src={profileImg}
                alt="Sandeep Singh Chouhan"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-xl glass-card flex items-center justify-center animate-float">
              <span className="text-2xl font-bold gradient-text">{"</>"}</span>
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default HeroSection;

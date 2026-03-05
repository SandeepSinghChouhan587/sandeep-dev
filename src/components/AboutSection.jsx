import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, GraduationCap, MapPin, Target } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    { icon: GraduationCap, title: "Education", text: "B.Tech in Computer Science (Expected 2026)" },
    { icon: MapPin, title: "Location", text: "Indore, India" },
    { icon: Code2, title: "Focus", text: "MERN Stack Development" },
    { icon: Target, title: "Goal", text: "Build scalable web applications" },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">Get to Know Me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a passionate Computer Science student with a deep interest in Full Stack Web Development.
              I love building things from scratch and turning ideas into clean, efficient, and user-friendly applications.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              My journey in tech started with curiosity about how websites work, and it quickly turned into a 
              passion for the MERN stack. I enjoy solving complex problems and learning new technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My career objective is to leverage modern web technologies to build high-performance, secure, 
              and scalable applications that deliver exceptional user experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {cards.map((card, i) => (
              <div
                key={card.title}
                className="glass-card rounded-xl p-5 hover-lift"
              >
                <card.icon className="text-primary mb-3" size={24} />
                <h3 className="font-semibold text-foreground text-sm mb-1">{card.title}</h3>
                <p className="text-muted-foreground text-xs">{card.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download } from "lucide-react";

const ResumeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="section-padding">
      <div className="container mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-2">My Resume</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Want to Know <span className="gradient-text">More?</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Download my resume to see my complete experience, education, and skills.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-lg"
          >
            <Download size={20} />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;

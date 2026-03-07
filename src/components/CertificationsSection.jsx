import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

const certs = [
  { title: "JavaScript Certification", issuer: "Udemy online Certification", icon: "" },
  { title: "React.js Certification", issuer: "Udemy online Certification", icon: "" },
  { title: "Python Certification", issuer: "Udemy online Certification", icon: "" },
  { title: "Foundation of Cloud IoT Edge ML", issuer: "NPTEL Online Certification, IIT Kanpur   (Silver medal) ", icon: "" },
  { title: "Practical Cyber Security for Cyber Security Practitioners , ", issuer: "NPTEL Online Certification, IIT Kanpur (Gold medal)", icon: "" },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="section-padding bg-secondary/30">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">Achievements</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            My <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-xl p-6 text-center hover-lift"
            >
              <span className="text-4xl mb-4 block">{cert.icon}</span>
              <Award className="mx-auto text-primary mb-3" size={24} />
              <h3 className="font-semibold text-foreground mb-1">{cert.title}</h3>
              <p className="text-muted-foreground text-sm">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;

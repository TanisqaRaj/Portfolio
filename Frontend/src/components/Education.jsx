import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { education } from "../data/portfolioData";
import AnimatedCharacter from "./AnimatedCharacter";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Playful graduation cap illustration
  const GraduationCapIllustration = () => (
    <motion.svg
      viewBox="0 0 100 100"
      className="w-16 h-16 md:w-20 md:h-20"
      animate={{
        y: [0, -5, 0],
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Cap base */}
      <motion.polygon
        points="50,30 20,40 50,50 80,40"
        fill="#FFD700"
        stroke="#FF8C00"
        strokeWidth="2"
      />
      {/* Cap top */}
      <motion.rect x="35" y="20" width="30" height="10" rx="2" fill="#FF8C00" />
      {/* Tassel */}
      <motion.g
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ transformOrigin: "50px 30px" }}
      >
        <line
          x1="50"
          y1="30"
          x2="50"
          y2="45"
          stroke="#4169E1"
          strokeWidth="2"
        />
        <circle cx="50" cy="48" r="4" fill="#4169E1" />
      </motion.g>
      {/* Book */}
      <rect x="35" y="55" width="30" height="20" rx="2" fill="#9370DB" />
      <line x1="35" y1="65" x2="65" y2="65" stroke="#FFD700" strokeWidth="1" />
      <line x1="50" y1="55" x2="50" y2="75" stroke="#FFD700" strokeWidth="1" />
    </motion.svg>
  );

  return (
    <section id="education" className="relative py-16 md:py-20" ref={ref}>
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div
          className="absolute top-10 right-10 w-40 h-40 bg-primary-blue/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="section-container relative z-10">
        {/* Section Title with Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <GraduationCapIllustration />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient">
              Education 🎓
            </h2>
            <GraduationCapIllustration />
          </div>
          <div className="w-24 h-2 bg-gradient-to-r from-primary-blue to-cartoon-purple rounded-full mx-auto"></div>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-8 last:mb-0"
            >
              {/* Timeline connector */}
              {index < education.length - 1 && (
                <div className="absolute left-1/2 top-full h-8 w-0.5 bg-gradient-to-b from-primary-blue to-cartoon-purple transform -translate-x-1/2 hidden md:block" />
              )}

              {/* Education Card */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="card group relative overflow-hidden"
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-yellow/20 to-primary-orange/20 rounded-bl-full" />

                <div className="relative">
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className="absolute -left-8 top-6 w-4 h-4 bg-gradient-to-r from-primary-blue to-cartoon-purple rounded-full border-4 border-white shadow-lg hidden md:block"
                  />

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-neutral-dark mb-2 group-hover:text-gradient transition-all">
                        {edu.degree}
                      </h3>
                      <p className="text-lg md:text-xl font-semibold text-primary-orange mb-1">
                        {edu.university}
                      </p>
                      <p className="text-neutral-dark/70">📍 {edu.location}</p>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-2">
                      <span className="px-4 py-2 bg-gradient-to-r from-primary-blue to-cartoon-purple text-white font-semibold rounded-full text-sm">
                        {edu.duration}
                      </span>
                      {edu.cgpa && (
                        <motion.span
                          whileHover={{ scale: 1.1 }}
                          className="px-4 py-2 bg-gradient-to-r from-primary-yellow to-primary-orange text-white font-bold rounded-full text-sm shadow-lg"
                        >
                          CGPA: {edu.cgpa}
                        </motion.span>
                      )}
                    </div>
                  </div>

                  {edu.description && (
                    <p className="text-neutral-dark/80 leading-relaxed">
                      {edu.description}
                    </p>
                  )}

                  {/* Decorative bottom line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="h-1 bg-gradient-to-r from-primary-blue via-cartoon-purple to-primary-orange rounded-full mt-4"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

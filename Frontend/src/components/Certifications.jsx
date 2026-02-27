import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaExternalLinkAlt, FaCertificate } from "react-icons/fa";
import { certifications } from "../data/portfolioData";

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Playful certificate illustration
  const CertificateIllustration = () => (
    <motion.svg
      viewBox="0 0 100 100"
      className="w-16 h-16 md:w-20 md:h-20"
      animate={{
        rotate: [-3, 3, -3],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Certificate paper */}
      <motion.rect
        x="15"
        y="20"
        width="70"
        height="60"
        rx="3"
        fill="#FFF8DC"
        stroke="#FFD700"
        strokeWidth="3"
      />
      {/* Decorative border */}
      <rect
        x="20"
        y="25"
        width="60"
        height="50"
        rx="2"
        fill="none"
        stroke="#FF8C00"
        strokeWidth="1"
        strokeDasharray="2,2"
      />
      {/* Ribbon */}
      <motion.g
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <circle cx="50" cy="50" r="12" fill="#4169E1" />
        <polygon points="50,62 45,75 50,72 55,75" fill="#4169E1" />
        <text x="50" y="55" fontSize="16" fill="white" textAnchor="middle">
          ✓
        </text>
      </motion.g>
      {/* Text lines */}
      <line x1="25" y1="35" x2="75" y2="35" stroke="#FF8C00" strokeWidth="2" />
      <line x1="30" y1="42" x2="70" y2="42" stroke="#FFD700" strokeWidth="1" />
      <line x1="30" y1="48" x2="70" y2="48" stroke="#FFD700" strokeWidth="1" />
      {/* Stars */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "50px 50px" }}
      >
        <text x="8" y="25" fontSize="10">
          ⭐
        </text>
        <text x="85" y="25" fontSize="10">
          ✨
        </text>
        <text x="8" y="75" fontSize="10">
          🌟
        </text>
        <text x="85" y="75" fontSize="10">
          💫
        </text>
      </motion.g>
    </motion.svg>
  );

  return (
    <section id="certifications" className="relative py-12 md:py-20" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div
          className="absolute top-20 right-20 w-40 h-40 bg-primary-yellow/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 9,
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
            <CertificateIllustration />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient">
              Certifications 🏆
            </h2>
            <CertificateIllustration />
          </div>
          <div className="w-24 h-2 bg-gradient-to-r from-primary-yellow to-primary-orange rounded-full mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-neutral-dark/70 max-w-2xl mx-auto">
            Continuous learning and professional development 📚
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="card group relative overflow-hidden"
            >
              {/* Decorative corner ribbon */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[60px] border-r-[60px] border-t-primary-yellow border-r-transparent opacity-20" />

              {/* Certificate icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:shadow-2xl transition-shadow`}
              >
                <FaCertificate className="text-white text-3xl" />
              </motion.div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-display font-bold text-neutral-dark group-hover:text-gradient transition-all">
                  {cert.name}
                </h3>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-primary-orange font-semibold">
                    {cert.organization}
                  </span>
                  <span className="text-neutral-dark/50">•</span>
                  <span
                    className={`px-3 py-1 bg-gradient-to-r ${cert.color} text-white font-semibold rounded-full text-sm`}
                  >
                    {cert.year}
                  </span>
                </div>

                {cert.description && (
                  <p className="text-neutral-dark/70 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                )}
              </div>

              {/* Decorative bottom accent */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${cert.color} rounded-full`}
              />

              {/* Hover effect overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-primary-yellow/5 to-primary-orange/5 pointer-events-none"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCheckCircle, FaBriefcase } from 'react-icons/fa';
import { internships } from '../data/portfolioData';

const Internship = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Playful briefcase illustration
  const BriefcaseIllustration = () => (
    <motion.svg
      viewBox="0 0 100 100"
      className="w-16 h-16 md:w-20 md:h-20"
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* Briefcase body */}
      <motion.rect
        x="20"
        y="40"
        width="60"
        height="40"
        rx="4"
        fill="#FF8C00"
        stroke="#FF4500"
        strokeWidth="2"
      />
      {/* Briefcase handle */}
      <motion.path
        d="M 35 40 Q 35 30 50 30 Q 65 30 65 40"
        fill="none"
        stroke="#FF4500"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Lock */}
      <circle cx="50" cy="60" r="4" fill="#FFD700" />
      <rect x="48" y="60" width="4" height="8" fill="#FFD700" />
      {/* Decorative lines */}
      <line x1="30" y1="50" x2="70" y2="50" stroke="#FFD700" strokeWidth="1" />
      <line x1="30" y1="70" x2="70" y2="70" stroke="#FFD700" strokeWidth="1" />
      {/* Stars around */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "50px 50px" }}
      >
        <text x="10" y="35" fontSize="12">⭐</text>
        <text x="80" y="35" fontSize="12">✨</text>
      </motion.g>
    </motion.svg>
  );

  return (
    <section id="internship" className="relative py-16 md:py-20" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div
          className="absolute bottom-10 left-10 w-40 h-40 bg-primary-orange/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
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
            <BriefcaseIllustration />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient">
              Internships 💼
            </h2>
            <BriefcaseIllustration />
          </div>
          <div className="w-24 h-2 bg-gradient-to-r from-primary-orange to-primary-red rounded-full mx-auto mb-6"></div>
        </motion.div>

        {/* Internships Grid */}
        <div className="max-w-5xl mx-auto space-y-8">
          {internships.map((internship, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="card group relative overflow-hidden"
            >
              {/* Decorative gradient bar */}
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${internship.color}`} />

              <div className="pt-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`w-12 h-12 bg-gradient-to-r ${internship.color} rounded-full flex items-center justify-center shadow-lg`}
                      >
                        <FaBriefcase className="text-white text-xl" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-neutral-dark group-hover:text-gradient transition-all">
                          {internship.role}
                        </h3>
                        <p className="text-lg font-semibold text-primary-orange">
                          {internship.company}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className={`px-4 py-2 bg-gradient-to-r ${internship.color} text-white font-semibold rounded-full text-sm text-center shadow-lg`}>
                      {internship.duration}
                    </span>
                    <span className="px-4 py-2 bg-neutral-dark/10 text-neutral-dark font-medium rounded-full text-sm text-center">
                      📍 {internship.location}
                    </span>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-lg font-display font-bold text-neutral-dark mb-3 flex items-center gap-2">
                    <span className="text-2xl">📋</span>
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {internship.responsibilities.map((responsibility, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + idx * 0.1 }}
                        className="flex items-start gap-3 text-neutral-dark/80"
                      >
                        <FaCheckCircle className={`text-primary-orange mt-1 flex-shrink-0`} />
                        <span>{responsibility}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-display font-bold text-neutral-dark mb-3 flex items-center gap-2">
                    <span className="text-2xl">🛠️</span>
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {internship.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.2 + idx * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`px-4 py-2 bg-gradient-to-r ${internship.color} text-white font-medium rounded-full text-sm shadow-md`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Decorative bottom accent */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className={`h-1 bg-gradient-to-r ${internship.color} rounded-full mt-6`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internship;

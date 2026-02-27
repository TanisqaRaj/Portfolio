import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { personalInfo } from '../data/portfolioData';
import AnimatedCharacter from './AnimatedCharacter';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-8 md:py-12" ref={ref}>
      {/* Animated Character */}
      <AnimatedCharacter type="wave" position="left" />
      
      {/* Subtle animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-primary-yellow/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-primary-orange/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="section-container relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient mb-4">
            About Me 🎯
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-primary-orange to-primary-red rounded-full mx-auto"></div>
        </motion.div>

        {/* Main Content - Single Column Layout */}
        <div className="max-w-5xl mx-auto">
          {/* Introduction Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card mb-8"
          >
            <div className="flex items-start gap-6">
              {/* Avatar/Icon */}
              <motion.div
                className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary-yellow via-primary-orange to-primary-red rounded-full flex items-center justify-center text-4xl md:text-5xl shadow-lg"
                whileHover={{ scale: 1.05, rotate: 5 }}
                animate={{
                  boxShadow: [
                    "0 10px 30px rgba(255, 140, 0, 0.3)",
                    "0 10px 40px rgba(255, 69, 0, 0.4)",
                    "0 10px 30px rgba(255, 140, 0, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                👨‍💻
              </motion.div>

              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-neutral-dark mb-4">
                  Let me introduce myself! 👋
                </h3>
                
                <div className="space-y-4 text-base md:text-lg text-neutral-dark/80 leading-relaxed">
                  {personalInfo.bio.split('\n\n').map((paragraph, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            {[
              { emoji: '🎓', label: 'Always Learning', color: 'from-primary-blue to-cartoon-purple' },
              { emoji: '💪', label: 'Problem Solver', color: 'from-primary-orange to-primary-red' },
              { emoji: '🎯', label: 'Goal Oriented', color: 'from-primary-yellow to-primary-orange' },
              { emoji: '🤝', label: 'Team Player', color: 'from-cartoon-purple to-primary-red' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card text-center group cursor-pointer"
              >
                <motion.div
                  className="text-4xl md:text-5xl mb-3"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {item.emoji}
                </motion.div>
                <p className="font-semibold text-sm md:text-base text-neutral-dark group-hover:text-gradient transition-all">
                  {item.label}
                </p>
                <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${item.color} rounded-full mx-auto mt-2 transition-all duration-300`}></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Resume Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <motion.a
              href="/resume.pdf"
              download="Tanisqa_Raj_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-orange to-primary-red text-white font-bold text-lg rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 69, 0, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl group-hover:animate-bounce">📄</span>
              <span>Download Resume</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="text-sm text-neutral-dark/60 mt-4"
            >
              Click to download or view in new tab
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

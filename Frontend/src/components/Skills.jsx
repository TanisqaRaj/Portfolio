import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '../data/portfolioData';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-8 md:py-12" ref={ref}>
      <div className="section-container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient mb-4">
            My Skills 💪
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-primary-blue to-cartoon-purple rounded-full mx-auto"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -10 }}
              className="card group"
            >
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${skillCategory.color} p-4 rounded-2xl mb-4 transform group-hover:scale-105 transition-transform`}>
                <div className="text-center">
                  <div className="text-5xl mb-2">{skillCategory.icon}</div>
                  <h3 className="text-xl font-display font-bold text-white">
                    {skillCategory.category}
                  </h3>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-2">
                {skillCategory.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="flex items-center space-x-2"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skillCategory.color}`}></div>
                    <span className="text-neutral-dark font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fun Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '4+', label: 'Projects Completed', emoji: '🎯' },
            { number: '50+', label: 'DSA Questions', emoji: '☕' },
            { number: '1000+', label: 'Lines of Code', emoji: '💻' },
            { number: '24/7', label: 'Learning Mode', emoji: '🚀' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="card text-center"
            >
              <div className="text-4xl mb-2">{stat.emoji}</div>
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <p className="text-sm md:text-base text-neutral-dark/70 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/portfolioData';
import AnimatedCharacter from './AnimatedCharacter';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-8 md:py-12" ref={ref}>
      {/* Animated Character */}
      <AnimatedCharacter type="jump" position="left" />
      <div className="section-container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient mb-4">
            My Projects 🚀
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-primary-yellow to-primary-orange rounded-full mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-neutral-dark/70 max-w-2xl mx-auto">
            Check out some of my recent work. Each project is a unique piece of development! 🎨
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="card group overflow-hidden"
            >
              {/* Project Icon/Image */}
              <div className={`bg-gradient-to-br ${project.color} rounded-2xl p-8 mb-6 flex items-center justify-center transform group-hover:scale-105 transition-transform`}>
                <div className="text-8xl">{project.image}</div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-neutral-dark group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                
                <p className="text-neutral-dark/70 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white text-sm font-medium rounded-full`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-neutral-dark text-white rounded-full font-medium hover:bg-neutral-dark/80 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub /> Code
                  </motion.a>
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-full font-medium hover:shadow-lg transition-shadow`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

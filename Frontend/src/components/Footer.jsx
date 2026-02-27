import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaEnvelope, FaPhone, FaMapMarkerAlt, FaRocket, FaCode } from 'react-icons/fa';
import { socialLinks, personalInfo } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Internship', href: '#internship' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const contactInfo = [
    { icon: FaEnvelope, text: personalInfo.email, link: `mailto:${personalInfo.email}` },
    { icon: FaPhone, text: personalInfo.phone, link: `tel:${personalInfo.phone}` },
    { icon: FaMapMarkerAlt, text: personalInfo.location, link: null },
  ];

  return (
    <footer className="relative mt-20 bg-gradient-to-br from-neutral-dark via-neutral-dark to-neutral-dark/95 text-white">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <motion.div
          className="absolute top-10 left-10 w-40 h-40 bg-primary-orange rounded-full blur-3xl"
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
          className="absolute bottom-10 right-10 w-40 h-40 bg-primary-blue rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="section-container relative z-10 py-12 md:py-16">

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <FaCode className="text-2xl text-primary-orange" />
              <h4 className="text-xl font-display font-bold">About</h4>
            </div>
            <p className="text-white/70 leading-relaxed mb-4">
              Full Stack Developer passionate about creating beautiful, functional, and user-friendly web applications.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <FaRocket className="text-2xl text-primary-blue" />
              <h4 className="text-xl font-display font-bold">Quick Links</h4>
            </div>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <motion.a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-white/70 hover:text-primary-orange transition-colors flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <FaEnvelope className="text-2xl text-primary-yellow" />
              <h4 className="text-xl font-display font-bold">Get In Touch</h4>
            </div>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  {info.link ? (
                    <motion.a
                      href={info.link}
                      className="flex items-center gap-3 text-white/70 hover:text-primary-orange transition-colors group"
                      whileHover={{ x: 5 }}
                    >
                      <info.icon className="text-primary-orange group-hover:text-primary-yellow transition-colors" />
                      <span className="text-sm">{info.text}</span>
                    </motion.a>
                  ) : (
                    <div className="flex items-center gap-3 text-white/70">
                      <info.icon className="text-primary-orange" />
                      <span className="text-sm">{info.text}</span>
                    </div>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <FaHeart className="text-2xl text-primary-red" />
              <h4 className="text-xl font-display font-bold">Connect</h4>
            </div>
            <p className="text-white/70 mb-4 text-sm">
              Let's connect and create something amazing together!
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: FaGithub, link: socialLinks.github, color: 'hover:bg-gray-700', label: 'GitHub' },
                { icon: FaLinkedin, link: socialLinks.linkedin, color: 'hover:bg-blue-600', label: 'LinkedIn' },
                { icon: FaTwitter, link: socialLinks.twitter, color: 'hover:bg-blue-400', label: 'Twitter' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center ${social.color} transition-all duration-300 group relative`}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <social.icon className="text-xl" />
                  {/* Tooltip */}
                  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white text-neutral-dark px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Newsletter or CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-6"
            >
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-orange to-primary-red text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope />
                <span>Say Hello!</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="h-1 bg-gradient-to-r from-primary-yellow via-primary-orange to-primary-red rounded-full mb-8"
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-sm text-center md:text-left"
          >
            © {currentYear} <span className="text-primary-orange font-semibold">{personalInfo.name}</span>. All rights reserved.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/60 text-sm flex items-center gap-2"
          >
            Crafted with <FaHeart className="text-primary-red animate-pulse" /> and lots of ☕
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white/60 text-sm flex items-center gap-2"
          >
            <FaCode className="text-primary-yellow" />
            <span>Built with React & Tailwind CSS</span>
          </motion.p>
        </div>
      </div>

      {/* Scroll to Top Button - Fixed positioning */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-gradient-to-r from-primary-orange to-primary-red rounded-full flex items-center justify-center text-white text-2xl shadow-2xl group z-20"
        whileHover={{ scale: 1.15, y: -5 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <motion.span
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ⬆️
        </motion.span>
        {/* Tooltip */}
        <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white text-neutral-dark px-4 py-2 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          Back to Top
        </span>
      </motion.button>

      {/* Decorative wave at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-yellow via-primary-orange via-primary-red to-primary-blue" />
    </footer>
  );
};

export default Footer;

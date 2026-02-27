import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import AnimatedCharacter from './AnimatedCharacter';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // API URL - change this based on your environment
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});
    
    try {
      // Send to custom backend API
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle validation errors from backend
        if (data.errors) {
          const backendErrors = {};
          data.errors.forEach(error => {
            backendErrors[error.field] = error.message;
          });
          setErrors(backendErrors);
        } else {
          throw new Error(data.message || 'Failed to send message');
        }
        return;
      }

      // Success!
      console.log('✅ Message sent successfully:', data);
      setShowSuccess(true);
      
      // Clear form
      setFormData({ name: '', email: '', message: '' });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
      
    } catch (error) {
      console.error('❌ Error submitting form:', error);
      setErrors({ 
        submit: error.message || 'Failed to send message. Please try again or email me directly.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { 
      icon: FaEnvelope, 
      label: 'Email', 
      value: personalInfo.email, 
      color: 'from-primary-red to-primary-orange',
      link: `mailto:${personalInfo.email}`
    },
    { 
      icon: FaPhone, 
      label: 'Phone', 
      value: personalInfo.phone, 
      color: 'from-primary-blue to-cartoon-purple',
      link: `tel:${personalInfo.phone}`
    },
    { 
      icon: FaMapMarkerAlt, 
      label: 'Location', 
      value: personalInfo.location, 
      color: 'from-primary-yellow to-primary-orange',
      link: null
    },
  ];

  return (
    <section id="contact" className="relative py-8 md:py-12 pb-16 md:pb-20" ref={ref}>
      {/* Animated Character */}
      <AnimatedCharacter type="point" position="right" />
      
      <div className="section-container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient mb-4">
            Get In Touch 📬
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-primary-orange to-primary-red rounded-full mx-auto mb-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold text-neutral-dark mb-6">
              Let's Connect! 🤝
            </h3>

            {/* Email Display - Prominent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="card bg-gradient-to-r from-primary-orange/10 to-primary-red/10 border-2 border-primary-orange/20"
            >
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-r from-primary-orange to-primary-red p-4 rounded-2xl">
                  <FaEnvelope className="text-2xl text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-neutral-dark/60 font-medium mb-1">Email Me At</p>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-lg md:text-xl font-bold text-neutral-dark hover:text-gradient transition-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Other Contact Info */}
            {contactInfo.slice(1).map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="card cursor-pointer"
                onClick={() => info.link && window.open(info.link, '_blank')}
              >
                <div className="flex items-center gap-4">
                  <div className={`bg-gradient-to-r ${info.color} p-4 rounded-2xl`}>
                    <info.icon className="text-2xl text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-dark/60 font-medium">{info.label}</p>
                    <p className="text-lg font-semibold text-neutral-dark">{info.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="card space-y-5">
              <h3 className="text-2xl font-display font-bold text-neutral-dark mb-2">
                Send Me a Message 💌
              </h3>

              {/* Success Message */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-green-100 border-2 border-green-500 text-green-700 px-4 py-3 rounded-2xl flex items-center gap-3"
                  >
                    <FaCheckCircle className="text-2xl" />
                    <div>
                      <p className="font-bold">Message Sent Successfully! 🎉</p>
                      <p className="text-sm">I'll get back to you soon!</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* General Error Message */}
              {errors.submit && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-100 border-2 border-red-500 text-red-700 px-4 py-3 rounded-2xl"
                >
                  <p className="font-semibold">{errors.submit}</p>
                </motion.div>
              )}

              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-neutral-dark mb-2">
                  Your Name <span className="text-primary-red">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-2xl border-2 ${
                    errors.name ? 'border-red-500' : 'border-neutral-dark/10'
                  } focus:border-primary-orange focus:outline-none transition-colors`}
                  placeholder="your name"
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-neutral-dark mb-2">
                  Your Email <span className="text-primary-red">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-2xl border-2 ${
                    errors.email ? 'border-red-500' : 'border-neutral-dark/10'
                  } focus:border-primary-orange focus:outline-none transition-colors`}
                  placeholder="mail@example.com"
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-neutral-dark mb-2">
                  Your Message <span className="text-primary-red">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-3 rounded-2xl border-2 ${
                    errors.message ? 'border-red-500' : 'border-neutral-dark/10'
                  } focus:border-primary-orange focus:outline-none transition-colors resize-none`}
                />
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-primary flex items-center justify-center gap-2 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              <p className="text-xs text-neutral-dark/60 text-center">
                All fields are required. Your information is safe with me. 🔒
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

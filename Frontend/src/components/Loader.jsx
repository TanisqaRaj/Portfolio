import { motion } from 'framer-motion';

// Playful animated loader component
const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary-yellow via-primary-orange to-primary-red"
    >
      <div className="text-center">
        {/* Bouncing circles animation */}
        <div className="flex space-x-3 mb-8">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-6 h-6 bg-white rounded-full"
              animate={{
                y: [0, -30, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          ))}
        </div>
        
        {/* Loading text */}
        <motion.h2
          className="text-3xl md:text-4xl font-display font-bold text-white"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          Loading Dhamaal... 🚀
        </motion.h2>
      </div>
    </motion.div>
  );
};

export default Loader;

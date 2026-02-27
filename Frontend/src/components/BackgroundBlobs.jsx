import { motion } from 'framer-motion';

// Animated background blobs for visual interest
const BackgroundBlobs = () => {
  const blobs = [
    { color: 'bg-primary-yellow/20', size: 'w-72 h-72', position: 'top-20 -left-20', duration: 20 },
    { color: 'bg-primary-orange/20', size: 'w-96 h-96', position: 'top-1/3 -right-32', duration: 25 },
    { color: 'bg-primary-blue/20', size: 'w-80 h-80', position: 'bottom-20 left-1/4', duration: 30 },
    { color: 'bg-cartoon-purple/20', size: 'w-64 h-64', position: 'bottom-1/4 right-1/4', duration: 22 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className={`absolute ${blob.color} ${blob.size} ${blob.position} rounded-blob blur-3xl`}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundBlobs;

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// Animated cartoon character component inspired by Motu Patlu style
// Creates playful SVG characters that react to scroll events
const AnimatedCharacter = ({ type = 'wave', position = 'left' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Character animation variants based on type
  const characterVariants = {
    wave: {
      initial: { x: position === 'left' ? -100 : 100, opacity: 0, rotate: -10 },
      animate: { 
        x: 0, 
        opacity: 1, 
        rotate: 0,
        transition: { 
          type: "spring", 
          stiffness: 100, 
          damping: 15,
          duration: 0.8 
        }
      }
    },
    jump: {
      initial: { y: 100, opacity: 0, scale: 0.5 },
      animate: { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        transition: { 
          type: "spring", 
          stiffness: 200, 
          damping: 10 
        }
      }
    },
    point: {
      initial: { x: position === 'left' ? -80 : 80, opacity: 0, scale: 0.8 },
      animate: { 
        x: 0, 
        opacity: 1, 
        scale: 1,
        transition: { 
          type: "spring", 
          stiffness: 120, 
          damping: 12 
        }
      }
    }
  };

  // Continuous subtle animations after initial appearance
  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const waveHandAnimation = {
    rotate: [0, 15, -15, 15, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatDelay: 2,
      ease: "easeInOut"
    }
  };

  // Character SVG components
  const WaveCharacter = () => (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Body */}
      <motion.ellipse
        cx="100" cy="120" rx="40" ry="50"
        fill="#FFD700"
        animate={floatAnimation}
      />
      
      {/* Head */}
      <motion.circle
        cx="100" cy="70" r="35"
        fill="#FF8C00"
        animate={floatAnimation}
      />
      
      {/* Eyes */}
      <circle cx="90" cy="65" r="5" fill="#2C3E50" />
      <circle cx="110" cy="65" r="5" fill="#2C3E50" />
      
      {/* Smile */}
      <motion.path
        d="M 85 75 Q 100 85 115 75"
        stroke="#2C3E50"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        animate={floatAnimation}
      />
      
      {/* Waving hand */}
      <motion.g animate={waveHandAnimation}>
        <ellipse cx="140" cy="100" rx="12" ry="18" fill="#FF8C00" />
        <circle cx="145" cy="85" r="8" fill="#FFD700" />
      </motion.g>
      
      {/* Other hand */}
      <ellipse cx="60" cy="110" rx="12" ry="18" fill="#FF8C00" />
      
      {/* Legs */}
      <rect x="85" y="160" width="12" height="30" rx="6" fill="#4169E1" />
      <rect x="103" y="160" width="12" height="30" rx="6" fill="#4169E1" />
    </svg>
  );

  const JumpCharacter = () => (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Body */}
      <motion.ellipse
        cx="100" cy="110" rx="35" ry="45"
        fill="#4169E1"
        animate={{ scaleY: [1, 0.95, 1], transition: { duration: 0.5, repeat: Infinity } }}
      />
      
      {/* Head */}
      <motion.circle
        cx="100" cy="60" r="32"
        fill="#FF4500"
        animate={{ y: [0, -5, 0], transition: { duration: 0.5, repeat: Infinity } }}
      />
      
      {/* Eyes - excited */}
      <circle cx="92" cy="55" r="4" fill="#2C3E50" />
      <circle cx="108" cy="55" r="4" fill="#2C3E50" />
      
      {/* Happy mouth */}
      <motion.path
        d="M 88 65 Q 100 72 112 65"
        stroke="#2C3E50"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Arms up in excitement */}
      <motion.line
        x1="70" y1="100" x2="55" y2="80"
        stroke="#FF4500"
        strokeWidth="10"
        strokeLinecap="round"
        animate={{ rotate: [0, -10, 0], transition: { duration: 0.5, repeat: Infinity } }}
        style={{ transformOrigin: "70px 100px" }}
      />
      <motion.line
        x1="130" y1="100" x2="145" y2="80"
        stroke="#FF4500"
        strokeWidth="10"
        strokeLinecap="round"
        animate={{ rotate: [0, 10, 0], transition: { duration: 0.5, repeat: Infinity } }}
        style={{ transformOrigin: "130px 100px" }}
      />
      
      {/* Legs */}
      <rect x="88" y="145" width="10" height="25" rx="5" fill="#FFD700" />
      <rect x="102" y="145" width="10" height="25" rx="5" fill="#FFD700" />
    </svg>
  );

  const PointCharacter = () => (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Body */}
      <ellipse cx="100" cy="115" rx="38" ry="48" fill="#9370DB" />
      
      {/* Head */}
      <circle cx="100" cy="65" r="33" fill="#FFD700" />
      
      {/* Eyes */}
      <circle cx="93" cy="60" r="4" fill="#2C3E50" />
      <circle cx="107" cy="60" r="4" fill="#2C3E50" />
      
      {/* Smile */}
      <path
        d="M 88 70 Q 100 78 112 70"
        stroke="#2C3E50"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Pointing arm */}
      <motion.g
        animate={{
          x: [0, 10, 0],
          transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <line x1="135" y1="105" x2="170" y2="95" stroke="#FFD700" strokeWidth="10" strokeLinecap="round" />
        <circle cx="175" cy="93" r="6" fill="#FF8C00" />
      </motion.g>
      
      {/* Other arm */}
      <ellipse cx="65" cy="110" rx="11" ry="16" fill="#FFD700" />
      
      {/* Legs */}
      <rect x="87" y="155" width="11" height="28" rx="5" fill="#FF8C00" />
      <rect x="102" y="155" width="11" height="28" rx="5" fill="#FF8C00" />
    </svg>
  );

  const renderCharacter = () => {
    switch (type) {
      case 'wave':
        return <WaveCharacter />;
      case 'jump':
        return <JumpCharacter />;
      case 'point':
        return <PointCharacter />;
      default:
        return <WaveCharacter />;
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={characterVariants[type].initial}
      animate={isInView ? characterVariants[type].animate : characterVariants[type].initial}
      className={`absolute ${position === 'left' ? 'left-0' : 'right-0'} w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 z-10`}
      style={{
        bottom: '10%',
        pointerEvents: 'none'
      }}
    >
      {renderCharacter()}
    </motion.div>
  );
};

export default AnimatedCharacter;

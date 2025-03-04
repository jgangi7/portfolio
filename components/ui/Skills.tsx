import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLoading } from '../LoadingProvider';

export const Skills = () => {
  const { heroLoaded } = useLoading();
  const [showSkills, setShowSkills] = useState(false);

  useEffect(() => {
    if (heroLoaded) {
      // Add delay after Hero loads
      const timer = setTimeout(() => {
        setShowSkills(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setShowSkills(false);
    }
  }, [heroLoaded]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {showSkills && heroLoaded && (
        <motion.div
          key="skills"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="w-full py-16 bg-white dark:bg-[#0a192f] transition-colors duration-300"
        >
          {/* Your existing Skills content */}
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 
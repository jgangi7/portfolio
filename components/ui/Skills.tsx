import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLoading } from '../LoadingProvider';

export const Skills = () => {
  const { heroLoaded } = useLoading();
  const [showSkills, setShowSkills] = useState(false);

  useEffect(() => {
    if (heroLoaded) {
      // Add 1-second delay after Hero loads
      const timer = setTimeout(() => {
        setShowSkills(true);
      }, 1000);
      return () => clearTimeout(timer);
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
    }
  };

  if (!showSkills) return null;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full py-16 bg-white dark:bg-[#0a192f] transition-colors duration-300"
    >
      {/* Your existing Skills content */}
    </motion.div>
  );
}; 
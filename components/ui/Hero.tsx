import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useLoading } from '../LoadingProvider';
import { SplineScene } from './SplineScene';

export default function Hero() {
  const { setHeroLoaded } = useLoading();
  const [isHeroLoading, setIsHeroLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const t = useTranslations('hero');

  useEffect(() => {
    const handleMouseMove = (event: { clientX: any; clientY: any; }) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsHeroLoading(false);
      // Signal that Hero has loaded
      setHeroLoaded(true);
    }, 2500);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, [setHeroLoaded]);

  const waveAnimation = {
    rotate: [0, 20, -20, 20, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatDelay: 2,
      ease: "easeInOut"
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
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

  return (
    <AnimatePresence mode="wait">
      {isHeroLoading ? (
        <motion.div
          key="loader"
          className="fixed inset-0 bg-white dark:bg-[#0a192f] flex items-center justify-center z-50"
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="relative w-24 h-24"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="absolute inset-0 border-4 border-blue-600/20 dark:border-[#64ffda]/20 rounded-full" />
              <motion.div 
                className="absolute inset-0 border-4 border-transparent border-t-blue-600 dark:border-t-[#64ffda] rounded-full"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            <motion.p
              className="text-gray-800 dark:text-gray-200 text-lg font-medium"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative h-screen flex flex-col items-center justify-start pt-50 sm:pt-20 bg-white dark:bg-[#0a192f] transition-colors duration-300"
        >
          {/* Content container */}
          <motion.div
            variants={containerVariants}
            className="relative z-10 max-w-3xl w-full text-center px-4 sm:px-0"
          >
            <div className="flex flex-col items-center space-y-4">
              <motion.div variants={itemVariants}>
                <div className="flex items-center gap-3 mb-2 justify-center">
                  <motion.span
                    className="text-3xl sm:text-4xl inline-block origin-bottom-right"
                    animate={waveAnimation}
                  >
                    👋
                  </motion.span>
                  <h1 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-[#64ffda] dark:to-[#64ffdb] transition-colors duration-300">
                    {t('greeting')} {t('name')}
                  </h1>
                </div>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="text-gray-800 dark:text-gray-200 text-lg sm:text-xl transition-colors duration-300"
              >
                {t('title')}
              </motion.h2>
            </div>
          </motion.div>
          
          {/* Spline Scene below text */}
          <div className="mt-8 w-full h-full">
            <SplineScene />
          </div>

          {/* Cursor tracer */}
          <motion.div
            className="fixed pointer-events-none w-8 h-8 rounded-full bg-blue-400/30 dark:bg-blue-400/20 mix-blend-screen"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              pointerEvents: 'none',
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
} 
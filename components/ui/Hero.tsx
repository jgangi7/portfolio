import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, createContext, useContext } from 'react';

// Create a context for loading state
export const LoadingContext = createContext<{
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}>({
  isLoading: true,
  setIsLoading: () => {},
});

export const useLoading = () => useContext(LoadingContext);

export const Hero = () => {
  const [isHeroLoading, setIsHeroLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: { clientX: any; clientY: any; }) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsHeroLoading(false);
    }, 2500);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

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
            >
              Loading...
            </motion.p>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative h-[90vh] flex items-center justify-center px-6 pt-16 pb-8 bg-white dark:bg-[#0a192f] transition-colors duration-300"
        >
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
          
          {/* Content container */}
          <motion.div
            variants={containerVariants}
            className="relative z-10 max-w-3xl w-full"
          >
            {/* Main content */}
            <div className="flex flex-col items-start space-y-4">
              <motion.div variants={itemVariants}>
                <div className="flex items-center gap-3 mb-2">
                  <motion.span
                    className="text-4xl inline-block origin-bottom-right"
                    animate={waveAnimation}
                  >
                    👋
                  </motion.span>
                  <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-[#64ffda] dark:to-[#64ffdb] transition-colors duration-300">
                    I'm James
                  </h1>
                </div>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="text-gray-800 dark:text-gray-200 text-xl transition-colors duration-300"
              >
                Fullstack Software Engineer || Computer Science && Math  
              </motion.h2>

              <motion.div
                variants={itemVariants}
                className="text-gray-600 dark:text-[#8892b0] text-lg space-y-3 transition-colors duration-300"
              >
                <p>
                  Hey, I'm James Gangi, a full-stack software engineer based in Northern Virginia / Washington DC.
                </p>
                <p>
                  I am highly interested in all things technology and business related. Beyond
                  coding, I work out, play chess, and love to ski! I'm open to trying new activities
                  the same way that I'm willing to learn new tools and technologies most suitable for
                  the job.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 
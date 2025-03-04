import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const FloatingLetter = ({ letter, index }: { letter: string, index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Create unique motion pattern for each letter
  const randomOffset = Math.sin(index * 0.5) * 30;
  const yOffset = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -800 + randomOffset]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    [1, 0.8, 0]
  );

  return (
    <motion.span
      ref={ref}
      style={{
        y: yOffset,
        opacity,
        display: 'inline-block',
      }}
      className="transition-all duration-300"
    >
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  );
};

const FloatingText = ({ text }: { text: string }) => {
  const letters = Array.from(text);
  
  return (
    <span className="inline">
      {letters.map((letter, i) => (
        <FloatingLetter key={i} letter={letter} index={i} />
      ))}
    </span>
  );
};

export const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: { clientX: any; clientY: any; }) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

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

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-white dark:bg-[#0a192f] flex items-center justify-center transition-colors duration-300"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-16 h-16 border-4 border-blue-600 dark:border-[#64ffda] border-t-transparent rounded-full animate-spin" />
            <p className="text-gray-800 dark:text-gray-200 text-lg font-medium">
              Loading...
            </p>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full"
        >
          <div className="relative min-h-screen flex items-center justify-center px-6 pt-16 pb-8 bg-white dark:bg-[#0a192f] transition-colors duration-300">
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative z-10 max-w-3xl w-full"
            >
              {/* Main content */}
              <div className="flex flex-col items-start space-y-4">
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

                <h2 className="text-gray-800 dark:text-gray-200 text-xl transition-colors duration-300">
                  Fullstack Software Engineer || Computer Science && Math
                </h2>

                <div className="text-gray-600 dark:text-[#8892b0] text-lg space-y-3 transition-colors duration-300">
                  <p>
                    <FloatingText text="Hey, I'm James Gangi, a full-stack software engineer based in Northern Virginia / Washington DC." />
                  </p>
                  <p>
                    <FloatingText text="I am highly interested in all things technology and business related. Beyond coding, I work out, play chess, and love to ski! I'm open to trying new activities the same way that I'm willing to learn new tools and technologies most suitable for the job." />
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 
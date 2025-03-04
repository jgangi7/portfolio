import { motion, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const AnimatedText = ({ text, className, delay = 0 }: { text: string, className?: string, delay?: number }) => {
  const letters = Array.from(text);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  return (
    <div ref={ref} className={`inline-block ${className || ''}`}>
      {letters.map((letter, index) => {
        // Create unique drift patterns for each letter
        const randomOffset = Math.sin(index * 0.5) * 20; // Creates a wave pattern
        const driftDistance = -100 - randomOffset; // Base upward drift plus wave offset
        const driftStart = 0.2 + (index * 0.005); // Staggered start times

        return (
          <motion.span
            key={index}
            className="inline-block"
            style={{
              y: useTransform(
                scrollYProgress,
                [0, driftStart, driftStart + 0.3],
                [0, 0, driftDistance]
              ),
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: delay + (index * 0.02),
              ease: "easeOut"
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        );
      })}
    </div>
  );
};

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: { clientX: any; clientY: any; }) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const waveAnimation = {
    rotate: [0, 20, -20, 20, 0], // Rotation angles for waving
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatDelay: 2,
      ease: "easeInOut"
    }
  };

  return (
    <div className="relative h-[90vh] flex items-center justify-center px-6 pt-16 pb-8 bg-white dark:bg-[#0a192f] transition-colors duration-300">
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
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl w-full"
      >
        {/* Main content */}
        <div className="flex flex-col items-start space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <motion.span
                className="text-4xl inline-block origin-bottom-right"
                animate={waveAnimation}
              >
                👋
              </motion.span>
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-[#64ffda] dark:to-[#64ffdb] transition-colors duration-300">
                <AnimatedText text="I'm James" delay={0.3} />
              </h1>
            </div>
          </motion.div>

          <motion.h2 className="text-gray-800 dark:text-gray-200 text-xl transition-colors duration-300">
            <AnimatedText 
              text="Fullstack Software Engineer || Computer Science && Math"
              delay={0.4}
            />
          </motion.h2>

          <div className="text-gray-600 dark:text-[#8892b0] text-lg space-y-3 transition-colors duration-300">
            <AnimatedText
              text="Hey, I'm James Gangi, a full-stack software engineer based in Northern Virginia / Washington DC."
              delay={0.5}
            />
            <AnimatedText
              text="I am highly interested in all things technology and business related. Beyond coding, I work out, play chess, and love to ski! I'm open to trying new activities the same way that I'm willing to learn new tools and technologies most suitable for the job."
              delay={0.6}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}; 
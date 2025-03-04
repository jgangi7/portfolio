import { motion } from 'framer-motion';

export const Hero = () => {
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
                I'm James
              </h1>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gray-800 dark:text-gray-200 text-xl transition-colors duration-300"
          >
            Fullstack Software Engineer || Computer Science && Math  
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
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
    </div>
  );
}; 
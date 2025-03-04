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
    <div className="relative min-h-screen flex items-center justify-center p-6 bg-white dark:bg-[#0a192f] transition-colors duration-300">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-50/50 to-gray-100/50 dark:from-[#0a192f] dark:via-[#0a192f] dark:to-[#112240] pointer-events-none" />

      {/* Content container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl w-full"
      >
        {/* Main content */}
        <div className="flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
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
            className="text-gray-800 dark:text-gray-200 text-xl mb-6 transition-colors duration-300"
          >
            Software Engineer @ Amazon || Computer Science && Math @ NYU || Polyglot
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-600 dark:text-[#8892b0] text-lg space-y-4 transition-colors duration-300"
          >
            <p>
              Hey, I'm James Gangi, a full-stack software engineer based in New York City.
            </p>
            <p>
              I'm currently a senior studying Computer Science and Math at New York
              University graduating in May 2025.
            </p>
            <p>
              I am highly interested in all things technology and business related. Beyond
              coding, I work out, play chess, and make videos. I'm open to trying new activities
              the same way that I'm willing to learn new tools and technologies most suitable for
              the job.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}; 
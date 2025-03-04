import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';
import { Navigation } from './Navigation';

export const Header = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shouldShow, setShouldShow] = useState(true);

  useEffect(() => {
    const controlHeader = () => {
      if (typeof window !== 'undefined') {
        // Hide header when scrolling down, show when scrolling up
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 80) {
          setShouldShow(false);
        } else {
          setShouldShow(true);
        }
        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeader);

      // Cleanup
      return () => {
        window.removeEventListener('scroll', controlHeader);
      };
    }
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: shouldShow ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="absolute inset-0 bg-white/80 dark:bg-[#0a192f]/90 backdrop-blur-md transition-colors duration-300" />
      <div className="container relative z-10 mx-auto px-4 h-16 flex items-center justify-between">
        <Navigation />
        <ThemeToggle />
      </div>
    </motion.header>
  );
}; 
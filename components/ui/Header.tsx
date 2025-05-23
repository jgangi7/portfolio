import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import LanguageSelector from './LanguageSelector';
import { CoffeeCup } from './CoffeeCup';
import { useRouter } from 'next/router';

export default function Header() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shouldShow, setShouldShow] = useState(true);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const t = useTranslations('navigation');
  const router = useRouter();

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
      setMounted(true);

      // Cleanup
      return () => {
        window.removeEventListener('scroll', controlHeader);
      };
    }
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigation = (href: string) => {
    router.push(href);
  };

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' }
  ];

  if (!mounted) {
    return null;
  }

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: shouldShow ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="absolute inset-0 bg-white/80 dark:bg-[#0a192f]/90 backdrop-blur-md transition-colors duration-300" />
      <div className="container relative z-10 mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left side - Theme toggle and Language selector */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-1.5 md:p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
          >
            {theme === 'dark' ? (
              <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-800 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-800 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </motion.button>
          <LanguageSelector />
        </div>

        {/* Center - Navigation Menu */}
        <nav className="flex items-center space-x-4 md:space-x-6">
          {menuItems.map((item) => (
            <motion.button
              key={item.label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation(item.href)}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-[#64ffda] transition-colors duration-300 text-sm md:text-base lg:text-lg font-medium"
            >
              {item.label}
            </motion.button>
          ))}
        </nav>

        {/* Right side - Coffee Cup */}
        <CoffeeCup />
      </div>
    </motion.header>
  );
} 
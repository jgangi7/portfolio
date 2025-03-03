import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="fixed top-4 right-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      <div className="w-8 h-12 relative">
        {/* Light switch background */}
        <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 rounded-md" />
        
        {/* Switch plate */}
        <motion.div
          animate={{
            y: isDark ? 6 : 0,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute inset-x-0 top-0 h-6 bg-white dark:bg-gray-600 rounded-md shadow-md"
        />

        {/* Switch mount */}
        <div className="absolute inset-x-2 top-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full" />
        
        {/* Icons */}
        <div className="absolute inset-x-0 bottom-1 flex justify-center">
          <motion.div
            animate={{
              opacity: isDark ? 1 : 0,
              scale: isDark ? 1 : 0.5,
            }}
            className="text-yellow-500 text-sm"
          >
            🌙
          </motion.div>
          <motion.div
            animate={{
              opacity: isDark ? 0 : 1,
              scale: isDark ? 0.5 : 1,
            }}
            className="text-yellow-500 text-sm absolute"
          >
            ☀️
          </motion.div>
        </div>
      </div>
    </button>
  );
}; 
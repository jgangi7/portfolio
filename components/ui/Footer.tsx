import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center py-6 mt-12 border-t border-gray-200 dark:border-gray-800"
    >
      <p className="text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} James Gangi. All rights reserved.
      </p>
    </motion.footer>
  );
}; 
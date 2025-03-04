import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { AnimatedLineCanvas } from './AnimatedLine';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0a192f] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100/50 dark:to-[#0a192f]/50" />
      <AnimatedLineCanvas />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <h2 className="text-[#64ffda] font-mono text-lg mb-4">
            {t('greeting')}
          </h2>
          <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t('name')}
          </h1>
          <h2 className="text-5xl font-bold text-gray-700 dark:text-gray-300 mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            {t('description')}
          </p>
        </motion.div>
      </div>
    </div>
  );
} 
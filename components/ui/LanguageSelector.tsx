import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function LanguageSelector() {
  const router = useRouter();
  const t = useTranslations('common.languages');
  const { pathname, asPath, query } = router;

  const changeLanguage = (locale: string) => {
    // Store current scroll position
    const scrollPos = window.scrollY;
    
    // Change the language
    router.push({ pathname, query }, asPath, { locale })
      .then(() => {
        // Restore scroll position after language change
        window.scrollTo(0, scrollPos);
      });
  };

  return (
    <div className="flex space-x-2">
      {['en', 'fr', 'de'].map((locale) => (
        <motion.button
          key={locale}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => changeLanguage(locale)}
          className={`px-2 py-1 rounded ${
            router.locale === locale
              ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          {t(locale)}
        </motion.button>
      ))}
    </div>
  );
} 
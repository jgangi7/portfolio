import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const languages = [
  { code: 'en', translationKey: 'en' },
  { code: 'fr', translationKey: 'fr' },
  { code: 'de', translationKey: 'de' },
];

export default function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = router.locale || 'en';
  const t = useTranslations('common.languages');

  const handleLanguageChange = (locale: string) => {
    // Store current scroll position
    const scrollPos = window.scrollY;
    
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale, scroll: false }).then(() => {
      // Restore scroll position after language change
      window.scrollTo(0, scrollPos);
    });
  };

  return (
    <div className="flex items-center space-x-2">
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleLanguageChange(lang.code)}
          className={`px-2 py-1 text-sm rounded-md transition-colors ${
            currentLocale === lang.code
              ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
          }`}
        >
          {t(lang.translationKey)}
        </motion.button>
      ))}
    </div>
  );
} 
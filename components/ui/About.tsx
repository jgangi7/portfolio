import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export const About = () => {
  const t = useTranslations('about');
  const tc = useTranslations('contact');

  return (
    <section id="about" className="pt-80 bg-white dark:bg-[#0a192f]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          {t('title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 space-y-6 text-gray-700 dark:text-gray-300">
            <p className="text-lg leading-relaxed">
              {t('intro')}
            </p>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('journey.title')}
              </h3>
              <p>
                {t('journey.description')}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('skills.title')}
              </h3>
              <ul className="list-disc list-inside space-y-2">
                {t('skills.list').split('|').map((skill, index) => (
                  <li key={index}>{skill.trim()}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('facts.title')}
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                {t('facts.list').split('|').map((fact, index) => (
                  <li key={index}>{fact.trim()}</li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {tc('title')}
              </h3>
              <div className="space-y-3">
                <a
                  href="https://github.com/jgangi7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                >
                  <span className="mr-2">📦</span> {tc('github')}
                </a>
                <a
                  href="https://linkedin.com/in/james-gangi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                >
                  <span className="mr-2">💼</span> {tc('linkedin')}
                </a>
                <a
                  href="mailto:gangijames18@gmail.com"
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                >
                  <span className="mr-2">📧</span> {tc('email')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}; 
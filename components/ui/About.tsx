import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  // Create arrays for skills and facts using the flattened structure
  const skills = [
    t.raw('whatIDo').skills[0],
    t.raw('whatIDo').skills[1],
    t.raw('whatIDo').skills[2],
    t.raw('whatIDo').skills[3],
    t.raw('whatIDo').skills[4],
  ];

  const facts = [
    t.raw('quickFacts').facts[0],
    t.raw('quickFacts').facts[1],
    t.raw('quickFacts').facts[2],
    t.raw('quickFacts').facts[3],
    t.raw('quickFacts').facts[4],
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">{t('title')}</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">{t('content')}</p>

          {/* Professional Journey */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              {t.raw('professional').title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">{t.raw('professional').content}</p>
          </div>

          {/* What I Do */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              {t.raw('whatIDo').title}
            </h3>
            <ul className="space-y-3">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Facts */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              {t.raw('quickFacts').title}
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {facts.map((fact, index) => (
                <li
                  key={index}
                  className="text-gray-700 dark:text-gray-300 flex items-center space-x-2"
                >
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              {t.raw('connect').title}
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/jgangi7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              >
                {t.raw('connect').github}
              </a>
              <a
                href="https://linkedin.com/in/james-gangi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              >
                {t.raw('connect').linkedin}
              </a>
              <a
                href="mailto:gangijames18@gmail.com"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              >
                {t.raw('connect').email}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 
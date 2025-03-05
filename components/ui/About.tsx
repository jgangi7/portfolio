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
    <section id="about" className="min-h-screen pt-80 pb-20 bg-white dark:bg-[#0a192f]">
      <div className="container mx-auto px-4">
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
              <div className="space-y-4">
                <p>
                  {t.raw('professional').content}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {t.raw('whatIDo').title}
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  {skills.map((skill, index) => (
                    <li key={index} className="leading-relaxed">{skill}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {t.raw('quickFacts').title}
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  {facts.map((fact, index) => (
                    <li key={index} className="leading-relaxed">{fact}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {t.raw('connect').title}
                </h3>
                <div className="space-y-3">
                  <a
                    href="https://github.com/jgangi7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    <span className="mr-2">📦</span> {t.raw('connect').github}
                  </a>
                  <a
                    href="https://linkedin.com/in/james-gangi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    <span className="mr-2">💼</span> {t.raw('connect').linkedin}
                  </a>
                  <a
                    href="mailto:gangijames18@gmail.com"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    <span className="mr-2">📧</span> {t.raw('connect').email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 